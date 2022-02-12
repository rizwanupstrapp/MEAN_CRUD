import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTrimComponent, EditTrimComponent } from './add-edit-trim/add-edit-trim.component';
import { TrimListComponent } from './trim-list/trim-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { TrimEffect } from './state/trim.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TrimReducer } from './state/trim.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { TrimComponent } from './trim.component';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: TrimComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TrimListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.TRIM.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddTrimComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.TRIM.CREATE,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditTrimComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.TRIM.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
];



@NgModule({
  declarations: [TrimComponent, TrimListComponent, AddTrimComponent, EditTrimComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([TrimEffect]),
    StoreModule.forFeature("trim", TrimReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class TrimModule { }
