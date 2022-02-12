import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSMSTemplateComponent, EditSMSTemplateComponent } from './add-edit-sms-template/add-edit-sms-template.component';
import { SmsTemplateListComponent } from './sms-template-list/sms-template-list.component';
import { SmsTemplateComponent } from './sms-template.component'

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { SMSTemplateEffect } from './state/smsTemplate.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SMSTemplateReducer } from './state/smsTemplate.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER

const routes: Routes = [
  {
    path: '',
    component: SmsTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: SmsTemplateListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.SMS_TEMPLATE.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddSMSTemplateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.SMS_TEMPLATE.CREATE,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditSMSTemplateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.SMS_TEMPLATE.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
];

@NgModule({
  declarations: [SmsTemplateComponent, SmsTemplateListComponent, AddSMSTemplateComponent, EditSMSTemplateComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([SMSTemplateEffect]),
    StoreModule.forFeature("smsTemplate", SMSTemplateReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule,
    AngularMultiSelectModule
  ]
})
export class SmsTemplateModule { }
