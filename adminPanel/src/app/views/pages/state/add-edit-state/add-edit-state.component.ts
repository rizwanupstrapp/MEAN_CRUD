import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { SubheaderService } from "../../../../core/_base/layout/services/subheader.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import { APPNAME } from "../../../../helper/page.title";
import { LocalstorageService } from "../../../../services/localstorage.service";
import { Store, select } from "@ngrx/store";
import { Helpers } from "../../../../helper/helper";
import { CountryService } from "../../country/country.service";

import * as stateActions from "../state/state.actions";
import * as fromState from "../state/state.reducer";

import { TranslateService } from "@ngx-translate/core";
import { validataion } from '../../../../helper/regular.expression';
import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'kt-add-state',
	templateUrl: './add-edit-state.component.html',
	styleUrls: ['./add-edit-state.component.scss']
})
export class AddStateComponent implements OnInit {
	Editor: any;
	isAdd: Boolean = true;
	addEditStateForm: FormGroup;
	submitted: Boolean = false;
	stateSubscription: any;
	element: any = false;
	STATE_CONST: any;
	id: any;

	countries: any = [];

	constructor(
		private subheaderService: SubheaderService,
		private _formBuilder: FormBuilder,
		private router: Router,
		public localStorageService: LocalstorageService,
		private toastr: ToastrService,
		private store: Store<{ school: any }>,
		titleService: Title,
		private translate: TranslateService,
	) {
		this.STATE_CONST = this.translate.instant('STATE');
		// SET SUBHEAD AND TITLE
		this.subheaderService.setTitle(this.translate.instant('MENU.STATE'));
		titleService.setTitle(APPNAME + " | " + this.STATE_CONST.MODULE_NAME);
	}

	ngOnInit() {
		this.buildAddEditStateForm();
		// this.getAllCountries();
	}

	buildAddEditStateForm() {
		this.addEditStateForm = this._formBuilder.group({
			state_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
			// state_countryId: ["", [Validators.required]],
			state_status: ["ACTIVE", []]
		});
	}

	// getAllCountries() {
	// 	Helpers.setLoading(true);
	// 	this.countryService.getAllCountries().subscribe(async (data) => {
	// 		if (data && data != undefined) {
	// 			if (data['code'] == 200) {
	// 				this.countries = data['data'];

	// 				if (this.dtr && !(this.dtr as ViewRef).destroyed) {
	// 					this.dtr.detectChanges();
	// 				}
	// 				Helpers.setLoading(false);
	// 			} else {
	// 				Helpers.setLoading(false);
	// 				this.toastr.error(data['message']);
	// 			}
	// 		}
	// 	});
	// }

	async onSubmit() {
		this.submitted = true;
		if (this.addEditStateForm.valid) {
			Helpers.setLoading(true);

			const form = this.addEditStateForm.value;

			let obj = {
				state_name: [{
					lang: 'EN',
					title: form.state_name
				}],
				state_countryId: environment.webDefaultCountry,
				state_status: form.state_status
			}

			this.stateSubscription = this.store.dispatch(new stateActions.AddState(obj));
			this.stateSubscription = this.store.pipe(select(fromState.selectPageState)).subscribe((data) => {

				if (data && data != undefined) {
					if (data['code'] == 200) {

						Helpers.setLoading(false);
						this.toastr.success(data['message']);
						this.stateSubscription.unsubscribe();
						this.router.navigate(['/state/list']);
					} else {
						Helpers.setLoading(false);
						this.toastr.error(data['message']);
						this.stateSubscription.unsubscribe();
					}
				}
			});
		}  else if (!this.addEditStateForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
	}

}

//Edit
@Component({
	selector: 'kt-edit-state',
	templateUrl: './add-edit-state.component.html',
	styleUrls: ['./add-edit-state.component.scss']
})
export class EditStateComponent implements OnInit {
	Editor: any;
	isAdd: Boolean = false;
	addEditStateForm: FormGroup;
	submitted: Boolean = false;
	stateSubscription: any;
	element: any = false;
	STATE_CONST: any;
	id: any;

	countries: any = [];

	constructor(
		private subheaderService: SubheaderService,
		private _formBuilder: FormBuilder,
		private router: Router,
		private _route: ActivatedRoute,
		public localStorageService: LocalstorageService,
		private toastr: ToastrService,
		private dtr: ChangeDetectorRef,
		private store: Store<{ school: any }>,
		titleService: Title,
		private translate: TranslateService,
		private countryService: CountryService
	) {
		this.STATE_CONST = this.translate.instant('STATE');
		// SET SUBHEAD AND TITLE
		this.subheaderService.setTitle(this.translate.instant('MENU.STATE'));
		titleService.setTitle(APPNAME + " | " + this.STATE_CONST.MODULE_NAME);
	}

	ngOnInit() {
		this.buildAddEditStateForm();
		this.getAllCountries();
		this.getStateDetails();
	}

	buildAddEditStateForm() {
		this.addEditStateForm = this._formBuilder.group({
			state_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
			// state_countryId: ["", [Validators.required]],
			state_status: ["ACTIVE", []]
		});
	}

	getAllCountries() {
		Helpers.setLoading(true);
		this.countryService.getAllCountries().subscribe(async (data) => {
			if (data && data != undefined) {
				if (data['code'] == 200) {
					this.countries = data['data'];

					if (this.dtr && !(this.dtr as ViewRef).destroyed) {
						this.dtr.detectChanges();
					}
					Helpers.setLoading(false);
				} else {
					Helpers.setLoading(false);
					this.toastr.error(data['message']);
				}
			}
		});
	}

	getStateDetails() {
		this.id = this._route.snapshot.params['id'];
		Helpers.setLoading(true);

		this.stateSubscription = this.store.dispatch(new stateActions.LoadState(this.id));
		this.stateSubscription = this.store.pipe(select(fromState.selectPageState)).subscribe(async (data) => {

			if (data && data != undefined) {
				if (data['code'] == 200) {
					let result = data['data'];
					let fd = {
						state_name: result.state_name.filter((obj) => obj.lang == "EN")[0].title,
						state_countryId: result.state_countryId,
						state_status: result.state_status != null && result.state_status != undefined ? result.state_status : "",
					}

					this.addEditStateForm.patchValue(fd);
					Helpers.setLoading(false);
					this.stateSubscription.unsubscribe();
				} else {
					Helpers.setLoading(false);
					this.toastr.error(data['message']);
					this.stateSubscription.unsubscribe();

				}
			}
		});
	}

	async onSubmit() {
		this.submitted = true;
		if (this.addEditStateForm.valid) {
			Helpers.setLoading(true);

			const form = this.addEditStateForm.value;
			let fd = {
				state_name: [{
					lang: 'EN',
					title: form.state_name
				}],
				state_countryId: environment.webDefaultCountry,
				state_status: form.state_status
			}

			let obj = {
				id: this.id,
				data: fd
			}

			this.stateSubscription = this.store.dispatch(new stateActions.UpdateState(obj));
			this.stateSubscription = this.store.pipe(select(fromState.selectPageState)).subscribe((data) => {

				if (data && data != undefined) {
					if (data['code'] == 200) {

						Helpers.setLoading(false);
						this.toastr.success(data['message']);
						this.stateSubscription.unsubscribe();
						this.router.navigate(['/state/list']);
					} else {
						Helpers.setLoading(false);
						this.toastr.error(data['message']);
						this.stateSubscription.unsubscribe();
					}
				}
			});
		} else if (!this.addEditStateForm.valid) {
			this.toastr.error('All Tabs Field is Required');
		 }
	}

}
