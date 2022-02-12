// Angular
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Import the library
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { NgxImageZoomModule } from 'ngx-image-zoom';

// Angular in memory
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Perfect Scroll bar
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Env
import { environment } from '../environments/environment';
// Hammer JS
import 'hammerjs';
// NGX Permissions
import { NgxPermissionsModule } from 'ngx-permissions';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// State
import { metaReducers, reducers } from './core/reducers';
// Copmponents
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './views/theme/theme.module';

// Partials
import { PartialsModule } from './views/partials/partials.module';
// Layout Services
import {
	DataTableService,
	KtDialogService,
	LayoutConfigService,
	LayoutRefService,
	MenuAsideService,
	MenuConfigService,
	MenuHorizontalService,
	PageConfigService,
	SplashScreenService,
	SubheaderService
} from './core/_base/layout';
// Auth
// CRUD
// Config
import { LayoutConfig } from './core/_config/layout.config';
// Highlight JS
import { HIGHLIGHT_OPTIONS, HighlightLanguage } from 'ngx-highlightjs';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as scss from 'highlight.js/lib/languages/scss';
import * as xml from 'highlight.js/lib/languages/xml';
import * as json from 'highlight.js/lib/languages/json';
import { ToastrModule } from 'ngx-toastr';
import { HOMEComponent } from './home/home.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';  
// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	wheelSpeed: 0.5,
	swipeEasing: true,
	minScrollbarLength: 40,
	maxScrollbarLength: 300,
};

export function initializeLayoutConfig(appConfig: LayoutConfigService) {
	// initialize app by loading default demo layout config
	return () => {
		if (appConfig.getConfig() === null) {
			appConfig.loadConfigs(new LayoutConfig().configs);
		}
	};
}

export function hljsLanguages(): HighlightLanguage[] {
	return [
		{ name: 'typescript', func: typescript },
		{ name: 'scss', func: scss },
		{ name: 'xml', func: xml },
		{ name: 'json', func: json }
	];
}

import { TranslateLoader, TranslateModule,TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslationLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [AppComponent, HOMEComponent],
	imports: [
		
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxPermissionsModule.forRoot(),
		NgMultiSelectDropDownModule.forRoot(),
		AngularMultiSelectModule,
		BsDatepickerModule.forRoot(),
		CKEditorModule,
		NgxImgZoomModule, 
		// NgxImageZoomModule.forRoot(),
		NgxImageZoomModule,
		PartialsModule,
		CoreModule,
		OverlayModule,
		StoreModule.forRoot(reducers, {
			metaReducers
			, runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		StoreDevtoolsModule.instrument(),
		TranslateModule.forRoot({
			loader: { provide: TranslateLoader, useFactory: TranslationLoaderFactory, deps: [HttpClient] }
		}),
		MatProgressSpinnerModule,
		InlineSVGModule.forRoot(),
		ThemeModule,
		ToastrModule.forRoot({
			timeOut: 4000, preventDuplicates: true,
			maxOpened: 1
		})
	],
	exports: [],
	providers: [
		LayoutConfigService,
		LayoutRefService,
		MenuConfigService,
		PageConfigService,
		KtDialogService,
		DataTableService,
		SplashScreenService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		},
		{
			// layout config initializer
			provide: APP_INITIALIZER,
			useFactory: initializeLayoutConfig,
			deps: [LayoutConfigService], multi: true
		},
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: { languages: hljsLanguages }
		},
		// template services
		SubheaderService,
		MenuHorizontalService,
		MenuAsideService,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}