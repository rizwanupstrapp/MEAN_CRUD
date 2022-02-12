import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModelComponent, EditModelComponent } from './add-edit-model/add-edit-model.component';
import { ModelListComponent } from './model-list/model-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from "@ngrx/store";
import { ModelEffect } from "./state/model.effects";
import { TranslateModule } from '@ngx-translate/core';
import { ModelReducer } from './state/model.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { ModelComponent } from './model.component';
import * as Helper from "../../../helper/page.title";
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermission = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: ModelComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ModelListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.MODELS.READ,
          mainModulePermission: menuPermission,
        }
      },
      {
        path: 'add',
        component: AddModelComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.MODELS.CREATE,
          mainModulePermission: menuPermission,
        }
      },
      {
        path: 'edit/:id',
        component: EditModelComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.MODELS.EDIT,
          mainModulePermission: menuPermission,
        }
      }
    ]
  }
]
 
@NgModule({
  declarations: [ModelListComponent, ModelComponent, AddModelComponent, EditModelComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([ModelEffect]),
    StoreModule.forFeature("models", ModelReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    AngularMultiSelectModule
  ]
})
export class ModelModule { }
