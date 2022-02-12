// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
// Auth
import { AuthGuard } from './core/auth/_guards/auth.guard';
import { HOMEComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HOMEComponent },
  { path: '', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'admin-management',
        loadChildren: () => import('./views/pages/admin-management/admin-management.module').then(m => m.AdminManagementModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('./views/pages/roles/roles.module').then(m => m.RolesModule),
      },
      {
        path: 'contact-us-management',
        loadChildren: () => import('./views/pages/contact-us-management/contact-us-management.module').then(m => m.ContactUsManagementModule),
      },
      {
        path: 'cms-management',
        loadChildren: () => import('./views/pages/cms-management/cms-management.module').then(m => m.CmsManagementModule),
      },
      {
        path: 'country',
        loadChildren: () => import('./views/pages/country/country.module').then(m => m.CountryModule),
      },
      {
        path: 'service-type',
        loadChildren: () => import('./views/pages/service-type/service-type.module').then(m => m.ServiceTypeModule),
      },
      {
        path: 'city',
        loadChildren: () => import('./views/pages/city/city.module').then(m => m.CityModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/pages/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'template',
        loadChildren: () => import('./views/pages/template/template.module').then(m => m.TemplateModule),
      },
      {
        path: 'operator-management',
        loadChildren: () => import('./views/pages/operator/operator.module').then(m => m.OperatorModule),
      },
      {
        path: 'rider-management',
        loadChildren: () => import('./views/pages/rider-management/rider-management.module').then(m => m.RiderManagementModule),
      },
      {
        path: 'driver-management',
        loadChildren: () => import('./views/pages/driver-management/driver-management.module').then(m => m.DriverManagementModule),
      },
      {
        path: 'service-operator',
        loadChildren: () => import('./views/pages/service-operator/service-operator.module').then(m => m.ServiceOperatorModule),
      },
      {
        path: 'help-topic',
        loadChildren: () => import('./views/pages/help-topic/help-topic.module').then(m => m.HelpTopicModule),
      },
      {
        path: 'help',
        loadChildren: () => import('./views/pages/help/help.module').then(m => m.HelpModule),
      },
      {
        path: 'time-frame',
        loadChildren: () => import('./views/pages/time-frame/time-frame.module').then(m => m.TimeFrameModule),
      },
      {
        path: 'fare-calculation',
        loadChildren: () => import('./views/pages/fare-calculation/fare-calculation.module').then(m => m.FareCalculationModule),
      },
      {
        path: 'highDemand-area',
        loadChildren: () => import('./views/pages/highDemand-area/highDemand-area.module').then(m => m.HighDemandAreaModule),
      },
      {
        path: 'promocode',
        loadChildren: () => import('./views/pages/promocode/promocode.module').then(m => m.PromocodeModule),
      },
      {
        path: 'brand',
        loadChildren: () => import('./views/pages/brand/brand.module').then(m => m.BrandModule),
      },
      {
        path: 'permission',
        loadChildren: () => import('./views/pages/permission/permission.module').then(m => m.PermissionModule),
      },
      {
        path: 'automatic-driver-assign',
        loadChildren: () => import('./views/pages/automatic-driver-assign/automatic-driver-assign.module').then(m => m.AutomaticDriverAssignModule),
      },
      {
        path: 'business-owner-management',
        loadChildren: () => import('./views/pages/business-owner/business-owner.module').then(m => m.BusinessOwnerModule),
      },
      {
        path: 'complaint',
        loadChildren: () => import('./views/pages/complaint/complaint.module').then(m => m.ComplaintModule),
      },
      {
        path: "model",
        loadChildren: () => import("./views/pages/model/model.module").then((m) => m.ModelModule),
      },
      {
        path: "reason",
        loadChildren: () => import("./views/pages/reason/reason.module").then((m) => m.ReasonModule),
      },
      {
        path: "badge",
        loadChildren: () => import("./views/pages/badge/badge.module").then((m) => m.BadgeModule),
      },
      {
        path: "state",
        loadChildren: () => import("./views/pages/state/state.module").then((m) => m.StateModule),
      },
      {
        path: "ammenities",
        loadChildren: () => import("./views/pages/ammenities/ammenities.module").then((m) => m.AmmenitiesModule),
      },
      {
        path: "trim",
        loadChildren: () => import("./views/pages/trim/trim.module").then((m) => m.TrimModule),
      },
      {
        path: "account-type",
        loadChildren: () => import("./views/pages/account-type/account-type.module").then((m) => m.AccountTypeModule),
      },
      {
        path: "email-template",
        loadChildren: () => import("./views/pages/email-template/email-template.module").then((m) => m.EmailTemplateModule),
      },
      {
        path: "notification-template",
        loadChildren: () => import("./views/pages/notification-template/notification-template.module").then((m) => m.NotificationTemplateModule),
      },
      {
        path: "sms-template",
        loadChildren: () => import("./views/pages/sms-template/sms-template.module").then((m) => m.SmsTemplateModule),
      },
      {
        path: "ride-rating-management",
        loadChildren: () => import("./views/pages/ride-rating-management/ride-rating-management.module").then((m) => m.RideRatingManagementModule),
      },
      {
        path: "ride-request",
        loadChildren: () => import("./views/pages/ride-request/ride-request.module").then((m) => m.RideRequestModule),
      },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}