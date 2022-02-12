import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHelpComponent, EditHelpComponent } from './add-edit-help/add-edit-help.component';
import { HelpListComponent } from './help-list/help-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { HelpEffect } from './state/help.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HelpReducer } from './state/help.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { HelpComponent } from './help.component';
const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: HelpListComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.HELP.READ,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'add',
        component: AddHelpComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.HELP.CREATE,
          	mainModulePermission:menuPermision
        } 
      },
      {
        path: 'edit/:id',
        component: EditHelpComponent,
        canActivate: [AccessGuardPermissionGuard], 
        data: { 
          permission: Helper.PERMISSIONS.HELP.EDIT,
          	mainModulePermission:menuPermision
        } 
      }
    ]
  }
];

@NgModule({
  declarations: [HelpComponent, HelpListComponent, AddHelpComponent, EditHelpComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([HelpEffect]),
    StoreModule.forFeature("help", HelpReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class HelpModule { }
