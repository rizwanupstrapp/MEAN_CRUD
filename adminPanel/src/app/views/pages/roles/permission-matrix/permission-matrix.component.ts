import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  ViewRef,
  ɵCodegenComponentFactoryResolver,
} from "@angular/core";

import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, State, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";

import { TranslateService } from "@ngx-translate/core";

import { RolesService } from "../roles.service";
import { async } from "@angular/core/testing";

declare const $: any;

@Component({
  selector: "kt-permission-matrix",
  templateUrl: "./permission-matrix.component.html",
  styleUrls: ["./permission-matrix.component.scss"],
})
export class PermissionMatrixComponent implements OnInit {
  ROLES_CONST: any;
  allPermissions: any;
  selectedPermissions: any;
  constructor(
    private subheaderService: SubheaderService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public localStorageService: LocalstorageService,
    private toastr: ToastrService,
    private roleService: RolesService,
    private dtr: ChangeDetectorRef,
    private store: Store<{ school: any }>,
    titleService: Title,
    private translate: TranslateService
  ) {
    this.ROLES_CONST = this.translate.instant("ROLES");
    // SET SUBHEAD AND TITLE
    this.subheaderService.setTitle(this.translate.instant("MENU.ROLES"));
    titleService.setTitle(APPNAME + " | " + this.ROLES_CONST.MODULE_NAME);
  }

  ngOnInit() {
    this.getPermissions();
  }

  getPermissions() {
    Helpers.setLoading(true);
    this.roleService.getRoleWisePermissionMatrix().subscribe(async (data) => {
      if (data["code"] == 200) {
        let result = data["data"];
        this.allPermissions = result.allPermissions;
        this.selectedPermissions = result.selectedPermissions;
        this.dtr.detectChanges();
        Helpers.setLoading(false);
      } else {
        Helpers.setLoading(false);

        this.toastr.error(data["message"]);
      }
    });
  }

  checkHasSelected(permission_name, selectedPermissions) {
    let a = selectedPermissions.find(function (element) {
      return element.toString() == permission_name.toString();
    });
    if (a && a != undefined) {
      return true;
    } else {
      return null;
    }
  }

  onchangeCheckbox(permisison_id, event, role_id) {
    this.selectedPermissions.map((x, i) => {
      if (x._id._id == role_id) {
        if (event.target.checked) {
          this.selectedPermissions[i].permissions.push(permisison_id);
        } else {
          const index = this.selectedPermissions[i].permissions.indexOf(
            permisison_id
          );
          if (index > -1) {
            this.selectedPermissions[i].permissions.splice(index, 1);
          }
        }
      }
    });
  }

  onSubmit() {
    this.roleService
      .updatePermissionMatrix({ permissions: this.selectedPermissions })
      .subscribe(async (data) => {
        if (data["code"] == 200) {
          this.router.navigate(["roles/list"]);
        } else {
          this.toastr.error(data["message"]);
        }
      });
  }
  
  selectAll(event) {
    let roleId;

    roleId = $("input[class='" + event.target.className + "']").attr('data-roleId');
    const that = this;
    that.selectedPermissions.map((x, j) => {
      if (x._id._id == roleId) {
        that.selectedPermissions[j].permissions = [];
      }
    });



    //-------------------------------------------
    if (event.target.checked) {
      $("input[class='" + event.target.className + "']").each(function (x, i) {
        if ($(i).attr('data-permissionId') != undefined) {
          let selected = $(i).attr('data-permissionId')
          $(i).attr("checked", true);
          that.selectedPermissions.map((x, j) => {
            if (x._id._id == roleId) {
              that.selectedPermissions[j].permissions.push(selected);
            }
          });
        }
      })
    } else {
      $("input[class='" + event.target.className + "']").attr("checked", false);
    }
  }
}
