import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';
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


import * as trimActions from "../state/trim.actions";
import * as fromTrim from "../state/trim.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { ModelService } from '../../model/model.service';

@Component({
  selector: 'kt-add-trim',
  templateUrl: './add-edit-trim.component.html',
  styleUrls: ['./add-edit-trim.component.scss']
})
export class AddTrimComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditTrimForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TRIM_CONST: any;
  models: any = [];
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
    private modelService: ModelService
  ) {
    this.TRIM_CONST = this.translate.instant('TRIM');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.TRIM'));
    titleService.setTitle(APPNAME + " | " + this.TRIM_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditTrimForm();
    this.getAllModelList();
    this.Editor = ClassicEditor;
  }
  buildAddEditTrimForm() {
    this.addEditTrimForm = this._formBuilder.group({
      trim_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      trim_modelId: ["", [Validators.required]],
      trim_status: ["ACTIVE", []],
    });
  }

  getAllModelList() {
    Helpers.setLoading(true);
    this.modelService.getAllModelsList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.models = data['data'];
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
    if (this.addEditTrimForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditTrimForm.value;

      let obj = {
        trim_name: form.trim_name,
        trim_modelId: form.trim_modelId,
        trim_status: form.trim_status
      };

      this.stateSubscription = this.store.dispatch(new trimActions.AddTrim(obj))
      this.stateSubscription = this.store.pipe(select(fromTrim.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/trim/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditTrimForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }


}

@Component({
  selector: 'kt-edit-trim',
  templateUrl: './add-edit-trim.component.html',
  styleUrls: ['./add-edit-trim.component.scss']
})
export class EditTrimComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditTrimForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  TRIM_CONST: any;
  models: any = [];
  id: any;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private dtr: ChangeDetectorRef,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private modelService: ModelService,
  ) {
    this.TRIM_CONST = this.translate.instant('TRIM');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.TRIM'));
    titleService.setTitle(APPNAME + " | " + this.TRIM_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditTrimForm();
    this.getAllModelList();
    this.getTrimDetails();
  }

  buildAddEditTrimForm() {
    this.addEditTrimForm = this._formBuilder.group({
      trim_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      trim_modelId: ["", [Validators.required]],
      trim_status: ["ACTIVE", []],
    });
  }

  getAllModelList() {
    Helpers.setLoading(true);
    this.modelService.getAllModelsList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.models = data['data'];
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

  getTrimDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new trimActions.LoadTrim(this.id));

    this.stateSubscription = this.store.pipe(select(fromTrim.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            trim_name: result.trim_name,
            trim_modelId: result.trim_modelId,
            trim_status: result.trim_status
          };
          await this.addEditTrimForm.patchValue(fd);
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
    if (this.addEditTrimForm.valid) {

      const form = this.addEditTrimForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          trim_name: form.trim_name,
          trim_modelId: form.trim_modelId,
          trim_status: form.trim_status
        }
      };

      this.stateSubscription = this.store.dispatch(new trimActions.UpdateTrim(obj))

      this.stateSubscription = this.store.pipe(select(fromTrim.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/trim/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditTrimForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
  }

}
