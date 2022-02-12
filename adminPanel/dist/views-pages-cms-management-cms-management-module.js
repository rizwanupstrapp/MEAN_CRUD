(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-cms-management-cms-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'CMS.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'CMS.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/cms-management/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditCMSForm\" [formGroup]=\"addEditCMSForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- <div *ngIf=\"Editor\">    <ckeditor  #editor [editor]=\"Editor\"  class=\"form-control\" type=\"text\" placeholder=\"Enter Contant\" formControlName=\"cms_content_ar\"            [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_content_ar.errors }\"></ckeditor></div> -->\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CMS.LABEL.CMS_TYPE' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"cms\" formControlName=\"cms_type\" [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_type.errors }\">\n                                <option value=\"\"> {{'CMS.LABEL.SELECT_TYPE' | translate}}</option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.ABOUT_US' | translate}}\">\n                                    {{'CMS.LABEL.ABOUT_US' | translate}}</option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.PRIVACY_POLICY' | translate}}\">\n                                    {{'CMS.LABEL.PRIVACY_POLICY' | translate}}</option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.TERM_CONDITION' | translate}}\">\n                                    {{'CMS.LABEL.TERM_CONDITION' | translate}}</option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.CONTACT_US' | translate}}\">\n                                    {{'CMS.LABEL.CONTACT_US' | translate}}</option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.BLOG' | translate}}\">\n                                    {{'CMS.LABEL.BLOG' | translate}}\n                                </option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.FAQ' | translate}}\">\n                                    {{'CMS.LABEL.FAQ' | translate}}\n                                </option>\n                                <option value=\"{{'CMS.LABEL.TRIPS' | translate}}\">{{'CMS.PLACEHOLDERS.TRIPS' | translate}}</option>\n                                <option value=\"{{'CMS.LABEL.GUIDE_TO_ACCOUNT' | translate}}\">{{'CMS.PLACEHOLDERS.GUIDE_TO_ACCOUNT' | translate}}</option>\n                                <option value=\"{{'CMS.LABEL.GUIDE_TO_SIGNING_UP' | translate}}\">{{'CMS.PLACEHOLDERS.GUIDE_TO_SIGNING_UP' | translate}}</option>\n                                <option value=\"{{'CMS.LABEL.LEGAL_PRIVACY_GUIDE' | translate}}\">{{'CMS.PLACEHOLDERS.LEGAL_PRIVACY_GUIDE' | translate}}</option>\n                                <option value=\"{{'CMS.LABEL.ACCESSIBILTY' | translate}}\">{{'CMS.PLACEHOLDERS.ACCESSIBILTY' | translate}}</option>\n                            </select>\n\n                            <div *ngIf=\"submitted && addEditCMSForm.controls.cms_type.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_type.errors?.required\">\n                                    {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CMS.LABEL.CMS_TITLE_EN' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'CMS.PLACEHOLDERS.CMS_TITLE' | translate}}\"\n                                type=\"text\" formControlName=\"cms_title_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_title_en.errors }\">\n                            <div *ngIf=\"submitted && addEditCMSForm.controls.cms_title_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_title_en.errors?.required\">\n                                    {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCMSForm.controls.cms_title_en.errors?.minlength && !addEditCMSForm.controls.cms_title_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'CMS.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCMSForm.controls.cms_title_en.errors?.maxlength && !addEditCMSForm.controls.cms_title_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'CMS.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_title_en.errors?.pattern\">\n                                    {{'CMS.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CMS.LABEL.ROLE' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\" formControlName=\"cms_roleId\" [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_roleId.errors }\">\n                                <option value=\"\">{{'CMS.PLACEHOLDERS.ROLE' | translate }}</option>\n\n                                <option value=\"{{roleDetail._id}}\" *ngFor=\"let roleDetail of roles\">\n                                    {{roleDetail.role_name}}</option>\n                            </select>\n\n                            <div *ngIf=\"submitted && addEditCMSForm.controls.cms_roleId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_roleId.errors?.required\">\n                                    {{'CMS.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\" *ngIf=\"isAdd\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CMS.LABEL.CMS_SLUG' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'CMS.PLACEHOLDERS.CMS_SLUG' | translate}}\" type=\"text\"\n                                formControlName=\"cms_slug\" [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_slug.errors }\">\n                            <div *ngIf=\"submitted && addEditCMSForm.controls.cms_slug.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_slug.errors?.required\">\n                                    {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCMSForm.controls.cms_slug.errors?.minlength && !addEditCMSForm.controls.cms_slug.errors?.pattern\" class=\"lbl-err\">\n                                    {{'CMS.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditCMSForm.controls.cms_slug.errors?.maxlength && !addEditCMSForm.controls.cms_slug.errors?.pattern\" class=\"lbl-err\">\n                                    {{'CMS.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_slug.errors?.pattern\">\n                                    {{'CMS.VALIDATION.INVALID_SLUG' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'CMS.LABEL.CMS_TITLE_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'CMS.PLACEHOLDERS.CMS_TITLE' | translate}}\" type=\"text\"\n                            formControlName=\"cms_title_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_title_ar.errors }\">\n                        <div *ngIf=\"submitted && addEditCMSForm.controls.cms_title_ar.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditCMSForm.controls.cms_title_ar.errors?.required\">\n                                {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditCMSForm.controls.cms_title_ar.errors?.minlength && !addEditCMSForm.controls.cms_title_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'CMS.VALIDATION.MIN_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditCMSForm.controls.cms_title_ar.errors?.maxlength && !addEditCMSForm.controls.cms_title_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'CMS.VALIDATION.MAX_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted && addEditCMSForm.controls.cms_title_ar.errors?.pattern\">\n                                {{'CMS.VALIDATION.INVALID_TITLE' | translate }}\n                            </p>\n                        </div>\n\n\n                    </div>\n                </div> -->\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-12 col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CMS.LABEL.CMS_CONTENT_EN' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                            <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\" placeholder=\"Enter Content\" formControlName=\"cms_content_en\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_content_en.errors }\">\n                            </ckeditor>\n\n                            <div *ngIf=\"submitted && addEditCMSForm.controls.cms_content_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_content_en.errors?.required\">\n                                    {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'CMS.LABEL.CMS_CONTENT_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-md-12 col-lg-12\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                            placeholder=\"Enter Content\" formControlName=\"cms_content_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_content_ar.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditCMSForm.controls.cms_content_ar.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditCMSForm.controls.cms_content_ar.errors?.required\">\n                                {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'CMS.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- cms_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"cms_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditCMSForm.controls.cms_status.errors }\">\n                                <option value=\"{{'CMS.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'CMS.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'CMS.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'CMS.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditCMSForm.controls.cms_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditCMSForm.controls.cms_status.errors?.required\">\n                                    {{'CMS.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/cms-management/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/cms-list/cms-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/cms-management/cms-list/cms-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'CMS.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/cms-management/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/cms-management.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/cms-management/cms-management.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>\n"

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

/***/ "./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvY21zLW1hbmFnZW1lbnQvYWRkLWVkaXQtY21zL2FkZC1lZGl0LWNtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLHVCQUF1QixFQUFBOztBQUNqQztFQUNJLHFFQUFxRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY21zLW1hbmFnZW1lbnQvYWRkLWVkaXQtY21zL2FkZC1lZGl0LWNtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odC1hdXRvIHtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDt9XG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddCmsComponent, EditCmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCmsComponent", function() { return AddCmsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCmsComponent", function() { return EditCmsComponent; });
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
/* harmony import */ var _state_cms_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/cms.actions */ "./src/app/views/pages/cms-management/state/cms.actions.ts");
/* harmony import */ var _state_cms_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/cms.reducer */ "./src/app/views/pages/cms-management/state/cms.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");















// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import MathType from '@wiris/mathtype-ckeditor5';
// declare const window: any;
// window.ClassicEditor = ClassicEditor;


var AddCmsComponent = /** @class */ (function () {
    function AddCmsComponent(subheaderService, _formBuilder, router, localStorageService, toastr, store, titleService, roleService, dtr, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.roleService = roleService;
        this.dtr = dtr;
        this.translate = translate;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.roles = [];
        this.CMS_CONST = this.translate.instant('CMS');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.CMS'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.CMS_CONST.MODULE_NAME);
    }
    AddCmsComponent.prototype.ngOnInit = function () {
        this.buildAddEditCmsForm();
        this.getRoleDetails();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    AddCmsComponent.prototype.buildAddEditCmsForm = function () {
        this.addEditCMSForm = this._formBuilder.group({
            cms_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cms_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //   cms_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            cms_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength)]],
            //     cms_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]]
            cms_roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cms_status: ["ACTIVE", []],
            cms_slug: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
        });
    };
    AddCmsComponent.prototype.getRoleDetails = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.roleService.appUserRoleList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    this.roles = result;
                    this.dtr.detectChanges();
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    this.toastr.error(data['message']);
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddCmsComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditCMSForm.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.addEditCMSForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true); // 2020-05-18
                        obj = {
                            cms_title: [{
                                    lang: 'EN',
                                    title: form.cms_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.cms_title_ar
                                // }
                            ],
                            cms_content: [{
                                    lang: 'EN',
                                    title: form.cms_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.cms_content_ar
                                // }
                            ],
                            cms_type: form.cms_type,
                            cms_roleId: form.cms_roleId,
                            cms_slug: form.cms_slug,
                            cms_status: form.cms_status
                        };
                        this.stateSubscription = this.store.dispatch(new _state_cms_actions__WEBPACK_IMPORTED_MODULE_12__["AddCMS"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_cms_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/cms-management/list']);
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
                        if (!this.addEditCMSForm.valid) {
                            this.toastr.error('All Tabs Field is Required');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddCmsComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    AddCmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-cms',
            template: __webpack_require__(/*! raw-loader!./add-edit-cms.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-cms.component.scss */ "./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], AddCmsComponent);
    return AddCmsComponent;
}());

var EditCmsComponent = /** @class */ (function () {
    function EditCmsComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, roleService, titleService, translate, ref) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.roleService = roleService;
        this.translate = translate;
        this.ref = ref;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.roles = [];
        this.CMS_CONST = this.translate.instant('CMS');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.CMS'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.CMS_CONST.MODULE_NAME);
    }
    EditCmsComponent.prototype.ngOnInit = function () {
        this.buildAddEditCmsForm();
        this.getRoleDetails();
        this.getCMSDetails();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    EditCmsComponent.prototype.buildAddEditCmsForm = function () {
        this.addEditCMSForm = this._formBuilder.group({
            cms_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cms_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //   cms_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            cms_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength)]],
            //    cms_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]]
            cms_roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cms_slug: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            cms_status: ["ACTIVE", []],
        });
    };
    EditCmsComponent.prototype.getRoleDetails = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.roleService.appUserRoleList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    this.roles = result;
                    this.dtr.detectChanges();
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    this.toastr.error(data['message']);
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditCmsComponent.prototype.getCMSDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_cms_actions__WEBPACK_IMPORTED_MODULE_12__["LoadCMS"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_cms_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            cms_type: result.cms_type != null && result.cms_type != undefined ? result.cms_type : "",
                            cms_title_en: result.cms_title.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            //      cms_title_ar: result.cms_title.filter((obj) => obj.lang == "AR")[0].title,
                            cms_content_en: result.cms_content.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            cms_roleId: result.cms_roleId != null && result.cms_roleId != undefined ? result.cms_roleId : "",
                            //     cms_content_ar: result.cms_content.filter((obj) => obj.lang == "AR")[0].title,
                            cms_slug: result.cms_slug,
                            cms_status: result.cms_status != null && result.cms_status != undefined ? result.cms_status : "",
                        };
                        this.getRoleDetails();
                        // it is used to detect changes for html file
                        this.ref.detectChanges();
                        return [4 /*yield*/, this.addEditCMSForm.patchValue(fd)];
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
    EditCmsComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditCMSForm.valid) {
                    form = this.addEditCMSForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            cms_title: [{
                                    lang: 'EN',
                                    title: form.cms_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.cms_title_ar
                                // }
                            ],
                            cms_content: [{
                                    lang: 'EN',
                                    title: form.cms_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.cms_content_ar
                                // }
                            ],
                            cms_roleId: form.cms_roleId,
                            cms_type: form.cms_type,
                            cms_slug: form.cms_slug,
                            cms_status: form.cms_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_cms_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateCMS"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_cms_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/cms-management/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditCMSForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditCmsComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    EditCmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-cms',
            template: __webpack_require__(/*! raw-loader!./add-edit-cms.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-cms.component.scss */ "./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_16__["RolesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EditCmsComponent);
    return EditCmsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/cms-management/cms-list/cms-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/cms-management/cms-list/cms-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Ntcy1tYW5hZ2VtZW50L2Ntcy1saXN0L2Ntcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/cms-management/cms-list/cms-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/cms-management/cms-list/cms-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: CmsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsListComponent", function() { return CmsListComponent; });
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
var CmsListComponent = /** @class */ (function () {
    function CmsListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.CMS_CONST = [];
        this.roles = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.searchObj = { field: 'cms_title', cms_status: '', search: '' };
        this.getPermission();
        this.CMS_CONST = this.translate.instant('CMS');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.CMS'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.CMS_CONST.MODULE_NAME);
    }
    CmsListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CMS.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CMS.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CMS.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].CMS.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    CmsListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    CmsListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    CmsListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-cms-list', scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            // begin first table
            var table = $('#kt_datatable').DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                //colReorder: true, // for column reorder
                order: [],
                serverSide: true,
                oLanguage: {
                    sProcessing: that.CMS_CONST.MESSAGES.PROCESSING,
                },
                // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listCMS,
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
                        title: that.CMS_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.CMS_CONST.LABEL.CMS_TITLE, data: 'cms_title' },
                    { title: that.CMS_CONST.LABEL.STATUS, data: 'cms_status' },
                    { title: that.CMS_CONST.LABEL.CREATED_ON, data: 'cms_createdOn' },
                    { title: that.CMS_CONST.LABEL.MODIFIED_ON, data: 'cms_modifyOn' },
                    { title: that.CMS_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.CMS_CONST.LABEL.SR_NO:
                                break;
                            case that.CMS_CONST.LABEL.CMS_TITLE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.CMS_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.CMS_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.CMS_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.CMS_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            case that.CMS_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.CMS_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.CMS_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.CMS_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.CMS_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                        width: '10%',
                        orderable: false,
                        render: function (a, e, t, n) {
                            return ((n.row + 1) + (n.settings._iDisplayStart));
                        }
                    },
                    {
                        targets: 1,
                        width: '30%',
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
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.cms_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.cms_status].title + '</span>';
                        }
                    },
                    {
                        targets: 3,
                        width: '20%'
                    },
                    {
                        targets: 4,
                        width: '20%'
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
    CmsListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/cms-management/edit/' + this.id]);
    };
    CmsListComponent.prototype.delete = function (e) {
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
                            component: 'cms',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    CmsListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'cms',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    CmsListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    CmsListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    CmsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-cms-list',
            template: __webpack_require__(/*! raw-loader!./cms-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/cms-list/cms-list.component.html"),
            styles: [__webpack_require__(/*! ./cms-list.component.scss */ "./src/app/views/pages/cms-management/cms-list/cms-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], CmsListComponent);
    return CmsListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/cms-management/cms-management.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/cms-management/cms-management.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Ntcy1tYW5hZ2VtZW50L2Ntcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/cms-management/cms-management.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/cms-management/cms-management.component.ts ***!
  \************************************************************************/
/*! exports provided: CmsManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsManagementComponent", function() { return CmsManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var CmsManagementComponent = /** @class */ (function () {
    function CmsManagementComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].CMS);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].cmsManagement);
    }
    CmsManagementComponent.prototype.ngOnInit = function () {
    };
    CmsManagementComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    CmsManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-cms-management',
            template: __webpack_require__(/*! raw-loader!./cms-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/cms-management/cms-management.component.html"),
            styles: [__webpack_require__(/*! ./cms-management.component.scss */ "./src/app/views/pages/cms-management/cms-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], CmsManagementComponent);
    return CmsManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/cms-management/cms-management.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/cms-management/cms-management.module.ts ***!
  \*********************************************************************/
/*! exports provided: CmsManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsManagementModule", function() { return CmsManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cms_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cms-management.component */ "./src/app/views/pages/cms-management/cms-management.component.ts");
/* harmony import */ var _cms_list_cms_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cms-list/cms-list.component */ "./src/app/views/pages/cms-management/cms-list/cms-list.component.ts");
/* harmony import */ var _add_edit_cms_add_edit_cms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-cms/add-edit-cms.component */ "./src/app/views/pages/cms-management/add-edit-cms/add-edit-cms.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_cms_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/cms.effects */ "./src/app/views/pages/cms-management/state/cms.effects.ts");
/* harmony import */ var _state_cms_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/cms.reducer */ "./src/app/views/pages/cms-management/state/cms.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _cms_management_component__WEBPACK_IMPORTED_MODULE_3__["CmsManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _cms_list_cms_list_component__WEBPACK_IMPORTED_MODULE_4__["CmsListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].CMS.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_cms_add_edit_cms_component__WEBPACK_IMPORTED_MODULE_5__["AddCmsComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].CMS.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_cms_add_edit_cms_component__WEBPACK_IMPORTED_MODULE_5__["EditCmsComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].CMS.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var CmsManagementModule = /** @class */ (function () {
    function CmsManagementModule() {
    }
    CmsManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cms_management_component__WEBPACK_IMPORTED_MODULE_3__["CmsManagementComponent"], _cms_list_cms_list_component__WEBPACK_IMPORTED_MODULE_4__["CmsListComponent"], _add_edit_cms_add_edit_cms_component__WEBPACK_IMPORTED_MODULE_5__["AddCmsComponent"], _add_edit_cms_add_edit_cms_component__WEBPACK_IMPORTED_MODULE_5__["EditCmsComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_cms_effects__WEBPACK_IMPORTED_MODULE_12__["CMSEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("cms", _state_cms_reducer__WEBPACK_IMPORTED_MODULE_13__["cmsReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"]
            ]
        })
    ], CmsManagementModule);
    return CmsManagementModule;
}());



/***/ }),

/***/ "./src/app/views/pages/cms-management/state/cms.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/cms-management/state/cms.actions.ts ***!
  \*****************************************************************/
/*! exports provided: CMSActionTypes, LoadCMS, LoadCMSSuccess, LoadCMSFail, UpdateCMS, UpdateCMSSuccess, UpdateCMSFail, DeleteCMS, DeleteCMSSuccess, DeleteCMSFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddCMS, AddCMSSuccess, AddCMSFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSActionTypes", function() { return CMSActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCMS", function() { return LoadCMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCMSSuccess", function() { return LoadCMSSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCMSFail", function() { return LoadCMSFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCMS", function() { return UpdateCMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCMSSuccess", function() { return UpdateCMSSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCMSFail", function() { return UpdateCMSFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCMS", function() { return DeleteCMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCMSSuccess", function() { return DeleteCMSSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCMSFail", function() { return DeleteCMSFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCMS", function() { return AddCMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCMSSuccess", function() { return AddCMSSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCMSFail", function() { return AddCMSFail; });
var CMSActionTypes;
(function (CMSActionTypes) {
    CMSActionTypes["UPDATE_STATUS"] = "[CMS] Update Status";
    CMSActionTypes["UPDATE_STATUS_SUCCESS"] = "[CMS]  Update Status Success";
    CMSActionTypes["UPDATE_STATUS_FAIL"] = "[CMS]  Update Status Fail";
    CMSActionTypes["LOAD_CMS"] = "[CMS] Load CMS";
    CMSActionTypes["LOAD_CMS_SUCCESS"] = "[CMS] Load CMS Success";
    CMSActionTypes["LOAD_CMS_FAIL"] = "[CMS] Load CMS Fail";
    CMSActionTypes["UPDATE_CMS"] = "[CMS] Update CMS";
    CMSActionTypes["UPDATE_CMS_SUCCESS"] = "[CMS] Update CMS Success";
    CMSActionTypes["UPDATE_CMS_FAIL"] = "[CMS] Update CMS Fail";
    CMSActionTypes["DELETE_CMS"] = "[CMS] Delete CMS";
    CMSActionTypes["DELETE_CMS_SUCCESS"] = "[CMS] Delete CMS Success";
    CMSActionTypes["DELETE_CMS_FAIL"] = "[CMS] Delete CMS Fail";
    CMSActionTypes["ADD_CMS"] = "[CMS] Upload Data";
    CMSActionTypes["ADD_CMS_SUCCESS"] = "[CMS] Upload Data Success";
    CMSActionTypes["ADD_CMS_FAIL"] = "[CMS] Upload Data Fail";
})(CMSActionTypes || (CMSActionTypes = {}));
var LoadCMS = /** @class */ (function () {
    function LoadCMS(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.LOAD_CMS;
    }
    LoadCMS.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadCMS;
}());

var LoadCMSSuccess = /** @class */ (function () {
    function LoadCMSSuccess(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.LOAD_CMS_SUCCESS;
    }
    LoadCMSSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadCMSSuccess;
}());

var LoadCMSFail = /** @class */ (function () {
    function LoadCMSFail(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.LOAD_CMS_FAIL;
    }
    LoadCMSFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadCMSFail;
}());

var UpdateCMS = /** @class */ (function () {
    function UpdateCMS(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.UPDATE_CMS;
    }
    UpdateCMS.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateCMS;
}());

var UpdateCMSSuccess = /** @class */ (function () {
    function UpdateCMSSuccess(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.UPDATE_CMS_SUCCESS;
    }
    UpdateCMSSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateCMSSuccess;
}());

var UpdateCMSFail = /** @class */ (function () {
    function UpdateCMSFail(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.UPDATE_CMS_FAIL;
    }
    UpdateCMSFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateCMSFail;
}());

var DeleteCMS = /** @class */ (function () {
    function DeleteCMS(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.DELETE_CMS;
    }
    DeleteCMS.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteCMS;
}());

var DeleteCMSSuccess = /** @class */ (function () {
    function DeleteCMSSuccess(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.DELETE_CMS_SUCCESS;
    }
    DeleteCMSSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteCMSSuccess;
}());

var DeleteCMSFail = /** @class */ (function () {
    function DeleteCMSFail(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.DELETE_CMS_FAIL;
    }
    DeleteCMSFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteCMSFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddCMS = /** @class */ (function () {
    function AddCMS(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.ADD_CMS;
    }
    AddCMS.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddCMS;
}());

var AddCMSSuccess = /** @class */ (function () {
    function AddCMSSuccess(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.ADD_CMS_SUCCESS;
    }
    AddCMSSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddCMSSuccess;
}());

var AddCMSFail = /** @class */ (function () {
    function AddCMSFail(payload) {
        this.payload = payload;
        this.type = CMSActionTypes.ADD_CMS_FAIL;
    }
    AddCMSFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddCMSFail;
}());



/***/ }),

/***/ "./src/app/views/pages/cms-management/state/cms.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/cms-management/state/cms.effects.ts ***!
  \*****************************************************************/
/*! exports provided: CMSEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSEffect", function() { return CMSEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cms_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cms.actions */ "./src/app/views/pages/cms-management/state/cms.actions.ts");
/* harmony import */ var _cms_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cms-management.service */ "./src/app/views/pages/cms-management/cms-management.service.ts");





// import { StudentManagementService } from "../student-management.service";


var CMSEffect = /** @class */ (function () {
    function CMSEffect(actions$, cmsService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsService = cmsService;
        this.deleteCMS$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cms_actions__WEBPACK_IMPORTED_MODULE_5__["CMSActionTypes"].DELETE_CMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.cmsService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteCMSSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteCMSFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cms_actions__WEBPACK_IMPORTED_MODULE_5__["CMSActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.cmsService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadCMS$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cms_actions__WEBPACK_IMPORTED_MODULE_5__["CMSActionTypes"].LOAD_CMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.cmsService.getCMSById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["LoadCMSSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["LoadCMSFail"](err));
            }));
        }));
        this.updateCMS$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cms_actions__WEBPACK_IMPORTED_MODULE_5__["CMSActionTypes"].UPDATE_CMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.cmsService.updateCMS(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateCMSSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateCMSFail"](err)); }));
        }));
        this.addCMS$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cms_actions__WEBPACK_IMPORTED_MODULE_5__["CMSActionTypes"].ADD_CMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.cmsService.addCMS(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["AddCMSSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _cms_actions__WEBPACK_IMPORTED_MODULE_5__["AddCMSFail"](err));
            }));
        }));
    }
    CMSEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _cms_management_service__WEBPACK_IMPORTED_MODULE_6__["CmsManagementService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CMSEffect.prototype, "deleteCMS$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CMSEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CMSEffect.prototype, "loadCMS$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CMSEffect.prototype, "updateCMS$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CMSEffect.prototype, "addCMS$", void 0);
    CMSEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _cms_management_service__WEBPACK_IMPORTED_MODULE_6__["CmsManagementService"]])
    ], CMSEffect);
    return CMSEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/cms-management/state/cms.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/cms-management/state/cms.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: initialState, cmsReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmsReducer", function() { return cmsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _cms_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms.actions */ "./src/app/views/pages/cms-management/state/cms.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function cmsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Grade load-----------------------------
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].LOAD_CMS_SUCCESS: {
            return action.payload;
        }
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].LOAD_CMS_FAIL: {
            return action.payload.error;
        }
        // for CMS delete-----------------------------
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].DELETE_CMS_SUCCESS: {
            return action.payload;
        }
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].DELETE_CMS_FAIL: {
            return action.payload.error;
        }
        // for CMS update-----------------------------
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].UPDATE_CMS_SUCCESS: {
            return action.payload;
        }
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].UPDATE_CMS_FAIL: {
            return action.payload.error;
        }
        // for CMS upadat  status-----------------------------
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for CMS add-----------------------------
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].ADD_CMS_SUCCESS: {
            return action.payload;
        }
        case _cms_actions__WEBPACK_IMPORTED_MODULE_0__["CMSActionTypes"].ADD_CMS_FAIL: {
            return action.payload.error;
        }
    }
}
var getCMSState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("cms");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getCMSState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-cms-management-cms-management-module.js.map