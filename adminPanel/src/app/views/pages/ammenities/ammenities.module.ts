import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAmmenitiesComponent, EditAmmenitiesComponent } from './add-edit-ammenities/add-edit-ammenities.component';
import { AmmenitiesListComponent } from './ammenities-list/ammenities-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule  } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { AmmenitiesEffect } from './state/ammenities.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { AmmenitiesComponent } from './ammenities.component';
import { AmmenitiesReducer } from './state/ammenities.reducer';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: AmmenitiesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: AmmenitiesListComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.AMMENITIES.READ,
          	mainModulePermission:menuPermision
				} 
      },
      {
        path: 'add',
        component: AddAmmenitiesComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.AMMENITIES.CREATE,
          	mainModulePermission:menuPermision
				} 
      },
      {
        path: 'edit/:id',
        component: EditAmmenitiesComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.AMMENITIES.EDIT,
          	mainModulePermission:menuPermision
				} 
      }
    ]
  }
];


@NgModule({
  declarations: [AmmenitiesComponent, AmmenitiesListComponent, AddAmmenitiesComponent, EditAmmenitiesComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AmmenitiesEffect]),
    StoreModule.forFeature("ammenities", AmmenitiesReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class AmmenitiesModule { }
