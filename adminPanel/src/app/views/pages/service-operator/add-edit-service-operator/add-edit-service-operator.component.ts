import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';

import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';
import * as serviceOperatorActions from "../state/service-operator.actions";
import * as fromServiceOperator from "../state/service-operator.reducer";

import { TranslateService } from '@ngx-translate/core';
import { CountryService } from '../../country/country.service';
import { CityService } from '../../city/city.service';
import { ServiceOperatorService } from '../service-operator.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'kt-add-service-operator',
  templateUrl: './add-edit-service-operator.component.html',
  styleUrls: ['./add-edit-service-operator.component.scss']
})
export class AddServiceOperatorComponent implements OnInit {
  Editor: any;
  isAdd: Boolean = true;
  addEditServiceOperatorForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  selectedItemsServices: any = [];
  SERVICEOPERATOR_CONST: any;
  id: any;

  countries: any = [];
  cities: any = [];
  operators: any = [];
  cityList: any = [];
  serviceTypes: any = [];

  dropdownSettingsServices = {};

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
    private ServiceOperatorService: ServiceOperatorService
  ) {

    this.SERVICEOPERATOR_CONST = this.translate.instant('SERVICEOPERATOR');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_OPERATOR'));
    titleService.setTitle(APPNAME + " | " + this.SERVICEOPERATOR_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditServiveOperatorForm();
    this.changeCountry(environment.webDefaultCountry);
    // this.getAllOperators();
    this.getAllServiceTypes();

    this.dropdownSettingsServices = {
      singleSelection: false,
      text: "Select Services",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }

  onItemServicesSelect(item: any) {
    this.selectedItemsServices[item];
  }

  onItemServicesDeSelect(item: any) {
    this.selectedItemsServices.filter(function (el) {
      if (el.id == item.id) {
        delete this.selectedItemsServices[el];
      }
    });
  }
  onServicesSelectAll(items: any) {


  }
  onServicesDeSelectAll(items: any) {


  }

  buildAddEditServiveOperatorForm() {
    this.addEditServiceOperatorForm = this._formBuilder.group({
      // serviceOperator_countryId: ["", [Validators.required]],
      serviceOperator_cityId: ["", [Validators.required]],
      serviceOperator_serviceTypeId: ["", [Validators.required]],
      serviceOperator_serviceOperatorId: ["", [Validators.required]],
      serviceOperator_status: ["ACTIVE", []]
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
  async changeCountry(country) {
    Helpers.setLoading(true)
    if (country) {
      let countryId = { city_countryId: country }
      await this.cityService.getCityListServiceOperator(countryId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.cities = await data['data'];
          Helpers.setLoading(false)
          this.dtr.detectChanges();
        }
      })
    }

  }
  async changeCity(cityId) {

    Helpers.setLoading(true)
    if (cityId) {
      // let city = {cityId : cityId}
      await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.operators = await data['data'];
          Helpers.setLoading(false)
          this.dtr.detectChanges();
        }
      })
    }
  }

  getAllServiceTypes() {
    Helpers.setLoading(true);
    this.ServiceOperatorService.getAllServiceTypes().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {

          data['data'].forEach(element => {
            this.serviceTypes.push({
              id: element._id,
              itemName: element.serviceType_name
            })
          });
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
    if (this.addEditServiceOperatorForm.valid) {
      this.saveData()
    } else if (!this.addEditServiceOperatorForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }
  saveData() {
    Helpers.setLoading(true);
    const result = this.addEditServiceOperatorForm.value;

    let serviceTypeArray = [];
    result.serviceOperator_serviceTypeId.forEach(element => {
      serviceTypeArray.push(element.id)
    });
    let obj = {
      serviceOperator_countryId: environment.webDefaultCountry,
      serviceOperator_cityId: result.serviceOperator_cityId,
      serviceOperator_serviceTypeId: serviceTypeArray,
      serviceOperator_serviceOperatorId: result.serviceOperator_serviceOperatorId,
      serviceOperator_status: result.serviceOperator_status,
    };
    this.stateSubscription = this.store.dispatch(new serviceOperatorActions.AddServiceOperator(obj))
    this.stateSubscription = this.store.pipe(select(fromServiceOperator.selectPageState)).subscribe((data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          this.toastr.success(data['message']);
          this.stateSubscription.unsubscribe();
          this.router.navigate(['/service-operator/list'])
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
          this.stateSubscription.unsubscribe();

        }
      }
    });
  }

}

@Component({
  selector: 'kt-edit-service-operator',
  templateUrl: './add-edit-service-operator.component.html',
  styleUrls: ['./add-edit-service-operator.component.scss']
})
export class EditServiceOperatorComponent implements OnInit {

  id: any;
  isAdd: Boolean = false;
  addEditServiceOperatorForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  SERVICEOPERATOR_CONST: any = [];
  countries: any = [];
  cities: any = [];
  operators: any = [];
  //Multiselect service types
  serviceTypes: any = [];
  selectedItemsServices: any = [];
  dropdownSettingsServices = {};

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
    private ServiceOperatorService: ServiceOperatorService
  ) {
    // SET SUBHEAD AND TITLE
    this.SERVICEOPERATOR_CONST = this.translate.instant('SERVICEOPERATOR');
    this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_OPERATOR'));
    titleService.setTitle(APPNAME + " | " + this.SERVICEOPERATOR_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditServiceOperatorForm();

    this.getServiceOperatorDetails();
    // this.getAllCountries();
    this.dropdownSettingsServices = {
      singleSelection: false,
      text: "Select Services",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }
  //yt
  onItemServicesSelect(item: any) {
    this.selectedItemsServices[item];
  }
  onItemServicesDeSelect(item: any) {
    this.selectedItemsServices.filter(function (el) {
      if (el.id == item.id) {
        delete this.selectedItemsServices[el];
      }
    });
  }
  onServicesSelectAll(items: any) {

  }
  onServicesDeSelectAll(items: any) {

  }

  buildAddEditServiceOperatorForm() {
    this.addEditServiceOperatorForm = this._formBuilder.group({
      // serviceOperator_countryId: ["", [Validators.required]],
      serviceOperator_cityId: ["", [Validators.required]],
      serviceOperator_serviceTypeId: ["", [Validators.required]],
      serviceOperator_serviceOperatorId: ["", [Validators.required]],
      serviceOperator_status: ["ACTIVE", []]
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
  async changeCountry(country) {
    Helpers.setLoading(true)
    if (country) {
      let countryId = { city_countryId: country }
      await this.cityService.getCountryCities(countryId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.cities = await data['data'];
          Helpers.setLoading(false)
          this.dtr.detectChanges();
        }
      })
    }

  }
  async changeCity(cityId) {

    Helpers.setLoading(true)
    if (cityId) {
      // let city = {cityId : cityId}
      await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.operators = await data['data'];
          Helpers.setLoading(false)
          this.dtr.detectChanges();
        }
      })
    }
  }

  async getAllServiceTypes(param) {
    Helpers.setLoading(true);
    await this.ServiceOperatorService.getAllServiceTypes().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.serviceTypes = await data['data'];

          if (param && param.length && this.serviceTypes.length) {
            await param.map(element => {
              let ar = this.serviceTypes.filter((x) => x.id == element);
              if (ar.length) {
                this.selectedItemsServices.push(ar[0]);
              }
              if (this.selectedItemsServices.length == param) {
                if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                  this.dtr.detectChanges();
                }
              }
            })
          }

          // await data['data'].map(element => {
          //   this.serviceTypes.push({
          //     id: element._id,
          //     itemName: element.serviceType_name
          //   })
          // });
          // if (this.dtr && !(this.dtr as ViewRef).destroyed) {
          //   this.dtr.detectChanges();
          // }
          Helpers.setLoading(false);
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }

  getServiceOperatorDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new serviceOperatorActions.LoadServiceOperator(this.id));
    this.stateSubscription = this.store.pipe(select(fromServiceOperator.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = await data['data'];
          let fd = {
            // serviceOperator_countryId: result.serviceOperator_countryId,
            serviceOperator_cityId: result.serviceOperator_cityId != null && result.serviceOperator_cityId != undefined ? result.serviceOperator_cityId : "",
            serviceOperator_serviceOperatorId: result.serviceOperator_serviceOperatorId != null && result.serviceOperator_serviceOperatorId != undefined ? result.serviceOperator_serviceOperatorId : "",
            serviceOperator_status: result.serviceOperator_status != null && result.serviceOperator_status != undefined ? result.serviceOperator_status : "",
          };
          await this.getAllServiceTypes(result.serviceOperator_serviceTypeId || []);
          await this.changeCountry(result.serviceOperator_countryId)
          await this.changeCity(result.serviceOperator_cityId)

          // to fecth details for service type
          // if (this.serviceTypes && this.serviceTypes.length) {

          //   this.serviceTypes.map(element => {
          //     console.log('---------------------1----', element.id)

          //     if (result.serviceOperator_serviceTypeId.indexOf(element.id.toString())) {
          //       console.log('-------------------------', element.id)
          //       this.selectedItemsServices.push(element);

          //       if (this.dtr && !(this.dtr as ViewRef).destroyed) {
          //         this.dtr.detectChanges();
          //       }
          //     }

          //   });
          // }

          this.addEditServiceOperatorForm.patchValue(fd);
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
  onSubmit() {
    this.submitted = true;

    if (this.addEditServiceOperatorForm.value.serviceOperator_serviceTypeId.length) {
      this.removeValidator();
    }
    if (this.addEditServiceOperatorForm.valid) {
      Helpers.setLoading(true);
      this.saveData()
    } else if (!this.addEditServiceOperatorForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 } 
  }

  removeValidator() {
    this.addEditServiceOperatorForm
      .get('serviceOperator_serviceTypeId')
      .setValidators([]);
    this.addEditServiceOperatorForm.get('serviceOperator_serviceTypeId').updateValueAndValidity();
  }


  saveData() {
    Helpers.setLoading(true);
    const result = this.addEditServiceOperatorForm.value;
    let serviceTypeArray = [];
    result.serviceOperator_serviceTypeId.forEach(element => {
      serviceTypeArray.push(element.id)
    });
    let obj = {
      id: this.id,
      data: {
        serviceOperator_countryId: environment.webDefaultCountry,
        serviceOperator_cityId: result.serviceOperator_cityId,
        serviceOperator_serviceTypeId: serviceTypeArray,
        serviceOperator_serviceOperatorId: result.serviceOperator_serviceOperatorId,
        serviceOperator_status: result.serviceOperator_status
      }
    }

    this.stateSubscription = this.store.dispatch(new serviceOperatorActions.UpdateServiceOperator(obj))
    this.stateSubscription = this.store.pipe(select(fromServiceOperator.selectPageState)).subscribe((data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false);
          this.toastr.success(data['message']);
          this.stateSubscription.unsubscribe();
          this.router.navigate(['/service-operator/list'])
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }
}