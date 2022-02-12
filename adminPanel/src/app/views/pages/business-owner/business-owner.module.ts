import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBusinessOwnerComponent } from './edit-business-owner/edit-business-owner.component';
import { BusinessOwnerListComponent } from './business-owner-list/business-owner-list.component';
import { BusinessOwnerComponent } from './business-owner.component';
import * as Helper from "../../../helper/page.title"
import { Routes, RouterModule } from '@angular/router';
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { BusinessOwnerEffect } from './state/business-owner.effects';
import { businessOwnerReducer } from './state/business-owner.reducer';
import { StoreModule } from '@ngrx/store';


const menuPermision = Helper.PERMISSIONS.MAIN_MENU.SITE_USER
const routes: Routes = [
  {
    path: '',
    component: BusinessOwnerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BusinessOwnerListComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.BUSINESS_OWNER.READ,
           mainModulePermission:menuPermision
        }
      },

      {
        path: 'edit/:id',
        component: EditBusinessOwnerComponent,
        canActivate: [AccessGuardPermissionGuard],
        data: {
          permission: Helper.PERMISSIONS.CITY.EDIT,
           mainModulePermission:menuPermision
        }
      }
    ]
  }
];

@NgModule({
  declarations: [BusinessOwnerListComponent, BusinessOwnerComponent,EditBusinessOwnerComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([BusinessOwnerEffect]),
    StoreModule.forFeature("businessOwner", businessOwnerReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    
  ]
})
export class BusinessOwnerModule { }
