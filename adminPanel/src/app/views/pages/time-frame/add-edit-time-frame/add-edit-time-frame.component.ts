import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';

import * as timeFrameActions from "../state/time-frame.actions";
import * as fromTimeFrame from "../state/time-frame.reducer";

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-add-time-frame',
  templateUrl: './add-edit-time-frame.component.html',
  styleUrls: ['./add-edit-time-frame.component.scss']
})
export class AddTimeFrameComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditTimeFrameForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TIMEFRAME_CONST: any;
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
    private translate: TranslateService
  ) {
    this.TIMEFRAME_CONST = this.translate.instant('TIMEFRAME');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.TIME_FRAME'));
    titleService.setTitle(APPNAME + " | " + this.TIMEFRAME_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditTimeFrameForm();
  }
  buildAddEditTimeFrameForm() {
    this.addEditTimeFrameForm = this._formBuilder.group({
      timeFrame_timeType: ["Day", []],
      timeFrame_fromTime: ["", [Validators.required,]],
      timeFrame_toTime: ["", [Validators.required,]],
      timeFrame_status: ["ACTIVE", []],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditTimeFrameForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditTimeFrameForm.value;

      let obj = {
        timeFrame_timeType: form.timeFrame_timeType,
        timeFrame_fromTime: form.timeFrame_fromTime,
        timeFrame_toTime: form.timeFrame_toTime,
        timeFrame_status: form.timeFrame_status
      };

      this.stateSubscription = this.store.dispatch(new timeFrameActions.AddTimeFrame(obj))
      this.stateSubscription = this.store.pipe(select(fromTimeFrame.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/time-frame/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();
          }
        }
      });
    } else if (!this.addEditTimeFrameForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }
}

@Component({
  selector: 'kt-edit-time-frame',
  templateUrl: './add-edit-time-frame.component.html',
  styleUrls: ['./add-edit-time-frame.component.scss']
})
export class EditTimeFrameComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditTimeFrameForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TIMEFRAME_CONST: any;
  id: any;

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
    private translate: TranslateService
  ) {
    this.TIMEFRAME_CONST = this.translate.instant('TIMEFRAME');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.TIME_FRAME'));
    titleService.setTitle(APPNAME + " | " + this.TIMEFRAME_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditTimeFrameForm();
    this.getTimeFrameDetails();
  }
  buildAddEditTimeFrameForm() {
    this.addEditTimeFrameForm = this._formBuilder.group({
      timeFrame_timeType: ["Day", []],
      timeFrame_fromTime: ["", [Validators.required,]],
      timeFrame_toTime: ["", [Validators.required,]],
      timeFrame_status: ["ACTIVE", []],
    });
  }
  getTimeFrameDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new timeFrameActions.LoadTimeFrame(this.id));

    this.stateSubscription = this.store.pipe(select(fromTimeFrame.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            timeFrame_timeType: result.timeFrame_timeType != null && result.timeFrame_timeType != undefined ? result.timeFrame_timeType : "",
            timeFrame_fromTime: result.timeFrame_fromTime,
            timeFrame_toTime: result.timeFrame_toTime,
            timeFrame_status: result.timeFrame_status != null && result.timeFrame_status != undefined ? result.timeFrame_status : "",
          };
          await this.addEditTimeFrameForm.patchValue(fd);
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
    if (this.addEditTimeFrameForm.valid) {

      const form = this.addEditTimeFrameForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          timeFrame_timeType: form.timeFrame_timeType,
          timeFrame_fromTime: form.timeFrame_fromTime,
          timeFrame_toTime: form.timeFrame_toTime,
          timeFrame_status: form.timeFrame_status
        }
      };

      this.stateSubscription = this.store.dispatch(new timeFrameActions.UpdateTimeFrame(obj))

      this.stateSubscription = this.store.pipe(select(fromTimeFrame.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/time-frame/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditTimeFrameForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }
}
