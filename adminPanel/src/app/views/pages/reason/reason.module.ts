import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReasonComponent, EditReasonComponent } from './add-edit-reason/add-edit-reason.component';
import { ReasonListComponent } from './reason-list/reason-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { ReasonEffect } from './state/reason.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReasonReducer } from './state/reason.reducer';

import * as Helper from "../../../helper/page.title"
import { ReasonComponent } from './reason.component';
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: ReasonComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ReasonListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.REASON.READ,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'add',
        component: AddReasonComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.REASON.CREATE,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'edit/:id',
        component: EditReasonComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.REASON.EDIT,
          	mainModulePermission:menuPermision
        } 
      }
    ]
  }
];


@NgModule({
  declarations: [ReasonComponent, ReasonListComponent, AddReasonComponent, EditReasonComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([ReasonEffect]),
    StoreModule.forFeature("reason", ReasonReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class ReasonModule { }
