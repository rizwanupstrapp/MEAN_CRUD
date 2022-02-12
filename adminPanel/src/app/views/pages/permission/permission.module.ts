import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { AddPermissionComponent,  } from './add-edit-permission/add-edit-permission.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { PermissionEffect } from './state/permission.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PermissionReducer } from './state/permission.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { PermissionComponent } from './permission.component';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.SETTINGS
const routes: Routes = [
  {
    path: '',
    component: PermissionComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PermissionListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.BRAND.READ,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'add',
        component: AddPermissionComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.BRAND.CREATE,
          	mainModulePermission:menuPermision
        } 
      },
    ]
  }
];

@NgModule({
  declarations: [PermissionComponent, PermissionListComponent, AddPermissionComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([PermissionEffect]),
    StoreModule.forFeature("permission", PermissionReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class PermissionModule { }
