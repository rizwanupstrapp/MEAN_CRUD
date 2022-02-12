import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";
import { DatePipe } from '@angular/common';
import * as rideRequestActions from "../state/ride-request.actions";
import * as fromRideRequest from "../state/ride-request.reducer";

import { TranslateService } from "@ngx-translate/core";
import { environment } from "../../../../../environments/environment";
import { DriverManagementService } from "../../driver-management/driver-management.service";
import { OperatorService } from "../../operator/operator.service";
import { CountryService } from "../../country/country.service";
import { CityService } from "../../city/city.service";
import { ServiceTypeService } from "../../service-type/service-type.service";

@Component({
  selector: 'kt-view-ride-request',
  templateUrl: './view-ride-request.component.html',
  styleUrls: ['./view-ride-request.component.scss']
})
export class ViewRideRequestComponent implements OnInit {

  Editor: any;
  viewRideRequestForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  element: any = false;
  RIDE_REQUEST_CONST: any;
  id: any;

  users: any = [];
  operator: any = [];
  country: any = [];
  city: any = [];
  serviceType: any = [];

  rideRequest_ride_id;
  rideRequest_user_name;
  rideRequest_pickup_location;
  rideRequest_dropoff_location;
  rideRequest_ride_status;
  rideRequest_createdOn;
  rideRequest_approx_fare_coin;
  rideRequest_ride_complete_date;
  rideRequest_ride_pickup_waiting_time;
  rideRequest_ride_distance;
  rideRequest_tip;
  rideRequest_payment_method;
  rideRequest_payment_status;
  rideRequest_driver_name;
  rideRequest_city_name;
  rideRequest_operator_name;
  rideRequest_service_type;
  rideRequest_ride_cancel_reason_other;
  forRefundHide: boolean;

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
    private driverService: DriverManagementService,
    private operatorService: OperatorService,
    private countryService: CountryService,
    private cityService: CityService,
    private serviceTypeService: ServiceTypeService,
    public datepipe: DatePipe
  ) {
    this.RIDE_REQUEST_CONST = this.translate.instant('RIDE_REQUEST');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_REQUEST'));
    titleService.setTitle(APPNAME + " | " + this.RIDE_REQUEST_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildViewRideRequestForm();
    this.getRideRequestDetails();
  }

  buildViewRideRequestForm() {
    this.viewRideRequestForm = this._formBuilder.group({
      rideRequest_ride_id: [""],
      rideRequest_user_name: [""],
      rideRequest_driver_name: [""],
      rideRequest_operator_name: [""],
      rideRequest_country_name: [""],
      rideRequest_city_name: [""],
      rideRequest_pickup_location: [""],
      rideRequest_dropoff_location: [""],
      rideRequest_ride_status: [""],
      rideRequest_service_type: [""],
      rideRequest_createdOn: [""],
      rideRequest_ride_complete_date: [""],
      rideRequest_ride_pickup_waiting_time: [""],
      rideRequest_ride_distance: [""],
      rideRequest_tip: [""],
      rideRequest_approx_fare_coin: [""],
      rideRequest_payment_method: [""],
      rideRequest_ride_cancel_reason_other: [""],
      rideRequest_payment_status: [""]
    });
  }

  getDriverDetail(driverId) {
    Helpers.setLoading(true);
    if(driverId == null){
  
        // this.viewRideRequestForm.patchValue({
        //   rideRequest_driver_name: "-"
        // })
        this.rideRequest_driver_name = "Not Assigned"
     
    }else{
    
      this.driverService.getDriverById(driverId).subscribe(async (data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            this.users = data['data'];
            // this.users = this.users.user_firstName + " " + this.users.user_lastName

            this.rideRequest_driver_name = this.users.user_firstName + " " + this.users.user_lastName
  
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
  }

  getOperatorDetail(operatorId) {
    Helpers.setLoading(true);
    this.operatorService.getOperatorById(operatorId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.operator = data['data'];
          this.rideRequest_operator_name = this.operator.user_operatorInfo.operatorName ? this.operator.user_operatorInfo.operatorName : ""

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

  getCountryDetail(countryId) {
    Helpers.setLoading(true);
    this.countryService.getCountryById(countryId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.country = data['data'];
          this.country = this.country.country_name.filter((obj) => obj.lang == environment.webDefaultLang)[0].title

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

  getCityDetail(cityId) {
    Helpers.setLoading(true);
    this.cityService.getCityById(cityId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.city = data['data'];
          this.rideRequest_city_name = this.city.city_name.filter((obj) => obj.lang == environment.webDefaultLang)[0].title

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

  getServiceTypeDetail(serviceTypeId) {
    Helpers.setLoading(true);
    this.serviceTypeService.getServiceTypeById(serviceTypeId).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.serviceType = data['data'];
          // this.serviceType = this.serviceType.serviceType_name.filter((obj) => obj.lang == environment.webDefaultLang)[0].title
          this.rideRequest_service_type = this.serviceType.serviceType_name.filter((obj) => obj.lang == environment.webDefaultLang)[0].title


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

  getRideRequestDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new rideRequestActions.LoadRideRequest(this.id));
    this.stateSubscription = this.store.pipe(select(fromRideRequest.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];
          this.rideRequest_ride_id =  result.rideRequest_ride_id,
          this.rideRequest_user_name = result.rideRequest_first_name + " " + result.rideRequest_last_name,
          this.rideRequest_pickup_location =  result.rideRequest_pickup_location,
          this.rideRequest_dropoff_location = result.rideRequest_dropoff_location,
          this.rideRequest_createdOn = new Date(result.rideRequest_createdOn).toDateString() + ", " + new Date(result.rideRequest_createdOn).toLocaleTimeString(),
          this.rideRequest_createdOn  = this.datepipe.transform(this.rideRequest_createdOn , 'MMM d, y, h:mm a')

          this.rideRequest_approx_fare_coin = result.rideRequest_approx_fare_coin,
          this.rideRequest_ride_distance = result.rideRequest_ride_distance,
          this.rideRequest_tip = result.rideRequest_tip,
          this.rideRequest_payment_method = result.rideRequest_payment_method,
          this.rideRequest_payment_status = result.rideRequest_payment_status
          // this.rideRequest_ride_cancel_reason_other = result.rideRequest_ride_cancel_reason_other
          if( result.rideRequest_ride_status == 0 ) {
            this.rideRequest_ride_status = "INPROGRESS";
          } else if ( result.rideRequest_ride_status == 1 ) {
            this.rideRequest_ride_status = "ONTHEWAY";
          } else if ( result.rideRequest_ride_status == 2 ) {
            this.rideRequest_ride_status = "PICKUP_POINT";
          } else if ( result.rideRequest_ride_status == 3 ) {
            this.rideRequest_ride_status = "ONRIDE";
          } else if ( result.rideRequest_ride_status == 4 ){
            this.rideRequest_ride_status = "COMPLETED";
          } else if ( result.rideRequest_ride_status == 5 ) {
            this.rideRequest_ride_status = "CANCELLED";
          } else if ( result.rideRequest_ride_status == 6 ) {
            this.rideRequest_ride_status = "AUTO_CANCELLED";
          }
          if(result.rideRequest_ride_status == 0){
            this.rideRequest_ride_complete_date = '-'  
          }else{
            this.rideRequest_ride_complete_date = new Date(result.rideRequest_ride_complete_date) 
            if(result.rideRequest_ride_complete_date){

              this.rideRequest_ride_complete_date = this.datepipe.transform(this.rideRequest_ride_complete_date, 'MMM d, y, h:mm a')
            }else{
              this.rideRequest_ride_complete_date = '-'
            }
          }
          if(result.rideRequest_ride_cancel_reason_other == undefined) {
            this.forRefundHide = true;  // hide
          } else {
            this.forRefundHide = false;  // show
            this.rideRequest_ride_cancel_reason_other = result.rideRequest_ride_cancel_reason_other
          }
          if(result.rideRequest_ride_pickup_waiting_time == 0){
    
            this.rideRequest_ride_pickup_waiting_time = 0

          }else{
            this.rideRequest_ride_pickup_waiting_time = new Date(result.rideRequest_ride_pickup_waiting_time) 
            this.rideRequest_ride_pickup_waiting_time = this.datepipe.transform(this.rideRequest_ride_pickup_waiting_time, 'MMM d, y, h:mm a')
          }
        
          await this.getDriverDetail(result.rideRequest_driver_id || null)
          await this.getOperatorDetail(result.rideRequest_operator_id || [])
          await this.getCountryDetail(result.rideRequest_country_id || [])
          await this.getCityDetail(result.rideRequest_city_id || [])
          await this.getServiceTypeDetail(result.rideRequest_service_id || [])

          // this.viewRideRequestForm.patchValue(fd);
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
}
