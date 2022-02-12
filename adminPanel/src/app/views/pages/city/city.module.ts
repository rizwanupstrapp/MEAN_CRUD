import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCityComponent, EditCityComponent } from './add-edit-city/add-edit-city.component';
import { CityComponent } from './city.component';
import { CityListComponent } from './city-list/city-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CityEffect } from './state/city.effects';
import { CityReducer } from './state/city.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: CityComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: CityListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.CITY.READ,
           mainModulePermission:menuPermision
        }
      },
      {
        path: 'add',
        component: AddCityComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.CITY.CREATE,
           mainModulePermission:menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditCityComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.CITY.EDIT,
           mainModulePermission:menuPermision
        }
      }
    ]
  }
];

@NgModule({
  declarations: [CityComponent, CityListComponent, AddCityComponent, EditCityComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([CityEffect]),
    StoreModule.forFeature("city", CityReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule

  ]
})
export class CityModule { }
