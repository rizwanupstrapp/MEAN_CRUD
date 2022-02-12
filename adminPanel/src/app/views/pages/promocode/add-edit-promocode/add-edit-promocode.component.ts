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

import * as promocodeActions from "../state/promocode.actions";
import * as fromPromocode from "../state/promocode.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { ServiceOperatorService } from '../../service-operator/service-operator.service';
import { CountryService } from '../../country/country.service';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'kt-add-promocode',
  templateUrl: './add-edit-promocode.component.html',
  styleUrls: ['./add-edit-promocode.component.scss']
})
export class AddPromocodeComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditPromocodeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;


  PROMOCODE_CONST: any;
  id: any;

  serviceTypes: any = [];
  countries: any = [];
  maxDate: any;
  minDate: Date;

  selectedItemsCountry: any = [];
  dropdownSettingsCountry: any = {};

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
    private ServiceOperatorService: ServiceOperatorService,
    private countryService: CountryService
  ) {
    this.PROMOCODE_CONST = this.translate.instant('PROMOCODE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.PROMOCODE'));
    titleService.setTitle(APPNAME + " | " + this.PROMOCODE_CONST.MODULE_NAME);

    // for date picker min
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 0);
  }

  ngOnInit() {
    this.buildAddEditPromocodeForm();
    this.getAllServiceTypes();
    // this.getAllCountries();
    this.Editor = ClassicEditor;

    this.dropdownSettingsCountry = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }

  //yt
  onItemCountrySelect(e, item: any) {
    this.selectedItemsCountry[item];
  }
  onItemCountryDeSelect(e, item: any) {

    this.selectedItemsCountry.filter(function (el) {
      if (el.id == item.id) {
        delete this.selectedItemsCountry[el];
      }
    });

  }
  onCountrySelectAll(items: any) {
  }
  onCountryDeSelectAll(items: any) {
  }

  // getAllCountries() {
  //   Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data['code'] == 200) {

  //         data['data'].forEach(element => {
  //           this.countries.push({
  //             id: element._id,
  //             itemName: element.country_name
  //           })

  //         });
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

  buildAddEditPromocodeForm() {
    this.addEditPromocodeForm = this._formBuilder.group({
     // promocode_countryId: ["", [Validators.required]],
      promocode_label_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //promocode_label_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      promocode_description_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // promocode_description_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      promocode_code: ["", [Validators.required]],
      promocode_type: ["", [Validators.required]],
      promocode_typeLimit: ["", [Validators.required]],
      promocode_discountType: ["", [Validators.required]],
      promocode_discount: ["", [Validators.required]],
      promocode_discountLimit: ["", [Validators.required]],
      promocode_startDate: ["", [Validators.required]],
      promocode_endDate: ["", [Validators.required]],
      promocode_serviceType: ["", [Validators.required]],
      promocode_oneTime:  [false, []],
      promocode_firstRide:  [false, []],
      promocode_status: ["ACTIVE", []]
    });
  }

  getAllServiceTypes() {
    Helpers.setLoading(true);
    this.ServiceOperatorService.getAllServiceTypes().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          this.serviceTypes = data['data'];
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
    if (this.addEditPromocodeForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditPromocodeForm.value;

      // let countryArray = [];
      // form.promocode_countryId.forEach(element => {
      //   countryArray.push(element.id)
      // });

      let obj = {
        promocode_countryId: [environment.webDefaultCountry],
        promocode_label: [{
          lang: 'EN',
          label: form.promocode_label_en
        }
          // , {
          //   lang: 'AR',
          //   label: form.promocode_label_ar
          // }
        ],
        promocode_description: [{
          lang: 'EN',
          title: form.promocode_description_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.promocode_description_ar
          // }
        ],
        promocode_code: form.promocode_code,
        promocode_type: form.promocode_type,
        promocode_typeLimit: form.promocode_typeLimit,
        promocode_discountType: form.promocode_discountType,
        promocode_discount: form.promocode_discount,
        promocode_discountLimit: form.promocode_discountLimit,
        promocode_startDate: form.promocode_startDate,
        promocode_endDate: form.promocode_endDate,
        promocode_serviceType: form.promocode_serviceType,
        promocode_oneTime: form.promocode_oneTime,
        promocode_firstRide: form.promocode_firstRide,
        promocode_status: form.promocode_status
      };

      this.stateSubscription = this.store.dispatch(new promocodeActions.AddPromocode(obj))
      this.stateSubscription = this.store.pipe(select(fromPromocode.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/promocode/list'])
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
  selector: 'kt-edit-promocode',
  templateUrl: './add-edit-promocode.component.html',
  styleUrls: ['./add-edit-promocode.component.scss']
})
export class EditPromocodeComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditPromocodeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  PROMOCODE_CONST: any;

  id: any;
  serviceTypes: any = [];
  countries: any = [];

  minDate: Date;
  maxDate: any;


  selectedItemsCountry: any = [];
  dropdownSettingsCountry: any = {};

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
    private ServiceOperatorService: ServiceOperatorService,
    private countryService: CountryService
  ) {
    this.PROMOCODE_CONST = this.translate.instant('PROMOCODE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.PROMOCODE'));
    titleService.setTitle(APPNAME + " | " + this.PROMOCODE_CONST.MODULE_NAME);

    // for date picker min 
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 0);
  }

  ngOnInit() {
    this.buildAddEditPromocodeForm();
    this.getAllServiceTypes();
    // this.getAllCountries();
    this.getPromocodeById();
    this.Editor = ClassicEditor;

    this.dropdownSettingsCountry = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }

  //yt
  onItemCountrySelect(e, item: any) {
    this.selectedItemsCountry[item];
  }
  onItemCountryDeSelect(e, item: any) {

    this.selectedItemsCountry.filter(function (el) {
      if (el.id == item.id) {
        delete this.selectedItemsCountry[el];
      }
    });

  }
  onCountrySelectAll(items: any) {

  }
  onCountryDeSelectAll(items: any) {

  }

  // getAllCountries() {
  //   Helpers.setLoading(true);
  //   this.countryService.getAllCountries().subscribe(async (data) => {
  //     if (data && data != undefined) {
  //       if (data['code'] == 200) {

  //         data['data'].forEach(element => {
  //           this.countries.push({
  //             id: element._id,
  //             itemName: element.country_name
  //           })

  //         });
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

  getAllServiceTypes() {
    Helpers.setLoading(true);
    this.ServiceOperatorService.getAllServiceTypes().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.serviceTypes = data['data'];
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
  buildAddEditPromocodeForm() {
    this.addEditPromocodeForm = this._formBuilder.group({
    //  promocode_countryId: ["", [Validators.required]],
      promocode_label_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      //promocode_label_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      promocode_description_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      // promocode_description_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      promocode_code: ["", [Validators.required]],
      promocode_type: ["", [Validators.required]],
      promocode_typeLimit: ["", [Validators.required]],
      promocode_discountType: ["", [Validators.required]],
      promocode_discount: ["", [Validators.required]],
      promocode_discountLimit: ["", [Validators.required]],
      promocode_startDate: ["", [Validators.required]],
      promocode_endDate: ["", [Validators.required]],
      promocode_serviceType: ["", [Validators.required]],
      promocode_oneTime: [false, []],
      promocode_firstRide: [false, []],
      promocode_status: ["ACTIVE", []]
    });
  }

  getPromocodeById() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new promocodeActions.LoadPromocode(this.id));

    this.stateSubscription = this.store.pipe(select(fromPromocode.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            promocode_label_en: result.promocode_label.filter((obj) => obj.lang == environment.webDefaultLang)[0].label,
            //promocode_label_ar: result.promocode_label.filter((obj) => obj.lang == "AR")[0].title,
            promocode_description_en: result.promocode_description.filter((obj) => obj.lang == environment.webDefaultLang)[0].title,
            // promocode_description_ar: result.promocode_description_ar.filter((obj) => obj.lang == "AR")[0].description,
            promocode_code: result.promocode_code,
            promocode_type: result.promocode_type != null && result.promocode_type != undefined ? result.promocode_type : "",
            promocode_typeLimit: result.promocode_typeLimit,
            promocode_discountType: result.promocode_discountType != null && result.promocode_discountType != undefined ? result.promocode_discountType : "",
            promocode_discount: result.promocode_discount,
            promocode_discountLimit: result.promocode_discountLimit,
            promocode_startDate: result.promocode_startDate,
            promocode_endDate: result.promocode_endDate,
            promocode_serviceType: result.promocode_serviceType,
            promocode_oneTime: result.promocode_oneTime,
            promocode_firstRide: result.promocode_firstRide,
            promocode_status: result.promocode_status != null && result.promocode_status != undefined ? result.promocode_status : "",
          };

          // to fecth details for service type
          // this.countries.forEach(element => {

          //   if (result.promocode_countryId.indexOf(element.id)) {

          //     this.selectedItemsCountry.push(element);

          //     if (this.dtr && !(this.dtr as ViewRef).destroyed) {
          //       this.dtr.detectChanges();
          //     }
          //   }

          // });
          await this.addEditPromocodeForm.patchValue(fd);
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
    if (this.addEditPromocodeForm.valid) {


      const form = this.addEditPromocodeForm.value;

      // let countryArray = [];
      // form.promocode_countryId.forEach(element => {
      //   countryArray.push(element.id)
      // });

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          promocode_countryId: [environment.webDefaultCountry],
          promocode_label: [{
            lang: environment.webDefaultLang,
            label: form.promocode_label_en
          }
            // , {
            //   lang: 'AR',
            //   label: form.promocode_label_ar
            // }
          ],
          promocode_description: [{
            lang: environment.webDefaultLang,
            title: form.promocode_description_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.promocode_description_ar
            // }
          ],
          promocode_code: form.promocode_code,
          promocode_type: form.promocode_type,
          promocode_typeLimit: form.promocode_typeLimit,
          promocode_discountType: form.promocode_discountType,
          promocode_discount: form.promocode_discount,
          promocode_discountLimit: form.promocode_discountLimit,
          promocode_startDate: form.promocode_startDate,
          promocode_endDate: form.promocode_endDate,
          promocode_serviceType: form.promocode_serviceType,
          promocode_oneTime: form.promocode_oneTime,
          promocode_firstRide: form.promocode_firstRide,
          promocode_status: form.promocode_status
        }
      };

      this.stateSubscription = this.store.dispatch(new promocodeActions.UpdatePromocode(obj))

      this.stateSubscription = this.store.pipe(select(fromPromocode.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/promocode/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    }
  }

}
