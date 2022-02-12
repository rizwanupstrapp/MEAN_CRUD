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
import * as emailTemplateActions from "../state/emailTemplate.actions";
import * as fromEmailTemplate from "../state/emailTemplate.reducer"
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { CityService } from '../../city/city.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'kt-add-template',
  templateUrl: './add-edit-email-template.component.html',
  styleUrls: ['./add-edit-email-template.component.scss']
})
export class AddEmailTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditEmailTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TEMPLATE_CONST: any;
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
    this.TEMPLATE_CONST = this.translate.instant('TEMPLATE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.EMAIL_TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.TEMPLATE_CONST.EMAIL_MODULE_NAME);
  }
  // check box----------
  ngOnInit() {
    this.buildAddEditEmailTemplateForm();
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
  buildAddEditEmailTemplateForm() {
    this.addEditEmailTemplateForm = this._formBuilder.group({
      emailTemplate_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      emailTemplate_content_en: ["", [Validators.required]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // emailTemplate_code: ["", [Validators.required]],
      emailTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // emailTemplate_isCountrySpecific: ["", [Validators.required]],
      // template_countryId: ["", [Validators.required]],
      emailTemplate_cityId: ["", [Validators.required]],
      emailTemplate_status: ["ACTIVE", [Validators.required]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditEmailTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditEmailTemplateForm.value;
      Helpers.setLoading(true);

      form.emailTemplate_cityId.forEach(element => {
        citiesArray.push(element.id)
      });
      let obj = {
        emailTemplate_title: [{
          lang: environment.webDefaultLang,
          title: form.emailTemplate_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        emailTemplate_content: [{
          lang: environment.webDefaultLang,
          title: form.emailTemplate_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        // emailTemplate_code: form.emailTemplate_code,
        emailTemplate_slug: form.emailTemplate_slug,
        // emailTemplate_isCountrySpecific: form.emailTemplate_isCountrySpecific,
        emailTemplate_countryId: environment.webDefaultCountry,
        emailTemplate_cityId: citiesArray,
        emailTemplate_status: form.emailTemplate_status
      };
      this.stateSubscription = this.store.dispatch(new emailTemplateActions.AddEmailTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromEmailTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/email-template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditEmailTemplateForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
@Component({
  selector: 'kt-edit-template',
  templateUrl: './add-edit-email-template.component.html',
  styleUrls: ['./add-edit-email-template.component.scss']
})
export class EditEmailTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditEmailTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TEMPLATE_CONST: any;
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
  emailTemplateData: any;

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
    this.TEMPLATE_CONST = this.translate.instant('TEMPLATE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.EMAIL_TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.TEMPLATE_CONST.EMAIL_MODULE_NAME);



  }
  // check box----------
  ngOnInit() {
    this.buildAddEditEmailTemplateForm();
    this.getEmailTemplateDetails();
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

  getEmailTemplateDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new emailTemplateActions.LoadEmailTemplate(this.id));

    this.stateSubscription = this.store.pipe(select(fromEmailTemplate.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          this.emailTemplateData = data['data'];
          let fd = {
            emailTemplate_title_en: result.emailTemplate_title.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
            emailTemplate_content_en: result.emailTemplate_content.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
            // emailTemplate_code: result.emailTemplate_code,
            // emailTemplate_slug: result.emailTemplate_slug,
            // emailTemplate_isCountrySpecific: result.emailTemplate_isCountrySpecific,
            // emailTemplate_countryId: result.emailTemplate_countryId,
            emailTemplate_status: result.emailTemplate_status
          };
          // to fecth details for country
          await this.addEditEmailTemplateForm.patchValue(fd);
          await this.changeCountry(result.emailTemplate_countryId)

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
            const found = this.emailTemplateData.emailTemplate_cityId.find(city => city == element._id);
            if (found) {
              this.selectedItemsCity.push({ id: element._id, itemName: element.city_name });
            }
          });

          this.addEditEmailTemplateForm.patchValue({
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
  buildAddEditEmailTemplateForm() {
    this.addEditEmailTemplateForm = this._formBuilder.group({
      emailTemplate_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      emailTemplate_content_en: ["", [Validators.required]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // emailTemplate_code: ["", [Validators.required]],
      // emailTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // emailTemplate_isCountrySpecific: ["", [Validators.required]],
      // template_countryId: ["", [Validators.required]],
      emailTemplate_cityId: ["", [Validators.required]],
      emailTemplate_status: ["ACTIVE", [Validators.required]],
    });
  }

  removeValidator() {
    this.addEditEmailTemplateForm
      .get('emailTemplate_cityId')
      .setValidators([]);
    this.addEditEmailTemplateForm.get('emailTemplate_cityId').updateValueAndValidity();
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditEmailTemplateForm.value.emailTemplate_cityId.length) {
      this.removeValidator();
    }
    if (this.addEditEmailTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditEmailTemplateForm.value;
      Helpers.setLoading(true);

      form.emailTemplate_cityId.forEach(element => {
        citiesArray.push(element.id)
      });
      let fd = {
        emailTemplate_title: [{
          lang: environment.webDefaultLang,
          title: form.emailTemplate_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        emailTemplate_content: [{
          lang: environment.webDefaultLang,
          title: form.emailTemplate_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        // emailTemplate_code: form.emailTemplate_code,
        // emailTemplate_slug: form.emailTemplate_slug,
        // emailTemplate_isCountrySpecific: form.emailTemplate_isCountrySpecific,
        emailTemplate_countryId: environment.webDefaultCountry,
        emailTemplate_cityId: citiesArray,
        emailTemplate_status: form.emailTemplate_status
      };

      let obj = {
        id: this.id,
        data: fd
      }

      this.stateSubscription = this.store.dispatch(new emailTemplateActions.UpdateEmailTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromEmailTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/email-template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditEmailTemplateForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
