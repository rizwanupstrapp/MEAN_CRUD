(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-city-city-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/add-edit-city/add-edit-city.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/city/add-edit-city/add-edit-city.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'CITY.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'CITY.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/city/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditCityForm\" [formGroup]=\"addEditCityForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- -----------control name en-->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-3\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CITY.LABEL.CITY_NAME_EN' | translate}}*\n                            </label>\n                        </div>\n                        <!-- city_name_en -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'CITY.PLACEHOLDERS.CITY_NAME' | translate}}\" type=\"text\" formControlName=\"city_name_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditCityForm.controls.city_name_en.errors }\">\n                            <div *ngIf=\"submitted && addEditCityForm.controls.city_name_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_name_en.errors?.required\">\n                                    {{'CITY.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCityForm.controls.city_name_en.errors?.minlength && !addEditCityForm.controls.city_name_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'CITY.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCityForm.controls.city_name_en.errors?.maxlength && !addEditCityForm.controls.city_name_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'CITY.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_name_en.errors?.pattern\">\n                                    {{'CITY.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CITY.LABEL.CITY_CODE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- city_code -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'CITY.PLACEHOLDERS.CITY_CODE' | translate}}\" type=\"text\" formControlName=\"city_code\" [ngClass]=\"{ 'is-invalid': submitted && addEditCityForm.controls.city_code.errors }\">\n                            <div *ngIf=\"submitted && addEditCityForm.controls.city_code.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_code.errors?.required\">\n                                    {{'CITY.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCityForm.controls.city_code.errors?.minlength && !addEditCityForm.controls.city_code.errors?.pattern\" class=\"lbl-err\">\n                                    {{'CITY.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCityForm.controls.city_code.errors?.maxlength && !addEditCityForm.controls.city_code.errors?.pattern\" class=\"lbl-err\">\n                                    {{'CITY.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_code.errors?.pattern\">\n                                    {{'CITY.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- -----------city name ar-->\n                <!-- <div class=\"form-group  row\">\n                        <div class=\"col-lg-3\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CITY.LABEL.CITY_NAME_AR' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'CITY.PLACEHOLDERS.CITY_NAME' | translate}}\" type=\"text\"\n                                formControlName=\"city_name_ar\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditCityForm.controls.city_name_ar.errors }\">\n                            <div *ngIf=\"submitted && addEditCityForm.controls.city_name_ar.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_name_ar.errors?.required\">\n                                    {{'CITY.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCityForm.controls.city_name_ar.errors?.minlength && !addEditCityForm.controls.city_name_ar.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'CITY.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCityForm.controls.city_name_ar.errors?.maxlength && !addEditCityForm.controls.city_name_ar.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'CITY.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_name_ar.errors?.pattern\">\n                                    {{'CITY.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                <!-- -----------city_countryId -->\n                <div class=\"form-group  row\">\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CITY.LABEL.CITY_COUNTRY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\" formControlName=\"city_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditCityForm.controls.city_countryId.errors }\">\n                                <option value=\"\"> {{'CITY.PLACEHOLDERS.SELECT_COUNTRY' | translate }}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditCityForm.controls.city_countryId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_countryId.errors?.required\">\n                                    {{'CITY.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CITY.LABEL.CITY_TIMEZONE' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"timezone\" formControlName=\"city_timezoneId\" [ngClass]=\"{ 'is-invalid': submitted && addEditCityForm.controls.city_timezoneId.errors }\">\n                                <option value=\"\"> {{'CITY.PLACEHOLDERS.SELECT_TIMEZONE' | translate }}</option>\n                                <option value=\"{{timezone._id}}\" *ngFor=\"let timezone of timezones\">\n                                    {{timezone.timezone_label}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditCityForm.controls.city_timezoneId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_timezoneId.errors?.required\">\n                                    {{'CITY.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CITY.LABEL.CITY_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- city_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"city_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditCityForm.controls.city_status.errors }\">\n                                <option value=\"{{'CITY.PLACEHOLDERS.ACTIVE' | translate}}\">{{'COUNTRY.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'CITY.PLACEHOLDERS.INACTIVE' | translate}}\">{{'COUNTRY.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditCityForm.controls.city_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCityForm.controls.city_status.errors?.required\">\n                                    {{'CITY.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/city/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/city-list/city-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/city/city-list/city-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'CITY.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/city/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/city.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/city/city.component.html ***!
  \********************************************************************************/
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

/***/ "./src/app/views/pages/city/add-edit-city/add-edit-city.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/city/add-edit-city/add-edit-city.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvY2l0eS9hZGQtZWRpdC1jaXR5L2FkZC1lZGl0LWNpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NpdHkvYWRkLWVkaXQtY2l0eS9hZGQtZWRpdC1jaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/city/add-edit-city/add-edit-city.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/city/add-edit-city/add-edit-city.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddCityComponent, EditCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityComponent", function() { return AddCityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCityComponent", function() { return EditCityComponent; });
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
/* harmony import */ var _state_city_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/city.actions */ "./src/app/views/pages/city/state/city.actions.ts");
/* harmony import */ var _state_city_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/city.reducer */ "./src/app/views/pages/city/state/city.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");


















var AddCityComponent = /** @class */ (function () {
    function AddCityComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.countryService = countryService;
        this.cityService = cityService;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.countries = [];
        this.timezones = [];
        this.CITY_CONST = this.translate.instant('CITY');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.CITY'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.CITY_CONST.MODULE_NAME);
    }
    AddCityComponent.prototype.ngOnInit = function () {
        this.buildAddEditCityForm();
        // this.getAllCountries();
        this.getAllTimezone();
    };
    AddCityComponent.prototype.buildAddEditCityForm = function () {
        this.addEditCityForm = this._formBuilder.group({
            city_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // city_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            city_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //  city_countryId: ["", [Validators.required]],
            city_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city_timezoneId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    // getAllCountries() {
    //   Helpers.setLoading(true);
    //   this.countryService.getAllCountries().subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data['code'] == 200) {
    //         this.countries = data['data'];
    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //           this.dtr.detectChanges();
    //         }
    //         Helpers.setLoading(false);
    //       } else {
    //         Helpers.setLoading(false);
    //         this.toastr.error(data['message']);
    //       }
    //     }
    //   });
    // }
    AddCityComponent.prototype.getAllTimezone = function () {
        var _this = this;
        // Helpers.setLoading(true);
        this.cityService.getAllTimezone().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.timezones = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        // Helpers.setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddCityComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditCityForm.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.addEditCityForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        obj = {
                            city_name: [{
                                    lang: 'EN',
                                    title: form.city_name_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.city_name_ar
                                // }
                            ],
                            city_code: form.city_code,
                            city_timezoneId: form.city_timezoneId,
                            city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry,
                            city_status: form.city_status
                        };
                        this.stateSubscription = this.store.dispatch(new _state_city_actions__WEBPACK_IMPORTED_MODULE_12__["AddCity"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_city_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/city/list']);
                                }
                                else {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.error(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                }
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        if (!this.addEditCityForm.valid) {
                            this.toastr.error('All Tabs Field is Required');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddCityComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_15__["CountryService"] },
        { type: _city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"] }
    ]; };
    AddCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-city',
            template: __webpack_require__(/*! raw-loader!./add-edit-city.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/add-edit-city/add-edit-city.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-city.component.scss */ "./src/app/views/pages/city/add-edit-city/add-edit-city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_15__["CountryService"],
            _city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"]])
    ], AddCityComponent);
    return AddCityComponent;
}());

var EditCityComponent = /** @class */ (function () {
    function EditCityComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.cityService = cityService;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.countries = [];
        this.timezones = [];
        this.CITY_CONST = this.translate.instant('CITY');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.CITY'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.CITY_CONST.MODULE_NAME);
    }
    EditCityComponent.prototype.ngOnInit = function () {
        this.buildAddEditCityForm();
        // this.getAllCountries();
        this.getCityDetails();
        this.getAllTimezone();
    };
    EditCityComponent.prototype.buildAddEditCityForm = function () {
        this.addEditCityForm = this._formBuilder.group({
            city_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // city_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            city_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            // city_countryId: ["", [Validators.required]],
            city_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city_timezoneId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EditCityComponent.prototype.getCityDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_city_actions__WEBPACK_IMPORTED_MODULE_12__["LoadCity"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_city_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            city_name_en: result.city_name.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            // city_name_ar: result.city_name.filter((obj) => obj.lang == "AR")[0].title,
                            city_code: result.city_code,
                            // city_countryId: result.city_countryId,
                            city_status: result.city_status != null && result.city_status != undefined ? result.city_status : "",
                            city_timezoneId: result.city_timezoneId,
                        };
                        return [4 /*yield*/, this.addEditCityForm.patchValue(fd)];
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
    // getAllCountries() {
    //   Helpers.setLoading(true);
    //   this.countryService.getAllCountries().subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data['code'] == 200) {
    //         this.countries = data['data'];
    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //           this.dtr.detectChanges();
    //         }
    //         Helpers.setLoading(false);
    //       } else {
    //         Helpers.setLoading(false);
    //         this.toastr.error(data['message']);
    //       }
    //     }
    //   });
    // }
    EditCityComponent.prototype.getAllTimezone = function () {
        var _this = this;
        // Helpers.setLoading(true);
        this.cityService.getAllTimezone().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.timezones = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        // Helpers.setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditCityComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditCityForm.valid) {
                    form = this.addEditCityForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            city_name: [{
                                    lang: 'EN',
                                    title: form.city_name_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.city_name_ar
                                // }
                            ],
                            city_code: form.city_code,
                            city_timezoneId: form.city_timezoneId,
                            city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry,
                            city_status: form.city_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_city_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateCity"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_city_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/city/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditCityForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditCityComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_15__["CountryService"] },
        { type: _city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"] }
    ]; };
    EditCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-city',
            template: __webpack_require__(/*! raw-loader!./add-edit-city.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/add-edit-city/add-edit-city.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-city.component.scss */ "./src/app/views/pages/city/add-edit-city/add-edit-city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_15__["CountryService"],
            _city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"]])
    ], EditCityComponent);
    return EditCityComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/city/city-list/city-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/city/city-list/city-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NpdHkvY2l0eS1saXN0L2NpdHktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/city/city-list/city-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/city/city-list/city-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityListComponent", function() { return CityListComponent; });
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
var CityListComponent = /** @class */ (function () {
    function CityListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.city = '';
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.CITY_CONST = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.CITY_CONST = this.translate.instant('CITY');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.CITY'));
        titleService.setTitle(this.APPNAME + " | " + this.CITY_CONST.MODULE_NAME);
    }
    CityListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CITY.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CITY.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CITY.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CITY.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    CityListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    CityListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    CityListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-city-list', scripts).then(function () {
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
                    sProcessing: that.CITY_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listCity,
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
                        title: that.CITY_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.CITY_CONST.LABEL.CITY_NAME, data: 'city_name' },
                    { title: that.CITY_CONST.LABEL.CITY_CODE, data: 'city_code' },
                    { title: that.CITY_CONST.LABEL.STATUS, data: 'city_status' },
                    { title: that.CITY_CONST.LABEL.CREATED_ON, data: 'city_createdOn' },
                    { title: that.CITY_CONST.LABEL.MODIFIED_ON, data: 'city_modifyOn' },
                    { title: that.CITY_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.CITY_CONST.LABEL.SR_NO:
                                break;
                            case that.CITY_CONST.LABEL.CITY_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.CITY_CONST.LABEL.CITY_CODE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            // case that.CITY_CONST.LABEL.CITY_COUNTRY_NAME:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.CITY_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.CITY_CONST.PLACEHOLDERS.STATUS + "</option>\n                 <option value=\"ACTIVE\">" + that.CITY_CONST.LABEL.ACTIVE + "</option>\n                 <option value=\"INACTIVE\">" + that.CITY_CONST.LABEL.INACTIVE + "</option></select>\n                 "));
                                break;
                            // case that.CITY_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.CITY_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.CITY_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.CITY_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.CITY_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                        // render: function (a, e, t, n) {
                        //   return a;
                        // }
                    },
                    {
                        targets: 2,
                        width: '10%',
                        render: function (a, e, t, n) {
                            return a;
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
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.city_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.city_status].title + '</span>';
                        }
                    },
                    {
                        targets: 4,
                        width: '10%',
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
    CityListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/city/edit/' + this.id]);
    };
    CityListComponent.prototype.delete = function (e) {
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
                            component: 'city',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    CityListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'city',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    CityListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    CityListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    CityListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-city-list',
            template: __webpack_require__(/*! raw-loader!./city-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/city-list/city-list.component.html"),
            styles: [__webpack_require__(/*! ./city-list.component.scss */ "./src/app/views/pages/city/city-list/city-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], CityListComponent);
    return CityListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/city/city.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/pages/city/city.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NpdHkvY2l0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/city/city.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/pages/city/city.component.ts ***!
  \****************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var CityComponent = /** @class */ (function () {
    function CityComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].CITY);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].cityManagement);
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-city',
            template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/app/views/pages/city/city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/city/city.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/city/city.module.ts ***!
  \*************************************************/
/*! exports provided: CityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityModule", function() { return CityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_city_add_edit_city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-city/add-edit-city.component */ "./src/app/views/pages/city/add-edit-city/add-edit-city.component.ts");
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city.component */ "./src/app/views/pages/city/city.component.ts");
/* harmony import */ var _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-list/city-list.component */ "./src/app/views/pages/city/city-list/city-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_city_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/city.effects */ "./src/app/views/pages/city/state/city.effects.ts");
/* harmony import */ var _state_city_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/city.reducer */ "./src/app/views/pages/city/state/city.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _city_component__WEBPACK_IMPORTED_MODULE_4__["CityComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_5__["CityListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].CITY.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_city_add_edit_city_component__WEBPACK_IMPORTED_MODULE_3__["AddCityComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].CITY.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_city_add_edit_city_component__WEBPACK_IMPORTED_MODULE_3__["EditCityComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].CITY.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var CityModule = /** @class */ (function () {
    function CityModule() {
    }
    CityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_city_component__WEBPACK_IMPORTED_MODULE_4__["CityComponent"], _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_5__["CityListComponent"], _add_edit_city_add_edit_city_component__WEBPACK_IMPORTED_MODULE_3__["AddCityComponent"], _add_edit_city_add_edit_city_component__WEBPACK_IMPORTED_MODULE_3__["EditCityComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_city_effects__WEBPACK_IMPORTED_MODULE_14__["CityEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("city", _state_city_reducer__WEBPACK_IMPORTED_MODULE_15__["CityReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], CityModule);
    return CityModule;
}());



/***/ }),

/***/ "./src/app/views/pages/city/state/city.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/city/state/city.actions.ts ***!
  \********************************************************/
/*! exports provided: CityActionTypes, LoadCity, LoadCitySuccess, LoadCityFail, UpdateCity, UpdateCitySuccess, UpdateCityFail, DeleteCity, DeleteCitySuccess, DeleteCityFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddCity, AddCitySuccess, AddCityFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityActionTypes", function() { return CityActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCity", function() { return LoadCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCitySuccess", function() { return LoadCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCityFail", function() { return LoadCityFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCity", function() { return UpdateCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCitySuccess", function() { return UpdateCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCityFail", function() { return UpdateCityFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCity", function() { return DeleteCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCitySuccess", function() { return DeleteCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCityFail", function() { return DeleteCityFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCity", function() { return AddCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCitySuccess", function() { return AddCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityFail", function() { return AddCityFail; });
var CityActionTypes;
(function (CityActionTypes) {
    CityActionTypes["UPDATE_STATUS"] = "[CITY] Update Status";
    CityActionTypes["UPDATE_STATUS_SUCCESS"] = "[CITY]  Update Status Success";
    CityActionTypes["UPDATE_STATUS_FAIL"] = "[CITY]  Update Status Fail";
    CityActionTypes["LOAD_CITY"] = "[CITY] Load CITY";
    CityActionTypes["LOAD_CITY_SUCCESS"] = "[CITY] Load CITY Success";
    CityActionTypes["LOAD_CITY_FAIL"] = "[CITY] Load CITY Fail";
    CityActionTypes["UPDATE_CITY"] = "[CITY] Update CITY";
    CityActionTypes["UPDATE_CITY_SUCCESS"] = "[CITY] Update CITY Success";
    CityActionTypes["UPDATE_CITY_FAIL"] = "[CITY] Update CITY Fail";
    CityActionTypes["DELETE_CITY"] = "[CITY] Delete CITY";
    CityActionTypes["DELETE_CITY_SUCCESS"] = "[CITY] Delete CITY Success";
    CityActionTypes["DELETE_CITY_FAIL"] = "[CITY] Delete CITY Fail";
    CityActionTypes["ADD_CITY"] = "[CITY] Upload Data";
    CityActionTypes["ADD_CITY_SUCCESS"] = "[CITY] Upload Data Success";
    CityActionTypes["ADD_CITY_FAIL"] = "[CITY] Upload Data Fail";
})(CityActionTypes || (CityActionTypes = {}));
var LoadCity = /** @class */ (function () {
    function LoadCity(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_CITY;
    }
    LoadCity.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadCity;
}());

var LoadCitySuccess = /** @class */ (function () {
    function LoadCitySuccess(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_CITY_SUCCESS;
    }
    LoadCitySuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadCitySuccess;
}());

var LoadCityFail = /** @class */ (function () {
    function LoadCityFail(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_CITY_FAIL;
    }
    LoadCityFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadCityFail;
}());

var UpdateCity = /** @class */ (function () {
    function UpdateCity(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UPDATE_CITY;
    }
    UpdateCity.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateCity;
}());

var UpdateCitySuccess = /** @class */ (function () {
    function UpdateCitySuccess(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UPDATE_CITY_SUCCESS;
    }
    UpdateCitySuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateCitySuccess;
}());

var UpdateCityFail = /** @class */ (function () {
    function UpdateCityFail(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UPDATE_CITY_FAIL;
    }
    UpdateCityFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateCityFail;
}());

var DeleteCity = /** @class */ (function () {
    function DeleteCity(payload) {
        this.payload = payload;
        this.type = CityActionTypes.DELETE_CITY;
    }
    DeleteCity.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteCity;
}());

var DeleteCitySuccess = /** @class */ (function () {
    function DeleteCitySuccess(payload) {
        this.payload = payload;
        this.type = CityActionTypes.DELETE_CITY_SUCCESS;
    }
    DeleteCitySuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteCitySuccess;
}());

var DeleteCityFail = /** @class */ (function () {
    function DeleteCityFail(payload) {
        this.payload = payload;
        this.type = CityActionTypes.DELETE_CITY_FAIL;
    }
    DeleteCityFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteCityFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddCity = /** @class */ (function () {
    function AddCity(payload) {
        this.payload = payload;
        this.type = CityActionTypes.ADD_CITY;
    }
    AddCity.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddCity;
}());

var AddCitySuccess = /** @class */ (function () {
    function AddCitySuccess(payload) {
        this.payload = payload;
        this.type = CityActionTypes.ADD_CITY_SUCCESS;
    }
    AddCitySuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddCitySuccess;
}());

var AddCityFail = /** @class */ (function () {
    function AddCityFail(payload) {
        this.payload = payload;
        this.type = CityActionTypes.ADD_CITY_FAIL;
    }
    AddCityFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddCityFail;
}());



/***/ }),

/***/ "./src/app/views/pages/city/state/city.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/city/state/city.effects.ts ***!
  \********************************************************/
/*! exports provided: CityEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityEffect", function() { return CityEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _city_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city.actions */ "./src/app/views/pages/city/state/city.actions.ts");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../city.service */ "./src/app/views/pages/city/city.service.ts");





// import { StudentManagementService } from "../student-management.service";


var CityEffect = /** @class */ (function () {
    function CityEffect(actions$, cityService) {
        var _this = this;
        this.actions$ = actions$;
        this.cityService = cityService;
        this.deleteCity$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_city_actions__WEBPACK_IMPORTED_MODULE_5__["CityActionTypes"].DELETE_CITY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.cityService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _city_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteCitySuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _city_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteCityFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_city_actions__WEBPACK_IMPORTED_MODULE_5__["CityActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.cityService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _city_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _city_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadCity$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_city_actions__WEBPACK_IMPORTED_MODULE_5__["CityActionTypes"].LOAD_CITY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.cityService.getCityById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _city_actions__WEBPACK_IMPORTED_MODULE_5__["LoadCitySuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _city_actions__WEBPACK_IMPORTED_MODULE_5__["LoadCityFail"](err));
            }));
        }));
        this.updateCity$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_city_actions__WEBPACK_IMPORTED_MODULE_5__["CityActionTypes"].UPDATE_CITY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.cityService.updateCity(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _city_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateCitySuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _city_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateCityFail"](err)); }));
        }));
        this.addCity$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_city_actions__WEBPACK_IMPORTED_MODULE_5__["CityActionTypes"].ADD_CITY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.cityService.addCity(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _city_actions__WEBPACK_IMPORTED_MODULE_5__["AddCitySuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _city_actions__WEBPACK_IMPORTED_MODULE_5__["AddCityFail"](err));
            }));
        }));
    }
    CityEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CityEffect.prototype, "deleteCity$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CityEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CityEffect.prototype, "loadCity$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CityEffect.prototype, "updateCity$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CityEffect.prototype, "addCity$", void 0);
    CityEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"]])
    ], CityEffect);
    return CityEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/city/state/city.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/city/state/city.reducer.ts ***!
  \********************************************************/
/*! exports provided: initialState, CityReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityReducer", function() { return CityReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _city_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.actions */ "./src/app/views/pages/city/state/city.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function CityReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for City load-----------------------------
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].LOAD_CITY_SUCCESS: {
            return action.payload;
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].LOAD_CITY_FAIL: {
            return action.payload.error;
        }
        // for City delete-----------------------------
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].DELETE_CITY_SUCCESS: {
            return action.payload;
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].DELETE_CITY_FAIL: {
            return action.payload.error;
        }
        // for City update-----------------------------
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].UPDATE_CITY_SUCCESS: {
            return action.payload;
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].UPDATE_CITY_FAIL: {
            return action.payload.error;
        }
        // for City upadat status-----------------------------
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for City add-----------------------------
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].ADD_CITY_SUCCESS: {
            return action.payload;
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__["CityActionTypes"].ADD_CITY_FAIL: {
            return action.payload.error;
        }
    }
}
var getCityState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("city");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCityState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-city-city-module.js.map