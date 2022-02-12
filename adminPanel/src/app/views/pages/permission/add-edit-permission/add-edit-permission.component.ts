import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { SubheaderService } from '../../../../core/_base/layout/services/subheader.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { APPNAME } from '../../../../helper/page.title';
import { LocalstorageService } from '../../../../services/localstorage.service';
import { validataion } from '../../../../helper/regular.expression';
import { Store, select } from "@ngrx/store";
import { Helpers } from '../../../../helper/helper';

import * as permissionActions from "../state/permission.actions";
import * as fromPermission from "../state/permission.reducer";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { TranslateService } from '@ngx-translate/core';
import { PermissionService } from '../permission.service';

@Pipe({ name: 'titleCase'})

@Component({
  selector: 'kt-add-permission',
  templateUrl: './add-edit-permission.component.html',
  styleUrls: ['./add-edit-permission.component.scss']
})
export class AddPermissionComponent implements OnInit {
  
  Editor: any;
  isAdd: Boolean = true;
  addEditPermissionForm: FormGroup;
  submitted: Boolean = false;
  stateSubscription: any;
  elements: any = false;
  PERMISSION_CONST: any;
  id: any;

  permissionName: string;

  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService,
    private permissionService: PermissionService
  ) {
    this.PERMISSION_CONST = this.translate.instant('PERMISSION');
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant('MENU.PERMISSION'));
    titleService.setTitle(APPNAME + " | " + this.PERMISSION_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.buildAddEditBrandForm();
    this.Editor = ClassicEditor;
  }
  buildAddEditBrandForm() {
    this.addEditPermissionForm = this._formBuilder.group({
      permission_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
      permission_status: ["ACTIVE", []],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.addEditPermissionForm.valid) {
      Helpers.setLoading(true);

      const form = this.addEditPermissionForm.value;
   
    // for the title case convertion
    this.permissionName = form.permission_name.replace(/\b\w/g, first => first.toLocaleUpperCase())
   
   let obj = {
        permission_name: this.permissionName,
        permission_status: form.permission_status
      };

      this.stateSubscription = this.store.dispatch(new permissionActions.AddPermission(obj))
      this.stateSubscription = this.store.pipe(select(fromPermission.selectPageState)).subscribe((data) => {
        if (data && data != undefined) {
          if (data['code'] == 200) {
            Helpers.setLoading(false);
            this.toastr.success(data['message']);
            this.stateSubscription.unsubscribe();
            this.router.navigate(['/permission/list'])
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
