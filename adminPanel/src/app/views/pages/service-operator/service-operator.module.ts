import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServiceOperatorComponent, EditServiceOperatorComponent } from './add-edit-service-operator/add-edit-service-operator.component';
import { ServiceOperatorListComponent } from './service-operator-list/service-operator-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../../../services/script-loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { ServiceOperatorEffect } from './state/service-operator.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ServiceOperatorReducer } from './state/service-operator.reducer';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { ServiceOperatorComponent } from './service-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceOperatorComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ServiceOperatorListComponent
      },
      {
        path: 'add',
        component: AddServiceOperatorComponent
      },
      {
        path: 'edit/:id',
        component: EditServiceOperatorComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ServiceOperatorComponent, ServiceOperatorListComponent, AddServiceOperatorComponent, EditServiceOperatorComponent],
  providers: [ScriptLoaderService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([ServiceOperatorEffect]),
    StoreModule.forFeature("service-operator", ServiceOperatorReducer),
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    AngularMultiSelectModule
  ]
})
export class ServiceOperatorModule { }
