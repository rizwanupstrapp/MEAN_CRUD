import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTimeFrameComponent, EditTimeFrameComponent } from './add-edit-time-frame/add-edit-time-frame.component';
import { TimeFrameListComponent } from './time-frame-list/time-frame-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { TimeFrameEffect } from './state/time-frame.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TimeFrameReducer } from './state/time-frame.reducer';

import * as Helper from "../../../helper/page.title"
import { TimeFrameComponent } from './time-frame.component';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: TimeFrameComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TimeFrameListComponent,
        // canActivate: [AccessGuardPermissionGuard], 
				// data: { 
        //   permission: Helper.PERMISSIONS.SERVICE_TYPE.READ,
        //   	mainModulePermission:menuPermision
				// } 
      },
      {
        path: 'add',
        component: AddTimeFrameComponent,
        // canActivate: [AccessGuardPermissionGuard], 
				// data: { 
        //   permission: Helper.PERMISSIONS.SERVICE_TYPE.CREATE,
        //   	mainModulePermission:menuPermision
				// } 
      },
      {
        path: 'edit/:id',
        component: EditTimeFrameComponent,
        // canActivate: [AccessGuardPermissionGuard], 
				// data: { 
        //   permission: Helper.PERMISSIONS.SERVICE_TYPE.EDIT,
        //   	mainModulePermission:menuPermision
				// } 
      }
    ]
  }
];

@NgModule({
  declarations: [TimeFrameComponent, TimeFrameListComponent, AddTimeFrameComponent, EditTimeFrameComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([TimeFrameEffect]),
    StoreModule.forFeature("time-frame", TimeFrameReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class TimeFrameModule { }
