import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';

import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME, DEFAULT_IMAGES } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as badgeActions from "../state/badge.actions";
import * as fromBadge from "../state/badge.reducer";

import { TranslateService } from "@ngx-translate/core";
import { validataion } from '../../../../helper/regular.expression';

@Component({
  selector: 'kt-add-badge',
  templateUrl: './add-edit-badge.component.html',
  styleUrls: ['./add-edit-badge.component.scss']
})
export class AddBadgeComponent implements OnInit {
  Editor: any;
  isAdd: Boolean = true;
  addEditBadgeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  element: any = false;
  BADGE_CONST: any;
  id: any;
  
  imageFile: any;
  url: any = DEFAULT_IMAGES.ADD_PHOTO;

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
  ) {
    this.BADGE_CONST = this.translate.instant('BADGE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.BADGE'));
    titleService.setTitle(APPNAME + " | " + this.BADGE_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditBadgeForm();
    this.onSelectIcon(event);
    this.removeIcon();
    this.Editor = ClassicEditor;
  }

  buildAddEditBadgeForm() {
    this.addEditBadgeForm = this._formBuilder.group({
      badge_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      badge_description: ["", [Validators.required]],
      badge_status: ["ACTIVE", []]
    });
  }

  onSelectIcon(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        this.toastr.error(this.BADGE_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }

  removeIcon() {
    this.url = DEFAULT_IMAGES.ADD_PHOTO;
    this.imageFile = '';
  }

  async onSubmit() {
    this.submitted = true;
    // for image is required whil add 
    if (this.addEditBadgeForm.valid) {
      if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png') {     
        this.submitted = false   
        this.toastr.error(this.BADGE_CONST.LABEL.IMAGE_REQUIRED)   
      } else {
        Helpers.setLoading(true);

        const form = this.addEditBadgeForm.value;
        let fd = new FormData();
        fd.append('badge_name', form.badge_name);
        fd.append('badge_description', form.badge_description);
        fd.append('badge_status', form.badge_status);
        fd.append('badge_icon', this.imageFile);

        this.stateSubscription = this.store.dispatch(new badgeActions.AddBadge(fd));
        this.stateSubscription = this.store.pipe(select(fromBadge.selectPageState)).subscribe((data) => {

          if (data && data != undefined) {
            if (data['code'] == 200) {

              Helpers.setLoading(false);
              this.toastr.success(data['message']);
              this.stateSubscription.unsubscribe();
              this.router.navigate(['/badge/list']);
            } else {
              Helpers.setLoading(false);
              this.toastr.error(data['message']);
              this.stateSubscription.unsubscribe();
            }
          }
        });
      }


    } else if (!this.addEditBadgeForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }
}


//Edit
@Component({
  selector: 'kt-edit-badge',
  templateUrl: './add-edit-badge.component.html',
  styleUrls: ['./add-edit-badge.component.scss']
})
export class EditBadgeComponent implements OnInit {
  Editor: any;
  isAdd: Boolean = false;
  addEditBadgeForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  element: any = false;
  BADGE_CONST: any;
  id: any;
  imageFile: any;
  url: any = DEFAULT_IMAGES.ADD_PHOTO;

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
  ) {
    this.BADGE_CONST = this.translate.instant('BADGE');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.BADGE'));
    titleService.setTitle(APPNAME + " | " + this.BADGE_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditBadgeForm();
    this.getBadgeDetails();
    this.onSelectIcon(event);
    this.removeIcon();
    this.Editor = ClassicEditor;
  }

  buildAddEditBadgeForm() {
    this.addEditBadgeForm = this._formBuilder.group({
      badge_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      badge_description: ["", [Validators.required]],
      badge_status: ["ACTIVE", []]
    });
  }

  onSelectIcon(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
        Helpers.setLoading(true);
        this.imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          Helpers.setLoading(false);
          this.url = reader.result;
          this.dtr.detectChanges();
        };
      } else {
        this.toastr.error(this.BADGE_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }

  removeIcon() {
    this.url = DEFAULT_IMAGES.ADD_PHOTO;
    this.imageFile = '';
  }

  getBadgeDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new badgeActions.LoadBadge(this.id));
    this.stateSubscription = this.store.pipe(select(fromBadge.selectPageState)).subscribe(async (data) => {

      if (data && data != undefined) {
        if (data['code'] == 200) {
          const result = data['data'];

          let fd = {
            badge_name: result.badge_name,
            badge_description: result.badge_description,
            badge_status: result.badge_status
          };
          this.imageFile = result.badge_icon;
          this.url = result.badge_icon;

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            this.dtr.detectChanges();
          }
          this.addEditBadgeForm.patchValue(fd);
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
    if (this.addEditBadgeForm.valid) {
      if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png') {     
        this.submitted = false   
        this.toastr.error(this.BADGE_CONST.LABEL.IMAGE_REQUIRED)   
      } else {
        Helpers.setLoading(true);

        const form = this.addEditBadgeForm.value;
        let fd = new FormData();
        fd.append('badge_name', form.badge_name);
        fd.append('badge_description', form.badge_description);
        fd.append('badge_status', form.badge_status);
        fd.append('badge_icon', this.imageFile);

        let obj = {
          id: this.id,
          data: fd
        }
        this.stateSubscription = this.store.dispatch(new badgeActions.UpdateBadge(obj));
        this.stateSubscription = this.store.pipe(select(fromBadge.selectPageState)).subscribe((data) => {
          if (data && data != undefined) {
            if (data['code'] == 200) {
              Helpers.setLoading(false);
              this.toastr.success(data['message']);
              this.stateSubscription.unsubscribe();
              this.router.navigate(['/badge/list']);
            } else {
              Helpers.setLoading(false);
              this.toastr.error(data['message']);
              this.stateSubscription.unsubscribe();
            }
          }
        });
      }

    } else if (!this.addEditBadgeForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

}
