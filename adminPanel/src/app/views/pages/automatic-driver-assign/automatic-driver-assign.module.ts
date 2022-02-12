import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAutomaticDriverAssign, EditAutomaticDriverAssign} from './add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component';
import { AutomaticDriverAssignListComponent } from './automatic-driver-assign-list/automatic-driver-assign-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { AutomaticDriverAssignEffect } from './state/automatic-driver-assign.effects';
import {  TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AutomaticDriverAssignReducer } from './state/automatic-driver-assign.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { AutomaticDriverAssignComponent } from './automatic-driver-assign.component';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: AutomaticDriverAssignComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch:'full'
      },
      {
        path: 'list',
        component: AutomaticDriverAssignListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.AUTOMATIC_DRIVER_ASSIGN.READ,
            mainModulePermission:menuPermision
        }
      },
      {
        path: 'add',
        component: AddAutomaticDriverAssign,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.AUTOMATIC_DRIVER_ASSIGN.CREATE,
          mainModulePermission:menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditAutomaticDriverAssign,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.AUTOMATIC_DRIVER_ASSIGN.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
]

@NgModule({
  declarations: [AutomaticDriverAssignComponent, AutomaticDriverAssignListComponent, AddAutomaticDriverAssign,EditAutomaticDriverAssign],
  providers:[ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AutomaticDriverAssignEffect]),
    StoreModule.forFeature('driverAssignment', AutomaticDriverAssignReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class AutomaticDriverAssignModule { }
