import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import *as rideRatingActions from "../state/ride-rating.actions";
import *as fromRideRating from "../state/ride-rating.reducer";

import { TranslateService } from "@ngx-translate/core";
import { BrandService } from "../../brand/brand.service";
import { RideRatingService } from "../ride-rating.service";
import { validataion } from '../../../../helper/regular.expression';
import { async } from '@angular/core/testing';


@Component({
    selector: 'kt-add-ride-rating',
    templateUrl: './add-edit-ride-rating.component.html',
    styleUrls: ['./add-edit-ride-rating.component.scss']
})
export class AddRideRatingComponent implements OnInit {

    isAdd: Boolean = true;
    addEditRideRatingForm: FormGroup;
    submitted: Boolean = false;
    stateSubscription: any;
    element: any = false;
    RIDE_RATING_CONST: any;
    id: any;


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
        private brandService: BrandService,
        private modelService: RideRatingService
    ) {
        this.RIDE_RATING_CONST = this.translate.instant('RIDE_RATING');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_RATING'));
        titleService.setTitle(APPNAME + "|" + this.RIDE_RATING_CONST.MODULE_NAME);
    }

    ngOnInit() {
        // this.buildAddEditModelForm();

    }



    buildAddEditModelForm() {
        // this.addEditRideRatingForm = this._formBuilder.group({
        //     model_brandId: ["", [Validators.required]],
        //     model_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
        // });
    }


}

@Component({
    selector: 'kt-edit-ride-rating',
    templateUrl: './add-edit-ride-rating.component.html',
    styleUrls: ['./add-edit-ride-rating.component.scss']
})
export class EditRideRatingComponent implements OnInit {

    isAdd: Boolean = false;
    addEditRideRatingForm: FormGroup;
    submitted: Boolean = false;
    stateSubscription: any;
    element: any = false;
    RIDE_RATING_CONST: any;
    id: any;

    rideRating_good_feedback;
    rideRating_bad_feedback;
    rideRating_rating;
    rideRating_requestId;
    rideRating_roleId;
    rideRating_fromUser;
    rideRating_toUser;
    rideRating_ride_Id;

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
        private brandService: BrandService,
        private modelService: RideRatingService
    ) {
        this.RIDE_RATING_CONST = this.translate.instant('RIDE_RATING');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_RATING'));
        titleService.setTitle(APPNAME + "|" + this.RIDE_RATING_CONST.MODULE_NAME);
    }

    ngOnInit() {
        this.buildAddEditModelForm();
        this.getModelDetail();

    }


    buildAddEditModelForm() {
        this.addEditRideRatingForm = this._formBuilder.group({
            rideRating_good_feedback: [""],
            rideRating_bad_feedback: [""],
            rideRating_rating: [""],
            rideRating_requestId: [""],
            rideRating_roleId: [""],
            rideRating_fromUser: [""],
            rideRating_toUser: [""],
            rideRating_ride_Id: [""]
        });
    }

    getModelDetail() {
        this.id = this._route.snapshot.params['id'];
        Helpers.setLoading(true);

        this.stateSubscription = this.store.dispatch(new rideRatingActions.LoadRideRating(this.id));
        this.stateSubscription = this.store.pipe(select(fromRideRating.selectPageState)).subscribe(async (data) => {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    let result = await data['data'];
                    if(result.length > 0){
                        this.rideRating_rating = result[0].rideRating_rating ?  result[0].rideRating_rating : 0 ;
                        this.rideRating_requestId = result[0].rideRating_requestId ?  result[0].rideRating_requestId :"";
                        this.rideRating_roleId = result[0].rideRating_roleId ? result[0].rideRating_roleId  : "";
                        this.rideRating_fromUser = result[0].rideRating_fromUser ? result[0].rideRating_fromUser : ""
                        this.rideRating_toUser = result[0].rideRating_toUser ? result[0].rideRating_toUser : "";
                        this.rideRating_ride_Id = result[0].rideRating_ride_Id ?  result[0].rideRating_ride_Id : "";
                        if ( result[0].rideRating_good_feedback == "" ) {
                            this.rideRating_good_feedback = "Not Available"
                        } else {
                            this.rideRating_good_feedback = result[0].rideRating_good_feedback;
                        }
                        
                       if( result[0].rideRating_bad_feedback == "" ){
                        this.rideRating_bad_feedback = "Not Available"
                       } else {
                         this.rideRating_bad_feedback = result[0].rideRating_bad_feedback;
                       }
                        
                       
        
                         // it is used to detect changes for html file
                         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                            this.dtr.detectChanges();
                          }
                        Helpers.setLoading(false);
                        this.stateSubscription.unsubscribe();
                    }else{
                        this.rideRating_rating =  0 ;
                        this.rideRating_requestId = "";
                        this.rideRating_roleId = "";
                        this.rideRating_fromUser = ""
                        this.rideRating_toUser =  "";
                        this.rideRating_ride_Id =  "";
                        this.rideRating_good_feedback = "Not Available";
                        this.rideRating_bad_feedback = "Not Available"

                        if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                            this.dtr.detectChanges();
                          }
                        Helpers.setLoading(false);
                        this.stateSubscription.unsubscribe();

                    }
                  
                } else {
                    Helpers.setLoading(false);

                    this.toastr.error(data['message']);
                    this.stateSubscription.unsubscribe();
                }
            }
        },error=>{
            this.toastr.error(error['message']);

        })
    }

}
