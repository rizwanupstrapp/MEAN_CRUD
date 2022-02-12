import { Component, OnInit, ChangeDetectorRef, ViewRef } from "@angular/core";

import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import * as fareCalculationActions from "../state/fare-calculation.actions";
import * as fromFareCalculation from "../state/fare-calculation.reducer";

import { TranslateService } from "@ngx-translate/core";
import { CountryService } from "../../country/country.service";
import { CityService } from "../../city/city.service";
import { FareCalculationService } from "../fare-calculation.service";
import { ServiceOperatorService } from "../../service-operator/service-operator.service";
import { environment } from '../../../../../environments/environment';
import { validataion } from '../../../../helper/regular.expression';

@Component({
  selector: "kt-add-fare-calculation",
  templateUrl: "./add-edit-fare-calculation.component.html",
  styleUrls: ["./add-edit-fare-calculation.component.scss"],
})
export class AddFareCalculationComponent implements OnInit {
  navObj: any = {}

  Editor: any;
  isAdd: Boolean = true;
  addEditFareCalculationForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  FARE_CALCULATION_CONST: any;

  countries: any = [];
  cities: any = [];
  countryCities = [];
  Franchises: any = [];
  timeFrameRanges: any = [];
  operators: any = [];
  creds: any;
  link: any;
  id: any;
  //variable declared  yt
  dropdownList = [];
  selectedItemsCountry = [];
  selectedItemsCity = [];
  city_countryId = [];

  dropdownSettingsCountry = {};
  paymentMethods: any = [];
  dropdownSettingsPaymentMethod: any = [];
  dropdownSettingsCity = {};
  serviceTypes: any
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
    private cityService: CityService,
    private FareCalculationService: FareCalculationService,
    private ServiceOperatorService: ServiceOperatorService
  ) {
    this.FARE_CALCULATION_CONST = this.translate.instant("FARECALCULATION");
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(
      this.translate.instant("MENU.FARE_CALCULATION")
    );
    titleService.setTitle(
      APPNAME + " | " + this.FARE_CALCULATION_CONST.MODULE_NAME
    );
  }

  clickLink(e) {
    this.navObj['link'] = e;
  }

  ngOnInit() {
    this.dropdownSettingsPaymentMethod = {
      singleSelection: false,
      text: "Select Payment method",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
    this.FARE_CALCULATION_CONST.PAYMENT_VALUE.map((value, index) => {
      this.paymentMethods.push({ id: index, itemName: value })
    })

    this.buildAddEditFareCalculationForm();

    // this.getAllCountries();
    this.changeCountry(environment.webDefaultCountry)
    this.getAllTimeFramesList();
    // this.getAllServiceTypes();

  }
  operatorChange(){
    this.getAllServiceTypes(this.addEditFareCalculationForm.value.fareCalculation_franchiseId) // operator id 
  }
  onItemPaymentMethodSelect(item: any, i) {
    this.addEditFareCalculationForm.value.fareCalculation_service_types[i] ? this.addEditFareCalculationForm.value.fareCalculation_service_types[i].fareCalculation_payment_method[item] : "";
    this.addEditFareCalculationForm.patchValue({
      fareCalculation_service_types: this.addEditFareCalculationForm.value.fareCalculation_service_types
    })
    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
      this.dtr.detectChanges();
    }
  }

  onItemPaymentMethodDeSelect(item: any) {
    // this.selectedPaymentMethod.filter(function (el) {
    //   if (el.id == item.id) {
    //     delete this.selectedPaymentMethod[el];
    //   }
    // });
  }
  onPaymentMethodSelectAll(items: any) {
  }
  onPaymentMethodDeSelectAll(items: any) {
  }


  getAllServiceTypes(id) {
    Helpers.setLoading(true);
    //getOperatorServiceTypes
    this.ServiceOperatorService.getOperatorServiceTypes(id).subscribe((data) => {
      if (data && data != undefined) {
        console.log(data);
        if (data['code'] == 200) {

          this.serviceTypes = data['data'];
          if(this.serviceTypes.length > 0){
            for (let i = 0; i < this.serviceTypes.length; i++) {
              this.serviceTypes[i].fareCalculation_service_type_id = this.serviceTypes[i].id
              this.serviceTypes[i].fareCalculation_payment_method = 'COIN'
              // this.serviceTypes[i].fareCalculation_select = ''
              this.serviceTypes[i].fareCalculation_free_km = ''
              this.serviceTypes[i].fareCalculation_pickup_free_time = ''
              this.serviceTypes[i].fareCalculation_congestion_free_time = ''
              this.serviceTypes[i].fareCalculation_complete_stop_free_time = ''
              this.serviceTypes[i].fareCalculation_tax = '',
                this.serviceTypes[i].fareCalculation_base_fare_coin = "",
                // this.serviceTypes[i].fareCalculation_base_fare_driver = "",
                // this.serviceTypes[i].fareCalculation_base_fare_admin = "",
  
                this.serviceTypes[i].fareCalculation_booking_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_booking_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_booking_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_per_km_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_per_km_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_per_km_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_per_min_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_per_min_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_per_min_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_pickup_waiting_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_pickup_waiting_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_pickup_waiting_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_stop_waiting_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_stop_waiting_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_stop_waiting_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_congestion_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_congestion_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_congestion_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_destination_change_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_destination_change_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_destination_change_fee_admin = "",
  
                this.serviceTypes[i].fareCalculation_governmental_fee_coin = "",
                // this.serviceTypes[i].fareCalculation_governmental_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_governmental_fee_admin = "",
  
                // this.serviceTypes[i].fareCalculation_cancellation_fee_driver = "",
                // this.serviceTypes[i].fareCalculation_cancellation_fee_admin = "",
  
                // this.serviceTypes[i].fareCalculation_driver_tip_driver = "",
                // this.serviceTypes[i].fareCalculation_driver_tip_admin = "",
                this.fareCalculation_service_types.push(this.createFields());
  
            }
  
            this.addEditFareCalculationForm.patchValue({
              fareCalculation_service_types: this.serviceTypes
            });
          }
         

          this.navObj['link'] = this.serviceTypes[0].serviceType_name

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    },error=>{

      Helpers.setLoading(false);
      this.toastr.error("Data Not Found");

    });
  }

  get fareCalculation_service_types(): FormArray {
    let form = this.addEditFareCalculationForm;
    if (form) {
      return this.addEditFareCalculationForm.get('fareCalculation_service_types') as FormArray;
    }
  }

  buildAddEditFareCalculationForm() {
    this.addEditFareCalculationForm = this._formBuilder.group({
      // fareCalculation_countryId: ["", [Validators.required,]],
      fareCalculation_cityId: ["", [Validators.required,]],
      fareCalculation_franchiseId: ["", [Validators.required,]],
      fareCalculation_timeFrameId: ["", [Validators.required,]],
      fareCalculation_status: ["ACTIVE", [Validators.required,]],
      fareCalculation_service_types: this._formBuilder.array([]),
    });
  }
  createFields(): FormGroup {
    return this._formBuilder.group({
      fareCalculation_service_type_id: '',
      fareCalculation_payment_method: ["COIN"],
      // fareCalculation_select: ["ACTUALDISTANCE"],
      fareCalculation_free_km: ["", [Validators.required,]],
      fareCalculation_pickup_free_time: ["", [Validators.required,]],
      fareCalculation_congestion_free_time: ["", [Validators.required,]],
      fareCalculation_complete_stop_free_time: ["", [Validators.required,]],
      fareCalculation_tax: ["", [Validators.required,]],

      fareCalculation_base_fare_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_base_fare_driver: [""],
      // fareCalculation_base_fare_admin: [""],

      fareCalculation_booking_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_booking_fee_driver: [""],
      // fareCalculation_booking_fee_admin: [""],

      fareCalculation_per_km_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_per_km_fee_driver: [""],
      // fareCalculation_per_km_fee_admin: [""],

      fareCalculation_per_min_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_per_min_fee_driver: [""],
      // fareCalculation_per_min_fee_admin: [""],

      fareCalculation_pickup_waiting_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_pickup_waiting_fee_driver: [""],
      // fareCalculation_pickup_waiting_fee_admin: [""],

      fareCalculation_stop_waiting_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_stop_waiting_fee_driver: [""],
      // fareCalculation_stop_waiting_fee_admin: [""],

      fareCalculation_congestion_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_congestion_fee_driver: [""],
      // fareCalculation_congestion_fee_admin: [""],

      fareCalculation_destination_change_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_destination_change_fee_driver: [""],
      // fareCalculation_destination_change_fee_admin: [""],

      fareCalculation_governmental_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_governmental_fee_driver: [""],
      // fareCalculation_governmental_fee_admin: [""],

      // fareCalculation_cancellation_fee_driver: [""],
      // fareCalculation_cancellation_fee_admin: [""],

      // fareCalculation_driver_tip_driver: [""],
      // fareCalculation_driver_tip_admin: [""],
    })
  }
  // getAllCountries() {
  //   Helpers.setLoading(true);
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
    // Helpers.setLoading(true);
    if (country) {
      let countryId = { city_countryId: country };
      await this.cityService
        .getCountryCities(countryId)
        .subscribe(async (data) => {
          if (data["code"] == 200) {
            this.cities = await data["data"];
            // Helpers.setLoading(false);
            this.dtr.detectChanges();
          }
        });
    }
  }

  async changeCity(cityId) {
    // Helpers.setLoading(true);
    if (cityId) {
      await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(
        async (data) => {
          if (data["code"] == 200) {
            this.operators = await data["data"];
            // Helpers.setLoading(false);
            this.dtr.detectChanges();
          }
        }
      );
    }
  }

  getAllTimeFramesList() {
    // Helpers.setLoading(true);
    this.FareCalculationService.getAllTimeFramesList().subscribe(
      async (data) => {
        if (data && data != undefined) {
          if (data["code"] == 200) {
            this.timeFrameRanges = data["data"];
            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            // Helpers.setLoading(false);
          } else {
            // Helpers.setLoading(false);
            this.toastr.error(data["message"]);
          }
        }
      }
    );
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditFareCalculationForm.valid) {
      Helpers.setLoading(true);
      const form = this.addEditFareCalculationForm.value;
      let obj = {
        fareCalculation_countryId: environment.webDefaultCountry,
        fareCalculation_cityId: form.fareCalculation_cityId,
        fareCalculation_franchiseId: form.fareCalculation_franchiseId,
        fareCalculation_timeFrameId: form.fareCalculation_timeFrameId,
        fareCalculation_status: form.fareCalculation_status,
      };
      let serviceType = []
      form.fareCalculation_service_types.map((fareCalculationService, i) => {
        serviceType.push(
          {
            fareCalculation_service_type_id: fareCalculationService.fareCalculation_service_type_id,
            fareCalculation_payment_method: fareCalculationService.fareCalculation_payment_method ? fareCalculationService.fareCalculation_payment_method : 'COIN',
            fareCalculation_select: fareCalculationService.fareCalculation_select,
            fareCalculation_free_km: fareCalculationService.fareCalculation_free_km,
            fareCalculation_pickup_free_time: fareCalculationService.fareCalculation_pickup_free_time,
            fareCalculation_congestion_free_time: fareCalculationService.fareCalculation_congestion_free_time,
            fareCalculation_complete_stop_free_time: fareCalculationService.fareCalculation_complete_stop_free_time,
            fareCalculation_tax: fareCalculationService.fareCalculation_tax,
            fareCalculation_base_fare: {
              coin: fareCalculationService.fareCalculation_base_fare_coin,
              // admin_percentage: fareCalculationService.fareCalculation_base_fare_driver,
              // driver_percentage: fareCalculationService.fareCalculation_base_fare_admin,
            },

            fareCalculation_booking_fee: {
              coin: fareCalculationService.fareCalculation_booking_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_booking_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_booking_fee_driver ,
            },
            fareCalculation_per_km_fee: {
              coin: fareCalculationService.fareCalculation_per_km_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_per_km_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_per_km_fee_driver,
            },

            fareCalculation_per_min_fee: {
              coin: fareCalculationService.fareCalculation_per_min_fee_coin,
              // admin_percentage: fareCalculationService.fareCalculation_per_min_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_per_min_fee_driver,
            },

            fareCalculation_pickup_waiting_fee: {
              coin: fareCalculationService.fareCalculation_pickup_waiting_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_pickup_waiting_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_pickup_waiting_fee_driver ,
            },

            fareCalculation_stop_waiting_fee: {
              coin: fareCalculationService.fareCalculation_stop_waiting_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_stop_waiting_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_stop_waiting_fee_driver ,
            },

            fareCalculation_congestion_fee: {
              coin: fareCalculationService.fareCalculation_congestion_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_congestion_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_congestion_fee_driver,
            },

            fareCalculation_destination_change_fee: {
              coin: fareCalculationService.fareCalculation_destination_change_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_destination_change_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_destination_change_fee_driver ,
            },

            fareCalculation_governmental_fee: {
              coin: fareCalculationService.fareCalculation_governmental_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_governmental_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_governmental_fee_driver,
            },

            fareCalculation_cancellation_fee: {
              // admin_percentage:fareCalculationService.fareCalculation_cancellation_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_cancellation_fee_driver,
            },

            fareCalculation_driver_tip: {
              // admin_percentage:fareCalculationService.fareCalculation_driver_tip_admin,
              // driver_percentage:fareCalculationService.fareCalculation_driver_tip_driver,
            }
          })
      })

      obj['fareCalculation_service_types'] = serviceType

      this.stateSubscription = this.store.dispatch(
        new fareCalculationActions.AddFareCalculation(obj)
      );

      this.stateSubscription = this.store
        .pipe(select(fromFareCalculation.selectPageState))
        .subscribe((data) => {
          if (data && data != undefined) {
            Helpers.setLoading(false);
            if (data["code"] == 200) {

              this.toastr.success(data["message"]);

              this.stateSubscription.unsubscribe();
              this.router.navigate(["/fare-calculation/list"]);
            } else {
              this.toastr.error(data["message"]);
              this.stateSubscription.unsubscribe();
            }
          }
        });
    } else if (!this.addEditFareCalculationForm.controls.fareCalculation_service_types.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
}

@Component({
  selector: "kt-edit-fare-calculation",
  templateUrl: "./add-edit-fare-calculation.component.html",
  styleUrls: ["./add-edit-fare-calculation.component.scss"],
})
export class EditFareCalculationComponent implements OnInit {
  navObj: any = {}
  Editor: any;
  isAdd: Boolean = false;
  addEditFareCalculationForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  FARE_CALCULATION_CONST: any;

  countries: any = [];
  cities: any = [];
  operators: any = [];
  dropdownSettingsPaymentMethod: any = [];
  timeFrameRanges: any = [];
  creds: any;
  link: any;
  paymentMethods: any = [];
  selectedPaymentMethod: any = [];
  id: any;
  serviceTypes: any;

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
    private FareCalculationService: FareCalculationService,
    private ServiceOperatorService: ServiceOperatorService
  ) {
    this.FARE_CALCULATION_CONST = this.translate.instant("FARECALCULATION");
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(
      this.translate.instant("MENU.FARE_CALCULATION")
    );
    titleService.setTitle(
      APPNAME + " | " + this.FARE_CALCULATION_CONST.MODULE_NAME
    );
  }

  clickLink(e) {
    this.navObj['link'] = e;
  }

  ngOnInit() {
    this.buildAddEditFareCalculationForm();
    // this.getAllServiceTypes();
    this.dropdownSettingsPaymentMethod = {
      singleSelection: false,
      text: "Select Payment method",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };

    this.FARE_CALCULATION_CONST.PAYMENT_VALUE.map((value, index) => {
      this.paymentMethods = Object.assign([], this.paymentMethods);
      this.paymentMethods.push({ id: index, itemName: value })
    })
    // this.getAllCountries();
    this.getAllTimeFramesList();
    this.getFareCalculationDetails();

  }
  operatorChange(id){
    
      this.getAllServiceTypes(id)
    
  }
  onItemPaymentMethodSelect(item: any, i) {
    if (this.addEditFareCalculationForm.value.fareCalculation_service_types[i]) {
      this.addEditFareCalculationForm.value.fareCalculation_service_types[i].fareCalculation_payment_method[item];
      this.addEditFareCalculationForm.patchValue({
        fareCalculation_service_types: this.addEditFareCalculationForm.value.fareCalculation_service_types
      })
    }

    if (this.dtr && !(this.dtr as ViewRef).destroyed) {
      this.dtr.detectChanges();
    }
  }

  onItemPaymentMethodDeSelect(item: any) {
    // this.paymentMethods.filter(function (el) {
    // if (el.id == item.id) {
    //   delete this.selectedItemsServices[el];
    // }
    // });
  }
  onPaymentMethodSelectAll(items: any) {
  }
  onPaymentMethodDeSelectAll(items: any) {
  }
  buildAddEditFareCalculationForm() {
    this.addEditFareCalculationForm = this._formBuilder.group({
      // fareCalculation_countryId: ["", [Validators.required,]],
      fareCalculation_cityId: ["", [Validators.required,]],
      fareCalculation_franchiseId: ["", [Validators.required,]],
      fareCalculation_timeFrameId: ["", [Validators.required,]],
      fareCalculation_status: ["ACTIVE", [Validators.required,]],
      fareCalculation_service_types: this._formBuilder.array([]),
    });
  }

  get fareCalculation_service_types(): FormArray {
    let form = this.addEditFareCalculationForm;
    if (form) {
      return this.addEditFareCalculationForm.get('fareCalculation_service_types') as FormArray;
    }
  }

  getAllServiceTypes(id) {
    // Helpers.setLoading(true);
    this.ServiceOperatorService.getOperatorServiceTypes(id).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          this.serviceTypes = data['data'];

          this.navObj['link'] = this.serviceTypes[0].serviceType_name

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          // Helpers.setLoading(false);
        } else {
          // Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }

  createFields(): FormGroup {
    return this._formBuilder.group({
      fareCalculation_service_type_id: '',
      fareCalculation_payment_method: ["COIN"],
      // fareCalculation_select: ["ACTUALDISTANCE"],
      fareCalculation_free_km: ["", [Validators.required,]],
      fareCalculation_pickup_free_time: ["", [Validators.required,]],
      fareCalculation_congestion_free_time: ["", [Validators.required,]],
      fareCalculation_complete_stop_free_time: ["", [Validators.required,]],
      fareCalculation_tax: ["", [Validators.required,]],
      fareCalculation_base_fare_coin: ["", [Validators.required,]],
      // fareCalculation_base_fare_driver: [""],
      // fareCalculation_base_fare_admin: [""],

      fareCalculation_booking_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_booking_fee_driver: [""],
      // fareCalculation_booking_fee_admin: [""],

      fareCalculation_per_km_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_per_km_fee_driver: [""],
      // fareCalculation_per_km_fee_admin: [""],

      fareCalculation_per_min_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_per_min_fee_driver: [""],
      // fareCalculation_per_min_fee_admin: [""],

      fareCalculation_pickup_waiting_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_pickup_waiting_fee_driver: [""],
      // fareCalculation_pickup_waiting_fee_admin: [""],

      fareCalculation_stop_waiting_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_stop_waiting_fee_driver: [""],
      // fareCalculation_stop_waiting_fee_admin: [""],

      fareCalculation_congestion_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_congestion_fee_driver: [""],
      // fareCalculation_congestion_fee_admin: [""],

      fareCalculation_destination_change_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_destination_change_fee_driver: [""],
      // fareCalculation_destination_change_fee_admin: [""],

      fareCalculation_governmental_fee_coin: ["", [Validators.required,Validators.min(validataion.fare_min), Validators.max(validataion.fare_max),Validators.pattern(validataion.numericOnly)]],
      // fareCalculation_governmental_fee_driver: [""],
      // fareCalculation_governmental_fee_admin: [""],

      // fareCalculation_cancellation_fee_driver: [""],
      // fareCalculation_cancellation_fee_admin: [""],

      // fareCalculation_driver_tip_driver: [""],
      // fareCalculation_driver_tip_admin: [""],
    })
  }

  // getAllCountries() {
  //   Helpers.setLoading(true);
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
    // Helpers.setLoading(true);
    if (country) {
      let countryId = { city_countryId: country };
      await this.cityService
        .getCountryCities(countryId)
        .subscribe(async (data) => {
          if (data["code"] == 200) {
            this.cities = await data["data"];
            // Helpers.setLoading(false);
            this.dtr.detectChanges();
          }
        });
    }
  }

  async changeCity(cityId) {
    // Helpers.setLoading(true);
    if (cityId) {
      // let city = {cityId : cityId}
      await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(
        async (data) => {
          if (data["code"] == 200) {
            this.operators = await data["data"];
            // Helpers.setLoading(false);
            this.dtr.detectChanges();
          }
        }
      );
    }
  }

  getAllTimeFramesList() {
    // Helpers.setLoading(true);
    this.FareCalculationService.getAllTimeFramesList().subscribe(
      async (data) => {
        if (data && data != undefined) {
          if (data["code"] == 200) {
            this.timeFrameRanges = data["data"];

            if (this.dtr && !(this.dtr as ViewRef).destroyed) {
              this.dtr.detectChanges();
            }
            // Helpers.setLoading(false);
          } else {
            // Helpers.setLoading(false);
            this.toastr.error(data["message"]);
          }
        }
      }
    );
  }

  getFareCalculationDetails() {
    this.id = this._route.snapshot.params["id"];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(
      new fareCalculationActions.LoadFareCalculation(this.id)
    );

    this.stateSubscription = this.store
      .pipe(select(fromFareCalculation.selectPageState))
      .subscribe(async (data) => {
        if (data && data != undefined) {
          if (data["code"] == 200) {
            Helpers.setLoading(false);
            let result = data["data"];
            let fareCalculationServiceArray = []
            for (let i = 0; i < result.fareCalculation_service_types.length; i++) {
              fareCalculationServiceArray.push(
                {

                  fareCalculation_service_type_id: result.fareCalculation_service_types[i].fareCalculation_service_type_id,
                  fareCalculation_payment_method: result.fareCalculation_service_types[i].fareCalculation_payment_method ? result.fareCalculation_service_types[i].fareCalculation_payment_method : 'COIN',
                  fareCalculation_free_km: result.fareCalculation_service_types[i].fareCalculation_free_km,
                  fareCalculation_pickup_free_time: result.fareCalculation_service_types[i].fareCalculation_pickup_free_time,

                  fareCalculation_congestion_free_time: result.fareCalculation_service_types[i].fareCalculation_congestion_free_time,
                  fareCalculation_complete_stop_free_time: result.fareCalculation_service_types[i].fareCalculation_complete_stop_free_time,
                  fareCalculation_tax: result.fareCalculation_service_types[i].fareCalculation_tax,

                  fareCalculation_base_fare_coin: result.fareCalculation_service_types[i].fareCalculation_base_fare.coin,
                  // fareCalculation_base_fare_driver: result.fareCalculation_service_types[i].fareCalculation_base_fare.driver_percentage,
                  // fareCalculation_base_fare_admin: result.fareCalculation_service_types[i].fareCalculation_base_fare.admin_percentage,

                  fareCalculation_booking_fee_coin: result.fareCalculation_service_types[i].fareCalculation_booking_fee.coin,
                  // fareCalculation_booking_fee_driver: result.fareCalculation_service_types[i].fareCalculation_booking_fee.driver_percentage,
                  // fareCalculation_booking_fee_admin: result.fareCalculation_service_types[i].fareCalculation_booking_fee.admin_percentage,

                  fareCalculation_per_km_fee_coin: result.fareCalculation_service_types[i].fareCalculation_per_km_fee.coin,
                  // fareCalculation_per_km_fee_driver: result.fareCalculation_service_types[i].fareCalculation_per_km_fee.driver_percentage,
                  // fareCalculation_per_km_fee_admin: result.fareCalculation_service_types[i].fareCalculation_per_km_fee.admin_percentage,

                  fareCalculation_per_min_fee_coin: result.fareCalculation_service_types[i].fareCalculation_per_min_fee.coin,
                  // fareCalculation_per_min_fee_driver: result.fareCalculation_service_types[i].fareCalculation_per_min_fee.driver_percentage,
                  // fareCalculation_per_min_fee_admin: result.fareCalculation_service_types[i].fareCalculation_per_min_fee.admin_percentage,

                  fareCalculation_pickup_waiting_fee_coin: result.fareCalculation_service_types[i].fareCalculation_pickup_waiting_fee.coin,
                  // fareCalculation_pickup_waiting_fee_driver: result.fareCalculation_service_types[i].fareCalculation_pickup_waiting_fee.driver_percentage,
                  // fareCalculation_pickup_waiting_fee_admin: result.fareCalculation_service_types[i].fareCalculation_pickup_waiting_fee.admin_percentage,

                  fareCalculation_stop_waiting_fee_coin: result.fareCalculation_service_types[i].fareCalculation_stop_waiting_fee.coin,
                  // fareCalculation_stop_waiting_fee_driver: result.fareCalculation_service_types[i].fareCalculation_stop_waiting_fee.driver_percentage,
                  // fareCalculation_stop_waiting_fee_admin: result.fareCalculation_service_types[i].fareCalculation_stop_waiting_fee.admin_percentage,

                  fareCalculation_congestion_fee_coin: result.fareCalculation_service_types[i].fareCalculation_congestion_fee.coin,
                  // fareCalculation_congestion_fee_driver: result.fareCalculation_service_types[i].fareCalculation_congestion_fee.driver_percentage,
                  // fareCalculation_congestion_fee_admin: result.fareCalculation_service_types[i].fareCalculation_congestion_fee.admin_percentage,

                  fareCalculation_destination_change_fee_coin: result.fareCalculation_service_types[i].fareCalculation_destination_change_fee.coin,
                  // fareCalculation_destination_change_fee_driver: result.fareCalculation_service_types[i].fareCalculation_destination_change_fee.driver_percentage,
                  // fareCalculation_destination_change_fee_admin: result.fareCalculation_service_types[i].fareCalculation_destination_change_fee.admin_percentage,

                  fareCalculation_governmental_fee_coin: result.fareCalculation_service_types[i].fareCalculation_governmental_fee.coin,
                  // fareCalculation_governmental_fee_driver: result.fareCalculation_service_types[i].fareCalculation_governmental_fee.driver_percentage,
                  // fareCalculation_governmental_fee_admin: result.fareCalculation_service_types[i].fareCalculation_governmental_fee.admin_percentage,

                  // fareCalculation_cancellation_fee_driver: result.fareCalculation_service_types[i].fareCalculation_cancellation_fee.driver_percentage,
                  // fareCalculation_cancellation_fee_admin: result.fareCalculation_service_types[i].fareCalculation_cancellation_fee.admin_percentage,

                  // fareCalculation_driver_tip_driver: result.fareCalculation_service_types[i].fareCalculation_driver_tip.driver_percentage,
                  // fareCalculation_driver_tip_admin: result.fareCalculation_service_types[i].fareCalculation_driver_tip.admin_percentage,
                },

              )
              this.fareCalculation_service_types.push(this.createFields());
            }

            let fd = {
              fareCalculation_countryId: result.fareCalculation_countryId,
              fareCalculation_cityId: result.fareCalculation_cityId,
              fareCalculation_franchiseId: result.fareCalculation_franchiseId,
              fareCalculation_timeFrameId: result.fareCalculation_timeFrameId,
              fareCalculation_status: result.fareCalculation_status,
              fareCalculation_service_types: fareCalculationServiceArray
            };
            this.changeCountry(result.fareCalculation_countryId || environment.webDefaultCountry)
            this.changeCity(result.fareCalculation_cityId)
            this.operatorChange(result.fareCalculation_franchiseId)


            await this.addEditFareCalculationForm.patchValue(fd);

            this.stateSubscription.unsubscribe();
          } else {
            Helpers.setLoading(false);

            this.toastr.error(data["message"]);
            this.stateSubscription.unsubscribe();
          }
        }
      });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditFareCalculationForm.valid) {
      const form = this.addEditFareCalculationForm.value;
      Helpers.setLoading(true);
      let obj = {
        id: this.id,
        data: {
          fareCalculation_countryId: environment.webDefaultCountry,
          fareCalculation_cityId: form.fareCalculation_cityId,
          fareCalculation_franchiseId: form.fareCalculation_franchiseId,
          fareCalculation_timeFrameId: form.fareCalculation_timeFrameId,
          fareCalculation_status: form.fareCalculation_status,
        },
      };

      form.fareCalculation_service_types.map((fareCalculationService, i) => {
        form.fareCalculation_service_types[i] =
          {
            fareCalculation_service_type_id: fareCalculationService.fareCalculation_service_type_id,
            fareCalculation_payment_method: fareCalculationService.fareCalculation_payment_method,
            // fareCalculation_select: fareCalculationService.fareCalculation_select,
            fareCalculation_free_km: fareCalculationService.fareCalculation_free_km,
            fareCalculation_pickup_free_time: fareCalculationService.fareCalculation_pickup_free_time,
            fareCalculation_congestion_free_time: fareCalculationService.fareCalculation_congestion_free_time,
            fareCalculation_complete_stop_free_time: fareCalculationService.fareCalculation_complete_stop_free_time,
            fareCalculation_tax: fareCalculationService.fareCalculation_tax,
            fareCalculation_base_fare: {
              coin: fareCalculationService.fareCalculation_base_fare_coin,
              // admin_percentage: fareCalculationService.fareCalculation_base_fare_driver,
              // driver_percentage: fareCalculationService.fareCalculation_base_fare_admin,
            },

            fareCalculation_booking_fee: {
              coin: fareCalculationService.fareCalculation_booking_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_booking_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_booking_fee_driver,
            },
            fareCalculation_per_km_fee: {
              coin: fareCalculationService.fareCalculation_per_km_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_per_km_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_per_km_fee_driver,
            },

            fareCalculation_per_min_fee: {
              coin: fareCalculationService.fareCalculation_per_min_fee_coin,
              // admin_percentage:  fareCalculationService.fareCalculation_per_min_fee_admin,
              // driver_percentage:fareCalculationService.fareCalculation_per_min_fee_driver,
            },

            fareCalculation_pickup_waiting_fee: {
              coin: fareCalculationService.fareCalculation_pickup_waiting_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_pickup_waiting_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_pickup_waiting_fee_driver,
            },

            fareCalculation_stop_waiting_fee: {
              coin: fareCalculationService.fareCalculation_stop_waiting_fee_coin,
              // admin_percentage: fareCalculationService.fareCalculation_stop_waiting_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_stop_waiting_fee_driver,
            },

            fareCalculation_congestion_fee: {
              coin: fareCalculationService.fareCalculation_congestion_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_congestion_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_congestion_fee_driver,
            },

            fareCalculation_destination_change_fee: {
              coin: fareCalculationService.fareCalculation_destination_change_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_destination_change_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_destination_change_fee_driver,
            },

            fareCalculation_governmental_fee: {
              coin: fareCalculationService.fareCalculation_governmental_fee_coin,
              // admin_percentage:fareCalculationService.fareCalculation_governmental_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_governmental_fee_driver,
            },

            fareCalculation_cancellation_fee: {
              // admin_percentage: fareCalculationService.fareCalculation_cancellation_fee_admin,
              // driver_percentage: fareCalculationService.fareCalculation_cancellation_fee_driver,
            },

            fareCalculation_driver_tip: {
              // admin_percentage: fareCalculationService.fareCalculation_driver_tip_admin,
              // driver_percentage: fareCalculationService.fareCalculation_driver_tip_driver ,
            }
          }
      })

      obj['data']['fareCalculation_service_types'] = form.fareCalculation_service_types

      this.stateSubscription = this.store.dispatch(
        new fareCalculationActions.UpdateFareCalculation(obj)
      );

      this.stateSubscription = this.store
        .pipe(select(fromFareCalculation.selectPageState))
        .subscribe((data) => {
          if (data && data != undefined) {
            if (data["code"] == 200) {
              Helpers.setLoading(false);
              this.toastr.success(data["message"]);
              this.stateSubscription.unsubscribe();

              this.router.navigate(["/fare-calculation/list"]);
            } else {
              Helpers.setLoading(false);
              this.toastr.error(data["message"]);
            }
          }
        });

    } else if (!this.addEditFareCalculationForm.controls.fareCalculation_service_types.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
}
