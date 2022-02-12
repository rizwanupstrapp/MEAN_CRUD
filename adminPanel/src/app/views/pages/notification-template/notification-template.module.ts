import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotificationTemplateComponent, EditNotificationTemplateComponent } from './add-edit-notification-template/add-edit-notification-template.component';
import { NotificationTemplateListComponent } from './notification-template-list/notification-template-list.component';
import { NotificationTemplateComponent } from './notification-template.component'

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { NotificationTemplateEffect } from './state/notificationTemplate.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NotificationTemplateReducer } from './state/notificationTemplate.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
  {
    path: '',
    component: NotificationTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: NotificationTemplateListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.NOTIFICATION_TEMPLATE.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddNotificationTemplateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.NOTIFICATION_TEMPLATE.CREATE,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditNotificationTemplateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.NOTIFICATION_TEMPLATE.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
];

@NgModule({
  declarations: [NotificationTemplateComponent, NotificationTemplateListComponent, AddNotificationTemplateComponent, EditNotificationTemplateComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([NotificationTemplateEffect]),
    StoreModule.forFeature("notificationTemplate", NotificationTemplateReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule,
    AngularMultiSelectModule
  ]
})
export class NotificationTemplateModule { }
