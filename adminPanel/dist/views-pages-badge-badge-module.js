(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-badge-badge-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'BADGE.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'BADGE.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/badge/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditBadgeForm\" [formGroup]=\"addEditBadgeForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'BADGE.LABEL.BADGE_NAME' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'BADGE.PLACEHOLDERS.BADGE_NAME' | translate}}\" type=\"text\" formControlName=\"badge_name\" [ngClass]=\"{ 'is-invalid': submitted && addEditBadgeForm.controls.badge_name.errors }\">\n                            <div *ngIf=\"submitted && addEditBadgeForm.controls.badge_name.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditBadgeForm.controls.badge_name.errors?.required\">\n                                    {{'BADGE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditBadgeForm.controls.badge_name.errors?.minlength && !addEditBadgeForm.controls.badge_name.errors?.pattern\" class=\"lbl-err\">\n                                    {{'BADGE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditBadgeForm.controls.badge_name.errors?.maxlength && !addEditBadgeForm.controls.badge_name.errors?.pattern\" class=\"lbl-err\">\n                                    {{'BADGE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditBadgeForm.controls.badge_name.errors?.pattern\">\n                                    {{'BADGE.VALIDATION.INVALID_NAME' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-3\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'BADGE.LABEL.BADGE_ICON' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"kt-avatar\" id=\"badge_icon\">\n                                <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                </div>\n                                <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change icon\">\n                                    <i class=\"fa fa-pen\"></i>\n                                    <input type=\"file\" name=\"badge_icon\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectIcon($event)\">\n                                </label>\n                                <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"removeIcon()\" data-original-title=\"Remove Icon\">\n                                    <i class=\"fa fa-times\"></i>\n                                </span>\n                            </div>\n                            <span class=\"form-text text-muted\">{{'BADGE.NOTES.ICON'|translate}}</span>\n                        </div>\n                    </div>\n                </div>\n                <!----- CK Editor --->\n                <div class=\"form-group row\">\n                    <div class=\"col-md-12 \">\n                        <div class=\"col-md-12  col-lg-12 \">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'BADGE.LABEL.DESCRIPTION' | translate}}*\n                            </label>\n                        </div>\n\n                        <div class=\"col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                            <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\" placeholder=\"Enter Contant\" formControlName=\"badge_description\" [ngClass]=\"{ 'is-invalid': submitted && addEditBadgeForm.controls.badge_description.errors }\">\n                            </ckeditor>\n                            <div *ngIf=\"submitted && addEditBadgeForm.controls.badge_description.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditBadgeForm.controls.badge_description.errors?.required\">\n                                    {{'BADGE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'BADGE.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"badge_status\" formControlName=\"badge_status\" [ngClass]=\"{'is-invalid': submitted && addEditBadgeForm.controls.badge_status.errors}\">\n                                <option value=\"{{'BADGE.PLACEHOLDERS.ACTIVE' | translate}}\">{{'BADGE.LABEL.ACTIVE' | translate}}</option>\n                                <option value=\"{{'BADGE.PLACEHOLDERS.INACTIVE' | translate}}\">{{'BADGE.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditBadgeForm.controls.badge_status.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted && addEditBadgeForm.controls.badge_status.errors?.required\">\n                                    {{'BADGE.VALIDTION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/badge/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate}}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">{{'BUTTONS.SUBMIT' | translate}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/badge-list/badge-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/badge/badge-list/badge-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'BADGE.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/badge/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/badge.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/badge/badge.component.html ***!
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

/***/ "./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYmFkZ2UvYWRkLWVkaXQtYmFkZ2UvYWRkLWVkaXQtYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2JhZGdlL2FkZC1lZGl0LWJhZGdlL2FkZC1lZGl0LWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0LWF1dG8ge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddBadgeComponent, EditBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBadgeComponent", function() { return AddBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBadgeComponent", function() { return EditBadgeComponent; });
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
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _state_badge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/badge.actions */ "./src/app/views/pages/badge/state/badge.actions.ts");
/* harmony import */ var _state_badge_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/badge.reducer */ "./src/app/views/pages/badge/state/badge.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
















var AddBadgeComponent = /** @class */ (function () {
    function AddBadgeComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate) {
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
        this.element = false;
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.BADGE_CONST = this.translate.instant('BADGE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BADGE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.BADGE_CONST.MODULE_NAME);
    }
    AddBadgeComponent.prototype.ngOnInit = function () {
        this.buildAddEditBadgeForm();
        this.onSelectIcon(event);
        this.removeIcon();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__;
    };
    AddBadgeComponent.prototype.buildAddEditBadgeForm = function () {
        this.addEditBadgeForm = this._formBuilder.group({
            badge_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMaxLength)]],
            badge_description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            badge_status: ["ACTIVE", []]
        });
    };
    AddBadgeComponent.prototype.onSelectIcon = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.url = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.BADGE_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    AddBadgeComponent.prototype.removeIcon = function () {
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.imageFile = '';
    };
    AddBadgeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, fd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                // for image is required whil add 
                if (this.addEditBadgeForm.valid) {
                    if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png') {
                        this.submitted = false;
                        this.toastr.error(this.BADGE_CONST.LABEL.IMAGE_REQUIRED);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        form = this.addEditBadgeForm.value;
                        fd = new FormData();
                        fd.append('badge_name', form.badge_name);
                        fd.append('badge_description', form.badge_description);
                        fd.append('badge_status', form.badge_status);
                        fd.append('badge_icon', this.imageFile);
                        this.stateSubscription = this.store.dispatch(new _state_badge_actions__WEBPACK_IMPORTED_MODULE_12__["AddBadge"](fd));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_badge_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/badge/list']);
                                }
                                else {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                    _this.toastr.error(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                }
                            }
                        });
                    }
                }
                else if (!this.addEditBadgeForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddBadgeComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    AddBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-badge',
            template: __webpack_require__(/*! raw-loader!./add-edit-badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-badge.component.scss */ "./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], AddBadgeComponent);
    return AddBadgeComponent;
}());

//Edit
var EditBadgeComponent = /** @class */ (function () {
    function EditBadgeComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate) {
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
        this.element = false;
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.BADGE_CONST = this.translate.instant('BADGE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BADGE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.BADGE_CONST.MODULE_NAME);
    }
    EditBadgeComponent.prototype.ngOnInit = function () {
        this.buildAddEditBadgeForm();
        this.getBadgeDetails();
        this.onSelectIcon(event);
        this.removeIcon();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__;
    };
    EditBadgeComponent.prototype.buildAddEditBadgeForm = function () {
        this.addEditBadgeForm = this._formBuilder.group({
            badge_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_15__["validataion"].nameMaxLength)]],
            badge_description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            badge_status: ["ACTIVE", []]
        });
    };
    EditBadgeComponent.prototype.onSelectIcon = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.url = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error(this.BADGE_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditBadgeComponent.prototype.removeIcon = function () {
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.imageFile = '';
    };
    EditBadgeComponent.prototype.getBadgeDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_badge_actions__WEBPACK_IMPORTED_MODULE_12__["LoadBadge"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_badge_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        result = data['data'];
                        fd = {
                            badge_name: result.badge_name,
                            badge_description: result.badge_description,
                            badge_status: result.badge_status
                        };
                        this.imageFile = result.badge_icon;
                        this.url = result.badge_icon;
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.addEditBadgeForm.patchValue(fd);
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
    EditBadgeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, fd, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditBadgeForm.valid) {
                    if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png') {
                        this.submitted = false;
                        this.toastr.error(this.BADGE_CONST.LABEL.IMAGE_REQUIRED);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        form = this.addEditBadgeForm.value;
                        fd = new FormData();
                        fd.append('badge_name', form.badge_name);
                        fd.append('badge_description', form.badge_description);
                        fd.append('badge_status', form.badge_status);
                        fd.append('badge_icon', this.imageFile);
                        obj = {
                            id: this.id,
                            data: fd
                        };
                        this.stateSubscription = this.store.dispatch(new _state_badge_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateBadge"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_badge_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/badge/list']);
                                }
                                else {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                    _this.toastr.error(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                }
                            }
                        });
                    }
                }
                else if (!this.addEditBadgeForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditBadgeComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    EditBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-badge',
            template: __webpack_require__(/*! raw-loader!./add-edit-badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-badge.component.scss */ "./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], EditBadgeComponent);
    return EditBadgeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/badge/badge-list/badge-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/badge/badge-list/badge-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2JhZGdlL2JhZGdlLWxpc3QvYmFkZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/badge/badge-list/badge-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/badge/badge-list/badge-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: BadgeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeListComponent", function() { return BadgeListComponent; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");












function _window() {
    // return the global native browser window object
    return window;
}
var BadgeListComponent = /** @class */ (function () {
    function BadgeListComponent(subheaderService, localStorageService, _script, router, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.badge = '';
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.BADGE_CONST = [];
        this.searchObj = { field: 'badge_name', badge_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.BADGE_CONST = this.translate.instant('BADGE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BADGE'));
        titleService.setTitle(this.APPNAME + " | " + this.BADGE_CONST.MODULE_NAME);
    }
    BadgeListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BADGE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BADGE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BADGE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BADGE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    BadgeListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    BadgeListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    BadgeListComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-badge-list', scripts).then(function () {
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
                    sProcessing: that.BADGE_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listBadge,
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
                        title: that.BADGE_CONST.LABEL.SR_NO, data: null,
                    },
                    { title: that.BADGE_CONST.LABEL.BADGE_NAME, data: 'badge_name' },
                    { title: that.BADGE_CONST.LABEL.DESCRIPTION, data: 'badge_description' },
                    { title: that.BADGE_CONST.LABEL.ICON, data: 'badge_icon' },
                    { title: that.BADGE_CONST.LABEL.STATUS, data: 'badge_status' },
                    { title: that.BADGE_CONST.LABEL.CREATED_ON, data: 'badge_createdOn' },
                    { title: that.BADGE_CONST.LABEL.MODIFIED_ON, data: 'badge_modifyOn' },
                    { title: that.BADGE_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.BADGE_CONST.LABEL.SR_NO:
                                break;
                            case that.BADGE_CONST.LABEL.BADGE_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BADGE_CONST.LABEL.DESCRIPTION:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BADGE_CONST.LABEL.BADGE_ICON:
                                break;
                            case that.BADGE_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.BADGE_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.BADGE_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.BADGE_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            case that.BADGE_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BADGE_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BADGE_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                                 margin-left: 10px !important; margin-top: 0px !important;\">\n                                 <span>\n                                 <i class=\"la la-search\"></i>   \n                                 <span>" + that.BADGE_CONST.BUTTONS.SEARCH + "</span>\n                                 </span>   \n                                 </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                                  margin-left: 10px !important; margin-top: 0px !important;\">\n                                  <span>\n                                  <i class=\"la la-close\"></i>\n                                  <span>" + that.BADGE_CONST.BUTTONS.RESET + "</span>\n                                  </span>\n                                  </button>");
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
                            return a;
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
                        width: "10%",
                        orderable: false,
                        render: function (a, e, t, n) {
                            return '<img src="' + a + '" height="80px" width="80px">';
                        },
                    },
                    {
                        targets: 4,
                        width: '22%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.badge_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.badge_status].title + '</span>';
                        }
                    },
                    {
                        targets: 5,
                        width: '10%',
                    },
                    {
                        targets: 6,
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
    BadgeListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/badge/edit/' + this.id]);
    };
    BadgeListComponent.prototype.delete = function (e) {
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
                            component: 'badge',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    BadgeListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'badge',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    BadgeListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    BadgeListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }
    ]; };
    BadgeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-badge-list',
            template: __webpack_require__(/*! raw-loader!./badge-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/badge-list/badge-list.component.html"),
            styles: [__webpack_require__(/*! ./badge-list.component.scss */ "./src/app/views/pages/badge/badge-list/badge-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
    ], BadgeListComponent);
    return BadgeListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/badge/badge.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/badge/badge.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/badge/badge.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/badge/badge.component.ts ***!
  \******************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var BadgeComponent = /** @class */ (function () {
    function BadgeComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].BADGE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].badgeManagement);
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    BadgeComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-badge',
            template: __webpack_require__(/*! raw-loader!./badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/badge/badge.component.html"),
            styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/views/pages/badge/badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/badge/badge.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/pages/badge/badge.module.ts ***!
  \***************************************************/
/*! exports provided: BadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge.component */ "./src/app/views/pages/badge/badge.component.ts");
/* harmony import */ var _add_edit_badge_add_edit_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-badge/add-edit-badge.component */ "./src/app/views/pages/badge/add-edit-badge/add-edit-badge.component.ts");
/* harmony import */ var _badge_list_badge_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge-list/badge-list.component */ "./src/app/views/pages/badge/badge-list/badge-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_badge_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/badge.effects */ "./src/app/views/pages/badge/state/badge.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_badge_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/badge.reducer */ "./src/app/views/pages/badge/state/badge.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _badge_list_badge_list_component__WEBPACK_IMPORTED_MODULE_5__["BadgeListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BADGE.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_badge_add_edit_badge_component__WEBPACK_IMPORTED_MODULE_4__["AddBadgeComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BADGE.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_badge_add_edit_badge_component__WEBPACK_IMPORTED_MODULE_4__["EditBadgeComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BADGE.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var BadgeModule = /** @class */ (function () {
    function BadgeModule() {
    }
    BadgeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"], _badge_list_badge_list_component__WEBPACK_IMPORTED_MODULE_5__["BadgeListComponent"], _add_edit_badge_add_edit_badge_component__WEBPACK_IMPORTED_MODULE_4__["AddBadgeComponent"], _add_edit_badge_add_edit_badge_component__WEBPACK_IMPORTED_MODULE_4__["EditBadgeComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_badge_effects__WEBPACK_IMPORTED_MODULE_12__["BadgeEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("badge", _state_badge_reducer__WEBPACK_IMPORTED_MODULE_15__["BadgeReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]
            ]
        })
    ], BadgeModule);
    return BadgeModule;
}());



/***/ }),

/***/ "./src/app/views/pages/badge/state/badge.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/badge/state/badge.actions.ts ***!
  \**********************************************************/
/*! exports provided: BadgeActionTypes, LoadBadge, LoadBadgeSuccess, LoadBadgeFail, UpdateBadge, UpdateBadgeSuccess, UpdateBadgeFail, DeleteBadge, DeleteBadgeSuccess, DeleteBadgeFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddBadge, AddBadgeSuccess, AddBadgeFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeActionTypes", function() { return BadgeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBadge", function() { return LoadBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBadgeSuccess", function() { return LoadBadgeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBadgeFail", function() { return LoadBadgeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBadge", function() { return UpdateBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBadgeSuccess", function() { return UpdateBadgeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBadgeFail", function() { return UpdateBadgeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBadge", function() { return DeleteBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBadgeSuccess", function() { return DeleteBadgeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBadgeFail", function() { return DeleteBadgeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBadge", function() { return AddBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBadgeSuccess", function() { return AddBadgeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBadgeFail", function() { return AddBadgeFail; });
var BadgeActionTypes;
(function (BadgeActionTypes) {
    BadgeActionTypes["UPDATE_STATUS"] = "[BADGE] Update Status";
    BadgeActionTypes["UPDATE_STATUS_SUCCESS"] = "[BADGE]  Update Status Success";
    BadgeActionTypes["UPDATE_STATUS_FAIL"] = "[BADGE]  Update Status Fail";
    BadgeActionTypes["LOAD_BADGE"] = "[BADGE] Load BADGE";
    BadgeActionTypes["LOAD_BADGE_SUCCESS"] = "[BADGE] Load BADGE Success";
    BadgeActionTypes["LOAD_BADGE_FAIL"] = "[BADGE] Load BADGE Fail";
    BadgeActionTypes["UPDATE_BADGE"] = "[BADGE] Update BADGE";
    BadgeActionTypes["UPDATE_BADGE_SUCCESS"] = "[BADGE] Update BADGE Success";
    BadgeActionTypes["UPDATE_BADGE_FAIL"] = "[BADGE] Update BADGE Fail";
    BadgeActionTypes["DELETE_BADGE"] = "[BADGE] Delete BADGE";
    BadgeActionTypes["DELETE_BADGE_SUCCESS"] = "[BADGE] Delete BADGE Success";
    BadgeActionTypes["DELETE_BADGE_FAIL"] = "[BADGE] Delete BADGE Fail";
    BadgeActionTypes["ADD_BADGE"] = "[BADGE] Upload Data";
    BadgeActionTypes["ADD_BADGE_SUCCESS"] = "[BADGE] Upload Data Success";
    BadgeActionTypes["ADD_BADGE_FAIL"] = "[BADGE] Upload Data Fail";
})(BadgeActionTypes || (BadgeActionTypes = {}));
var LoadBadge = /** @class */ (function () {
    function LoadBadge(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.LOAD_BADGE;
    }
    LoadBadge.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBadge;
}());

var LoadBadgeSuccess = /** @class */ (function () {
    function LoadBadgeSuccess(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.LOAD_BADGE_SUCCESS;
    }
    LoadBadgeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBadgeSuccess;
}());

var LoadBadgeFail = /** @class */ (function () {
    function LoadBadgeFail(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.LOAD_BADGE_FAIL;
    }
    LoadBadgeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBadgeFail;
}());

var UpdateBadge = /** @class */ (function () {
    function UpdateBadge(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.UPDATE_BADGE;
    }
    UpdateBadge.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBadge;
}());

var UpdateBadgeSuccess = /** @class */ (function () {
    function UpdateBadgeSuccess(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.UPDATE_BADGE_SUCCESS;
    }
    UpdateBadgeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBadgeSuccess;
}());

var UpdateBadgeFail = /** @class */ (function () {
    function UpdateBadgeFail(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.UPDATE_BADGE_FAIL;
    }
    UpdateBadgeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBadgeFail;
}());

var DeleteBadge = /** @class */ (function () {
    function DeleteBadge(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.DELETE_BADGE;
    }
    DeleteBadge.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBadge;
}());

var DeleteBadgeSuccess = /** @class */ (function () {
    function DeleteBadgeSuccess(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.DELETE_BADGE_SUCCESS;
    }
    DeleteBadgeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBadgeSuccess;
}());

var DeleteBadgeFail = /** @class */ (function () {
    function DeleteBadgeFail(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.DELETE_BADGE_FAIL;
    }
    DeleteBadgeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBadgeFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddBadge = /** @class */ (function () {
    function AddBadge(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.ADD_BADGE;
    }
    AddBadge.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddBadge;
}());

var AddBadgeSuccess = /** @class */ (function () {
    function AddBadgeSuccess(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.ADD_BADGE_SUCCESS;
    }
    AddBadgeSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddBadgeSuccess;
}());

var AddBadgeFail = /** @class */ (function () {
    function AddBadgeFail(payload) {
        this.payload = payload;
        this.type = BadgeActionTypes.ADD_BADGE_FAIL;
    }
    AddBadgeFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddBadgeFail;
}());



/***/ }),

/***/ "./src/app/views/pages/badge/state/badge.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/badge/state/badge.effects.ts ***!
  \**********************************************************/
/*! exports provided: BadgeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeEffect", function() { return BadgeEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _badge_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge.actions */ "./src/app/views/pages/badge/state/badge.actions.ts");
/* harmony import */ var _badge_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../badge.service */ "./src/app/views/pages/badge/badge.service.ts");







var BadgeEffect = /** @class */ (function () {
    function BadgeEffect(actions$, BadgeService) {
        var _this = this;
        this.actions$ = actions$;
        this.BadgeService = BadgeService;
        this.deleteBadge$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_badge_actions__WEBPACK_IMPORTED_MODULE_5__["BadgeActionTypes"].DELETE_BADGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.BadgeService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBadgeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBadgeFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_badge_actions__WEBPACK_IMPORTED_MODULE_5__["BadgeActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.BadgeService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateBadgeData) {
                return new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](updateBadgeData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadBadge$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_badge_actions__WEBPACK_IMPORTED_MODULE_5__["BadgeActionTypes"].LOAD_BADGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.BadgeService.getBadgeById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBadgeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBadgeFail"](err));
            }));
        }));
        this.updateBadge$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_badge_actions__WEBPACK_IMPORTED_MODULE_5__["BadgeActionTypes"].UPDATE_BADGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.BadgeService.updateBadge(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateBadgeData) {
                return new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBadgeSuccess"](updateBadgeData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBadgeFail"](err)); }));
        }));
        this.addBadge$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_badge_actions__WEBPACK_IMPORTED_MODULE_5__["BadgeActionTypes"].ADD_BADGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.BadgeService.addBadge(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["AddBadgeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _badge_actions__WEBPACK_IMPORTED_MODULE_5__["AddBadgeFail"](err));
            }));
        }));
    }
    BadgeEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _badge_service__WEBPACK_IMPORTED_MODULE_6__["BadgeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BadgeEffect.prototype, "deleteBadge$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BadgeEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BadgeEffect.prototype, "loadBadge$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BadgeEffect.prototype, "updateBadge$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BadgeEffect.prototype, "addBadge$", void 0);
    BadgeEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _badge_service__WEBPACK_IMPORTED_MODULE_6__["BadgeService"]])
    ], BadgeEffect);
    return BadgeEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/badge/state/badge.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/badge/state/badge.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, BadgeReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeReducer", function() { return BadgeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _badge_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.actions */ "./src/app/views/pages/badge/state/badge.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function BadgeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Badge load-----------------------------
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].LOAD_BADGE_SUCCESS: {
            return action.payload;
        }
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].LOAD_BADGE_FAIL: {
            return action.payload.error;
        }
        // for Badge delete-----------------------------
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].DELETE_BADGE_SUCCESS: {
            return action.payload;
        }
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].DELETE_BADGE_FAIL: {
            return action.payload.error;
        }
        // for Badge update-----------------------------
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].UPDATE_BADGE_SUCCESS: {
            return action.payload;
        }
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].UPDATE_BADGE_FAIL: {
            return action.payload.error;
        }
        // for Badge upadat status-----------------------------
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Badge add-----------------------------
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].ADD_BADGE_SUCCESS: {
            return action.payload;
        }
        case _badge_actions__WEBPACK_IMPORTED_MODULE_0__["BadgeActionTypes"].ADD_BADGE_FAIL: {
            return action.payload.error;
        }
    }
}
var getBadgeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("badge");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getBadgeState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-badge-badge-module.js.map