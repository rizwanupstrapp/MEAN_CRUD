import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';
import { AddStateComponent, EditStateComponent } from './add-edit-state/add-edit-state.component';
import { StateListComponent } from './state-list/state-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { StateEffect } from './state/state.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StateReducer } from './state/state.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER;
const routes: Routes = [
  {
    path: '',
    component: StateComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: StateListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.STATE.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddStateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.BADGE.CREATE,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditStateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.BADGE.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
];

@NgModule({
  declarations: [StateComponent, StateListComponent, AddStateComponent, EditStateComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([StateEffect]),
    StoreModule.forFeature("State", StateReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class StateModule { }
