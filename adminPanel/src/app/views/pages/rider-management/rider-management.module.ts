import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderManagementComponent } from './rider-management.component';
import { RiderListComponent } from './rider-list/rider-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import * as Helper from "../../../helper/page.title"

import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { RiderEffect } from './state/rider.effects';
import { RiderReducer } from './state/rider.reducer';
import { EditRiderComponent } from './edit-rider/edit-rider.component';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.SITE_USER

const routes: Routes = [
  {
    path: '',
    component: RiderManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: RiderListComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.RIDER.READ,
          mainModulePermission:menuPermision

				} 
      },
      {
        path: 'edit/:id',
        component: EditRiderComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.OPERATOR.EDIT,
          mainModulePermission:menuPermision

				} 
      }
    ]
  }
];

@NgModule({
  declarations: [RiderManagementComponent, RiderListComponent, EditRiderComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule,
    EffectsModule.forFeature([RiderEffect]),
    StoreModule.forFeature("rider", RiderReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
  ]
})
export class RiderManagementModule { }
