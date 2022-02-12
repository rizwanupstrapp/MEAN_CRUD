(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-help-topic-help-topic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'HELPTOPIC.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'HELPTOPIC.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/help-topic/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditHelpTopicForm\" [formGroup]=\"addEditHelpTopicForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- -----------control name en-->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELPTOPIC.LABEL.HELPTOPIC_NAME_EN' | translate}}*\n                            </label>\n                        </div>\n                        <!-- helpTopic_name_en -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'HELPTOPIC.PLACEHOLDERS.HELPTOPIC_NAME' | translate}}\" type=\"text\"\n                                formControlName=\"helpTopic_name_en\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpTopicForm.controls.helpTopic_name_en.errors }\">\n                            <div *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_name_en.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_name_en.errors?.required\">\n                                    {{'HELPTOPIC.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditHelpTopicForm.controls.helpTopic_name_en.errors?.minlength && !addEditHelpTopicForm.controls.helpTopic_name_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'HELPTOPIC.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditHelpTopicForm.controls.helpTopic_name_en.errors?.maxlength && !addEditHelpTopicForm.controls.helpTopic_name_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'HELPTOPIC.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_name_en.errors?.pattern\">\n                                    {{'HELPTOPIC.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELPTOPIC.LABEL.HELPTOPIC_CODE' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'HELPTOPIC.PLACEHOLDERS.HELPTOPIC_CODE' | translate}}\" type=\"text\"\n                                formControlName=\"helpTopic_code\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpTopicForm.controls.helpTopic_code.errors }\">\n                            <div *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_code.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_code.errors?.required\">\n                                    {{'HELPTOPIC.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditHelpTopicForm.controls.helpTopic_code.errors?.minlength && !addEditHelpTopicForm.controls.helpTopic_code.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'HELPTOPIC.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditHelpTopicForm.controls.helpTopic_code.errors?.maxlength && !addEditHelpTopicForm.controls.helpTopic_code.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'HELPTOPIC.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_code.errors?.pattern\">\n                                    {{'HELPTOPIC.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- <div class=\"form-group row\">\n                    \n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'HELPTOPIC.LABEL.HELPTOPIC_NAME_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'HELPTOPIC.PLACEHOLDERS.HELPTOPIC_NAME' | translate}}\" type=\"text\"\n                            formControlName=\"helpTopic_name_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditHelpTopicForm.controls.helpTopic_name_ar.errors }\">\n                        <div *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_name_ar.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_name_ar.errors?.required\">\n                                {{'HELPTOPIC.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditHelpTopicForm.controls.helpTopic_name_ar.errors?.minlength && !addEditHelpTopicForm.controls.helpTopic_name_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'HELPTOPIC.VALIDATION.MIN_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditHelpTopicForm.controls.helpTopic_name_ar.errors?.maxlength && !addEditHelpTopicForm.controls.helpTopic_name_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'HELPTOPIC.VALIDATION.MAX_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_name_ar.errors?.pattern\">\n                                {{'HELPTOPIC.VALIDATION.INVALID_TITLE' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELPTOPIC.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"helpTopic_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpTopicForm.controls.helpTopic_status.errors }\">\n                                <option value=\"{{'HELPTOPIC.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'HELPTOPIC.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'HELPTOPIC.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'HELPTOPIC.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpTopicForm.controls.helpTopic_status.errors?.required\">\n                                    {{'HELPTOPIC.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/help-topic/list\"\n                            class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" \n                            class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                           </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'HELPTOPIC.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/help-topic/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/help-topic.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/help-topic/help-topic.component.html ***!
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

/***/ "./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvaGVscC10b3BpYy9hZGQtZWRpdC1oZWxwLXRvcGljL2FkZC1lZGl0LWhlbHAtdG9waWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hlbHAtdG9waWMvYWRkLWVkaXQtaGVscC10b3BpYy9hZGQtZWRpdC1oZWxwLXRvcGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddHelpTopicComponent, EditHelpTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpTopicComponent", function() { return AddHelpTopicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHelpTopicComponent", function() { return EditHelpTopicComponent; });
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
/* harmony import */ var _state_help_topic_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/help-topic.actions */ "./src/app/views/pages/help-topic/state/help-topic.actions.ts");
/* harmony import */ var _state_help_topic_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/help-topic.reducer */ "./src/app/views/pages/help-topic/state/help-topic.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");















var AddHelpTopicComponent = /** @class */ (function () {
    function AddHelpTopicComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.HELPTOPIC_CONST = this.translate.instant('HELPTOPIC');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HELP_TOPIC'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.HELPTOPIC_CONST.MODULE_NAME);
    }
    AddHelpTopicComponent.prototype.ngOnInit = function () {
        this.buildAddEditHelpTopicForm();
    };
    AddHelpTopicComponent.prototype.buildAddEditHelpTopicForm = function () {
        this.addEditHelpTopicForm = this._formBuilder.group({
            helpTopic_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // helpTopic_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            helpTopic_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            helpTopic_status: ["ACTIVE", []],
        });
    };
    AddHelpTopicComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditHelpTopicForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditHelpTopicForm.value;
                    obj = {
                        helpTopic_name: [{
                                lang: 'EN',
                                title: form.helpTopic_name_en
                            }
                            // , {
                            //   lang: 'AR',
                            //   title: form.helpTopic_name_ar
                            // }
                        ],
                        helpTopic_code: form.helpTopic_code,
                        helpTopic_status: form.helpTopic_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_help_topic_actions__WEBPACK_IMPORTED_MODULE_12__["AddHelpTopic"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_help_topic_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/help-topic/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditHelpTopicForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddHelpTopicComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    AddHelpTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-help-topic',
            template: __webpack_require__(/*! raw-loader!./add-edit-help-topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-help-topic.component.scss */ "./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], AddHelpTopicComponent);
    return AddHelpTopicComponent;
}());

var EditHelpTopicComponent = /** @class */ (function () {
    function EditHelpTopicComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.HELPTOPIC_CONST = this.translate.instant('HELPTOPIC');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HELP_TOPIC'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.HELPTOPIC_CONST.MODULE_NAME);
    }
    EditHelpTopicComponent.prototype.ngOnInit = function () {
        this.buildAddEditHelpTopicForm();
        this.getHelpTopicDetails();
    };
    EditHelpTopicComponent.prototype.buildAddEditHelpTopicForm = function () {
        this.addEditHelpTopicForm = this._formBuilder.group({
            helpTopic_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //helpTopic_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            helpTopic_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            helpTopic_status: ["ACTIVE", []],
        });
    };
    EditHelpTopicComponent.prototype.getHelpTopicDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_help_topic_actions__WEBPACK_IMPORTED_MODULE_12__["LoadHelpTopic"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_help_topic_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            helpTopic_name_en: result.helpTopic_name.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            // helpTopic_name_ar: result.helpTopic_name.filter((obj) => obj.lang == "AR")[0].title,
                            helpTopic_code: result.helpTopic_code,
                            helpTopic_status: result.helpTopic_status != null && result.helpTopic_status != undefined ? result.helpTopic_status : "",
                        };
                        return [4 /*yield*/, this.addEditHelpTopicForm.patchValue(fd)];
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
    EditHelpTopicComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditHelpTopicForm.valid) {
                    form = this.addEditHelpTopicForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            helpTopic_name: [{
                                    lang: 'EN',
                                    title: form.helpTopic_name_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.helpTopic_name_ar
                                // }
                            ],
                            helpTopic_code: form.helpTopic_code,
                            helpTopic_status: form.helpTopic_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_help_topic_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateHelpTopic"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_help_topic_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/help-topic/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditHelpTopicForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditHelpTopicComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    EditHelpTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-help-topic',
            template: __webpack_require__(/*! raw-loader!./add-edit-help-topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-help-topic.component.scss */ "./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], EditHelpTopicComponent);
    return EditHelpTopicComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hlbHAtdG9waWMvaGVscC10b3BpYy1saXN0L2hlbHAtdG9waWMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HelpTopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTopicListComponent", function() { return HelpTopicListComponent; });
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
var HelpTopicListComponent = /** @class */ (function () {
    function HelpTopicListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.HELPTOPIC_CONST = [];
        this.searchObj = { field: 'helpTopic_name', helpTopic_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.HELPTOPIC_CONST = this.translate.instant('HELPTOPIC');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HELP_TOPIC'));
        titleService.setTitle(this.APPNAME + " | " + this.HELPTOPIC_CONST.MODULE_NAME);
    }
    HelpTopicListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    HelpTopicListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP_TOPIC.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP_TOPIC.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP_TOPIC.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP_TOPIC.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    HelpTopicListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    HelpTopicListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-help-topic-list', scripts).then(function () {
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
                    sProcessing: that.HELPTOPIC_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listHelpTopic,
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
                        title: that.HELPTOPIC_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.HELPTOPIC_CONST.LABEL.HELPTOPIC_NAME, data: 'helpTopic_name' },
                    { title: that.HELPTOPIC_CONST.LABEL.HELPTOPIC_CODE, data: 'helpTopic_code' },
                    { title: that.HELPTOPIC_CONST.LABEL.STATUS, data: 'helpTopic_status' },
                    { title: that.HELPTOPIC_CONST.LABEL.CREATED_ON, data: 'helpTopic_createdOn' },
                    { title: that.HELPTOPIC_CONST.LABEL.MODIFIED_ON, data: 'helpTopic_modifyOn' },
                    { title: that.HELPTOPIC_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.HELPTOPIC_CONST.LABEL.SR_NO:
                                break;
                            case that.HELPTOPIC_CONST.LABEL.HELPTOPIC_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HELPTOPIC_CONST.LABEL.HELPTOPIC_CODE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HELPTOPIC_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.HELPTOPIC_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.HELPTOPIC_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.HELPTOPIC_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.HELPTOPIC_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.HELPTOPIC_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.HELPTOPIC_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.HELPTOPIC_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.HELPTOPIC_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                            // let c = a.filter((obj) =>
                            //   (obj.lang == 'EN'))
                            return a.title;
                        }
                    },
                    {
                        targets: 2,
                        width: '20%',
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
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.helpTopic_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.helpTopic_status].title + '</span>';
                        }
                    },
                    {
                        targets: 4,
                        width: '10%',
                    },
                    {
                        targets: 5,
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
    HelpTopicListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/help-topic/edit/' + this.id]);
    };
    HelpTopicListComponent.prototype.delete = function (e) {
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
                            component: 'helpTopic',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpTopicListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'helpTopic',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    HelpTopicListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    HelpTopicListComponent.prototype.sentenceCase = function (str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    HelpTopicListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    HelpTopicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-help-topic-list',
            template: __webpack_require__(/*! raw-loader!./help-topic-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.html"),
            styles: [__webpack_require__(/*! ./help-topic-list.component.scss */ "./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], HelpTopicListComponent);
    return HelpTopicListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/help-topic/help-topic.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/help-topic/help-topic.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hlbHAtdG9waWMvaGVscC10b3BpYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/help-topic/help-topic.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/help-topic/help-topic.component.ts ***!
  \****************************************************************/
/*! exports provided: HelpTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTopicComponent", function() { return HelpTopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var HelpTopicComponent = /** @class */ (function () {
    function HelpTopicComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].HELPTOPIC);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].helpTopicManagement);
    }
    HelpTopicComponent.prototype.ngOnInit = function () {
    };
    HelpTopicComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    HelpTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-help-topic',
            template: __webpack_require__(/*! raw-loader!./help-topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help-topic/help-topic.component.html"),
            styles: [__webpack_require__(/*! ./help-topic.component.scss */ "./src/app/views/pages/help-topic/help-topic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HelpTopicComponent);
    return HelpTopicComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/help-topic/help-topic.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/help-topic/help-topic.module.ts ***!
  \*************************************************************/
/*! exports provided: HelpTopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTopicModule", function() { return HelpTopicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_help_topic_add_edit_help_topic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-help-topic/add-edit-help-topic.component */ "./src/app/views/pages/help-topic/add-edit-help-topic/add-edit-help-topic.component.ts");
/* harmony import */ var _help_topic_list_help_topic_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-topic-list/help-topic-list.component */ "./src/app/views/pages/help-topic/help-topic-list/help-topic-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_help_topic_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/help-topic.effects */ "./src/app/views/pages/help-topic/state/help-topic.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_help_topic_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/help-topic.reducer */ "./src/app/views/pages/help-topic/state/help-topic.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _help_topic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./help-topic.component */ "./src/app/views/pages/help-topic/help-topic.component.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _help_topic_component__WEBPACK_IMPORTED_MODULE_17__["HelpTopicComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _help_topic_list_help_topic_list_component__WEBPACK_IMPORTED_MODULE_4__["HelpTopicListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].HELP_TOPIC.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_help_topic_add_edit_help_topic_component__WEBPACK_IMPORTED_MODULE_3__["AddHelpTopicComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].HELP_TOPIC.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_help_topic_add_edit_help_topic_component__WEBPACK_IMPORTED_MODULE_3__["EditHelpTopicComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].HELP_TOPIC.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var HelpTopicModule = /** @class */ (function () {
    function HelpTopicModule() {
    }
    HelpTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_help_topic_component__WEBPACK_IMPORTED_MODULE_17__["HelpTopicComponent"], _help_topic_list_help_topic_list_component__WEBPACK_IMPORTED_MODULE_4__["HelpTopicListComponent"], _add_edit_help_topic_add_edit_help_topic_component__WEBPACK_IMPORTED_MODULE_3__["AddHelpTopicComponent"], _add_edit_help_topic_add_edit_help_topic_component__WEBPACK_IMPORTED_MODULE_3__["EditHelpTopicComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_help_topic_effects__WEBPACK_IMPORTED_MODULE_11__["HelpTopicEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("help-topic", _state_help_topic_reducer__WEBPACK_IMPORTED_MODULE_14__["HelpTopicReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], HelpTopicModule);
    return HelpTopicModule;
}());



/***/ }),

/***/ "./src/app/views/pages/help-topic/state/help-topic.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/help-topic/state/help-topic.actions.ts ***!
  \********************************************************************/
/*! exports provided: HelpTopicActionTypes, LoadHelpTopic, LoadHelpTopicSuccess, LoadHelpTopicFail, UpdateHelpTopic, UpdateHelpTopicSuccess, UpdateHelpTopicFail, DeleteHelpTopic, DeleteHelpTopicSuccess, DeleteHelpTopicFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddHelpTopic, AddHelpTopicSuccess, AddHelpTopicFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTopicActionTypes", function() { return HelpTopicActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHelpTopic", function() { return LoadHelpTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHelpTopicSuccess", function() { return LoadHelpTopicSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHelpTopicFail", function() { return LoadHelpTopicFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHelpTopic", function() { return UpdateHelpTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHelpTopicSuccess", function() { return UpdateHelpTopicSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHelpTopicFail", function() { return UpdateHelpTopicFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHelpTopic", function() { return DeleteHelpTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHelpTopicSuccess", function() { return DeleteHelpTopicSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHelpTopicFail", function() { return DeleteHelpTopicFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpTopic", function() { return AddHelpTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpTopicSuccess", function() { return AddHelpTopicSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpTopicFail", function() { return AddHelpTopicFail; });
var HelpTopicActionTypes;
(function (HelpTopicActionTypes) {
    HelpTopicActionTypes["UPDATE_STATUS"] = "[HELPTOPIC] Update Status";
    HelpTopicActionTypes["UPDATE_STATUS_SUCCESS"] = "[HELPTOPIC]  Update Status Success";
    HelpTopicActionTypes["UPDATE_STATUS_FAIL"] = "[HELPTOPIC]  Update Status Fail";
    HelpTopicActionTypes["LOAD_HELPTOPIC"] = "[HELPTOPIC] Load HELPTOPIC";
    HelpTopicActionTypes["LOAD_HELPTOPIC_SUCCESS"] = "[HELPTOPIC] Load HELPTOPIC Success";
    HelpTopicActionTypes["LOAD_HELPTOPIC_FAIL"] = "[HELPTOPIC] Load HELPTOPIC Fail";
    HelpTopicActionTypes["UPDATE_HELPTOPIC"] = "[HELPTOPIC] Update HELPTOPIC";
    HelpTopicActionTypes["UPDATE_HELPTOPIC_SUCCESS"] = "[HELPTOPIC] Update HELPTOPIC Success";
    HelpTopicActionTypes["UPDATE_HELPTOPIC_FAIL"] = "[HELPTOPIC] Update HELPTOPIC Fail";
    HelpTopicActionTypes["DELETE_HELPTOPIC"] = "[HELPTOPIC] Delete HELPTOPIC";
    HelpTopicActionTypes["DELETE_HELPTOPIC_SUCCESS"] = "[HELPTOPIC] Delete HELPTOPIC Success";
    HelpTopicActionTypes["DELETE_HELPTOPIC_FAIL"] = "[HELPTOPIC] Delete HELPTOPIC Fail";
    HelpTopicActionTypes["ADD_HELPTOPIC"] = "[HELPTOPIC] Upload Data";
    HelpTopicActionTypes["ADD_HELPTOPIC_SUCCESS"] = "[HELPTOPIC] Upload Data Success";
    HelpTopicActionTypes["ADD_HELPTOPIC_FAIL"] = "[HELPTOPIC] Upload Data Fail";
    HelpTopicActionTypes["UPLOAD_DATA"] = "[HELPTOPIC] Upload Data";
    HelpTopicActionTypes["UPLOAD_DATA_SUCCESS"] = "[HELPTOPIC] Upload Data Success";
    HelpTopicActionTypes["UPLOAD_DATA_FAIL"] = "[HELPTOPIC] Upload Data Fail";
})(HelpTopicActionTypes || (HelpTopicActionTypes = {}));
var LoadHelpTopic = /** @class */ (function () {
    function LoadHelpTopic(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.LOAD_HELPTOPIC;
    }
    LoadHelpTopic.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHelpTopic;
}());

var LoadHelpTopicSuccess = /** @class */ (function () {
    function LoadHelpTopicSuccess(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.LOAD_HELPTOPIC_SUCCESS;
    }
    LoadHelpTopicSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHelpTopicSuccess;
}());

var LoadHelpTopicFail = /** @class */ (function () {
    function LoadHelpTopicFail(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.LOAD_HELPTOPIC_FAIL;
    }
    LoadHelpTopicFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHelpTopicFail;
}());

var UpdateHelpTopic = /** @class */ (function () {
    function UpdateHelpTopic(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.UPDATE_HELPTOPIC;
    }
    UpdateHelpTopic.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHelpTopic;
}());

var UpdateHelpTopicSuccess = /** @class */ (function () {
    function UpdateHelpTopicSuccess(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.UPDATE_HELPTOPIC_SUCCESS;
    }
    UpdateHelpTopicSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHelpTopicSuccess;
}());

var UpdateHelpTopicFail = /** @class */ (function () {
    function UpdateHelpTopicFail(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.UPDATE_HELPTOPIC_FAIL;
    }
    UpdateHelpTopicFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHelpTopicFail;
}());

var DeleteHelpTopic = /** @class */ (function () {
    function DeleteHelpTopic(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.DELETE_HELPTOPIC;
    }
    DeleteHelpTopic.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHelpTopic;
}());

var DeleteHelpTopicSuccess = /** @class */ (function () {
    function DeleteHelpTopicSuccess(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.DELETE_HELPTOPIC_SUCCESS;
    }
    DeleteHelpTopicSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHelpTopicSuccess;
}());

var DeleteHelpTopicFail = /** @class */ (function () {
    function DeleteHelpTopicFail(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.DELETE_HELPTOPIC_FAIL;
    }
    DeleteHelpTopicFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHelpTopicFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddHelpTopic = /** @class */ (function () {
    function AddHelpTopic(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.ADD_HELPTOPIC;
    }
    AddHelpTopic.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHelpTopic;
}());

var AddHelpTopicSuccess = /** @class */ (function () {
    function AddHelpTopicSuccess(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.ADD_HELPTOPIC_SUCCESS;
    }
    AddHelpTopicSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHelpTopicSuccess;
}());

var AddHelpTopicFail = /** @class */ (function () {
    function AddHelpTopicFail(payload) {
        this.payload = payload;
        this.type = HelpTopicActionTypes.ADD_HELPTOPIC_FAIL;
    }
    AddHelpTopicFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHelpTopicFail;
}());



/***/ }),

/***/ "./src/app/views/pages/help-topic/state/help-topic.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/help-topic/state/help-topic.effects.ts ***!
  \********************************************************************/
/*! exports provided: HelpTopicEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTopicEffect", function() { return HelpTopicEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-topic.actions */ "./src/app/views/pages/help-topic/state/help-topic.actions.ts");
/* harmony import */ var _help_topic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../help-topic.service */ "./src/app/views/pages/help-topic/help-topic.service.ts");







var HelpTopicEffect = /** @class */ (function () {
    function HelpTopicEffect(actions$, HelpTopicService) {
        var _this = this;
        this.actions$ = actions$;
        this.HelpTopicService = HelpTopicService;
        this.deleteHelpTopic$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["HelpTopicActionTypes"].DELETE_HELPTOPIC), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.HelpTopicService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteHelpTopicSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteHelpTopicFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["HelpTopicActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HelpTopicService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadHelpTopic$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["HelpTopicActionTypes"].LOAD_HELPTOPIC), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.HelpTopicService.getHelpTopicById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["LoadHelpTopicSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["LoadHelpTopicFail"](err));
            }));
        }));
        this.updateHelpTopic$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["HelpTopicActionTypes"].UPDATE_HELPTOPIC), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HelpTopicService.updateHelpTopic(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateHelpTopicSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateHelpTopicFail"](err)); }));
        }));
        this.addHelpTopic$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["HelpTopicActionTypes"].ADD_HELPTOPIC), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HelpTopicService.addHelpTopic(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["AddHelpTopicSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_topic_actions__WEBPACK_IMPORTED_MODULE_5__["AddHelpTopicFail"](err));
            }));
        }));
    }
    HelpTopicEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _help_topic_service__WEBPACK_IMPORTED_MODULE_6__["HelpTopicService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpTopicEffect.prototype, "deleteHelpTopic$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpTopicEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpTopicEffect.prototype, "loadHelpTopic$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpTopicEffect.prototype, "updateHelpTopic$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpTopicEffect.prototype, "addHelpTopic$", void 0);
    HelpTopicEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _help_topic_service__WEBPACK_IMPORTED_MODULE_6__["HelpTopicService"]])
    ], HelpTopicEffect);
    return HelpTopicEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/help-topic/state/help-topic.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/help-topic/state/help-topic.reducer.ts ***!
  \********************************************************************/
/*! exports provided: initialState, HelpTopicReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTopicReducer", function() { return HelpTopicReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-topic.actions */ "./src/app/views/pages/help-topic/state/help-topic.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function HelpTopicReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Help Topic load-----------------------------
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].LOAD_HELPTOPIC_SUCCESS: {
            return action.payload;
        }
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].LOAD_HELPTOPIC_FAIL: {
            return action.payload.error;
        }
        // for Help Topic delete-----------------------------
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].DELETE_HELPTOPIC_SUCCESS: {
            return action.payload;
        }
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].DELETE_HELPTOPIC_FAIL: {
            return action.payload.error;
        }
        // for Help Topic update-----------------------------
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].UPDATE_HELPTOPIC_SUCCESS: {
            return action.payload;
        }
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].UPDATE_HELPTOPIC_FAIL: {
            return action.payload.error;
        }
        // for Help Topic upadat status-----------------------------
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Help Topic add-----------------------------
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].ADD_HELPTOPIC_SUCCESS: {
            return action.payload;
        }
        case _help_topic_actions__WEBPACK_IMPORTED_MODULE_0__["HelpTopicActionTypes"].ADD_HELPTOPIC_FAIL: {
            return action.payload.error;
        }
    }
}
var getHelpTopicState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("help-topic");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getHelpTopicState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-help-topic-help-topic-module.js.map