import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAccountTypeComponent, EditAccountTypeComponent } from './add-edit-account-type/add-edit-account-type.component';
import { AccountTypeListComponent } from './account-type-list/account-type-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { AccountTypeEffect } from './state/account-type.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AccountTypeReducer } from './state/account-type.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { AccountTypeComponent } from './account-type.component';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: AccountTypeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: AccountTypeListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.ACCOUNT_TYPE.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddAccountTypeComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.ACCOUNT_TYPE.CREATE,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditAccountTypeComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.ACCOUNT_TYPE.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
];


@NgModule({
  declarations: [AccountTypeComponent, AccountTypeListComponent, AddAccountTypeComponent, EditAccountTypeComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AccountTypeEffect]),
    StoreModule.forFeature("account-type", AccountTypeReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class AccountTypeModule { }
