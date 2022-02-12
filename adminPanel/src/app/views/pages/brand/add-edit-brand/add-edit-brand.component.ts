import { Component, OnInit } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';

import * as brandActions from "../state/brand.actions";
import * as fromBrand from "../state/brand.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'kt-add-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditBrandForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  BRAND_CONST: any;
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private brandService: BrandService
  ) {
    this.BRAND_CONST = this.translate.instant('BRAND');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.BRAND'));
    titleService.setTitle(APPNAME + " | " + this.BRAND_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditBrandForm();
    this.Editor = ClassicEditor;
  }
  buildAddEditBrandForm() {
    this.addEditBrandForm = this._formBuilder.group({
      brand_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      brand_status: ["ACTIVE", []],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditBrandForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditBrandForm.value;

      let obj = {
        brand_name: form.brand_name,
        brand_status: form.brand_status
      };

      this.stateSubscription = this.store.dispatch(new brandActions.AddBrand(obj))
      this.stateSubscription = this.store.pipe(select(fromBrand.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/brand/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditBrandForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }

}

@Component({
  selector: 'kt-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.scss']
})
export class EditBrandComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditBrandForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  BRAND_CONST: any;
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private brandService: BrandService
  ) {
    this.BRAND_CONST = this.translate.instant('BRAND');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.BRAND'));
    titleService.setTitle(APPNAME + " | " + this.BRAND_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditBrandForm();
    this.getBrandDetails();
  }

  buildAddEditBrandForm() {
    this.addEditBrandForm = this._formBuilder.group({
      brand_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      brand_status: ["ACTIVE", []],
    });
  }

  getBrandDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new brandActions.LoadBrand(this.id));

    this.stateSubscription = this.store.pipe(select(fromBrand.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            brand_name: result.brand_name,
            brand_status: result.brand_status != null && result.brand_status != undefined ? result.brand_status : "",
          };
          await this.addEditBrandForm.patchValue(fd);
          Helpers.setLoading(false);

          this.stateSubscription.unsubscribe();

        } else {
          Helpers.setLoading(false);

          this.toastr.error(data['message']);
          this.stateSubscription.unsubscribe();

        }
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditBrandForm.valid) {

      const form = this.addEditBrandForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          brand_name: form.brand_name,
          brand_status: form.brand_status
        }
      };

      this.stateSubscription = this.store.dispatch(new brandActions.UpdateBrand(obj))

      this.stateSubscription = this.store.pipe(select(fromBrand.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/brand/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditBrandForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }

}
