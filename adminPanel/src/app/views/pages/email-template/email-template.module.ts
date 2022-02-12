import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmailTemplateComponent, EditEmailTemplateComponent } from './add-edit-email-template/add-edit-email-template.component';
import { EmailTemplateListComponent } from './email-template-list/email-template-list.component';
import { EmailTemplateComponent } from './email-template.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { EmailTemplateEffect } from './state/emailTemplate.effects';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EmailTemplateReducer } from './state/emailTemplate.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER

const routes: Routes = [
  {
    path: '',
    component: EmailTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: EmailTemplateListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.EMAIL_TEMPLATE.READ,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'add',
        component: AddEmailTemplateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.EMAIL_TEMPLATE.CREATE,
          mainModulePermission: menuPermision
        }
      },
      {
        path: 'edit/:id',
        component: EditEmailTemplateComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.EMAIL_TEMPLATE.EDIT,
          mainModulePermission: menuPermision
        }
      }
    ]
  }
];

@NgModule({
  declarations: [EmailTemplateComponent, EmailTemplateListComponent, AddEmailTemplateComponent, EditEmailTemplateComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([EmailTemplateEffect]),
    StoreModule.forFeature("emailTemplate", EmailTemplateReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    CKEditorModule,
    AngularMultiSelectModule
  ]
})
export class EmailTemplateModule { }
