(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-admin-management-admin-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'ADMIN.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'ADMIN.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/admin-management/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditAdminForm\" [formGroup]=\"addEditAdminForm\">\n            <div class=\"kt-portlet__body\">\n\n                <div class=\"form-group row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.USER_PROFILE_IMAGE' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                </div>\n                                <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Image\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                    <i class=\"fa fa-pen\"></i>\n                                    <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectUserImage($event)\">\n                                </label>\n                                <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"removeUserImage()\" data-original-title=\"Remove Image\">\n                                    <i class=\"fa fa-times\"></i>\n                                </span>\n                            </div>\n                            <span class=\"form-text text-muted\">{{'ADMIN.NOTES.IMAGE'|translate}}\n                            </span>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.FIRSTNAME' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'ADMIN.PLACEHOLDERS.FIRSTNAME' | translate}}\" type=\"text\" formControlName=\"user_firstName\" [ngClass]=\"{ 'is-invalid': submitted && addEditAdminForm.controls.user_firstName.errors }\">\n                            <div *ngIf=\"submitted && addEditAdminForm.controls.user_firstName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_firstName.errors?.required\">\n                                    {{'ADMIN.VALIDATION.FIRSTNAME_REQUIRED' | translate }}</p>\n                                <p *ngIf=\"addEditAdminForm.controls.user_firstName.errors?.minlength && !addEditAdminForm.controls.user_firstName.errors?.pattern\" class=\"lbl-err\"> {{'ADMIN.VALIDATION.MIN_CHARACTER' | translate }}</p>\n                                <p *ngIf=\"addEditAdminForm.controls.user_firstName.errors?.maxlength && !addEditAdminForm.controls.user_firstName.errors?.pattern\" class=\"lbl-err\">{{'ADMIN.VALIDATION.MAX_CHARACTER' | translate }}</p>\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_firstName.errors?.pattern\">\n                                    {{'ADMIN.VALIDATION.FIRSTNAME_INVALID' | translate }} </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.LASTNAME' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'ADMIN.PLACEHOLDERS.LASTNAME' | translate}}\" type=\"text\" formControlName=\"user_lastName\" [ngClass]=\"{ 'is-invalid': submitted && addEditAdminForm.controls.user_lastName.errors }\">\n                            <div *ngIf=\"submitted && addEditAdminForm.controls.user_lastName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_lastName.errors?.required\">\n                                    {{'ADMIN.VALIDATION.LASTNAME_REQUIRED' | translate }}</p>\n                                <p *ngIf=\"addEditAdminForm.controls.user_lastName.errors?.minlength\" class=\"lbl-err\"> {{'ADMIN.VALIDATION.MIN_CHARACTER' | translate }}</p>\n                                <p *ngIf=\"addEditAdminForm.controls.user_lastName.errors?.maxlength\" class=\"lbl-err\">{{'ADMIN.VALIDATION.MAX_CHARACTER' | translate }}</p>\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_lastName.errors?.pattern\">\n                                    {{'ADMIN.VALIDATION.LASTNAME_INVALID' | translate }} </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.ROLE' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\" formControlName=\"user_roleId\" [ngClass]=\"{ 'is-invalid': submitted && addEditAdminForm.controls.user_roleId.errors }\">\n                                <option value=\"\">{{'ADMIN.PLACEHOLDERS.ROLE' | translate }}</option>\n\n                                <option value=\"{{roleDetail._id}}\" *ngFor=\"let roleDetail of roles\">\n                                    {{roleDetail.role_name}}</option>\n                            </select>\n\n                            <div *ngIf=\"submitted && addEditAdminForm.controls.user_roleId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_roleId.errors?.required\">\n                                    {{'ADMIN.VALIDATION.ROLE_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.EMAIL' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'ADMIN.PLACEHOLDERS.EMAIL' | translate}}\" formControlName=\"user_email\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && addEditAdminForm.controls.user_email.errors }\">\n                            <div *ngIf=\"submitted && addEditAdminForm.controls.user_email.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_email.errors?.required\">\n                                    {{'ADMIN.VALIDATION.EMAIL_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_email.errors?.pattern\">\n                                    {{'ADMIN.VALIDATION.EMAIL_INVALID' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.PHONE_NUMBER' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'ADMIN.PLACEHOLDERS.PHONE_NUMBER' | translate}}\" type=\"text\" formControlName=\"user_phoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && addEditAdminForm.controls.user_phoneNumber.errors }\">\n                            <div *ngIf=\"submitted && addEditAdminForm.controls.user_phoneNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_phoneNumber.errors?.required\">\n                                    {{'ADMIN.VALIDATION.PHONE_NUMBER' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_phoneNumber.errors?.pattern\">\n                                    {{'ADMIN.VALIDATION.PHONE_NUMBER_INVALID' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'ADMIN.LABEL.PASSWORD' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"{{'ADMIN.PLACEHOLDERS.PASSWORD' | translate}}\" formControlName=\"user_password\" (keyup)=\"onkeyUp($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && addEditAdminForm.controls.user_password.errors }\">\n                            <div *ngIf=\"submitted && addEditAdminForm.controls.user_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_password.errors?.required\">\n                                    {{'ADMIN.VALIDATION.PASSWORD_REQUIRED' | translate}}\n                                </p>\n                                <p *ngIf=\"submitted && addEditAdminForm.controls.user_password.errors?.pattern\">\n                                    {{'ADMIN.VALIDATION.PASSWORD_INVALID' | translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            Profile Photo*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"image_bx\" style=\"position: relative; float: left;display: inline-grid;\">\n                            <img [src]=\"url ? url : './../../assets/skv_images/upload_img.png'\" class=\"up_img\"\n                                width=\"72px\" height=\"72px\"> <br />\n                            <input type='file' (change)=\"onSelectFile($event)\">\n                        </div>\n                    </div>\n                </div> -->\n\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/admin-management/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/admin-list/admin-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin-management/admin-list/admin-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'ADMIN.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/admin-management/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n                <table class=\"table table-striped- table-bordered table-hover table-checkable admin_mangmt_tbl action_tbl\" id=\"kt_datatable\">\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/admin-management.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin-management/admin-management.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>\n"

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

/***/ "./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYWRtaW4tbWFuYWdlbWVudC9hZGQtZWRpdC1hZG1pbi9hZGQtZWRpdC1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpREE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FkbWluLW1hbmFnZW1lbnQvYWRkLWVkaXQtYWRtaW4vYWRkLWVkaXQtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICNmaWxlUGhvdG8ge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogNzJweDtcbi8vICAgICBoZWlnaHQ6IDcycHg7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgei1pbmRleDogMjtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLmltYWdlX2J4OmhvdmVyIC5jbG9zZV9idG4ge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyAuaW1hZ2VfYngge1xuLy8gICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4vLyAgICAgd2lkdGg6IDIwJTtcbi8vIH1cblxuXG4vLyAudXBsb2FkZXIge1xuLy8gICAgIHdpZHRoOiA3MnB4O1xuLy8gICAgIGhlaWdodDogNzJweDtcbi8vICAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgzMywgMzMsIDMzLCAuMzUpO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBmb250LXNpemU6IDI0cHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICBjb2xvcjogcmdiYSgzMywgMzMsIDMzLCAuMzUpO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnRXhvIDInLCBzYW5zLXNlcmlmO1xuLy8gfVxuXG4vLyAuY2xvc2VfYnRuIHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyB9XG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddAdminComponent, EditAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdminComponent", function() { return EditAdminComponent; });
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
/* harmony import */ var _state_admin_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/admin.actions */ "./src/app/views/pages/admin-management/state/admin.actions.ts");
/* harmony import */ var _state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/admin reducer */ "./src/app/views/pages/admin-management/state/admin reducer.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
















var AddAdminComponent = /** @class */ (function () {
    function AddAdminComponent(subheaderService, _formBuilder, router, localStorageService, toastr, store, titleService, dtr, roleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.dtr = dtr;
        this.roleService = roleService;
        this.translate = translate;
        this.isAdd = true;
        this.submitted = false;
        this.role = '';
        this.roles = [];
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.ADMIN_CONST = this.translate.instant("ADMIN");
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["subHeader"].ADMIN);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["titles"].adminManagement);
    }
    AddAdminComponent.prototype.ngOnInit = function () {
        this.buildAddAdminForm();
        this.getRoleDetails();
        var user = this.localStorageService.getCurruntUser();
        if (user && user != null) {
            this.role = user && user.user_roleId ? user.user_roleId : '';
        }
    };
    AddAdminComponent.prototype.buildAddAdminForm = function () {
        this.addEditAdminForm = this._formBuilder.group({
            // user_fullName: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].phoneRegEx)]],
            user_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].passwordRegEx)]],
        });
    };
    // user Image
    AddAdminComponent.prototype.onSelectUserImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.url = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error(this.ADMIN_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    AddAdminComponent.prototype.removeUserImage = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    AddAdminComponent.prototype.getRoleDetails = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.roleService.getRolesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    this.roles = result;
                    this.dtr.detectChanges();
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    this.toastr.error(data['message']);
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddAdminComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, fd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditAdminForm.valid) {
                    if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png' || this.imageFile == undefined) {
                        this.submitted = false;
                        this.toastr.error(this.ADMIN_CONST.LABEL.IMAGE_REQUIRED);
                    }
                    else {
                        res = this.addEditAdminForm.value;
                        fd = new FormData();
                        fd.append('user_firstName', res.user_firstName);
                        fd.append('user_lastName', res.user_lastName);
                        fd.append('user_roleId', res.user_roleId);
                        fd.append('user_phoneNumber', res.user_phoneNumber);
                        fd.append('user_email', res.user_email);
                        fd.append('user_password', res.user_password && res.user_password != '' ? res.user_password : '');
                        if (this.imageFile) {
                            fd.append('user_profileImage', this.imageFile);
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                        this.stateSubscription = this.store.dispatch(new _state_admin_actions__WEBPACK_IMPORTED_MODULE_11__["CreateAdmin"](fd));
                        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                                    _this.toastr.success(data['message']);
                                    _this.stateSubscription.unsubscribe();
                                    _this.router.navigate(['/admin-management/list']);
                                }
                                else {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                                    _this.stateSubscription.unsubscribe();
                                    _this.toastr.error(data['message']);
                                }
                            }
                        });
                    }
                }
                else if (!this.addEditAdminForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddAdminComponent.prototype.onkeyUp = function (e) {
    };
    AddAdminComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__["RolesService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    AddAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-admin',
            template: __webpack_require__(/*! raw-loader!./add-edit-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-admin.component.scss */ "./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__["RolesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());

var EditAdminComponent = /** @class */ (function () {
    function EditAdminComponent(subheaderService, _formBuilder, router, toastr, _route, localStorageService, store, titleService, dtr, roleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.store = store;
        this.dtr = dtr;
        this.roleService = roleService;
        this.translate = translate;
        this.isAdd = false;
        this.submitted = false;
        this.role = '';
        this.roles = [];
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.ADMIN_CONST = this.translate.instant("ADMIN");
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["subHeader"].ADMIN);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["titles"].adminManagement);
    }
    EditAdminComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.buildAddAdminForm();
                        this.localStorageService.getCurruntUser();
                        user = this.localStorageService.getCurruntUser();
                        if (user && user != null) {
                            this.role = user && user.user_roleId ? user.user_roleId : '';
                        }
                        this.getRoleDetails();
                        return [4 /*yield*/, this.getAdminDetails()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAdminComponent.prototype.buildAddAdminForm = function () {
        this.addEditAdminForm = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].phoneRegEx)]],
            user_password: ["", []]
        });
    };
    // user Image
    EditAdminComponent.prototype.onSelectUserImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.url = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                // this.toastr.error(this.ADMIN_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditAdminComponent.prototype.removeUserImage = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    EditAdminComponent.prototype.getAdminDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.id = this._route.snapshot.params['id'];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                        this.stateSubscription = this.store.dispatch(new _state_admin_actions__WEBPACK_IMPORTED_MODULE_11__["LoadAdmin"](this.id));
                        _a = this;
                        return [4 /*yield*/, this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var fd;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(data && data != undefined)) return [3 /*break*/, 3];
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            this.adminData = data['data'];
                                            fd = {
                                                user_firstName: data['data'].user_firstName,
                                                user_lastName: data['data'].user_lastName,
                                                user_roleId: data['data'].user_roleId != null && data['data'].user_roleId != undefined ? data['data'].user_roleId : "",
                                                user_email: data['data'].user_email,
                                                user_phoneNumber: data['data'].user_phoneNumber
                                            };
                                            if (data['data'].user_profileImage) {
                                                this.url = data['data'].user_profileImage;
                                            }
                                            return [4 /*yield*/, this.addEditAdminForm.patchValue(fd)];
                                        case 1:
                                            _a.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                                            this.stateSubscription.unsubscribe();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                                            this.stateSubscription.unsubscribe();
                                            this.toastr.error(data['message']);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.stateSubscription = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAdminComponent.prototype.getRoleDetails = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.roleService.getRolesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    this.roles = result;
                    this.dtr.detectChanges();
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    this.toastr.error(data['message']);
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditAdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addEditAdminForm.valid) {
            if (this.imageFile == '' || this.imageFile == '../../../../../assets/media/newMedia/add.png') {
                this.submitted = false;
                // this.toastr.error('profile image is required')
                this.toastr.error(this.ADMIN_CONST.LABEL.IMAGE_REQUIRED);
            }
            else {
                var res = this.addEditAdminForm.value;
                var fd = new FormData();
                fd.append('user_firstName', res.user_firstName);
                fd.append('user_lastName', res.user_lastName);
                fd.append('user_roleId', res.user_roleId);
                fd.append('user_phoneNumber', res.user_phoneNumber);
                fd.append('user_email', res.user_email);
                if (res.user_password && res.user_password != '') {
                    fd.append('user_password', res.user_password);
                }
                // fd.append('user_password', res.user_password && res.user_password != '' ? res.user_password : this.adminData.user_password);
                if (this.imageFile) {
                    fd.append('user_profileImage', this.imageFile);
                }
                var obj = {
                    id: this.id,
                    data: fd
                };
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.stateSubscription = this.store.dispatch(new _state_admin_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateAdmin"](obj));
                this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _this.toastr.success(data['message']);
                            _this.stateSubscription.unsubscribe();
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            _this.router.navigate(['/admin-management/list']);
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            _this.toastr.error(data['message']);
                            _this.stateSubscription.unsubscribe();
                        }
                    }
                });
            }
        }
        else if (!this.addEditAdminForm.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditAdminComponent.prototype.onkeyUp = function (e) {
        var form = this.addEditAdminForm;
        if (e && e != '') {
            form.get('user_password').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            form.get('user_password').updateValueAndValidity();
            form.get('user_password').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].passwordRegEx));
            form.get('user_password').updateValueAndValidity();
        }
        else {
            form.get('user_password').clearValidators();
            form.get('user_password').updateValueAndValidity();
        }
    };
    EditAdminComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__["RolesService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    EditAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-admin',
            template: __webpack_require__(/*! raw-loader!./add-edit-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-admin.component.scss */ "./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__["RolesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], EditAdminComponent);
    return EditAdminComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/admin-management/admin-list/admin-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/admin-list/admin-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-backdrop.show {\n  opacity: 0.5 !important; }\n\n.modal-backdrop {\n  z-index: 1040 !important; }\n\n.scrlbl_table {\n  overflow-x: auto; }\n\n.kt-page-loader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  padding-top: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYWRtaW4tbWFuYWdlbWVudC9hZG1pbi1saXN0L2FkbWluLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx3QkFBd0IsRUFBQTs7QUFFNUI7RUFBZSxnQkFBZ0IsRUFBQTs7QUFFL0I7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9hZG1pbi1tYW5hZ2VtZW50L2FkbWluLWxpc3QvYWRtaW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1iYWNrZHJvcC5zaG93e1xuICAgIG9wYWNpdHk6MC41ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1iYWNrZHJvcHtcbiAgICB6LWluZGV4OiAxMDQwICFpbXBvcnRhbnQ7XG59XG4uc2NybGJsX3RhYmxlIHtvdmVyZmxvdy14OiBhdXRvO31cblxuLmt0LXBhZ2UtbG9hZGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/admin-management/admin-list/admin-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/admin-list/admin-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
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
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");














function _window() {
    // return the global native browser window object
    return window;
}
var AdminListComponent = /** @class */ (function () {
    function AdminListComponent(subheaderService, localStorageService, _script, router, toastr, roleService, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.toastr = toastr;
        this.roleService = roleService;
        this.store = store;
        this.translate = translate;
        this.status = "";
        this.searchObj = {
            field: "user_userName",
            user_status: "",
            search: "",
        };
        this.roles = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.ADMIN_CONST = this.translate.instant("ADMIN");
        this.subheaderService.setTitle(this.translate.instant("MENU.ADMIN"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + this.translate.instant("MENU.ADMIN"));
    }
    AdminListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ADMIN.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ADMIN.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ADMIN.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].ADMIN.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    AdminListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    AdminListComponent.prototype.ngOnInit = function () {
        this.getRoleDetails();
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    AdminListComponent.prototype.getRoleDetails = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.roleService.getRolesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data['code'] == 200) {
                    result = data['data'];
                    console.log(result);
                    this.roles = result;
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
    AdminListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script.loadScripts("kt-admin-list", scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            var table = $("#kt_datatable").DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                //colReorder: true, // for column reorder
                order: [],
                serverSide: true,
                oLanguage: {
                    sProcessing: that.ADMIN_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listAdmin,
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
                            that.router.navigate(["login"]);
                        }
                        return JSON.stringify(json);
                    },
                },
                columns: [
                    {
                        title: that.ADMIN_CONST.LABEL.SR_NO,
                        data: null,
                    },
                    {
                        title: that.ADMIN_CONST.LABEL.USER_PROFILE_IMAGE, data: "user_profileImage",
                    },
                    { title: that.ADMIN_CONST.LABEL.FULLNAME, data: "user_userName" },
                    { title: that.ADMIN_CONST.LABEL.EMAIL, data: "user_email" },
                    {
                        title: that.ADMIN_CONST.LABEL.PHONE_NUMBER,
                        data: "user_phoneNumber",
                    },
                    { title: that.ADMIN_CONST.LABEL.ROLE, data: "role_name" },
                    { title: that.ADMIN_CONST.LABEL.STATUS, data: "user_status" },
                    { title: that.ADMIN_CONST.LABEL.CREATED_ON, data: "user_createdOn" },
                    { title: that.ADMIN_CONST.LABEL.MODIFIED_ON, data: "user_modifyOn" },
                    { title: that.ADMIN_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api()
                        .columns()
                        .every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.ADMIN_CONST.LABEL.SR_NO:
                                break;
                            case that.ADMIN_CONST.LABEL.USER_PROFILE_IMAGE:
                                break;
                            case that.ADMIN_CONST.LABEL.FULLNAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.ADMIN_CONST.LABEL.EMAIL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.ADMIN_CONST.LABEL.PHONE_NUMBER:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.ADMIN_CONST.LABEL.ROLE:
                                var option_1 = '<option value="">' + that.ADMIN_CONST.PLACEHOLDERS.ROLE + '</option>';
                                if (that.roles.length) {
                                    that.roles.map(function (x) {
                                        var tag = '<option value="' + x.role_name + '">' + x.role_name + '</option>';
                                        option_1 = option_1 + tag;
                                    });
                                }
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    '">' + option_1 + '</select>');
                                break;
                            case that.ADMIN_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                          <option value=\"\">" + that.ADMIN_CONST.PLACEHOLDERS.STATUS + "</option>\n                          <option value=\"ACTIVE\">Active</option>\n                          <option value=\"INACTIVE\">Inactive</option></select>\n                          "));
                                break;
                            // case that.ADMIN_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.ADMIN_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.ADMIN_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.ADMIN_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.ADMIN_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                        if (column !== that.ADMIN_CONST.LABEL.ACTIONS) {
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
                        width: "10%",
                        orderable: false,
                        render: function (a, e, t, n) {
                            return '<img src="' + a + '" height="80px" width="80px">';
                        },
                    },
                    {
                        targets: 2,
                        width: "20%",
                        render: function (a, e, t, n) {
                            if (t.firstName == '' && t.lastName == '') {
                                return '-';
                            }
                            else {
                                return t.firstName + ' ' + t.lastName;
                            }
                        },
                    },
                    {
                        targets: 3,
                        width: "10%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 4,
                        width: "10%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 5,
                        width: "30%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 6,
                        width: "50%",
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
                                status[row.user_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.user_status].title +
                                "</span>");
                        },
                    },
                    {
                        targets: 7,
                        width: "10%"
                    },
                    {
                        targets: 8,
                        width: "10%"
                    },
                ],
            });
        });
    };
    AdminListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/admin-management/edit/' + this.id]);
    };
    AdminListComponent.prototype.delete = function (e) {
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
                            component: 'adminUser',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'adminUser',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    AdminListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    AdminListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_13__["RolesService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
    ]; };
    AdminListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-admin-list",
            template: __webpack_require__(/*! raw-loader!./admin-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/admin-list/admin-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-list.component.scss */ "./src/app/views/pages/admin-management/admin-list/admin-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_13__["RolesService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], AdminListComponent);
    return AdminListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/admin-management/admin-management.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/admin-management.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-backdrop.show {\n  z-index: -1 !important; }\n\n.kt-page-loader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  padding-top: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYWRtaW4tbWFuYWdlbWVudC9hZG1pbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCLEVBQUE7O0FBSXpCO0VBQ0ksZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWRtaW4tbWFuYWdlbWVudC9hZG1pbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJhY2tkcm9wLnNob3d7XG4gICAgei1pbmRleDotMSAhaW1wb3J0YW50O1xufVxuXG5cbi5rdC1wYWdlLWxvYWRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/admin-management/admin-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/admin-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManagementComponent", function() { return AdminManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AdminManagementComponent = /** @class */ (function () {
    function AdminManagementComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_3__["subHeader"].ADMIN);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_3__["titles"].adminManagement);
    }
    AdminManagementComponent.prototype.ngOnInit = function () {
    };
    AdminManagementComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    AdminManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-admin-management',
            template: __webpack_require__(/*! raw-loader!./admin-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin-management/admin-management.component.html"),
            styles: [__webpack_require__(/*! ./admin-management.component.scss */ "./src/app/views/pages/admin-management/admin-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], AdminManagementComponent);
    return AdminManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/admin-management/admin-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/admin-management/admin-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdminManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManagementModule", function() { return AdminManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-management.component */ "./src/app/views/pages/admin-management/admin-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-list/admin-list.component */ "./src/app/views/pages/admin-management/admin-list/admin-list.component.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-edit-admin/add-edit-admin.component */ "./src/app/views/pages/admin-management/add-edit-admin/add-edit-admin.component.ts");
/* harmony import */ var _admin_management_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-management.service */ "./src/app/views/pages/admin-management/admin-management.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _state_admin_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/admin.effects */ "./src/app/views/pages/admin-management/state/admin.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_admin_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/admin reducer */ "./src/app/views/pages/admin-management/state/admin reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].MAIN_MENU.SITE_USER;
var routes = [
    {
        path: '',
        component: _admin_management_component__WEBPACK_IMPORTED_MODULE_3__["AdminManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: _admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_7__["AdminListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].ADMIN.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_9__["AddAdminComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].ADMIN.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_9__["EditAdminComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_16__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_17__["PERMISSIONS"].ADMIN.EDIT,
                    mainModulePermission: menuPermision
                }
            },
        ]
    }
];
var AdminManagementModule = /** @class */ (function () {
    function AdminManagementModule() {
    }
    AdminManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_management_component__WEBPACK_IMPORTED_MODULE_3__["AdminManagementComponent"], _admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_7__["AdminListComponent"], _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_9__["AddAdminComponent"], _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_9__["EditAdminComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__["ScriptLoaderService"], _admin_management_service__WEBPACK_IMPORTED_MODULE_10__["AdminManagementService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forFeature([_state_admin_effects__WEBPACK_IMPORTED_MODULE_12__["AdminEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forFeature("admins", _state_admin_reducer__WEBPACK_IMPORTED_MODULE_14__["adminReducer"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forChild()
            ]
        })
    ], AdminManagementModule);
    return AdminManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-admin-management-admin-management-module.js.map