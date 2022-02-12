import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { AddBadgeComponent, EditBadgeComponent } from './add-edit-badge/add-edit-badge.component';
import { BadgeListComponent } from './badge-list/badge-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { BadgeEffect } from './state/badge.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BadgeReducer } from './state/badge.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: BadgeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BadgeListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.BADGE.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddBadgeComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.BADGE.CREATE,
          mainModulePermission: menuPermision
        }


      },
      {
        path: 'edit/:id',
        component: EditBadgeComponent,
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
  declarations: [BadgeComponent, BadgeListComponent, AddBadgeComponent, EditBadgeComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([BadgeEffect]),
    StoreModule.forFeature("badge", BadgeReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class BadgeModule { }
