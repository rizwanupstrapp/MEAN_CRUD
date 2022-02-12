import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTypeComponent } from './service-type.component';
import { AddServiceTypeComponent, EditServiceTypeComponent } from './add-edit-service-type/add-edit-service-type.component';
import { ServiceTypeListComponent } from './service-type-list/service-type-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { ServiceTypeEffect } from './state/service-type.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ServiceTypeReducer } from './state/service-type.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: ServiceTypeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ServiceTypeListComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.SERVICE_TYPE.READ,
          	mainModulePermission:menuPermision
				} 
      },
      {
        path: 'add',
        component: AddServiceTypeComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.SERVICE_TYPE.CREATE,
          	mainModulePermission:menuPermision
				} 
      },
      {
        path: 'edit/:id',
        component: EditServiceTypeComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.SERVICE_TYPE.EDIT,
          	mainModulePermission:menuPermision
				} 
      }
    ]
  }
];


@NgModule({
  declarations: [ServiceTypeComponent, ServiceTypeListComponent, AddServiceTypeComponent, EditServiceTypeComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([ServiceTypeEffect]),
    StoreModule.forFeature("service-type", ServiceTypeReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class ServiceTypeModule { }
