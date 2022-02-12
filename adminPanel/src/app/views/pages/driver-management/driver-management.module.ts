import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverManagementComponent } from './driver-management.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import * as Helper from "../../../helper/page.title"

import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { StoreModule } from "@ngrx/store";
import { TranslateModule } from '@ngx-translate/core';
import { DriverEffect } from './state/driver.effects';
import { driverReducer } from './state/driver.reducer';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AddVehicleComponent, EditVehicleComponent } from './add-edit-vehicle/add-edit-vehicle.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../../environments/environment';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.SITE_USER

const routes: Routes = [
  {
    path: '',
    component: DriverManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: DriverListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.DRIVER.READ,
          mainModulePermission: menuPermision

        }
      },
      {
        path: ':id/vehicle/add',
        component: AddVehicleComponent,
        canActivate: [],
        data: {
          // permission: Helper.PERMISSIONS.DRIVER.READ,
          // mainModulePermission: menuPermision

        }
      },
      {
        path: ':id/vehicle/edit/:vehicleId',
        component: EditVehicleComponent,
        canActivate: [],
        data: {
          // permission: Helper.PERMISSIONS.DRIVER.READ,
          // mainModulePermission: menuPermision

        }
      },
      {
        path: 'edit/:id',
        component: EditDriverComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.DRIVER.EDIT,
          mainModulePermission: menuPermision

        }
      }
    ]
  }
];


@NgModule({
  declarations: [DriverManagementComponent, DriverListComponent, EditDriverComponent, AddVehicleComponent, EditVehicleComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule,
    NgxImageZoomModule ,
    // NgxImgZoomModule,
    EffectsModule.forFeature([DriverEffect]),
    StoreModule.forFeature("driver", driverReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    AngularMultiSelectModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapAPIKey
    })
  ]
})
export class DriverManagementModule { }
