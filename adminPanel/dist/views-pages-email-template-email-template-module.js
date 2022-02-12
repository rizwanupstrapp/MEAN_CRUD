(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-email-template-email-template-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'TEMPLATE.EMAIL_ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'TEMPLATE.EMAIL_EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/email-template/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditEmailTemplateForm\" [formGroup]=\"addEditEmailTemplateForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group row\">\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_CITY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-lg-12 multiselect_drpdwn\">\n                            <angular2-multiselect [data]=\"countryCities\" [(ngModel)]=\"selectedItemsCity\" [settings]=\"dropdownSettingsCity\" (onSelect)=\"onItemCitySelect($event)\" (onDeSelect)=\"onItemCityDeSelect($event)\" (onSelectAll)=\"onCitySelectAll($event)\" (onDeSelectAll)=\"onCityDeSelectAll($event)\"\n                                formControlName=\"emailTemplate_cityId\">\n                            </angular2-multiselect>\n                            <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_cityId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_cityId.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                <!-- {{ selectedOption != '' ?  selectedOption : 'TEMPLATE.LABEL.template_title' }} -->\n                                {{'TEMPLATE.LABEL.EMAIL_TITLE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template_title -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'TEMPLATE.PLACEHOLDERS.EMAIL_TITLE' | translate}}\" type=\"text\" formControlName=\"emailTemplate_title_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.emailTemplate_title_en.errors }\">\n                            <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_title_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_title_en.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditEmailTemplateForm.controls.emailTemplate_title_en.errors?.minlength && !addEditEmailTemplateForm.controls.emailTemplate_title_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditEmailTemplateForm.controls.emailTemplate_title_en.errors?.maxlength && !addEditEmailTemplateForm.controls.emailTemplate_title_en.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_title_en.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.EMAIL_INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- </div> -->\n                    <!-- -----------template_countryId -->\n                    <!-- <div class=\"form-group  row\"> -->\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\"\n                                (change)=\"changeCountry($event.target.value)\"\n                                formControlName=\"template_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.template_countryId.errors }\">\n                                <option value=\"\">{{'TEMPLATE.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.template_countryId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.template_countryId.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <div class=\"form-group  row\"> -->\n\n                </div>\n                <!-- {{ order_type != '' ? 'TEMPLATE.LABEL.template_title'.replace('Template',order_type) : 'TEMPLATE.LABEL.template_title' | translate}}* -->\n                <!-- ---------- template slug -->\n                <div class=\"form-group  row\">\n\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_CODE' | translate}}*\n                        </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'TEMPLATE.PLACEHOLDERS.TEMPLATE_CODE' | translate}}\" type=\"text\" formControlName=\"emailTemplate_code\" [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.emailTemplate_code.errors }\">\n                            <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_code.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_code.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_code.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <div class=\"col-lg-6\" *ngIf=\"isAdd\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.EMAIL_SLUG' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template slug -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'TEMPLATE.PLACEHOLDERS.EMAIL_SLUG' | translate}}\" type=\"text\" formControlName=\"emailTemplate_slug\" [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.emailTemplate_slug.errors }\">\n                            <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_slug.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_slug.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditEmailTemplateForm.controls.emailTemplate_slug.errors?.minlength && !addEditEmailTemplateForm.controls.emailTemplate_slug.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditEmailTemplateForm.controls.emailTemplate_slug.errors?.maxlength && !addEditEmailTemplateForm.controls.emailTemplate_slug.errors?.pattern\" class=\"lbl-err\">\n                                    {{'TEMPLATE.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_slug.errors?.pattern\">\n                                    {{'TEMPLATE.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n                    <!-- -----------template Specific -->\n                    <!-- <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_SPECIFIC' | translate}}*\n                        </label>\n                        </div>\n                      template_isCountrySpecific -->\n                    <!-- <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"specific\" formControlName=\"emailTemplate_isCountrySpecific\" [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.emailTemplate_isCountrySpecific.errors }\">\n                            <option value=\"\"> {{'TEMPLATE.LABEL.TEMPLATE_COUNTRY_SPECIFIC' | translate}}</option>\n                            <option value=\"{{'TEMPLATE.PLACEHOLDERS.YES' | translate}}\">{{'TEMPLATE.LABEL.YES' | translate}}</option>\n                            <option value=\"{{'TEMPLATE.PLACEHOLDERS.NO' | translate}}\">{{'TEMPLATE.LABEL.NO' | translate}}</option>\n                        </select>\n                        <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_isCountrySpecific.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_isCountrySpecific.errors?.required\">\n                                {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div> -->\n                    <!-- </div> -->\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TEMPLATE.LABEL.TEMPLATE_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- template_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"emailTemplate_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.emailTemplate_status.errors }\">\n                                <option value=\"{{'TEMPLATE.PLACEHOLDERS.ACTIVE' | translate}}\">{{'TEMPLATE.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'TEMPLATE.PLACEHOLDERS.INACTIVE' | translate}}\">{{'TEMPLATE.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_status.errors?.required\">\n                                    {{'TEMPLATE.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!----- CK Editor en --->\n                <div class=\"form-group row\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <label class=\"col-form-label\">\n                            {{'TEMPLATE.LABEL.EMAIL_CONTENT' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\" placeholder=\"Enter Email Contant\" formControlName=\"emailTemplate_content_en\" [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.emailTemplate_content_en.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_content_en.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.emailTemplate_content_en.errors?.required\">\n                                {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <!----- CK Editor ar --->\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-md-12  col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\" [(ngModel)]=\"val\">\n                            {{'TEMPLATE.LABEL.TEMPLATE_CONTENT_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\" col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                            placeholder=\"Enter Contant\" formControlName=\"template_content_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditEmailTemplateForm.controls.template_content_ar.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditEmailTemplateForm.controls.template_content_ar.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p *ngIf=\"submitted && addEditEmailTemplateForm.controls.template_content_ar.errors?.required\">\n                            {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/email-template/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                           </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/email-template-list/email-template-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/email-template/email-template-list/email-template-list.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'TEMPLATE.EMAIL_LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/email-template/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl emailtempate_mangmt_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/email-template.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/email-template/email-template.component.html ***!
  \****************************************************************************************************/
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

/***/ "./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.was-validated .form-control:invalid,\n.form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvZW1haWwtdGVtcGxhdGUvYWRkLWVkaXQtZW1haWwtdGVtcGxhdGUvYWRkLWVkaXQtZW1haWwtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7O0VBRUkscUVBQXFFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9lbWFpbC10ZW1wbGF0ZS9hZGQtZWRpdC1lbWFpbC10ZW1wbGF0ZS9hZGQtZWRpdC1lbWFpbC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odC1hdXRvIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLFxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAxLjMyNXJlbSkgY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddEmailTemplateComponent, EditEmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailTemplateComponent", function() { return AddEmailTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailTemplateComponent", function() { return EditEmailTemplateComponent; });
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
/* harmony import */ var _state_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/emailTemplate.actions */ "./src/app/views/pages/email-template/state/emailTemplate.actions.ts");
/* harmony import */ var _state_emailTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/emailTemplate.reducer */ "./src/app/views/pages/email-template/state/emailTemplate.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");



















var AddEmailTemplateComponent = /** @class */ (function () {
    function AddEmailTemplateComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.TEMPLATE_CONST = this.translate.instant('TEMPLATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.EMAIL_TEMPLATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.TEMPLATE_CONST.EMAIL_MODULE_NAME);
    }
    // check box----------
    AddEmailTemplateComponent.prototype.ngOnInit = function () {
        this.buildAddEditEmailTemplateForm();
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
    AddEmailTemplateComponent.prototype.changeCountry = function (country) {
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
    AddEmailTemplateComponent.prototype.onItemCitySelect = function (item) {
        this.selectedItemsCity[item];
    };
    AddEmailTemplateComponent.prototype.onItemCityDeSelect = function (item) {
        this.selectedItemsCity.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsCity[el];
            }
        });
    };
    AddEmailTemplateComponent.prototype.onCitySelectAll = function (items) {
    };
    AddEmailTemplateComponent.prototype.onCityDeSelectAll = function (items) {
    };
    //
    AddEmailTemplateComponent.prototype.buildAddEditEmailTemplateForm = function () {
        this.addEditEmailTemplateForm = this._formBuilder.group({
            emailTemplate_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            emailTemplate_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            // emailTemplate_code: ["", [Validators.required]],
            emailTemplate_slug: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            // emailTemplate_isCountrySpecific: ["", [Validators.required]],
            // template_countryId: ["", [Validators.required]],
            emailTemplate_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            emailTemplate_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    AddEmailTemplateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var citiesArray_1, countryArray, form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.addEditEmailTemplateForm.valid) return [3 /*break*/, 2];
                        citiesArray_1 = [];
                        countryArray = [];
                        return [4 /*yield*/, this.addEditEmailTemplateForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        form.emailTemplate_cityId.forEach(function (element) {
                            citiesArray_1.push(element.id);
                        });
                        obj = {
                            emailTemplate_title: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.emailTemplate_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_title_ar
                                // }
                            ],
                            emailTemplate_content: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.emailTemplate_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_content_ar
                                // }
                            ],
                            // emailTemplate_code: form.emailTemplate_code,
                            emailTemplate_slug: form.emailTemplate_slug,
                            // emailTemplate_isCountrySpecific: form.emailTemplate_isCountrySpecific,
                            emailTemplate_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry,
                            emailTemplate_cityId: citiesArray_1,
                            emailTemplate_status: form.emailTemplate_status
                        };
                        this.stateSubscription = this.store.dispatch(new _state_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_12__["AddEmailTemplate"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_emailTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/email-template/list']);
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
                        if (!this.addEditEmailTemplateForm.valid) {
                            this.toastr.error('All Tabs Field is Required');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddEmailTemplateComponent.ctorParameters = function () { return [
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
    AddEmailTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-template',
            template: __webpack_require__(/*! raw-loader!./add-edit-email-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-email-template.component.scss */ "./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.scss")]
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
    ], AddEmailTemplateComponent);
    return AddEmailTemplateComponent;
}());

var EditEmailTemplateComponent = /** @class */ (function () {
    function EditEmailTemplateComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService) {
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
        this.TEMPLATE_CONST = this.translate.instant('TEMPLATE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.EMAIL_TEMPLATE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.TEMPLATE_CONST.EMAIL_MODULE_NAME);
    }
    // check box----------
    EditEmailTemplateComponent.prototype.ngOnInit = function () {
        this.buildAddEditEmailTemplateForm();
        this.getEmailTemplateDetails();
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
    EditEmailTemplateComponent.prototype.getEmailTemplateDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_12__["LoadEmailTemplate"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_emailTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 4];
                        if (!(data['code'] == 200)) return [3 /*break*/, 3];
                        result = data['data'];
                        this.emailTemplateData = data['data'];
                        fd = {
                            emailTemplate_title_en: result.emailTemplate_title.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang; })[0].title,
                            //   template_title_ar: result.template_title.filter((obj) => obj.lang == "AR")[0].title,
                            emailTemplate_content_en: result.emailTemplate_content.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang; })[0].title,
                            //   template_content_ar: result.template_content.filter((obj) => obj.lang == "AR")[0].title,
                            // emailTemplate_code: result.emailTemplate_code,
                            // emailTemplate_slug: result.emailTemplate_slug,
                            // emailTemplate_isCountrySpecific: result.emailTemplate_isCountrySpecific,
                            // emailTemplate_countryId: result.emailTemplate_countryId,
                            emailTemplate_status: result.emailTemplate_status
                        };
                        // to fecth details for country
                        return [4 /*yield*/, this.addEditEmailTemplateForm.patchValue(fd)];
                    case 1:
                        // to fecth details for country
                        _a.sent();
                        return [4 /*yield*/, this.changeCountry(result.emailTemplate_countryId)];
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
    EditEmailTemplateComponent.prototype.changeCountry = function (country) {
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
                                            var found = _this.emailTemplateData.emailTemplate_cityId.find(function (city) { return city == element._id; });
                                            if (found) {
                                                _this.selectedItemsCity.push({ id: element._id, itemName: element.city_name });
                                            }
                                        });
                                        this.addEditEmailTemplateForm.patchValue({
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
    EditEmailTemplateComponent.prototype.onItemCitySelect = function (item) {
        this.selectedItemsCity[item];
    };
    EditEmailTemplateComponent.prototype.onItemCityDeSelect = function (item) {
        this.selectedItemsCity.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsCity[el];
            }
        });
    };
    EditEmailTemplateComponent.prototype.onCitySelectAll = function (items) {
    };
    EditEmailTemplateComponent.prototype.onCityDeSelectAll = function (items) {
    };
    //
    EditEmailTemplateComponent.prototype.buildAddEditEmailTemplateForm = function () {
        this.addEditEmailTemplateForm = this._formBuilder.group({
            emailTemplate_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //  template_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            emailTemplate_content_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            //  template_content_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            // emailTemplate_code: ["", [Validators.required]],
            // emailTemplate_slug: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            // emailTemplate_isCountrySpecific: ["", [Validators.required]],
            // template_countryId: ["", [Validators.required]],
            emailTemplate_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            emailTemplate_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EditEmailTemplateComponent.prototype.removeValidator = function () {
        this.addEditEmailTemplateForm
            .get('emailTemplate_cityId')
            .setValidators([]);
        this.addEditEmailTemplateForm.get('emailTemplate_cityId').updateValueAndValidity();
    };
    EditEmailTemplateComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var citiesArray_2, countryArray, form, fd, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (this.addEditEmailTemplateForm.value.emailTemplate_cityId.length) {
                            this.removeValidator();
                        }
                        if (!this.addEditEmailTemplateForm.valid) return [3 /*break*/, 2];
                        citiesArray_2 = [];
                        countryArray = [];
                        return [4 /*yield*/, this.addEditEmailTemplateForm.value];
                    case 1:
                        form = _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                        form.emailTemplate_cityId.forEach(function (element) {
                            citiesArray_2.push(element.id);
                        });
                        fd = {
                            emailTemplate_title: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.emailTemplate_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_title_ar
                                // }
                            ],
                            emailTemplate_content: [{
                                    lang: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultLang,
                                    title: form.emailTemplate_content_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.template_content_ar
                                // }
                            ],
                            // emailTemplate_code: form.emailTemplate_code,
                            // emailTemplate_slug: form.emailTemplate_slug,
                            // emailTemplate_isCountrySpecific: form.emailTemplate_isCountrySpecific,
                            emailTemplate_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry,
                            emailTemplate_cityId: citiesArray_2,
                            emailTemplate_status: form.emailTemplate_status
                        };
                        obj = {
                            id: this.id,
                            data: fd
                        };
                        this.stateSubscription = this.store.dispatch(new _state_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateEmailTemplate"](obj));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_emailTemplate_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/email-template/list']);
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
                        if (!this.addEditEmailTemplateForm.valid) {
                            this.toastr.error('All Tabs Field is Required');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditEmailTemplateComponent.ctorParameters = function () { return [
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
    EditEmailTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-template',
            template: __webpack_require__(/*! raw-loader!./add-edit-email-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-email-template.component.scss */ "./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.scss")]
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
    ], EditEmailTemplateComponent);
    return EditEmailTemplateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/email-template/email-template-list/email-template-list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/email-template/email-template-list/email-template-list.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VtYWlsLXRlbXBsYXRlL2VtYWlsLXRlbXBsYXRlLWxpc3QvZW1haWwtdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/email-template/email-template-list/email-template-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/email-template/email-template-list/email-template-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EmailTemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateListComponent", function() { return EmailTemplateListComponent; });
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
var EmailTemplateListComponent = /** @class */ (function () {
    function EmailTemplateListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = "";
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.EMAIL_TEMPLATE_CONST = [];
        this.searchObj = { field: "emailTemplate_title", emailTemplate_status: "", search: "" };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.EMAIL_TEMPLATE_CONST = this.translate.instant("TEMPLATE");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.EMAIL_TEMPLATE"));
        titleService.setTitle(this.APPNAME + " | " + this.EMAIL_TEMPLATE_CONST.EMAIL_MODULE_NAME);
    }
    EmailTemplateListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].EMAIL_TEMPLATE.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].EMAIL_TEMPLATE.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].EMAIL_TEMPLATE.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].EMAIL_TEMPLATE.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    EmailTemplateListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    EmailTemplateListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    EmailTemplateListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script.loadScripts("kt-email-template-list", scripts).then(function () {
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
                    sProcessing: that.EMAIL_TEMPLATE_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listEmailTemplate,
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
                        title: that.EMAIL_TEMPLATE_CONST.LABEL.SR_NO,
                        data: null,
                    },
                    {
                        title: that.EMAIL_TEMPLATE_CONST.LABEL.EMAIL_TITLE,
                        data: "emailTemplate_title",
                    },
                    {
                        title: that.EMAIL_TEMPLATE_CONST.LABEL.EMAIL_SLUG,
                        data: "emailTemplate_slug",
                    },
                    {
                        title: that.EMAIL_TEMPLATE_CONST.LABEL.STATUS,
                        data: "emailTemplate_status",
                    },
                    {
                        title: that.EMAIL_TEMPLATE_CONST.LABEL.CREATED_ON,
                        data: "emailTemplate_createdOn",
                    },
                    {
                        title: that.EMAIL_TEMPLATE_CONST.LABEL.MODIFIED_ON,
                        data: "emailTemplate_modifyOn",
                    },
                    { title: that.EMAIL_TEMPLATE_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api()
                        .columns()
                        .every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.EMAIL_TEMPLATE_CONST.LABEL.SR_NO:
                                break;
                            case that.EMAIL_TEMPLATE_CONST.LABEL.EMAIL_TITLE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.EMAIL_TEMPLATE_CONST.LABEL.EMAIL_SLUG:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.EMAIL_TEMPLATE_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                <option value=\"\">" + that.EMAIL_TEMPLATE_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.EMAIL_TEMPLATE_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.EMAIL_TEMPLATE_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.EMAIL_TEMPLATE_CONST.LABEL.CREATED_ON:
                            //   input = $(
                            //     `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //       this.index() +
                            //       `"/>`
                            //   );
                            //   break;
                            //   case that.EMAIL_TEMPLATE_CONST.LABEL.MODIFIED_ON:
                            //     input = $(
                            //       `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //         this.index() +
                            //         `"/>`
                            //     );
                            //     break;
                            case that.EMAIL_TEMPLATE_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.EMAIL_TEMPLATE_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.EMAIL_TEMPLATE_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                        width: "16%",
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
                                status[row.emailTemplate_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.emailTemplate_status].title +
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
    EmailTemplateListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(["/email-template/edit/" + this.id]);
    };
    EmailTemplateListComponent.prototype.delete = function (e) {
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
                            component: "emailTemplate",
                            click: "delete",
                            id: this.id,
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    EmailTemplateListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: "emailTemplate",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    EmailTemplateListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    EmailTemplateListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    EmailTemplateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-email-template-list',
            template: __webpack_require__(/*! raw-loader!./email-template-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/email-template-list/email-template-list.component.html"),
            styles: [__webpack_require__(/*! ./email-template-list.component.scss */ "./src/app/views/pages/email-template/email-template-list/email-template-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], EmailTemplateListComponent);
    return EmailTemplateListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/email-template/email-template.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/email-template/email-template.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VtYWlsLXRlbXBsYXRlL2VtYWlsLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/email-template/email-template.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/email-template/email-template.component.ts ***!
  \************************************************************************/
/*! exports provided: EmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function() { return EmailTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].EMAIL_TEMPLATE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].emailTemplateManagement);
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
    };
    EmailTemplateComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    EmailTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-email-template',
            template: __webpack_require__(/*! raw-loader!./email-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/email-template/email-template.component.html"),
            styles: [__webpack_require__(/*! ./email-template.component.scss */ "./src/app/views/pages/email-template/email-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/email-template/email-template.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/email-template/email-template.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_email_template_add_edit_email_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-email-template/add-edit-email-template.component */ "./src/app/views/pages/email-template/add-edit-email-template/add-edit-email-template.component.ts");
/* harmony import */ var _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-template-list/email-template-list.component */ "./src/app/views/pages/email-template/email-template-list/email-template-list.component.ts");
/* harmony import */ var _email_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-template.component */ "./src/app/views/pages/email-template/email-template.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_emailTemplate_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/emailTemplate.effects */ "./src/app/views/pages/email-template/state/emailTemplate.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_emailTemplate_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/emailTemplate.reducer */ "./src/app/views/pages/email-template/state/emailTemplate.reducer.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");



















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _email_template_component__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].EMAIL_TEMPLATE.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_email_template_add_edit_email_template_component__WEBPACK_IMPORTED_MODULE_3__["AddEmailTemplateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].EMAIL_TEMPLATE.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_email_template_add_edit_email_template_component__WEBPACK_IMPORTED_MODULE_3__["EditEmailTemplateComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_18__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].EMAIL_TEMPLATE.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_email_template_component__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateComponent"], _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateListComponent"], _add_edit_email_template_add_edit_email_template_component__WEBPACK_IMPORTED_MODULE_3__["AddEmailTemplateComponent"], _add_edit_email_template_add_edit_email_template_component__WEBPACK_IMPORTED_MODULE_3__["EditEmailTemplateComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_emailTemplate_effects__WEBPACK_IMPORTED_MODULE_12__["EmailTemplateEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("emailTemplate", _state_emailTemplate_reducer__WEBPACK_IMPORTED_MODULE_15__["EmailTemplateReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["AngularMultiSelectModule"]
            ]
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ }),

/***/ "./src/app/views/pages/email-template/state/emailTemplate.actions.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/email-template/state/emailTemplate.actions.ts ***!
  \***************************************************************************/
/*! exports provided: EmailTemplateActionTypes, LoadEmailTemplate, LoadEmailTemplateSuccess, LoadEmailTemplateFail, UpdateEmailTemplate, UpdateEmailTemplateSuccess, UpdateEmailTemplateFail, DeleteEmailTemplate, DeleteEmailTemplateSuccess, DeleteEmailTemplateFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddEmailTemplate, AddEmailTemplateSuccess, AddEmailTemplateFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateActionTypes", function() { return EmailTemplateActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadEmailTemplate", function() { return LoadEmailTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadEmailTemplateSuccess", function() { return LoadEmailTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadEmailTemplateFail", function() { return LoadEmailTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailTemplate", function() { return UpdateEmailTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailTemplateSuccess", function() { return UpdateEmailTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailTemplateFail", function() { return UpdateEmailTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEmailTemplate", function() { return DeleteEmailTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEmailTemplateSuccess", function() { return DeleteEmailTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEmailTemplateFail", function() { return DeleteEmailTemplateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailTemplate", function() { return AddEmailTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailTemplateSuccess", function() { return AddEmailTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailTemplateFail", function() { return AddEmailTemplateFail; });
var EmailTemplateActionTypes;
(function (EmailTemplateActionTypes) {
    EmailTemplateActionTypes["UPDATE_STATUS"] = "[EMAIL_TEMPLATE] Update Status";
    EmailTemplateActionTypes["UPDATE_STATUS_SUCCESS"] = "[EMAIL_TEMPLATE]  Update Status Success";
    EmailTemplateActionTypes["UPDATE_STATUS_FAIL"] = "[EMAIL_TEMPLATE]  Update Status Fail";
    EmailTemplateActionTypes["LOAD_EMAIL_TEMPLATE"] = "[EMAIL_TEMPLATE] Load Email Template";
    EmailTemplateActionTypes["LOAD_EMAIL_TEMPLATE_SUCCESS"] = "[EMAIL_TEMPLATE] Load Email Template Success";
    EmailTemplateActionTypes["LOAD_EMAIL_TEMPLATE_FAIL"] = "[EMAIL_TEMPLATE] Load Email Template Fail";
    EmailTemplateActionTypes["UPDATE_EMAIL_TEMPLATE"] = "[EMAIL_TEMPLATE] Update Email Template";
    EmailTemplateActionTypes["UPDATE_EMAIL_TEMPLATE_SUCCESS"] = "[EMAIL_TEMPLATE] Update Email Template Success";
    EmailTemplateActionTypes["UPDATE_EMAIL_TEMPLATE_FAIL"] = "[EMAIL_TEMPLATE] Update Email Template Fail";
    EmailTemplateActionTypes["DELETE_EMAIL_TEMPLATE"] = "[EMAIL_TEMPLATE] Delete Email Template";
    EmailTemplateActionTypes["DELETE_EMAIL_TEMPLATE_SUCCESS"] = "[EMAIL_TEMPLATE] Delete Email Template Success";
    EmailTemplateActionTypes["DELETE_EMAIL_TEMPLATE_FAIL"] = "[EMAIL_TEMPLATE] Delete Email Template Fail";
    EmailTemplateActionTypes["ADD_EMAIL_TEMPLATE"] = "[EMAIL_TEMPLATE] Upload Data";
    EmailTemplateActionTypes["ADD_EMAIL_TEMPLATE_SUCCESS"] = "[EMAIL_TEMPLATE] Upload Data Success";
    EmailTemplateActionTypes["ADD_EMAIL_TEMPLATE_FAIL"] = "[EMAIL_TEMPLATE] Upload Data Fail";
})(EmailTemplateActionTypes || (EmailTemplateActionTypes = {}));
var LoadEmailTemplate = /** @class */ (function () {
    function LoadEmailTemplate(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE;
    }
    LoadEmailTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadEmailTemplate;
}());

var LoadEmailTemplateSuccess = /** @class */ (function () {
    function LoadEmailTemplateSuccess(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE_SUCCESS;
    }
    LoadEmailTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadEmailTemplateSuccess;
}());

var LoadEmailTemplateFail = /** @class */ (function () {
    function LoadEmailTemplateFail(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.LOAD_EMAIL_TEMPLATE_FAIL;
    }
    LoadEmailTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadEmailTemplateFail;
}());

var UpdateEmailTemplate = /** @class */ (function () {
    function UpdateEmailTemplate(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE;
    }
    UpdateEmailTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateEmailTemplate;
}());

var UpdateEmailTemplateSuccess = /** @class */ (function () {
    function UpdateEmailTemplateSuccess(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE_SUCCESS;
    }
    UpdateEmailTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateEmailTemplateSuccess;
}());

var UpdateEmailTemplateFail = /** @class */ (function () {
    function UpdateEmailTemplateFail(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.UPDATE_EMAIL_TEMPLATE_FAIL;
    }
    UpdateEmailTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateEmailTemplateFail;
}());

var DeleteEmailTemplate = /** @class */ (function () {
    function DeleteEmailTemplate(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE;
    }
    DeleteEmailTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteEmailTemplate;
}());

var DeleteEmailTemplateSuccess = /** @class */ (function () {
    function DeleteEmailTemplateSuccess(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE_SUCCESS;
    }
    DeleteEmailTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteEmailTemplateSuccess;
}());

var DeleteEmailTemplateFail = /** @class */ (function () {
    function DeleteEmailTemplateFail(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.DELETE_EMAIL_TEMPLATE_FAIL;
    }
    DeleteEmailTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteEmailTemplateFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddEmailTemplate = /** @class */ (function () {
    function AddEmailTemplate(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE;
    }
    AddEmailTemplate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddEmailTemplate;
}());

var AddEmailTemplateSuccess = /** @class */ (function () {
    function AddEmailTemplateSuccess(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE_SUCCESS;
    }
    AddEmailTemplateSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddEmailTemplateSuccess;
}());

var AddEmailTemplateFail = /** @class */ (function () {
    function AddEmailTemplateFail(payload) {
        this.payload = payload;
        this.type = EmailTemplateActionTypes.ADD_EMAIL_TEMPLATE_FAIL;
    }
    AddEmailTemplateFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddEmailTemplateFail;
}());



/***/ }),

/***/ "./src/app/views/pages/email-template/state/emailTemplate.effects.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/email-template/state/emailTemplate.effects.ts ***!
  \***************************************************************************/
/*! exports provided: EmailTemplateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateEffect", function() { return EmailTemplateEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emailTemplate.actions */ "./src/app/views/pages/email-template/state/emailTemplate.actions.ts");
/* harmony import */ var _email_template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../email-template.service */ "./src/app/views/pages/email-template/email-template.service.ts");







var EmailTemplateEffect = /** @class */ (function () {
    function EmailTemplateEffect(actions$, emailTemplateService) {
        var _this = this;
        this.actions$ = actions$;
        this.emailTemplateService = emailTemplateService;
        this.deleteEmailTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateActionTypes"].DELETE_EMAIL_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.emailTemplateService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteEmailTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteEmailTemplateFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.emailTemplateService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadEmailTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateActionTypes"].LOAD_EMAIL_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.emailTemplateService.getEmailTemplateById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["LoadEmailTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["LoadEmailTemplateFail"](err));
            }));
        }));
        this.updateEmailTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateActionTypes"].UPDATE_EMAIL_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.emailTemplateService.updateEmailTemplate(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateEmailTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateEmailTemplateFail"](err)); }));
        }));
        this.addEmailTemplate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateActionTypes"].ADD_EMAIL_TEMPLATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.emailTemplateService.addEmailTemplate(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["AddEmailTemplateSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_5__["AddEmailTemplateFail"](err));
            }));
        }));
    }
    EmailTemplateEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _email_template_service__WEBPACK_IMPORTED_MODULE_6__["EmailTemplateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTemplateEffect.prototype, "deleteEmailTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTemplateEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTemplateEffect.prototype, "loadEmailTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTemplateEffect.prototype, "updateEmailTemplate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTemplateEffect.prototype, "addEmailTemplate$", void 0);
    EmailTemplateEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _email_template_service__WEBPACK_IMPORTED_MODULE_6__["EmailTemplateService"]])
    ], EmailTemplateEffect);
    return EmailTemplateEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/email-template/state/emailTemplate.reducer.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/email-template/state/emailTemplate.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: initialState, EmailTemplateReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateReducer", function() { return EmailTemplateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailTemplate.actions */ "./src/app/views/pages/email-template/state/emailTemplate.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function EmailTemplateReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for emailTemplate load-----------------------------
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].LOAD_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].LOAD_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for emailTemplate delete-----------------------------
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].DELETE_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].DELETE_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for emailTemplate update-----------------------------
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].UPDATE_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].UPDATE_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }
        // for emailTemplate upadat status-----------------------------
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for emailTemplate add-----------------------------
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].ADD_EMAIL_TEMPLATE_SUCCESS: {
            return action.payload;
        }
        case _emailTemplate_actions__WEBPACK_IMPORTED_MODULE_0__["EmailTemplateActionTypes"].ADD_EMAIL_TEMPLATE_FAIL: {
            return action.payload.error;
        }
    }
}
var getTemplateState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("emailTemplate");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTemplateState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-email-template-email-template-module.js.map