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
import * as smsTemplateActions from "../state/smsTemplate.actions";
import * as fromSMSTemplate from "../state/smsTemplate.reducer"
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { CityService } from '../../city/city.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'kt-add-template',
  templateUrl: './add-edit-sms-template.component.html',
  styleUrls: ['./add-edit-sms-template.component.scss']
})
export class AddSMSTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditSMSTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  SMS_TEMPLATE_CONST: any;
  id: any = [];
  countries: any = [];
  cities: any = [];
  countryCities: any = [];
  //variable declared  yt
  selectedItemsCity: any = [];
  city_countryId: any = [];


  dropdownSettingsCountry: any = {};
  dropdownSettingsCity: any = {};
  currentSelected: {};

  selectedOption: string;
  printedOption: string;

  val: string
  states: any;

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
    this.SMS_TEMPLATE_CONST = this.translate.instant('TEMPLATE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.SMS_TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.SMS_TEMPLATE_CONST.SMS_MODULE_NAME);



  }
  // check box----------
  ngOnInit() {
    this.buildAddEditSMSTemplateForm();
    // this.getAllCountries();
    this.changeCountry(environment.webDefaultCountry)
    this.Editor = ClassicEditor;
    this.selectedItemsCity = [];
    this.dropdownSettingsCity = {
      singleSelection: false,
      text: "Select Cities",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }
  //yt
  // getAllCountries() {
  //   // Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data["code"] == 200) {
  //         this.countries = data["data"];
  //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
  //           this.dtr.detectChanges();
  //         }
  //         Helpers.setLoading(false);
  //       } else {
  //         Helpers.setLoading(false);
  //         this.toastr.error(data["message"]);
  //       }
  //     }
  //   });
  // }

  async changeCountry(country) {
    Helpers.setLoading(true);
    if (country) {
      let countryId = { city_countryId: country };
      await this.cityService
        .getCountryCities(countryId)
        .subscribe(async (data) => {
          if (data["code"] == 200) {
            let citydata = await data["data"];
            citydata.forEach(element => {
              this.countryCities.push({ id: element._id, itemName: element.city_name })
            });

            Helpers.setLoading(false);
            this.dtr.detectChanges();
          }
        });
    }
  }

  onItemCitySelect(item: any) {
    this.selectedItemsCity[item];
  }

  onItemCityDeSelect(item: any) {
    this.selectedItemsCity.filter(function (el) {
      if (el.id == item.id) {
        delete this.selectedItemsCity[el];
      }
    });
  }
  onCitySelectAll(items: any) {
  }
  onCityDeSelectAll(items: any) {
  }


  //
  buildAddEditSMSTemplateForm() {
    this.addEditSMSTemplateForm = this._formBuilder.group({
      smsTemplate_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      smsTemplate_content_en: ["", [Validators.required]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // smsTemplate_code: ["", [Validators.required]],
      smsTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // smsTemplate_isCountrySpecific: ["", [Validators.required]],
      // template_countryId: ["", [Validators.required]],
      smsTemplate_cityId: ["", [Validators.required]],
      smsTemplate_status: ["ACTIVE", [Validators.required]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditSMSTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditSMSTemplateForm.value;
      Helpers.setLoading(true);

      form.smsTemplate_cityId.forEach(element => {
        citiesArray.push(element.id)
      });
      let obj = {
        smsTemplate_title: [{
          lang: environment.webDefaultLang,
          title: form.smsTemplate_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        smsTemplate_content: [{
          lang: environment.webDefaultLang,
          title: form.smsTemplate_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        // smsTemplate_code: form.smsTemplate_code,
        smsTemplate_slug: form.smsTemplate_slug,
        // smsTemplate_isCountrySpecific: form.smsTemplate_isCountrySpecific,
        smsTemplate_countryId: environment.webDefaultCountry,
        smsTemplate_cityId: citiesArray,
        smsTemplate_status: form.smsTemplate_status
      };
      this.stateSubscription = this.store.dispatch(new smsTemplateActions.AddSMSTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromSMSTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/sms-template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditSMSTemplateForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
@Component({
  selector: 'kt-edit-template',
  templateUrl: './add-edit-sms-template.component.html',
  styleUrls: ['./add-edit-sms-template.component.scss']
})
export class EditSMSTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditSMSTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  SMS_TEMPLATE_CONST: any;
  id: any = [];
  countries: any = [];
  cities: any = [];
  countryCities: any = [];
  //variable declared  yt
  selectedItemsCity: any = [];
  city_countryId: any = [];


  dropdownSettingsCountry: any = {};
  dropdownSettingsCity: any = {};
  currentSelected: {};

  selectedOption: string;
  printedOption: string;

  val: string
  states: any;
  smsTemplateData: any;

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
    private cityService: CityService,
    private ref: ChangeDetectorRef
  ) {
    this.SMS_TEMPLATE_CONST = this.translate.instant('TEMPLATE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.SMS_TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.SMS_TEMPLATE_CONST.SMS_MODULE_NAME);



  }
  // check box----------
  ngOnInit() {
    this.buildAddEditSMSTemplateForm();
    this.getSMSTemplateDetails();
    // this.getAllCountries();
    // this.changeCountry(environment.webDefaultCountry)
    this.Editor = ClassicEditor;
    this.selectedItemsCity = [];
    this.dropdownSettingsCity = {
      singleSelection: false,
      text: "Select Cities",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }
  //yt
  // getAllCountries() {
  //   // Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data["code"] == 200) {
  //         this.countries = data["data"];
  //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
  //           this.dtr.detectChanges();
  //         }
  //         Helpers.setLoading(false);
  //       } else {
  //         Helpers.setLoading(false);
  //         this.toastr.error(data["message"]);
  //       }
  //     }
  //   });
  // }

  async changeCountry(country) {
    Helpers.setLoading(true);
    if (country) {
      let countryId = { city_countryId: country };
      await this.cityService.getCountryCities(countryId).subscribe(async (data) => {
        if (data["code"] == 200) {

          data['data'].forEach(element => {
            this.countryCities.push({
              id: element._id,
              itemName: element.city_name
            })
            const found = this.smsTemplateData.smsTemplate_cityId.find(city => city == element._id);
            if (found) {
              this.selectedItemsCity.push({ id: element._id, itemName: element.city_name });
            }
          });

          this.addEditSMSTemplateForm.patchValue({
            city_name: this.selectedItemsCity
          })

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      });
    }
  }

  onItemCitySelect(item: any) {
    this.selectedItemsCity[item];
  }

  onItemCityDeSelect(item: any) {
    this.selectedItemsCity.filter(function (el) {
      if (el.id == item.id) {
        delete this.selectedItemsCity[el];
      }
    });
  }
  onCitySelectAll(items: any) {
  }
  onCityDeSelectAll(items: any) {
  }


  //
  buildAddEditSMSTemplateForm() {
    this.addEditSMSTemplateForm = this._formBuilder.group({
      smsTemplate_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      smsTemplate_content_en: ["", [Validators.required]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // smsTemplate_code: ["", [Validators.required]],
      // smsTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // smsTemplate_isCountrySpecific: ["", [Validators.required]],
      // template_countryId: ["", [Validators.required]],
      smsTemplate_cityId: ["", [Validators.required]],
      smsTemplate_status: ["ACTIVE", [Validators.required]],
    });
  }

  getSMSTemplateDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new smsTemplateActions.LoadSMSTemplate(this.id));
    this.stateSubscription = this.store.pipe(select(fromSMSTemplate.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          this.smsTemplateData = data['data'];

          let fd = {
            smsTemplate_title_en: result.smsTemplate_title.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
            smsTemplate_content_en: result.smsTemplate_content.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
            // smsTemplate_code: result.smsTemplate_code,
            // smsTemplate_slug: result.smsTemplate_slug,
            // smsTemplate_isCountrySpecific: result.smsTemplate_isCountrySpecific,
            // smsTemplate_countryId: result.smsTemplate_countryId,
            smsTemplate_status: result.smsTemplate_status
          };
          // to fecth details for country
          await this.changeCountry(result.smsTemplate_countryId)
          await this.addEditSMSTemplateForm.patchValue(fd);
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

  removeValidator() {
    this.addEditSMSTemplateForm
      .get('smsTemplate_cityId')
      .setValidators([]);
    this.addEditSMSTemplateForm.get('smsTemplate_cityId').updateValueAndValidity();
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditSMSTemplateForm.value.smsTemplate_cityId.length) {
      this.removeValidator();
    }
    if (this.addEditSMSTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditSMSTemplateForm.value;
      Helpers.setLoading(true);

      form.smsTemplate_cityId.forEach(element => {
        citiesArray.push(element.id)
      });
      let fd = {
        smsTemplate_title: [{
          lang: environment.webDefaultLang,
          title: form.smsTemplate_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        smsTemplate_content: [{
          lang: environment.webDefaultLang,
          title: form.smsTemplate_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        // smsTemplate_code: form.smsTemplate_code,
        // smsTemplate_slug: form.smsTemplate_slug,
        // smsTemplate_isCountrySpecific: form.smsTemplate_isCountrySpecific,
        smsTemplate_countryId: environment.webDefaultCountry,
        smsTemplate_cityId: citiesArray,
        smsTemplate_status: form.smsTemplate_status
      };

      let obj = {
        id: this.id,
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new smsTemplateActions.UpdateSMSTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromSMSTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/sms-template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditSMSTemplateForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
