(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-notification-template-notification-template-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'TEMPLATE.NOTIFICATION_ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'TEMPLATE.NOTIFICATION_EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/notification-template/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditNotificationTemplateForm\" [formGroup]=\"addEditNotificationTemplateForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group row\">\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_CITY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-lg-12 multiselect_drpdwn\">\n                            <angular2-multiselect [data]=\"countryCities\" [(ngModel)]=\"selectedItemsCity\" [settings]=\"dropdownSettingsCity\" (onSelect)=\"onItemCitySelect($event)\" (onDeSelect)=\"onItemCityDeSelect($event)\" (onSelectAll)=\"onCitySelectAll($event)\" (onDeSelectAll)=\"onCityDeSelectAll($event)\"\n                                formControlName=\"notificationTemplate_cityId\">\n                            </angular2-multiselect>\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_cityId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_cityId.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                <!-- {{ selectedOption != '' ?  selectedOption : 'TEMPLATE.LABEL.template_title' }} -->\n                                {{'TEMPLATE.LABEL.NOTIFICATION_TITLE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template_title -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'TEMPLATE.PLACEHOLDERS.NOTIFICATION_TITLE' | translate}}\" type=\"text\" formControlName=\"notificationTemplate_title_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors }\">\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors?.minlength && !addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors?.maxlength && !addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_title_en.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.NOTIFICATION_INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- </div> -->\n                    <!-- -----------template_countryId -->\n                    <!-- <div class=\"form-group  row\"> -->\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\"\n                                (change)=\"changeCountry($event.target.value)\"\n                                formControlName=\"template_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.template_countryId.errors }\">\n                                <option value=\"\">{{'TEMPLATE.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.template_countryId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.template_countryId.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <div class=\"form-group  row\"> -->\n\n                </div>\n                <!-- {{ order_type != '' ? 'TEMPLATE.LABEL.template_title'.replace('Template',order_type) : 'TEMPLATE.LABEL.template_title' | translate}}* -->\n                <!-- ---------- template slug -->\n                <div class=\"form-group  row\">\n\n                    <div class=\"col-lg-6\" *ngIf=\"isAdd\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.NOTIFICATION_SLUG' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template slug -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'TEMPLATE.PLACEHOLDERS.NOTIFICATION_SLUG' | translate}}\" type=\"text\" formControlName=\"notificationTemplate_slug\" [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors }\">\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors?.minlength && !addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors?.maxlength && !addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_slug.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_CODE' | translate}}*\n                        </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'TEMPLATE.PLACEHOLDERS.TEMPLATE_CODE' | translate}}\" type=\"text\" formControlName=\"notificationTemplate_code\" [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.notificationTemplate_code.errors }\">\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_code.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_code.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_code.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <!-- </div> -->\n                    <!-- -----------template Specific -->\n                    <!-- <div class=\"form-group  row\"> -->\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_SPECIFIC' | translate}}*\n                        </label>\n                        </div>.-->\n                    <!-- template_isCountrySpecific -->\n                    <!--<div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"notificationTemplate_isCountrySpecific\" [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.notificationTemplate_isCountrySpecific.errors }\">\n                            <option value=\"\"> {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_SPECIFIC' | translate}}</option>\n                            <option value=\"{{'TEMPLATE.PLACEHOLDERS.YES' | translate}}\">{{'TEMPLATE.LABEL.YES' | translate}}</option>\n                            <option value=\"{{'TEMPLATE.PLACEHOLDERS.NO' | translate}}\">{{'TEMPLATE.LABEL.NO' | translate}}</option>\n                        </select>\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_isCountrySpecific.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_isCountrySpecific.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"notificationTemplate_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.notificationTemplate_status.errors }\">\n                                <option value=\"{{'TEMPLATE.PLACEHOLDERS.ACTIVE' | translate}}\">{{'TEMPLATE.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'TEMPLATE.PLACEHOLDERS.INACTIVE' | translate}}\">{{'TEMPLATE.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_status.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!----- CK Editor en --->\n                <div class=\"form-group row\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <label class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.NOTIFICATION_CONTENT' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\" placeholder=\"Enter Notification Contant\" formControlName=\"notificationTemplate_content_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.notificationTemplate_content_en.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_content_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.notificationTemplate_content_en.errors?.required\">\n                                {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <!----- CK Editor ar --->\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-md-12  col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\" [(ngModel)]=\"val\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_CONTENT_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\" col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                            placeholder=\"Enter Contant\" formControlName=\"template_content_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditNotificationTemplateForm.controls.template_content_ar.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditNotificationTemplateForm.controls.template_content_ar.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p *ngIf=\"submitted && addEditNotificationTemplateForm.controls.template_content_ar.errors?.required\">\n                            {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/notification-template/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                           </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'TEMPLATE.NOTIFICATION_LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/notification-template/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/notification-template.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/notification-template/notification-template.component.html ***!
  \******************************************************************************************************************/
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

/***/ "./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.was-validated .form-control:invalid,\n.form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvbm90aWZpY2F0aW9uLXRlbXBsYXRlL2FkZC1lZGl0LW5vdGlmaWNhdGlvbi10ZW1wbGF0ZS9hZGQtZWRpdC1ub3RpZmljYXRpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7O0VBRUkscUVBQXFFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9ub3RpZmljYXRpb24tdGVtcGxhdGUvYWRkLWVkaXQtbm90aWZpY2F0aW9uLXRlbXBsYXRlL2FkZC1lZGl0LW5vdGlmaWNhdGlvbi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odC1hdXRvIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLFxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAxLjMyNXJlbSkgY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AddNotificationTemplateComponent, EditNotificationTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationTemplateComponent", function() { return AddNotificationTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNotificationTemplateComponent", function() { return EditNotificationTemplateComponent; });
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
/* harmony import */ var _state_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/notificationTemplate.actions */ "./src/app/views/pages/notification-template/state/notificationTemplate.actions.ts");
/* harmony import */ var _state_notificationTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/notificationTemplate.reducer */ "./src/app/views/pages/notification-template/state/notificationTemplate.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");



















var AddNotificationTemplateComponent = /** @class */ (function () {
    function AddNotificationTemplateComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.id = [];
        this.countries = [];
        this.cities = [];
        this.countryCities = [];
        //variable declared  yt
        this.selectedItemsCity = [];
        this.city_countryId = [];
        this.dropdownSettingsCountry = {};
        this.dropdownSettingsCity = {};
        this.NOTIFICATION_TEMPLATE_CONST = this.translate.instant('TEMPLATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.NOTIFICATION_TEMPLATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.NOTIFICATION_TEMPLATE_CONST.NOTIFICATION_MODULE_NAME);
    }
    // check box----------
    AddNotificationTemplateComponent.prototype.ngOnInit = function () {
        this.buildAddEditNotificationTemplateForm();
        // this.getAllCountries();
        this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry);
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
        this.selectedItemsCity = [];
        this.dropdownSettingsCity = {
            singleSelection: false,
            text: "Select Cities",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    };
    //yt
    // getAllCountries() {
    //   // Helpers.setLoading(true);
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
    AddNotificationTemplateComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService
                                .getCountryCities(countryId)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var citydata;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            citydata = _a.sent();
                                            citydata.forEach(function (element) {
                                                _this.countryCities.push({ id: element._id, itemName: element.city_name });
                                            });
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _a.label = 2;
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
    AddNotificationTemplateComponent.prototype.onItemCitySelect = function (item) {
        this.selectedItemsCity[item];
    };
    AddNotificationTemplateComponent.prototype.onItemCityDeSelect = function (item) {
        this.selectedItemsCity.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsCity[el];
            }
        });
    };
    AddNotificationTemplateComponent.prototype.onCitySelectAll = function (items) {
    };
    AddNotificationTemplateComponent.prototype.onCityDeSelectAll = function (items) {
    };
    //
    AddNotificationTemplateComponent.prototype.buildAddEditNotificationTemplateForm = function () {
        this.addEditNotificationTemplateForm = this._formBuilder.group({
            notificationTemplate_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            notificationTemplate_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            // notificationTemplate_code: ["", [Validators.required]],
            notificationTemplate_slug: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            // notificationTemplate_isCountrySpecific: ["", [Validators.required]],
            // template_countryId: ["", [Validators.required]],
            notificationTemplate_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            notificationTemplate_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    AddNotificationTemplateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var citiesArray_1, countryArray, form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditNotificationTemplateForm.valid) return [3 /*break*/, 2];
                        citiesArray_1 = [];
                        countryArray = [];
                        return [4 /*yield*/, this.addEditNotificationTemplateForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        form.notificationTemplate_cityId.forEach(function (element) {
                            citiesArray_1.push(element.id);
                        });
                        obj = {
                            notificationTemplate_title: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.notificationTemplate_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_title_ar
                                // }
                            ],
                            notificationTemplate_content: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.notificationTemplate_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_content_ar
                                // }
                            ],
                            // notificationTemplate_code: form.notificationTemplate_code,
                            notificationTemplate_slug: form.notificationTemplate_slug,
                            // notificationTemplate_isCountrySpecific: form.notificationTemplate_isCountrySpecific,
                            notificationTemplate_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry,
                            notificationTemplate_cityId: citiesArray_1,
                            notificationTemplate_status: form.notificationTemplate_status
                        };
                        this.stateSubscription = this.store.dispatch(new _state_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_12__["AddNotificationTemplate"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_notificationTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/notification-template/list']);
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
                        if (!this.addEditNotificationTemplateForm.valid) {
                            this.toastr.error('All Tabs Field is Required');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddNotificationTemplateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_16__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_17__["CityService"] }
    ]; };
    AddNotificationTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-template',
            template: __webpack_require__(/*! raw-loader!./add-edit-notification-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-notification-template.component.scss */ "./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.scss")]
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
            _country_country_service__WEBPACK_IMPORTED_MODULE_16__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_17__["CityService"]])
    ], AddNotificationTemplateComponent);
    return AddNotificationTemplateComponent;
}());

var EditNotificationTemplateComponent = /** @class */ (function () {
    function EditNotificationTemplateComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.id = [];
        this.countries = [];
        this.cities = [];
        this.countryCities = [];
        //variable declared  yt
        this.selectedItemsCity = [];
        this.city_countryId = [];
        this.dropdownSettingsCountry = {};
        this.dropdownSettingsCity = {};
        this.NOTIFICATION_TEMPLATE_CONST = this.translate.instant('TEMPLATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.NOTIFICATION_TEMPLATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.NOTIFICATION_TEMPLATE_CONST.NOTIFICATION_MODULE_NAME);
    }
    // check box----------
    EditNotificationTemplateComponent.prototype.ngOnInit = function () {
        this.buildAddEditNotificationTemplateForm();
        this.getNotificationTemplateDetails();
        // this.getAllCountries();
        // this.changeCountry(environment.webDefaultCountry)
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
        this.selectedItemsCity = [];
        this.dropdownSettingsCity = {
            singleSelection: false,
            text: "Select Cities",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    };
    EditNotificationTemplateComponent.prototype.onItemCitySelect = function (item) {
        this.selectedItemsCity[item];
    };
    EditNotificationTemplateComponent.prototype.onItemCityDeSelect = function (item) {
        this.selectedItemsCity.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsCity[el];
            }
        });
    };
    EditNotificationTemplateComponent.prototype.onCitySelectAll = function (items) {
    };
    EditNotificationTemplateComponent.prototype.onCityDeSelectAll = function (items) {
    };
    //yt
    // getAllCountries() {
    //   // Helpers.setLoading(true);
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
    EditNotificationTemplateComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService.getCountryCities(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (data["code"] == 200) {
                                        data['data'].forEach(function (element) {
                                            _this.countryCities.push({
                                                id: element._id,
                                                itemName: element.city_name
                                            });
                                            var found = _this.notificationTemplateData.notificationTemplate_cityId.find(function (city) { return city == element._id; });
                                            if (found) {
                                                _this.selectedItemsCity.push({ id: element._id, itemName: element.city_name });
                                            }
                                        });
                                        this.addEditNotificationTemplateForm.patchValue({
                                            city_name: this.selectedItemsCity
                                        });
                                        if (this.dtr && !this.dtr.destroyed) {
                                            this.dtr.detectChanges();
                                        }
                                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    }
                                    else {
                                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                        this.toastr.error(data['message']);
                                    }
                                    return [2 /*return*/];
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
    //
    EditNotificationTemplateComponent.prototype.buildAddEditNotificationTemplateForm = function () {
        this.addEditNotificationTemplateForm = this._formBuilder.group({
            notificationTemplate_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            notificationTemplate_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            // notificationTemplate_code: ["", [Validators.required]],
            // notificationTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            // notificationTemplate_isCountrySpecific: ["", [Validators.required]],
            // template_countryId: ["", [Validators.required]],
            notificationTemplate_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            notificationTemplate_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EditNotificationTemplateComponent.prototype.getNotificationTemplateDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_12__["LoadNotificationTemplate"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_notificationTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 4];
                        if (!(data['code'] == 200)) return [3 /*break*/, 3];
                        result = data['data'];
                        this.notificationTemplateData = data['data'];
                        fd = {
                            notificationTemplate_title_en: result.notificationTemplate_title.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang; })[0].title,
                            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
                            notificationTemplate_content_en: result.notificationTemplate_content.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang; })[0].title,
                            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
                            // notificationTemplate_code: result.notificationTemplate_code,
                            // notificationTemplate_slug: result.notificationTemplate_slug,
                            // notificationTemplate_isCountrySpecific: result.notificationTemplate_isCountrySpecific,
                            // notificationTemplate_countryId: result.notificationTemplate_countryId,
                            notificationTemplate_status: result.notificationTemplate_status
                        };
                        // to fecth details for country
                        return [4 /*yield*/, this.changeCountry(result.notificationTemplate_countryId)];
                    case 1:
                        // to fecth details for country
                        _a.sent();
                        return [4 /*yield*/, this.addEditNotificationTemplateForm.patchValue(fd)];
                    case 2:
                        _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 4];
                    case 3:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    EditNotificationTemplateComponent.prototype.removeValidator = function () {
        this.addEditNotificationTemplateForm
            .get('notificationTemplate_cityId')
            .setValidators([]);
        this.addEditNotificationTemplateForm.get('notificationTemplate_cityId').updateValueAndValidity();
    };
    EditNotificationTemplateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var citiesArray_2, countryArray, form, fd, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (this.addEditNotificationTemplateForm.value.notificationTemplate_cityId.length) {
                            this.removeValidator();
                        }
                        if (!this.addEditNotificationTemplateForm.valid) return [3 /*break*/, 2];
                        citiesArray_2 = [];
                        countryArray = [];
                        return [4 /*yield*/, this.addEditNotificationTemplateForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        form.notificationTemplate_cityId.forEach(function (element) {
                            citiesArray_2.push(element.id);
                        });
                        fd = {
                            notificationTemplate_title: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.notificationTemplate_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_title_ar
                                // }
                            ],
                            notificationTemplate_content: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.notificationTemplate_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_content_ar
                                // }
                            ],
                            // notificationTemplate_code: form.notificationTemplate_code,
                            // notificationTemplate_slug: form.notificationTemplate_slug,
                            // notificationTemplate_isCountrySpecific: form.notificationTemplate_isCountrySpecific,
                            notificationTemplate_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry,
                            notificationTemplate_cityId: citiesArray_2,
                            notificationTemplate_status: form.notificationTemplate_status
                        };
                        obj = {
                            id: this.id,
                            data: fd
                        };
                        this.stateSubscription = this.store.dispatch(new _state_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateNotificationTemplate"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_notificationTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/notification-template/list']);
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
                        if (!this.addEditNotificationTemplateForm.valid) {
                            this.toastr.error('All Tabs Field is Required');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditNotificationTemplateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_16__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_17__["CityService"] }
    ]; };
    EditNotificationTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-template',
            template: __webpack_require__(/*! raw-loader!./add-edit-notification-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-notification-template.component.scss */ "./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_16__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_17__["CityService"]])
    ], EditNotificationTemplateComponent);
    return EditNotificationTemplateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL25vdGlmaWNhdGlvbi10ZW1wbGF0ZS9ub3RpZmljYXRpb24tdGVtcGxhdGUtbGlzdC9ub3RpZmljYXRpb24tdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: NotificationTemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTemplateListComponent", function() { return NotificationTemplateListComponent; });
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
var NotificationTemplateListComponent = /** @class */ (function () {
    function NotificationTemplateListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = "";
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.TEMPLATE_CONST = [];
        this.searchObj = { field: "template_title", template_status: "", search: "" };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.TEMPLATE_CONST = this.translate.instant("TEMPLATE");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.NOTIFICATION_TEMPLATE"));
        titleService.setTitle(this.APPNAME + " | " + this.TEMPLATE_CONST.NITIFICATION_MODULE_NAME);
    }
    NotificationTemplateListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].NOTIFICATION_TEMPLATE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].NOTIFICATION_TEMPLATE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].NOTIFICATION_TEMPLATE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].NOTIFICATION_TEMPLATE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    NotificationTemplateListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    NotificationTemplateListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    NotificationTemplateListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script.loadScripts("kt-notification-template-list", scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            // begin first table
            var table = $(document)
                .find("#kt_datatable")
                .DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                //colReorder: true, // for column reorder
                order: [],
                serverSide: true,
                oLanguage: {
                    sProcessing: that.TEMPLATE_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listNotificationTemplate,
                    type: "POST",
                    headers: {
                        Authorization: that.localStorageService.getToken(),
                    },
                    dataFilter: function (data) {
                        var json = $.parseJSON(data);
                        if (json["code"] === 200) {
                            json.recordsTotal = json.data.totalDocs;
                            json.recordsFiltered = json.data.totalDocs;
                            json.data = json.data.docs;
                        }
                        else if (json["code"] === 401 ||
                            json["code"] === 500 ||
                            json["code"] === 403) {
                            that.router.navigate(["/dashboard"]);
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    },
                },
                columns: [
                    {
                        title: that.TEMPLATE_CONST.LABEL.SR_NO,
                        data: null,
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.NOTIFICATION_TITLE,
                        data: "notificationTemplate_title",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.NOTIFICATION_SLUG,
                        data: "notificationTemplate_slug",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.STATUS,
                        data: "notificationTemplate_status",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.CREATED_ON,
                        data: "notificationTemplate_createdOn",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.MODIFIED_ON,
                        data: "notificationTemplate_modifyOn",
                    },
                    { title: that.TEMPLATE_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api()
                        .columns()
                        .every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.TEMPLATE_CONST.LABEL.SR_NO:
                                break;
                            case that.TEMPLATE_CONST.LABEL.NOTIFICATION_TITLE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TEMPLATE_CONST.LABEL.NOTIFICATION_SLUG:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TEMPLATE_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                <option value=\"\">" + that.TEMPLATE_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.TEMPLATE_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.TEMPLATE_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.TEMPLATE_CONST.LABEL.CREATED_ON:
                            //   input = $(
                            //     `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //       this.index() +
                            //       `"/>`
                            //   );
                            //   break;
                            //   case that.TEMPLATE_CONST.LABEL.MODIFIED_ON:
                            //     input = $(
                            //       `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //         this.index() +
                            //         `"/>`
                            //     );
                            //     break;
                            case that.TEMPLATE_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.TEMPLATE_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.TEMPLATE_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
                                $("<th>").append(search).append(reset).appendTo(rowFilter);
                                $(search).on("click", function (e) {
                                    e.preventDefault();
                                    var params = {};
                                    $(rowFilter)
                                        .find(".kt-input")
                                        .each(function () {
                                        var i = $(this).data("col-index");
                                        if (params[i]) {
                                            params[i] += "|" + $(this).val();
                                        }
                                        else {
                                            params[i] = $(this).val();
                                        }
                                    });
                                    $.each(params, function (i, val) {
                                        // apply search params to datatable
                                        table.column(i).search(val ? val : "", false, false);
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
                                $(reset).on("click", function (e) {
                                    e.preventDefault();
                                    $(rowFilter)
                                        .find(".kt-input")
                                        .each(function (i) {
                                        $(this).val("");
                                        table
                                            .column($(this).data("col-index"))
                                            .search("", false, false);
                                    });
                                    table.table().draw();
                                });
                                break;
                        }
                        if (column !== "Actions") {
                            $(input).appendTo($("<th>").appendTo(rowFilter));
                        }
                    });
                },
                columnDefs: [
                    {
                        targets: -1,
                        title: "Actions",
                        orderable: !1,
                        bSortable: false,
                        width: "10%",
                        render: function (a, e, t, n) {
                            var id = t._id;
                            var editBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' +
                                id +
                                '" onclick="window.my.notimgmt.edit(this)" title="Edit details">\
										<i class="la la-edit"></i> </a>\
									';
                            var deleteBtn = '<a href="javascript:;" id="btnDelete" data-id="' +
                                id +
                                '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
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
                                return "-";
                            }
                        },
                    },
                    {
                        targets: 0,
                        width: "10%",
                        orderable: false,
                        render: function (a, e, t, n) {
                            return n.row + 1 + n.settings._iDisplayStart;
                        },
                    },
                    {
                        targets: 1,
                        width: "20%",
                        render: function (a, e, t, n) {
                            var c = a.filter(function (obj) { return obj.lang == "EN"; });
                            return c[0].title;
                        },
                    },
                    {
                        targets: 2,
                        width: "10%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 3,
                        width: "30%",
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                INACTIVE: { title: "Inactive", class: "kt-badge--danger" },
                                ACTIVE: { title: "Active", class: "kt-badge--success" },
                            };
                            return ('<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' +
                                id +
                                '" data-status="' +
                                value +
                                '" data-toggle="modal"  class="kt-badge ' +
                                status[row.notificationTemplate_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.notificationTemplate_status].title +
                                "</span>");
                        },
                    },
                    {
                        targets: 4,
                        width: "10%"
                    },
                    {
                        targets: 5,
                        width: "10%"
                    },
                ],
            });
            //table.colReorder.move( 0, 1 );
            table.on("column-reorder", function (e, settings, details) {
                var headerCell = $(table.column(details.to).header());
                headerCell.addClass("reordered");
                setTimeout(function () {
                    headerCell.removeClass("reordered");
                }, 2000);
            });
        });
    };
    NotificationTemplateListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(["/notification-template/edit/" + this.id]);
    };
    NotificationTemplateListComponent.prototype.delete = function (e) {
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
                            component: "notificationTemplate",
                            click: "delete",
                            id: this.id,
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationTemplateListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: "notificationTemplate",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    NotificationTemplateListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    NotificationTemplateListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    NotificationTemplateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-notification-template-list',
            template: __webpack_require__(/*! raw-loader!./notification-template-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.html"),
            styles: [__webpack_require__(/*! ./notification-template-list.component.scss */ "./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], NotificationTemplateListComponent);
    return NotificationTemplateListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/notification-template/notification-template.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/notification-template.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL25vdGlmaWNhdGlvbi10ZW1wbGF0ZS9ub3RpZmljYXRpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/notification-template/notification-template.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/notification-template.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTemplateComponent", function() { return NotificationTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var NotificationTemplateComponent = /** @class */ (function () {
    function NotificationTemplateComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].NOTIFICATION_TEMPLATE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].notificationTemplateManagement);
    }
    NotificationTemplateComponent.prototype.ngOnInit = function () {
    };
    NotificationTemplateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    NotificationTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-notification-template',
            template: __webpack_require__(/*! raw-loader!./notification-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/notification-template/notification-template.component.html"),
            styles: [__webpack_require__(/*! ./notification-template.component.scss */ "./src/app/views/pages/notification-template/notification-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], NotificationTemplateComponent);
    return NotificationTemplateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/notification-template/notification-template.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/notification-template.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTemplateModule", function() { return NotificationTemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_notification_template_add_edit_notification_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-notification-template/add-edit-notification-template.component */ "./src/app/views/pages/notification-template/add-edit-notification-template/add-edit-notification-template.component.ts");
/* harmony import */ var _notification_template_list_notification_template_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-template-list/notification-template-list.component */ "./src/app/views/pages/notification-template/notification-template-list/notification-template-list.component.ts");
/* harmony import */ var _notification_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-template.component */ "./src/app/views/pages/notification-template/notification-template.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_notificationTemplate_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/notificationTemplate.effects */ "./src/app/views/pages/notification-template/state/notificationTemplate.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_notificationTemplate_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/notificationTemplate.reducer */ "./src/app/views/pages/notification-template/state/notificationTemplate.reducer.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");



















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _notification_template_component__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _notification_template_list_notification_template_list_component__WEBPACK_IMPORTED_MODULE_4__["NotificationTemplateListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].NOTIFICATION_TEMPLATE.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_notification_template_add_edit_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["AddNotificationTemplateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].NOTIFICATION_TEMPLATE.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_notification_template_add_edit_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["EditNotificationTemplateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].NOTIFICATION_TEMPLATE.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var NotificationTemplateModule = /** @class */ (function () {
    function NotificationTemplateModule() {
    }
    NotificationTemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notification_template_component__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateComponent"], _notification_template_list_notification_template_list_component__WEBPACK_IMPORTED_MODULE_4__["NotificationTemplateListComponent"], _add_edit_notification_template_add_edit_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["AddNotificationTemplateComponent"], _add_edit_notification_template_add_edit_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["EditNotificationTemplateComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_notificationTemplate_effects__WEBPACK_IMPORTED_MODULE_12__["NotificationTemplateEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("notificationTemplate", _state_notificationTemplate_reducer__WEBPACK_IMPORTED_MODULE_15__["NotificationTemplateReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["AngularMultiSelectModule"]
            ]
        })
    ], NotificationTemplateModule);
    return NotificationTemplateModule;
}());



/***/ }),

/***/ "./src/app/views/pages/notification-template/state/notificationTemplate.actions.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/state/notificationTemplate.actions.ts ***!
  \*****************************************************************************************/
/*! exports provided: NotificationTemplateActionTypes, LoadNotificationTemplate, LoadNotificationTemplateSuccess, LoadNotificationTemplateFail, UpdateNotificationTemplate, UpdateNotificationTemplateSuccess, UpdateNotificationTemplateFail, DeleteNotificationTemplate, DeleteNotificationTemplateSuccess, DeleteNotificationTemplateFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddNotificationTemplate, AddNotificationTemplateSuccess, AddNotificationTemplateFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTemplateActionTypes", function() { return NotificationTemplateActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNotificationTemplate", function() { return LoadNotificationTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNotificationTemplateSuccess", function() { return LoadNotificationTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNotificationTemplateFail", function() { return LoadNotificationTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationTemplate", function() { return UpdateNotificationTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationTemplateSuccess", function() { return UpdateNotificationTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNotificationTemplateFail", function() { return UpdateNotificationTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNotificationTemplate", function() { return DeleteNotificationTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNotificationTemplateSuccess", function() { return DeleteNotificationTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNotificationTemplateFail", function() { return DeleteNotificationTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationTemplate", function() { return AddNotificationTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationTemplateSuccess", function() { return AddNotificationTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationTemplateFail", function() { return AddNotificationTemplateFail; });
var NotificationTemplateActionTypes;
(function (NotificationTemplateActionTypes) {
    NotificationTemplateActionTypes["UPDATE_STATUS"] = "[NOTIFICATION_TEMPLATE] Update Status";
    NotificationTemplateActionTypes["UPDATE_STATUS_SUCCESS"] = "[NOTIFICATION_TEMPLATE]  Update Status Success";
    NotificationTemplateActionTypes["UPDATE_STATUS_FAIL"] = "[NOTIFICATION_TEMPLATE]  Update Status Fail";
    NotificationTemplateActionTypes["LOAD_NOTIFICATION_TEMPLATE"] = "[NOTIFICATION_TEMPLATE] Load TEMPLATE";
    NotificationTemplateActionTypes["LOAD_NOTIFICATION_TEMPLATE_SUCCESS"] = "[NOTIFICATION_TEMPLATE] Load TEMPLATE Success";
    NotificationTemplateActionTypes["LOAD_NOTIFICATION_TEMPLATE_FAIL"] = "[NOTIFICATION_TEMPLATE] Load TEMPLATE Fail";
    NotificationTemplateActionTypes["UPDATE_NOTIFICATION_TEMPLATE"] = "[NOTIFICATION_TEMPLATE] Update TEMPLATE";
    NotificationTemplateActionTypes["UPDATE_NOTIFICATION_TEMPLATE_SUCCESS"] = "[NOTIFICATION_TEMPLATE] Update TEMPLATE Success";
    NotificationTemplateActionTypes["UPDATE_NOTIFICATION_TEMPLATE_FAIL"] = "[NOTIFICATION_TEMPLATE] Update TEMPLATE Fail";
    NotificationTemplateActionTypes["DELETE_NOTIFICATION_TEMPLATE"] = "[NOTIFICATION_TEMPLATE] Delete TEMPLATE";
    NotificationTemplateActionTypes["DELETE_NOTIFICATION_TEMPLATE_SUCCESS"] = "[NOTIFICATION_TEMPLATE] Delete TEMPLATE Success";
    NotificationTemplateActionTypes["DELETE_NOTIFICATION_TEMPLATE_FAIL"] = "[NOTIFICATION_TEMPLATE] Delete TEMPLATE Fail";
    NotificationTemplateActionTypes["ADD_NOTIFICATION_TEMPLATE"] = "[NOTIFICATION_TEMPLATE] Upload Data";
    NotificationTemplateActionTypes["ADD_NOTIFICATION_TEMPLATE_SUCCESS"] = "[NOTIFICATION_TEMPLATE] Upload Data Success";
    NotificationTemplateActionTypes["ADD_NOTIFICATION_TEMPLATE_FAIL"] = "[NOTIFICATION_TEMPLATE] Upload Data Fail";
})(NotificationTemplateActionTypes || (NotificationTemplateActionTypes = {}));
var LoadNotificationTemplate = /** @class */ (function () {
    function LoadNotificationTemplate(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE;
    }
    LoadNotificationTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadNotificationTemplate;
}());

var LoadNotificationTemplateSuccess = /** @class */ (function () {
    function LoadNotificationTemplateSuccess(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE_SUCCESS;
    }
    LoadNotificationTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadNotificationTemplateSuccess;
}());

var LoadNotificationTemplateFail = /** @class */ (function () {
    function LoadNotificationTemplateFail(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.LOAD_NOTIFICATION_TEMPLATE_FAIL;
    }
    LoadNotificationTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadNotificationTemplateFail;
}());

var UpdateNotificationTemplate = /** @class */ (function () {
    function UpdateNotificationTemplate(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE;
    }
    UpdateNotificationTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateNotificationTemplate;
}());

var UpdateNotificationTemplateSuccess = /** @class */ (function () {
    function UpdateNotificationTemplateSuccess(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE_SUCCESS;
    }
    UpdateNotificationTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateNotificationTemplateSuccess;
}());

var UpdateNotificationTemplateFail = /** @class */ (function () {
    function UpdateNotificationTemplateFail(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.UPDATE_NOTIFICATION_TEMPLATE_FAIL;
    }
    UpdateNotificationTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateNotificationTemplateFail;
}());

var DeleteNotificationTemplate = /** @class */ (function () {
    function DeleteNotificationTemplate(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE;
    }
    DeleteNotificationTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteNotificationTemplate;
}());

var DeleteNotificationTemplateSuccess = /** @class */ (function () {
    function DeleteNotificationTemplateSuccess(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE_SUCCESS;
    }
    DeleteNotificationTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteNotificationTemplateSuccess;
}());

var DeleteNotificationTemplateFail = /** @class */ (function () {
    function DeleteNotificationTemplateFail(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.DELETE_NOTIFICATION_TEMPLATE_FAIL;
    }
    DeleteNotificationTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteNotificationTemplateFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddNotificationTemplate = /** @class */ (function () {
    function AddNotificationTemplate(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE;
    }
    AddNotificationTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddNotificationTemplate;
}());

var AddNotificationTemplateSuccess = /** @class */ (function () {
    function AddNotificationTemplateSuccess(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE_SUCCESS;
    }
    AddNotificationTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddNotificationTemplateSuccess;
}());

var AddNotificationTemplateFail = /** @class */ (function () {
    function AddNotificationTemplateFail(payload) {
        this.payload = payload;
        this.type = NotificationTemplateActionTypes.ADD_NOTIFICATION_TEMPLATE_FAIL;
    }
    AddNotificationTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddNotificationTemplateFail;
}());



/***/ }),

/***/ "./src/app/views/pages/notification-template/state/notificationTemplate.effects.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/state/notificationTemplate.effects.ts ***!
  \*****************************************************************************************/
/*! exports provided: NotificationTemplateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTemplateEffect", function() { return NotificationTemplateEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationTemplate.actions */ "./src/app/views/pages/notification-template/state/notificationTemplate.actions.ts");
/* harmony import */ var _notification_template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notification-template.service */ "./src/app/views/pages/notification-template/notification-template.service.ts");







var NotificationTemplateEffect = /** @class */ (function () {
    function NotificationTemplateEffect(actions$, notificationTemplateService) {
        var _this = this;
        this.actions$ = actions$;
        this.notificationTemplateService = notificationTemplateService;
        this.deleteTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateActionTypes"].DELETE_NOTIFICATION_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.notificationTemplateService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteNotificationTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteNotificationTemplateFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.notificationTemplateService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadNotificationTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateActionTypes"].LOAD_NOTIFICATION_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.notificationTemplateService.getNotificationTemplateById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["LoadNotificationTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["LoadNotificationTemplateFail"](err));
            }));
        }));
        this.updateNotificationTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateActionTypes"].UPDATE_NOTIFICATION_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.notificationTemplateService.updateNotificationTemplate(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateNotificationTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateNotificationTemplateFail"](err)); }));
        }));
        this.addNotificationTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["NotificationTemplateActionTypes"].ADD_NOTIFICATION_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.notificationTemplateService.addNotificationTemplate(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["AddNotificationTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["AddNotificationTemplateFail"](err));
            }));
        }));
    }
    NotificationTemplateEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _notification_template_service__WEBPACK_IMPORTED_MODULE_6__["NotificationTemplateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], NotificationTemplateEffect.prototype, "deleteTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], NotificationTemplateEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], NotificationTemplateEffect.prototype, "loadNotificationTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], NotificationTemplateEffect.prototype, "updateNotificationTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], NotificationTemplateEffect.prototype, "addNotificationTemplate$", void 0);
    NotificationTemplateEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _notification_template_service__WEBPACK_IMPORTED_MODULE_6__["NotificationTemplateService"]])
    ], NotificationTemplateEffect);
    return NotificationTemplateEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/notification-template/state/notificationTemplate.reducer.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/notification-template/state/notificationTemplate.reducer.ts ***!
  \*****************************************************************************************/
/*! exports provided: initialState, NotificationTemplateReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTemplateReducer", function() { return NotificationTemplateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationTemplate.actions */ "./src/app/views/pages/notification-template/state/notificationTemplate.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function NotificationTemplateReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for notificationTemplate load-----------------------------
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].LOAD_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].LOAD_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for notificationTemplate delete-----------------------------
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].DELETE_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].DELETE_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for notificationTemplate update-----------------------------
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].UPDATE_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].UPDATE_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for notificationTemplate upadat status-----------------------------
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for notificationTemplate add-----------------------------
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].ADD_NOTIFICATION_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _notificationTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["NotificationTemplateActionTypes"].ADD_NOTIFICATION_TEMPLATE_FAIL: {
            return action.payload.error;
        }
    }
}
var getTemplateState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("notificationTemplate");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTemplateState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-notification-template-notification-template-module.js.map