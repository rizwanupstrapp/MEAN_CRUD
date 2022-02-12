import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditOperatorComponent } from './add-edit-operator/add-edit-operator.component';
import { OperatorListComponent } from './operator-list/operator-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { OperatorEffect } from './state/operator.effects';
import { TranslateModule } from '@ngx-translate/core';
import { operatorReducer } from './state/operator.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { OperatorComponent } from './operator.component';
import { EditOperatorComponent } from './edit-operator/edit-operator.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../../environments/environment';
import { AddPreferredLocationComponent, EditPreferredLocationComponent } from './add-edit-preferred-location/add-edit-preferred-location.component';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.SITE_USER

const routes: Routes = [
  {
    path: '',
    component: OperatorComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: OperatorListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.OPERATOR.READ,
          mainModulePermission: menuPermision

        }
      },
      {
        path: 'add',
        component: AddEditOperatorComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.OPERATOR.CREATE,
          mainModulePermission: menuPermision

        }
      },
      {
        path: 'edit/:id',
        component: EditOperatorComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.OPERATOR.EDIT,
          mainModulePermission: menuPermision

        }
      },
      {
        path: ':id/preferred-location/add',
        component: AddPreferredLocationComponent,
        canActivate: [],
        data: {
          // permission: Helper.PERMISSIONS.DRIVER.READ,
          // mainModulePermission: menuPermision

        }
      },
      {
        path: ':id/preferred-location/edit/:preferred-locationId',
        component: EditPreferredLocationComponent,
        canActivate: [],
        data: {
          // permission: Helper.PERMISSIONS.DRIVER.READ,
          // mainModulePermission: menuPermision

        }
      },

    ]
  }
];


@NgModule({
  declarations: [
    OperatorComponent,
    OperatorListComponent,
    AddEditOperatorComponent,
    EditOperatorComponent,
    AddPreferredLocationComponent,
    EditPreferredLocationComponent
  ],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([OperatorEffect]),
    StoreModule.forFeature("operator", operatorReducer),
    TranslateModule.forChild(),
    AgmCoreModule.forRoot({
      apiKey: environment.mapAPIKey
    })
  ]
})
export class OperatorModule { }
