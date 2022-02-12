import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import {  APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';

import * as helpActions from "../state/help.actions";
import * as fromHelp from "../state/help.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { HelpService } from '../help.service';

@Component({
  selector: 'kt-add-help',
  templateUrl: './add-edit-help.component.html',
  styleUrls: ['./add-edit-help.component.scss']
})
export class AddHelpComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = true;
  addEditHelpForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  HELP_CONST: any;
  helpTopics: any = [];
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
    private helpService: HelpService
  ) {
    this.HELP_CONST = this.translate.instant('HELP');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.HELP'));
    titleService.setTitle(APPNAME + " | " + this.HELP_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditHelpForm();
    this.getAllHelpTopicsList();
    this.Editor = ClassicEditor;
  }
  buildAddEditHelpForm() {
    this.addEditHelpForm = this._formBuilder.group({
      help_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //  help_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      help_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      help_topic: ["", [Validators.required]],
      help_description_en: ["", Validators.required],
      //   help_description_ar: ["", Validators.required],
      help_showDriver: ["No", []],
      help_showRider: ["No", []],
      help_showDriverComment: ["No", []],
      help_showRiderComment: ["No", []],
      help_reson: ["No", []],
      help_status: ["ACTIVE", []],
    });
  }

  getAllHelpTopicsList() {
    Helpers.setLoading(true);
    this.helpService.getAllHelpTopicsList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.helpTopics = data['data'];
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
    if (this.addEditHelpForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditHelpForm.value;

      let obj = {
        help_title: [{
          lang: 'EN',
          title: form.help_title_en
        }
          // , {
          //   lang: 'AR',
          //   title: form.help_title_ar
          // }
        ],
        help_email: form.help_email,
        help_topic: form.help_topic,
        help_description: [{
          lang: 'EN',
          description: form.help_description_en
        }
          // , {
          //   lang: 'AR',
          //   description: form.help_description_ar
          // }
        ],
        help_showDriver: form.help_showDriver,
        help_showRider: form.help_showRider,
        help_showDriverComment: form.help_showDriverComment,
        help_showRiderComment: form.help_showRiderComment,
        help_reson: form.help_reson,
        help_status: form.help_status
      };

      this.stateSubscription = this.store.dispatch(new helpActions.AddHelp(obj))
      this.stateSubscription = this.store.pipe(select(fromHelp.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/help/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });
    } else if (!this.addEditHelpForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }
}


@Component({
  selector: 'kt-edit-help',
  templateUrl: './add-edit-help.component.html',
  styleUrls: ['./add-edit-help.component.scss']
})
export class EditHelpComponent implements OnInit {

  Editor: any;
  isAdd: Boolean = false;
  addEditHelpForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  HELP_CONST: any;
  helpTopics: any = [];
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
    private translate: TranslateService,
    private helpService: HelpService
  ) {
    this.HELP_CONST = this.translate.instant('HELP');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.HELP'));
    titleService.setTitle(APPNAME + " | " + this.HELP_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditHelpForm();
    this.getHelpDetails();
    this.getAllHelpTopicsList();
    this.Editor = ClassicEditor;
  }

  buildAddEditHelpForm() {
    this.addEditHelpForm = this._formBuilder.group({
      help_title_en: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      //   help_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      help_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      help_topic: ["", [Validators.required]],
      help_description_en: ["", Validators.required],
      //   help_description_ar: ["", Validators.required],
      help_showDriver: [""],
      help_showRider: [""],
      help_showDriverComment: [""],
      help_showRiderComment: [""],
      help_reson: [""],
      help_status: ["ACTIVE", []],
    });
  }

  getHelpDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new helpActions.LoadHelp(this.id));

    this.stateSubscription = this.store.pipe(select(fromHelp.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          let result = data['data'];

          let fd = {
            help_title_en: result.help_title.filter((obj) => obj.lang == "EN")[0].title,
            //   help_title_ar: result.help_title.filter((obj) => obj.lang == "AR")[0].title,
            help_email: result.help_email,
            help_topic: result.help_topic != null && result.help_topic != undefined ? result.help_topic : "",
            help_description_en: result.help_description.filter((obj) => obj.lang == "EN")[0].description,
            // help_description_ar: result.help_description.filter((obj) => obj.lang == "AR")[0].description,
            help_showDriver: result.help_showDriver != null && result.help_showDriver != undefined ? result.help_showDriver : "",
            help_showRider: result.help_showRider != null && result.help_showRider != undefined ? result.help_showRider : "",
            help_showDriverComment: result.help_showDriverComment != null && result.help_showDriverComment != undefined ? result.help_showDriverComment : "",
            help_showRiderComment: result.help_showRiderComment != null && result.help_showRiderComment != undefined ? result.help_showRiderComment : "",
            help_reson: result.help_reson != null && result.help_reson != undefined ? result.help_reson : "",
            help_status: result.help_status != null && result.help_status != undefined ? result.help_status : "",
          };
          await this.addEditHelpForm.patchValue(fd);
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

  getAllHelpTopicsList() {
    Helpers.setLoading(true);
    this.helpService.getAllHelpTopicsList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.helpTopics = data['data'];
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
    if (this.addEditHelpForm.valid) {

      const form = this.addEditHelpForm.value;

      Helpers.setLoading(true);


      let obj = {
        id: this.id,
        data: {
          help_title: [{
            lang: 'EN',
            title: form.help_title_en
          }
            // , {
            //   lang: 'AR',
            //   title: form.help_title_ar
            // }
          ],
          help_email: form.help_email,
          help_topic: form.help_topic,
          help_description: [{
            lang: 'EN',
            description: form.help_description_en
          }
            // , {
            //   lang: 'AR',
            //   description: form.help_description_ar
            // }
          ],
          help_showDriver: form.help_showDriver,
          help_showRider: form.help_showRider,
          help_showDriverComment: form.help_showDriverComment,
          help_showRiderComment: form.help_showRiderComment,
          help_reson: form.help_reson,
          help_status: form.help_status
        }
      };

      this.stateSubscription = this.store.dispatch(new helpActions.UpdateHelp(obj))

      this.stateSubscription = this.store.pipe(select(fromHelp.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {

            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();

            this.router.navigate(['/help/list'])

          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
          }
        }
      });
    } else if (!this.addEditHelpForm.valid) {
      this.toastr.error('All Tabs Field is Required');
   }
  }

}
