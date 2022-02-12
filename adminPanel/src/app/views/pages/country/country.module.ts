import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { AddCountryComponent, EditCountryComponent } from './add-edit-country/add-edit-country.component';
import { CountryListComponent } from './country-list/country-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { CountryEffect } from './state/country.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CountryReducer } from './state/country.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: CountryListComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.COUNTRY.READ,
          mainModulePermission:menuPermision
				} 
      },
      {
        path: 'add',
        component: AddCountryComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.COUNTRY.CREATE,
          mainModulePermission:menuPermision
        } 
      },
      {
        path: 'edit/:id',
        component: EditCountryComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.COUNTRY.EDIT,
          mainModulePermission:menuPermision
				} 
      }
    ]
  }
];


@NgModule({
  declarations: [CountryComponent, CountryListComponent, AddCountryComponent, EditCountryComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([CountryEffect]),
    StoreModule.forFeature("country", CountryReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class CountryModule { }
