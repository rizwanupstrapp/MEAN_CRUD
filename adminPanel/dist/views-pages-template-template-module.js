(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-template-template-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/add-edit-template/add-edit-template.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/template/add-edit-template/add-edit-template.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'TEMPLATE.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'TEMPLATE.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/template/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n               class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditTemplateForm\" [formGroup]=\"addEditTemplateForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                Type\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"type\" formControlName=\"template_type\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_type.errors }\"\n                                >\n                                <option *ngFor=\"let option of options\">\n                                    {{option.name}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditTemplateForm.controls.template_type.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_type.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\" >\n                                <!-- {{ selectedOption != '' ?  selectedOption : 'TEMPLATE.LABEL.template_title' }} -->\n                                {{'TEMPLATE.LABEL.TEMPLATE_TITLE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template_title -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'TEMPLATE.PLACEHOLDERS.TEMPLATE_TITLE' | translate}}\" type=\"text\"\n                                formControlName=\"template_title_en\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_title_en.errors }\">\n                            <div *ngIf=\"submitted && addEditTemplateForm.controls.template_title_en.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_title_en.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditTemplateForm.controls.template_title_en.errors?.minlength && !addEditTemplateForm.controls.template_title_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditTemplateForm.controls.template_title_en.errors?.maxlength && !addEditTemplateForm.controls.template_title_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_title_en.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- -----------template_countryId -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\"\n                                (change)=\"changeCountry($event.target.value)\"\n                                formControlName=\"template_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_countryId.errors }\">\n                                <option value=\"\">{{'TEMPLATE.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditTemplateForm.controls.template_countryId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_countryId.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_CITY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-lg-12 multiselect_drpdwn\">\n                            <angular2-multiselect [data]=\"countryCities\" [(ngModel)]=\"selectedItemsCity\" \n                                [settings]=\"dropdownSettingsCity\"\n                                (onSelect)=\"onItemCitySelect($event)\"\n                                (onDeSelect)=\"onItemCityDeSelect($event)\"\n                                (onSelectAll)=\"onCitySelectAll($event)\"\n                                (onDeSelectAll)=\"onCityDeSelectAll($event)\"\n                                formControlName=\"template_cityId\">\n                            </angular2-multiselect>\n                            <div *ngIf=\"submitted && addEditTemplateForm.controls.template_cityId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditTemplateForm.controls.template_cityId.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- {{ order_type != '' ? 'TEMPLATE.LABEL.template_title'.replace('Template',order_type) : 'TEMPLATE.LABEL.template_title' | translate}}* -->\n                <!-- ---------- template slug -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_SLUG' | translate}}*\n                            </label>\n                        </div>\n                    <!-- template slug -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'TEMPLATE.PLACEHOLDERS.TEMPLATE_SLUG' | translate}}\" type=\"text\"\n                                formControlName=\"template_slug\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_slug.errors }\">\n                            <div *ngIf=\"submitted && addEditTemplateForm.controls.template_slug.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_slug.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditTemplateForm.controls.template_slug.errors?.minlength && !addEditTemplateForm.controls.template_slug.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditTemplateForm.controls.template_slug.errors?.maxlength && !addEditTemplateForm.controls.template_slug.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_slug.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_CODE' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'TEMPLATE.PLACEHOLDERS.TEMPLATE_CODE' | translate}}\" type=\"text\"\n                            formControlName=\"template_code\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_code.errors }\">\n                        <div *ngIf=\"submitted && addEditTemplateForm.controls.template_code.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditTemplateForm.controls.template_code.errors?.required\">\n                                {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditTemplateForm.controls.template_code.errors?.minlength && !addEditTemplateForm.controls.template_code.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditTemplateForm.controls.template_code.errors?.maxlength && !addEditTemplateForm.controls.template_code.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted && addEditTemplateForm.controls.template_code.errors?.pattern\">\n                                {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n                <!-- -----------template Specific -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_SPECIFIC' | translate}}*\n                        </label>\n                    </div>\n                    <!-- template_isCountrySpecific -->\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"specific\" formControlName=\"template_isCountrySpecific\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_isCountrySpecific.errors }\">\n                            <option value=\"\"> {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_SPECIFIC' | translate}}</option>\n                            <option value=\"{{'TEMPLATE.PLACEHOLDERS.YES' | translate}}\">{{'TEMPLATE.LABEL.YES' | translate}}</option>\n                            <option value=\"{{'TEMPLATE.PLACEHOLDERS.NO' | translate}}\">{{'TEMPLATE.LABEL.NO' | translate}}</option>\n                        </select>\n                        <div *ngIf=\"submitted && addEditTemplateForm.controls.template_isCountrySpecific.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p\n                                *ngIf=\"submitted && addEditTemplateForm.controls.template_isCountrySpecific.errors?.required\">\n                                {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"template_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_status.errors }\">\n                                <option value=\"{{'TEMPLATE.PLACEHOLDERS.ACTIVE' | translate}}\">{{'TEMPLATE.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'TEMPLATE.PLACEHOLDERS.INACTIVE' | translate}}\">{{'TEMPLATE.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditTemplateForm.controls.template_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditTemplateForm.controls.template_status.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!----- CK Editor en --->\n                <div class=\"form-group row\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <label class=\"col-form-label\" >\n                            {{'TEMPLATE.LABEL.TEMPLATE_CONTENT' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                            placeholder=\"Enter Contant\" formControlName=\"template_content_en\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_content_en.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditTemplateForm.controls.template_content_en.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p *ngIf=\"submitted && addEditTemplateForm.controls.template_content_en.errors?.required\">\n                            {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div>\n                    </div>\n                </div>\n                <!----- CK Editor ar --->\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-md-12  col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\" [(ngModel)]=\"val\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_CONTENT_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\" col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                            placeholder=\"Enter Contant\" formControlName=\"template_content_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditTemplateForm.controls.template_content_ar.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditTemplateForm.controls.template_content_ar.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p *ngIf=\"submitted && addEditTemplateForm.controls.template_content_ar.errors?.required\">\n                            {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/template-list/list\"\n                                class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                                <button type=\"submit\" (click)=\"onSubmit()\" \n                            class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                           </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/template-list/template-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/template/template-list/template-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'TEMPLATE.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/template/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/template.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/template/template.component.html ***!
  \****************************************************************************************/
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

/***/ "./src/app/views/pages/template/add-edit-template/add-edit-template.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/template/add-edit-template/add-edit-template.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvdGVtcGxhdGUvYWRkLWVkaXQtdGVtcGxhdGUvYWRkLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSx1QkFBdUIsRUFBQTs7QUFDakM7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlbXBsYXRlL2FkZC1lZGl0LXRlbXBsYXRlL2FkZC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0LWF1dG8ge2hlaWdodDogYXV0byAhaW1wb3J0YW50O31cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAxLjMyNXJlbSkgY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/template/add-edit-template/add-edit-template.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/template/add-edit-template/add-edit-template.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddTemplateComponent, EditTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplateComponent", function() { return AddTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTemplateComponent", function() { return EditTemplateComponent; });
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
/* harmony import */ var _state_template_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/template.actions */ "./src/app/views/pages/template/state/template.actions.ts");
/* harmony import */ var _state_template_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/template.reducer */ "./src/app/views/pages/template/state/template.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");


















var AddTemplateComponent = /** @class */ (function () {
    function AddTemplateComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.email = 'Email';
        this.sms = 'SMS';
        this.notification = 'Notification';
        //variable declared  yt
        this.selectedItemsCity = [];
        this.city_countryId = [];
        this.dropdownSettingsCountry = {};
        this.dropdownSettingsCity = {};
        this.options = [
            { name: "Select Type", value: '' },
            { name: "Email", value: 'Email' },
            { name: "SMS", value: 'SMS' },
            { name: "Notification", value: 'Notification' }
        ];
        this.TEMPLATE_CONST = this.translate.instant('TEMPLATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.TEMPLATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.TEMPLATE_CONST.MODULE_NAME);
    }
    AddTemplateComponent.prototype.print = function () {
        this.printedOption = this.selectedOption;
        if (this.printedOption == "Notification") {
            this.val = "Notification";
        }
        else if (this.printedOption == "SMS") {
            this.val = "SMS";
        }
        else if (this.printedOption == "Email") {
            this.val = "Email";
        }
        else {
            this.val = " ";
        }
    };
    // check box----------
    AddTemplateComponent.prototype.ngOnInit = function () {
        this.buildAddEditTemplateForm();
        this.getAllCountries();
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
    AddTemplateComponent.prototype.getAllCountries = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.countryService.getAllCountries().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data["code"] == 200) {
                        this.countries = data["data"];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data["message"]);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddTemplateComponent.prototype.changeCountry = function (country) {
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
    AddTemplateComponent.prototype.onItemCitySelect = function (item) {
        this.selectedItemsCity[item];
    };
    AddTemplateComponent.prototype.onItemCityDeSelect = function (item) {
        this.selectedItemsCity.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsCity[el];
            }
        });
    };
    AddTemplateComponent.prototype.onCitySelectAll = function (items) {
    };
    AddTemplateComponent.prototype.onCityDeSelectAll = function (items) {
    };
    //
    AddTemplateComponent.prototype.buildAddEditTemplateForm = function () {
        this.addEditTemplateForm = this._formBuilder.group({
            template_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            template_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            template_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            template_slug: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            template_isCountrySpecific: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            template_countryId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            template_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            template_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            template_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    AddTemplateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var citiesArray_1, countryArray, form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditTemplateForm.valid) return [3 /*break*/, 2];
                        citiesArray_1 = [];
                        countryArray = [];
                        return [4 /*yield*/, this.addEditTemplateForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        form.template_cityId.forEach(function (element) {
                            citiesArray_1.push(element.id);
                        });
                        obj = {
                            template_title: [{
                                    lang: 'EN',
                                    title: form.template_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_title_ar
                                // }
                            ],
                            template_content: [{
                                    lang: 'EN',
                                    title: form.template_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_content_ar
                                // }
                            ],
                            template_code: form.template_code,
                            template_slug: form.template_slug,
                            template_isCountrySpecific: form.template_isCountrySpecific,
                            template_countryId: form.template_countryId,
                            template_cityId: citiesArray_1,
                            template_type: form.template_type,
                            template_status: form.template_status
                        };
                        this.stateSubscription = this.store.dispatch(new _state_template_actions__WEBPACK_IMPORTED_MODULE_12__["AddTemplate"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_template_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/template/list']);
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
    AddTemplateComponent.ctorParameters = function () { return [
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
    AddTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-edit-template',
            template: __webpack_require__(/*! raw-loader!./add-edit-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/add-edit-template/add-edit-template.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-template.component.scss */ "./src/app/views/pages/template/add-edit-template/add-edit-template.component.scss")]
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
    ], AddTemplateComponent);
    return AddTemplateComponent;
}());

var EditTemplateComponent = /** @class */ (function () {
    function EditTemplateComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.email = 'Email';
        this.sms = 'SMS';
        this.notification = 'Notification';
        //variable declared  yt
        this.selectedItemsCity = [];
        this.city_countryId = [];
        this.dropdownSettingsCountry = {};
        this.dropdownSettingsCity = {};
        this.options = [
            { name: "Select Type", value: '' },
            { name: "Email", value: 'Email' },
            { name: "SMS", value: 'SMS' },
            { name: "Notification", value: 'Notification' }
        ];
        this.TEMPLATE_CONST = this.translate.instant('TEMPLATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.TEMPLATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.TEMPLATE_CONST.MODULE_NAME);
    }
    EditTemplateComponent.prototype.print = function () {
        this.printedOption = this.selectedOption;
        if (this.printedOption == "Notification") {
            this.val = "Notification";
        }
        else if (this.printedOption == "SMS") {
            this.val = "SMS";
        }
        else if (this.printedOption == "Email") {
            this.val = "Email";
        }
        else {
            this.val = " ";
        }
    };
    EditTemplateComponent.prototype.ngOnInit = function () {
        this.buildAddEditTemplateForm();
        this.getTemplateDetails();
        this.getAllCountries();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
        this.selectedItemsCity = [];
        this.dropdownSettingsCountry = {
            singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
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
    EditTemplateComponent.prototype.getAllCountries = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.countryService.getAllCountries().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data["code"] == 200) {
                        this.countries = data["data"];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data["message"]);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditTemplateComponent.prototype.changeCountry = function (country) {
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
    EditTemplateComponent.prototype.onItemCitySelect = function (item) {
        this.selectedItemsCity[item];
    };
    EditTemplateComponent.prototype.onItemCityDeSelect = function (item) {
        this.selectedItemsCity.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsCity[el];
            }
        });
    };
    EditTemplateComponent.prototype.onCitySelectAll = function (items) {
    };
    EditTemplateComponent.prototype.onCityDeSelectAll = function (items) {
    };
    EditTemplateComponent.prototype.buildAddEditTemplateForm = function () {
        this.addEditTemplateForm = this._formBuilder.group({
            template_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //    template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            template_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            template_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            template_slug: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            template_isCountrySpecific: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            template_countryId: [""],
            template_cityId: [""],
            template_type: ["", []],
            template_status: ["ACTIVE", []],
        });
    };
    EditTemplateComponent.prototype.getTemplateDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_template_actions__WEBPACK_IMPORTED_MODULE_12__["LoadTemplate"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_template_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result_1, fd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result_1 = data['data'];
                        fd = {
                            template_title_en: result_1.template_title.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
                            template_content_en: result_1.template_content.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
                            template_code: result_1.template_code,
                            template_slug: result_1.template_slug,
                            template_isCountrySpecific: result_1.template_isCountrySpecific != null && result_1.template_isCountrySpecific != undefined ? result_1.template_isCountrySpecific : "",
                            template_countryId: result_1.template_countryId != null && result_1.template_countryId != undefined ? result_1.template_countryId : "",
                            template_type: result_1.template_type != null && result_1.template_type != undefined ? result_1.template_type : "",
                            template_status: result_1.template_status != null && result_1.template_status != undefined ? result_1.template_status : "",
                        };
                        // to fecth details for country
                        this.changeCountry(result_1.template_countryId);
                        // to fecth details for service type
                        this.countryCities.forEach(function (element) {
                            if (result_1.template_cityId.indexOf(element.id)) {
                                _this.selectedItemsCity.push(element);
                                if (_this.dtr && !_this.dtr.destroyed) {
                                    _this.dtr.detectChanges();
                                }
                            }
                        });
                        return [4 /*yield*/, this.addEditTemplateForm.patchValue(fd)];
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
    EditTemplateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, citiesArray_2, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditTemplateForm.valid) {
                    form = this.addEditTemplateForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    citiesArray_2 = [];
                    form.template_cityId.forEach(function (element) {
                        citiesArray_2.push(element.id);
                    });
                    obj = {
                        id: this.id,
                        data: {
                            template_title: [{
                                    lang: 'EN',
                                    title: form.template_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_title_ar
                                // }
                            ],
                            template_content: [{
                                    lang: 'EN',
                                    title: form.template_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_content_ar
                                // }
                            ],
                            template_code: form.template_code,
                            template_slug: form.template_slug,
                            template_isCountrySpecific: form.template_isCountrySpecific,
                            template_countryId: form.template_countryId,
                            template_cityId: citiesArray_2,
                            template_type: form.template_type,
                            template_status: form.template_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_template_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateTemplate"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_template_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/template/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    EditTemplateComponent.ctorParameters = function () { return [
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
    EditTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-edit-template',
            template: __webpack_require__(/*! raw-loader!./add-edit-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/add-edit-template/add-edit-template.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-template.component.scss */ "./src/app/views/pages/template/add-edit-template/add-edit-template.component.scss")]
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
    ], EditTemplateComponent);
    return EditTemplateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/template/state/template.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/template/state/template.actions.ts ***!
  \****************************************************************/
/*! exports provided: TemplateActionTypes, LoadTemplate, LoadTemplateSuccess, LoadTemplateFail, UpdateTemplate, UpdateTemplateSuccess, UpdateTemplateFail, DeleteTemplate, DeleteTemplateSuccess, DeleteTemplateFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddTemplate, AddTemplateSuccess, AddTemplateFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateActionTypes", function() { return TemplateActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTemplate", function() { return LoadTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTemplateSuccess", function() { return LoadTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTemplateFail", function() { return LoadTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTemplate", function() { return UpdateTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTemplateSuccess", function() { return UpdateTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTemplateFail", function() { return UpdateTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplate", function() { return DeleteTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplateSuccess", function() { return DeleteTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplateFail", function() { return DeleteTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplate", function() { return AddTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplateSuccess", function() { return AddTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplateFail", function() { return AddTemplateFail; });
var TemplateActionTypes;
(function (TemplateActionTypes) {
    TemplateActionTypes["UPDATE_STATUS"] = "[TEMPLATE] Update Status";
    TemplateActionTypes["UPDATE_STATUS_SUCCESS"] = "[TEMPLATE]  Update Status Success";
    TemplateActionTypes["UPDATE_STATUS_FAIL"] = "[TEMPLATE]  Update Status Fail";
    TemplateActionTypes["LOAD_TEMPLATE"] = "[TEMPLATE] Load TEMPLATE";
    TemplateActionTypes["LOAD_TEMPLATE_SUCCESS"] = "[TEMPLATE] Load TEMPLATE Success";
    TemplateActionTypes["LOAD_TEMPLATE_FAIL"] = "[TEMPLATE] Load TEMPLATE Fail";
    TemplateActionTypes["UPDATE_TEMPLATE"] = "[TEMPLATE] Update TEMPLATE";
    TemplateActionTypes["UPDATE_TEMPLATE_SUCCESS"] = "[TEMPLATE] Update TEMPLATE Success";
    TemplateActionTypes["UPDATE_TEMPLATE_FAIL"] = "[TEMPLATE] Update TEMPLATE Fail";
    TemplateActionTypes["DELETE_TEMPLATE"] = "[TEMPLATE] Delete TEMPLATE";
    TemplateActionTypes["DELETE_TEMPLATE_SUCCESS"] = "[TEMPLATE] Delete TEMPLATE Success";
    TemplateActionTypes["DELETE_TEMPLATE_FAIL"] = "[TEMPLATE] Delete TEMPLATE Fail";
    TemplateActionTypes["ADD_TEMPLATE"] = "[TEMPLATE] Upload Data";
    TemplateActionTypes["ADD_TEMPLATE_SUCCESS"] = "[TEMPLATE] Upload Data Success";
    TemplateActionTypes["ADD_TEMPLATE_FAIL"] = "[TEMPLATE] Upload Data Fail";
})(TemplateActionTypes || (TemplateActionTypes = {}));
var LoadTemplate = /** @class */ (function () {
    function LoadTemplate(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.LOAD_TEMPLATE;
    }
    LoadTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadTemplate;
}());

var LoadTemplateSuccess = /** @class */ (function () {
    function LoadTemplateSuccess(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.LOAD_TEMPLATE_SUCCESS;
    }
    LoadTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadTemplateSuccess;
}());

var LoadTemplateFail = /** @class */ (function () {
    function LoadTemplateFail(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.LOAD_TEMPLATE_FAIL;
    }
    LoadTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadTemplateFail;
}());

var UpdateTemplate = /** @class */ (function () {
    function UpdateTemplate(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.UPDATE_TEMPLATE;
    }
    UpdateTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateTemplate;
}());

var UpdateTemplateSuccess = /** @class */ (function () {
    function UpdateTemplateSuccess(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.UPDATE_TEMPLATE_SUCCESS;
    }
    UpdateTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateTemplateSuccess;
}());

var UpdateTemplateFail = /** @class */ (function () {
    function UpdateTemplateFail(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.UPDATE_TEMPLATE_FAIL;
    }
    UpdateTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateTemplateFail;
}());

var DeleteTemplate = /** @class */ (function () {
    function DeleteTemplate(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.DELETE_TEMPLATE;
    }
    DeleteTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteTemplate;
}());

var DeleteTemplateSuccess = /** @class */ (function () {
    function DeleteTemplateSuccess(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.DELETE_TEMPLATE_SUCCESS;
    }
    DeleteTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteTemplateSuccess;
}());

var DeleteTemplateFail = /** @class */ (function () {
    function DeleteTemplateFail(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.DELETE_TEMPLATE_FAIL;
    }
    DeleteTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteTemplateFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddTemplate = /** @class */ (function () {
    function AddTemplate(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.ADD_TEMPLATE;
    }
    AddTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTemplate;
}());

var AddTemplateSuccess = /** @class */ (function () {
    function AddTemplateSuccess(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.ADD_TEMPLATE_SUCCESS;
    }
    AddTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTemplateSuccess;
}());

var AddTemplateFail = /** @class */ (function () {
    function AddTemplateFail(payload) {
        this.payload = payload;
        this.type = TemplateActionTypes.ADD_TEMPLATE_FAIL;
    }
    AddTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTemplateFail;
}());



/***/ }),

/***/ "./src/app/views/pages/template/state/template.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/template/state/template.effects.ts ***!
  \****************************************************************/
/*! exports provided: TemplateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateEffect", function() { return TemplateEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _template_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.actions */ "./src/app/views/pages/template/state/template.actions.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template.service */ "./src/app/views/pages/template/template.service.ts");







var TemplateEffect = /** @class */ (function () {
    function TemplateEffect(actions$, templateService) {
        var _this = this;
        this.actions$ = actions$;
        this.templateService = templateService;
        this.deleteTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_template_actions__WEBPACK_IMPORTED_MODULE_5__["TemplateActionTypes"].DELETE_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.templateService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _template_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _template_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteTemplateFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_template_actions__WEBPACK_IMPORTED_MODULE_5__["TemplateActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.templateService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _template_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _template_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_template_actions__WEBPACK_IMPORTED_MODULE_5__["TemplateActionTypes"].LOAD_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.templateService.getTemplateById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _template_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _template_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTemplateFail"](err));
            }));
        }));
        this.updateTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_template_actions__WEBPACK_IMPORTED_MODULE_5__["TemplateActionTypes"].UPDATE_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.templateService.updateTemplate(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _template_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _template_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTemplateFail"](err)); }));
        }));
        this.addTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_template_actions__WEBPACK_IMPORTED_MODULE_5__["TemplateActionTypes"].ADD_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.templateService.addTemplate(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _template_actions__WEBPACK_IMPORTED_MODULE_5__["AddTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _template_actions__WEBPACK_IMPORTED_MODULE_5__["AddTemplateFail"](err));
            }));
        }));
    }
    TemplateEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _template_service__WEBPACK_IMPORTED_MODULE_6__["TemplateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TemplateEffect.prototype, "deleteTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TemplateEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TemplateEffect.prototype, "loadTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TemplateEffect.prototype, "updateTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TemplateEffect.prototype, "addTemplate$", void 0);
    TemplateEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _template_service__WEBPACK_IMPORTED_MODULE_6__["TemplateService"]])
    ], TemplateEffect);
    return TemplateEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/template/state/template.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/template/state/template.reducer.ts ***!
  \****************************************************************/
/*! exports provided: initialState, TemplateReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateReducer", function() { return TemplateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _template_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.actions */ "./src/app/views/pages/template/state/template.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function TemplateReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for template load-----------------------------
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].LOAD_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].LOAD_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for template delete-----------------------------
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].DELETE_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].DELETE_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for template update-----------------------------
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].UPDATE_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].UPDATE_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for template upadat status-----------------------------
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for template add-----------------------------
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].ADD_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _template_actions__WEBPACK_IMPORTED_MODULE_0__["TemplateActionTypes"].ADD_TEMPLATE_FAIL: {
            return action.payload.error;
        }
    }
}
var getTemplateState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("template");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTemplateState, function (state) { return state; } // return error message
);


/***/ }),

/***/ "./src/app/views/pages/template/template-list/template-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/template/template-list/template-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlbXBsYXRlL3RlbXBsYXRlLWxpc3QvdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/template/template-list/template-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/template/template-list/template-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateListComponent", function() { return TemplateListComponent; });
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
var TemplateListComponent = /** @class */ (function () {
    function TemplateListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
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
        this.subheaderService.setTitle(this.translate.instant("MENU.TEMPLATE"));
        titleService.setTitle(this.APPNAME + " | " + this.TEMPLATE_CONST.MODULE_NAME);
    }
    TemplateListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TEMPLATE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TEMPLATE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TEMPLATE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TEMPLATE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    TemplateListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    TemplateListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    TemplateListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script.loadScripts("kt-template-list", scripts).then(function () {
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
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listTemplate,
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
                        title: that.TEMPLATE_CONST.LABEL.TEMPLATE_TITLE,
                        data: "template_title",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.TEMPLATE_SLUG,
                        data: "template_slug",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.STATUS,
                        data: "template_status",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.CREATED_ON,
                        data: "template_createdOn",
                    },
                    {
                        title: that.TEMPLATE_CONST.LABEL.MODIFIED_ON,
                        data: "template_modifyOn",
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
                            case that.TEMPLATE_CONST.LABEL.TEMPLATE_TITLE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TEMPLATE_CONST.LABEL.TEMPLATE_SLUG:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TEMPLATE_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                <option value=\"\">" + that.TEMPLATE_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.TEMPLATE_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.TEMPLATE_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            case that.TEMPLATE_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TEMPLATE_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
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
                        width: "10%",
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
                                status[row.template_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.template_status].title +
                                "</span>");
                        },
                    },
                    {
                        targets: 4,
                        width: "10%",
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
    TemplateListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(["/template/edit/" + this.id]);
    };
    TemplateListComponent.prototype.delete = function (e) {
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
                            component: "template",
                            click: "delete",
                            id: this.id,
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    TemplateListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: "template",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    TemplateListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    TemplateListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    TemplateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-template-list",
            template: __webpack_require__(/*! raw-loader!./template-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/template-list/template-list.component.html"),
            styles: [__webpack_require__(/*! ./template-list.component.scss */ "./src/app/views/pages/template/template-list/template-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], TemplateListComponent);
    return TemplateListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/template/template.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/template/template.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/template/template.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/template/template.component.ts ***!
  \************************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].TEMPLATE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].templateManagement);
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-template',
            template: __webpack_require__(/*! raw-loader!./template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.scss */ "./src/app/views/pages/template/template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/template/template.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/template/template.module.ts ***!
  \*********************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.component */ "./src/app/views/pages/template/template.component.ts");
/* harmony import */ var _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-template/add-edit-template.component */ "./src/app/views/pages/template/add-edit-template/add-edit-template.component.ts");
/* harmony import */ var _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-list/template-list.component */ "./src/app/views/pages/template/template-list/template-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_template_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/template.effects */ "./src/app/views/pages/template/state/template.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_template_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/template.reducer */ "./src/app/views/pages/template/state/template.reducer.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");



















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _template_component__WEBPACK_IMPORTED_MODULE_3__["TemplateComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_5__["TemplateListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].TEMPLATE.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_4__["AddTemplateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].TEMPLATE.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_4__["EditTemplateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].TEMPLATE.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_template_component__WEBPACK_IMPORTED_MODULE_3__["TemplateComponent"], _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_5__["TemplateListComponent"], _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_4__["AddTemplateComponent"], _add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_4__["EditTemplateComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_template_effects__WEBPACK_IMPORTED_MODULE_12__["TemplateEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("template", _state_template_reducer__WEBPACK_IMPORTED_MODULE_15__["TemplateReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["AngularMultiSelectModule"]
            ]
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-template-template-module.js.map