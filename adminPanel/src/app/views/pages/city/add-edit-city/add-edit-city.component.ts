import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';

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

import * as cityActions from "../state/city.actions";
import * as fromCity from "../state/city.reducer"

import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { CityService } from '../city.service'
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'kt-add-city',
  templateUrl: './add-edit-city.component.html',
  styleUrls: ['./add-edit-city.component.scss']
})
export class AddCityComponent implements OnInit {
  isAdd: Boolean = true;
  addEditCityForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  CITY_CONST: any;
  id: any;
  countries: any = [];
  timezones: any = []
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
    private countryService: CountryService,
    private cityService: CityService
  ) {

    this.CITY_CONST = this.translate.instant('CITY');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.CITY'));
    titleService.setTitle(APPNAME + " | " + this.CITY_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditCityForm();
    // this.getAllCountries();
    this.getAllTimezone();
  }

  buildAddEditCityForm() {
    this.addEditCityForm = this._formBuilder.group({
      city_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // city_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      city_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //  city_countryId: ["", [Validators.required]],
      city_status: ["ACTIVE", [Validators.required]],
      city_timezoneId: ["", [Validators.required]],
    });
  }

  // getAllCountries() {
  //   Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data['code'] == 200) {
  //         this.countries = data['data'];

  //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
  //           this.dtr.detectChanges();
  //         }
  //         Helpers.setLoading(false);
  //       } else {
  //         Helpers.setLoading(false);
  //         this.toastr.error(data['message']);
  //       }
  //     }
  //   });
  // }

  getAllTimezone() {
    // Helpers.setLoading(true);
    this.cityService.getAllTimezone().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.timezones = data['data'];

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          // Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditCityForm.valid) {

      const form = await this.addEditCityForm.value;

      Helpers.setLoading(true);

      let obj = {
        city_name: [{
          lang: 'EN',
          title: form.city_name_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.city_name_ar
          // }
        ],
        city_code: form.city_code,
        city_timezoneId: form.city_timezoneId,
        city_countryId: environment.webDefaultCountry,
        city_status: form.city_status
      };

      this.stateSubscription = this.store.dispatch(new cityActions.AddCity(obj))

      this.stateSubscription = this.store.pipe(select(fromCity.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/city/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });

    }  else if (!this.addEditCityForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }

}


@Component({
  selector: 'kt-edit-city',
  templateUrl: './add-edit-city.component.html',
  styleUrls: ['./add-edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  isAdd: Boolean = false;
  addEditCityForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  id: any;
  CITY_CONST: any;
  countries: any = [];
  timezones: any = []
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
    private countryService: CountryService,
    private cityService: CityService
  ) {

    this.CITY_CONST = this.translate.instant('CITY');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.CITY'));
    titleService.setTitle(APPNAME + " | " + this.CITY_CONST.MODULE_NAME);
  }


  ngOnInit() {
    this.buildAddEditCityForm();
    // this.getAllCountries();
    this.getCityDetails();
    this.getAllTimezone();
  }


  buildAddEditCityForm() {
    this.addEditCityForm = this._formBuilder.group({
      city_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // city_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      city_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // city_countryId: ["", [Validators.required]],
      city_status: ["ACTIVE", [Validators.required]],
      city_timezoneId: ["", [Validators.required]],
    });
  }

  getCityDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new cityActions.LoadCity(this.id));

    this.stateSubscription = this.store.pipe(select(fromCity.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          let fd = {
            city_name_en: result.city_name.filter((obj) => obj.lang == "EN")[0].title,
            // city_name_ar: result.city_name.filter((obj) => obj.lang == "AR")[0].title,
            city_code: result.city_code,
            // city_countryId: result.city_countryId,
            city_status: result.city_status != null && result.city_status != undefined ? result.city_status : "",
            city_timezoneId: result.city_timezoneId,
          };
          await this.addEditCityForm.patchValue(fd);
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

  // getAllCountries() {
  //   Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data['code'] == 200) {
  //         this.countries = data['data'];

  //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
  //           this.dtr.detectChanges();
  //         }
  //         Helpers.setLoading(false);
  //       } else {
  //         Helpers.setLoading(false);
  //         this.toastr.error(data['message']);
  //       }
  //     }
  //   });
  // }

  getAllTimezone() {
    // Helpers.setLoading(true);
    this.cityService.getAllTimezone().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.timezones = data['data'];

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          // Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditCityForm.valid) {

      const form = this.addEditCityForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          city_name: [{
            lang: 'EN',
            title: form.city_name_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.city_name_ar
            // }
          ],
          city_code: form.city_code,
          city_timezoneId: form.city_timezoneId,
          city_countryId: environment.webDefaultCountry,
          city_status: form.city_status
        }
      };

      this.stateSubscription = this.store.dispatch(new cityActions.UpdateCity(obj))

      this.stateSubscription = this.store.pipe(select(fromCity.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/city/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });

    } else if (!this.addEditCityForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }
}