(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-roles-roles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'ROLES.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'ROLES.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/roles/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditRoleForm\" [formGroup]=\"addEditRoleForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ROLES.LABEL.ROLE_NAME' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'ROLES.PLACEHOLDERS.ROLE_NAME' | translate}}\" type=\"text\"\n                            formControlName=\"role_name\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditRoleForm.controls.role_name.errors }\">\n                        <div *ngIf=\"submitted && addEditRoleForm.controls.role_name.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditRoleForm.controls.role_name.errors?.required\">\n                                This field is required.</p>\n                            <p *ngIf=\"addEditRoleForm.controls.role_name.errors?.minlength && !addEditRoleForm.controls.role_name.errors?.pattern\"\n                                class=\"lbl-err\"> Minimum 2 characters long.</p>\n                            <p *ngIf=\"addEditRoleForm.controls.role_name.errors?.maxlength && !addEditRoleForm.controls.role_name.errors?.pattern\"\n                                class=\"lbl-err\"> Maximum 64 characters long.</p>\n                            <p *ngIf=\"submitted && addEditRoleForm.controls.role_name.errors?.pattern\">\n                                Title is invalid. </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-3\">\n                        <h4>{{'ROLES.LABEL.PERMISSIONS' | translate}}</h4>\n                    </div>\n                </div>\n                <table class=\"table table-striped- table-bordered table-hover table-checkable dataTable no-footer\">\n                    <thead>\n                        <tr>\n                            <th class=\"center\">Module Name</th>\n                            <th class=\"center\">Read</th>\n                            <th class=\"center\">Edit</th>\n                            <th class=\"center\">Delete</th>\n                            <th class=\"center\">Create</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let permission of allPermissions\">\n                            <td class=\"center\">  {{permission._id.permission_title}} </td>\n                            <ng-container *ngFor=\"let childPermission of permission.perDetail\">\n                                <td class=\"center\">  <label class=\"kt-checkbox kt-checkbox--bold  kt-checkbox--brand\">\n                                    <input type=\"checkbox\" [id]=\"childPermission._id\" (change)=\"onChangePermission($event)\"\n                                        [value]=\"childPermission._id\"> \n                                        <!-- {{childPermission.permission_title}} -->\n                                    <span></span>\n                                </label></td>\n                            </ng-container>\n                            <td *ngIf = \"permission.perDetail.length == 1\"></td>\n                            <td *ngIf = \"permission.perDetail.length == 1\"></td>\n                            <td *ngIf = \"permission.perDetail.length == 1\"></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- <div class=\"form-group  row\" *ngFor=\"let permission of allPermissions\">\n                    <div class=\"col-xl-3\">\n                        {{permission._id.permission_title}}\n                    </div>\n                    <div class=\"col-xl-9\">\n                        <div \n                            style=\"display:inline-block !important; padding: 10px; \">\n                            <label class=\"kt-checkbox kt-checkbox--bold  kt-checkbox--brand\">\n                                <input type=\"checkbox\" [id]=\"childPermission._id\" (change)=\"onChangePermission($event)\"\n                                    [value]=\"childPermission._id\"> {{childPermission.permission_title}}\n                                <span></span>\n                            </label>\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/roles/list\"\n                            class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\"\n                            class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                           </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/permission-matrix/permission-matrix.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/roles/permission-matrix/permission-matrix.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">Permission Matrix </h3>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <table class=\"table table-striped- table-bordered table-hover table-checkable dataTable no-footer\">\n            <thead>\n                <tr>\n                    <th class=\"center\">Module Name</th>\n                    <th class=\"center\" *ngFor=\"let selectedPermission of selectedPermissions\"> {{selectedPermission._id.role_name }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class=\"center\">Select All/UnSelect All</td>\n                    <td class=\"center\" *ngFor=\"let selectedPermission of selectedPermissions\"> \n                        <label class=\"kt-checkbox kt-checkbox--bold  kt-checkbox--brand\">\n                            <input type=\"checkbox\" [class] =\"selectedPermission._id.role_slug\"    (change)=\"selectAll($event)\" [attr.data-roleId]=\"selectedPermission._id._id\"> \n                            <span></span>\n                        </label>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let permission of allPermissions\">\n                    <td class=\"center\">{{permission.module_name}} </td>\n                    <td class=\"center\" *ngFor=\"let selectedPermission of selectedPermissions\"> \n                        <label class=\"kt-checkbox kt-checkbox--bold  kt-checkbox--brand\">\n                            <input type=\"checkbox\" [id] = \"selectedPermission._id.role_slug+'_'+permission.per_id\"  [attr.checked]=\"checkHasSelected(permission.per_id,selectedPermission.permissions)\" (change)=\"onchangeCheckbox(permission.per_id,$event,selectedPermission._id._id)\" [attr.data-permissionId]=\"permission.per_id\" [attr.data-roleId] = \"selectedPermission._id._id\" [class] =\"selectedPermission._id.role_slug\" > \n                            <span></span>\n                        </label>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <div class=\"form-group  row\">\n            <div class=\"col-xl-12\">\n                    <button type=\"button\" routerLink=\"/roles/list\"\n                    class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                    <button type=\"submit\" (click)=\"onSubmit()\"\n                    class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                    </button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/roles-list/roles-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/roles/roles-list/roles-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'ROLES.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/roles/add\" class=\"btn btn-brand btn-elevate btn-icon-sm margin-r-5\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n            <a href=\"javascript:;\" routerLink=\"/roles/permission-matrix\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-key\"></i>Permission Matrix </a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <div class=\"kt-section\">\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/roles.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/roles/roles.component.html ***!
  \**********************************************************************************/
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

/***/ "./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcm9sZXMvYWRkLWVkaXQtcm9sZXMvYWRkLWVkaXQtcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JvbGVzL2FkZC1lZGl0LXJvbGVzL2FkZC1lZGl0LXJvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddRolesComponent, EditRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRolesComponent", function() { return AddRolesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRolesComponent", function() { return EditRolesComponent; });
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
/* harmony import */ var _state_roles_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/roles.actions */ "./src/app/views/pages/roles/state/roles.actions.ts");
/* harmony import */ var _state_roles_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/roles.reducer */ "./src/app/views/pages/roles/state/roles.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../roles.service */ "./src/app/views/pages/roles/roles.service.ts");
















// For Add roles
var AddRolesComponent = /** @class */ (function () {
    function AddRolesComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate) {
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
        this.selectedPermission = [];
        this.permissionAdd = [];
        this.ROLES_CONST = this.translate.instant('ROLES');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.ROLES'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.ROLES_CONST.MODULE_NAME);
    }
    AddRolesComponent.prototype.ngOnInit = function () {
        this.buildaddEditRoleForm();
        this.getPermissions();
    };
    AddRolesComponent.prototype.buildaddEditRoleForm = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.addEditRoleForm = this._formBuilder.group({
            role_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
        });
    };
    AddRolesComponent.prototype.getPermissions = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_roles_actions__WEBPACK_IMPORTED_MODULE_12__["GetRole"]());
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_roles_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.allPermissions = data['data'];
                        this.dtr.detectChanges();
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
    AddRolesComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditRoleForm.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.addEditRoleForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true); // 2020-05-18
                        obj = {
                            role_name: form.role_name,
                            role_permissions: this.selectedPermission,
                        };
                        this.stateSubscription = this.store.dispatch(new _state_roles_actions__WEBPACK_IMPORTED_MODULE_12__["AddRole"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_roles_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/roles/list']);
                                }
                                else {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.error(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                }
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddRolesComponent.prototype.onChangePermission = function (event) {
        var _this = this;
        var v = event.target.value;
        if (event.target.checked) {
            this.selectedPermission.push(v);
        }
        else {
            var index = this.selectedPermission.indexOf(v);
            this.permissionAdd.map(function (x, i) {
                var index1 = _this.permissionAdd.indexOf(v);
                if (x == v) {
                    _this.permissionAdd.splice(index1, 1);
                }
            });
            if (index > -1) {
                this.selectedPermission.splice(index, 1);
            }
        }
    };
    AddRolesComponent.ctorParameters = function () { return [
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
    AddRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-roles',
            template: __webpack_require__(/*! raw-loader!./add-edit-roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-roles.component.scss */ "./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.scss")]
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
    ], AddRolesComponent);
    return AddRolesComponent;
}());

// For Edit Role
var EditRolesComponent = /** @class */ (function () {
    function EditRolesComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, roleService, titleService, translate) {
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
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.selectedPermission = [];
        this.permissionAdd = [];
        this.ROLES_CONST = this.translate.instant('ROLES');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.ROLES'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.ROLES_CONST.MODULE_NAME);
    }
    EditRolesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildAddEditRolesForm()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPermissions()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditRolesComponent.prototype.buildAddEditRolesForm = function () {
        this.addEditRoleForm = this._formBuilder.group({
            role_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
        });
    };
    EditRolesComponent.prototype.getRoleDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.roleService.getRoleById(this.id).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    fd = {
                        role_name: result.role_name
                    };
                    this.addEditRoleForm.patchValue(fd);
                    if (result && result.role_permissions.length) {
                        this.selectedPermission = result.role_permissions;
                        this.selectedPermission.map(function (x, i) {
                            $(document).find('input:checkbox[id="' + x + '"]').attr("checked", true);
                            if (i == (_this.selectedPermission.length - 1)) {
                                _this.dtr.detectChanges();
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                            }
                        });
                    }
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
    EditRolesComponent.prototype.getPermissions = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.roleService.getPermissionList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 4];
                        if (!(data['code'] == 200)) return [3 /*break*/, 3];
                        this.allPermissions = data['data'];
                        if (!(this.dtr && !this.dtr.destroyed)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.dtr.detectChanges();
                        return [4 /*yield*/, this.getRoleDetails()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    EditRolesComponent.prototype.onChangePermission = function (event) {
        var v = event.target.value;
        if (event.target.checked) {
            this.selectedPermission.push(v);
        }
        else {
            var index = this.selectedPermission.indexOf(v);
            if (index > -1) {
                this.selectedPermission.splice(index, 1);
            }
        }
    };
    EditRolesComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditRoleForm.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.addEditRoleForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true); // 2020-05-18
                        obj = {
                            id: this.id,
                            data: {
                                role_name: form.role_name,
                                role_permissions: this.selectedPermission,
                            }
                        };
                        this.stateSubscription = this.store.dispatch(new _state_roles_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateRole"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_roles_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var result;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data && data != undefined)) return [3 /*break*/, 5];
                                        if (!(data['code'] == 200)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, data['data']];
                                    case 1:
                                        result = _a.sent();
                                        if (!(result && result.length)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.localStorageService.setBehaviorView(result)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                        this.toastr.success(data['message']);
                                        this.stateSubscription.unsubscribe();
                                        this.router.navigate(['/roles/list']);
                                        return [3 /*break*/, 5];
                                    case 4:
                                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                        this.toastr.error(data['message']);
                                        this.stateSubscription.unsubscribe();
                                        _a.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditRolesComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _roles_service__WEBPACK_IMPORTED_MODULE_15__["RolesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    EditRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-roles',
            template: __webpack_require__(/*! raw-loader!./add-edit-roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-roles.component.scss */ "./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _roles_service__WEBPACK_IMPORTED_MODULE_15__["RolesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], EditRolesComponent);
    return EditRolesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/permission-matrix/permission-matrix.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/roles/permission-matrix/permission-matrix.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcm9sZXMvcGVybWlzc2lvbi1tYXRyaXgvcGVybWlzc2lvbi1tYXRyaXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JvbGVzL3Blcm1pc3Npb24tbWF0cml4L3Blcm1pc3Npb24tbWF0cml4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/roles/permission-matrix/permission-matrix.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/roles/permission-matrix/permission-matrix.component.ts ***!
  \************************************************************************************/
/*! exports provided: PermissionMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionMatrixComponent", function() { return PermissionMatrixComponent; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../roles.service */ "./src/app/views/pages/roles/roles.service.ts");













var PermissionMatrixComponent = /** @class */ (function () {
    function PermissionMatrixComponent(subheaderService, _formBuilder, router, localStorageService, toastr, roleService, dtr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.roleService = roleService;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.ROLES_CONST = this.translate.instant("ROLES");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.ROLES"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.ROLES_CONST.MODULE_NAME);
    }
    PermissionMatrixComponent.prototype.ngOnInit = function () {
        this.getPermissions();
    };
    PermissionMatrixComponent.prototype.getPermissions = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.roleService.getRoleWisePermissionMatrix().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data["code"] == 200) {
                    result = data["data"];
                    this.allPermissions = result.allPermissions;
                    this.selectedPermissions = result.selectedPermissions;
                    this.dtr.detectChanges();
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    this.toastr.error(data["message"]);
                }
                return [2 /*return*/];
            });
        }); });
    };
    PermissionMatrixComponent.prototype.checkHasSelected = function (permission_name, selectedPermissions) {
        var a = selectedPermissions.find(function (element) {
            return element.toString() == permission_name.toString();
        });
        if (a && a != undefined) {
            return true;
        }
        else {
            return null;
        }
    };
    PermissionMatrixComponent.prototype.onchangeCheckbox = function (permisison_id, event, role_id) {
        var _this = this;
        this.selectedPermissions.map(function (x, i) {
            if (x._id._id == role_id) {
                if (event.target.checked) {
                    _this.selectedPermissions[i].permissions.push(permisison_id);
                }
                else {
                    var index = _this.selectedPermissions[i].permissions.indexOf(permisison_id);
                    if (index > -1) {
                        _this.selectedPermissions[i].permissions.splice(index, 1);
                    }
                }
            }
        });
    };
    PermissionMatrixComponent.prototype.onSubmit = function () {
        var _this = this;
        this.roleService
            .updatePermissionMatrix({ permissions: this.selectedPermissions })
            .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data["code"] == 200) {
                    this.router.navigate(["roles/list"]);
                }
                else {
                    this.toastr.error(data["message"]);
                }
                return [2 /*return*/];
            });
        }); });
    };
    PermissionMatrixComponent.prototype.selectAll = function (event) {
        var roleId;
        roleId = $("input[class='" + event.target.className + "']").attr('data-roleId');
        var that = this;
        that.selectedPermissions.map(function (x, j) {
            if (x._id._id == roleId) {
                that.selectedPermissions[j].permissions = [];
            }
        });
        //-------------------------------------------
        if (event.target.checked) {
            $("input[class='" + event.target.className + "']").each(function (x, i) {
                if ($(i).attr('data-permissionId') != undefined) {
                    var selected_1 = $(i).attr('data-permissionId');
                    $(i).attr("checked", true);
                    that.selectedPermissions.map(function (x, j) {
                        if (x._id._id == roleId) {
                            that.selectedPermissions[j].permissions.push(selected_1);
                        }
                    });
                }
            });
        }
        else {
            $("input[class='" + event.target.className + "']").attr("checked", false);
        }
    };
    PermissionMatrixComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _roles_service__WEBPACK_IMPORTED_MODULE_12__["RolesService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }
    ]; };
    PermissionMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-permission-matrix",
            template: __webpack_require__(/*! raw-loader!./permission-matrix.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/permission-matrix/permission-matrix.component.html"),
            styles: [__webpack_require__(/*! ./permission-matrix.component.scss */ "./src/app/views/pages/roles/permission-matrix/permission-matrix.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _roles_service__WEBPACK_IMPORTED_MODULE_12__["RolesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
    ], PermissionMatrixComponent);
    return PermissionMatrixComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/roles-list/roles-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/roles/roles-list/roles-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-r-5 {\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcm9sZXMvcm9sZXMtbGlzdC9yb2xlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9yb2xlcy9yb2xlcy1saXN0L3JvbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXItNXtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/roles/roles-list/roles-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/roles/roles-list/roles-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: RolesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesListComponent", function() { return RolesListComponent; });
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
var RolesListComponent = /** @class */ (function () {
    function RolesListComponent(subheaderService, localStorageService, _script, router, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.ROLES_CONST = [];
        this.searchObj = { field: 'role_name', role_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.ROLES_CONST = this.translate.instant('ROLES');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.ROLES'));
        titleService.setTitle(this.APPNAME + " | " + this.ROLES_CONST.MODULE_NAME);
    }
    RolesListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    RolesListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ROLE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ROLE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ROLE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ROLE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    RolesListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    RolesListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-roles-list', scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            var table = $(document).find('#kt_datatable').DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                //colReorder: true, // for column reorder
                order: [],
                serverSide: true,
                oLanguage: {
                    sProcessing: that.ROLES_CONST.MESSAGES.PROCESSING,
                },
                // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n\t\t\t\t\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listRole,
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.ROLES_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.ROLES_CONST.LABEL.ROLE_NAME, data: 'role_name' },
                    { title: that.ROLES_CONST.LABEL.STATUS, data: 'role_status' },
                    { title: that.ROLES_CONST.LABEL.CREATED_ON, data: 'role_createdOn' },
                    { title: that.ROLES_CONST.LABEL.MODIFIED_ON, data: 'role_createdOn' },
                    { title: that.ROLES_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.ROLES_CONST.LABEL.SR_NO:
                                break;
                            case that.ROLES_CONST.LABEL.ROLE_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.ROLES_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">" + that.ROLES_CONST.PLACEHOLDERS.STATUS + "</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ACTIVE\">" + that.ROLES_CONST.LABEL.ACTIVE + "</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"INACTIVE\">" + that.ROLES_CONST.LABEL.INACTIVE + "</option></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t"));
                                break;
                            case that.ROLES_CONST.LABEL.CREATED_ON:
                                break;
                            case that.ROLES_CONST.LABEL.MODIFIED_ON:
                                break;
                            case that.ROLES_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n\t\t\t\t\t\t\t\tmargin-left: 10px !important; margin-top: 0px !important;\">\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>" + that.ROLES_CONST.BUTTONS.SEARCH + "</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n\t\t\t\t\t\t\t\tmargin-left: 10px !important; margin-top: 0px !important;\">\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span>" + that.ROLES_CONST.BUTTONS.RESET + "</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</button>");
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
                        if (column !== that.ROLES_CONST.LABEL.ACTIONS) {
                            $(input).appendTo($('<th>').appendTo(rowFilter));
                        }
                    });
                },
                columnDefs: [{
                        targets: -1,
                        title: that.ROLES_CONST.LABEL.ACTIONS,
                        orderable: !1,
                        bSortable: false,
                        width: '15%',
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
                        width: '30%',
                    },
                    {
                        targets: 2,
                        width: '15%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.role_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.role_status].title + '</span>';
                        }
                    },
                    {
                        targets: 3,
                        width: '15%'
                    },
                    {
                        targets: 4,
                        width: '15%'
                    },
                ],
            });
        });
    };
    RolesListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/roles/edit/' + this.id]);
    };
    RolesListComponent.prototype.delete = function (e) {
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
                            component: 'roles',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    RolesListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'roles',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    RolesListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    RolesListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
    ]; };
    RolesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-roles-list',
            template: __webpack_require__(/*! raw-loader!./roles-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/roles-list/roles-list.component.html"),
            styles: [__webpack_require__(/*! ./roles-list.component.scss */ "./src/app/views/pages/roles/roles-list/roles-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], RolesListComponent);
    return RolesListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/roles.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/roles/roles.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/roles/roles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/roles/roles.component.ts ***!
  \******************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var RolesComponent = /** @class */ (function () {
    function RolesComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].ROLE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].roleManagement);
    }
    RolesComponent.prototype.ngOnInit = function () {
    };
    RolesComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-roles',
            template: __webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/views/pages/roles/roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/roles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/pages/roles/roles.module.ts ***!
  \***************************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles.component */ "./src/app/views/pages/roles/roles.component.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles.service */ "./src/app/views/pages/roles/roles.service.ts");
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles-list/roles-list.component */ "./src/app/views/pages/roles/roles-list/roles-list.component.ts");
/* harmony import */ var _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-roles/add-edit-roles.component */ "./src/app/views/pages/roles/add-edit-roles/add-edit-roles.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_roles_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/roles.effects */ "./src/app/views/pages/roles/state/roles.effects.ts");
/* harmony import */ var _state_roles_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/roles.reducer */ "./src/app/views/pages/roles/state/roles.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _permission_matrix_permission_matrix_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./permission-matrix/permission-matrix.component */ "./src/app/views/pages/roles/permission-matrix/permission-matrix.component.ts");



















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.SETTINGS;
var routes = [
    {
        path: '',
        component: _roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["RolesListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].ROLE.READ,
                    mainModulePermission: menuPermision,
                }
            },
            {
                path: 'add',
                component: _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_7__["AddRolesComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].ROLE.CREATE,
                    mainModulePermission: menuPermision,
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_7__["EditRolesComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].ROLE.EDIT,
                    mainModulePermission: menuPermision,
                }
            },
            {
                path: 'permission-matrix',
                component: _permission_matrix_permission_matrix_component__WEBPACK_IMPORTED_MODULE_18__["PermissionMatrixComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].ROLE.EDIT,
                    mainModulePermission: menuPermision,
                }
            }
        ]
    }
];
var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"], _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["RolesListComponent"], _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_7__["AddRolesComponent"], _add_edit_roles_add_edit_roles_component__WEBPACK_IMPORTED_MODULE_7__["EditRolesComponent"], _permission_matrix_permission_matrix_component__WEBPACK_IMPORTED_MODULE_18__["PermissionMatrixComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_4__["ScriptLoaderService"], _roles_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forFeature([_state_roles_effects__WEBPACK_IMPORTED_MODULE_14__["RolesEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature("roles", _state_roles_reducer__WEBPACK_IMPORTED_MODULE_15__["roleReducer"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild()
            ],
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/state/roles.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/roles/state/roles.actions.ts ***!
  \**********************************************************/
/*! exports provided: RoleActionTypes, LoadRole, LoadRoleSuccess, LoadRoleFail, UpdateRole, UpdateRoleSuccess, UpdateRoleFail, DeleteRole, DeleteRoleSuccess, DeleteRoleFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddRole, AddRoleSuccess, AddRoleFail, GetRole, GetRoleSuccess, GetRoleFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleActionTypes", function() { return RoleActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRole", function() { return LoadRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRoleSuccess", function() { return LoadRoleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRoleFail", function() { return LoadRoleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRole", function() { return UpdateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRoleSuccess", function() { return UpdateRoleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRoleFail", function() { return UpdateRoleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRole", function() { return DeleteRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRoleSuccess", function() { return DeleteRoleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRoleFail", function() { return DeleteRoleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRole", function() { return AddRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleSuccess", function() { return AddRoleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleFail", function() { return AddRoleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRole", function() { return GetRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoleSuccess", function() { return GetRoleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoleFail", function() { return GetRoleFail; });
var RoleActionTypes;
(function (RoleActionTypes) {
    RoleActionTypes["UPDATE_STATUS"] = "[ROLE] Update Status";
    RoleActionTypes["UPDATE_STATUS_SUCCESS"] = "[ROLE]  Update Status Success";
    RoleActionTypes["UPDATE_STATUS_FAIL"] = "[ROLE]  Update Status Fail";
    RoleActionTypes["LOAD_ROLE"] = "[ROLE] Load ROLE";
    RoleActionTypes["LOAD_ROLE_SUCCESS"] = "[ROLE] Load ROLE Success";
    RoleActionTypes["LOAD_ROLE_FAIL"] = "[ROLE] Load ROLE Fail";
    RoleActionTypes["UPDATE_ROLE"] = "[ROLE] Update ROLE";
    RoleActionTypes["UPDATE_ROLE_SUCCESS"] = "[ROLE] Update ROLE Success";
    RoleActionTypes["UPDATE_ROLE_FAIL"] = "[ROLE] Update ROLE Fail";
    RoleActionTypes["DELETE_ROLE"] = "[ROLE] Delete ROLE";
    RoleActionTypes["DELETE_ROLE_SUCCESS"] = "[ROLE] Delete ROLE Success";
    RoleActionTypes["DELETE_ROLE_FAIL"] = "[ROLE] Delete ROLE Fail";
    RoleActionTypes["ADD_ROLE"] = "[ROLE] Add Data";
    RoleActionTypes["ADD_ROLE_SUCCESS"] = "[ROLE] Add Data Success";
    RoleActionTypes["ADD_ROLE_FAIL"] = "[ROLE] Add Data Fail";
    RoleActionTypes["GET_ROLE"] = "[ROLE] Get Permission Detail";
    RoleActionTypes["GET_ROLE_SUCCESS"] = "[ROLE] Get Permission Detail Success";
    RoleActionTypes["GET_ROLE_FAIL"] = "[ROLE] Get Permission Detail Fail";
})(RoleActionTypes || (RoleActionTypes = {}));
var LoadRole = /** @class */ (function () {
    function LoadRole(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.LOAD_ROLE;
    }
    LoadRole.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRole;
}());

var LoadRoleSuccess = /** @class */ (function () {
    function LoadRoleSuccess(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.LOAD_ROLE_SUCCESS;
    }
    LoadRoleSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRoleSuccess;
}());

var LoadRoleFail = /** @class */ (function () {
    function LoadRoleFail(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.LOAD_ROLE_FAIL;
    }
    LoadRoleFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRoleFail;
}());

var UpdateRole = /** @class */ (function () {
    function UpdateRole(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.UPDATE_ROLE;
    }
    UpdateRole.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRole;
}());

var UpdateRoleSuccess = /** @class */ (function () {
    function UpdateRoleSuccess(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.UPDATE_ROLE_SUCCESS;
    }
    UpdateRoleSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRoleSuccess;
}());

var UpdateRoleFail = /** @class */ (function () {
    function UpdateRoleFail(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.UPDATE_ROLE_FAIL;
    }
    UpdateRoleFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRoleFail;
}());

var DeleteRole = /** @class */ (function () {
    function DeleteRole(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.DELETE_ROLE;
    }
    DeleteRole.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRole;
}());

var DeleteRoleSuccess = /** @class */ (function () {
    function DeleteRoleSuccess(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.DELETE_ROLE_SUCCESS;
    }
    DeleteRoleSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRoleSuccess;
}());

var DeleteRoleFail = /** @class */ (function () {
    function DeleteRoleFail(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.DELETE_ROLE_FAIL;
    }
    DeleteRoleFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRoleFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddRole = /** @class */ (function () {
    function AddRole(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.ADD_ROLE;
    }
    AddRole.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRole;
}());

var AddRoleSuccess = /** @class */ (function () {
    function AddRoleSuccess(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.ADD_ROLE_SUCCESS;
    }
    AddRoleSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRoleSuccess;
}());

var AddRoleFail = /** @class */ (function () {
    function AddRoleFail(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.ADD_ROLE_FAIL;
    }
    AddRoleFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRoleFail;
}());

var GetRole = /** @class */ (function () {
    function GetRole() {
        this.type = RoleActionTypes.GET_ROLE;
    }
    return GetRole;
}());

var GetRoleSuccess = /** @class */ (function () {
    function GetRoleSuccess(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.GET_ROLE_SUCCESS;
    }
    GetRoleSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return GetRoleSuccess;
}());

var GetRoleFail = /** @class */ (function () {
    function GetRoleFail(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.GET_ROLE_FAIL;
    }
    GetRoleFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return GetRoleFail;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/state/roles.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/roles/state/roles.effects.ts ***!
  \**********************************************************/
/*! exports provided: RolesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesEffect", function() { return RolesEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _roles_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles.actions */ "./src/app/views/pages/roles/state/roles.actions.ts");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles.service */ "./src/app/views/pages/roles/roles.service.ts");





// import { StudentManagementService } from "../student-management.service";


var RolesEffect = /** @class */ (function () {
    function RolesEffect(actions$, roleService) {
        var _this = this;
        this.actions$ = actions$;
        this.roleService = roleService;
        this.deleteRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_roles_actions__WEBPACK_IMPORTED_MODULE_5__["RoleActionTypes"].DELETE_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.roleService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRoleSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRoleFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_roles_actions__WEBPACK_IMPORTED_MODULE_5__["RoleActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.roleService.updateRoleStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_roles_actions__WEBPACK_IMPORTED_MODULE_5__["RoleActionTypes"].LOAD_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.roleService.getRoleById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRoleSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRoleFail"](err));
            }));
        }));
        this.updateRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_roles_actions__WEBPACK_IMPORTED_MODULE_5__["RoleActionTypes"].UPDATE_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.roleService.updateRole(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateRole) {
                return new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRoleSuccess"](updateRole);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRoleFail"](err)); }));
        }));
        this.addRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_roles_actions__WEBPACK_IMPORTED_MODULE_5__["RoleActionTypes"].ADD_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.roleService.addRole(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newRole) {
                return new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["AddRoleSuccess"](newRole);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["AddRoleFail"](err));
            }));
        }));
        this.getPermissions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_roles_actions__WEBPACK_IMPORTED_MODULE_5__["RoleActionTypes"].GET_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.roleService.getPermissionList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (permissions) {
                return new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["GetRoleSuccess"](permissions);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _roles_actions__WEBPACK_IMPORTED_MODULE_5__["GetRoleFail"](err)); }));
        }));
    }
    RolesEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RolesEffect.prototype, "deleteRole$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RolesEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RolesEffect.prototype, "loadRole$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RolesEffect.prototype, "updateRole$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RolesEffect.prototype, "addRole$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RolesEffect.prototype, "getPermissions$", void 0);
    RolesEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"]])
    ], RolesEffect);
    return RolesEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/roles/state/roles.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/roles/state/roles.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, roleReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleReducer", function() { return roleReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _roles_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.actions */ "./src/app/views/pages/roles/state/roles.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function roleReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].LOAD_ROLE_SUCCESS: {
            return action.payload;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].LOAD_ROLE_FAIL: {
            return action.payload.error;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].ADD_ROLE_SUCCESS: {
            return action.payload;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].ADD_ROLE_FAIL: {
            return action.payload.error;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].DELETE_ROLE_SUCCESS: {
            return action.payload;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].DELETE_ROLE_FAIL: {
            return action.payload.error;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].UPDATE_ROLE_SUCCESS: {
            return action.payload;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].UPDATE_ROLE_FAIL: {
            return action.payload.error;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].GET_ROLE_SUCCESS: {
            return action.payload;
        }
        case _roles_actions__WEBPACK_IMPORTED_MODULE_0__["RoleActionTypes"].GET_ROLE_FAIL: {
            return action.payload.error;
        }
    }
}
var getRoleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("roles");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getRoleState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-roles-roles-module.js.map