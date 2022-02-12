(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-brand-brand-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'BRAND.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'BRAND.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/brand/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditBrandForm\" [formGroup]=\"addEditBrandForm\">\n            <div class=\"kt-portlet__body\">\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'BRAND.LABEL.BRAND_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- brand_name -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'BRAND.PLACEHOLDERS.BRAND_NAME' | translate}}\" type=\"text\"\n                                formControlName=\"brand_name\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditBrandForm.controls.brand_name.errors }\">\n                            <div *ngIf=\"submitted && addEditBrandForm.controls.brand_name.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditBrandForm.controls.brand_name.errors?.required\">\n                                    {{'BRAND.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditBrandForm.controls.brand_name.errors?.minlength && !addEditBrandForm.controls.brand_name.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'BRAND.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditBrandForm.controls.brand_name.errors?.maxlength && !addEditBrandForm.controls.brand_name.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'BRAND.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditBrandForm.controls.brand_name.errors?.pattern\">\n                                    {{'BRAND.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'BRAND.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- brand_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"brand_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditBrandForm.controls.brand_status.errors }\">\n                                <option value=\"{{'BRAND.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'BRAND.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'BRAND.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'BRAND.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditBrandForm.controls.brand_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditBrandForm.controls.brand_status.errors?.required\">\n                                    {{'BRAND.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                                <button type=\"button\" routerLink=\"/brand/list\"\n                                class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                                <button type=\"submit\" (click)=\"onSubmit()\" \n                                class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                               </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/brand-list/brand-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/brand/brand-list/brand-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'BRAND.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/brand/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/brand.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/brand/brand.component.html ***!
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

/***/ "./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYnJhbmQvYWRkLWVkaXQtYnJhbmQvYWRkLWVkaXQtYnJhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2JyYW5kL2FkZC1lZGl0LWJyYW5kL2FkZC1lZGl0LWJyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddBrandComponent, EditBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandComponent", function() { return AddBrandComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandComponent", function() { return EditBrandComponent; });
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
/* harmony import */ var _state_brand_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/brand.actions */ "./src/app/views/pages/brand/state/brand.actions.ts");
/* harmony import */ var _state_brand_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/brand.reducer */ "./src/app/views/pages/brand/state/brand.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _brand_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../brand.service */ "./src/app/views/pages/brand/brand.service.ts");

















var AddBrandComponent = /** @class */ (function () {
    function AddBrandComponent(subheaderService, _formBuilder, router, localStorageService, toastr, store, titleService, translate, brandService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.brandService = brandService;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.BRAND_CONST = this.translate.instant('BRAND');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BRAND'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.BRAND_CONST.MODULE_NAME);
    }
    AddBrandComponent.prototype.ngOnInit = function () {
        this.buildAddEditBrandForm();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    AddBrandComponent.prototype.buildAddEditBrandForm = function () {
        this.addEditBrandForm = this._formBuilder.group({
            brand_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            brand_status: ["ACTIVE", []],
        });
    };
    AddBrandComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditBrandForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditBrandForm.value;
                    obj = {
                        brand_name: form.brand_name,
                        brand_status: form.brand_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_brand_actions__WEBPACK_IMPORTED_MODULE_12__["AddBrand"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_brand_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/brand/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditBrandForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddBrandComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _brand_service__WEBPACK_IMPORTED_MODULE_16__["BrandService"] }
    ]; };
    AddBrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-brand',
            template: __webpack_require__(/*! raw-loader!./add-edit-brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-brand.component.scss */ "./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _brand_service__WEBPACK_IMPORTED_MODULE_16__["BrandService"]])
    ], AddBrandComponent);
    return AddBrandComponent;
}());

var EditBrandComponent = /** @class */ (function () {
    function EditBrandComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, store, titleService, translate, brandService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.brandService = brandService;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.BRAND_CONST = this.translate.instant('BRAND');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BRAND'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.BRAND_CONST.MODULE_NAME);
    }
    EditBrandComponent.prototype.ngOnInit = function () {
        this.buildAddEditBrandForm();
        this.getBrandDetails();
    };
    EditBrandComponent.prototype.buildAddEditBrandForm = function () {
        this.addEditBrandForm = this._formBuilder.group({
            brand_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            brand_status: ["ACTIVE", []],
        });
    };
    EditBrandComponent.prototype.getBrandDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_brand_actions__WEBPACK_IMPORTED_MODULE_12__["LoadBrand"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_brand_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            brand_name: result.brand_name,
                            brand_status: result.brand_status != null && result.brand_status != undefined ? result.brand_status : "",
                        };
                        return [4 /*yield*/, this.addEditBrandForm.patchValue(fd)];
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
    EditBrandComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditBrandForm.valid) {
                    form = this.addEditBrandForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            brand_name: form.brand_name,
                            brand_status: form.brand_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_brand_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateBrand"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_brand_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/brand/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditBrandForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditBrandComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _brand_service__WEBPACK_IMPORTED_MODULE_16__["BrandService"] }
    ]; };
    EditBrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-brand',
            template: __webpack_require__(/*! raw-loader!./add-edit-brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-brand.component.scss */ "./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.scss")]
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
            _brand_service__WEBPACK_IMPORTED_MODULE_16__["BrandService"]])
    ], EditBrandComponent);
    return EditBrandComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/brand/brand-list/brand-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/brand/brand-list/brand-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2JyYW5kL2JyYW5kLWxpc3QvYnJhbmQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/brand/brand-list/brand-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/brand/brand-list/brand-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: BrandListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandListComponent", function() { return BrandListComponent; });
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











function _window() {
    // return the global native browser window object
    return window;
}
var BrandListComponent = /** @class */ (function () {
    function BrandListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.BRAND_CONST = [];
        this.searchObj = { field: 'brand_name', brand_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.BRAND_CONST = this.translate.instant('BRAND');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BRAND'));
        titleService.setTitle(this.APPNAME + " | " + this.BRAND_CONST.MODULE_NAME);
    }
    BrandListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    BrandListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BRAND.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BRAND.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BRAND.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].BRAND.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    BrandListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    BrandListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-brand-list', scripts).then(function () {
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
                    sProcessing: that.BRAND_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listBrand,
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
                        title: that.BRAND_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.BRAND_CONST.LABEL.BRAND_NAME, data: 'brand_name' },
                    { title: that.BRAND_CONST.LABEL.STATUS, data: 'brand_status' },
                    { title: that.BRAND_CONST.LABEL.CREATED_ON, data: 'brand_createdOn' },
                    { title: that.BRAND_CONST.LABEL.MODIFIED_ON, data: 'brand_modifyOn' },
                    { title: that.BRAND_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.BRAND_CONST.LABEL.SR_NO:
                                break;
                            case that.BRAND_CONST.LABEL.BRAND_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BRAND_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.BRAND_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.BRAND_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.BRAND_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            //   case that.BRAND_CONST.LABEL.CREATED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            // case that.BRAND_CONST.LABEL.MODIFIED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.BRAND_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.BRAND_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.BRAND_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                            return a;
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
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.brand_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.brand_status].title + '</span>';
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
    BrandListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/brand/edit/' + this.id]);
    };
    BrandListComponent.prototype.delete = function (e) {
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
                            component: 'brand',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    BrandListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'brand',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    BrandListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    BrandListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    BrandListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-brand-list',
            template: __webpack_require__(/*! raw-loader!./brand-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/brand-list/brand-list.component.html"),
            styles: [__webpack_require__(/*! ./brand-list.component.scss */ "./src/app/views/pages/brand/brand-list/brand-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], BrandListComponent);
    return BrandListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/brand/brand.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/brand/brand.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2JyYW5kL2JyYW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/brand/brand.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/brand/brand.component.ts ***!
  \******************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var BrandComponent = /** @class */ (function () {
    function BrandComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].BRAND);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].brandManagement);
    }
    BrandComponent.prototype.ngOnInit = function () {
    };
    BrandComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-brand',
            template: __webpack_require__(/*! raw-loader!./brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.scss */ "./src/app/views/pages/brand/brand.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/brand/brand.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/pages/brand/brand.module.ts ***!
  \***************************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brand.component */ "./src/app/views/pages/brand/brand.component.ts");
/* harmony import */ var _add_edit_brand_add_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-brand/add-edit-brand.component */ "./src/app/views/pages/brand/add-edit-brand/add-edit-brand.component.ts");
/* harmony import */ var _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-list/brand-list.component */ "./src/app/views/pages/brand/brand-list/brand-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_brand_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/brand.effects */ "./src/app/views/pages/brand/state/brand.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_brand_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/brand.reducer */ "./src/app/views/pages/brand/state/brand.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_5__["BrandListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BRAND.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_brand_add_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["AddBrandComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BRAND.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_brand_add_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["EditBrandComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].BRAND.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    BrandModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"], _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_5__["BrandListComponent"], _add_edit_brand_add_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["AddBrandComponent"], _add_edit_brand_add_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["EditBrandComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_brand_effects__WEBPACK_IMPORTED_MODULE_12__["BrandEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("brand", _state_brand_reducer__WEBPACK_IMPORTED_MODULE_15__["BrandReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]
            ]
        })
    ], BrandModule);
    return BrandModule;
}());



/***/ }),

/***/ "./src/app/views/pages/brand/state/brand.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/brand/state/brand.actions.ts ***!
  \**********************************************************/
/*! exports provided: BrandActionTypes, LoadBrand, LoadBrandSuccess, LoadBrandFail, UpdateBrand, UpdateBrandSuccess, UpdateBrandFail, DeleteBrand, DeleteBrandSuccess, DeleteBrandFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddBrand, AddBrandSuccess, AddBrandFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandActionTypes", function() { return BrandActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBrand", function() { return LoadBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBrandSuccess", function() { return LoadBrandSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBrandFail", function() { return LoadBrandFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBrand", function() { return UpdateBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBrandSuccess", function() { return UpdateBrandSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBrandFail", function() { return UpdateBrandFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBrand", function() { return DeleteBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBrandSuccess", function() { return DeleteBrandSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBrandFail", function() { return DeleteBrandFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrand", function() { return AddBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandSuccess", function() { return AddBrandSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandFail", function() { return AddBrandFail; });
var BrandActionTypes;
(function (BrandActionTypes) {
    BrandActionTypes["UPDATE_STATUS"] = "[BRAND] Update Status";
    BrandActionTypes["UPDATE_STATUS_SUCCESS"] = "[BRAND]  Update Status Success";
    BrandActionTypes["UPDATE_STATUS_FAIL"] = "[BRAND]  Update Status Fail";
    BrandActionTypes["LOAD_BRAND"] = "[BRAND] Load BRAND";
    BrandActionTypes["LOAD_BRAND_SUCCESS"] = "[BRAND] Load BRAND Success";
    BrandActionTypes["LOAD_BRAND_FAIL"] = "[BRAND] Load BRAND Fail";
    BrandActionTypes["UPDATE_BRAND"] = "[BRAND] Update BRAND";
    BrandActionTypes["UPDATE_BRAND_SUCCESS"] = "[BRAND] Update BRAND Success";
    BrandActionTypes["UPDATE_BRAND_FAIL"] = "[BRAND] Update BRAND Fail";
    BrandActionTypes["DELETE_BRAND"] = "[BRAND] Delete BRAND";
    BrandActionTypes["DELETE_BRAND_SUCCESS"] = "[BRAND] Delete BRAND Success";
    BrandActionTypes["DELETE_BRAND_FAIL"] = "[BRAND] Delete BRAND Fail";
    BrandActionTypes["ADD_BRAND"] = "[BRAND] Upload Data";
    BrandActionTypes["ADD_BRAND_SUCCESS"] = "[BRAND] Upload Data Success";
    BrandActionTypes["ADD_BRAND_FAIL"] = "[BRAND] Upload Data Fail";
    BrandActionTypes["UPLOAD_DATA"] = "[BRAND] Upload Data";
    BrandActionTypes["UPLOAD_DATA_SUCCESS"] = "[BRAND] Upload Data Success";
    BrandActionTypes["UPLOAD_DATA_FAIL"] = "[BRAND] Upload Data Fail";
})(BrandActionTypes || (BrandActionTypes = {}));
var LoadBrand = /** @class */ (function () {
    function LoadBrand(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.LOAD_BRAND;
    }
    LoadBrand.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBrand;
}());

var LoadBrandSuccess = /** @class */ (function () {
    function LoadBrandSuccess(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.LOAD_BRAND_SUCCESS;
    }
    LoadBrandSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBrandSuccess;
}());

var LoadBrandFail = /** @class */ (function () {
    function LoadBrandFail(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.LOAD_BRAND_FAIL;
    }
    LoadBrandFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBrandFail;
}());

var UpdateBrand = /** @class */ (function () {
    function UpdateBrand(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.UPDATE_BRAND;
    }
    UpdateBrand.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBrand;
}());

var UpdateBrandSuccess = /** @class */ (function () {
    function UpdateBrandSuccess(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.UPDATE_BRAND_SUCCESS;
    }
    UpdateBrandSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBrandSuccess;
}());

var UpdateBrandFail = /** @class */ (function () {
    function UpdateBrandFail(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.UPDATE_BRAND_FAIL;
    }
    UpdateBrandFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBrandFail;
}());

var DeleteBrand = /** @class */ (function () {
    function DeleteBrand(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.DELETE_BRAND;
    }
    DeleteBrand.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBrand;
}());

var DeleteBrandSuccess = /** @class */ (function () {
    function DeleteBrandSuccess(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.DELETE_BRAND_SUCCESS;
    }
    DeleteBrandSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBrandSuccess;
}());

var DeleteBrandFail = /** @class */ (function () {
    function DeleteBrandFail(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.DELETE_BRAND_FAIL;
    }
    DeleteBrandFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBrandFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddBrand = /** @class */ (function () {
    function AddBrand(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.ADD_BRAND;
    }
    AddBrand.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddBrand;
}());

var AddBrandSuccess = /** @class */ (function () {
    function AddBrandSuccess(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.ADD_BRAND_SUCCESS;
    }
    AddBrandSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddBrandSuccess;
}());

var AddBrandFail = /** @class */ (function () {
    function AddBrandFail(payload) {
        this.payload = payload;
        this.type = BrandActionTypes.ADD_BRAND_FAIL;
    }
    AddBrandFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddBrandFail;
}());



/***/ }),

/***/ "./src/app/views/pages/brand/state/brand.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/brand/state/brand.effects.ts ***!
  \**********************************************************/
/*! exports provided: BrandEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandEffect", function() { return BrandEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _brand_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand.actions */ "./src/app/views/pages/brand/state/brand.actions.ts");
/* harmony import */ var _brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../brand.service */ "./src/app/views/pages/brand/brand.service.ts");







var BrandEffect = /** @class */ (function () {
    function BrandEffect(actions$, BrandService) {
        var _this = this;
        this.actions$ = actions$;
        this.BrandService = BrandService;
        this.deleteBrand$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_brand_actions__WEBPACK_IMPORTED_MODULE_5__["BrandActionTypes"].DELETE_BRAND), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.BrandService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBrandSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBrandFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_brand_actions__WEBPACK_IMPORTED_MODULE_5__["BrandActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.BrandService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadBrand$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_brand_actions__WEBPACK_IMPORTED_MODULE_5__["BrandActionTypes"].LOAD_BRAND), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.BrandService.getBrandById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBrandSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBrandFail"](err));
            }));
        }));
        this.updateBrand$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_brand_actions__WEBPACK_IMPORTED_MODULE_5__["BrandActionTypes"].UPDATE_BRAND), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.BrandService.updateBrand(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBrandSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBrandFail"](err)); }));
        }));
        this.addBrand$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_brand_actions__WEBPACK_IMPORTED_MODULE_5__["BrandActionTypes"].ADD_BRAND), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.BrandService.addBrand(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["AddBrandSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _brand_actions__WEBPACK_IMPORTED_MODULE_5__["AddBrandFail"](err));
            }));
        }));
    }
    BrandEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BrandEffect.prototype, "deleteBrand$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BrandEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BrandEffect.prototype, "loadBrand$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BrandEffect.prototype, "updateBrand$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BrandEffect.prototype, "addBrand$", void 0);
    BrandEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"]])
    ], BrandEffect);
    return BrandEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/brand/state/brand.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/brand/state/brand.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, BrandReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandReducer", function() { return BrandReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _brand_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand.actions */ "./src/app/views/pages/brand/state/brand.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function BrandReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Brand load-----------------------------
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].LOAD_BRAND_SUCCESS: {
            return action.payload;
        }
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].LOAD_BRAND_FAIL: {
            return action.payload.error;
        }
        // for Brand  delete-----------------------------
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].DELETE_BRAND_SUCCESS: {
            return action.payload;
        }
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].DELETE_BRAND_FAIL: {
            return action.payload.error;
        }
        // for Brand  update-----------------------------
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].UPDATE_BRAND_SUCCESS: {
            return action.payload;
        }
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].UPDATE_BRAND_FAIL: {
            return action.payload.error;
        }
        // for Brand  upadat status-----------------------------
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Brand  add-----------------------------
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].ADD_BRAND_SUCCESS: {
            return action.payload;
        }
        case _brand_actions__WEBPACK_IMPORTED_MODULE_0__["BrandActionTypes"].ADD_BRAND_FAIL: {
            return action.payload.error;
        }
    }
}
var getBrandState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("brand");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getBrandState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-brand-brand-module.js.map