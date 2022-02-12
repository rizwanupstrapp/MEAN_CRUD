import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RideRequestListComponent } from './ride-request-list/ride-request-list.component';
import { ViewRideRequestComponent } from './view-ride-request/view-ride-request.component';
import { RideRequestComponent } from './ride-request.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { RideRequestEffect } from './state/ride-request.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RideRequestReducer } from './state/ride-request.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT;
const routes: Routes = [
  {
    path: '',
    component: RideRequestComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: RideRequestListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.RIDE_REQUEST.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'view/:id',
        component: ViewRideRequestComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.RIDE_REQUEST.READ,
          mainModulePermission: menuPermision
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    RideRequestComponent, 
    RideRequestListComponent, 
    ViewRideRequestComponent
  ],
  providers: [ScriptLoaderService,DatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([RideRequestEffect]),
    StoreModule.forFeature("ride-request", RideRequestReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class RideRequestModule { }
