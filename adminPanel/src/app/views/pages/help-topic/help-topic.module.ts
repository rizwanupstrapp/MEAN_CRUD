import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHelpTopicComponent, EditHelpTopicComponent } from './add-edit-help-topic/add-edit-help-topic.component';
import { HelpTopicListComponent } from './help-topic-list/help-topic-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { HelpTopicEffect } from './state/help-topic.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HelpTopicReducer } from './state/help-topic.reducer';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { HelpTopicComponent } from './help-topic.component';
const menuPermision = Helper.PERMISSIONS.MAIN_MENU.CONTENT
const routes: Routes = [
  {
    path: '',
    component: HelpTopicComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: HelpTopicListComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.HELP_TOPIC.READ,
          	mainModulePermission:menuPermision
				} 
      },
      {
        path: 'add',
        component: AddHelpTopicComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.HELP_TOPIC.CREATE,
          	mainModulePermission:menuPermision
				} 
      },
      {
        path: 'edit/:id',
        component: EditHelpTopicComponent,
        canActivate: [AccessGuardPermissionGuard], 
				data: { 
          permission: Helper.PERMISSIONS.HELP_TOPIC.EDIT,
          	mainModulePermission:menuPermision
				} 
      }
    ]
  }
];

@NgModule({
  declarations: [HelpTopicComponent, HelpTopicListComponent, AddHelpTopicComponent, EditHelpTopicComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([HelpTopicEffect]),
    StoreModule.forFeature("help-topic", HelpTopicReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule
  ]
})
export class HelpTopicModule { }
