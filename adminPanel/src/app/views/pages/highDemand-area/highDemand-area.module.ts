import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHighDemandAreaComponent, EditHighDemandAreaComponent } from './add-edit-highDemand-area/add-edit-highDemand-area.component';
import { HighDemandAreaListComponent } from './highDemand-area-list/highDemand-area-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";

import { TranslateModule } from '@ngx-translate/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { HighDemandAreaComponent } from './highDemand-area.component';
import { HighDemandAreaEffect } from './state/highDemand-area.effects';
import { HighDemandAreaReducer } from './state/highDemand-area.reducer';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../../environments/environment';

const menuPermision = Helper.PERMISSIONS.MAIN_MENU.MASTER
const routes: Routes = [
    {
        path: '',
        component: HighDemandAreaComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: HighDemandAreaListComponent,
                canActivate: [AccessGuardPermissionGuard],
                data: {
                    permission: Helper.PERMISSIONS.FARE_CALCULATION.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: AddHighDemandAreaComponent,
                canActivate: [AccessGuardPermissionGuard],
                data: {
                    permission: Helper.PERMISSIONS.HIGHDEMAND_AREA.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: EditHighDemandAreaComponent,
                canActivate: [AccessGuardPermissionGuard],
                data: {
                    permission: Helper.PERMISSIONS.HIGHDEMAND_AREA.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];

@NgModule({
    declarations: [HighDemandAreaComponent, HighDemandAreaListComponent, AddHighDemandAreaComponent, EditHighDemandAreaComponent],
    providers: [ScriptLoaderService],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        EffectsModule.forFeature([HighDemandAreaEffect]),
        StoreModule.forFeature("highDemand-area", HighDemandAreaReducer),
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        AngularMultiSelectModule,
        AgmCoreModule.forRoot({
            apiKey: environment.mapAPIKey
        })
    ]
})
export class HighDemandAreaModule { }
