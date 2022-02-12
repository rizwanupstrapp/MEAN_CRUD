import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { RolesService } from './roles.service';
import { RolesListComponent } from './roles-list/roles-list.component';
import { AddRolesComponent, EditRolesComponent } from './add-edit-roles/add-edit-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { RolesEffect } from "./state/roles.effects";
import { roleReducer } from "./state/roles.reducer";
import * as Helper from "../../../helper/page.title"
import { AccessGuardPermissionGuard } from '../../../core/auth/_guards/access-guard-permission.guard';
import { PermissionMatrixComponent } from './permission-matrix/permission-matrix.component';
const menuPermision = Helper.PERMISSIONS.MAIN_MENU.SETTINGS
const routes: Routes = [
	{
		path: '',
		component: RolesComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full',
			},
			{
				path: 'list',
				component: RolesListComponent,
				canActivate: [AccessGuardPermissionGuard], 
				data: { 
					permission: Helper.PERMISSIONS.ROLE.READ,
					mainModulePermission:menuPermision,
				} 
			},
			{
				path: 'add',
				component: AddRolesComponent,
				canActivate: [AccessGuardPermissionGuard], 
				data: { 
					permission: Helper.PERMISSIONS.ROLE.CREATE,
					mainModulePermission:menuPermision,
				} 
			  },
			  {
				path: 'edit/:id',
				component: EditRolesComponent,
				canActivate: [AccessGuardPermissionGuard], 
				data: { 
					permission: Helper.PERMISSIONS.ROLE.EDIT,
					mainModulePermission:menuPermision,
				} 
			  },
			  {
				path: 'permission-matrix',
				component: PermissionMatrixComponent,
				canActivate: [AccessGuardPermissionGuard], 
				data: { 
					permission: Helper.PERMISSIONS.ROLE.EDIT,
					mainModulePermission:menuPermision,
				} 
			  }

			  

		]
	}
];

@NgModule({
	declarations: [RolesComponent, RolesListComponent, AddRolesComponent,EditRolesComponent, PermissionMatrixComponent],
	providers: [ScriptLoaderService, RolesService],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forChild(routes),
		EffectsModule.forFeature([RolesEffect]),
		StoreModule.forFeature("roles", roleReducer),
		TranslateModule.forChild()
	],

})
export class RolesModule { }
