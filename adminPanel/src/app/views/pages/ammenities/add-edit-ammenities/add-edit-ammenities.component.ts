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

import * as ammenitiesActions from "../state/ammenities.actions";
import * as fromAmmenities from "../state/ammenities.reducer";

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'kt-add-ammenities',
  templateUrl: './add-edit-ammenities.component.html',
  styleUrls: ['./add-edit-ammenities.component.scss']
})
export class AddAmmenitiesComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditAmmenitiesForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  AMMENITIES_CONST: any;
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {
    this.AMMENITIES_CONST = this.translate.instant('AMMENITIES');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.AMMENITIES'));
    titleService.setTitle(APPNAME + " | " + this.AMMENITIES_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditAmmenitiesForm();
  }
  buildAddEditAmmenitiesForm() {
    this.addEditAmmenitiesForm = this._formBuilder.group({
      ammenities_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // ammenities_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      ammenities_status: ["ACTIVE", []],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditAmmenitiesForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditAmmenitiesForm.value;

      let obj = {
        ammenities_name: [{
          lang: 'EN',
          title: form.ammenities_name_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.ammenities_name_ar
          // }
        ],
        ammenities_status: form.ammenities_status
      };

      this.stateSubscription = this.store.dispatch(new ammenitiesActions.AddAmmenities(obj))
      this.stateSubscription = this.store.pipe(select(fromAmmenities.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/ammenities/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditAmmenitiesForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }
}

@Component({
  selector: 'kt-edit-ammenities',
  templateUrl: './add-edit-ammenities.component.html',
  styleUrls: ['./add-edit-ammenities.component.scss']
})
export class EditAmmenitiesComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditAmmenitiesForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  AMMENITIES_CONST: any;
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
    private translate: TranslateService
  ) {
    this.AMMENITIES_CONST = this.translate.instant('AMMENITIES');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.AMMENITIES'));
    titleService.setTitle(APPNAME + " | " + this.AMMENITIES_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditAmmenitiesForm();
    this.getAmmenitiesDetails();
  }

  buildAddEditAmmenitiesForm() {
    this.addEditAmmenitiesForm = this._formBuilder.group({
      ammenities_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // ammenities_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      ammenities_status: ["ACTIVE", []]
    });
  }

  getAmmenitiesDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new ammenitiesActions.LoadAmmenities(this.id));

    this.stateSubscription = this.store.pipe(select(fromAmmenities.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            ammenities_name_en: result.ammenities_name.filter((obj) => obj.lang == "EN")[0].title,
            // ammenities_name_ar: result.ammenities_name.filter((obj) => obj.lang == "AR")[0].title,
            ammenities_status: result.ammenities_status != null && result.ammenities_status != undefined ? result.ammenities_status : "",
          };
          await this.addEditAmmenitiesForm.patchValue(fd);
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
    if (this.addEditAmmenitiesForm.valid) {

      const form = this.addEditAmmenitiesForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          ammenities_name: [{
            lang: 'EN',
            title: form.ammenities_name_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.ammenities_name_ar
            // }
          ],
          ammenities_status: form.ammenities_status
        }
      };

      this.stateSubscription = this.store.dispatch(new ammenitiesActions.UpdateAmmenities(obj))

      this.stateSubscription = this.store.pipe(select(fromAmmenities.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/ammenities/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditAmmenitiesForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }
}
