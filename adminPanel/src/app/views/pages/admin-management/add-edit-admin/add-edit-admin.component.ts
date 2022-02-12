import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { titles, subHeader } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";

import * as adminActions from "../state/admin.actions";
import * as fromAdmin from "../state/admin reducer";
import { Helpers } from '../../../../helper/helper';
import { RolesService } from '../../roles/roles.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-add-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.scss']
})


export class AddAdminComponent implements OnInit {
  isAdd: Boolean = true;
  addEditAdminForm: FormGroup;
  submitted: Boolean = false;
  role: any = '';
  stateSubscription: any;
  roles: any = [];
  ADMIN_CONST: any;

  imageFile: any;
  url: any = '../../../../../assets/media/newMedia/add.png';

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ admin: any }>,
    titleService: Title,
    private dtr: ChangeDetectorRef,
    private roleService: RolesService,
    private translate: TranslateService

  ) {
    this.ADMIN_CONST = this.translate.instant("ADMIN");

    this.subheaderService.setTitle(subHeader.ADMIN);
    titleService.setTitle(titles.adminManagement);

  }

  ngOnInit() {
    this.buildAddAdminForm()
    this.getRoleDetails();
    let user = this.localStorageService.getCurruntUser();
    if (user && user != null) {
      this.role = user && user.user_roleId ? user.user_roleId : '';
    }

  }

  buildAddAdminForm() {
    this.addEditAdminForm = this._formBuilder.group({
      // user_fullName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_firstName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_lastName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_roleId: ["", [Validators.required]],
      user_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      user_phoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      user_password: ["", [Validators.required, Validators.pattern(validataion.passwordRegEx)]],
      // user_profileImage: ["", [Validators.required]],
    });
  }

  // user Image
  onSelectUserImage(event) {
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
        this.toastr.error(this.ADMIN_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  removeUserImage() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }

  getRoleDetails() {

    Helpers.setLoading(true);
    this.roleService.getRolesList().subscribe(async (data) => {
      if (data['code'] == 200) {
        let result = data['data'];
        this.roles = result
        this.dtr.detectChanges();

        Helpers.setLoading(false);
      } else {
        Helpers.setLoading(false);
        this.toastr.error(data['message']);
      }
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditAdminForm.valid) {
      if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png' || this.imageFile == undefined) {
        this.submitted = false
        this.toastr.error(this.ADMIN_CONST.LABEL.IMAGE_REQUIRED)
      } else {
        let res = this.addEditAdminForm.value;

        let fd = new FormData();
        fd.append('user_firstName', res.user_firstName);
        fd.append('user_lastName', res.user_lastName);
        fd.append('user_roleId', res.user_roleId);
        fd.append('user_phoneNumber', res.user_phoneNumber);
        fd.append('user_email', res.user_email);
        fd.append('user_password', res.user_password && res.user_password != '' ? res.user_password : '');
        if (this.imageFile) {
          fd.append('user_profileImage', this.imageFile);
        }

        Helpers.setLoading(true)

        this.stateSubscription = this.store.dispatch(new adminActions.CreateAdmin(fd))
        this.stateSubscription = this.store.pipe(select(fromAdmin.selectPageState)).subscribe((data) => {
          if (data && data != undefined) {
            if (data['code'] == 200) {
              Helpers.setLoading(false);

              this.toastr.success(data['message']);
              this.stateSubscription.unsubscribe();

              this.router.navigate(['/admin-management/list'])
            } else {
              Helpers.setLoading(false);
              this.stateSubscription.unsubscribe();

              this.toastr.error(data['message']);
            }
          }
        });
      }
    } else if (!this.addEditAdminForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }

  }
  onkeyUp(e) {

  }
}


@Component({
  selector: 'kt-edit-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {
  addEditAdminForm: FormGroup;
  isAdd: Boolean = false;
  submitted: Boolean = false;
  role: any = '';
  id: any;
  roles: any = [];
  ADMIN_CONST: any;
  stateSubscription: any;
  adminData: any;
  imageFile: any;
  url: any = '../../../../../assets/media/newMedia/add.png';

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private store: Store<{ admin: any }>,
    titleService: Title,
    private dtr: ChangeDetectorRef,
    private roleService: RolesService,
    private translate: TranslateService
  ) {
    this.ADMIN_CONST = this.translate.instant("ADMIN");
    this.subheaderService.setTitle(subHeader.ADMIN);
    titleService.setTitle(titles.adminManagement);

  }

  async ngOnInit() {
    this.buildAddAdminForm()
    this.localStorageService.getCurruntUser();
    let user = this.localStorageService.getCurruntUser();
    if (user && user != null) {
      this.role = user && user.user_roleId ? user.user_roleId : '';
    }
    this.getRoleDetails();
    await this.getAdminDetails();

  }

  buildAddAdminForm() {
    this.addEditAdminForm = this._formBuilder.group({
      user_firstName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_lastName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
      user_roleId: ["", [Validators.required]],
      user_email: ["", [Validators.required, Validators.pattern(validataion.emailRegEx)]],
      user_phoneNumber: ["", [Validators.required, Validators.pattern(validataion.phoneRegEx)]],
      user_password: ["", []]
    });
  }

  // user Image
  onSelectUserImage(event) {
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
        this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
        // this.toastr.error(this.ADMIN_CONST.LABEL.NOTALLOWED_IMAGE);
      }
    }
  }
  removeUserImage() {
    this.url = '../../../../../assets/media/newMedia/add.png';
    this.imageFile = '';
  }

  async getAdminDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new adminActions.LoadAdmin(this.id));

    this.stateSubscription = await this.store.pipe(select(fromAdmin.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.adminData = data['data']
          let fd = {
            user_firstName: data['data'].user_firstName,
            user_lastName: data['data'].user_lastName,
            user_roleId: data['data'].user_roleId != null && data['data'].user_roleId != undefined ? data['data'].user_roleId : "",
            user_email: data['data'].user_email,
            user_phoneNumber: data['data'].user_phoneNumber
          };
          if (data['data'].user_profileImage) {
            this.url = data['data'].user_profileImage;
          }
          await this.addEditAdminForm.patchValue(fd);
          Helpers.setLoading(false);

          this.stateSubscription.unsubscribe();

        } else {
          Helpers.setLoading(false);
          this.stateSubscription.unsubscribe();

          this.toastr.error(data['message']);
        }
      }
    });

  }
  getRoleDetails() {
    Helpers.setLoading(true);
    this.roleService.getRolesList().subscribe(async (data) => {
      if (data['code'] == 200) {
        let result = data['data'];
        this.roles = result
        this.dtr.detectChanges();
        Helpers.setLoading(false);
      } else {
        Helpers.setLoading(false);
        this.toastr.error(data['message']);
      }
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.addEditAdminForm.valid) {
      if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png') {
        this.submitted = false
        // this.toastr.error('profile image is required')
        this.toastr.error(this.ADMIN_CONST.LABEL.IMAGE_REQUIRED)
      } else {
        let res = this.addEditAdminForm.value;
        let fd = new FormData();
        fd.append('user_firstName', res.user_firstName);
        fd.append('user_lastName', res.user_lastName);
        fd.append('user_roleId', res.user_roleId);
        fd.append('user_phoneNumber', res.user_phoneNumber);
        fd.append('user_email', res.user_email);
        if (res.user_password && res.user_password != '') {
          fd.append('user_password', res.user_password);
        }
        // fd.append('user_password', res.user_password && res.user_password != '' ? res.user_password : this.adminData.user_password);
        if (this.imageFile) {
          fd.append('user_profileImage', this.imageFile);
        }
        let obj = {
          id: this.id,
          data: fd
        }
        Helpers.setLoading(true)

        this.stateSubscription = this.store.dispatch(new adminActions.UpdateAdmin(obj))

        this.stateSubscription = this.store.pipe(select(fromAdmin.selectPageState)).subscribe((data) => {
          if (data && data != undefined) {
            if (data['code'] == 200) {
              this.toastr.success(data['message']);
              this.stateSubscription.unsubscribe();
              Helpers.setLoading(false);
              this.router.navigate(['/admin-management/list'])
            } else {
              Helpers.setLoading(false);

              this.toastr.error(data['message']);
              this.stateSubscription.unsubscribe();

            }
          }
        });
      }

    } else if (!this.addEditAdminForm.valid) {
      this.toastr.error('All Tabs Field is Required');
    }
  }

  onkeyUp(e) {
    const form = this.addEditAdminForm;

    if (e && e != '') {
      form.get('user_password').setValidators(Validators.required);
      form.get('user_password').updateValueAndValidity();

      form.get('user_password').setValidators(Validators.pattern(validataion.passwordRegEx));
      form.get('user_password').updateValueAndValidity();
    } else {
      form.get('user_password').clearValidators();
      form.get('user_password').updateValueAndValidity();
    }
  }

}

