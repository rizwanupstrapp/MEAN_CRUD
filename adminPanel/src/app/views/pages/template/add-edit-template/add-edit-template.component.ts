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
import * as templateActions from "../state/template.actions";
import * as fromTemplate from "../state/template.reducer"
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { CityService } from '../../city/city.service';

@Component({
  selector: 'kt-add-edit-template',
  templateUrl: './add-edit-template.component.html',
  styleUrls: ['./add-edit-template.component.scss']
})
export class AddTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TEMPLATE_CONST: any;
  id: any = [];
  countries: any = [];
  cities: any = [];
  countryCities: any = [];
  email: string = 'Email';
  sms: string = 'SMS';
  notification: string = 'Notification';
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

  options = [
    { name: "Select Type", value: '' },
    { name: "Email", value: 'Email' },
    { name: "SMS", value: 'SMS' },
    { name: "Notification", value: 'Notification' }
  ]

  print() {
    this.printedOption = this.selectedOption;

    if (this.printedOption == "Notification") {
      this.val = "Notification"
    } else if (this.printedOption == "SMS") {
      this.val = "SMS"
    } else if (this.printedOption == "Email") {
      this.val = "Email"
    } else {
      this.val = " "
    }
  }

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
    this.subheaderService.setTitle(this.translate.instant('MENU.TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.TEMPLATE_CONST.MODULE_NAME);



  }
  // check box----------
  ngOnInit() {
    this.buildAddEditTemplateForm();
    this.getAllCountries();
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
  getAllCountries() {
    Helpers.setLoading(true);
    this.countryService.getAllCountries().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data["code"] == 200) {
          this.countries = data["data"];
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data["message"]);
        }
      }
    });
  }

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
  buildAddEditTemplateForm() {
    this.addEditTemplateForm = this._formBuilder.group({
      template_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_content_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_isCountrySpecific: ["", [Validators.required]],
      template_countryId: ["", [Validators.required]],
      template_cityId: ["", [Validators.required]],
      template_type: ["", [Validators.required]],
      template_status: ["ACTIVE", [Validators.required]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditTemplateForm.valid) {
      let citiesArray = [];
      let countryArray = [];
      const form = await this.addEditTemplateForm.value;
      Helpers.setLoading(true);

      form.template_cityId.forEach(element => {
        citiesArray.push(element.id)
      });
      let obj = {
        template_title: [{
          lang: 'EN',
          title: form.template_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_title_ar
          // }
        ],
        template_content: [{
          lang: 'EN',
          title: form.template_content_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.template_content_ar
          // }
        ],
        template_code: form.template_code,
        template_slug: form.template_slug,
        template_isCountrySpecific: form.template_isCountrySpecific,
        template_countryId: form.template_countryId,
        template_cityId: citiesArray,
        template_type: form.template_type,
        template_status: form.template_status
      };
      this.stateSubscription = this.store.dispatch(new templateActions.AddTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/template/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    }
  }
}

@Component({
  selector: 'kt-add-edit-template',
  templateUrl: './add-edit-template.component.html',
  styleUrls: ['./add-edit-template.component.scss']
})

export class EditTemplateComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditTemplateForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  id: any = [];
  TEMPLATE_CONST: any;
  countries: any = [];
  cities: any = [];
  countryCities: any = [];
  email: any = 'Email';
  sms: string = 'SMS';
  notification: string = 'Notification';
  //variable declared  yt
  selectedItemsCity: any = [];
  city_countryId: any = [];

  dropdownSettingsCountry: any = {};
  dropdownSettingsCity: any = {};
  // yt

  currentSelected: {};

  selectedOption: string;
  printedOption: string;

  val: string
  states: any;


  options = [
    { name: "Select Type", value: '' },
    { name: "Email", value: 'Email' },
    { name: "SMS", value: 'SMS' },
    { name: "Notification", value: 'Notification' }
  ]

  print() {
    this.printedOption = this.selectedOption;

    if (this.printedOption == "Notification") {
      this.val = "Notification"
    } else if (this.printedOption == "SMS") {
      this.val = "SMS"
    } else if (this.printedOption == "Email") {
      this.val = "Email"
    } else {
      this.val = " "
    }
  }

  constructor(private subheaderService: SubheaderService,
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
    this.subheaderService.setTitle(this.translate.instant('MENU.TEMPLATE'));
    titleService.setTitle(APPNAME + " | " + this.TEMPLATE_CONST.MODULE_NAME);
  }


  ngOnInit() {
    this.buildAddEditTemplateForm();
    this.getTemplateDetails();
    this.getAllCountries();
    this.Editor = ClassicEditor;
    this.selectedItemsCity = [];

    this.dropdownSettingsCountry = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
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
  getAllCountries() {
    Helpers.setLoading(true);
    this.countryService.getAllCountries().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data["code"] == 200) {
          this.countries = data["data"];
          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data["message"]);
        }
      }
    });
  }

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


  buildAddEditTemplateForm() {
    this.addEditTemplateForm = this._formBuilder.group({
      template_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //    template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_content_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      template_isCountrySpecific: ["", [Validators.required]],
      template_countryId: [""],
      template_cityId: [""],
      template_type: ["", []],
      template_status: ["ACTIVE", []],
    });
  }

  getTemplateDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new templateActions.LoadTemplate(this.id));

    this.stateSubscription = this.store.pipe(select(fromTemplate.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];


          let fd = {
            template_title_en: result.template_title.filter((obj) => obj.lang == "EN")[0].title,
            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
            template_content_en: result.template_content.filter((obj) => obj.lang == "EN")[0].title,
            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
            template_code: result.template_code,
            template_slug: result.template_slug,
            template_isCountrySpecific: result.template_isCountrySpecific != null && result.template_isCountrySpecific != undefined ? result.template_isCountrySpecific : "",
            template_countryId: result.template_countryId != null && result.template_countryId != undefined ? result.template_countryId : "",
            template_type: result.template_type != null && result.template_type != undefined ? result.template_type : "",
            template_status: result.template_status != null && result.template_status != undefined ? result.template_status : "",
          };
          // to fecth details for country
          this.changeCountry(result.template_countryId, )
          // to fecth details for service type
          this.countryCities.forEach(element => {
            if (result.template_cityId.indexOf(element.id)) {
              this.selectedItemsCity.push(element);
              if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                this.dtr.detectChanges();
              }
            }
          });
          await this.addEditTemplateForm.patchValue(fd);
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
    if (this.addEditTemplateForm.valid) {

      const form = this.addEditTemplateForm.value;

      Helpers.setLoading(true);
      let citiesArray = [];
      form.template_cityId.forEach(element => {
        citiesArray.push(element.id)
      });

      let obj = {
        id: this.id,
        data: {
          template_title: [{
            lang: 'EN',
            title: form.template_title_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.template_title_ar
            // }
          ],
          template_content: [{
            lang: 'EN',
            title: form.template_content_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.template_content_ar
            // }
          ],
          template_code: form.template_code,
          template_slug: form.template_slug,
          template_isCountrySpecific: form.template_isCountrySpecific,
          template_countryId: form.template_countryId,
          template_cityId: citiesArray,
          template_type: form.template_type,
          template_status: form.template_status
        }
      };

      this.stateSubscription = this.store.dispatch(new templateActions.UpdateTemplate(obj))

      this.stateSubscription = this.store.pipe(select(fromTemplate.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/template/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    }
  }
}
