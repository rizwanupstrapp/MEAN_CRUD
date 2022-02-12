(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-model-model-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/add-edit-model/add-edit-model.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/model/add-edit-model/add-edit-model.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'MODEL.ADD' | translate}}</h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'MODEL.EDIT' | translate}}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/model/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditModelForm\" [formGroup]=\"addEditModelForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group row\">\n                    <!-- Brand name -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'MODEL.LABEL.BRAND' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"brand\" formControlName=\"model_brandId\" [ngClass]=\"{'is-invalid': submitted && addEditModelForm.controls.model_brandId.errors}\">\n                                    <option value=\"\">{{'MODEL.PLACEHOLDERS.BRAND' | translate}}</option>\n                                    <option value=\"{{brand._id}}\" *ngFor=\"let brand of brands\"> {{brand.brand_name}} </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditModelForm.controls.model_brandId.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted && addEditModelForm.controls.model_brandId.errors?.required\">\n                                    {{\"MODEL.VALIDATION.FIELD_REQUIRED\" | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Model  name -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'MODEL.LABEL.MODEL' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'MODEL.PLACEHOLDERS.MODEL' | translate}}\" type=\"text\" formControlName=\"model_name\" [ngClass]=\"{'is-invalid': submitted && addEditModelForm.controls.model_name.errors}\">\n                            <div *ngIf=\"submitted && addEditModelForm.controls.model_name.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted && addEditModelForm.controls.model_name.errors?.required\">\n                                    {{'MODEL.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"addEditModelForm.controls.model_name.errors?.minlength && !addEditModelForm.controls.model_name.errors?.pattern\">\n                                    {{'MODEL.VALIDATION.MIN_CHARACTER' | translate}}\n                                </p>\n                                <p *ngIf=\"addEditModelForm.controls.model_name.errors?.maxlength && !addEditModelForm.controls.model_name.errors?.pattern\">\n                                    {{'MODEL.VALIDATION.MAX_CHARACTER' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted && addEditModelForm.controls.model_name.errors?.pattern\">\n                                    {{'MODEL.VALIDATION.INVALID_MODEL' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <!--Model color -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'MODEL.LABEL.COLOR' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12 multiselect_drpdwn\">\n                            <angular2-multiselect [data]=\"colors\" [(ngModel)]=\"selectedItemsColor\" [settings]=\"dropdownSettingsColor\" (onSelect)=\"onItemColorSelect($event)\" (onDeSelect)=\"onItemColorDeSelect($event)\" (onSelectAll)=\"onColorSelectAll($event)\" (onDeSelectAll)=\"onColorDeSelectAll($event)\"\n                                formControlName=\"model_color\">\n                            </angular2-multiselect>\n                            <div *ngIf=\"submitted && addEditModelForm.controls.model_color.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditModelForm.controls.model_color.errors?.required\">\n                                    {{'MODEL.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Status -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'MODEL.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"model_status\" [ngClass]=\"{'is-invalid': submitted && addEditModelForm.controls.model_status.errors}\">\n                                    <option value=\"{{'MODEL.LABEL.ACTIVE' | translate}}\">{{'MODEL.LABEL.ACTIVE' | translate}}</option>\n                                    <option value=\"{{'MODEL.LABEL.INACTIVE' | translate}}\">{{'MODEL.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditModelForm.controls.model_status.errors\" class=\"form-control-feedback\" style=\"color:red\">\n                                <p *ngIf=\"submitted && addEditModelForm.controls.model_status.errors?.required\">\n                                    {{'MODEL.VALIDTION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/model/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate}}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">{{'BUTTONS.SUBMIT' | translate}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/model-list/model-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/model/model-list/model-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'MODEL.LIST' | translate}}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/model/add\" class=\"btn btn-brand btn-elevte btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate}}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/model.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/model/model.component.html ***!
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

/***/ "./src/app/views/pages/model/add-edit-model/add-edit-model.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/model/add-edit-model/add-edit-model.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvbW9kZWwvYWRkLWVkaXQtbW9kZWwvYWRkLWVkaXQtbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZGVsL2FkZC1lZGl0LW1vZGVsL2FkZC1lZGl0LW1vZGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/model/add-edit-model/add-edit-model.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/model/add-edit-model/add-edit-model.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddModelComponent, EditModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelComponent", function() { return AddModelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModelComponent", function() { return EditModelComponent; });
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
/* harmony import */ var _state_model_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/model.actions */ "./src/app/views/pages/model/state/model.actions.ts");
/* harmony import */ var _state_model_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/model.reducer */ "./src/app/views/pages/model/state/model.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../brand/brand.service */ "./src/app/views/pages/brand/brand.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../model.service */ "./src/app/views/pages/model/model.service.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");

















var AddModelComponent = /** @class */ (function () {
    function AddModelComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, brandService, modelService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.brandService = brandService;
        this.modelService = modelService;
        this.isAdd = true;
        this.submitted = false;
        this.element = false;
        this.brands = [];
        this.colors = [];
        this.selectedItemsColor = [];
        this.dropdownSettingsColor = {};
        this.MODEL_CONST = this.translate.instant('MODEL');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.MODEL'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + "|" + this.MODEL_CONST.MODULE_NAME);
    }
    AddModelComponent.prototype.ngOnInit = function () {
        this.buildAddEditModelForm();
        this.getAllBrand();
        this.getAllColor();
        this.dropdownSettingsColor = {
            singleSelection: false,
            text: "Select Color",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    };
    AddModelComponent.prototype.onItemColorSelect = function (item) {
        this.selectedItemsColor[item];
    };
    AddModelComponent.prototype.onItemColorDeSelect = function (item) {
        this.selectedItemsColor.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsColor[el];
            }
        });
    };
    AddModelComponent.prototype.onColorSelectAll = function (items) {
    };
    AddModelComponent.prototype.onColorDeSelectAll = function (items) {
    };
    AddModelComponent.prototype.buildAddEditModelForm = function () {
        this.addEditModelForm = this._formBuilder.group({
            model_brandId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            model_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_16__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_16__["validataion"].nameMaxLength)]],
            model_color: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            model_status: ["ACTIVE", []]
        });
    };
    AddModelComponent.prototype.getAllBrand = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.brandService.getAllBrands().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.brands = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddModelComponent.prototype.getAllColor = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.modelService.getAllColors().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        data['data'].forEach(function (element) {
                            _this.colors.push({
                                id: element._id,
                                itemName: element.color_name
                            });
                        });
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddModelComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, colorsArray_1, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditModelForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditModelForm.value;
                    colorsArray_1 = [];
                    form.model_color.forEach(function (element) {
                        colorsArray_1.push(element.id);
                    });
                    obj = {
                        model_brandId: form.model_brandId,
                        model_name: form.model_name,
                        model_color: colorsArray_1,
                        model_status: form.model_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_model_actions__WEBPACK_IMPORTED_MODULE_11__["AddModel"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_model_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/model/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditModelForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddModelComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"] },
        { type: _model_service__WEBPACK_IMPORTED_MODULE_15__["ModelService"] }
    ]; };
    AddModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-model',
            template: __webpack_require__(/*! raw-loader!./add-edit-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/add-edit-model/add-edit-model.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-model.component.scss */ "./src/app/views/pages/model/add-edit-model/add-edit-model.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"],
            _model_service__WEBPACK_IMPORTED_MODULE_15__["ModelService"]])
    ], AddModelComponent);
    return AddModelComponent;
}());

//  Edit 
var EditModelComponent = /** @class */ (function () {
    function EditModelComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, brandService, modelService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.brandService = brandService;
        this.modelService = modelService;
        this.isAdd = false;
        this.submitted = false;
        this.element = false;
        this.brands = [];
        this.colors = [];
        this.selectedItemsColor = [];
        this.dropdownSettingsColor = {};
        this.MODEL_CONST = this.translate.instant('MODEL');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.MODEL'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + "|" + this.MODEL_CONST.MODULE_NAME);
    }
    EditModelComponent.prototype.ngOnInit = function () {
        // this.getAllColor();
        this.buildAddEditModelForm();
        this.getAllBrand();
        this.getModelDetail();
        this.dropdownSettingsColor = {
            singleSelection: false,
            text: "Select Color",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    };
    EditModelComponent.prototype.onItemColorSelect = function (item) {
        this.selectedItemsColor[item];
    };
    EditModelComponent.prototype.onItemColorDeSelect = function (item) {
        this.selectedItemsColor.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsColor[el];
            }
        });
    };
    EditModelComponent.prototype.onColorSelectAll = function (items) {
    };
    EditModelComponent.prototype.onColorDeSelectAll = function (items) {
    };
    EditModelComponent.prototype.buildAddEditModelForm = function () {
        this.addEditModelForm = this._formBuilder.group({
            model_brandId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            model_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_16__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_16__["validataion"].nameMaxLength)]],
            model_color: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            model_status: ["ACTIVE", []]
        });
    };
    EditModelComponent.prototype.getModelDetail = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_model_actions__WEBPACK_IMPORTED_MODULE_11__["LoadModel"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_model_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 4];
                        if (!(data['code'] == 200)) return [3 /*break*/, 3];
                        result = data['data'];
                        this.modelData = data['data'];
                        fd = {
                            model_brandId: result.model_brandId != null && result.model_brandId != undefined ? result.model_brandId : "",
                            model_name: result.model_name,
                            // model_color: result.model_color,
                            model_status: result.model_status != null && result.model_status != undefined ? result.model_status : "",
                        };
                        return [4 /*yield*/, this.addEditModelForm.patchValue(fd)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAllColor()];
                    case 2:
                        _a.sent();
                        // to fecth details for service type
                        // this.colors.forEach(element => {
                        //     if (result.model_color.indexOf(element.id)) {
                        //         this.selectedItemsColor.push(element);
                        //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        //             this.dtr.detectChanges();
                        //         }
                        //     }
                        // });
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 4];
                    case 3:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    EditModelComponent.prototype.getAllBrand = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.brandService.getAllBrands().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.brands = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditModelComponent.prototype.getAllColor = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.modelService.getAllColors().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        data['data'].forEach(function (element) {
                            _this.colors.push({
                                id: element._id,
                                itemName: element.color_name
                            });
                            var found = _this.modelData.model_color.find(function (color) { return color == element._id; });
                            if (found) {
                                _this.selectedItemsColor.push({ id: element._id, itemName: element.color_name });
                            }
                        });
                        this.addEditModelForm.patchValue({
                            model_color: this.selectedItemsColor
                        });
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditModelComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, colorsArray_2, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditModelForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditModelForm.value;
                    colorsArray_2 = [];
                    form.model_color.forEach(function (element) {
                        colorsArray_2.push(element.id);
                    });
                    obj = {
                        id: this.id,
                        data: {
                            model_brandId: form.model_brandId,
                            model_name: form.model_name,
                            model_color: colorsArray_2,
                            model_status: form.model_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_model_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateModel"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_model_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/model/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditModelForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditModelComponent.ctorParameters = function () { return [
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
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"] },
        { type: _model_service__WEBPACK_IMPORTED_MODULE_15__["ModelService"] }
    ]; };
    EditModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-model',
            template: __webpack_require__(/*! raw-loader!./add-edit-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/add-edit-model/add-edit-model.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-model.component.scss */ "./src/app/views/pages/model/add-edit-model/add-edit-model.component.scss")]
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
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"],
            _model_service__WEBPACK_IMPORTED_MODULE_15__["ModelService"]])
    ], EditModelComponent);
    return EditModelComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/model/model-list/model-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/model/model-list/model-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZGVsL21vZGVsLWxpc3QvbW9kZWwtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/model/model-list/model-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/model/model-list/model-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListComponent", function() { return ModelListComponent; });
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










function _window() {
    //return the global native browser object
    return window;
}
var ModelListComponent = /** @class */ (function () {
    function ModelListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.stateSubscription = '';
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.MODEL_CONST = [];
        this.searchObj = { field: 'model_name', model_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.MODEL_CONST = this.translate.instant("MODEL");
        //SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.MODEL"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.MODEL_CONST.MODULE_NAME);
    }
    ModelListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    ModelListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            console.log(data);
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].MODELS.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].MODELS.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].MODELS.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].MODELS.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    ModelListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            console.log("Element", element);
            console.log("permission", permissionName);
            return element == permissionName;
        });
    };
    ModelListComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-model-list', scripts).then(function () {
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
                    sProcessing: that.MODEL_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listModel,
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
                        title: that.MODEL_CONST.LABEL.SR_NO, data: null,
                    },
                    { title: that.MODEL_CONST.LABEL.BRAND, data: 'model_brandName' },
                    { title: that.MODEL_CONST.LABEL.MODEL, data: 'model_name' },
                    { title: that.MODEL_CONST.LABEL.STATUS, data: 'model_status' },
                    { title: that.MODEL_CONST.LABEL.CREATED_ON, data: 'model_createdOn' },
                    { title: that.MODEL_CONST.LABEL.MODIFIED_ON, data: 'model_modifyOn' },
                    { title: that.MODEL_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.MODEL_CONST.LABEL.SR_NO:
                                break;
                            case that.MODEL_CONST.LABEL.BRAND:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.MODEL_CONST.LABEL.MODEL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.MODEL_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.MODEL_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.MODEL_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.MODEL_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            // case that.MODEL_CONST.LABEL.CREATED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            // case that.MODEL_CONST.LABEL.MODIFIED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.MODEL_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.MODEL_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.MODEL_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.model_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.model_status].title + '</span>';
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
    ModelListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/model/edit/' + this.id]);
    };
    ModelListComponent.prototype.delete = function (e) {
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
                            component: 'model',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'model',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    ModelListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    ModelListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    ModelListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-model-list',
            template: __webpack_require__(/*! raw-loader!./model-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/model-list/model-list.component.html"),
            styles: [__webpack_require__(/*! ./model-list.component.scss */ "./src/app/views/pages/model/model-list/model-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], ModelListComponent);
    return ModelListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/model/model.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/model/model.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21vZGVsL21vZGVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/model/model.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/model/model.component.ts ***!
  \******************************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var ModelComponent = /** @class */ (function () {
    function ModelComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].MODEL);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].modelManagement);
    }
    ModelComponent.prototype.ngOnInit = function () {
    };
    ModelComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    ModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-model',
            template: __webpack_require__(/*! raw-loader!./model.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/model/model.component.html"),
            styles: [__webpack_require__(/*! ./model.component.scss */ "./src/app/views/pages/model/model.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/model/model.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/pages/model/model.module.ts ***!
  \***************************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_model_add_edit_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-model/add-edit-model.component */ "./src/app/views/pages/model/add-edit-model/add-edit-model.component.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/views/pages/model/model-list/model-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_model_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/model.effects */ "./src/app/views/pages/model/state/model.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_model_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/model.reducer */ "./src/app/views/pages/model/state/model.reducer.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model.component */ "./src/app/views/pages/model/model.component.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermission = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _model_component__WEBPACK_IMPORTED_MODULE_15__["ModelComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_4__["ModelListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MODELS.READ,
                    mainModulePermission: menuPermission,
                }
            },
            {
                path: 'add',
                component: _add_edit_model_add_edit_model_component__WEBPACK_IMPORTED_MODULE_3__["AddModelComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MODELS.CREATE,
                    mainModulePermission: menuPermission,
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_model_add_edit_model_component__WEBPACK_IMPORTED_MODULE_3__["EditModelComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MODELS.EDIT,
                    mainModulePermission: menuPermission,
                }
            }
        ]
    }
];
var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_model_list_model_list_component__WEBPACK_IMPORTED_MODULE_4__["ModelListComponent"], _model_component__WEBPACK_IMPORTED_MODULE_15__["ModelComponent"], _add_edit_model_add_edit_model_component__WEBPACK_IMPORTED_MODULE_3__["AddModelComponent"], _add_edit_model_add_edit_model_component__WEBPACK_IMPORTED_MODULE_3__["EditModelComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_model_effects__WEBPACK_IMPORTED_MODULE_11__["ModelEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("models", _state_model_reducer__WEBPACK_IMPORTED_MODULE_13__["ModelReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["AngularMultiSelectModule"]
            ]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/views/pages/model/state/model.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/model/state/model.actions.ts ***!
  \**********************************************************/
/*! exports provided: ModelActionTypes, LoadModel, LoadModelSuccess, LoadModelFail, UpdateModel, UpdateModelSuccess, UpdateModelFail, DeleteModel, DeleteModelSuccess, DeleteModelFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddModel, AddModelSuccess, AddModelFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelActionTypes", function() { return ModelActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadModel", function() { return LoadModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadModelSuccess", function() { return LoadModelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadModelFail", function() { return LoadModelFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModel", function() { return UpdateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModelSuccess", function() { return UpdateModelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModelFail", function() { return UpdateModelFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModel", function() { return DeleteModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModelSuccess", function() { return DeleteModelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModelFail", function() { return DeleteModelFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModel", function() { return AddModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelSuccess", function() { return AddModelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelFail", function() { return AddModelFail; });
var ModelActionTypes;
(function (ModelActionTypes) {
    ModelActionTypes["UPDATE_STATUS"] = "[MODEL] Update Status";
    ModelActionTypes["UPDATE_STATUS_SUCCESS"] = "[MODEL]  Update Status Success";
    ModelActionTypes["UPDATE_STATUS_FAIL"] = "[MODEL]  Update Status Fail";
    ModelActionTypes["LOAD_MODEL"] = "[MODEL] Load MODEL";
    ModelActionTypes["LOAD_MODEL_SUCCESS"] = "[MODEL] Load MODEL Success";
    ModelActionTypes["LOAD_MODEL_FAIL"] = "[MODEL] Load MODEL Fail";
    ModelActionTypes["UPDATE_MODEL"] = "[MODEL] Update MODEL";
    ModelActionTypes["UPDATE_MODEL_SUCCESS"] = "[MODEL] Update MODEL Success";
    ModelActionTypes["UPDATE_MODEL_FAIL"] = "[MODEL] Update MODEL Fail";
    ModelActionTypes["DELETE_MODEL"] = "[MODEL] Delete MODEL";
    ModelActionTypes["DELETE_MODEL_SUCCESS"] = "[MODEL] Delete MODEL Success";
    ModelActionTypes["DELETE_MODEL_FAIL"] = "[MODEL] Delete MODEL Fail";
    ModelActionTypes["ADD_MODEL"] = "[MODEL] Upload Data";
    ModelActionTypes["ADD_MODEL_SUCCESS"] = "[MODEL] Upload Data Success";
    ModelActionTypes["ADD_MODEL_FAIL"] = "[MODEL] Upload Data Fail";
    ModelActionTypes["UPLOAD_DATA"] = "[MODEL] Upload Data";
    ModelActionTypes["UPLOAD_DATA_SUCCESS"] = "[MODEL] Upload Data Success";
    ModelActionTypes["UPLOAD_DATA_FAIL"] = "[MODEL] Upload Data Fail";
})(ModelActionTypes || (ModelActionTypes = {}));
var LoadModel = /** @class */ (function () {
    function LoadModel(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.LOAD_MODEL;
    }
    LoadModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadModel;
}());

var LoadModelSuccess = /** @class */ (function () {
    function LoadModelSuccess(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.LOAD_MODEL_SUCCESS;
    }
    LoadModelSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadModelSuccess;
}());

var LoadModelFail = /** @class */ (function () {
    function LoadModelFail(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.LOAD_MODEL_FAIL;
    }
    LoadModelFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadModelFail;
}());

var UpdateModel = /** @class */ (function () {
    function UpdateModel(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.UPDATE_MODEL;
    }
    UpdateModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateModel;
}());

var UpdateModelSuccess = /** @class */ (function () {
    function UpdateModelSuccess(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.UPDATE_MODEL_SUCCESS;
    }
    UpdateModelSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateModelSuccess;
}());

var UpdateModelFail = /** @class */ (function () {
    function UpdateModelFail(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.UPDATE_MODEL_FAIL;
    }
    UpdateModelFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateModelFail;
}());

var DeleteModel = /** @class */ (function () {
    function DeleteModel(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.DELETE_MODEL;
    }
    DeleteModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteModel;
}());

var DeleteModelSuccess = /** @class */ (function () {
    function DeleteModelSuccess(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.DELETE_MODEL_SUCCESS;
    }
    DeleteModelSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteModelSuccess;
}());

var DeleteModelFail = /** @class */ (function () {
    function DeleteModelFail(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.DELETE_MODEL_FAIL;
    }
    DeleteModelFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteModelFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddModel = /** @class */ (function () {
    function AddModel(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.ADD_MODEL;
    }
    AddModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddModel;
}());

var AddModelSuccess = /** @class */ (function () {
    function AddModelSuccess(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.ADD_MODEL_SUCCESS;
    }
    AddModelSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddModelSuccess;
}());

var AddModelFail = /** @class */ (function () {
    function AddModelFail(payload) {
        this.payload = payload;
        this.type = ModelActionTypes.ADD_MODEL_FAIL;
    }
    AddModelFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddModelFail;
}());



/***/ }),

/***/ "./src/app/views/pages/model/state/model.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/model/state/model.effects.ts ***!
  \**********************************************************/
/*! exports provided: ModelEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelEffect", function() { return ModelEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model.actions */ "./src/app/views/pages/model/state/model.actions.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model.service */ "./src/app/views/pages/model/model.service.ts");







var ModelEffect = /** @class */ (function () {
    function ModelEffect(actions$, ModelService) {
        var _this = this;
        this.actions$ = actions$;
        this.ModelService = ModelService;
        this.deleteModel$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["ModelActionTypes"].DELETE_MODEL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.ModelService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _model_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteModelSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _model_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteModelFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["ModelActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ModelService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _model_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _model_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err));
            }));
        }));
        this.loadModel$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["ModelActionTypes"].LOAD_MODEL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.ModelService.getModelById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _model_actions__WEBPACK_IMPORTED_MODULE_5__["LoadModelSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _model_actions__WEBPACK_IMPORTED_MODULE_5__["LoadModelFail"](err));
            }));
        }));
        this.updateModel$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["ModelActionTypes"].UPDATE_MODEL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ModelService
                .updateModel(data.id, data.data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _model_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateModelSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _model_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateModelFail"](err));
            }));
        }));
        this.addModel$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_model_actions__WEBPACK_IMPORTED_MODULE_5__["ModelActionTypes"].ADD_MODEL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ModelService.addModel(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _model_actions__WEBPACK_IMPORTED_MODULE_5__["AddModelSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _model_actions__WEBPACK_IMPORTED_MODULE_5__["AddModelFail"](err));
            }));
        }));
    }
    ModelEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ModelEffect.prototype, "deleteModel$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ModelEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ModelEffect.prototype, "loadModel$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ModelEffect.prototype, "updateModel$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ModelEffect.prototype, "addModel$", void 0);
    ModelEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"]])
    ], ModelEffect);
    return ModelEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/model/state/model.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/model/state/model.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, ModelReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelReducer", function() { return ModelReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.actions */ "./src/app/views/pages/model/state/model.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function ModelReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Model load-----------------------------
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].LOAD_MODEL_SUCCESS: {
            return action.payload;
        }
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].LOAD_MODEL_FAIL: {
            return action.payload.error;
        }
        // for Model delete-----------------------------
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].DELETE_MODEL_SUCCESS: {
            return action.payload;
        }
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].DELETE_MODEL_FAIL: {
            return action.payload.error;
        }
        // for Model update-----------------------------
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].UPDATE_MODEL_SUCCESS: {
            return action.payload;
        }
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].UPDATE_MODEL_FAIL: {
            return action.payload.error;
        }
        // for Model upadat status-----------------------------
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Model add-----------------------------
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].ADD_MODEL_SUCCESS: {
            return action.payload;
        }
        case _model_actions__WEBPACK_IMPORTED_MODULE_0__["ModelActionTypes"].ADD_MODEL_FAIL: {
            return action.payload.error;
        }
    }
}
var getModelState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("models");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getModelState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-model-model-module.js.map