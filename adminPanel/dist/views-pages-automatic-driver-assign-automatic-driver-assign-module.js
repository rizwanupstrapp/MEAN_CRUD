(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-automatic-driver-assign-automatic-driver-assign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'AUTOMATIC_DRIVER_ASSIGN.ADD' | translate}}</h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'AUTOMATIC_DRIVER_ASSIGN.EDIT' | translate}}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/automatic-driver-assign/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet_body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditDriverAssignForm\" [formGroup]=\"addEditDriverAssignForm\">\n            <div class=\"kt-portlet__body\">\n\n                <!-- country -->\n                <div class=\"form-group row\">\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.COUNTRY' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\"\n                                (change)=\"changeCountry($event.target.value)\"\n                                formControlName=\"automaticDriverAssign_countryId\"\n                                [ngClass]=\"{'is-invalid': submitted && addEditDriverAssignForm.controls.automaticDriverAssign_countryId.errors}\">\n                                <option value=\"\">{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted&&addEditDriverAssignForm.controls.automaticDriverAssign_countryId.errors\"\n                                class=\"form-control-feedback\" style=\"color:red\"> \n                                <p *ngIf=\"submitted&&addEditDriverAssignForm.controls.automaticDriverAssign_countryId.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <!-- City -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.CITY' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select *ngIf=\"isAdd\" class=\"form-control m-input\" id=\"city\" (change)=\"changeCity($event.target.value,1)\" formControlName=\"automaticDriverAssign_cityId\" [ngClass]=\"{'is-invalid': submitted && addEditDriverAssignForm.controls.automaticDriverAssign_cityId.errors}\">\n                                <option value=\"\">{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">\n                                    {{city.city_name}}\n                                </option>\n                            </select>\n                            <select *ngIf=\"!isAdd\" class=\"form-control m-input\" id=\"city\" (change)=\"changeCity($event.target.value,1)\" formControlName=\"automaticDriverAssign_cityId\" [ngClass]=\"{'is-invalid': submitted && addEditDriverAssignForm.controls.automaticDriverAssign_cityId.errors}\"\n                                disabled>\n                                <option value=\"\">{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">\n                                    {{city.city_name}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted&&addEditDriverAssignForm.controls.automaticDriverAssign_cityId.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted&&addEditDriverAssignForm.controls.automaticDriverAssign_cityId.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n\n                    <!-- franchise -->\n                    <!-- <div class=\"form-group row\"> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.FRANCHISE' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select *ngIf=\"isAdd\" class=\"form-control m-input\" id=\"franchise\" formControlName=\"automaticDriverAssign_franchiseId\" [ngClass]=\"{'is-invalid': submitted && addEditDriverAssignForm.controls.automaticDriverAssign_franchiseId.errors}\">\n                                <option value=\"\">{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.FRANCHISE' | translate}}\n                                </option>\n                                <option value=\"{{franchise._id}}\" *ngFor=\"let franchise of operators\">\n                                    {{franchise.operatorName}}\n                                </option>\n                            </select>\n                            <select *ngIf=\"!isAdd\" class=\"form-control m-input\" id=\"franchise\" formControlName=\"automaticDriverAssign_franchiseId\" [ngClass]=\"{'is-invalid': submitted && addEditDriverAssignForm.controls.automaticDriverAssign_franchiseId.errors}\" disabled>\n                                <option value=\"\">{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.FRANCHISE' | translate}}\n                                </option>\n                                <option value=\"{{franchise._id}}\" *ngFor=\"let franchise of operators\">\n                                    {{franchise.operatorName}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditDriverAssignForm.controls.automaticDriverAssign_franchiseId.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted&&addEditDriverAssignForm.controls.automaticDriverAssign_franchiseId.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <!-- Time To Reach Pickup -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.TIME_TO_REACH_PICKUP' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.TIME_TO_REACH_PICKUP' | translate}}\" type=\"text\" formControlName=\"automaticDriverAssign_timeToReachPickup\" [ngClass]=\"{'is-invalid':submitted && addEditDriverAssignForm.controls.automaticDriverAssign_timeToReachPickup.errors}\">\n                            <div *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_timeToReachPickup.errors\" class=\"for-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_timeToReachPickup.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_timeToReachPickup.errors?.pattern\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.INVALID_VALUE' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n\n                    <!-- Distance From Pickup -->\n                    <!-- <div class=\"form-group row\"> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.DISTANCE_FORM_PICKUP' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.DISTANCE_FORM_PICKUP' | translate}}\" type=\"text\" formControlName=\"automaticDriverAssign_distanceFromPickup\" [ngClass]=\"{'is-invalid':submitted && addEditDriverAssignForm.controls.automaticDriverAssign_distanceFromPickup.errors}\">\n                            <div *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_distanceFromPickup.errors\" class=\"for-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_distanceFromPickup.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_distanceFromPickup.errors?.pattern\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.INVALID_VALUE' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <!-- Driver Idel Time -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.DRIVER_IDEL_TIME' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.DRIVER_IDEL_TIME' | translate}}\" type=\"text\" formControlName=\"automaticDriverAssign_driverIdleTime\" [ngClass]=\"{'is-invalid':submitted && addEditDriverAssignForm.controls.automaticDriverAssign_driverIdleTime.errors}\">\n                            <div *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_driverIdleTime.errors\" class=\"for-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_driverIdleTime.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_driverIdleTime.errors?.pattern\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.INVALID_VALUE' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- No driver available time-->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.NO_DRIVER_AVAILABLE_TIME' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.NO_DRIVER_AVAILABLE_TIME' | translate}}\" type=\"text\" formControlName=\"automaticDriverAssign_no_driver_available_time\" [ngClass]=\"{'is-invalid':submitted && addEditDriverAssignForm.controls.automaticDriverAssign_no_driver_available_time.errors}\">\n                            <div *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_no_driver_available_time.errors\" class=\"for-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_no_driver_available_time.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_no_driver_available_time.errors?.pattern\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.INVALID_VALUE' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <!-- Automatic driver cancellation time-->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.AUTO_CANCELLATION_TIME' | translate}} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'AUTOMATIC_DRIVER_ASSIGN.PLACEHOLDERS.AUTO_CANCELLATION_TIME' | translate}}\" type=\"text\" formControlName=\"automaticDriverAssign_auto_cancellation_time\" [ngClass]=\"{'is-invalid':submitted && addEditDriverAssignForm.controls.automaticDriverAssign_auto_cancellation_time.errors}\">\n                            <div *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_auto_cancellation_time.errors\" class=\"for-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_auto_cancellation_time.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted &&  addEditDriverAssignForm.controls.automaticDriverAssign_auto_cancellation_time.errors?.pattern\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.INVALID_VALUE' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Automatic Driver Assign Status-->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"automaticDriverAssign_status\" [ngClass]=\"{'isInvalid': submitted && addEditDriverAssignForm.controls.automaticDriverAssign_status.errors}\">\n                                <option value=\"ACTIVE\" selected> {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.ACTIVE' | translate}}\n                                </option>\n                                <option value=\"INACTIVE\"> {{'AUTOMATIC_DRIVER_ASSIGN.LABEL.INACTIVE' | translate}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditDriverAssignForm.controls.automaticDriverAssign_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditDriverAssignForm.controls.automaticDriverAssign_status.errors?.required\">\n                                    {{'AUTOMATIC_DRIVER_ASSIGN.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/automatic-driver-assign/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate}}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-primary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.SUBMIT' | translate}}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'AUTOMATIC_DRIVER_ASSIGN.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/automatic-driver-assign/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n            <table class=\"table table-striped- table-bordered automatic_mangmt_tbl table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n           </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.html ***!
  \**********************************************************************************************************************/
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

/***/ "./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYXV0b21hdGljLWRyaXZlci1hc3NpZ24vYWRkLWVkaXQtYXV0b21hdGljLWRyaXZlci1hc3NpZ24vYWRkLWVkaXQtYXV0b21hdGljLWRyaXZlci1hc3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2F1dG9tYXRpYy1kcml2ZXItYXNzaWduL2FkZC1lZGl0LWF1dG9tYXRpYy1kcml2ZXItYXNzaWduL2FkZC1lZGl0LWF1dG9tYXRpYy1kcml2ZXItYXNzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AddAutomaticDriverAssign, EditAutomaticDriverAssign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAutomaticDriverAssign", function() { return AddAutomaticDriverAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAutomaticDriverAssign", function() { return EditAutomaticDriverAssign; });
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
/* harmony import */ var _state_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/automatic-driver-assign.actions */ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.actions.ts");
/* harmony import */ var _state_automatic_driver_assign_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/automatic-driver-assign.reducer */ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../service-operator/service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");



















var AddAutomaticDriverAssign = /** @class */ (function () {
    function AddAutomaticDriverAssign(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService, ServiceOperatorService) {
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
        this.ServiceOperatorService = ServiceOperatorService;
        this.isAdd = true;
        this.submitted = false;
        this.element = false;
        this.countries = [];
        this.cities = [];
        this.operators = [];
        //variable declared
        this.city_countryId = [];
        this.dropdoenSettingsCountry = {};
        this.dropdownSettingsCity = {};
        this.AUTOMATIC_DRIVER_ASSIGN_CONST = this.translate.instant("AUTOMATIC_DRIVER_ASSIGN");
        //SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.AUTOMATIC_DRIVER_ASSIGN"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.AUTOMATIC_DRIVER_ASSIGN_CONST.MODULE_NAME);
    }
    AddAutomaticDriverAssign.prototype.ngOnInit = function () {
        this.buildAddEditAutomaticDriverAssignForm();
        // this.getAllCountries();
        this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry);
    };
    AddAutomaticDriverAssign.prototype.buildAddEditAutomaticDriverAssignForm = function () {
        this.addEditDriverAssignForm = this._formBuilder.group({
            // automaticDriverAssign_countryId : ["",[Validators.required]],
            automaticDriverAssign_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            automaticDriverAssign_franchiseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            automaticDriverAssign_timeToReachPickup: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_distanceFromPickup: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_driverIdleTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_no_driver_available_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_auto_cancellation_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    // getAllCountries() {
    //   Helpers.setLoading(true);
    //   this.countryService.getAllCountries().subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data["code"] == 200) {
    //         this.countries = data["data"];
    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //           this.dtr.detectChanges();
    //         }
    //         Helpers.setLoading(false);
    //       } else {
    //         Helpers.setLoading(false);
    //         this.toastr.error(data["message"]);
    //       }
    //     }
    //   });
    // }
    AddAutomaticDriverAssign.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService
                                .getCityListAutomaticDriverAssign(countryId)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cities = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddAutomaticDriverAssign.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cityId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
                                        case 1:
                                            _a.operators = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddAutomaticDriverAssign.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditDriverAssignForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditDriverAssignForm.value;
                    obj = {
                        automaticDriverAssign_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry,
                        automaticDriverAssign_cityId: form.automaticDriverAssign_cityId,
                        automaticDriverAssign_franchiseId: form.automaticDriverAssign_franchiseId,
                        automaticDriverAssign_timeToReachPickup: form.automaticDriverAssign_timeToReachPickup,
                        automaticDriverAssign_distanceFromPickup: form.automaticDriverAssign_distanceFromPickup,
                        automaticDriverAssign_driverIdleTime: form.automaticDriverAssign_driverIdleTime,
                        automaticDriverAssign_no_driver_available_time: form.automaticDriverAssign_no_driver_available_time,
                        automaticDriverAssign_auto_cancellation_time: form.automaticDriverAssign_auto_cancellation_time,
                        automaticDriverAssign_status: form.automaticDriverAssign_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_11__["AddAutomaticDriverAssign"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_automatic_driver_assign_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
                        .subscribe(function (data) {
                        if (data && data != undefined) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                            if (data["code"] == 200) {
                                _this.toastr.success(data["message"]);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(["/automatic-driver-assign/list"]);
                            }
                            else {
                                _this.toastr.error(data["message"]);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddAutomaticDriverAssign.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"] }
    ]; };
    AddAutomaticDriverAssign = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-automatic-driver-assign',
            template: __webpack_require__(/*! raw-loader!./add-edit-automatic-driver-assign.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-automatic-driver-assign.component.scss */ "./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"]])
    ], AddAutomaticDriverAssign);
    return AddAutomaticDriverAssign;
}());

// Edit Automatic Driver Assign.
var EditAutomaticDriverAssign = /** @class */ (function () {
    //variable declared
    function EditAutomaticDriverAssign(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService, ServiceOperatorService) {
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
        this.ServiceOperatorService = ServiceOperatorService;
        this.isAdd = false;
        this.submitted = false;
        this.element = false;
        this.AUTOMATIC_DRIVER_ASSIGN_CONST = [];
        this.countries = [];
        this.cities = [];
        this.operators = [];
        this.AUTOMATIC_DRIVER_ASSIGN_CONST = this.translate.instant("AUTOMATIC_DRIVER_ASSIGN");
        //SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.AUTOMATIC_DRIVER_ASSIGN"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.AUTOMATIC_DRIVER_ASSIGN_CONST.MODULE_NAME);
    }
    EditAutomaticDriverAssign.prototype.ngOnInit = function () {
        this.buildAddEditAutomaticDriverAssignForm();
        // this.getAllCountries();
        // this.changeCountry(environment.webDefaultCountry);
        this.getAutoamticDriverAssignDetails();
    };
    EditAutomaticDriverAssign.prototype.buildAddEditAutomaticDriverAssignForm = function () {
        this.addEditDriverAssignForm = this._formBuilder.group({
            // automaticDriverAssign_countryId: ["", [Validators.required]],
            automaticDriverAssign_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            automaticDriverAssign_franchiseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            automaticDriverAssign_timeToReachPickup: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_distanceFromPickup: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_driverIdleTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_no_driver_available_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_auto_cancellation_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_18__["validataion"].numericOnly)]],
            automaticDriverAssign_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    EditAutomaticDriverAssign.prototype.setValiator = function (type) {
        var form = this.addEditDriverAssignForm;
        if (type == "set") {
            form.patchValue({ automaticDriverAssign_franchiseId: '' });
            form.get('automaticDriverAssign_franchiseId').clearValidators();
            form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
            form.get('automaticDriverAssign_franchiseId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
            this.dtr.detectChanges();
        }
        else {
            form.patchValue({ automaticDriverAssign_franchiseId: '' });
            form.get('automaticDriverAssign_franchiseId').clearValidators();
            form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
            form.get('automaticDriverAssign_franchiseId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            form.get('automaticDriverAssign_franchiseId').updateValueAndValidity();
            this.dtr.detectChanges();
        }
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
    //   })
    // }
    EditAutomaticDriverAssign.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService.getCountryCities(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
                                        case 1:
                                            _a.cities = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.setValiator("set");
                        this.operators = [];
                        // Helpers.setLoading(false);
                        this.dtr.detectChanges();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditAutomaticDriverAssign.prototype.changeCity = function (cityId, type) {
        if (type === void 0) { type = 0; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!cityId) return [3 /*break*/, 2];
                        if (type == 1) {
                            this.setValiator("set");
                        }
                        return [4 /*yield*/, this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
                                        case 1:
                                            _a.operators = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditAutomaticDriverAssign.prototype.getAutoamticDriverAssignDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.id = this._route.snapshot.params['id'];
                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                this.stateSubscription = this.store.dispatch(new _state_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_11__["LoadAutomaticDriverAssign"](this.id));
                this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_automatic_driver_assign_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var result, fd;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(data && data != undefined)) return [3 /*break*/, 3];
                                if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                result = data['data'];
                                fd = {
                                    // automaticDriverAssign_countryId: result.automaticDriverAssign_countryId,
                                    automaticDriverAssign_cityId: result.automaticDriverAssign_cityId != null && result.automaticDriverAssign_cityId != undefined ? result.automaticDriverAssign_cityId : "",
                                    automaticDriverAssign_franchiseId: result.automaticDriverAssign_franchiseId && result.automaticDriverAssign_franchiseId != undefined ? result.automaticDriverAssign_franchiseId : "",
                                    automaticDriverAssign_timeToReachPickup: result.automaticDriverAssign_timeToReachPickup,
                                    automaticDriverAssign_distanceFromPickup: result.automaticDriverAssign_distanceFromPickup,
                                    automaticDriverAssign_driverIdleTime: result.automaticDriverAssign_driverIdleTime,
                                    automaticDriverAssign_no_driver_available_time: result.automaticDriverAssign_no_driver_available_time,
                                    automaticDriverAssign_auto_cancellation_time: result.automaticDriverAssign_auto_cancellation_time,
                                    automaticDriverAssign_status: result.automaticDriverAssign_status
                                };
                                this.changeCountry(result.automaticDriverAssign_countryId);
                                this.changeCity(result.automaticDriverAssign_cityId);
                                return [4 /*yield*/, this.addEditDriverAssignForm.patchValue(fd)];
                            case 1:
                                _a.sent();
                                this.stateSubscription.unsubscribe();
                                return [3 /*break*/, 3];
                            case 2:
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                this.toastr.error(data['message']);
                                this.stateSubscription.unsubscribe();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    EditAutomaticDriverAssign.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                if (this.addEditDriverAssignForm.valid) {
                    form = this.addEditDriverAssignForm.value;
                    obj = {
                        id: this.id,
                        data: {
                            automaticDriverAssign_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry,
                            automaticDriverAssign_cityId: form.automaticDriverAssign_cityId,
                            automaticDriverAssign_franchiseId: form.automaticDriverAssign_franchiseId,
                            automaticDriverAssign_timeToReachPickup: form.automaticDriverAssign_timeToReachPickup,
                            automaticDriverAssign_distanceFromPickup: form.automaticDriverAssign_distanceFromPickup,
                            automaticDriverAssign_driverIdleTime: form.automaticDriverAssign_driverIdleTime,
                            automaticDriverAssign_no_driver_available_time: form.automaticDriverAssign_no_driver_available_time,
                            automaticDriverAssign_auto_cancellation_time: form.automaticDriverAssign_auto_cancellation_time,
                            automaticDriverAssign_status: form.automaticDriverAssign_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateAutomaticDriverAssign"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_automatic_driver_assign_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/automatic-driver-assign/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                }
                return [2 /*return*/];
            });
        });
    };
    EditAutomaticDriverAssign.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"] }
    ]; };
    EditAutomaticDriverAssign = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-automatic-driver-assign',
            template: __webpack_require__(/*! raw-loader!./add-edit-automatic-driver-assign.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-automatic-driver-assign.component.scss */ "./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"]])
    ], EditAutomaticDriverAssign);
    return EditAutomaticDriverAssign;
}());



/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrlbl_table {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYXV0b21hdGljLWRyaXZlci1hc3NpZ24vYXV0b21hdGljLWRyaXZlci1hc3NpZ24tbGlzdC9hdXRvbWF0aWMtZHJpdmVyLWFzc2lnbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9hdXRvbWF0aWMtZHJpdmVyLWFzc2lnbi9hdXRvbWF0aWMtZHJpdmVyLWFzc2lnbi1saXN0L2F1dG9tYXRpYy1kcml2ZXItYXNzaWduLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NybGJsX3RhYmxlIHtvdmVyZmxvdy14OiBhdXRvO30iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AutomaticDriverAssignListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticDriverAssignListComponent", function() { return AutomaticDriverAssignListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../api-constants */ "./src/api-constants.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");











function _window() {
    // return the global native browser window object
    return window;
}
var AutomaticDriverAssignListComponent = /** @class */ (function () {
    function AutomaticDriverAssignListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.stateSubscription = '';
        this.status = '';
        this.AUTOMATIC_DRIVER_ASSIGN_CONST = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.AUTOMATIC_DRIVER_ASSIGN_CONST = this.translate.instant('AUTOMATIC_DRIVER_ASSIGN');
        //SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.AUTOMATIC_DRIVER_ASSIGN'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_6__["APPNAME"] + " | " + this.AUTOMATIC_DRIVER_ASSIGN_CONST.MODULE_NAME);
    }
    AutomaticDriverAssignListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    AutomaticDriverAssignListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    AutomaticDriverAssignListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    AutomaticDriverAssignListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-automaticDriverAssign-list', scripts).then(function () {
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
                    sProcessing: that.AUTOMATIC_DRIVER_ASSIGN_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_7__["ApiURIs"].listAutomaticDriverAssign,
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
                        title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.SR_NO, data: null
                    },
                    // { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.COUNTRY, data: 'automaticDriverAssign_countryName' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.CITY, data: 'automaticDriverAssign_cityName' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.FRANCHISE, data: 'automaticDriverAssign_operatorName' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.TIME_TO_REACH_PICKUP, data: 'automaticDriverAssign_timeToReachPickup' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.DISTANCE_FORM_PICKUP, data: 'automaticDriverAssign_distanceFromPickup' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.DRIVER_IDEL_TIME, data: 'automaticDriverAssign_driverIdleTime' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.STATUS, data: 'automaticDriverAssign_status' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.CREATED_ON, data: 'automaticDriverAssign_createdOn' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.MODIFIED_ON, data: 'automaticDriverAssign_modifyOn' },
                    { title: that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.SR_NO:
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.COUNTRY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.CITY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.FRANCHISE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.TIME_TO_REACH_PICKUP:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.DISTANCE_FORM_PICKUP:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.DRIVER_IDEL_TIME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.AUTOMATIC_DRIVER_ASSIGN_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            // case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.MODIFIED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.AUTOMATIC_DRIVER_ASSIGN_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.AUTOMATIC_DRIVER_ASSIGN_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.AUTOMATIC_DRIVER_ASSIGN_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                    // {
                    //   targets: 1,
                    //   width: '20%',
                    //   render: function (a, e, t, n) {
                    //     return a;
                    //   }
                    // },
                    {
                        targets: 1,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    }, {
                        targets: 2,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    }, {
                        targets: 3,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    }, {
                        targets: 4,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    }, {
                        targets: 5,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    },
                    {
                        targets: 6,
                        width: '10%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.automaticDriverAssign_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.automaticDriverAssign_status].title + '</span>';
                        }
                    },
                    {
                        targets: 7,
                        width: '10%'
                    },
                    {
                        targets: 8,
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
    AutomaticDriverAssignListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(['/automatic-driver-assign/edit/' + this.id]);
    };
    AutomaticDriverAssignListComponent.prototype.delete = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, $(e).data('id')];
                    case 1:
                        _a.id = _b.sent();
                        obj = {
                            component: 'driverAssignment',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    AutomaticDriverAssignListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true
        });
        var obj = {
            component: "driverAssignment",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    AutomaticDriverAssignListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    AutomaticDriverAssignListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_9__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    AutomaticDriverAssignListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-automaticDriverAssign-list',
            template: __webpack_require__(/*! raw-loader!./automatic-driver-assign-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.html"),
            styles: [__webpack_require__(/*! ./automatic-driver-assign-list.component.scss */ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_9__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], AutomaticDriverAssignListComponent);
    return AutomaticDriverAssignListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2F1dG9tYXRpYy1kcml2ZXItYXNzaWduL2F1dG9tYXRpYy1kcml2ZXItYXNzaWduLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AutomaticDriverAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticDriverAssignComponent", function() { return AutomaticDriverAssignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var AutomaticDriverAssignComponent = /** @class */ (function () {
    function AutomaticDriverAssignComponent(subheaerService, titleService) {
        this.subheaerService = subheaerService;
        this.subheaerService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].AUTOMATIC_DRIVER_ASSIGN);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].automaticDriverAssign);
    }
    AutomaticDriverAssignComponent.prototype.ngOnInit = function () {
    };
    AutomaticDriverAssignComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    AutomaticDriverAssignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-automatic-driver-assign',
            template: __webpack_require__(/*! raw-loader!./automatic-driver-assign.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.html"),
            styles: [__webpack_require__(/*! ./automatic-driver-assign.component.scss */ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AutomaticDriverAssignComponent);
    return AutomaticDriverAssignComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AutomaticDriverAssignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticDriverAssignModule", function() { return AutomaticDriverAssignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_automatic_driver_assign_add_edit_automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component */ "./src/app/views/pages/automatic-driver-assign/add-edit-automatic-driver-assign/add-edit-automatic-driver-assign.component.ts");
/* harmony import */ var _automatic_driver_assign_list_automatic_driver_assign_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./automatic-driver-assign-list/automatic-driver-assign-list.component */ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign-list/automatic-driver-assign-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_automatic_driver_assign_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/automatic-driver-assign.effects */ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_automatic_driver_assign_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/automatic-driver-assign.reducer */ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./automatic-driver-assign.component */ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.component.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_17__["AutomaticDriverAssignComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _automatic_driver_assign_list_automatic_driver_assign_list_component__WEBPACK_IMPORTED_MODULE_4__["AutomaticDriverAssignListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_automatic_driver_assign_add_edit_automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_3__["AddAutomaticDriverAssign"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_automatic_driver_assign_add_edit_automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_3__["EditAutomaticDriverAssign"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].AUTOMATIC_DRIVER_ASSIGN.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var AutomaticDriverAssignModule = /** @class */ (function () {
    function AutomaticDriverAssignModule() {
    }
    AutomaticDriverAssignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_17__["AutomaticDriverAssignComponent"], _automatic_driver_assign_list_automatic_driver_assign_list_component__WEBPACK_IMPORTED_MODULE_4__["AutomaticDriverAssignListComponent"], _add_edit_automatic_driver_assign_add_edit_automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_3__["AddAutomaticDriverAssign"], _add_edit_automatic_driver_assign_add_edit_automatic_driver_assign_component__WEBPACK_IMPORTED_MODULE_3__["EditAutomaticDriverAssign"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_automatic_driver_assign_effects__WEBPACK_IMPORTED_MODULE_11__["AutomaticDriverAssignEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature('driverAssignment', _state_automatic_driver_assign_reducer__WEBPACK_IMPORTED_MODULE_14__["AutomaticDriverAssignReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], AutomaticDriverAssignModule);
    return AutomaticDriverAssignModule;
}());



/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.actions.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.actions.ts ***!
  \**********************************************************************************************/
/*! exports provided: AutomaticDriverAssignActionTypes, LoadAutomaticDriverAssign, LoadAutomaticDriverAssignSuccess, LoadAutomaticDriverAssignFail, UpdateAutomaticDriverAssign, UpdateAutomaticDriverAssignSuccess, UpdateAutomaticDriverAssignFail, DeleteAutomaticDriverAssign, DeleteAutomaticDriverAssignSuccess, DeleteAutomaticDriverAssignFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddAutomaticDriverAssign, AddAutomaticDriverAssignSuccess, AddAutomaticDriverAssignFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticDriverAssignActionTypes", function() { return AutomaticDriverAssignActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAutomaticDriverAssign", function() { return LoadAutomaticDriverAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAutomaticDriverAssignSuccess", function() { return LoadAutomaticDriverAssignSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAutomaticDriverAssignFail", function() { return LoadAutomaticDriverAssignFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAutomaticDriverAssign", function() { return UpdateAutomaticDriverAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAutomaticDriverAssignSuccess", function() { return UpdateAutomaticDriverAssignSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAutomaticDriverAssignFail", function() { return UpdateAutomaticDriverAssignFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAutomaticDriverAssign", function() { return DeleteAutomaticDriverAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAutomaticDriverAssignSuccess", function() { return DeleteAutomaticDriverAssignSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAutomaticDriverAssignFail", function() { return DeleteAutomaticDriverAssignFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAutomaticDriverAssign", function() { return AddAutomaticDriverAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAutomaticDriverAssignSuccess", function() { return AddAutomaticDriverAssignSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAutomaticDriverAssignFail", function() { return AddAutomaticDriverAssignFail; });
var AutomaticDriverAssignActionTypes;
(function (AutomaticDriverAssignActionTypes) {
    AutomaticDriverAssignActionTypes["UPDATE_STATUS"] = "[AUTOMATIC_DRIVER_ASSIGN] Update Status";
    AutomaticDriverAssignActionTypes["UPDATE_STATUS_SUCCESS"] = "[AUTOMATIC_DRIVER_ASSIGN]  Update Status Success";
    AutomaticDriverAssignActionTypes["UPDATE_STATUS_FAIL"] = "[AUTOMATIC_DRIVER_ASSIGN]  Update Status Fail";
    AutomaticDriverAssignActionTypes["LOAD_AUTOMATIC_DRIVER_ASSIGN"] = "[AUTOMATIC_DRIVER_ASSIGN] Load AUTOMATIC_DRIVER_ASSIGN";
    AutomaticDriverAssignActionTypes["LOAD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS"] = "[AUTOMATIC_DRIVER_ASSIGN] Load AUTOMATIC_DRIVER_ASSIGN Success";
    AutomaticDriverAssignActionTypes["LOAD_AUTOMATIC_DRIVER_ASSIGN_FAIL"] = "[AUTOMATIC_DRIVER_ASSIGN] Load AUTOMATIC_DRIVER_ASSIGN Fail";
    AutomaticDriverAssignActionTypes["UPDATE_AUTOMATIC_DRIVER_ASSIGN"] = "[AUTOMATIC_DRIVER_ASSIGN] Update AUTOMATIC_DRIVER_ASSIGN";
    AutomaticDriverAssignActionTypes["UPDATE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS"] = "[AUTOMATIC_DRIVER_ASSIGN] Update AUTOMATIC_DRIVER_ASSIGN Success";
    AutomaticDriverAssignActionTypes["UPDATE_AUTOMATIC_DRIVER_ASSIGN_FAIL"] = "[AUTOMATIC_DRIVER_ASSIGN] Update AUTOMATIC_DRIVER_ASSIGN Fail";
    AutomaticDriverAssignActionTypes["DELETE_AUTOMATIC_DRIVER_ASSIGN"] = "[AUTOMATIC_DRIVER_ASSIGN] Delete AUTOMATIC_DRIVER_ASSIGN";
    AutomaticDriverAssignActionTypes["DELETE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS"] = "[AUTOMATIC_DRIVER_ASSIGN] Delete AUTOMATIC_DRIVER_ASSIGN Success";
    AutomaticDriverAssignActionTypes["DELETE_AUTOMATIC_DRIVER_ASSIGN_FAIL"] = "[AUTOMATIC_DRIVER_ASSIGN] Delete AUTOMATIC_DRIVER_ASSIGN Fail";
    AutomaticDriverAssignActionTypes["ADD_AUTOMATIC_DRIVER_ASSIGN"] = "[AUTOMATIC_DRIVER_ASSIGN] Add Data";
    AutomaticDriverAssignActionTypes["ADD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS"] = "[AUTOMATIC_DRIVER_ASSIGN] Add Data Success";
    AutomaticDriverAssignActionTypes["ADD_AUTOMATIC_DRIVER_ASSIGN_FAIL"] = "[AUTOMATIC_DRIVER_ASSIGN] Add Data Fail";
    AutomaticDriverAssignActionTypes["UPLOAD_DATA"] = "[AUTOMATIC_DRIVER_ASSIGN] Upload Data";
    AutomaticDriverAssignActionTypes["UPLOAD_DATA_SUCCESS"] = "[AUTOMATIC_DRIVER_ASSIGN] Upload Data Success";
    AutomaticDriverAssignActionTypes["UPLOAD_DATA_FAIL"] = "[AUTOMATIC_DRIVER_ASSIGN] Upload Data Fail";
})(AutomaticDriverAssignActionTypes || (AutomaticDriverAssignActionTypes = {}));
var LoadAutomaticDriverAssign = /** @class */ (function () {
    function LoadAutomaticDriverAssign(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN;
    }
    LoadAutomaticDriverAssign.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadAutomaticDriverAssign;
}());

var LoadAutomaticDriverAssignSuccess = /** @class */ (function () {
    function LoadAutomaticDriverAssignSuccess(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;
    }
    LoadAutomaticDriverAssignSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadAutomaticDriverAssignSuccess;
}());

var LoadAutomaticDriverAssignFail = /** @class */ (function () {
    function LoadAutomaticDriverAssignFail(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.LOAD_AUTOMATIC_DRIVER_ASSIGN_FAIL;
    }
    LoadAutomaticDriverAssignFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadAutomaticDriverAssignFail;
}());

var UpdateAutomaticDriverAssign = /** @class */ (function () {
    function UpdateAutomaticDriverAssign(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN;
    }
    UpdateAutomaticDriverAssign.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateAutomaticDriverAssign;
}());

var UpdateAutomaticDriverAssignSuccess = /** @class */ (function () {
    function UpdateAutomaticDriverAssignSuccess(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;
    }
    UpdateAutomaticDriverAssignSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateAutomaticDriverAssignSuccess;
}());

var UpdateAutomaticDriverAssignFail = /** @class */ (function () {
    function UpdateAutomaticDriverAssignFail(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.UPDATE_AUTOMATIC_DRIVER_ASSIGN_FAIL;
    }
    UpdateAutomaticDriverAssignFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateAutomaticDriverAssignFail;
}());

var DeleteAutomaticDriverAssign = /** @class */ (function () {
    function DeleteAutomaticDriverAssign(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN;
    }
    DeleteAutomaticDriverAssign.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteAutomaticDriverAssign;
}());

var DeleteAutomaticDriverAssignSuccess = /** @class */ (function () {
    function DeleteAutomaticDriverAssignSuccess(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;
    }
    DeleteAutomaticDriverAssignSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteAutomaticDriverAssignSuccess;
}());

var DeleteAutomaticDriverAssignFail = /** @class */ (function () {
    function DeleteAutomaticDriverAssignFail(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.DELETE_AUTOMATIC_DRIVER_ASSIGN_FAIL;
    }
    DeleteAutomaticDriverAssignFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteAutomaticDriverAssignFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddAutomaticDriverAssign = /** @class */ (function () {
    function AddAutomaticDriverAssign(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN;
        console.log(payload);
    }
    AddAutomaticDriverAssign.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAutomaticDriverAssign;
}());

var AddAutomaticDriverAssignSuccess = /** @class */ (function () {
    function AddAutomaticDriverAssignSuccess(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS;
    }
    AddAutomaticDriverAssignSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAutomaticDriverAssignSuccess;
}());

var AddAutomaticDriverAssignFail = /** @class */ (function () {
    function AddAutomaticDriverAssignFail(payload) {
        this.payload = payload;
        this.type = AutomaticDriverAssignActionTypes.ADD_AUTOMATIC_DRIVER_ASSIGN_FAIL;
    }
    AddAutomaticDriverAssignFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAutomaticDriverAssignFail;
}());



/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.effects.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.effects.ts ***!
  \**********************************************************************************************/
/*! exports provided: AutomaticDriverAssignEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticDriverAssignEffect", function() { return AutomaticDriverAssignEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./automatic-driver-assign.actions */ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.actions.ts");
/* harmony import */ var _automatic_driver_assign_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../automatic-driver-assign.service */ "./src/app/views/pages/automatic-driver-assign/automatic-driver-assign.service.ts");







var AutomaticDriverAssignEffect = /** @class */ (function () {
    function AutomaticDriverAssignEffect(actions$, AutomaticDriverAssignService) {
        var _this = this;
        this.actions$ = actions$;
        this.AutomaticDriverAssignService = AutomaticDriverAssignService;
        this.deleteAutomaticDriverAssign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AutomaticDriverAssignActionTypes"].DELETE_AUTOMATIC_DRIVER_ASSIGN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.AutomaticDriverAssignService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteAutomaticDriverAssignSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteAutomaticDriverAssignFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AutomaticDriverAssignActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.AutomaticDriverAssignService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadAutomaticDriverAssign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AutomaticDriverAssignActionTypes"].LOAD_AUTOMATIC_DRIVER_ASSIGN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.AutomaticDriverAssignService.getAutomaticDriverAssignById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["LoadAutomaticDriverAssignSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["LoadAutomaticDriverAssignFail"](err));
            }));
        }));
        this.updateAutomaticDriverAssign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AutomaticDriverAssignActionTypes"].UPDATE_AUTOMATIC_DRIVER_ASSIGN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.AutomaticDriverAssignService.updateAutomaticDriverAssign(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateAutomaticDriverAssignSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateAutomaticDriverAssignFail"](err)); }));
        }));
        this.addAutomaticDriverAssign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AutomaticDriverAssignActionTypes"].ADD_AUTOMATIC_DRIVER_ASSIGN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.AutomaticDriverAssignService.addAutomaticDriverAssign(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AddAutomaticDriverAssignSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_5__["AddAutomaticDriverAssignFail"](err));
            }));
        }));
    }
    AutomaticDriverAssignEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _automatic_driver_assign_service__WEBPACK_IMPORTED_MODULE_6__["AutomaticDriverAssignService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AutomaticDriverAssignEffect.prototype, "deleteAutomaticDriverAssign$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AutomaticDriverAssignEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AutomaticDriverAssignEffect.prototype, "loadAutomaticDriverAssign$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AutomaticDriverAssignEffect.prototype, "updateAutomaticDriverAssign$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AutomaticDriverAssignEffect.prototype, "addAutomaticDriverAssign$", void 0);
    AutomaticDriverAssignEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _automatic_driver_assign_service__WEBPACK_IMPORTED_MODULE_6__["AutomaticDriverAssignService"]])
    ], AutomaticDriverAssignEffect);
    return AutomaticDriverAssignEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.reducer.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.reducer.ts ***!
  \**********************************************************************************************/
/*! exports provided: initialState, AutomaticDriverAssignReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticDriverAssignReducer", function() { return AutomaticDriverAssignReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./automatic-driver-assign.actions */ "./src/app/views/pages/automatic-driver-assign/state/automatic-driver-assign.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function AutomaticDriverAssignReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for  load-----------------------------
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].LOAD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload;
        }
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].LOAD_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }
        // for   delete-----------------------------
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].DELETE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload;
        }
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].DELETE_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }
        // for   update-----------------------------
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].UPDATE_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload;
        }
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].UPDATE_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }
        // for   update status-----------------------------
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for  add-----------------------------
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].ADD_AUTOMATIC_DRIVER_ASSIGN_SUCCESS: {
            return action.payload;
        }
        case _automatic_driver_assign_actions__WEBPACK_IMPORTED_MODULE_0__["AutomaticDriverAssignActionTypes"].ADD_AUTOMATIC_DRIVER_ASSIGN_FAIL: {
            return action.payload.error;
        }
    }
}
var getDriverAssignmentState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("driverAssignment");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getDriverAssignmentState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-automatic-driver-assign-automatic-driver-assign-module.js.map