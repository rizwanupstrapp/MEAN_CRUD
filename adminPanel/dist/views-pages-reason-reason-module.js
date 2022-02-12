(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-reason-reason-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'REASON.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'REASON.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/reason/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditReasonForm\" [formGroup]=\"addEditReasonForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- reason type & reason name -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_TYPE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- reason_type -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"reason_type\"\n                                (change)=\"selectInput($event)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_type.errors }\">\n                                <option value=\"\">\n                                    {{'REASON.LABEL.SELECT_REASONTYPE' | translate }}</option>\n                                <option value=\"{{'REASON.PLACEHOLDERS.REFUND' | translate}}\">\n                                    {{'REASON.LABEL.REFUND' | translate }}</option>\n                                <option value=\"{{'REASON.PLACEHOLDERS.CANCELLATION' | translate}}\">\n                                    {{'REASON.LABEL.CANCELLATION' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_type.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_type.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\" *ngIf=\"!isNameSelected\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- reason_name -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'REASON.PLACEHOLDERS.REASON_NAME' | translate}}\" type=\"text\"\n                                formControlName=\"reason_name\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_name.errors }\">\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_name.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_name.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditReasonForm.controls.reason_name.errors?.minlength && !addEditReasonForm.controls.reason_name.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'REASON.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditReasonForm.controls.reason_name.errors?.maxlength && !addEditReasonForm.controls.reason_name.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'REASON.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_name.errors?.pattern\">\n                                    {{'REASON.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <!-- reason_role & reason_feePayby -->\n                <div class=\"form-group  row\" *ngIf=\"!forRefundHide\">\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_ROLE' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"roles\" formControlName=\"reason_role\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_role.errors }\">\n                                <option value=\"\"> {{'REASON.LABEL.SELECT_ROLE' | translate }}</option>\n                                <option value=\"{{role._id}}\" *ngFor=\"let role of roleLists\">\n                                    {{role.role_name}} </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_role.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_role.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_FEEPAYBY' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"roles\" formControlName=\"reason_feePayBy\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_feePayBy.errors }\">\n                                <option value=\"\"> {{'REASON.LABEL.SELECT_ROLE' | translate }}</option>\n                                <option value=\"{{role._id}}\" *ngFor=\"let role of roleLists\">\n                                    {{role.role_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_feePayBy.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_feePayBy.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- reason fee & reason Time -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\" *ngIf=\"!forRefundHide\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_FEE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- reason_fee -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'REASON.PLACEHOLDERS.REASON_FEE' | translate}}\" type=\"number\"\n                                formControlName=\"reason_fee\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_fee.errors }\">\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_fee.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_fee.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditReasonForm.controls.reason_fee.errors?.minlength && !addEditReasonForm.controls.reason_fee.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'REASON.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditReasonForm.controls.reason_fee.errors?.maxlength && !addEditReasonForm.controls.reason_fee.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'REASON.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_fee.errors?.pattern\">\n                                    {{'REASON.VALIDATION.INVALID_REASON_FEE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\" *ngIf=\"!forRefundHide\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_TIME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- reason_time -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"reason_time\"\n                                type=\"time\" atp-time-picker value=\"8:55\" onlyHour=\"true\" onlyAM='true'\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_time.errors }\">\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_time.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_time.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- reason_type & status -->\n                <div class=\"form-group row\">\n\n                    <div class=\"col-lg-6\" *ngIf=\"!isNameSelected\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.REASON_TYPE_CODE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- REASON_TYPECODE -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'REASON.PLACEHOLDERS.REASON_TYPECODE' | translate}}\" type=\"text\"\n                                formControlName=\"reason_typeCode\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_typeCode.errors }\">\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_typeCode.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_typeCode.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditReasonForm.controls.reason_typeCode.errors?.minlength && !addEditReasonForm.controls.reason_typeCode.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'REASON.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditReasonForm.controls.reason_typeCode.errors?.maxlength && !addEditReasonForm.controls.reason_typeCode.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'REASON.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_typeCode.errors?.pattern\">\n                                    {{'REASON.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- reason_status -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'REASON.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"reason_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditReasonForm.controls.reason_status.errors }\">\n                                <option value=\"{{'BRAND.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'REASON.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'BRAND.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'REASON.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditReasonForm.controls.reason_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditReasonForm.controls.reason_status.errors?.required\">\n                                    {{'REASON.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/reason/list\"\n                                class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" \n                                class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/reason-list/reason-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/reason/reason-list/reason-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'REASON.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/reason/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl reason_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/reason.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/reason/reason.component.html ***!
  \************************************************************************************/
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

/***/ "./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcmVhc29uL2FkZC1lZGl0LXJlYXNvbi9hZGQtZWRpdC1yZWFzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JlYXNvbi9hZGQtZWRpdC1yZWFzb24vYWRkLWVkaXQtcmVhc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddReasonComponent, EditReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReasonComponent", function() { return AddReasonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReasonComponent", function() { return EditReasonComponent; });
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
/* harmony import */ var _state_reason_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/reason.actions */ "./src/app/views/pages/reason/state/reason.actions.ts");
/* harmony import */ var _state_reason_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/reason.reducer */ "./src/app/views/pages/reason/state/reason.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");

















var AddReasonComponent = /** @class */ (function () {
    function AddReasonComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, rolesService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.rolesService = rolesService;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.roleLists = [];
        this.isNameSelected = false;
        this.REASON_CONST = this.translate.instant('REASON');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.REASON'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.REASON_CONST.MODULE_NAME);
    }
    AddReasonComponent.prototype.selectInput = function (event) {
        var selected = event.target.value;
        if (selected == "REFUND") {
            this.forRefundHide = true; // hide
        }
        else {
            this.forRefundHide = false; // show
        }
    };
    AddReasonComponent.prototype.ngOnInit = function () {
        this.buildAddEditReasonForm();
        this.getAllRolList();
        this.setRefundValidators();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    AddReasonComponent.prototype.buildAddEditReasonForm = function () {
        this.addEditReasonForm = this._formBuilder.group({
            reason_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            reason_role: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_fee: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].numericOnly)]],
            reason_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_feePayBy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_typeCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_status: ["ACTIVE", []]
        });
    };
    // conditional base validation
    AddReasonComponent.prototype.setRefundValidators = function () {
        var roleControl = this.addEditReasonForm.get('reason_role');
        var feeControl = this.addEditReasonForm.get('reason_fee');
        var timeControl = this.addEditReasonForm.get('reason_time');
        var typeControl = this.addEditReasonForm.get('reason_type');
        var feePayByControl = this.addEditReasonForm.get('reason_feePayBy');
        this.addEditReasonForm.get('reason_type').valueChanges
            .subscribe(function (reasonCategory) {
            if (reasonCategory === 'REFUND') {
                roleControl.setValidators(null);
                feeControl.setValidators(null);
                timeControl.setValidators(null);
                typeControl.setValidators(null);
                feePayByControl.setValidators(null);
            }
            roleControl.updateValueAndValidity();
            feeControl.updateValueAndValidity();
            timeControl.updateValueAndValidity();
            typeControl.updateValueAndValidity();
            feePayByControl.updateValueAndValidity();
        });
    };
    AddReasonComponent.prototype.getAllRolList = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.rolesService.getRolesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.roleLists = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
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
    AddReasonComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                event.preventDefault();
                this.submitted = true;
                if (this.addEditReasonForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditReasonForm.value;
                    obj = {
                        reason_name: [{
                                lang: 'EN',
                                title: form.reason_name
                            }],
                        reason_role: form.reason_role,
                        reason_fee: form.reason_fee.toString(),
                        reason_time: form.reason_time,
                        reason_type: form.reason_type,
                        reason_feePayBy: form.reason_feePayBy,
                        reason_typeCode: form.reason_typeCode,
                        reason_status: form.reason_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_reason_actions__WEBPACK_IMPORTED_MODULE_12__["AddReason"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_reason_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/reason/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditReasonForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddReasonComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"] }
    ]; };
    AddReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-reason',
            template: __webpack_require__(/*! raw-loader!./add-edit-reason.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-reason.component.scss */ "./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"]])
    ], AddReasonComponent);
    return AddReasonComponent;
}());

var EditReasonComponent = /** @class */ (function () {
    function EditReasonComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, store, titleService, translate, dtr, rolesService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.dtr = dtr;
        this.rolesService = rolesService;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.isNameSelected = false;
        this.roleLists = [];
        this.REASON_CONST = this.translate.instant('REASON');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.REASON'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.REASON_CONST.MODULE_NAME);
    }
    EditReasonComponent.prototype.selectInput = function (event) {
        var selected = event.target.value;
        if (selected == "REFUND") {
            this.forRefundHide = true; // hide
        }
        else {
            this.forRefundHide = false; // show
        }
    };
    EditReasonComponent.prototype.ngOnInit = function () {
        this.buildAddEditReasonForm();
        this.getReasonDetails();
        this.getAllRolList();
        this.setRefundValidators();
    };
    EditReasonComponent.prototype.buildAddEditReasonForm = function () {
        this.addEditReasonForm = this._formBuilder.group({
            reason_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            reason_role: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_fee: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].numericOnly)]],
            reason_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_feePayBy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_typeCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            reason_status: ["ACTIVE", []]
        });
    };
    // conditional base validation
    EditReasonComponent.prototype.setRefundValidators = function () {
        var roleControl = this.addEditReasonForm.get('reason_role');
        var feeControl = this.addEditReasonForm.get('reason_fee');
        var timeControl = this.addEditReasonForm.get('reason_time');
        var typeControl = this.addEditReasonForm.get('reason_type');
        var feePayByControl = this.addEditReasonForm.get('reason_feePayBy');
        this.addEditReasonForm.get('reason_type').valueChanges
            .subscribe(function (reasonCategory) {
            if (reasonCategory === 'REFUND') {
                roleControl.setValidators(null);
                feeControl.setValidators(null);
                timeControl.setValidators(null);
                typeControl.setValidators(null);
                feePayByControl.setValidators(null);
            }
            roleControl.updateValueAndValidity();
            feeControl.updateValueAndValidity();
            timeControl.updateValueAndValidity();
            typeControl.updateValueAndValidity();
            feePayByControl.updateValueAndValidity();
        });
    };
    EditReasonComponent.prototype.getAllRolList = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.rolesService.getRolesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.roleLists = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
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
    EditReasonComponent.prototype.getReasonDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_reason_actions__WEBPACK_IMPORTED_MODULE_12__["LoadReason"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_reason_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            reason_name: result.reason_name.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            reason_role: result.reason_role != null && result.reason_role != undefined ? result.reason_role : "",
                            reason_fee: result.reason_fee.toString(),
                            reason_time: result.reason_time,
                            reason_type: result.reason_type != null && result.reason_type != undefined ? result.reason_type : "",
                            reason_feePayBy: result.reason_feePayBy != null && result.reason_feePayBy != undefined ? result.reason_feePayBy : "",
                            reason_typeCode: result.reason_typeCode,
                            reason_status: result.reason_status != null && result.reason_status != undefined ? result.reason_status : "",
                        };
                        // for hidindg input field when data fetched
                        if (result.reason_type == "REFUND") {
                            this.forRefundHide = true;
                        }
                        return [4 /*yield*/, this.addEditReasonForm.patchValue(fd)];
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
    EditReasonComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditReasonForm.valid) {
                    form = this.addEditReasonForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            reason_name: [{
                                    lang: 'EN',
                                    title: form.reason_name
                                }],
                            reason_role: form.reason_role,
                            reason_fee: form.reason_fee,
                            reason_time: form.reason_time,
                            reason_type: form.reason_type,
                            reason_feePayBy: form.reason_feePayBy,
                            reason_typeCode: form.reason_typeCode,
                            reason_status: form.reason_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_reason_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateReason"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_reason_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/reason/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditReasonForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditReasonComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"] }
    ]; };
    EditReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-reason',
            template: __webpack_require__(/*! raw-loader!./add-edit-reason.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-reason.component.scss */ "./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"]])
    ], EditReasonComponent);
    return EditReasonComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/reason/reason-list/reason-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/reason/reason-list/reason-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JlYXNvbi9yZWFzb24tbGlzdC9yZWFzb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/reason/reason-list/reason-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/reason/reason-list/reason-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReasonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonListComponent", function() { return ReasonListComponent; });
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
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");













function _window() {
    // return the global native browser window object
    return window;
}
var ReasonListComponent = /** @class */ (function () {
    function ReasonListComponent(subheaderService, localStorageService, _script, router, titleService, translate, toastr, roleService) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.roleService = roleService;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.REASON_CONST = [];
        this.searchObj = { field: 'reason_name', reason_status: '', search: '' };
        this.roles = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.REASON_CONST = this.translate.instant('REASON');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.REASON'));
        titleService.setTitle(this.APPNAME + " | " + this.REASON_CONST.MODULE_NAME);
    }
    ReasonListComponent.prototype.ngOnInit = function () {
        this.getRoleDetails();
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    ReasonListComponent.prototype.getRoleDetails = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.roleService.getRolesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    console.log(result);
                    this.roles = result;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    this.toastr.error(data['message']);
                }
                return [2 /*return*/];
            });
        }); });
    };
    ReasonListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].REASON.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].REASON.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].REASON.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].REASON.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    ReasonListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    ReasonListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-reason-list', scripts).then(function () {
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
                    sProcessing: that.REASON_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listReason,
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.REASON_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.REASON_CONST.LABEL.REASON_TYPE, data: 'reason_type' },
                    { title: that.REASON_CONST.LABEL.REASON_ROLE, data: 'reason_role' },
                    { title: that.REASON_CONST.LABEL.REASON_TYPE_CODE, data: 'reason_typeCode' },
                    { title: that.REASON_CONST.LABEL.REASON_NAME, data: 'reason_name' },
                    { title: that.REASON_CONST.LABEL.STATUS, data: 'reason_status' },
                    { title: that.REASON_CONST.LABEL.CREATED_ON, data: 'reason_createdOn' },
                    { title: that.REASON_CONST.LABEL.MODIFIED_ON, data: 'reason_modifyOn' },
                    { title: that.REASON_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.REASON_CONST.LABEL.SR_NO:
                                break;
                            case that.REASON_CONST.LABEL.REASON_TYPE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.REASON_CONST.LABEL.REASON_ROLE:
                                var option_1 = '<option value="">' + that.REASON_CONST.LABEL.SELECT_ROLE + '</option>';
                                if (that.roles.length) {
                                    that.roles.map(function (x) {
                                        var tag = '<option value="' + x.role_name + '">' + x.role_name + '</option>';
                                        option_1 = option_1 + tag;
                                    });
                                }
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    '">' + option_1 + '</select>');
                                break;
                            case that.REASON_CONST.LABEL.REASON_TYPE_CODE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.REASON_CONST.LABEL.REASON_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.REASON_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.REASON_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.REASON_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.REASON_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            case that.REASON_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.REASON_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.REASON_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.REASON_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.REASON_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                        width: '10%',
                        render: function (a, e, t, n) {
                            var id = (t._id);
                            return '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' + id + '" onclick="window.my.notimgmt.edit(this)" title="Edit details">\
                  <i class="la la-edit"></i> </a>\ <a href="javascript:;" id="btnDelete" data-id="' + id + '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
                  <i class="la la-trash"></i>\
               </a>';
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
                            return a;
                        }
                    },
                    {
                        targets: 2,
                        width: '40%',
                        render: function (a, e, t, n) {
                            var c = '';
                            if (a != undefined && a != '') {
                                if (a == '1') {
                                    c = 'SUPERADMIN';
                                }
                                else if (a == '2') {
                                    c = 'ADMIN';
                                }
                                else if (a == '3') {
                                    c = 'SALES';
                                }
                                else if (a == '4') {
                                    c = 'EDITOR';
                                }
                            }
                            return c;
                        }
                    },
                    {
                        targets: 3,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    },
                    {
                        targets: 4,
                        width: '20%',
                        render: function (a, e, t, n) {
                            var c = a.filter(function (obj) {
                                return (obj.lang == 'EN');
                            });
                            return c[0].title;
                        }
                    },
                    {
                        targets: 5,
                        width: '50%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.reason_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.reason_status].title + '</span>';
                        }
                    },
                    {
                        targets: 6,
                        width: '10%'
                    },
                    {
                        targets: 7,
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
    ReasonListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/reason/edit/' + this.id]);
    };
    ReasonListComponent.prototype.delete = function (e) {
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
                            component: 'reason',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReasonListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'reason',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    ReasonListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    ReasonListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_11__["RolesService"] }
    ]; };
    ReasonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-reason-list',
            template: __webpack_require__(/*! raw-loader!./reason-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/reason-list/reason-list.component.html"),
            styles: [__webpack_require__(/*! ./reason-list.component.scss */ "./src/app/views/pages/reason/reason-list/reason-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_11__["RolesService"]])
    ], ReasonListComponent);
    return ReasonListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/reason/reason.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/reason/reason.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JlYXNvbi9yZWFzb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/reason/reason.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/reason/reason.component.ts ***!
  \********************************************************/
/*! exports provided: ReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonComponent", function() { return ReasonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var ReasonComponent = /** @class */ (function () {
    function ReasonComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].REASON);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].reasonManagement);
    }
    ReasonComponent.prototype.ngOnInit = function () {
    };
    ReasonComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    ReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-reason',
            template: __webpack_require__(/*! raw-loader!./reason.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/reason/reason.component.html"),
            styles: [__webpack_require__(/*! ./reason.component.scss */ "./src/app/views/pages/reason/reason.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ReasonComponent);
    return ReasonComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/reason/reason.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/pages/reason/reason.module.ts ***!
  \*****************************************************/
/*! exports provided: ReasonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonModule", function() { return ReasonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_reason_add_edit_reason_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-reason/add-edit-reason.component */ "./src/app/views/pages/reason/add-edit-reason/add-edit-reason.component.ts");
/* harmony import */ var _reason_list_reason_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reason-list/reason-list.component */ "./src/app/views/pages/reason/reason-list/reason-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_reason_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/reason.effects */ "./src/app/views/pages/reason/state/reason.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_reason_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/reason.reducer */ "./src/app/views/pages/reason/state/reason.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _reason_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reason.component */ "./src/app/views/pages/reason/reason.component.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _reason_component__WEBPACK_IMPORTED_MODULE_16__["ReasonComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _reason_list_reason_list_component__WEBPACK_IMPORTED_MODULE_4__["ReasonListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].REASON.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_reason_add_edit_reason_component__WEBPACK_IMPORTED_MODULE_3__["AddReasonComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].REASON.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_reason_add_edit_reason_component__WEBPACK_IMPORTED_MODULE_3__["EditReasonComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].REASON.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var ReasonModule = /** @class */ (function () {
    function ReasonModule() {
    }
    ReasonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reason_component__WEBPACK_IMPORTED_MODULE_16__["ReasonComponent"], _reason_list_reason_list_component__WEBPACK_IMPORTED_MODULE_4__["ReasonListComponent"], _add_edit_reason_add_edit_reason_component__WEBPACK_IMPORTED_MODULE_3__["AddReasonComponent"], _add_edit_reason_add_edit_reason_component__WEBPACK_IMPORTED_MODULE_3__["EditReasonComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_reason_effects__WEBPACK_IMPORTED_MODULE_11__["ReasonEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("reason", _state_reason_reducer__WEBPACK_IMPORTED_MODULE_14__["ReasonReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], ReasonModule);
    return ReasonModule;
}());



/***/ }),

/***/ "./src/app/views/pages/reason/state/reason.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/reason/state/reason.actions.ts ***!
  \************************************************************/
/*! exports provided: ReasonActionTypes, LoadReason, LoadReasonSuccess, LoadReasonFail, UpdateReason, UpdateReasonSuccess, UpdateReasonFail, DeleteReason, DeleteReasonSuccess, DeleteReasonFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddReason, AddReasonSuccess, AddReasonFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonActionTypes", function() { return ReasonActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadReason", function() { return LoadReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadReasonSuccess", function() { return LoadReasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadReasonFail", function() { return LoadReasonFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReason", function() { return UpdateReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReasonSuccess", function() { return UpdateReasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReasonFail", function() { return UpdateReasonFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReason", function() { return DeleteReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReasonSuccess", function() { return DeleteReasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReasonFail", function() { return DeleteReasonFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReason", function() { return AddReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReasonSuccess", function() { return AddReasonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReasonFail", function() { return AddReasonFail; });
var ReasonActionTypes;
(function (ReasonActionTypes) {
    ReasonActionTypes["UPDATE_STATUS"] = "[REASON] Update Status";
    ReasonActionTypes["UPDATE_STATUS_SUCCESS"] = "[REASON]  Update Status Success";
    ReasonActionTypes["UPDATE_STATUS_FAIL"] = "[REASON]  Update Status Fail";
    ReasonActionTypes["LOAD_REASON"] = "[REASON] Load REASON";
    ReasonActionTypes["LOAD_REASON_SUCCESS"] = "[REASON] Load REASON Success";
    ReasonActionTypes["LOAD_REASON_FAIL"] = "[REASON] Load REASON Fail";
    ReasonActionTypes["UPDATE_REASON"] = "[REASON] Update REASON";
    ReasonActionTypes["UPDATE_REASON_SUCCESS"] = "[REASON] Update REASON Success";
    ReasonActionTypes["UPDATE_REASON_FAIL"] = "[REASON] Update REASON Fail";
    ReasonActionTypes["DELETE_REASON"] = "[REASON] Delete REASON";
    ReasonActionTypes["DELETE_REASON_SUCCESS"] = "[REASON] Delete REASON Success";
    ReasonActionTypes["DELETE_REASON_FAIL"] = "[REASON] Delete REASON Fail";
    ReasonActionTypes["ADD_REASON"] = "[REASON] Upload Data";
    ReasonActionTypes["ADD_REASON_SUCCESS"] = "[REASON] Upload Data Success";
    ReasonActionTypes["ADD_REASON_FAIL"] = "[REASON] Upload Data Fail";
    ReasonActionTypes["UPLOAD_DATA"] = "[REASON] Upload Data";
    ReasonActionTypes["UPLOAD_DATA_SUCCESS"] = "[REASON] Upload Data Success";
    ReasonActionTypes["UPLOAD_DATA_FAIL"] = "[REASON] Upload Data Fail";
})(ReasonActionTypes || (ReasonActionTypes = {}));
var LoadReason = /** @class */ (function () {
    function LoadReason(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.LOAD_REASON;
    }
    LoadReason.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadReason;
}());

var LoadReasonSuccess = /** @class */ (function () {
    function LoadReasonSuccess(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.LOAD_REASON_SUCCESS;
    }
    LoadReasonSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadReasonSuccess;
}());

var LoadReasonFail = /** @class */ (function () {
    function LoadReasonFail(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.LOAD_REASON_FAIL;
    }
    LoadReasonFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadReasonFail;
}());

var UpdateReason = /** @class */ (function () {
    function UpdateReason(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.UPDATE_REASON;
    }
    UpdateReason.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateReason;
}());

var UpdateReasonSuccess = /** @class */ (function () {
    function UpdateReasonSuccess(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.UPDATE_REASON_SUCCESS;
    }
    UpdateReasonSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateReasonSuccess;
}());

var UpdateReasonFail = /** @class */ (function () {
    function UpdateReasonFail(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.UPDATE_REASON_FAIL;
    }
    UpdateReasonFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateReasonFail;
}());

var DeleteReason = /** @class */ (function () {
    function DeleteReason(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.DELETE_REASON;
    }
    DeleteReason.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteReason;
}());

var DeleteReasonSuccess = /** @class */ (function () {
    function DeleteReasonSuccess(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.DELETE_REASON_SUCCESS;
    }
    DeleteReasonSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteReasonSuccess;
}());

var DeleteReasonFail = /** @class */ (function () {
    function DeleteReasonFail(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.DELETE_REASON_FAIL;
    }
    DeleteReasonFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteReasonFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddReason = /** @class */ (function () {
    function AddReason(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.ADD_REASON;
    }
    AddReason.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddReason;
}());

var AddReasonSuccess = /** @class */ (function () {
    function AddReasonSuccess(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.ADD_REASON_SUCCESS;
    }
    AddReasonSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddReasonSuccess;
}());

var AddReasonFail = /** @class */ (function () {
    function AddReasonFail(payload) {
        this.payload = payload;
        this.type = ReasonActionTypes.ADD_REASON_FAIL;
    }
    AddReasonFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddReasonFail;
}());



/***/ }),

/***/ "./src/app/views/pages/reason/state/reason.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/reason/state/reason.effects.ts ***!
  \************************************************************/
/*! exports provided: ReasonEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonEffect", function() { return ReasonEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _reason_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reason.actions */ "./src/app/views/pages/reason/state/reason.actions.ts");
/* harmony import */ var _reason_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reason.service */ "./src/app/views/pages/reason/reason.service.ts");







var ReasonEffect = /** @class */ (function () {
    function ReasonEffect(actions$, ReasonService) {
        var _this = this;
        this.actions$ = actions$;
        this.ReasonService = ReasonService;
        this.deleteReason$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reason_actions__WEBPACK_IMPORTED_MODULE_5__["ReasonActionTypes"].DELETE_REASON), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.ReasonService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteReasonSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteReasonFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reason_actions__WEBPACK_IMPORTED_MODULE_5__["ReasonActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ReasonService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateCustomer) {
                return new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](updateCustomer);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadReason$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reason_actions__WEBPACK_IMPORTED_MODULE_5__["ReasonActionTypes"].LOAD_REASON), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.ReasonService.getReasonById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["LoadReasonSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["LoadReasonFail"](err));
            }));
        }));
        this.updateReason$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reason_actions__WEBPACK_IMPORTED_MODULE_5__["ReasonActionTypes"].UPDATE_REASON), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ReasonService.updateReason(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateCustomer) {
                return new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateReasonSuccess"](updateCustomer);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateReasonFail"](err)); }));
        }));
        this.addReason$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reason_actions__WEBPACK_IMPORTED_MODULE_5__["ReasonActionTypes"].ADD_REASON), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ReasonService.addReason(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newAdmin) {
                return new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["AddReasonSuccess"](newAdmin);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _reason_actions__WEBPACK_IMPORTED_MODULE_5__["AddReasonFail"](err));
            }));
        }));
    }
    ReasonEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _reason_service__WEBPACK_IMPORTED_MODULE_6__["ReasonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReasonEffect.prototype, "deleteReason$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReasonEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReasonEffect.prototype, "loadReason$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReasonEffect.prototype, "updateReason$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReasonEffect.prototype, "addReason$", void 0);
    ReasonEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _reason_service__WEBPACK_IMPORTED_MODULE_6__["ReasonService"]])
    ], ReasonEffect);
    return ReasonEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/reason/state/reason.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/reason/state/reason.reducer.ts ***!
  \************************************************************/
/*! exports provided: initialState, ReasonReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonReducer", function() { return ReasonReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _reason_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reason.actions */ "./src/app/views/pages/reason/state/reason.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function ReasonReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Reason load-----------------------------
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].LOAD_REASON_SUCCESS: {
            return action.payload;
        }
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].LOAD_REASON_FAIL: {
            return action.payload.error;
        }
        // for Reason  delete-----------------------------
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].DELETE_REASON_SUCCESS: {
            return action.payload;
        }
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].DELETE_REASON_FAIL: {
            return action.payload.error;
        }
        // for Reason  update-----------------------------
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].UPDATE_REASON_SUCCESS: {
            return action.payload;
        }
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].UPDATE_REASON_FAIL: {
            return action.payload.error;
        }
        // for Reason  upadat status-----------------------------
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Reason  add-----------------------------
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].ADD_REASON_SUCCESS: {
            return action.payload;
        }
        case _reason_actions__WEBPACK_IMPORTED_MODULE_0__["ReasonActionTypes"].ADD_REASON_FAIL: {
            return action.payload.error;
        }
    }
}
var getReasonState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("reason");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getReasonState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-reason-reason-module.js.map