import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';

import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import *as modelActions from "../state/model.actions";
import *as fromModel from "../state/model.reducer";

import { TranslateService } from "@ngx-translate/core";
import { BrandService } from "../../brand/brand.service";
import { ModelService } from "../model.service";
import { validataion } from '../../../../helper/regular.expression';
import { async } from '@angular/core/testing';

@Component({
    selector: 'kt-add-model',
    templateUrl: './add-edit-model.component.html',
    styleUrls: ['./add-edit-model.component.scss']
})
export class AddModelComponent implements OnInit {
    isAdd: Boolean = true;
    addEditModelForm: FormGroup;
    submitted: Boolean = false;
    stateSubscription: any;
    element: any = false;
    MODEL_CONST: any;
    id: any;
    brands: any = [];

    colors: any = [];
    selectedItemsColor: any = [];
    dropdownSettingsColor = {};

    constructor(
        private subheaderService: SubheaderService,
        private _formBuilder: FormBuilder,
        private router: Router,
        public localStorageService: LocalstorageService,
        private toastr: ToastrService,
        private dtr: ChangeDetectorRef,
        private store: Store<{ school: any }>,
        titleService: Title,
        private translate: TranslateService,
        private brandService: BrandService,
        private modelService: ModelService
    ) {
        this.MODEL_CONST = this.translate.instant('MODEL');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.MODEL'));
        titleService.setTitle(APPNAME + "|" + this.MODEL_CONST.MODULE_NAME);
    }

    ngOnInit() {
        this.buildAddEditModelForm();
        this.getAllBrand();
        this.getAllColor();

        this.dropdownSettingsColor = {
            singleSelection: false,
            text: "Select Color",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    }

    onItemColorSelect(item: any) {
        this.selectedItemsColor[item];
    }

    onItemColorDeSelect(item: any) {
        this.selectedItemsColor.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsColor[el];
            }
        });
    }
    onColorSelectAll(items: any) {

    }
    onColorDeSelectAll(items: any) {

    }

    buildAddEditModelForm() {
        this.addEditModelForm = this._formBuilder.group({
            model_brandId: ["", [Validators.required]],
            model_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            model_color: ["", [Validators.required]],
            model_status: ["ACTIVE", []]
        });
    }

    getAllBrand() {
        Helpers.setLoading(true);
        this.brandService.getAllBrands().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    this.brands = data['data'];

                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }

    getAllColor() {
        Helpers.setLoading(true);
        this.modelService.getAllColors().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {

                    data['data'].forEach(element => {
                        this.colors.push({
                            id: element._id,
                            itemName: element.color_name
                        })
                    });

                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }

    async onSubmit() {
        this.submitted = true;
        if (this.addEditModelForm.valid) {
            Helpers.setLoading(true);

            const form = this.addEditModelForm.value;

            let colorsArray = [];
            form.model_color.forEach(element => {
                colorsArray.push(element.id)
            });

            let obj = {
                model_brandId: form.model_brandId,
                model_name: form.model_name,
                model_color: colorsArray,
                model_status: form.model_status
            };

            this.stateSubscription = this.store.dispatch(new modelActions.AddModel(obj));
            this.stateSubscription = this.store.pipe(select(fromModel.selectPageState)).subscribe((data) => {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        Helpers.setLoading(false);
                        this.toastr.success(data['message']);
                        this.stateSubscription.unsubscribe();
                        this.router.navigate(['/model/list']);
                    } else {
                        Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                    }
                }
            });
        } else if (!this.addEditModelForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
    }

}

//  Edit 
@Component({
    selector: 'kt-edit-model',
    templateUrl: './add-edit-model.component.html',
    styleUrls: ['./add-edit-model.component.scss']
})
export class EditModelComponent implements OnInit {
    isAdd: Boolean = false;
    addEditModelForm: FormGroup;
    submitted: Boolean = false;
    stateSubscription: any;
    element: any = false;
    MODEL_CONST: any;
    id: any;
    brands: any = [];

    colors: any = [];
    selectedItemsColor: any = [];
    dropdownSettingsColor = {};
    modelData: any
    constructor(
        private subheaderService: SubheaderService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private _route: ActivatedRoute,
        public localStorageService: LocalstorageService,
        private toastr: ToastrService,
        private dtr: ChangeDetectorRef,
        private store: Store<{ school: any }>,
        titleService: Title,
        private translate: TranslateService,
        private brandService: BrandService,
        private modelService: ModelService
    ) {
        this.MODEL_CONST = this.translate.instant('MODEL');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.MODEL'));
        titleService.setTitle(APPNAME + "|" + this.MODEL_CONST.MODULE_NAME);
    }

    ngOnInit() {
        // this.getAllColor();
        this.buildAddEditModelForm();
        this.getAllBrand();
        this.getModelDetail();


        this.dropdownSettingsColor = {
            singleSelection: false,
            text: "Select Color",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    }

    onItemColorSelect(item: any) {
        this.selectedItemsColor[item];
    }

    onItemColorDeSelect(item: any) {
        this.selectedItemsColor.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsColor[el];
            }
        });
    }
    onColorSelectAll(items: any) {

    }
    onColorDeSelectAll(items: any) {

    }

    buildAddEditModelForm() {
        this.addEditModelForm = this._formBuilder.group({
            model_brandId: ["", [Validators.required]],
            model_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            model_color: ["", [Validators.required]],
            model_status: ["ACTIVE", []]
        });
    }

    getModelDetail() {
        this.id = this._route.snapshot.params['id'];
        Helpers.setLoading(true);

        this.stateSubscription = this.store.dispatch(new modelActions.LoadModel(this.id));
        this.stateSubscription = this.store.pipe(select(fromModel.selectPageState)).subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    let result = data['data'];
                    this.modelData = data['data']
                    let fd = {
                        model_brandId: result.model_brandId != null && result.model_brandId != undefined ? result.model_brandId : "",
                        model_name: result.model_name,
                        // model_color: result.model_color,
                        model_status: result.model_status != null && result.model_status != undefined ? result.model_status : "",
                    };
                    await this.addEditModelForm.patchValue(fd);

                    await this.getAllColor();
                    // to fecth details for service type
                    // this.colors.forEach(element => {
                    //     if (result.model_color.indexOf(element.id)) {
                    //         this.selectedItemsColor.push(element);

                    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                    //             this.dtr.detectChanges();
                    //         }
                    //     }

                    // });
                    Helpers.setLoading(false);
                    this.stateSubscription.unsubscribe();
                } else {
                    Helpers.setLoading(false);

                    this.toastr.error(data['message']);
                    this.stateSubscription.unsubscribe();
                }
            }
        })
    }

    getAllBrand() {
        Helpers.setLoading(true);
        this.brandService.getAllBrands().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    this.brands = data['data'];

                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }

    getAllColor() {
        Helpers.setLoading(true);
        this.modelService.getAllColors().subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {

                    data['data'].forEach(element => {
                        this.colors.push({
                            id: element._id,
                            itemName: element.color_name
                        })
                        const found = this.modelData.model_color.find(color => color == element._id);
                        if (found) {
                            this.selectedItemsColor.push({ id: element._id, itemName: element.color_name });
                        }
                    });
                    this.addEditModelForm.patchValue({
                        model_color: this.selectedItemsColor
                    })

                    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                    }
                    Helpers.setLoading(false);
                } else {
                    Helpers.setLoading(false);
                    this.toastr.error(data['message']);
                }
            }
        });
    }

    async onSubmit() {
        this.submitted = true;
        if (this.addEditModelForm.valid) {
            Helpers.setLoading(true);

            const form = this.addEditModelForm.value;

            let colorsArray = [];
            form.model_color.forEach(element => {
                colorsArray.push(element.id)
            });

            let obj = {
                id: this.id,
                data: {
                    model_brandId: form.model_brandId,
                    model_name: form.model_name,
                    model_color: colorsArray,
                    model_status: form.model_status
                }

            };

            this.stateSubscription = this.store.dispatch(new modelActions.UpdateModel(obj));
            this.stateSubscription = this.store.pipe(select(fromModel.selectPageState)).subscribe((data) => {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        Helpers.setLoading(false);
                        this.toastr.success(data['message']);
                        this.stateSubscription.unsubscribe();
                        this.router.navigate(['/model/list']);
                    } else {
                        Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                    }
                }
            });
        } else if (!this.addEditModelForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
    }

}
