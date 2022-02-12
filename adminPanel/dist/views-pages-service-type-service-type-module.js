(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-service-type-service-type-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'SERVICETYPE.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'SERVICETYPE.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/service-type/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditServiceTypeForm\" [formGroup]=\"addEditServiceTypeForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- <div *ngIf=\"Editor\">    \n                    <ckeditor  #editor [editor]=\"Editor\"  class=\"form-control\" type=\"text\" placeholder=\"Enter Contant\" formControlName=\"cms_content_ar\"            [ngClass]=\"{ 'is-invalid': submitted && addEditServiceTypeForm.controls.cms_content_ar.errors }\"></ckeditor></div> -->\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-3\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'SERVICETYPE.LABEL.IMAGE' | translate}}*\n                        </label>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                </div>\n                                <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                <i class=\"fa fa-pen\"></i>\n                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                    (change)=\"onSelectFile($event)\">\n                            </label>\n                                <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                <i class=\"fa fa-times\"></i>\n                            </span>\n                            </div>\n                            <span class=\"form-text text-muted\">Allowed file types: png, jpg, jpeg.</span>\n                        </div>\n                    </div>\n                </div>\n                <!-- -----------service type name en-->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'SERVICETYPE.LABEL.SERVICETYPE_NAME_EN' | translate}}*\n                        </label>\n                        </div>\n                        <!-- service_name_en -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'SERVICETYPE.PLACEHOLDERS.SERVICETYPE_NAME' | translate}}\" type=\"text\" formControlName=\"serviceType_name_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditServiceTypeForm.controls.serviceType_name_en.errors }\">\n                            <div *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_name_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_name_en.errors?.required\">\n                                    {{'SERVICETYPE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditServiceTypeForm.controls.serviceType_name_en.errors?.minlength && !addEditServiceTypeForm.controls.serviceType_name_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'SERVICETYPE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditServiceTypeForm.controls.serviceType_name_en.errors?.maxlength && !addEditServiceTypeForm.controls.serviceType_name_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'SERVICETYPE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_name_en.errors?.pattern\">\n                                    {{'SERVICETYPE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICETYPE.LABEL.SERVICETYPE_CODE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- servicetype_code -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'SERVICETYPE.PLACEHOLDERS.SERVICETYPE_CODE' | translate}}\" type=\"text\" formControlName=\"serviceType_code\" [ngClass]=\"{ 'is-invalid': submitted && addEditServiceTypeForm.controls.serviceType_code.errors }\">\n                            <div *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_code.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_code.errors?.required\">\n                                    {{'SERVICETYPE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditServiceTypeForm.controls.serviceType_code.errors?.minlength && !addEditServiceTypeForm.controls.serviceType_code.errors?.pattern\" class=\"lbl-err\">\n                                    {{'SERVICETYPE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditServiceTypeForm.controls.serviceType_code.errors?.maxlength && !addEditServiceTypeForm.controls.serviceType_code.errors?.pattern\" class=\"lbl-err\">\n                                    {{'SERVICETYPE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_code.errors?.pattern\">\n                                    {{'SERVICETYPE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </div>\n\n                <!--             \n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'SERVICETYPE.LABEL.SERVICETYPE_NAME_AR' | translate}}*\n                        </label>\n                    </div>\n                  \n                    <div class=\"col-lg-12\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'SERVICETYPE.PLACEHOLDERS.SERVICETYPE_NAME' | translate}}\" type=\"text\"\n                            formControlName=\"serviceType_name_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditServiceTypeForm.controls.serviceType_name_ar.errors }\">\n                        <div *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_name_ar.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p\n                                *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_name_ar.errors?.required\">\n                                {{'SERVICETYPE.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditServiceTypeForm.controls.serviceType_name_ar.errors?.minlength && !addEditServiceTypeForm.controls.serviceType_name_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'SERVICETYPE.VALIDATION.MIN_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditServiceTypeForm.controls.serviceType_name_ar.errors?.maxlength && !addEditServiceTypeForm.controls.serviceType_name_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'SERVICETYPE.VALIDATION.MAX_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_name_ar.errors?.pattern\">\n                                {{'SERVICETYPE.VALIDATION.INVALID_TITLE' | translate }}\n                            </p>\n                        </div>\n\n\n                    </div>\n                    </div>\n                </div> -->\n                <!-- -----------service type no. seats -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'SERVICETYPE.LABEL.SERVICETYPE_SEATS' | translate}}*\n                        </label>\n                        </div>\n                        <!-- servicetype_noOfSeat -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'SERVICETYPE.PLACEHOLDERS.SERVICETYPE_SEATS' | translate}}\" type=\"text\" formControlName=\"serviceType_noOfSeats\" [ngClass]=\"{ 'is-invalid': submitted && addEditServiceTypeForm.controls.serviceType_noOfSeats.errors }\">\n                            <div *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_noOfSeats.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_noOfSeats.errors?.required\">\n                                    {{'SERVICETYPE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_noOfSeats.errors?.pattern\">\n                                    {{'SERVICETYPE.VALIDATION.INVALID_SEATS' | translate }}\n                                </p>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICETYPE.LABEL.SERVICETYPE_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- serviceType_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"serviceType_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditServiceTypeForm.controls.serviceType_status.errors }\">\n                                <option value=\"{{'SERVICETYPE.PLACEHOLDERS.ACTIVE' | translate}}\">{{'SERVICETYPE.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'SERVICETYPE.PLACEHOLDERS.INACTIVE' | translate}}\">{{'SERVICETYPE.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditServiceTypeForm.controls.serviceType_status.errors?.required\">\n                                    {{'SERVICETYPE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/service-type/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                        </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/service-type-list/service-type-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/service-type/service-type-list/service-type-list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'SERVICETYPE.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/service-type/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/service-type.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/service-type/service-type.component.html ***!
  \************************************************************************************************/
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

/***/ "./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvc2VydmljZS10eXBlL2FkZC1lZGl0LXNlcnZpY2UtdHlwZS9hZGQtZWRpdC1zZXJ2aWNlLXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NlcnZpY2UtdHlwZS9hZGQtZWRpdC1zZXJ2aWNlLXR5cGUvYWRkLWVkaXQtc2VydmljZS10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddServiceTypeComponent, EditServiceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceTypeComponent", function() { return AddServiceTypeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceTypeComponent", function() { return EditServiceTypeComponent; });
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
/* harmony import */ var _state_service_type_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/service-type.actions */ "./src/app/views/pages/service-type/state/service-type.actions.ts");
/* harmony import */ var _state_service_type_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/service-type.reducer */ "./src/app/views/pages/service-type/state/service-type.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
















var AddServiceTypeComponent = /** @class */ (function () {
    function AddServiceTypeComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate) {
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
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.SERVICETYPE_CONST = this.translate.instant('SERVICETYPE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_TYPE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.SERVICETYPE_CONST.MODULE_NAME);
    }
    AddServiceTypeComponent.prototype.ngOnInit = function () {
        this.buildAddEditServiveTypeForm();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    AddServiceTypeComponent.prototype.buildAddEditServiveTypeForm = function () {
        this.addEditServiceTypeForm = this._formBuilder.group({
            serviceType_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // serviceType_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            serviceType_noOfSeats: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].noOfSeats)]],
            serviceType_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            serviceType_status: ["ACTIVE", []],
        });
    };
    AddServiceTypeComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    _this.url = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
            }
        }
    };
    AddServiceTypeComponent.prototype.imageRemove = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    AddServiceTypeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditServiceTypeForm.valid) {
                    if (this.url.length > 200) {
                        obj = {
                            updType: 'image',
                            updDocs: this.imageFile
                        };
                        this.saveData();
                    }
                    else {
                        this.toastr.error('Please Select Image');
                    }
                }
                else if (!this.addEditServiceTypeForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddServiceTypeComponent.prototype.saveData = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        var result = this.addEditServiceTypeForm.value;
        var fd = new FormData();
        fd.append('serviceType_name', JSON.stringify([{
                lang: 'EN',
                title: result.serviceType_name_en
            }
            // , {
            //   lang: 'AR',
            //   title: result.serviceType_name_ar
            // }
        ]));
        fd.append('serviceType_code', result.serviceType_code);
        fd.append('serviceType_noOfSeats', result.serviceType_noOfSeats);
        fd.append('serviceType_status', result.serviceType_status);
        fd.append('serviceType_image', this.imageFile);
        this.stateSubscription = this.store.dispatch(new _state_service_type_actions__WEBPACK_IMPORTED_MODULE_12__["AddServiceType"](fd));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_service_type_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    _this.toastr.success(data['message']);
                    _this.stateSubscription.unsubscribe();
                    _this.router.navigate(['/service-type/list']);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    _this.toastr.error(data['message']);
                    _this.stateSubscription.unsubscribe();
                }
            }
        });
    };
    AddServiceTypeComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    AddServiceTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-service-type',
            template: __webpack_require__(/*! raw-loader!./add-edit-service-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-service-type.component.scss */ "./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], AddServiceTypeComponent);
    return AddServiceTypeComponent;
}());

var EditServiceTypeComponent = /** @class */ (function () {
    function EditServiceTypeComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate) {
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
        this.url = '../../../../../assets/media/newMedia/add.png';
        // SET SUBHEAD AND TITLE
        this.SERVICETYPE_CONST = this.translate.instant('SERVICETYPE');
        this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_TYPE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.SERVICETYPE_CONST.MODULE_NAME);
    }
    EditServiceTypeComponent.prototype.ngOnInit = function () {
        this.buildAddEditServiceTypeForm();
        this.getServiceTypeDetails();
    };
    EditServiceTypeComponent.prototype.buildAddEditServiceTypeForm = function () {
        this.addEditServiceTypeForm = this._formBuilder.group({
            serviceType_name_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            // serviceType_name_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            serviceType_noOfSeats: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].noOfSeats)]],
            serviceType_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            serviceType_status: ["ACTIVE", []]
        });
    };
    EditServiceTypeComponent.prototype.getServiceTypeDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_service_type_actions__WEBPACK_IMPORTED_MODULE_12__["LoadServiceType"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_service_type_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        result = data['data'];
                        fd = {
                            serviceType_name_en: result.serviceType_name.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            // serviceType_name_ar: result.serviceType_name.filter((obj) => obj.lang == "AR")[0].title,
                            serviceType_noOfSeats: result.serviceType_noOfSeats,
                            serviceType_code: result.serviceType_code,
                            serviceType_status: result.serviceType_status != null && result.serviceType_status != undefined ? result.serviceType_status : "",
                        };
                        this.imageFile = result.serviceType_image;
                        this.url = result.serviceType_image;
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.addEditServiceTypeForm.patchValue(fd);
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditServiceTypeComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    _this.url = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
            }
        }
    };
    EditServiceTypeComponent.prototype.imageRemove = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    EditServiceTypeComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.addEditServiceTypeForm.valid) {
            if (this.imageFile) {
                this.saveData();
            }
            else {
                this.toastr.error('Please Select Image');
            }
        }
        else if (!this.addEditServiceTypeForm.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditServiceTypeComponent.prototype.saveData = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        var result = this.addEditServiceTypeForm.value;
        var fd = new FormData();
        fd.append('serviceType_name', JSON.stringify([{
                lang: 'EN',
                title: result.serviceType_name_en
            }
            // , {
            //   lang: 'AR',
            //   title: result.serviceType_name_ar
            // }
        ]));
        fd.append('serviceType_code', result.serviceType_code);
        fd.append('serviceType_noOfSeats', result.serviceType_noOfSeats);
        fd.append('serviceType_status', result.serviceType_status);
        fd.append('serviceType_image', this.imageFile);
        var obj = {
            id: this.id,
            data: fd
        };
        this.stateSubscription = this.store.dispatch(new _state_service_type_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateServiceType"](obj));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_service_type_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    _this.toastr.success(data['message']);
                    _this.stateSubscription.unsubscribe();
                    _this.router.navigate(['/service-type/list']);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    _this.toastr.error(data['message']);
                }
            }
        });
    };
    EditServiceTypeComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    EditServiceTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-service-type',
            template: __webpack_require__(/*! raw-loader!./add-edit-service-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-service-type.component.scss */ "./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], EditServiceTypeComponent);
    return EditServiceTypeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/service-type/service-type-list/service-type-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/service-type/service-type-list/service-type-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NlcnZpY2UtdHlwZS9zZXJ2aWNlLXR5cGUtbGlzdC9zZXJ2aWNlLXR5cGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/service-type/service-type-list/service-type-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/service-type/service-type-list/service-type-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServiceTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeListComponent", function() { return ServiceTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../api-constants */ "./src/api-constants.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");













function _window() {
    // return the global native browser window object
    return window;
}
var ServiceTypeListComponent = /** @class */ (function () {
    function ServiceTypeListComponent(subheaderService, localStorageService, _script, router, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.status = "";
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.SERVICETYPE_CONST = [];
        this.searchObj = { field: "serviceType_name", serviceType_status: "", search: "" };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.SERVICETYPE_CONST = this.translate.instant("SERVICETYPE");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.SERVICE_TYPE"));
        titleService.setTitle(this.APPNAME + " | " + this.SERVICETYPE_CONST.MODULE_NAME);
    }
    ServiceTypeListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    ServiceTypeListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_TYPE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_TYPE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_TYPE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_TYPE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    ServiceTypeListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    ServiceTypeListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script.loadScripts("kt-service-type-list", scripts).then(function () {
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
                    sProcessing: that.SERVICETYPE_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listServiceType,
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    },
                },
                columns: [
                    {
                        title: that.SERVICETYPE_CONST.LABEL.SR_NO,
                        data: null,
                    },
                    {
                        title: that.SERVICETYPE_CONST.LABEL.SERVICETYPE_NAME,
                        data: "serviceType_name",
                    },
                    {
                        title: that.SERVICETYPE_CONST.LABEL.SERVICETYPE_IMAGE,
                        data: "serviceType_image",
                    },
                    {
                        title: that.SERVICETYPE_CONST.LABEL.STATUS,
                        data: "serviceType_status",
                    },
                    {
                        title: that.SERVICETYPE_CONST.LABEL.CREATED_ON,
                        data: "serviceType_createdOn",
                    },
                    {
                        title: that.SERVICETYPE_CONST.LABEL.MODIFIED_ON,
                        data: "serviceType_modifyOn",
                    },
                    { title: that.SERVICETYPE_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api()
                        .columns()
                        .every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.SERVICETYPE_CONST.LABEL.SR_NO:
                                break;
                            case that.SERVICETYPE_CONST.LABEL.SERVICETYPE_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.SERVICETYPE_CONST.LABEL.SERVICETYPE_IMAGE:
                                break;
                            case that.SERVICETYPE_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                <option value=\"\">" + that.SERVICETYPE_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.SERVICETYPE_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.SERVICETYPE_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.SERVICETYPE_CONST.LABEL.CREATED_ON:
                            //   input = $(
                            //     `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //     this.index() +
                            //     `"/>`
                            //   );
                            //   break;
                            // case that.SERVICETYPE_CONST.LABEL.MODIFIED_ON:
                            //   input = $(
                            //     `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //     this.index() +
                            //     `"/>`
                            //   );
                            //   break;
                            case that.SERVICETYPE_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.SERVICETYPE_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.SERVICETYPE_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                        width: "20%",
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
                        width: "5%",
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
                        orderable: false,
                        render: function (a, e, t, n) {
                            return '<img src="' + a + '" height="80px" width="80px">';
                        },
                    },
                    {
                        targets: 3,
                        width: "15%",
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
                                status[row.serviceType_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.serviceType_status].title +
                                "</span>");
                        },
                    },
                    {
                        targets: 4,
                        width: "10%",
                    },
                    {
                        targets: 5,
                        width: "10%",
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
    ServiceTypeListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(["/service-type/edit/" + this.id]);
    };
    ServiceTypeListComponent.prototype.delete = function (e) {
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
                            component: "serviceType",
                            click: "delete",
                            id: this.id,
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceTypeListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: "serviceType",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    ServiceTypeListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    ServiceTypeListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
    ]; };
    ServiceTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-service-type-list",
            template: __webpack_require__(/*! raw-loader!./service-type-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/service-type-list/service-type-list.component.html"),
            styles: [__webpack_require__(/*! ./service-type-list.component.scss */ "./src/app/views/pages/service-type/service-type-list/service-type-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], ServiceTypeListComponent);
    return ServiceTypeListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/service-type/service-type.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/service-type/service-type.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NlcnZpY2UtdHlwZS9zZXJ2aWNlLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/service-type/service-type.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/service-type/service-type.component.ts ***!
  \********************************************************************/
/*! exports provided: ServiceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeComponent", function() { return ServiceTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var ServiceTypeComponent = /** @class */ (function () {
    function ServiceTypeComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].SERVICETYPE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].serviceTypeManagement);
    }
    ServiceTypeComponent.prototype.ngOnInit = function () {
    };
    ServiceTypeComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    ServiceTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-service-type',
            template: __webpack_require__(/*! raw-loader!./service-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-type/service-type.component.html"),
            styles: [__webpack_require__(/*! ./service-type.component.scss */ "./src/app/views/pages/service-type/service-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ServiceTypeComponent);
    return ServiceTypeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/service-type/service-type.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/service-type/service-type.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeModule", function() { return ServiceTypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-type.component */ "./src/app/views/pages/service-type/service-type.component.ts");
/* harmony import */ var _add_edit_service_type_add_edit_service_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-service-type/add-edit-service-type.component */ "./src/app/views/pages/service-type/add-edit-service-type/add-edit-service-type.component.ts");
/* harmony import */ var _service_type_list_service_type_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-type-list/service-type-list.component */ "./src/app/views/pages/service-type/service-type-list/service-type-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_service_type_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/service-type.effects */ "./src/app/views/pages/service-type/state/service-type.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_service_type_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/service-type.reducer */ "./src/app/views/pages/service-type/state/service-type.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _service_type_component__WEBPACK_IMPORTED_MODULE_3__["ServiceTypeComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _service_type_list_service_type_list_component__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].SERVICE_TYPE.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_service_type_add_edit_service_type_component__WEBPACK_IMPORTED_MODULE_4__["AddServiceTypeComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].SERVICE_TYPE.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_service_type_add_edit_service_type_component__WEBPACK_IMPORTED_MODULE_4__["EditServiceTypeComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].SERVICE_TYPE.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var ServiceTypeModule = /** @class */ (function () {
    function ServiceTypeModule() {
    }
    ServiceTypeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_service_type_component__WEBPACK_IMPORTED_MODULE_3__["ServiceTypeComponent"], _service_type_list_service_type_list_component__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeListComponent"], _add_edit_service_type_add_edit_service_type_component__WEBPACK_IMPORTED_MODULE_4__["AddServiceTypeComponent"], _add_edit_service_type_add_edit_service_type_component__WEBPACK_IMPORTED_MODULE_4__["EditServiceTypeComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_service_type_effects__WEBPACK_IMPORTED_MODULE_12__["ServiceTypeEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("service-type", _state_service_type_reducer__WEBPACK_IMPORTED_MODULE_15__["ServiceTypeReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]
            ]
        })
    ], ServiceTypeModule);
    return ServiceTypeModule;
}());



/***/ }),

/***/ "./src/app/views/pages/service-type/state/service-type.actions.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/service-type/state/service-type.actions.ts ***!
  \************************************************************************/
/*! exports provided: ServiceTypeActionTypes, LoadServiceType, LoadServiceTypeSuccess, LoadServiceTypeFail, UpdateServiceType, UpdateServiceTypeSuccess, UpdateServiceTypeFail, DeleteServiceType, DeleteServiceTypeSuccess, DeleteServiceTypeFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddServiceType, AddServiceTypeSuccess, AddServiceTypeFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeActionTypes", function() { return ServiceTypeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadServiceType", function() { return LoadServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadServiceTypeSuccess", function() { return LoadServiceTypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadServiceTypeFail", function() { return LoadServiceTypeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceType", function() { return UpdateServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceTypeSuccess", function() { return UpdateServiceTypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceTypeFail", function() { return UpdateServiceTypeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceType", function() { return DeleteServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceTypeSuccess", function() { return DeleteServiceTypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceTypeFail", function() { return DeleteServiceTypeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceType", function() { return AddServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceTypeSuccess", function() { return AddServiceTypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceTypeFail", function() { return AddServiceTypeFail; });
var ServiceTypeActionTypes;
(function (ServiceTypeActionTypes) {
    ServiceTypeActionTypes["UPDATE_STATUS"] = "[SERVICETYPE] Update Status";
    ServiceTypeActionTypes["UPDATE_STATUS_SUCCESS"] = "[SERVICETYPE]  Update Status Success";
    ServiceTypeActionTypes["UPDATE_STATUS_FAIL"] = "[SERVICETYPE]  Update Status Fail";
    ServiceTypeActionTypes["LOAD_SERVICETYPE"] = "[SERVICETYPE] Load SERVICETYPE";
    ServiceTypeActionTypes["LOAD_SERVICETYPE_SUCCESS"] = "[SERVICETYPE] Load SERVICETYPE Success";
    ServiceTypeActionTypes["LOAD_SERVICETYPE_FAIL"] = "[SERVICETYPE] Load SERVICETYPE Fail";
    ServiceTypeActionTypes["UPDATE_SERVICETYPE"] = "[SERVICETYPE] Update SERVICETYPE";
    ServiceTypeActionTypes["UPDATE_SERVICETYPE_SUCCESS"] = "[SERVICETYPE] Update SERVICETYPE Success";
    ServiceTypeActionTypes["UPDATE_SERVICETYPE_FAIL"] = "[SERVICETYPE] Update SERVICETYPE Fail";
    ServiceTypeActionTypes["DELETE_SERVICETYPE"] = "[SERVICETYPE] Delete SERVICETYPE";
    ServiceTypeActionTypes["DELETE_SERVICETYPE_SUCCESS"] = "[SERVICETYPE] Delete SERVICETYPE Success";
    ServiceTypeActionTypes["DELETE_SERVICETYPE_FAIL"] = "[SERVICETYPE] Delete SERVICETYPE Fail";
    ServiceTypeActionTypes["ADD_SERVICETYPE"] = "[SERVICETYPE] Upload Data";
    ServiceTypeActionTypes["ADD_SERVICETYPE_SUCCESS"] = "[SERVICETYPE] Upload Data Success";
    ServiceTypeActionTypes["ADD_SERVICETYPE_FAIL"] = "[SERVICETYPE] Upload Data Fail";
    ServiceTypeActionTypes["UPLOAD_DATA"] = "[SERVICETYPE] Upload Data";
    ServiceTypeActionTypes["UPLOAD_DATA_SUCCESS"] = "[SERVICETYPE] Upload Data Success";
    ServiceTypeActionTypes["UPLOAD_DATA_FAIL"] = "[SERVICETYPE] Upload Data Fail";
})(ServiceTypeActionTypes || (ServiceTypeActionTypes = {}));
var LoadServiceType = /** @class */ (function () {
    function LoadServiceType(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.LOAD_SERVICETYPE;
    }
    LoadServiceType.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadServiceType;
}());

var LoadServiceTypeSuccess = /** @class */ (function () {
    function LoadServiceTypeSuccess(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.LOAD_SERVICETYPE_SUCCESS;
    }
    LoadServiceTypeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadServiceTypeSuccess;
}());

var LoadServiceTypeFail = /** @class */ (function () {
    function LoadServiceTypeFail(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.LOAD_SERVICETYPE_FAIL;
    }
    LoadServiceTypeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadServiceTypeFail;
}());

var UpdateServiceType = /** @class */ (function () {
    function UpdateServiceType(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.UPDATE_SERVICETYPE;
    }
    UpdateServiceType.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateServiceType;
}());

var UpdateServiceTypeSuccess = /** @class */ (function () {
    function UpdateServiceTypeSuccess(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.UPDATE_SERVICETYPE_SUCCESS;
    }
    UpdateServiceTypeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateServiceTypeSuccess;
}());

var UpdateServiceTypeFail = /** @class */ (function () {
    function UpdateServiceTypeFail(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.UPDATE_SERVICETYPE_FAIL;
    }
    UpdateServiceTypeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateServiceTypeFail;
}());

var DeleteServiceType = /** @class */ (function () {
    function DeleteServiceType(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.DELETE_SERVICETYPE;
    }
    DeleteServiceType.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteServiceType;
}());

var DeleteServiceTypeSuccess = /** @class */ (function () {
    function DeleteServiceTypeSuccess(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.DELETE_SERVICETYPE_SUCCESS;
    }
    DeleteServiceTypeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteServiceTypeSuccess;
}());

var DeleteServiceTypeFail = /** @class */ (function () {
    function DeleteServiceTypeFail(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.DELETE_SERVICETYPE_FAIL;
    }
    DeleteServiceTypeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteServiceTypeFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddServiceType = /** @class */ (function () {
    function AddServiceType(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.ADD_SERVICETYPE;
    }
    AddServiceType.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddServiceType;
}());

var AddServiceTypeSuccess = /** @class */ (function () {
    function AddServiceTypeSuccess(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.ADD_SERVICETYPE_SUCCESS;
    }
    AddServiceTypeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddServiceTypeSuccess;
}());

var AddServiceTypeFail = /** @class */ (function () {
    function AddServiceTypeFail(payload) {
        this.payload = payload;
        this.type = ServiceTypeActionTypes.ADD_SERVICETYPE_FAIL;
    }
    AddServiceTypeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddServiceTypeFail;
}());



/***/ }),

/***/ "./src/app/views/pages/service-type/state/service-type.effects.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/service-type/state/service-type.effects.ts ***!
  \************************************************************************/
/*! exports provided: ServiceTypeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeEffect", function() { return ServiceTypeEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_type_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-type.actions */ "./src/app/views/pages/service-type/state/service-type.actions.ts");
/* harmony import */ var _service_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-type.service */ "./src/app/views/pages/service-type/service-type.service.ts");







var ServiceTypeEffect = /** @class */ (function () {
    function ServiceTypeEffect(actions$, serviceTypeService) {
        var _this = this;
        this.actions$ = actions$;
        this.serviceTypeService = serviceTypeService;
        this.deleteServiceType$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_type_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeActionTypes"].DELETE_SERVICETYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.serviceTypeService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteServiceTypeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteServiceTypeFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_type_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.serviceTypeService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadServiceType$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_type_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeActionTypes"].LOAD_SERVICETYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.serviceTypeService.getServiceTypeById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["LoadServiceTypeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["LoadServiceTypeFail"](err));
            }));
        }));
        this.updateServiceType$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_type_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeActionTypes"].UPDATE_SERVICETYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.serviceTypeService.updateServiceType(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateServiceTypeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateServiceTypeFail"](err)); }));
        }));
        this.addServiceType$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_type_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceTypeActionTypes"].ADD_SERVICETYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.serviceTypeService.addServiceType(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["AddServiceTypeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_type_actions__WEBPACK_IMPORTED_MODULE_5__["AddServiceTypeFail"](err));
            }));
        }));
    }
    ServiceTypeEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _service_type_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTypeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceTypeEffect.prototype, "deleteServiceType$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceTypeEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceTypeEffect.prototype, "loadServiceType$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceTypeEffect.prototype, "updateServiceType$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceTypeEffect.prototype, "addServiceType$", void 0);
    ServiceTypeEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _service_type_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTypeService"]])
    ], ServiceTypeEffect);
    return ServiceTypeEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/service-type/state/service-type.reducer.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/service-type/state/service-type.reducer.ts ***!
  \************************************************************************/
/*! exports provided: initialState, ServiceTypeReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeReducer", function() { return ServiceTypeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _service_type_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-type.actions */ "./src/app/views/pages/service-type/state/service-type.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function ServiceTypeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Service Type load-----------------------------
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].LOAD_SERVICETYPE_SUCCESS: {
            return action.payload;
        }
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].LOAD_SERVICETYPE_FAIL: {
            return action.payload.error;
        }
        // for Service Type delete-----------------------------
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].DELETE_SERVICETYPE_SUCCESS: {
            return action.payload;
        }
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].DELETE_SERVICETYPE_FAIL: {
            return action.payload.error;
        }
        // for Service Type update-----------------------------
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].UPDATE_SERVICETYPE_SUCCESS: {
            return action.payload;
        }
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].UPDATE_SERVICETYPE_FAIL: {
            return action.payload.error;
        }
        // for Service Type upadat status-----------------------------
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Service Type add-----------------------------
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].ADD_SERVICETYPE_SUCCESS: {
            return action.payload;
        }
        case _service_type_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceTypeActionTypes"].ADD_SERVICETYPE_FAIL: {
            return action.payload.error;
        }
    }
}
var getServiceTypeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("service-type");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getServiceTypeState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-service-type-service-type-module.js.map