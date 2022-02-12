(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-state-state-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/add-edit-state/add-edit-state.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/state/add-edit-state/add-edit-state.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'STATE.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'STATE.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/state/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditStateForm\" [formGroup]=\"addEditStateForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'STATE.LABEL.STATE_NAME' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'STATE.PLACEHOLDERS.STATE_NAME' | translate}}\" type=\"text\" formControlName=\"state_name\" [ngClass]=\"{ 'is-invalid': submitted && addEditStateForm.controls.state_name.errors }\">\n                            <div *ngIf=\"submitted && addEditStateForm.controls.state_name.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditStateForm.controls.state_name.errors?.required\">\n                                    {{'STATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditStateForm.controls.state_name.errors?.minlength && !addEditStateForm.controls.state_name.errors?.pattern\" class=\"lbl-err\">\n                                    {{'STATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditStateForm.controls.state_name.errors?.maxlength && !addEditStateForm.controls.state_name.errors?.pattern\" class=\"lbl-err\">\n                                    {{'STATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditStateForm.controls.state_name.errors?.pattern\">\n                                    {{'STATE.VALIDATION.INVALID_NAME' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'STATE.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"state_status\" [ngClass]=\"{'is-invalid': submitted && addEditStateForm.controls.state_status.errors}\">\n                                <option value=\"{{'STATE.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'STATE.LABEL.ACTIVE' | translate}}</option>\n                                <option value=\"{{'STATE.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'STATE.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditStateForm.controls.state_status.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted && addEditStateForm.controls.state_status.errors?.required\">\n                                    {{'STATE.VALIDTION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Select Country-->\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'STATE.LABEL.COUNTRY_NAME' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\" formControlName=\"state_countryId\" [ngClass]=\"{ 'is-invalid': submitted && addEditStateForm.controls.state_countryId.errors }\">\n                                <option value=\"\"> {{'STATE.PLACEHOLDERS.SELECT_COUNTRY' | translate }}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditStateForm.controls.state_countryId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditStateForm.controls.state_countryId.errors?.required\">\n                                    {{'STATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/state/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate}}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">{{'BUTTONS.SUBMIT' | translate}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/state-list/state-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/state/state-list/state-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'STATE.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/state/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/state.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/state/state.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/core/auth/_guards/access-guard-permission.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/auth/_guards/access-guard-permission.guard.ts ***!
  \********************************************************************/
/*! exports provided: AccessGuardPermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuardPermissionGuard", function() { return AccessGuardPermissionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/core/auth/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");






var AccessGuardPermissionGuard = /** @class */ (function () {
    function AccessGuardPermissionGuard(auth, router, localstorageService, toastr) {
        this.auth = auth;
        this.router = router;
        this.localstorageService = localstorageService;
        this.toastr = toastr;
        this.checkHasPermission = false;
    }
    AccessGuardPermissionGuard.prototype.canActivate = function (next, state) {
        this.getPermission(next);
        if (!this.checkHasPermission) {
            this.toastr.warning('YOU DO NOT HAVE PERMISSION....!!!');
            this.router.navigate(['/admin/dashboard']);
            return this.checkHasPermission;
        }
        else {
            return this.checkHasPermission;
        }
    };
    AccessGuardPermissionGuard.prototype.getPermission = function (next) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.localstorageService.getBehaviorView().subscribe(function (data) {
                            if (data && data.length) {
                                if (_this.checkRoleHasPermission(data, next['data'].permission) && _this.checkRoleHasPermission(data, next['data'].mainModulePermission)) {
                                    _this.checkHasPermission = true;
                                }
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccessGuardPermissionGuard.prototype.checkRoleHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    AccessGuardPermissionGuard.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    AccessGuardPermissionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AccessGuardPermissionGuard);
    return AccessGuardPermissionGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/_services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/auth/_services/index.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/_services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

// export { AuthService } from './auth.service.fake'; // You have to comment this, when your real back-end is done
 // You have to uncomment this, when your real back-end is done


/***/ }),

/***/ "./src/app/helper/regular.expression.ts":
/*!**********************************************!*\
  !*** ./src/app/helper/regular.expression.ts ***!
  \**********************************************/
/*! exports provided: validataion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validataion", function() { return validataion; });
var validataion = {
    emailRegEx: /^[A-Za-z\d\.\_\-\+]{2,64}\@([A-Za-z\d\-\_]{1,256})\.[A-Za-z\d]+(.[A-Za-z\d]+)?$/,
    passwordRegEx: /^[a-zA-Z0-9-_\!\@\#\$\%\^&\*]{6,15}$/,
    phoneRegEx: /^[0-9]{10,12}$/,
    accountNumber: /^[0-9]{9,18}$/,
    amount: /^\d{0,5}(\d\.\d?|\.\d)?\d?$/,
    imageSize: 4194304,
    videoSize: 104857600,
    MESSAGESLENGTH: 25,
    nameRegEx: /^\S[a-z\sA-Z]+$/,
    nameNumericRegEx: /^[a-zA-Z][a-zA-Z\d]+$/,
    alphaNumericRegEx: /^[a-zA-Z0-9]*$/,
    alphaOnly: /^[a-zA-Z]*$/,
    NumDecimalRegEx: /^[0-9\.]*$/,
    nameMinLength: 2,
    nameMaxLength: 64,
    numericOnly: /^[0-9]+$/,
    percentageRegEx: /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/,
    noOfSeats: /^[0-7]{1}$/,
    FeePriceRegEx: /^\d+(\.\d{0,2})*$/,
    fare_min: 0,
    fare_max: 99,
};


/***/ }),

/***/ "./src/app/services/script-loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/script-loader.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = $('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                $(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/views/pages/state/add-edit-state/add-edit-state.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/state/add-edit-state/add-edit-state.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0YXRlL2FkZC1lZGl0LXN0YXRlL2FkZC1lZGl0LXN0YXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/state/add-edit-state/add-edit-state.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/state/add-edit-state/add-edit-state.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddStateComponent, EditStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStateComponent", function() { return AddStateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStateComponent", function() { return EditStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _state_state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/state.actions */ "./src/app/views/pages/state/state/state.actions.ts");
/* harmony import */ var _state_state_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/state.reducer */ "./src/app/views/pages/state/state/state.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

















var AddStateComponent = /** @class */ (function () {
    function AddStateComponent(subheaderService, _formBuilder, router, localStorageService, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.isAdd = true;
        this.submitted = false;
        this.element = false;
        this.countries = [];
        this.STATE_CONST = this.translate.instant('STATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.STATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.STATE_CONST.MODULE_NAME);
    }
    AddStateComponent.prototype.ngOnInit = function () {
        this.buildAddEditStateForm();
        // this.getAllCountries();
    };
    AddStateComponent.prototype.buildAddEditStateForm = function () {
        this.addEditStateForm = this._formBuilder.group({
            state_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameRegEx)]],
            // state_countryId: ["", [Validators.required]],
            state_status: ["ACTIVE", []]
        });
    };
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
    AddStateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditStateForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditStateForm.value;
                    obj = {
                        state_name: [{
                                lang: 'EN',
                                title: form.state_name
                            }],
                        state_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry,
                        state_status: form.state_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_state_actions__WEBPACK_IMPORTED_MODULE_12__["AddState"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_state_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/state/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditStateForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddStateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    AddStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-state',
            template: __webpack_require__(/*! raw-loader!./add-edit-state.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/add-edit-state/add-edit-state.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-state.component.scss */ "./src/app/views/pages/state/add-edit-state/add-edit-state.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], AddStateComponent);
    return AddStateComponent;
}());

//Edit
var EditStateComponent = /** @class */ (function () {
    function EditStateComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.countryService = countryService;
        this.isAdd = false;
        this.submitted = false;
        this.element = false;
        this.countries = [];
        this.STATE_CONST = this.translate.instant('STATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.STATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.STATE_CONST.MODULE_NAME);
    }
    EditStateComponent.prototype.ngOnInit = function () {
        this.buildAddEditStateForm();
        this.getAllCountries();
        this.getStateDetails();
    };
    EditStateComponent.prototype.buildAddEditStateForm = function () {
        this.addEditStateForm = this._formBuilder.group({
            state_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameRegEx)]],
            // state_countryId: ["", [Validators.required]],
            state_status: ["ACTIVE", []]
        });
    };
    EditStateComponent.prototype.getAllCountries = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.countryService.getAllCountries().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.countries = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditStateComponent.prototype.getStateDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_state_actions__WEBPACK_IMPORTED_MODULE_12__["LoadState"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_state_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        result = data['data'];
                        fd = {
                            state_name: result.state_name.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            state_countryId: result.state_countryId,
                            state_status: result.state_status != null && result.state_status != undefined ? result.state_status : "",
                        };
                        this.addEditStateForm.patchValue(fd);
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditStateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, fd, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditStateForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditStateForm.value;
                    fd = {
                        state_name: [{
                                lang: 'EN',
                                title: form.state_name
                            }],
                        state_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry,
                        state_status: form.state_status
                    };
                    obj = {
                        id: this.id,
                        data: fd
                    };
                    this.stateSubscription = this.store.dispatch(new _state_state_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateState"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_state_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/state/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditStateForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditStateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_11__["CountryService"] }
    ]; };
    EditStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-state',
            template: __webpack_require__(/*! raw-loader!./add-edit-state.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/add-edit-state/add-edit-state.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-state.component.scss */ "./src/app/views/pages/state/add-edit-state/add-edit-state.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_11__["CountryService"]])
    ], EditStateComponent);
    return EditStateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/state/state-list/state-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/state/state-list/state-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0YXRlL3N0YXRlLWxpc3Qvc3RhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/state/state-list/state-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/state/state-list/state-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: StateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateListComponent", function() { return StateListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../api-constants */ "./src/api-constants.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










function _window() {
    // return the global native browser window object
    return window;
}
var StateListComponent = /** @class */ (function () {
    function StateListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.STATE_CONST = [];
        this.searchObj = { field: 'state_name', state_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.STATE_CONST = this.translate.instant('STATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.STATE'));
        titleService.setTitle(this.APPNAME + " | " + this.STATE_CONST.MODULE_NAME);
    }
    StateListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    StateListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].STATE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].STATE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].STATE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].STATE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    StateListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    StateListComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-state-list', scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            // begin first table
            var table = $(document).find('#kt_datatable').DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                //colReorder: true, // for column reorder
                order: [],
                serverSide: true,
                oLanguage: {
                    sProcessing: that.STATE_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listState,
                    type: 'POST',
                    headers: {
                        'Authorization': that.localStorageService.getToken(),
                    },
                    'dataFilter': function (data) {
                        var json = $.parseJSON(data);
                        if (json['code'] === 200) {
                            json.recordsTotal = json.data.totalDocs;
                            json.recordsFiltered = json.data.totalDocs;
                            json.data = json.data.docs;
                        }
                        else if (json['code'] === 401 || json['code'] === 500 || json['code'] === 403) {
                            that.router.navigate(['login']);
                        }
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.STATE_CONST.LABEL.SR_NO, data: null,
                    },
                    { title: that.STATE_CONST.LABEL.STATE_NAME, data: 'state_name' },
                    { title: that.STATE_CONST.LABEL.COUNTRY_NAME, data: 'state_countryName' },
                    { title: that.STATE_CONST.LABEL.STATUS, data: 'state_status' },
                    { title: that.STATE_CONST.LABEL.CREATED_ON, data: 'state_createdOn' },
                    { title: that.STATE_CONST.LABEL.MODIFIED_ON, data: 'state_modifyOn' },
                    { title: that.STATE_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.STATE_CONST.LABEL.SR_NO:
                                break;
                            case that.STATE_CONST.LABEL.STATE_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.STATE_CONST.LABEL.COUNTRY_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.STATE_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                                        <option value=\"\">" + that.STATE_CONST.PLACEHOLDERS.STATUS + "</option>\n                                        <option value=\"ACTIVE\">" + that.STATE_CONST.LABEL.ACTIVE + "</option>\n                                        <option value=\"INACTIVE\">" + that.STATE_CONST.LABEL.INACTIVE + "</option></select>\n                                    "));
                                break;
                            // case that.STATE_CONST.LABEL.CREATED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            // case that.STATE_CONST.LABEL.MODIFIED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.STATE_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                      margin-left: 10px !important; margin-top: 0px !important;\">\n                            <span>\n                              <i class=\"la la-search\"></i>\n                              <span>" + that.STATE_CONST.BUTTONS.SEARCH + "</span>\n                            </span>\n                          </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                      margin-left: 10px !important; margin-top: 0px !important;\">\n                            <span>\n                              <i class=\"la la-close\"></i>\n                              <span>" + that.STATE_CONST.BUTTONS.RESET + "</span>\n                            </span>\n                          </button>");
                                $('<th>').append(search).append(reset).appendTo(rowFilter);
                                $(search).on('click', function (e) {
                                    e.preventDefault();
                                    var params = {};
                                    $(rowFilter)
                                        .find('.kt-input')
                                        .each(function () {
                                        var i = $(this).data('col-index');
                                        if (params[i]) {
                                            params[i] += '|' + $(this).val();
                                        }
                                        else {
                                            params[i] = $(this).val();
                                        }
                                    });
                                    $.each(params, function (i, val) {
                                        // apply search params to datatable
                                        table.column(i).search(val ? val : '', false, false);
                                    });
                                    table.table().draw();
                                });
                                $(document).on('keyup', '.form-filter', function (e) {
                                    var n = $(this).val();
                                    if (e.keyCode === 13) {
                                        $('#kt_datatable').DataTable().column($(this).data('colIndex')).search(n).draw();
                                    }
                                    // if (n === '') {
                                    //   (<any>$('#kt_datatable')).DataTable().column($(this).data('colIndex')).search(n).draw();
                                    // }
                                });
                                $(reset).on('click', function (e) {
                                    e.preventDefault();
                                    $(rowFilter).find('.kt-input')
                                        .each(function (i) {
                                        $(this).val('');
                                        table
                                            .column($(this).data('col-index'))
                                            .search('', false, false);
                                    });
                                    table.table().draw();
                                });
                                break;
                        }
                        if (column !== 'Actions') {
                            $(input).appendTo($('<th>').appendTo(rowFilter));
                        }
                    });
                },
                columnDefs: [{
                        targets: -1,
                        title: 'Actions',
                        orderable: !1,
                        bSortable: false,
                        width: '20%',
                        render: function (a, e, t, n) {
                            var id = (t._id);
                            var editBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' + id + '" onclick="window.my.notimgmt.edit(this)" title="Edit details">\
										<i class="la la-edit"></i> </a>\
									';
                            var deleteBtn = '<a href="javascript:;" id="btnDelete" data-id="' + id + '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
											<i class="la la-trash"></i>\
                                        </a>';
                            if (that.editPermission && that.deletePermission) {
                                return editBtn + deleteBtn;
                            }
                            else if (that.editPermission) {
                                return editBtn;
                            }
                            else if (that.deletePermission) {
                                return deleteBtn;
                            }
                            else {
                                return '-';
                            }
                        }
                    },
                    {
                        targets: 0,
                        width: '5%',
                        orderable: false,
                        render: function (a, e, t, n) {
                            return ((n.row + 1) + (n.settings._iDisplayStart));
                        }
                    },
                    {
                        targets: 1,
                        width: '20%',
                        render: function (a, e, t, n) {
                            var c = a.filter(function (obj) {
                                return (obj.lang == 'EN');
                            });
                            return c[0].title;
                        }
                    },
                    {
                        targets: 2,
                        width: '20%',
                        render: function (a, e, t, n) {
                            var c = a.filter(function (obj) {
                                return (obj.lang == 'EN');
                            });
                            return c[0].title;
                        }
                    },
                    {
                        targets: 3,
                        width: '15%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.state_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.state_status].title + '</span>';
                        }
                    },
                    {
                        targets: 4,
                        width: '10%'
                    },
                    {
                        targets: 5,
                        width: '10%',
                    },
                ],
            });
            //table.colReorder.move( 0, 1 );
            table.on('column-reorder', function (e, settings, details) {
                var headerCell = $(table.column(details.to).header());
                headerCell.addClass('reordered');
                setTimeout(function () {
                    headerCell.removeClass('reordered');
                }, 2000);
            });
        });
    };
    StateListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/state/edit/' + this.id]);
    };
    StateListComponent.prototype.delete = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, $(e).data("id")];
                    case 1:
                        _a.id = _b.sent();
                        obj = {
                            component: 'state',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    StateListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'state',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    StateListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    StateListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    StateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-state-list',
            template: __webpack_require__(/*! raw-loader!./state-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/state-list/state-list.component.html"),
            styles: [__webpack_require__(/*! ./state-list.component.scss */ "./src/app/views/pages/state/state-list/state-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], StateListComponent);
    return StateListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/state/state.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/state/state.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0YXRlL3N0YXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/state/state.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/state/state.component.ts ***!
  \******************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var StateComponent = /** @class */ (function () {
    function StateComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].STATE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].stateManagement);
    }
    StateComponent.prototype.ngOnInit = function () {
    };
    StateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    StateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-state',
            template: __webpack_require__(/*! raw-loader!./state.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.scss */ "./src/app/views/pages/state/state.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/state/state.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/pages/state/state.module.ts ***!
  \***************************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.component */ "./src/app/views/pages/state/state.component.ts");
/* harmony import */ var _add_edit_state_add_edit_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-state/add-edit-state.component */ "./src/app/views/pages/state/add-edit-state/add-edit-state.component.ts");
/* harmony import */ var _state_list_state_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-list/state-list.component */ "./src/app/views/pages/state/state-list/state-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_state_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/state.effects */ "./src/app/views/pages/state/state/state.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_state_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/state.reducer */ "./src/app/views/pages/state/state/state.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _state_component__WEBPACK_IMPORTED_MODULE_3__["StateComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _state_list_state_list_component__WEBPACK_IMPORTED_MODULE_5__["StateListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].STATE.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_state_add_edit_state_component__WEBPACK_IMPORTED_MODULE_4__["AddStateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BADGE.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_state_add_edit_state_component__WEBPACK_IMPORTED_MODULE_4__["EditStateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BADGE.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_state_component__WEBPACK_IMPORTED_MODULE_3__["StateComponent"], _state_list_state_list_component__WEBPACK_IMPORTED_MODULE_5__["StateListComponent"], _add_edit_state_add_edit_state_component__WEBPACK_IMPORTED_MODULE_4__["AddStateComponent"], _add_edit_state_add_edit_state_component__WEBPACK_IMPORTED_MODULE_4__["EditStateComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_state_effects__WEBPACK_IMPORTED_MODULE_12__["StateEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("State", _state_state_reducer__WEBPACK_IMPORTED_MODULE_15__["StateReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]
            ]
        })
    ], StateModule);
    return StateModule;
}());



/***/ }),

/***/ "./src/app/views/pages/state/state/state.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/state/state/state.actions.ts ***!
  \**********************************************************/
/*! exports provided: StateActionTypes, LoadState, LoadStateSuccess, LoadStateFail, UpdateState, UpdateStateSuccess, UpdateStateFail, DeleteState, DeleteStateSuccess, DeleteStateFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddState, AddStateSuccess, AddStateFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateActionTypes", function() { return StateActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadState", function() { return LoadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadStateSuccess", function() { return LoadStateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadStateFail", function() { return LoadStateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateState", function() { return UpdateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStateSuccess", function() { return UpdateStateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStateFail", function() { return UpdateStateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteState", function() { return DeleteState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStateSuccess", function() { return DeleteStateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStateFail", function() { return DeleteStateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddState", function() { return AddState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStateSuccess", function() { return AddStateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStateFail", function() { return AddStateFail; });
var StateActionTypes;
(function (StateActionTypes) {
    StateActionTypes["UPDATE_STATUS"] = "[STATE] Update Status";
    StateActionTypes["UPDATE_STATUS_SUCCESS"] = "[STATE]  Update Status Success";
    StateActionTypes["UPDATE_STATUS_FAIL"] = "[STATE]  Update Status Fail";
    StateActionTypes["LOAD_STATE"] = "[STATE] Load STATE";
    StateActionTypes["LOAD_STATE_SUCCESS"] = "[STATE] Load STATE Success";
    StateActionTypes["LOAD_STATE_FAIL"] = "[STATE] Load STATE Fail";
    StateActionTypes["UPDATE_STATE"] = "[STATE] Update STATE";
    StateActionTypes["UPDATE_STATE_SUCCESS"] = "[STATE] Update STATE Success";
    StateActionTypes["UPDATE_STATE_FAIL"] = "[STATE] Update STATE Fail";
    StateActionTypes["DELETE_STATE"] = "[STATE] Delete STATE";
    StateActionTypes["DELETE_STATE_SUCCESS"] = "[STATE] Delete STATE Success";
    StateActionTypes["DELETE_STATE_FAIL"] = "[STATE] Delete STATE Fail";
    StateActionTypes["ADD_STATE"] = "[STATE] Upload Data";
    StateActionTypes["ADD_STATE_SUCCESS"] = "[STATE] Upload Data Success";
    StateActionTypes["ADD_STATE_FAIL"] = "[STATE] Upload Data Fail";
})(StateActionTypes || (StateActionTypes = {}));
var LoadState = /** @class */ (function () {
    function LoadState(payload) {
        this.payload = payload;
        this.type = StateActionTypes.LOAD_STATE;
    }
    LoadState.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadState;
}());

var LoadStateSuccess = /** @class */ (function () {
    function LoadStateSuccess(payload) {
        this.payload = payload;
        this.type = StateActionTypes.LOAD_STATE_SUCCESS;
    }
    LoadStateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadStateSuccess;
}());

var LoadStateFail = /** @class */ (function () {
    function LoadStateFail(payload) {
        this.payload = payload;
        this.type = StateActionTypes.LOAD_STATE_FAIL;
    }
    LoadStateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadStateFail;
}());

var UpdateState = /** @class */ (function () {
    function UpdateState(payload) {
        this.payload = payload;
        this.type = StateActionTypes.UPDATE_STATE;
    }
    UpdateState.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateState;
}());

var UpdateStateSuccess = /** @class */ (function () {
    function UpdateStateSuccess(payload) {
        this.payload = payload;
        this.type = StateActionTypes.UPDATE_STATE_SUCCESS;
    }
    UpdateStateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStateSuccess;
}());

var UpdateStateFail = /** @class */ (function () {
    function UpdateStateFail(payload) {
        this.payload = payload;
        this.type = StateActionTypes.UPDATE_STATE_FAIL;
    }
    UpdateStateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStateFail;
}());

var DeleteState = /** @class */ (function () {
    function DeleteState(payload) {
        this.payload = payload;
        this.type = StateActionTypes.DELETE_STATE;
    }
    DeleteState.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteState;
}());

var DeleteStateSuccess = /** @class */ (function () {
    function DeleteStateSuccess(payload) {
        this.payload = payload;
        this.type = StateActionTypes.DELETE_STATE_SUCCESS;
    }
    DeleteStateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteStateSuccess;
}());

var DeleteStateFail = /** @class */ (function () {
    function DeleteStateFail(payload) {
        this.payload = payload;
        this.type = StateActionTypes.DELETE_STATE_FAIL;
    }
    DeleteStateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteStateFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = StateActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = StateActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = StateActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddState = /** @class */ (function () {
    function AddState(payload) {
        this.payload = payload;
        this.type = StateActionTypes.ADD_STATE;
    }
    AddState.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddState;
}());

var AddStateSuccess = /** @class */ (function () {
    function AddStateSuccess(payload) {
        this.payload = payload;
        this.type = StateActionTypes.ADD_STATE_SUCCESS;
    }
    AddStateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddStateSuccess;
}());

var AddStateFail = /** @class */ (function () {
    function AddStateFail(payload) {
        this.payload = payload;
        this.type = StateActionTypes.ADD_STATE_FAIL;
    }
    AddStateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddStateFail;
}());



/***/ }),

/***/ "./src/app/views/pages/state/state/state.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/state/state/state.effects.ts ***!
  \**********************************************************/
/*! exports provided: StateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateEffect", function() { return StateEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.actions */ "./src/app/views/pages/state/state/state.actions.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state.service */ "./src/app/views/pages/state/state.service.ts");







var StateEffect = /** @class */ (function () {
    function StateEffect(actions$, StateService) {
        var _this = this;
        this.actions$ = actions$;
        this.StateService = StateService;
        this.deleteState$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_state_actions__WEBPACK_IMPORTED_MODULE_5__["StateActionTypes"].DELETE_STATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.StateService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _state_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteStateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteStateFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_state_actions__WEBPACK_IMPORTED_MODULE_5__["StateActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.StateService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateStateData) {
                return new _state_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](updateStateData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadState$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_state_actions__WEBPACK_IMPORTED_MODULE_5__["StateActionTypes"].LOAD_STATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.StateService.getStateById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _state_actions__WEBPACK_IMPORTED_MODULE_5__["LoadStateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["LoadStateFail"](err));
            }));
        }));
        this.updateState$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_state_actions__WEBPACK_IMPORTED_MODULE_5__["StateActionTypes"].UPDATE_STATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.StateService.updateState(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateStateData) {
                return new _state_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStateSuccess"](updateStateData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStateFail"](err)); }));
        }));
        this.addState$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_state_actions__WEBPACK_IMPORTED_MODULE_5__["StateActionTypes"].ADD_STATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.StateService.addState(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _state_actions__WEBPACK_IMPORTED_MODULE_5__["AddStateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["AddStateFail"](err));
            }));
        }));
    }
    StateEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], StateEffect.prototype, "deleteState$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], StateEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], StateEffect.prototype, "loadState$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], StateEffect.prototype, "updateState$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], StateEffect.prototype, "addState$", void 0);
    StateEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]])
    ], StateEffect);
    return StateEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/state/state/state.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/state/state/state.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, StateReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReducer", function() { return StateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.actions */ "./src/app/views/pages/state/state/state.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function StateReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for State load-----------------------------
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].LOAD_STATE_SUCCESS: {
            return action.payload;
        }
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].LOAD_STATE_FAIL: {
            return action.payload.error;
        }
        // for State delete-----------------------------
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].DELETE_STATE_SUCCESS: {
            return action.payload;
        }
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].DELETE_STATE_FAIL: {
            return action.payload.error;
        }
        // for State update-----------------------------
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].UPDATE_STATE_SUCCESS: {
            return action.payload;
        }
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].UPDATE_STATE_FAIL: {
            return action.payload.error;
        }
        // for State upadat status-----------------------------
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for State add-----------------------------
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].ADD_STATE_SUCCESS: {
            return action.payload;
        }
        case _state_actions__WEBPACK_IMPORTED_MODULE_0__["StateActionTypes"].ADD_STATE_FAIL: {
            return action.payload.error;
        }
    }
}
var getStateState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("State");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getStateState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-state-state-module.js.map