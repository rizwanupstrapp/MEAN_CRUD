import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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

import * as countryActions from "../state/country.actions";
import * as fromCountry from "../state/country.reducer"
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';

@Component({
  selector: 'kt-add-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.scss']
})

export class AddCountryComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditCountryForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  COUNTRY_CONST: any;
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {

    this.COUNTRY_CONST = this.translate.instant('COUNTRY');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.COUNTRY'));
    titleService.setTitle(APPNAME + " | " + this.COUNTRY_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditCountryForm();
    this.Editor = ClassicEditor;
  }

  buildAddEditCountryForm() {
    this.addEditCountryForm = this._formBuilder.group({
      country_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  country_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],

      country_isd_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // country_isd_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],

      country_iso_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // country_iso_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],

      country_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_phoneFormat: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      country_phoneHint: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_currency: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_lat: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_long: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_status: ["ACTIVE", []],
      country_riderDirectionAPILimit: ["", [Validators.required]],
      country_driverDirectionAPILimit: ["", [Validators.required]]
    });
  }


  async onSubmit() {
    this.submitted = true;
    if (this.addEditCountryForm.valid) {

      const form = await this.addEditCountryForm.value;

      Helpers.setLoading(true);

      let obj = {
        country_name: [{
          lang: 'EN',
          title: form.country_name_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.country_name_ar
          // }
        ],
        country_isd: [{
          lang: 'EN',
          isd: form.country_isd_en
        }
          // , {
          //   lang: 'AR',
          //   isd: form.country_isd_ar
          // }
        ],
        country_iso: [{
          lang: 'EN',
          title: form.country_iso_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.country_iso_ar
          // }
        ],
        country_code: form.country_code,
        country_phoneFormat: form.country_phoneFormat,
        country_phoneHint: form.country_phoneHint,
        country_currency: form.country_currency,
        country_lat: form.country_lat,
        country_long: form.country_long,
        country_status: form.country_status,
        country_riderDirectionAPILimit: form.country_riderDirectionAPILimit,
        country_driverDirectionAPILimit: form.country_driverDirectionAPILimit
      };

      this.stateSubscription = this.store.dispatch(new countryActions.AddCountry(obj))

      this.stateSubscription = this.store.pipe(select(fromCountry.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/country/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });

    } else if (!this.addEditCountryForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }

}

@Component({
  selector: 'kt-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {


  isAdd: Boolean = false;
  addEditCountryForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  id: any;
  COUNTRY_CONST: any;

  constructor(private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {

    this.COUNTRY_CONST = this.translate.instant('COUNTRY');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.COUNTRY'));
    titleService.setTitle(APPNAME + " | " + this.COUNTRY_CONST.MODULE_NAME);
  }


  ngOnInit() {
    this.buildAddEditCountryForm();
    this.getCountryDetails();

  }

  buildAddEditCountryForm() {
    this.addEditCountryForm = this._formBuilder.group({
      country_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  country_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],

      country_isd_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // country_isd_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],

      country_iso_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // country_iso_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],

      country_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_phoneFormat: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      country_phoneHint: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_currency: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_lat: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_long: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      country_status: ["ACTIVE", []],
      country_riderDirectionAPILimit: ["", [Validators.required]],
      country_driverDirectionAPILimit: ["", [Validators.required]]
    });
  }

  getCountryDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new countryActions.LoadCountry(this.id));

    this.stateSubscription = this.store.pipe(select(fromCountry.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          let fd = {
            country_name_en: result.country_name.filter((obj) => obj.lang == "EN")[0].title,
            // country_name_ar: result.country_name.filter((obj) => obj.lang == "AR")[0].title,
            country_isd_en: result.country_isd.filter((obj) => obj.lang == "EN")[0].isd,
            // country_isd_ar: result.country_isd.filter((obj) => obj.lang == "AR")[0].isd,
            country_iso_en: result.country_iso.filter((obj) => obj.lang == "EN")[0].title,
            // country_iso_ar: result.country_iso.filter((obj) => obj.lang == "AR")[0].title,
            country_code: result.country_code,
            country_phoneFormat: result.country_phoneFormat,
            country_phoneHint: result.country_phoneHint,
            country_currency: result.country_currency,
            country_lat: result.country_lat,
            country_long: result.country_long,
            country_status: result.country_status != null && result.country_status != undefined ? result.country_status : "",
            country_riderDirectionAPILimit: result.country_riderDirectionAPILimit,
            country_driverDirectionAPILimit: result.country_driverDirectionAPILimit
          };
          await this.addEditCountryForm.patchValue(fd);
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
    if (this.addEditCountryForm.valid) {

      const form = this.addEditCountryForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          country_name: [{
            lang: 'EN',
            title: form.country_name_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.country_name_ar
            // }
          ],
          country_isd: [{
            lang: 'EN',
            isd: form.country_isd_en
          }
            // , {
            //   lang: 'AR',
            //   isd: form.country_isd_ar
            // }
          ],
          country_iso: [{
            lang: 'EN',
            title: form.country_iso_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.country_iso_ar
            // }
          ],
          country_code: form.country_code,
          country_phoneFormat: form.country_phoneFormat,
          country_phoneHint: form.country_phoneHint,
          country_currency: form.country_currency,
          country_lat: form.country_lat,
          country_long: form.country_long,
          country_status: form.country_status,
          country_riderDirectionAPILimit: form.country_riderDirectionAPILimit,
          country_driverDirectionAPILimit: form.country_driverDirectionAPILimit
        }
      };

      this.stateSubscription = this.store.dispatch(new countryActions.UpdateCountry(obj))

      this.stateSubscription = this.store.pipe(select(fromCountry.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/country/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });

    } else if (!this.addEditCountryForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }

}
