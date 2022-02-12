(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/add-edit-help/add-edit-help.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/help/add-edit-help/add-edit-help.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'HELP.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'HELP.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/help/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditHelpForm\" [formGroup]=\"addEditHelpForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- <div *ngIf=\"Editor\">    \n                    <ckeditor  #editor [editor]=\"Editor\"  class=\"form-control\" type=\"text\" placeholder=\"Enter Contant\" formControlName=\"cms_content_ar\"            [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.cms_content_ar.errors }\"></ckeditor></div> -->\n                <!-- -----------help title -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_TITLE_EN' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_title_en -->\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'HELP.PLACEHOLDERS.HELP_TITLE' | translate}}\" type=\"text\"\n                                formControlName=\"help_title_en\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_title_en.errors }\">\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_title_en.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_title_en.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditHelpForm.controls.help_title_en.errors?.minlength && !addEditHelpForm.controls.help_title_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'HELP.VALIDATION.MIN_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"addEditHelpForm.controls.help_title_en.errors?.maxlength && !addEditHelpForm.controls.help_title_en.errors?.pattern\"\n                                    class=\"lbl-err\">\n                                    {{'HELP.VALIDATION.MAX_CHARACTER' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_title_en.errors?.pattern\">\n                                    {{'HELP.VALIDATION.INVALID_TITLE' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- \n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'HELP.LABEL.HELP_TITLE_AR' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'HELP.PLACEHOLDERS.HELP_TITLE' | translate}}\" type=\"text\"\n                            formControlName=\"help_title_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_title_ar.errors }\">\n                        <div *ngIf=\"submitted && addEditHelpForm.controls.help_title_ar.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditHelpForm.controls.help_title_ar.errors?.required\">\n                                {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditHelpForm.controls.help_title_ar.errors?.minlength && !addEditHelpForm.controls.help_title_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'HELP.VALIDATION.MIN_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"addEditHelpForm.controls.help_title_ar.errors?.maxlength && !addEditHelpForm.controls.help_title_ar.errors?.pattern\"\n                                class=\"lbl-err\">\n                                {{'HELP.VALIDATION.MAX_CHARACTER' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted && addEditHelpForm.controls.help_title_ar.errors?.pattern\">\n                                {{'HELP.VALIDATION.INVALID_TITLE' | translate }}\n                            </p>\n                        </div>\n                    </div> -->\n\n                </div>\n\n                <!-- -----------help description -->\n                <!-- <div class=\"form-group  row\"> -->\n\n                <!----- CK Editor en--->\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-12  col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_DESCRIPTION_EN' | translate}}*\n                            </label>\n                        </div>\n\n                        <div class=\" col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                            <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                                placeholder=\"Enter Contant\" formControlName=\"help_description_en\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_description_en.errors }\">\n                            </ckeditor>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_description_en.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_description_en.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                </div>\n                </div>\n\n                <!-- </div> -->\n\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-md-12  col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'HELP.LABEL.HELP_DESCRIPTION_AR' | translate}}*\n                        </label>\n                    </div>\n\n                    <div class=\" col-md-12 col-lg-12\" *ngIf=\"Editor\">\n                        <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                            placeholder=\"Enter Contant\" formControlName=\"help_description_ar\"\n                            [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_description_ar.errors }\">\n                        </ckeditor>\n                        <div *ngIf=\"submitted && addEditHelpForm.controls.help_description_ar.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p *ngIf=\"submitted && addEditHelpForm.controls.help_description_ar.errors?.required\">\n                            {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div>\n                    </div>\n                </div> -->\n\n                <!-- help email & help topic id-->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_EMAIL' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'HELP.PLACEHOLDERS.HELP_EMAIL' | translate}}\" type=\"text\"\n                                formControlName=\"help_email\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_email.errors }\">\n\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_email.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_email.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_email.errors?.pattern\">\n                                    {{'HELP.VALIDATION.INVALID_EMAIL' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_TOPIC' | translate }} *\n                            </label>\n                        </div>\n\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"helpTopic\" formControlName=\"help_topic\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_topic.errors }\">\n                                <option value=\"\"> {{'HELP.LABEL.SELECT_HELP_TOPIC' | translate }}</option>\n                                <option value=\"{{helpTopic._id}}\" *ngFor=\"let helpTopic of helpTopics\">\n                                    {{helpTopic.helpTopic_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_topic.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_topic.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- -----------help showDriver & help showRider -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_SHOW_DRIVER' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_showDriver -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"help_showDriver\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_showDriver.errors }\">\n                                <option value=\"{{'HELP.PLACEHOLDERS.YES' | translate}}\">\n                                    {{'HELP.LABEL.YES' | translate }}</option>\n                                <option value=\"{{'HELP.PLACEHOLDERS.NO' | translate}}\">{{'HELP.LABEL.NO' | translate }}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_showDriver.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_showDriver.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_SHOW_RIDER' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_showRider -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"help_showRider\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_showRider.errors }\">\n                                <option value=\"{{'HELP.PLACEHOLDERS.YES' | translate}}\">\n                                    {{'HELP.LABEL.YES' | translate }}</option>\n                                <option value=\"{{'HELP.PLACEHOLDERS.NO' | translate}}\">{{'HELP.LABEL.NO' | translate }}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_showRider.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_showRider.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------help Driver comment & help Rider Comment -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_DRIVER_COMMENT' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_showDriverComment -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"help_showDriverComment\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_showDriverComment.errors }\">\n                                <option value=\"{{'HELP.PLACEHOLDERS.YES' | translate}}\">\n                                    {{'HELP.LABEL.YES' | translate }}</option>\n                                <option value=\"{{'HELP.PLACEHOLDERS.NO' | translate}}\">{{'HELP.LABEL.NO' | translate }}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_showDriverComment.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditHelpForm.controls.help_showDriverComment.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_RIDER_COMMENT' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_showRiderComment -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"help_showRiderComment\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_showRiderComment.errors }\">\n                                <option value=\"{{'HELP.PLACEHOLDERS.YES' | translate}}\">\n                                    {{'HELP.LABEL.YES' | translate }}</option>\n                                <option value=\"{{'HELP.PLACEHOLDERS.NO' | translate}}\">{{'HELP.LABEL.NO' | translate }}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_showRiderComment.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_showRiderComment.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------help Reason  & help Status -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_REASON' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_reson -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"help_reson\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_reson.errors }\">\n                                <option value=\"{{'HELP.PLACEHOLDERS.YES' | translate}}\">\n                                    {{'HELP.LABEL.YES' | translate }}</option>\n                                <option value=\"{{'HELP.PLACEHOLDERS.NO' | translate}}\">{{'HELP.LABEL.NO' | translate }}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_reson.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_reson.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HELP.LABEL.HELP_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- help_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"help_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHelpForm.controls.help_status.errors }\">\n                                <option value=\"{{'HELP.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'HELP.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'HELP.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'HELP.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHelpForm.controls.help_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHelpForm.controls.help_status.errors?.required\">\n                                    {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/help/list\"\n                            class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" \n                            class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                        </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/help-list/help-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/help/help-list/help-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'HELP.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/help/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/help.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/help/help.component.html ***!
  \********************************************************************************/
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

/***/ "./src/app/views/pages/help/add-edit-help/add-edit-help.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/help/add-edit-help/add-edit-help.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvaGVscC9hZGQtZWRpdC1oZWxwL2FkZC1lZGl0LWhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSx1QkFBdUIsRUFBQTs7QUFDakM7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hlbHAvYWRkLWVkaXQtaGVscC9hZGQtZWRpdC1oZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0LWF1dG8ge2hlaWdodDogYXV0byAhaW1wb3J0YW50O31cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAxLjMyNXJlbSkgY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/help/add-edit-help/add-edit-help.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/help/add-edit-help/add-edit-help.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddHelpComponent, EditHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpComponent", function() { return AddHelpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHelpComponent", function() { return EditHelpComponent; });
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
/* harmony import */ var _state_help_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/help.actions */ "./src/app/views/pages/help/state/help.actions.ts");
/* harmony import */ var _state_help_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/help.reducer */ "./src/app/views/pages/help/state/help.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../help.service */ "./src/app/views/pages/help/help.service.ts");

















var AddHelpComponent = /** @class */ (function () {
    function AddHelpComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, helpService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.helpService = helpService;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.helpTopics = [];
        this.HELP_CONST = this.translate.instant('HELP');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HELP'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.HELP_CONST.MODULE_NAME);
    }
    AddHelpComponent.prototype.ngOnInit = function () {
        this.buildAddEditHelpForm();
        this.getAllHelpTopicsList();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    AddHelpComponent.prototype.buildAddEditHelpForm = function () {
        this.addEditHelpForm = this._formBuilder.group({
            help_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //  help_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            help_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            help_topic: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            help_description_en: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            //   help_description_ar: ["", Validators.required],
            help_showDriver: ["No", []],
            help_showRider: ["No", []],
            help_showDriverComment: ["No", []],
            help_showRiderComment: ["No", []],
            help_reson: ["No", []],
            help_status: ["ACTIVE", []],
        });
    };
    AddHelpComponent.prototype.getAllHelpTopicsList = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.helpService.getAllHelpTopicsList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.helpTopics = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddHelpComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditHelpForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditHelpForm.value;
                    obj = {
                        help_title: [{
                                lang: 'EN',
                                title: form.help_title_en
                            }
                            // , {
                            //   lang: 'AR',
                            //   title: form.help_title_ar
                            // }
                        ],
                        help_email: form.help_email,
                        help_topic: form.help_topic,
                        help_description: [{
                                lang: 'EN',
                                description: form.help_description_en
                            }
                            // , {
                            //   lang: 'AR',
                            //   description: form.help_description_ar
                            // }
                        ],
                        help_showDriver: form.help_showDriver,
                        help_showRider: form.help_showRider,
                        help_showDriverComment: form.help_showDriverComment,
                        help_showRiderComment: form.help_showRiderComment,
                        help_reson: form.help_reson,
                        help_status: form.help_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_help_actions__WEBPACK_IMPORTED_MODULE_12__["AddHelp"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_help_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/help/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditHelpForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddHelpComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _help_service__WEBPACK_IMPORTED_MODULE_16__["HelpService"] }
    ]; };
    AddHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-help',
            template: __webpack_require__(/*! raw-loader!./add-edit-help.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/add-edit-help/add-edit-help.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-help.component.scss */ "./src/app/views/pages/help/add-edit-help/add-edit-help.component.scss")]
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
            _help_service__WEBPACK_IMPORTED_MODULE_16__["HelpService"]])
    ], AddHelpComponent);
    return AddHelpComponent;
}());

var EditHelpComponent = /** @class */ (function () {
    function EditHelpComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, helpService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.helpService = helpService;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.helpTopics = [];
        this.HELP_CONST = this.translate.instant('HELP');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HELP'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.HELP_CONST.MODULE_NAME);
    }
    EditHelpComponent.prototype.ngOnInit = function () {
        this.buildAddEditHelpForm();
        this.getHelpDetails();
        this.getAllHelpTopicsList();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_14__;
    };
    EditHelpComponent.prototype.buildAddEditHelpForm = function () {
        this.addEditHelpForm = this._formBuilder.group({
            help_title_en: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            //   help_title_ar: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            help_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            help_topic: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            help_description_en: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            //   help_description_ar: ["", Validators.required],
            help_showDriver: [""],
            help_showRider: [""],
            help_showDriverComment: [""],
            help_showRiderComment: [""],
            help_reson: [""],
            help_status: ["ACTIVE", []],
        });
    };
    EditHelpComponent.prototype.getHelpDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_help_actions__WEBPACK_IMPORTED_MODULE_12__["LoadHelp"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_help_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            help_title_en: result.help_title.filter(function (obj) { return obj.lang == "EN"; })[0].title,
                            //   help_title_ar: result.help_title.filter((obj) => obj.lang == "AR")[0].title,
                            help_email: result.help_email,
                            help_topic: result.help_topic != null && result.help_topic != undefined ? result.help_topic : "",
                            help_description_en: result.help_description.filter(function (obj) { return obj.lang == "EN"; })[0].description,
                            // help_description_ar: result.help_description.filter((obj) => obj.lang == "AR")[0].description,
                            help_showDriver: result.help_showDriver != null && result.help_showDriver != undefined ? result.help_showDriver : "",
                            help_showRider: result.help_showRider != null && result.help_showRider != undefined ? result.help_showRider : "",
                            help_showDriverComment: result.help_showDriverComment != null && result.help_showDriverComment != undefined ? result.help_showDriverComment : "",
                            help_showRiderComment: result.help_showRiderComment != null && result.help_showRiderComment != undefined ? result.help_showRiderComment : "",
                            help_reson: result.help_reson != null && result.help_reson != undefined ? result.help_reson : "",
                            help_status: result.help_status != null && result.help_status != undefined ? result.help_status : "",
                        };
                        return [4 /*yield*/, this.addEditHelpForm.patchValue(fd)];
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
    EditHelpComponent.prototype.getAllHelpTopicsList = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.helpService.getAllHelpTopicsList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.helpTopics = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditHelpComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditHelpForm.valid) {
                    form = this.addEditHelpForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            help_title: [{
                                    lang: 'EN',
                                    title: form.help_title_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   title: form.help_title_ar
                                // }
                            ],
                            help_email: form.help_email,
                            help_topic: form.help_topic,
                            help_description: [{
                                    lang: 'EN',
                                    description: form.help_description_en
                                }
                                // , {
                                //   lang: 'AR',
                                //   description: form.help_description_ar
                                // }
                            ],
                            help_showDriver: form.help_showDriver,
                            help_showRider: form.help_showRider,
                            help_showDriverComment: form.help_showDriverComment,
                            help_showRiderComment: form.help_showRiderComment,
                            help_reson: form.help_reson,
                            help_status: form.help_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_help_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateHelp"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_help_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/help/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditHelpForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditHelpComponent.ctorParameters = function () { return [
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
        { type: _help_service__WEBPACK_IMPORTED_MODULE_16__["HelpService"] }
    ]; };
    EditHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-help',
            template: __webpack_require__(/*! raw-loader!./add-edit-help.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/add-edit-help/add-edit-help.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-help.component.scss */ "./src/app/views/pages/help/add-edit-help/add-edit-help.component.scss")]
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
            _help_service__WEBPACK_IMPORTED_MODULE_16__["HelpService"]])
    ], EditHelpComponent);
    return EditHelpComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/help/help-list/help-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/help/help-list/help-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hlbHAvaGVscC1saXN0L2hlbHAtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/help/help-list/help-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/help/help-list/help-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: HelpListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpListComponent", function() { return HelpListComponent; });
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
var HelpListComponent = /** @class */ (function () {
    function HelpListComponent(subheaderService, localStorageService, _script, router, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.HELP_CONST = [];
        this.searchObj = { field: 'help_title', help_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.HELP_CONST = this.translate.instant('HELP');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HELP'));
        titleService.setTitle(this.APPNAME + " | " + this.HELP_CONST.MODULE_NAME);
    }
    HelpListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    HelpListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HELP.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    HelpListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    HelpListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-help-list', scripts).then(function () {
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
                    sProcessing: that.HELP_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listHelp,
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
                        title: that.HELP_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.HELP_CONST.LABEL.HELP_TITLE, data: 'help_title' },
                    { title: that.HELP_CONST.LABEL.HELP_EMAIL, data: 'help_email' },
                    { title: that.HELP_CONST.LABEL.STATUS, data: 'help_status' },
                    { title: that.HELP_CONST.LABEL.CREATED_ON, data: 'help_createdOn' },
                    { title: that.HELP_CONST.LABEL.MODIFIED_ON, data: 'help_modifyOn' },
                    { title: that.HELP_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.HELP_CONST.LABEL.SR_NO:
                                break;
                            case that.HELP_CONST.LABEL.HELP_TITLE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HELP_CONST.LABEL.HELP_EMAIL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HELP_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.HELP_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.HELP_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.HELP_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            case that.HELP_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HELP_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HELP_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.HELP_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.HELP_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                            return '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' + id + '" onclick="window.my.notimgmt.edit(this)" title="Edit details">\
                  <i class="la la-edit"></i> </a>\ <a href="javascript:;" id="btnDelete" data-id="' + id + '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
                  <i class="la la-trash"></i>\
               </a>';
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
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.help_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.help_status].title + '</span>';
                        }
                    },
                    {
                        targets: 4,
                        width: '10%'
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
    HelpListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/help/edit/' + this.id]);
    };
    HelpListComponent.prototype.delete = function (e) {
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
                            component: 'help',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'help',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    HelpListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    HelpListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
    ]; };
    HelpListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-help-list',
            template: __webpack_require__(/*! raw-loader!./help-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/help-list/help-list.component.html"),
            styles: [__webpack_require__(/*! ./help-list.component.scss */ "./src/app/views/pages/help/help-list/help-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], HelpListComponent);
    return HelpListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/help/help.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/pages/help/help.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/help/help.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/pages/help/help.component.ts ***!
  \****************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var HelpComponent = /** @class */ (function () {
    function HelpComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].HELP);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].helpManagement);
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-help',
            template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/views/pages/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/help/help.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/help/help.module.ts ***!
  \*************************************************/
/*! exports provided: HelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModule", function() { return HelpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_help_add_edit_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-help/add-edit-help.component */ "./src/app/views/pages/help/add-edit-help/add-edit-help.component.ts");
/* harmony import */ var _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-list/help-list.component */ "./src/app/views/pages/help/help-list/help-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_help_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/help.effects */ "./src/app/views/pages/help/state/help.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_help_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/help.reducer */ "./src/app/views/pages/help/state/help.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./help.component */ "./src/app/views/pages/help/help.component.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_4__["HelpListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].HELP.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_help_add_edit_help_component__WEBPACK_IMPORTED_MODULE_3__["AddHelpComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].HELP.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_help_add_edit_help_component__WEBPACK_IMPORTED_MODULE_3__["EditHelpComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].HELP.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var HelpModule = /** @class */ (function () {
    function HelpModule() {
    }
    HelpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"], _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_4__["HelpListComponent"], _add_edit_help_add_edit_help_component__WEBPACK_IMPORTED_MODULE_3__["AddHelpComponent"], _add_edit_help_add_edit_help_component__WEBPACK_IMPORTED_MODULE_3__["EditHelpComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_help_effects__WEBPACK_IMPORTED_MODULE_11__["HelpEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("help", _state_help_reducer__WEBPACK_IMPORTED_MODULE_14__["HelpReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], HelpModule);
    return HelpModule;
}());



/***/ }),

/***/ "./src/app/views/pages/help/state/help.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/help/state/help.actions.ts ***!
  \********************************************************/
/*! exports provided: HelpActionTypes, LoadHelp, LoadHelpSuccess, LoadHelpFail, UpdateHelp, UpdateHelpSuccess, UpdateHelpFail, DeleteHelp, DeleteHelpSuccess, DeleteHelpFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddHelp, AddHelpSuccess, AddHelpFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpActionTypes", function() { return HelpActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHelp", function() { return LoadHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHelpSuccess", function() { return LoadHelpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHelpFail", function() { return LoadHelpFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHelp", function() { return UpdateHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHelpSuccess", function() { return UpdateHelpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHelpFail", function() { return UpdateHelpFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHelp", function() { return DeleteHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHelpSuccess", function() { return DeleteHelpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHelpFail", function() { return DeleteHelpFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelp", function() { return AddHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpSuccess", function() { return AddHelpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHelpFail", function() { return AddHelpFail; });
var HelpActionTypes;
(function (HelpActionTypes) {
    HelpActionTypes["UPDATE_STATUS"] = "[HELP] Update Status";
    HelpActionTypes["UPDATE_STATUS_SUCCESS"] = "[HELP]  Update Status Success";
    HelpActionTypes["UPDATE_STATUS_FAIL"] = "[HELP]  Update Status Fail";
    HelpActionTypes["LOAD_HELP"] = "[HELP] Load HELP";
    HelpActionTypes["LOAD_HELP_SUCCESS"] = "[HELP] Load HELP Success";
    HelpActionTypes["LOAD_HELP_FAIL"] = "[HELP] Load HELP Fail";
    HelpActionTypes["UPDATE_HELP"] = "[HELP] Update HELP";
    HelpActionTypes["UPDATE_HELP_SUCCESS"] = "[HELP] Update HELP Success";
    HelpActionTypes["UPDATE_HELP_FAIL"] = "[HELP] Update HELP Fail";
    HelpActionTypes["DELETE_HELP"] = "[HELP] Delete HELP";
    HelpActionTypes["DELETE_HELP_SUCCESS"] = "[HELP] Delete HELP Success";
    HelpActionTypes["DELETE_HELP_FAIL"] = "[HELP] Delete HELP Fail";
    HelpActionTypes["ADD_HELP"] = "[HELP] Upload Data";
    HelpActionTypes["ADD_HELP_SUCCESS"] = "[HELP] Upload Data Success";
    HelpActionTypes["ADD_HELP_FAIL"] = "[HELP] Upload Data Fail";
    HelpActionTypes["UPLOAD_DATA"] = "[HELP] Upload Data";
    HelpActionTypes["UPLOAD_DATA_SUCCESS"] = "[HELP] Upload Data Success";
    HelpActionTypes["UPLOAD_DATA_FAIL"] = "[HELP] Upload Data Fail";
})(HelpActionTypes || (HelpActionTypes = {}));
var LoadHelp = /** @class */ (function () {
    function LoadHelp(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.LOAD_HELP;
    }
    LoadHelp.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHelp;
}());

var LoadHelpSuccess = /** @class */ (function () {
    function LoadHelpSuccess(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.LOAD_HELP_SUCCESS;
    }
    LoadHelpSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHelpSuccess;
}());

var LoadHelpFail = /** @class */ (function () {
    function LoadHelpFail(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.LOAD_HELP_FAIL;
    }
    LoadHelpFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHelpFail;
}());

var UpdateHelp = /** @class */ (function () {
    function UpdateHelp(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.UPDATE_HELP;
    }
    UpdateHelp.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHelp;
}());

var UpdateHelpSuccess = /** @class */ (function () {
    function UpdateHelpSuccess(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.UPDATE_HELP_SUCCESS;
    }
    UpdateHelpSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHelpSuccess;
}());

var UpdateHelpFail = /** @class */ (function () {
    function UpdateHelpFail(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.UPDATE_HELP_FAIL;
    }
    UpdateHelpFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHelpFail;
}());

var DeleteHelp = /** @class */ (function () {
    function DeleteHelp(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.DELETE_HELP;
    }
    DeleteHelp.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHelp;
}());

var DeleteHelpSuccess = /** @class */ (function () {
    function DeleteHelpSuccess(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.DELETE_HELP_SUCCESS;
    }
    DeleteHelpSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHelpSuccess;
}());

var DeleteHelpFail = /** @class */ (function () {
    function DeleteHelpFail(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.DELETE_HELP_FAIL;
    }
    DeleteHelpFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHelpFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddHelp = /** @class */ (function () {
    function AddHelp(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.ADD_HELP;
    }
    AddHelp.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHelp;
}());

var AddHelpSuccess = /** @class */ (function () {
    function AddHelpSuccess(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.ADD_HELP_SUCCESS;
    }
    AddHelpSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHelpSuccess;
}());

var AddHelpFail = /** @class */ (function () {
    function AddHelpFail(payload) {
        this.payload = payload;
        this.type = HelpActionTypes.ADD_HELP_FAIL;
    }
    AddHelpFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHelpFail;
}());



/***/ }),

/***/ "./src/app/views/pages/help/state/help.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/help/state/help.effects.ts ***!
  \********************************************************/
/*! exports provided: HelpEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpEffect", function() { return HelpEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _help_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help.actions */ "./src/app/views/pages/help/state/help.actions.ts");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../help.service */ "./src/app/views/pages/help/help.service.ts");







var HelpEffect = /** @class */ (function () {
    function HelpEffect(actions$, HelpService) {
        var _this = this;
        this.actions$ = actions$;
        this.HelpService = HelpService;
        this.deleteHelp$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_actions__WEBPACK_IMPORTED_MODULE_5__["HelpActionTypes"].DELETE_HELP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.HelpService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteHelpSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteHelpFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_actions__WEBPACK_IMPORTED_MODULE_5__["HelpActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HelpService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadHelp$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_actions__WEBPACK_IMPORTED_MODULE_5__["HelpActionTypes"].LOAD_HELP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.HelpService.getHelpById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_actions__WEBPACK_IMPORTED_MODULE_5__["LoadHelpSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_actions__WEBPACK_IMPORTED_MODULE_5__["LoadHelpFail"](err));
            }));
        }));
        this.updateHelp$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_actions__WEBPACK_IMPORTED_MODULE_5__["HelpActionTypes"].UPDATE_HELP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HelpService.updateHelp(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateHelpSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateHelpFail"](err)); }));
        }));
        this.addHelp$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_help_actions__WEBPACK_IMPORTED_MODULE_5__["HelpActionTypes"].ADD_HELP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HelpService.addHelp(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _help_actions__WEBPACK_IMPORTED_MODULE_5__["AddHelpSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _help_actions__WEBPACK_IMPORTED_MODULE_5__["AddHelpFail"](err));
            }));
        }));
    }
    HelpEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _help_service__WEBPACK_IMPORTED_MODULE_6__["HelpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpEffect.prototype, "deleteHelp$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpEffect.prototype, "loadHelp$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpEffect.prototype, "updateHelp$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HelpEffect.prototype, "addHelp$", void 0);
    HelpEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _help_service__WEBPACK_IMPORTED_MODULE_6__["HelpService"]])
    ], HelpEffect);
    return HelpEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/help/state/help.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/help/state/help.reducer.ts ***!
  \********************************************************/
/*! exports provided: initialState, HelpReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpReducer", function() { return HelpReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _help_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.actions */ "./src/app/views/pages/help/state/help.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function HelpReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Help load-----------------------------
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].LOAD_HELP_SUCCESS: {
            return action.payload;
        }
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].LOAD_HELP_FAIL: {
            return action.payload.error;
        }
        // for Help  delete-----------------------------
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].DELETE_HELP_SUCCESS: {
            return action.payload;
        }
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].DELETE_HELP_FAIL: {
            return action.payload.error;
        }
        // for Help  update-----------------------------
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].UPDATE_HELP_SUCCESS: {
            return action.payload;
        }
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].UPDATE_HELP_FAIL: {
            return action.payload.error;
        }
        // for Help  upadat status-----------------------------
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Help  add-----------------------------
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].ADD_HELP_SUCCESS: {
            return action.payload;
        }
        case _help_actions__WEBPACK_IMPORTED_MODULE_0__["HelpActionTypes"].ADD_HELP_FAIL: {
            return action.payload.error;
        }
    }
}
var getHelpState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("help");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getHelpState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-help-help-module.js.map