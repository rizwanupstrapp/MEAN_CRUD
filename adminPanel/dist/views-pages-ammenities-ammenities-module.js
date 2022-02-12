(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-ammenities-ammenities-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'AMMENITIES.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'AMMENITIES.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/ammenities/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditAmmenitiesForm\" [formGroup]=\"addEditAmmenitiesForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- -----------ammenities name en-->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AMMENITIES.LABEL.AMMENITIES_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- ammenities_name_en -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'AMMENITIES.PLACEHOLDERS.AMMENITIES_NAME' | translate}}\" type=\"text\"\n                                formControlName=\"ammenities_name_en\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditAmmenitiesForm.controls.ammenities_name_en.errors }\">\n                            <div *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_name_en.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_name_en.errors?.required\">\n                                    {{'AMMENITIES.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditAmmenitiesForm.controls.ammenities_name_en.errors?.minlength && !addEditAmmenitiesForm.controls.ammenities_name_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'AMMENITIES.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditAmmenitiesForm.controls.ammenities_name_en.errors?.maxlength && !addEditAmmenitiesForm.controls.ammenities_name_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'AMMENITIES.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p\n                                    *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_name_en.errors?.pattern\">\n                                    {{'AMMENITIES.VALIDATION.INVALID_NAME' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AMMENITIES.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"ammenities_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditAmmenitiesForm.controls.ammenities_status.errors }\">\n                                <option value=\"{{'AMMENITIES.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'AMMENITIES.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'AMMENITIES.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'AMMENITIES.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_status.errors?.required\">\n                                    {{'AMMENITIES.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- <div class=\"form-group row\">\n                    \n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'AMMENITIES.LABEL.AMMENITIES_NAME_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'AMMENITIES.PLACEHOLDERS.AMMENITIES_NAME' | translate}}\" type=\"text\"\n                            formControlName=\"ammenities_name_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditAmmenitiesForm.controls.ammenities_name_ar.errors }\">\n                        <div *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_name_ar.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_name_ar.errors?.required\">\n                                {{'AMMENITIES.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditAmmenitiesForm.controls.ammenities_name_ar.errors?.minlength && !addEditAmmenitiesForm.controls.ammenities_name_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'AMMENITIES.VALIDATION.MIN_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditAmmenitiesForm.controls.ammenities_name_ar.errors?.maxlength && !addEditAmmenitiesForm.controls.ammenities_name_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'AMMENITIES.VALIDATION.MAX_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted && addEditAmmenitiesForm.controls.ammenities_name_ar.errors?.pattern\">\n                                {{'AMMENITIES.VALIDATION.INVALID_TITLE' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div> -->\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/ammenities/list\"\n                                class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\"\n                                class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'AMMENITIES.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/ammenities/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/ammenities.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ammenities/ammenities.component.html ***!
  \********************************************************************************************/
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

/***/ "./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FtbWVuaXRpZXMvYWRkLWVkaXQtYW1tZW5pdGllcy9hZGQtZWRpdC1hbW1lbml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddAmmenitiesComponent, EditAmmenitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAmmenitiesComponent", function() { return AddAmmenitiesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAmmenitiesComponent", function() { return EditAmmenitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _state_ammenities_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/ammenities.actions */ "./src/app/views/pages/ammenities/state/ammenities.actions.ts");
/* harmony import */ var _state_ammenities_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/ammenities.reducer */ "./src/app/views/pages/ammenities/state/ammenities.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");















var AddAmmenitiesComponent = /** @class */ (function () {
    function AddAmmenitiesComponent(subheaderService, _formBuilder, router, localStorageService, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.AMMENITIES_CONST = this.translate.instant('AMMENITIES');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.AMMENITIES'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.AMMENITIES_CONST.MODULE_NAME);
    }
    AddAmmenitiesComponent.prototype.ngOnInit = function () {
        this.buildAddEditAmmenitiesForm();
    };
    AddAmmenitiesComponent.prototype.buildAddEditAmmenitiesForm = function () {
        this.addEditAmmenitiesForm = this._formBuilder.group({
            ammenities_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // ammenities_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            ammenities_status: ["ACTIVE", []],
        });
    };
    AddAmmenitiesComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditAmmenitiesForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditAmmenitiesForm.value;
                    obj = {
                        ammenities_name: [{
                                lang: 'EN',
                                title: form.ammenities_name_en
                            }
                            // , {
                            //   lang: 'AR',
                            //   title: form.ammenities_name_ar
                            // }
                        ],
                        ammenities_status: form.ammenities_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_ammenities_actions__WEBPACK_IMPORTED_MODULE_12__["AddAmmenities"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_ammenities_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/ammenities/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditAmmenitiesForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddAmmenitiesComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    AddAmmenitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-ammenities',
            template: __webpack_require__(/*! raw-loader!./add-edit-ammenities.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-ammenities.component.scss */ "./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], AddAmmenitiesComponent);
    return AddAmmenitiesComponent;
}());

var EditAmmenitiesComponent = /** @class */ (function () {
    function EditAmmenitiesComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.AMMENITIES_CONST = this.translate.instant('AMMENITIES');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.AMMENITIES'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.AMMENITIES_CONST.MODULE_NAME);
    }
    EditAmmenitiesComponent.prototype.ngOnInit = function () {
        this.buildAddEditAmmenitiesForm();
        this.getAmmenitiesDetails();
    };
    EditAmmenitiesComponent.prototype.buildAddEditAmmenitiesForm = function () {
        this.addEditAmmenitiesForm = this._formBuilder.group({
            ammenities_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // ammenities_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            ammenities_status: ["ACTIVE", []]
        });
    };
    EditAmmenitiesComponent.prototype.getAmmenitiesDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_ammenities_actions__WEBPACK_IMPORTED_MODULE_12__["LoadAmmenities"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_ammenities_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            ammenities_name_en: result.ammenities_name.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            // ammenities_name_ar: result.ammenities_name.filter((obj) => obj.lang == "AR")[0].title,
                            ammenities_status: result.ammenities_status != null && result.ammenities_status != undefined ? result.ammenities_status : "",
                        };
                        return [4 /*yield*/, this.addEditAmmenitiesForm.patchValue(fd)];
                    case 1:
                        _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditAmmenitiesComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditAmmenitiesForm.valid) {
                    form = this.addEditAmmenitiesForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            ammenities_name: [{
                                    lang: 'EN',
                                    title: form.ammenities_name_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.ammenities_name_ar
                                // }
                            ],
                            ammenities_status: form.ammenities_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_ammenities_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateAmmenities"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_ammenities_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/ammenities/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditAmmenitiesForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditAmmenitiesComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    EditAmmenitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-ammenities',
            template: __webpack_require__(/*! raw-loader!./add-edit-ammenities.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-ammenities.component.scss */ "./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], EditAmmenitiesComponent);
    return EditAmmenitiesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FtbWVuaXRpZXMvYW1tZW5pdGllcy1saXN0L2FtbWVuaXRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AmmenitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmenitiesListComponent", function() { return AmmenitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../api-constants */ "./src/api-constants.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











function _window() {
    // return the global native browser window object
    return window;
}
var AmmenitiesListComponent = /** @class */ (function () {
    function AmmenitiesListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.AMMENITIES_CONST = [];
        this.searchObj = { field: 'ammenities_name', ammenities_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.AMMENITIES_CONST = this.translate.instant('AMMENITIES');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.AMMENITIES'));
        titleService.setTitle(this.APPNAME + " | " + this.AMMENITIES_CONST.MODULE_NAME);
    }
    AmmenitiesListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    AmmenitiesListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].AMMENITIES.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].AMMENITIES.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].AMMENITIES.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].AMMENITIES.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    AmmenitiesListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    AmmenitiesListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-ammenities-list', scripts).then(function () {
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
                    sProcessing: that.AMMENITIES_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listAmmenities,
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
                            that.router.navigate(['/dashboard']);
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.AMMENITIES_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.AMMENITIES_CONST.LABEL.AMMENITIES_NAME, data: 'ammenities_name' },
                    { title: that.AMMENITIES_CONST.LABEL.STATUS, data: 'ammenities_status' },
                    { title: that.AMMENITIES_CONST.LABEL.CREATED_ON, data: 'ammenities_createdOn' },
                    { title: that.AMMENITIES_CONST.LABEL.MODIFIED_ON, data: 'ammenities_modifyOn' },
                    { title: that.AMMENITIES_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.AMMENITIES_CONST.LABEL.SR_NO:
                                break;
                            case that.AMMENITIES_CONST.LABEL.AMMENITIES_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AMMENITIES_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.AMMENITIES_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.AMMENITIES_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.AMMENITIES_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.AMMENITIES_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.AMMENITIES_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.AMMENITIES_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.AMMENITIES_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.AMMENITIES_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
                                $('<th>').append(search).append(reset).appendTo(rowFilter);
                                $(search).on('click', function (e) {
                                    e.preventDefault();
                                    var params = {};
                                    $(rowFilter).find('.kt-input').each(function () {
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
                                    $(rowFilter).find('.kt-input').each(function (i) {
                                        $(this).val('');
                                        table.column($(this).data('col-index')).search('', false, false);
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
                        width: '11%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.ammenities_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.ammenities_status].title + '</span>';
                        }
                    },
                    {
                        targets: 3,
                        width: '10%'
                    },
                    {
                        targets: 4,
                        width: '10%'
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
    AmmenitiesListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/ammenities/edit/' + this.id]);
    };
    AmmenitiesListComponent.prototype.delete = function (e) {
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
                            component: 'ammenities',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    AmmenitiesListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'ammenities',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    AmmenitiesListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    AmmenitiesListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    AmmenitiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ammenities-list',
            template: __webpack_require__(/*! raw-loader!./ammenities-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.html"),
            styles: [__webpack_require__(/*! ./ammenities-list.component.scss */ "./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], AmmenitiesListComponent);
    return AmmenitiesListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ammenities/ammenities.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/ammenities/ammenities.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FtbWVuaXRpZXMvYW1tZW5pdGllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/ammenities/ammenities.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/ammenities/ammenities.component.ts ***!
  \****************************************************************/
/*! exports provided: AmmenitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmenitiesComponent", function() { return AmmenitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var AmmenitiesComponent = /** @class */ (function () {
    function AmmenitiesComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].AMMENITIES);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].ammenitiesManagement);
    }
    AmmenitiesComponent.prototype.ngOnInit = function () {
    };
    AmmenitiesComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    AmmenitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ammenities',
            template: __webpack_require__(/*! raw-loader!./ammenities.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ammenities/ammenities.component.html"),
            styles: [__webpack_require__(/*! ./ammenities.component.scss */ "./src/app/views/pages/ammenities/ammenities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], AmmenitiesComponent);
    return AmmenitiesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ammenities/ammenities.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/ammenities/ammenities.module.ts ***!
  \*************************************************************/
/*! exports provided: AmmenitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmenitiesModule", function() { return AmmenitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_ammenities_add_edit_ammenities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-ammenities/add-edit-ammenities.component */ "./src/app/views/pages/ammenities/add-edit-ammenities/add-edit-ammenities.component.ts");
/* harmony import */ var _ammenities_list_ammenities_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ammenities-list/ammenities-list.component */ "./src/app/views/pages/ammenities/ammenities-list/ammenities-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_ammenities_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/ammenities.effects */ "./src/app/views/pages/ammenities/state/ammenities.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _ammenities_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ammenities.component */ "./src/app/views/pages/ammenities/ammenities.component.ts");
/* harmony import */ var _state_ammenities_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/ammenities.reducer */ "./src/app/views/pages/ammenities/state/ammenities.reducer.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _ammenities_component__WEBPACK_IMPORTED_MODULE_16__["AmmenitiesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _ammenities_list_ammenities_list_component__WEBPACK_IMPORTED_MODULE_4__["AmmenitiesListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].AMMENITIES.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_ammenities_add_edit_ammenities_component__WEBPACK_IMPORTED_MODULE_3__["AddAmmenitiesComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].AMMENITIES.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_ammenities_add_edit_ammenities_component__WEBPACK_IMPORTED_MODULE_3__["EditAmmenitiesComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].AMMENITIES.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var AmmenitiesModule = /** @class */ (function () {
    function AmmenitiesModule() {
    }
    AmmenitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ammenities_component__WEBPACK_IMPORTED_MODULE_16__["AmmenitiesComponent"], _ammenities_list_ammenities_list_component__WEBPACK_IMPORTED_MODULE_4__["AmmenitiesListComponent"], _add_edit_ammenities_add_edit_ammenities_component__WEBPACK_IMPORTED_MODULE_3__["AddAmmenitiesComponent"], _add_edit_ammenities_add_edit_ammenities_component__WEBPACK_IMPORTED_MODULE_3__["EditAmmenitiesComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_ammenities_effects__WEBPACK_IMPORTED_MODULE_11__["AmmenitiesEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("ammenities", _state_ammenities_reducer__WEBPACK_IMPORTED_MODULE_17__["AmmenitiesReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], AmmenitiesModule);
    return AmmenitiesModule;
}());



/***/ }),

/***/ "./src/app/views/pages/ammenities/state/ammenities.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/ammenities/state/ammenities.actions.ts ***!
  \********************************************************************/
/*! exports provided: AmmenitiesActionTypes, LoadAmmenities, LoadAmmenitiesSuccess, LoadAmmenitiesFail, UpdateAmmenities, UpdateAmmenitiesSuccess, UpdateAmmenitiesFail, DeleteAmmenities, DeleteAmmenitiesSuccess, DeleteAmmenitiesFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddAmmenities, AddAmmenitiesSuccess, AddAmmenitiesFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmenitiesActionTypes", function() { return AmmenitiesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAmmenities", function() { return LoadAmmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAmmenitiesSuccess", function() { return LoadAmmenitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAmmenitiesFail", function() { return LoadAmmenitiesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAmmenities", function() { return UpdateAmmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAmmenitiesSuccess", function() { return UpdateAmmenitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAmmenitiesFail", function() { return UpdateAmmenitiesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAmmenities", function() { return DeleteAmmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAmmenitiesSuccess", function() { return DeleteAmmenitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAmmenitiesFail", function() { return DeleteAmmenitiesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAmmenities", function() { return AddAmmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAmmenitiesSuccess", function() { return AddAmmenitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAmmenitiesFail", function() { return AddAmmenitiesFail; });
var AmmenitiesActionTypes;
(function (AmmenitiesActionTypes) {
    AmmenitiesActionTypes["UPDATE_STATUS"] = "[AMMENITIES] Update Status";
    AmmenitiesActionTypes["UPDATE_STATUS_SUCCESS"] = "[AMMENITIES]  Update Status Success";
    AmmenitiesActionTypes["UPDATE_STATUS_FAIL"] = "[AMMENITIES]  Update Status Fail";
    AmmenitiesActionTypes["LOAD_AMMENITIES"] = "[AMMENITIES] Load AMMENITIES";
    AmmenitiesActionTypes["LOAD_AMMENITIES_SUCCESS"] = "[AMMENITIES] Load AMMENITIES Success";
    AmmenitiesActionTypes["LOAD_AMMENITIES_FAIL"] = "[AMMENITIES] Load AMMENITIES Fail";
    AmmenitiesActionTypes["UPDATE_AMMENITIES"] = "[AMMENITIES] Update AMMENITIES";
    AmmenitiesActionTypes["UPDATE_AMMENITIES_SUCCESS"] = "[AMMENITIES] Update AMMENITIES Success";
    AmmenitiesActionTypes["UPDATE_AMMENITIES_FAIL"] = "[AMMENITIES] Update AMMENITIES Fail";
    AmmenitiesActionTypes["DELETE_AMMENITIES"] = "[AMMENITIES] Delete AMMENITIES";
    AmmenitiesActionTypes["DELETE_AMMENITIES_SUCCESS"] = "[AMMENITIES] Delete AMMENITIES Success";
    AmmenitiesActionTypes["DELETE_AMMENITIES_FAIL"] = "[AMMENITIES] Delete AMMENITIES Fail";
    AmmenitiesActionTypes["ADD_AMMENITIES"] = "[AMMENITIES] Upload Data";
    AmmenitiesActionTypes["ADD_AMMENITIES_SUCCESS"] = "[AMMENITIES] Upload Data Success";
    AmmenitiesActionTypes["ADD_AMMENITIES_FAIL"] = "[AMMENITIES] Upload Data Fail";
    AmmenitiesActionTypes["UPLOAD_DATA"] = "[AMMENITIES] Upload Data";
    AmmenitiesActionTypes["UPLOAD_DATA_SUCCESS"] = "[AMMENITIES] Upload Data Success";
    AmmenitiesActionTypes["UPLOAD_DATA_FAIL"] = "[AMMENITIES] Upload Data Fail";
})(AmmenitiesActionTypes || (AmmenitiesActionTypes = {}));
var LoadAmmenities = /** @class */ (function () {
    function LoadAmmenities(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.LOAD_AMMENITIES;
    }
    LoadAmmenities.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadAmmenities;
}());

var LoadAmmenitiesSuccess = /** @class */ (function () {
    function LoadAmmenitiesSuccess(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.LOAD_AMMENITIES_SUCCESS;
    }
    LoadAmmenitiesSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadAmmenitiesSuccess;
}());

var LoadAmmenitiesFail = /** @class */ (function () {
    function LoadAmmenitiesFail(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.LOAD_AMMENITIES_FAIL;
    }
    LoadAmmenitiesFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadAmmenitiesFail;
}());

var UpdateAmmenities = /** @class */ (function () {
    function UpdateAmmenities(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.UPDATE_AMMENITIES;
    }
    UpdateAmmenities.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateAmmenities;
}());

var UpdateAmmenitiesSuccess = /** @class */ (function () {
    function UpdateAmmenitiesSuccess(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.UPDATE_AMMENITIES_SUCCESS;
    }
    UpdateAmmenitiesSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateAmmenitiesSuccess;
}());

var UpdateAmmenitiesFail = /** @class */ (function () {
    function UpdateAmmenitiesFail(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.UPDATE_AMMENITIES_FAIL;
    }
    UpdateAmmenitiesFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateAmmenitiesFail;
}());

var DeleteAmmenities = /** @class */ (function () {
    function DeleteAmmenities(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.DELETE_AMMENITIES;
    }
    DeleteAmmenities.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteAmmenities;
}());

var DeleteAmmenitiesSuccess = /** @class */ (function () {
    function DeleteAmmenitiesSuccess(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.DELETE_AMMENITIES_SUCCESS;
    }
    DeleteAmmenitiesSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteAmmenitiesSuccess;
}());

var DeleteAmmenitiesFail = /** @class */ (function () {
    function DeleteAmmenitiesFail(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.DELETE_AMMENITIES_FAIL;
    }
    DeleteAmmenitiesFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteAmmenitiesFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddAmmenities = /** @class */ (function () {
    function AddAmmenities(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.ADD_AMMENITIES;
    }
    AddAmmenities.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAmmenities;
}());

var AddAmmenitiesSuccess = /** @class */ (function () {
    function AddAmmenitiesSuccess(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.ADD_AMMENITIES_SUCCESS;
    }
    AddAmmenitiesSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAmmenitiesSuccess;
}());

var AddAmmenitiesFail = /** @class */ (function () {
    function AddAmmenitiesFail(payload) {
        this.payload = payload;
        this.type = AmmenitiesActionTypes.ADD_AMMENITIES_FAIL;
    }
    AddAmmenitiesFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAmmenitiesFail;
}());



/***/ }),

/***/ "./src/app/views/pages/ammenities/state/ammenities.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/ammenities/state/ammenities.effects.ts ***!
  \********************************************************************/
/*! exports provided: AmmenitiesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmenitiesEffect", function() { return AmmenitiesEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ammenities.actions */ "./src/app/views/pages/ammenities/state/ammenities.actions.ts");
/* harmony import */ var _ammenities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ammenities.service */ "./src/app/views/pages/ammenities/ammenities.service.ts");







var AmmenitiesEffect = /** @class */ (function () {
    function AmmenitiesEffect(actions$, AmmenitiesService) {
        var _this = this;
        this.actions$ = actions$;
        this.AmmenitiesService = AmmenitiesService;
        this.deleteAmmenities$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AmmenitiesActionTypes"].DELETE_AMMENITIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.AmmenitiesService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteAmmenitiesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteAmmenitiesFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AmmenitiesActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.AmmenitiesService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadAmmenities$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AmmenitiesActionTypes"].LOAD_AMMENITIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.AmmenitiesService.getAmmenitiesById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["LoadAmmenitiesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["LoadAmmenitiesFail"](err));
            }));
        }));
        this.updateAmmenities$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AmmenitiesActionTypes"].UPDATE_AMMENITIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.AmmenitiesService.updateAmmenities(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateAmmenitiesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateAmmenitiesFail"](err)); }));
        }));
        this.addAmmenities$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AmmenitiesActionTypes"].ADD_AMMENITIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.AmmenitiesService.addAmmenities(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AddAmmenitiesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ammenities_actions__WEBPACK_IMPORTED_MODULE_5__["AddAmmenitiesFail"](err));
            }));
        }));
    }
    AmmenitiesEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ammenities_service__WEBPACK_IMPORTED_MODULE_6__["AmmenitiesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AmmenitiesEffect.prototype, "deleteAmmenities$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AmmenitiesEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AmmenitiesEffect.prototype, "loadAmmenities$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AmmenitiesEffect.prototype, "updateAmmenities$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AmmenitiesEffect.prototype, "addAmmenities$", void 0);
    AmmenitiesEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ammenities_service__WEBPACK_IMPORTED_MODULE_6__["AmmenitiesService"]])
    ], AmmenitiesEffect);
    return AmmenitiesEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/ammenities/state/ammenities.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/ammenities/state/ammenities.reducer.ts ***!
  \********************************************************************/
/*! exports provided: initialState, AmmenitiesReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmenitiesReducer", function() { return AmmenitiesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ammenities.actions */ "./src/app/views/pages/ammenities/state/ammenities.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function AmmenitiesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Ammenities load-----------------------------
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].LOAD_AMMENITIES_SUCCESS: {
            return action.payload;
        }
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].LOAD_AMMENITIES_FAIL: {
            return action.payload.error;
        }
        // for Ammenities delete-----------------------------
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].DELETE_AMMENITIES_SUCCESS: {
            return action.payload;
        }
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].DELETE_AMMENITIES_FAIL: {
            return action.payload.error;
        }
        // for Ammenities update-----------------------------
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].UPDATE_AMMENITIES_SUCCESS: {
            return action.payload;
        }
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].UPDATE_AMMENITIES_FAIL: {
            return action.payload.error;
        }
        // for Ammenities update status-----------------------------
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Ammenities add-----------------------------
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].ADD_AMMENITIES_SUCCESS: {
            return action.payload;
        }
        case _ammenities_actions__WEBPACK_IMPORTED_MODULE_0__["AmmenitiesActionTypes"].ADD_AMMENITIES_FAIL: {
            return action.payload.error;
        }
    }
}
var getAmmenitiesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("ammenities");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getAmmenitiesState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-ammenities-ammenities-module.js.map