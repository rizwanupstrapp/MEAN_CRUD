import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRideRatingComponent, EditRideRatingComponent } from './add-edit-ride-rating/add-edit-ride-rating.component';
import { RideRatingListComponent } from './ride-rating-list/ride-rating-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from "@ngrx/store";
import { RideRatingEffect } from "./state/ride-rating.effects";
import { TranslateModule } from '@ngx-translate/core';
import { RideRatingReducer } from './state/ride-rating.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import * as Helper from "../../../helper/page.title";
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { RideRatingManagementComponent } from './ride-rating-management.component';

const menuPermission = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: RideRatingManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: RideRatingListComponent,
        // canActivate: [AccessGuardPermissionGuard],
        // data: {
        //   permission: Helper.PERMISSIONS.RIDE_RATING.READ,
        //   mainModulePermission: menuPermission,
        // }
      },
      {
        path: 'add',
        component: AddRideRatingComponent,
        // canActivate: [AccessGuardPermissionGuard],
        // data: {
        //   permission: Helper.PERMISSIONS.RIDE_RATING.CREATE,
        //   mainModulePermission: menuPermission,
        // }
      },
      {
        path: 'edit/:id',
        component: EditRideRatingComponent,
        // canActivate: [AccessGuardPermissionGuard],
        // data: {
        //   permission: Helper.PERMISSIONS.RIDE_RATING.EDIT,
        //   mainModulePermission: menuPermission,
        // }
      }
    ]
  }
]


@NgModule({
  declarations: [
    RideRatingManagementComponent,
    RideRatingListComponent,
    AddRideRatingComponent,
    EditRideRatingComponent
  ],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([RideRatingEffect]),
    StoreModule.forFeature("ride-rating", RideRatingReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    AngularMultiSelectModule,
    NgbModule
  ]
})
export class RideRatingManagementModule { }
