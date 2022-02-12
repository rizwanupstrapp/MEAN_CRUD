import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPromocodeComponent, EditPromocodeComponent } from './add-edit-promocode/add-edit-promocode.component';
import { PromocodeListComponent } from './promocode-list/promocode-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { PromocodeEffect } from './state/promocode.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PromocodeReducer } from './state/promocode.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { PromocodeComponent } from './promocode.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: PromocodeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PromocodeListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.PROMOCODE.READ,
          mainModulePermission:menuPermision
        } 
      },
      {
        path: 'add',
        component: AddPromocodeComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.PROMOCODE.CREATE,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'edit/:id',
        component: EditPromocodeComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.PROMOCODE.EDIT,
          	mainModulePermission:menuPermision
        } 
      }
    ]
  }
];



@NgModule({
  declarations: [PromocodeComponent, PromocodeListComponent, AddPromocodeComponent, EditPromocodeComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule,
    EffectsModule.forFeature([PromocodeEffect]),
    StoreModule.forFeature("promocode", PromocodeReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule,
    AngularMultiSelectModule
  ]
})
export class PromocodeModule { }
