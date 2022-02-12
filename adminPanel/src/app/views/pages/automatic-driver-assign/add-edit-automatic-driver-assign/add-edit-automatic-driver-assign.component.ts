import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import *as automaticDriverAssignActions from "../state/automatic-driver-assign.actions";
import *as fromAutomaticDriverAssign from "../state/automatic-driver-assign.reducer";

import { TranslateService } from "@ngx-translate/core";
import { CountryService } from "../../country/country.service";
import { CityService } from "../../city/city.service";
import { ServiceOperatorService } from "../../service-operator/service-operator.service";
import { environment } from '../../../../../environments/environment';
import { validataion } from '../../../../helper/regular.expression';

@Component({
  selector: 'kt-add-automatic-driver-assign',
  templateUrl: './add-edit-automatic-driver-assign.component.html',
  styleUrls: ['./add-edit-automatic-driver-assign.component.scss']
})
export class AddAutomaticDriverAssign implements OnInit {
  Editor: any;
  isAdd: Boolean = true;
  addEditDriverAssignForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  element: any = false;
  AUTOMATIC_DRIVER_ASSIGN_CONST: any;

  countries: any = [];
  cities: any = [];
  operators: any = [];

  id: any;
  //variable declared

  city_countryId = [];

  dropdoenSettingsCountry = {};
  dropdownSettingsCity = {};

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
    this.AUTOMATIC_DRIVER_ASSIGN_CONST = this.translate.instant("AUTOMATIC_DRIVER_ASSIGN");
    //SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(
      this.translate.instant("MENU.AUTOMATIC_DRIVER_ASSIGN")
    );
    titleService.setTitle(
      APPNAME + " | " + this.AUTOMATIC_DRIVER_ASSIGN_CONST.MODULE_NAME
    );
  }

  ngOnInit() {
    this.buildAddEditAutomaticDriverAssignForm();
    // this.getAllCountries();
    this.changeCountry(environment.webDefaultCountry);
  }


  buildAddEditAutomaticDriverAssignForm() {
    this.addEditDriverAssignForm = this._formBuilder.group({
      // automaticDriverAssign_countryId : ["",[Validators.required]],
      automaticDriverAssign_cityId: ["", [Validators.required]],
      automaticDriverAssign_franchiseId: ["", [Validators.required]],
      automaticDriverAssign_timeToReachPickup: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_distanceFromPickup: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_driverIdleTime: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_no_driver_available_time: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_auto_cancellation_time: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_status: ["ACTIVE", [Validators.required]]
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
    Helpers.setLoading(true);
    if (country) {
      let countryId = { city_countryId: country };
      await this.cityService
        .getCityListAutomaticDriverAssign(countryId)
        .subscribe(async (data) => {
          if (data["code"] == 200) {
            this.cities = await data["data"];
            Helpers.setLoading(false);
            this.dtr.detectChanges();
          }
        })
    }
  }

  async changeCity(cityId) {
    if (cityId) {
      await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.operators = await data['data'];
          Helpers.setLoading(false)
          this.dtr.detectChanges();
        }
      })
    }
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditDriverAssignForm.valid) {
      Helpers.setLoading(true);
      const form = this.addEditDriverAssignForm.value;

      let obj = {
        automaticDriverAssign_countryId: environment.webDefaultCountry,
        automaticDriverAssign_cityId: form.automaticDriverAssign_cityId,
        automaticDriverAssign_franchiseId: form.automaticDriverAssign_franchiseId,
        automaticDriverAssign_timeToReachPickup: form.automaticDriverAssign_timeToReachPickup,
        automaticDriverAssign_distanceFromPickup: form.automaticDriverAssign_distanceFromPickup,
        automaticDriverAssign_driverIdleTime: form.automaticDriverAssign_driverIdleTime,
        automaticDriverAssign_no_driver_available_time: form.automaticDriverAssign_no_driver_available_time,
        automaticDriverAssign_auto_cancellation_time: form.automaticDriverAssign_auto_cancellation_time,
        automaticDriverAssign_status: form.automaticDriverAssign_status
      };

      this.stateSubscription = this.store.dispatch(new automaticDriverAssignActions.AddAutomaticDriverAssign(obj));
      this.stateSubscription = this.store.pipe(select(fromAutomaticDriverAssign.selectPageState))
        .subscribe((data) => {
          if (data && data != undefined) {
            Helpers.setLoading(false);
            if (data["code"] == 200) {
              this.toastr.success(data["message"]);
              this.stateSubscription.unsubscribe();
              this.router.navigate(["/automatic-driver-assign/list"]);
            } else {
              this.toastr.error(data["message"]);
              this.stateSubscription.unsubscribe();
            }
          }
        });
    }
  }
}


// Edit Automatic Driver Assign.
@Component({
  selector: 'kt-edit-automatic-driver-assign',
  templateUrl: './add-edit-automatic-driver-assign.component.html',
  styleUrls: ['./add-edit-automatic-driver-assign.component.scss']
})
export class EditAutomaticDriverAssign implements OnInit {
  Editor: any;
  isAdd: Boolean = false;
  addEditDriverAssignForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  element: any = false;
  AUTOMATIC_DRIVER_ASSIGN_CONST: any = [];

  countries: any = [];
  cities: any = [];
  operators: any = [];

  id: any;
  //variable declared
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
    this.AUTOMATIC_DRIVER_ASSIGN_CONST = this.translate.instant("AUTOMATIC_DRIVER_ASSIGN");
    //SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant("MENU.AUTOMATIC_DRIVER_ASSIGN"));
    titleService.setTitle(APPNAME + " | " + this.AUTOMATIC_DRIVER_ASSIGN_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditAutomaticDriverAssignForm();
    // this.getAllCountries();
    // this.changeCountry(environment.webDefaultCountry);
    this.getAutoamticDriverAssignDetails();
  }

  buildAddEditAutomaticDriverAssignForm() {
    this.addEditDriverAssignForm = this._formBuilder.group({
      // automaticDriverAssign_countryId: ["", [Validators.required]],
      automaticDriverAssign_cityId: ["", [Validators.required]],
      automaticDriverAssign_franchiseId: ["", [Validators.required]],
      automaticDriverAssign_timeToReachPickup: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_distanceFromPickup: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_driverIdleTime: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_no_driver_available_time: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_auto_cancellation_time: ["", [Validators.required, Validators.pattern(validataion.numericOnly)]],
      automaticDriverAssign_status: ["ACTIVE", [Validators.required]]
    })
  }

  setValiator(type) {
    const form = this.addEditDriverAssignForm;
    if (type == "set") {
      form.patchValue({ automaticDriverAssign_franchiseId: '' });
      form.get('automaticDriverAssign_franchiseId').clearValidators();
      form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
      form.get('automaticDriverAssign_franchiseId').setValidators([Validators.required]);
      form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
      this.dtr.detectChanges();
    } else {
      form.patchValue({ automaticDriverAssign_franchiseId: '' });
      form.get('automaticDriverAssign_franchiseId').clearValidators();
      form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
      form.get('automaticDriverAssign_franchiseId').setValidators([Validators.required]);
      form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
      this.dtr.detectChanges();
    }
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
  //   })
  // }

  async changeCountry(country) {
    Helpers.setLoading(true);
    if (country) {
      let countryId = { city_countryId: country }
      await this.cityService.getCountryCities(countryId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.cities = await data['data'];
          Helpers.setLoading(false);
          this.dtr.detectChanges();
        }
      })
    } else {
      this.setValiator("set");
      this.operators = [];
      // Helpers.setLoading(false);
      this.dtr.detectChanges();
    }
  }

  async changeCity(cityId, type = 0) {
    Helpers.setLoading(true)
    if (cityId) {
      if (type == 1) {
        this.setValiator("set");
      }
      await this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(async (data) => {

        if (data['code'] == 200) {
          this.operators = await data['data'];
          Helpers.setLoading(false)
          this.dtr.detectChanges();
        }
      })
    }
  }

  async getAutoamticDriverAssignDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new automaticDriverAssignActions.LoadAutomaticDriverAssign(this.id));
    this.stateSubscription = this.store.pipe(select(fromAutomaticDriverAssign.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          Helpers.setLoading(false)
          let result = data['data'];
          let fd = {
            // automaticDriverAssign_countryId: result.automaticDriverAssign_countryId,
            automaticDriverAssign_cityId: result.automaticDriverAssign_cityId != null && result.automaticDriverAssign_cityId != undefined ? result.automaticDriverAssign_cityId : "",
            automaticDriverAssign_franchiseId: result.automaticDriverAssign_franchiseId && result.automaticDriverAssign_franchiseId != undefined ? result.automaticDriverAssign_franchiseId : "",
            automaticDriverAssign_timeToReachPickup: result.automaticDriverAssign_timeToReachPickup,
            automaticDriverAssign_distanceFromPickup: result.automaticDriverAssign_distanceFromPickup,
            automaticDriverAssign_driverIdleTime: result.automaticDriverAssign_driverIdleTime,
            automaticDriverAssign_no_driver_available_time: result.automaticDriverAssign_no_driver_available_time,
            automaticDriverAssign_auto_cancellation_time: result.automaticDriverAssign_auto_cancellation_time,
            automaticDriverAssign_status: result.automaticDriverAssign_status
          };
          this.changeCountry(result.automaticDriverAssign_countryId)
          this.changeCity(result.automaticDriverAssign_cityId)

          await this.addEditDriverAssignForm.patchValue(fd);
          this.stateSubscription.unsubscribe();
        } else {

          Helpers.setLoading(false);
          this.toastr.error(data['message']);
          this.stateSubscription.unsubscribe();
        }
      }
    })
  }

  async onSubmit() {
    this.submitted = true;
    Helpers.setLoading(true);
    if (this.addEditDriverAssignForm.valid) {
      const form = this.addEditDriverAssignForm.value;
      let obj = {
        id: this.id,
        data: {
          automaticDriverAssign_countryId: environment.webDefaultCountry,
          automaticDriverAssign_cityId: form.automaticDriverAssign_cityId,
          automaticDriverAssign_franchiseId: form.automaticDriverAssign_franchiseId,
          automaticDriverAssign_timeToReachPickup: form.automaticDriverAssign_timeToReachPickup,
          automaticDriverAssign_distanceFromPickup: form.automaticDriverAssign_distanceFromPickup,
          automaticDriverAssign_driverIdleTime: form.automaticDriverAssign_driverIdleTime,
          automaticDriverAssign_no_driver_available_time: form.automaticDriverAssign_no_driver_available_time,
          automaticDriverAssign_auto_cancellation_time: form.automaticDriverAssign_auto_cancellation_time,
          automaticDriverAssign_status: form.automaticDriverAssign_status
        }
      }

      this.stateSubscription = this.store.dispatch(new automaticDriverAssignActions.UpdateAutomaticDriverAssign(obj))
      this.stateSubscription = this.store.pipe(select(fromAutomaticDriverAssign.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/automatic-driver-assign/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      })
    } else {
      Helpers.setLoading(false);
    }
  }
}