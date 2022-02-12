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

import * as reasonActions from "../state/reason.actions";
import * as fromReason from "../state/reason.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { RolesService } from '../../roles/roles.service';

@Component({
  selector: 'kt-add-reason',
  templateUrl: './add-edit-reason.component.html',
  styleUrls: ['./add-edit-reason.component.scss']
})
export class AddReasonComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditReasonForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  roleLists: any = [];
  isNameSelected: boolean = false;
  REASON_CONST: any;
  id: any;

  // for show hid text field for reason type  
  forRefundHide: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "REFUND") {
      this.forRefundHide = true;  // hide
    } else {
      this.forRefundHide = false;  // show
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
    private rolesService: RolesService
  ) {
    this.REASON_CONST = this.translate.instant('REASON');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.REASON'));
    titleService.setTitle(APPNAME + " | " + this.REASON_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditReasonForm();
    this.getAllRolList();
    this.setRefundValidators();
    this.Editor = ClassicEditor;
  }

  buildAddEditReasonForm() {
    this.addEditReasonForm = this._formBuilder.group({
      reason_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      reason_role: ["", [Validators.required]],
      reason_fee: ["", [Validators.required,Validators.pattern(validataion.numericOnly)]],
      reason_time: ["", [Validators.required]],
      reason_type: ["", [Validators.required]],
      reason_feePayBy: ["", [Validators.required]],
      reason_typeCode: ["", [Validators.required]],
      reason_status: ["ACTIVE", []]
    });
  }
  // conditional base validation
  setRefundValidators() {
    const roleControl = this.addEditReasonForm.get('reason_role');
    const feeControl = this.addEditReasonForm.get('reason_fee');
    const timeControl = this.addEditReasonForm.get('reason_time');
    const typeControl = this.addEditReasonForm.get('reason_type');
    const feePayByControl = this.addEditReasonForm.get('reason_feePayBy');
    this.addEditReasonForm.get('reason_type').valueChanges
      .subscribe(reasonCategory => {
        if (reasonCategory === 'REFUND') {
          roleControl.setValidators(null);
          feeControl.setValidators(null);
          timeControl.setValidators(null);
          typeControl.setValidators(null);
          feePayByControl.setValidators(null);
        }

        roleControl.updateValueAndValidity();
        feeControl.updateValueAndValidity();
        timeControl.updateValueAndValidity();
        typeControl.updateValueAndValidity();
        feePayByControl.updateValueAndValidity();
      });
  }

  getAllRolList() {
    Helpers.setLoading(true);
    this.rolesService.getRolesList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.roleLists = data['data'];
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
    event.preventDefault();
    this.submitted = true;
    if (this.addEditReasonForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditReasonForm.value;

      let obj = {
        reason_name: [{
          lang: 'EN',
          title: form.reason_name
        }],
        reason_role: form.reason_role,
        reason_fee: form.reason_fee.toString(),
        reason_time: form.reason_time,
        reason_type: form.reason_type,
        reason_feePayBy: form.reason_feePayBy,
        reason_typeCode: form.reason_typeCode,
        reason_status: form.reason_status
      };
      this.stateSubscription = this.store.dispatch(new reasonActions.AddReason(obj))
      this.stateSubscription = this.store.pipe(select(fromReason.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/reason/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditReasonForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}

@Component({
  selector: 'kt-edit-reason',
  templateUrl: './add-edit-reason.component.html',
  styleUrls: ['./add-edit-reason.component.scss']
})
export class EditReasonComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditReasonForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  isNameSelected: boolean = false;
  REASON_CONST: any;
  roleLists: any = [];
  id: any;

  // for show hid text field for reason type  
  forRefundHide: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "REFUND") {
      this.forRefundHide = true;  // hide
    } else {
      this.forRefundHide = false;  // show
    }
  }

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private dtr: ChangeDetectorRef,
    private rolesService: RolesService
  ) {
    this.REASON_CONST = this.translate.instant('REASON');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.REASON'));
    titleService.setTitle(APPNAME + " | " + this.REASON_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditReasonForm();
    this.getReasonDetails();
    this.getAllRolList();
    this.setRefundValidators();
  }

  buildAddEditReasonForm() {
    this.addEditReasonForm = this._formBuilder.group({
      reason_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      reason_role: ["", [Validators.required]],
      reason_fee: ["", [Validators.required,Validators.pattern(validataion.numericOnly)]],
      reason_time: ["", [Validators.required]],
      reason_type: ["", [Validators.required]],
      reason_feePayBy: ["", [Validators.required]],
      reason_typeCode: ["", [Validators.required]],
      reason_status: ["ACTIVE", []]
    });
  }
  // conditional base validation
  setRefundValidators() {
    const roleControl = this.addEditReasonForm.get('reason_role');
    const feeControl = this.addEditReasonForm.get('reason_fee');
    const timeControl = this.addEditReasonForm.get('reason_time');
    const typeControl = this.addEditReasonForm.get('reason_type');
    const feePayByControl = this.addEditReasonForm.get('reason_feePayBy');
    this.addEditReasonForm.get('reason_type').valueChanges
      .subscribe(reasonCategory => {
        if (reasonCategory === 'REFUND') {
          roleControl.setValidators(null);
          feeControl.setValidators(null);
          timeControl.setValidators(null);
          typeControl.setValidators(null);
          feePayByControl.setValidators(null);
        }

        roleControl.updateValueAndValidity();
        feeControl.updateValueAndValidity();
        timeControl.updateValueAndValidity();
        typeControl.updateValueAndValidity();
        feePayByControl.updateValueAndValidity();
      });
  }
  getAllRolList() {
    Helpers.setLoading(true);

    this.rolesService.getRolesList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.roleLists = data['data'];
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
  getReasonDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new reasonActions.LoadReason(this.id));

    this.stateSubscription = this.store.pipe(select(fromReason.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            reason_name: result.reason_name.filter((obj) => obj.lang == "EN")[0].title,
            reason_role: result.reason_role != null && result.reason_role != undefined ? result.reason_role : "",
            reason_fee: result.reason_fee.toString(),
            reason_time: result.reason_time,
            reason_type: result.reason_type != null && result.reason_type != undefined ? result.reason_type : "",
            reason_feePayBy: result.reason_feePayBy != null && result.reason_feePayBy != undefined ? result.reason_feePayBy : "",
            reason_typeCode: result.reason_typeCode,
            reason_status: result.reason_status != null && result.reason_status != undefined ? result.reason_status : "",
          };
          // for hidindg input field when data fetched
          if (result.reason_type == "REFUND") {
            this.forRefundHide = true;
          }
          await this.addEditReasonForm.patchValue(fd);
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
    if (this.addEditReasonForm.valid) {

      const form = this.addEditReasonForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          reason_name: [{
            lang: 'EN',
            title: form.reason_name
          }],
          reason_role: form.reason_role,
          reason_fee: form.reason_fee,
          reason_time: form.reason_time,
          reason_type: form.reason_type,
          reason_feePayBy: form.reason_feePayBy,
          reason_typeCode: form.reason_typeCode,
          reason_status: form.reason_status
        }
      };

      this.stateSubscription = this.store.dispatch(new reasonActions.UpdateReason(obj))

      this.stateSubscription = this.store.pipe(select(fromReason.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/reason/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditReasonForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}