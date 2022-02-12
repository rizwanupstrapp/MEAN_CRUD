import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComplaintComponent } from './edit-complaint/edit-complaint.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";

import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import * as Helper from "../../../helper/page.title"

import { ComplaintEffect } from './state/complaint.effects';
import { ComplaintReducer } from './state/complaint.reducer';
import { ComplaintComponent } from './complaint.component';
import { AccessGuardPermissionGuard } from '../../../../app/core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: ComplaintComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ComplaintListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.COMPLAINT.READ,
          	mainModulePermission:menuPermision
        } 
      },
      
      {
        path: 'edit/:id',
        component: EditComplaintComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.COMPLAINT.EDIT,
          	mainModulePermission:menuPermision
        } 
      }
    ]
  }
];

@NgModule({
  declarations: [ ComplaintComponent, ComplaintListComponent,  EditComplaintComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([ComplaintEffect]),
    StoreModule.forFeature("complaint", ComplaintReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class ComplaintModule { }
