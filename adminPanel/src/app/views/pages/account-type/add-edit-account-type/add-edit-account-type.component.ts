import { Component, OnInit } from '@angular/core';
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

import * as accountTypeActions from "../state/account-type.actions";
import * as fromAccountType from "../state/account-type.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { ModelService } from '../../model/model.service';


@Component({
  selector: 'kt-add-account-type',
  templateUrl: './add-edit-account-type.component.html',
  styleUrls: ['./add-edit-account-type.component.scss']
})
export class AddAccountTypeComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditAccountTypeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  ACCOUNT_TYPE_CONST: any;
  models: any = [];
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private modelService: ModelService
  ) {
    this.ACCOUNT_TYPE_CONST = this.translate.instant('ACCOUNT_TYPE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.ACCOUNT_TYPE'));
    titleService.setTitle(APPNAME + " | " + this.ACCOUNT_TYPE_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditAccountTypeForm();

    this.Editor = ClassicEditor;
  }
  buildAddEditAccountTypeForm() {
    this.addEditAccountTypeForm = this._formBuilder.group({
      account_type_name: ["", [Validators.required, Validators.pattern(validataion.alphaOnly), Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      account_type_status: ["ACTIVE", []],
    });
  }


  async onSubmit() {
    this.submitted = true;
    if (this.addEditAccountTypeForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditAccountTypeForm.value;

      let obj = {
        account_type_name: form.account_type_name,
        account_type_status: form.account_type_status
      };

      this.stateSubscription = this.store.dispatch(new accountTypeActions.AddAccountType(obj))
      this.stateSubscription = this.store.pipe(select(fromAccountType.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/account-type/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditAccountTypeForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}

@Component({
  selector: 'kt-edit-account-type',
  templateUrl: './add-edit-account-type.component.html',
  styleUrls: ['./add-edit-account-type.component.scss']
})
export class EditAccountTypeComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditAccountTypeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  ACCOUNT_TYPE_CONST: any;
  models: any = [];
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {
    this.ACCOUNT_TYPE_CONST = this.translate.instant('ACCOUNT_TYPE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.ACCOUNT_TYPE'));
    titleService.setTitle(APPNAME + " | " + this.ACCOUNT_TYPE_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditAccountTypeForm();
    this.getAccountTypeDetails();
  }

  buildAddEditAccountTypeForm() {
    this.addEditAccountTypeForm = this._formBuilder.group({
      account_type_name: ["", [Validators.required,Validators.pattern(validataion.alphaOnly),Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      account_type_status: ["ACTIVE", []],
    });
  }

  getAccountTypeDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new accountTypeActions.LoadAccountType(this.id));

    this.stateSubscription = this.store.pipe(select(fromAccountType.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            account_type_name: result.account_type_name,
            account_type_status: result.account_type_status
          };
          await this.addEditAccountTypeForm.patchValue(fd);
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
    if (this.addEditAccountTypeForm.valid) {

      const form = this.addEditAccountTypeForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          account_type_name: form.account_type_name,
          account_type_status: form.account_type_status
        }
      };

      this.stateSubscription = this.store.dispatch(new accountTypeActions.UpdateAccountType(obj))

      this.stateSubscription = this.store.pipe(select(fromAccountType.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/account-type/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditAccountTypeForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }


}
