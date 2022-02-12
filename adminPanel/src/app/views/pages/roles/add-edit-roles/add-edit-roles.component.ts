import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewRef, ɵCodegenComponentFactoryResolver } from '@angular/core';

import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, State, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';

import * as rolesActions from "../state/roles.actions";
import * as fromRole from "../state/roles.reducer";
import { TranslateService } from '@ngx-translate/core';
import { RolesService } from '../roles.service';
import { async } from '@angular/core/testing';

declare const $: any;

// For Add roles
@Component({
  selector: 'kt-add-roles',
  templateUrl: './add-edit-roles.component.html',
  styleUrls: ['./add-edit-roles.component.scss'],
})


export class AddRolesComponent implements OnInit {
  isAdd: Boolean = true;
  addEditRoleForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  allPermissions: any;
  permissions: FormArray;
  selectedPermission: any = [];
  permissionAdd: any = [];
  ROLES_CONST: any;
  constructor(private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
  ) {
    this.ROLES_CONST = this.translate.instant('ROLES');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.ROLES'));
    titleService.setTitle(APPNAME + " | " + this.ROLES_CONST.MODULE_NAME);

  }

  ngOnInit() {
    this.buildaddEditRoleForm();
    this.getPermissions();
  }

  buildaddEditRoleForm() {
    Helpers.setLoading(true);
    this.addEditRoleForm = this._formBuilder.group({
      role_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
    });

  }

  getPermissions() {
    Helpers.setLoading(true);

    this.stateSubscription = this.store.dispatch(new rolesActions.GetRole())

    this.stateSubscription = this.store.pipe(select(fromRole.selectPageState)).subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.allPermissions = data['data'];
          this.dtr.detectChanges();
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
    if (this.addEditRoleForm.valid) {
      const form = await this.addEditRoleForm.value;
      Helpers.setLoading(true); // 2020-05-18
      let obj = {
        role_name: form.role_name,
        role_permissions: this.selectedPermission,
      };

      this.stateSubscription = this.store.dispatch(new rolesActions.AddRole(obj))

      this.stateSubscription = this.store.pipe(select(fromRole.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/roles/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });

    }
  }

  onChangePermission(event) {
    const v = event.target.value;
    if (event.target.checked) {
      this.selectedPermission.push(v);
    } else {
      const index = this.selectedPermission.indexOf(v);
      this.permissionAdd.map((x, i) => {
        const index1 = this.permissionAdd.indexOf(v);
        if (x == v) {
          this.permissionAdd.splice(index1, 1)
        }
      })
      if (index > -1) {
        this.selectedPermission.splice(index, 1);
      }
    }
  }


}

// For Edit Role
@Component({
  selector: 'kt-edit-roles',
  templateUrl: './add-edit-roles.component.html',
  styleUrls: ['./add-edit-roles.component.scss'],
})
export class EditRolesComponent implements OnInit {

  isAdd: Boolean = false;
  addEditRoleForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  id: any;
  allPermissions: any;
  permissions: FormArray;
  selectedPermission: any = [];
  permissionAdd: any = [];
  ROLES_CONST: any;

  constructor(private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    private roleService: RolesService,
    titleService: Title,
    private translate: TranslateService,

  ) {
    this.ROLES_CONST = this.translate.instant('ROLES');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.ROLES'));
    titleService.setTitle(APPNAME + " | " + this.ROLES_CONST.MODULE_NAME);
  }


  async ngOnInit() {
    await this.buildAddEditRolesForm();
    await this.getPermissions();
  }


  buildAddEditRolesForm() {
    this.addEditRoleForm = this._formBuilder.group({
      role_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
    });
  }


  getRoleDetails() {
    this.id = this._route.snapshot.params['id'];
    Helpers.setLoading(true);
    this.roleService.getRoleById(this.id).subscribe(async (data) => {
      if (data['code'] == 200) {
        let result = data['data'];
        let fd = {
          role_name: result.role_name
        };
        this.addEditRoleForm.patchValue(fd);
        if (result && result.role_permissions.length) {
          this.selectedPermission = result.role_permissions;
          this.selectedPermission.map((x, i) => {
            $(document).find('input:checkbox[id="' + x + '"]').attr("checked", true);
            if (i == (this.selectedPermission.length - 1)) {
              this.dtr.detectChanges();
              Helpers.setLoading(false);

            }
          })
        }
        Helpers.setLoading(false);
      } else {
        Helpers.setLoading(false);
        this.toastr.error(data['message']);
      }
    });
  }

  getPermissions() {
    Helpers.setLoading(true);
    this.roleService.getPermissionList().subscribe(async (data) => {
      if (data && data != undefined) {
        if (data['code'] == 200) {
          this.allPermissions = data['data'];

          if (this.dtr && !(this.dtr as ViewRef).destroyed) {
            Helpers.setLoading(false);

            this.dtr.detectChanges();
            await this.getRoleDetails();

          }
        } else {
          Helpers.setLoading(false);
          this.toastr.error(data['message']);
        }
      }
    });
  }

  onChangePermission(event) {
    const v = event.target.value;

    if (event.target.checked) {
      this.selectedPermission.push(v);
    } else {
      const index = this.selectedPermission.indexOf(v);
      if (index > -1) {
        this.selectedPermission.splice(index, 1);
      }

    }
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditRoleForm.valid) {
      const form = await this.addEditRoleForm.value;
      Helpers.setLoading(true); // 2020-05-18
      let obj = {
        id: this.id,
        data: {
          role_name: form.role_name,
          role_permissions: this.selectedPermission,
        }
      };

      this.stateSubscription = this.store.dispatch(new rolesActions.UpdateRole(obj))

      this.stateSubscription = this.store.pipe(select(fromRole.selectPageState)).subscribe(async(data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            const result = await data['data'];
            if(result && result.length){
              await this.localStorageService.setBehaviorView(result)
            }
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/roles/list'])
          } else {
            Helpers.setLoading(false);
            this.toastr.error(data['message']);
            this.stateSubscription.unsubscribe();

          }
        }
      });

    }
  }

}


