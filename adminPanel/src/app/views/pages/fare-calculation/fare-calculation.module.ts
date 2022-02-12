import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFareCalculationComponent, EditFareCalculationComponent } from './add-edit-fare-calculation/add-edit-fare-calculation.component';
import { FareCalculationListComponent } from './fare-calculation-list/fare-calculation-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";

import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

import { FareCalculationComponent } from './fare-calculation.component';
import { FareCalculationEffect } from './state/fare-calculation.effects';
import { FareCalculationReducer } from './state/fare-calculation.reducer';
const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: FareCalculationComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: FareCalculationListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.FARE_CALCULATION.READ,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'add',
        component: AddFareCalculationComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.FARE_CALCULATION.CREATE,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'edit/:id',
        component: EditFareCalculationComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.FARE_CALCULATION.EDIT,
          	mainModulePermission:menuPermision
        } 
      }
    ]
  }
];


@NgModule({
  declarations: [FareCalculationComponent, FareCalculationListComponent, AddFareCalculationComponent, EditFareCalculationComponent],
   providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([FareCalculationEffect]),
    StoreModule.forFeature("fare-calculation", FareCalculationReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule,
    AngularMultiSelectModule
  ]
})
export class FareCalculationModule { }
