import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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

import * as helpTopicActions from "../state/help-topic.actions";
import * as fromHelpTopic from "../state/help-topic.reducer";

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-add-help-topic',
  templateUrl: './add-edit-help-topic.component.html',
  styleUrls: ['./add-edit-help-topic.component.scss']
})
export class AddHelpTopicComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditHelpTopicForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  HELPTOPIC_CONST: any;
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
    this.HELPTOPIC_CONST = this.translate.instant('HELPTOPIC');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.HELP_TOPIC'));
    titleService.setTitle(APPNAME + " | " + this.HELPTOPIC_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditHelpTopicForm();
  }
  buildAddEditHelpTopicForm() {
    this.addEditHelpTopicForm = this._formBuilder.group({
      helpTopic_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      // helpTopic_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      helpTopic_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      helpTopic_status: ["ACTIVE", []],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditHelpTopicForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditHelpTopicForm.value;

      let obj = {
        helpTopic_name: [{
          lang: 'EN',
          title: form.helpTopic_name_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.helpTopic_name_ar
          // }
        ],
        helpTopic_code: form.helpTopic_code,
        helpTopic_status: form.helpTopic_status
      };

      this.stateSubscription = this.store.dispatch(new helpTopicActions.AddHelpTopic(obj))
      this.stateSubscription = this.store.pipe(select(fromHelpTopic.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/help-topic/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditHelpTopicForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }
}


@Component({
  selector: 'kt-edit-help-topic',
  templateUrl: './add-edit-help-topic.component.html',
  styleUrls: ['./add-edit-help-topic.component.scss']
})
export class EditHelpTopicComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditHelpTopicForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  HELPTOPIC_CONST: any;
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
    this.HELPTOPIC_CONST = this.translate.instant('HELPTOPIC');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.HELP_TOPIC'));
    titleService.setTitle(APPNAME + " | " + this.HELPTOPIC_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditHelpTopicForm();
    this.getHelpTopicDetails();
  }

  buildAddEditHelpTopicForm() {
    this.addEditHelpTopicForm = this._formBuilder.group({
      helpTopic_name_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //helpTopic_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      helpTopic_code: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      helpTopic_status: ["ACTIVE", []],
    });
  }

  getHelpTopicDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new helpTopicActions.LoadHelpTopic(this.id));

    this.stateSubscription = this.store.pipe(select(fromHelpTopic.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            helpTopic_name_en: result.helpTopic_name.filter((obj) => obj.lang == "EN")[0].title,
            // helpTopic_name_ar: result.helpTopic_name.filter((obj) => obj.lang == "AR")[0].title,
            helpTopic_code: result.helpTopic_code,
            helpTopic_status: result.helpTopic_status != null && result.helpTopic_status != undefined ? result.helpTopic_status : "",
          };
          await this.addEditHelpTopicForm.patchValue(fd);
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
    if (this.addEditHelpTopicForm.valid) {

      const form = this.addEditHelpTopicForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          helpTopic_name: [{
            lang: 'EN',
            title: form.helpTopic_name_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.helpTopic_name_ar
            // }
          ],
          helpTopic_code: form.helpTopic_code,
          helpTopic_status: form.helpTopic_status
        }
      };

      this.stateSubscription = this.store.dispatch(new helpTopicActions.UpdateHelpTopic(obj))

      this.stateSubscription = this.store.pipe(select(fromHelpTopic.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/help-topic/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditHelpTopicForm.valid) {
       this.toastr.error('All Tabs Field is Required');
    }
  }
}
