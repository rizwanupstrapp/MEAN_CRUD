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
import * as notificationTemplateActions from "../state/notificationTemplate.actions";
import * as fromNotificationTemplate from "../state/notificationTemplate.reducer"
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { CityService } from '../../city/city.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'kt-add-template',
  templateUrl: './add-edit-notification-template.component.html',
  styleUrls: ['./add-edit-notification-template.component.scss']
})
export class AddNotificationTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditNotificationTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  NOTIFICATION_TEMPLATE_CONST: any;
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
    this.NOTIFICATION_TEMPLATE_CONST = this.translate.instant('TEMPLATE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.NOTIFICATION_TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.NOTIFICATION_TEMPLATE_CONST.NOTIFICATION_MODULE_NAME);



  }
  // check box----------
  ngOnInit() {
    this.buildAddEditNotificationTemplateForm();
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
  buildAddEditNotificationTemplateForm() {
    this.addEditNotificationTemplateForm = this._formBuilder.group({
      notificationTemplate_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      notificationTemplate_content_en: ["", [Validators.required]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // notificationTemplate_code: ["", [Validators.required]],
      notificationTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // notificationTemplate_isCountrySpecific: ["", [Validators.required]],
      // template_countryId: ["", [Validators.required]],
      notificationTemplate_cityId: ["", [Validators.required]],
      notificationTemplate_status: ["ACTIVE", [Validators.required]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditNotificationTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditNotificationTemplateForm.value;
      Helpers.setLoading(true);

      form.notificationTemplate_cityId.forEach(element => {
        citiesArray.push(element.id)
      });
      let obj = {
        notificationTemplate_title: [{
          lang: environment.webDefaultLang,
          title: form.notificationTemplate_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        notificationTemplate_content: [{
          lang: environment.webDefaultLang,
          title: form.notificationTemplate_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        // notificationTemplate_code: form.notificationTemplate_code,
        notificationTemplate_slug: form.notificationTemplate_slug,
        // notificationTemplate_isCountrySpecific: form.notificationTemplate_isCountrySpecific,
        notificationTemplate_countryId: environment.webDefaultCountry,
        notificationTemplate_cityId: citiesArray,
        notificationTemplate_status: form.notificationTemplate_status
      };
      this.stateSubscription = this.store.dispatch(new notificationTemplateActions.AddNotificationTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromNotificationTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/notification-template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditNotificationTemplateForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
@Component({
  selector: 'kt-edit-template',
  templateUrl: './add-edit-notification-template.component.html',
  styleUrls: ['./add-edit-notification-template.component.scss']
})
export class EditNotificationTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditNotificationTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  NOTIFICATION_TEMPLATE_CONST: any;
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
  notificationTemplateData: any;

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
    this.NOTIFICATION_TEMPLATE_CONST = this.translate.instant('TEMPLATE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.NOTIFICATION_TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.NOTIFICATION_TEMPLATE_CONST.NOTIFICATION_MODULE_NAME);



  }
  // check box----------
  ngOnInit() {
    this.buildAddEditNotificationTemplateForm();
    this.getNotificationTemplateDetails();
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
            const found = this.notificationTemplateData.notificationTemplate_cityId.find(city => city == element._id);
            if (found) {
              this.selectedItemsCity.push({ id: element._id, itemName: element.city_name });
            }
          });

          this.addEditNotificationTemplateForm.patchValue({
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

  //
  buildAddEditNotificationTemplateForm() {
    this.addEditNotificationTemplateForm = this._formBuilder.group({
      notificationTemplate_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      notificationTemplate_content_en: ["", [Validators.required]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // notificationTemplate_code: ["", [Validators.required]],
      // notificationTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // notificationTemplate_isCountrySpecific: ["", [Validators.required]],
      // template_countryId: ["", [Validators.required]],
      notificationTemplate_cityId: ["", [Validators.required]],
      notificationTemplate_status: ["ACTIVE", [Validators.required]],
    });
  }

  getNotificationTemplateDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new notificationTemplateActions.LoadNotificationTemplate(this.id));

    this.stateSubscription = this.store.pipe(select(fromNotificationTemplate.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          this.notificationTemplateData = data['data'];

          let fd = {
            notificationTemplate_title_en: result.notificationTemplate_title.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
            notificationTemplate_content_en: result.notificationTemplate_content.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
            // notificationTemplate_code: result.notificationTemplate_code,
            // notificationTemplate_slug: result.notificationTemplate_slug,
            // notificationTemplate_isCountrySpecific: result.notificationTemplate_isCountrySpecific,
            // notificationTemplate_countryId: result.notificationTemplate_countryId,
            notificationTemplate_status: result.notificationTemplate_status
          };
          // to fecth details for country
          await this.changeCountry(result.notificationTemplate_countryId)
          await this.addEditNotificationTemplateForm.patchValue(fd);
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
    this.addEditNotificationTemplateForm
      .get('notificationTemplate_cityId')
      .setValidators([]);
    this.addEditNotificationTemplateForm.get('notificationTemplate_cityId').updateValueAndValidity();
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditNotificationTemplateForm.value.notificationTemplate_cityId.length) {
      this.removeValidator();
    }
    if (this.addEditNotificationTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditNotificationTemplateForm.value;
      Helpers.setLoading(true);

      form.notificationTemplate_cityId.forEach(element => {
        citiesArray.push(element.id)
      });

      let fd = {
        notificationTemplate_title: [{
          lang: environment.webDefaultLang,
          title: form.notificationTemplate_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        notificationTemplate_content: [{
          lang: environment.webDefaultLang,
          title: form.notificationTemplate_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        // notificationTemplate_code: form.notificationTemplate_code,
        // notificationTemplate_slug: form.notificationTemplate_slug,
        // notificationTemplate_isCountrySpecific: form.notificationTemplate_isCountrySpecific,
        notificationTemplate_countryId: environment.webDefaultCountry,
        notificationTemplate_cityId: citiesArray,
        notificationTemplate_status: form.notificationTemplate_status
      };

      let obj = {
        id: this.id,
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new notificationTemplateActions.UpdateNotificationTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromNotificationTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/notification-template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditNotificationTemplateForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
