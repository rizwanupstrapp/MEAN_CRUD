import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { AddBrandComponent, EditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { BrandEffect } from './state/brand.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrandReducer } from './state/brand.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: BrandComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BrandListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.BRAND.READ,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'add',
        component: AddBrandComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.BRAND.CREATE,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'edit/:id',
        component: EditBrandComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.BRAND.EDIT,
          	mainModulePermission:menuPermision
        } 
      }
    ]
  }
];



@NgModule({
  declarations: [BrandComponent, BrandListComponent, AddBrandComponent, EditBrandComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([BrandEffect]),
    StoreModule.forFeature("brand", BrandReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class BrandModule { }
