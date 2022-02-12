(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/profile/edit-profile/edit-profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/profile/edit-profile/edit-profile.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">\n                {{'ADMIN.LABEL.UPDATE_PROFILE' | translate }}\n            </h3>\n\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"editProfileForm\" [formGroup]=\"editProfileForm\">\n            <div class=\"kt-portlet__body\">\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <h3 class=\"m-form__section\">\n                            {{'ADMIN.LABEL.PERSONAL_DETAILS' | translate }}\n                        </h3>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.PROFILE_PHOTO' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                            </div>\n                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\"\n                                *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\"\n                                data-original-title=\"Change avatar\">\n                                <i class=\"fa fa-pen\"></i>\n                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                    (change)=\"onSelectFile($event)\">\n                            </label>\n                            <span class=\"kt-avatar__cancel\"\n                                *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\"\n                                data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\"\n                                data-original-title=\"Remove Image\">\n                                <i class=\"fa fa-times\"></i>\n                            </span>\n                        </div>\n                        <span class=\"form-text text-muted\">\n                            {{'ADMIN.NOTES.IMAGE' | translate }}</span>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.FIRSTNAME' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'ADMIN.PLACEHOLDERS.FIRSTNAME' | translate}}\" type=\"text\"\n                            formControlName=\"user_firstName\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_firstName.errors }\">\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_firstName.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_firstName.errors?.required\">\n                                {{'ADMIN.VALIDATION.FIRSTNAME_REQUIRED'  | translate }}</p>\n                            <p *ngIf=\"editProfileForm.controls.user_firstName.errors?.minlength && !editProfileForm.controls.user_firstName.errors?.pattern\"\n                                class=\"lbl-err\"> {{'ADMIN.VALIDATION.MIN_CHARACTER'  | translate }}</p>\n                            <p *ngIf=\"editProfileForm.controls.user_firstName.errors?.maxlength && !editProfileForm.controls.user_firstName.errors?.pattern\"\n                                class=\"lbl-err\">{{'ADMIN.VALIDATION.MAX_CHARACTER'  | translate }}</p>\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_firstName.errors?.pattern\">\n                                {{'ADMIN.VALIDATION.FIRSTNAME_INVALID'  | translate }} </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.LASTNAME' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'ADMIN.PLACEHOLDERS.LASTNAME' | translate}}\" type=\"text\"\n                            formControlName=\"user_lastName\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_lastName.errors }\">\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_lastName.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_lastName.errors?.required\">\n                                {{'ADMIN.VALIDATION.LASTNAME_REQUIRED'  | translate }}</p>\n                            <p *ngIf=\"editProfileForm.controls.user_lastName.errors?.minlength && !editProfileForm.controls.user_lastName.errors?.pattern\"\n                                class=\"lbl-err\"> {{'ADMIN.VALIDATION.MIN_CHARACTER'  | translate }}</p>\n                            <p *ngIf=\"editProfileForm.controls.user_lastName.errors?.maxlength && !editProfileForm.controls.user_lastName.errors?.pattern\"\n                                class=\"lbl-err\">{{'ADMIN.VALIDATION.MAX_CHARACTER'  | translate }}</p>\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_lastName.errors?.pattern\">\n                                {{'ADMIN.VALIDATION.LASTNAME_INVALID'  | translate }} </p>\n                        </div>\n                    </div>\n                </div>\n\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.PHONE_NUMBER' | translate}}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\"\n                            placeholder=\"{{'ADMIN.PLACEHOLDERS.PHONE_NUMBER' | translate}}*\" type=\"text\"\n                            formControlName=\"user_phoneNumber\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_phoneNumber.errors }\">\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_phoneNumber.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_phoneNumber.errors?.required\">\n                                {{'ADMIN.VALIDATION.PHONE_NUMBER' | translate}}\n                            </p>\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_phoneNumber.errors?.pattern\">\n                                {{'ADMIN.VALIDATION.INVALID_PHONE_NUMBER' | translate}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.ROLE'  | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n\n\n                        <select class=\"form-control m-input\" id=\"country\" formControlName=\"user_roleId\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_roleId.errors }\"\n                            disabled>\n                            <option value=\"\">{{'ADMIN.PLACEHOLDERS.ROLE'  | translate }}</option>\n\n                            <option value=\"{{roleDetail._id}}\" *ngFor=\"let roleDetail of roles\">{{roleDetail.role_name}}\n                            </option>\n                        </select>\n\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_roleId.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_roleId.errors?.required\">\n                                {{'ADMIN.VALIDATION.ROLE_REQUIRED' | translate}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- -----------control -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.ADMIN_EMAIL'  | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"Enter Email\" readonly\n                            autocomplete=\"off\" formControlName=\"user_email\" type=\"text\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_email.errors }\">\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_email.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_email.errors?.required\">\n                                {{'ADMIN.VALIDATION.EMAIL_REQUIRED' | translate}}\n                            </p>\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_email.errors?.pattern\">\n                                {{'ADMIN.VALIDATION.EMAIL_INVALID' | translate}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <h3 class=\"m-form__section\">\n                            {{'ADMIN.LABEL.SECURITY_DETAILS' | translate }}\n                        </h3>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.PASSWORD' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\" type=\"password\"\n                            placeholder=\"Enter Password\" formControlName=\"user_password\"\n                            (keyup)=\"onkeyUp($event.target.value)\" autocomplete=\"off\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_password.errors }\">\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_password.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_password.errors?.required\">\n                                {{'ADMIN.VALIDATION.FIELD_REQUIRED' | translate}}\n                            </p>\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_password.errors?.pattern\">\n                                {{'ADMIN.VALIDATION.PASSWORD_INVALID' | translate}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-3\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'ADMIN.LABEL.CONFIRM_PASSWORD' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <input class=\"form-control m-input m-login__form-input--last\" type=\"password\"\n                            placeholder=\"Enter Confirm Password\" formControlName=\"user_confirm_password\"\n                            (keyup)=\"onkeyUp($event.target.value)\" autocomplete=\"off\"\n                            [ngClass]=\"{ 'is-invalid': submitted && editProfileForm.controls.user_confirm_password.errors }\">\n                        <div *ngIf=\"submitted && editProfileForm.controls.user_confirm_password.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_confirm_password.errors?.required\">\n                                {{'ADMIN.VALIDATION.FIELD_REQUIRED' | translate}}\n                            </p>\n                            <p *ngIf=\"submitted && editProfileForm.controls.user_confirm_password.errors?.pattern\">\n                                {{'ADMIN.VALIDATION.PASSWORD_INVALID' | translate}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"form-group  row\" *ngIf=\"!isAdd\">\n                    <div class=\"col-xl-3\">\n                        <button type=\"button\" routerLink=\"/dashboard\"\n                            class=\"btn btn-secondary btn-elevate btn-icon-sm\">{{'BUTTONS.CANCEL' | translate }}</button>\n                    </div>\n                    <div class=\"col-xl-9\">\n                        <button type=\"submit\" (click)=\"onSubmit()\"\n                            class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                        </button>\n                    </div>\n                </div>\n\n            </div>\n\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/profile/profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/profile/edit-profile/edit-profile.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/profile/edit-profile/edit-profile.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUVBQXFFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9wcm9maWxlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/profile/edit-profile/edit-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/profile/edit-profile/edit-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
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
/* harmony import */ var _admin_management_state_admin_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../admin-management/state/admin.actions */ "./src/app/views/pages/admin-management/state/admin.actions.ts");
/* harmony import */ var _admin_management_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../admin-management/state/admin reducer */ "./src/app/views/pages/admin-management/state/admin reducer.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");















var EditProfileComponent = /** @class */ (function () {
    // forIdProofHide: boolean;
    function EditProfileComponent(subheaderService, _formBuilder, router, localStorageService, toastr, _route, roleService, dtr, store, titleService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this._route = _route;
        this.roleService = roleService;
        this.dtr = dtr;
        this.store = store;
        this.isAdd = false;
        this.submitted = false;
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.roles = [];
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["subHeader"].PROFILE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["titles"].profileManage);
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.buildEditProfileForm();
        this.getRoleDetails();
        var user = this.localStorageService.getCurruntUser();
        if (user && user != null) {
            this.id = user && user._id ? user._id : '';
            this.getProfileDetail();
        }
    };
    EditProfileComponent.prototype.getRoleDetails = function () {
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
    EditProfileComponent.prototype.buildEditProfileForm = function () {
        this.editProfileForm = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]], user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].phoneRegEx)]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            user_confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            user_roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EditProfileComponent.prototype.onkeyUp = function (e) {
        var form = this.editProfileForm;
        if (e && e != '') {
            form.get('user_password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].passwordRegEx)]);
            form.get('user_password').updateValueAndValidity();
            form.get('user_confirm_password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].passwordRegEx)]);
            form.get('user_confirm_password').updateValueAndValidity();
        }
        else {
            form.get('user_password').clearValidators();
            form.get('user_password').updateValueAndValidity();
            form.get('user_confirm_password').clearValidators();
            form.get('user_confirm_password').updateValueAndValidity();
        }
    };
    EditProfileComponent.prototype.getProfileDetail = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _admin_management_state_admin_actions__WEBPACK_IMPORTED_MODULE_11__["LoadAdmin"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_admin_management_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 4];
                        if (!(data['code'] == 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        fd = {
                            user_firstName: result.user_firstName,
                            user_lastName: result.user_lastName,
                            user_roleId: result.user_roleId != null && result.user_roleId != undefined ? result.user_roleId : "",
                            user_email: result.user_email,
                            user_phoneNumber: result.user_phoneNumber
                        };
                        // // for hidindg image when Role is Rider
                        // if (result.user_roleId != 8) {
                        //   this.forIdProofHide = true;
                        // }
                        return [4 /*yield*/, this.editProfileForm.patchValue(fd)];
                    case 2:
                        // // for hidindg image when Role is Rider
                        // if (result.user_roleId != 8) {
                        //   this.forIdProofHide = true;
                        // }
                        _a.sent();
                        if (result.user_profileImage && result.user_profileImage != null) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.url = result.user_profileImage;
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        if (result.user_userIdProofImage && result.user_userIdProofImage != null) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.url1 = result.user_userIdProofImage;
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        }
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 4];
                    case 3:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    // user profile image
    EditProfileComponent.prototype.onSelectFile = function (event) {
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
                this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
            }
        }
    };
    EditProfileComponent.prototype.imageRemove = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
    };
    // user id proof image
    EditProfileComponent.prototype.onSelectIdProofFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.imageFile1 = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.url1 = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
            }
        }
    };
    EditProfileComponent.prototype.imageIdProofRemove = function () {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
    };
    EditProfileComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.editProfileForm.valid) {
            var res = this.editProfileForm.value;
            if (res.user_password && res.user_password != '' && res.user_confirm_password && res.user_confirm_password != '') {
                if ((res.user_password === res.user_confirm_password)) {
                    this.uploadData();
                }
                else {
                    this.toastr.error('Password & Confirm Password Should be Match');
                }
            }
            else {
                this.uploadData();
            }
        }
    };
    EditProfileComponent.prototype.uploadData = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        if (this.url.length > 300) {
            var obj = {
                updType: 'image',
                updDocs: this.imageFile
            };
            this.stateSubscription = this.store.dispatch(new _admin_management_state_admin_actions__WEBPACK_IMPORTED_MODULE_11__["UploadData"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_admin_management_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            this.url = data['data'].url;
                            this.stateSubscription.unsubscribe();
                            this.saveData();
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else {
            this.saveData();
        }
    };
    EditProfileComponent.prototype.saveData = function () {
        var _this = this;
        var res = this.editProfileForm.value;
        var obj = {
            id: this.id,
            data: {
                user_firstName: res.user_firstName,
                user_lastName: res.user_lastName,
                user_roleId: res.user_roleId,
                user_email: res.user_email,
                user_phoneNumber: res.user_phoneNumber,
                user_password: res.user_password && res.user_password != '' ? res.user_password : ''
            }
        };
        if (this.url != '../../../../../assets/media/newMedia/add.png') {
            obj.data['user_profileImage'] = this.url;
        }
        if (this.url1 != '../../../../../assets/media/newMedia/add.png') {
            obj.data['user_userIdProofImage'] = this.url1;
        }
        this.stateSubscription = this.store.dispatch(new _admin_management_state_admin_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateAdmin"](obj));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_admin_management_state_admin_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, obj_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        result = data['data'];
                        obj_1 = {
                            _id: result._id,
                            user_profileImage: result.user_profileImage && result.user_profileImage != null ? result.user_profileImage : '',
                            user_firstName: result.user_firstName,
                            user_lastName: result.user_lastName,
                            user_isdCode: result.user_isdCode,
                            user_phoneNumber: result.user_phoneNumber,
                            user_roleId: result.user_roleId,
                            user_email: result.user_email,
                            user_status: result.user_status,
                            user_countryId: result.user_countryId,
                        };
                        this.localStorageService.setCurruntUser(obj_1);
                        if (this.stateSubscription && this.stateSubscription != undefined) {
                            this.stateSubscription.unsubscribe();
                        }
                        this.router.navigate(['/dashboard']);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__["RolesService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
    ]; };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/views/pages/profile/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_14__["RolesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/pages/profile/profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].PROFILE);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].profileManage);
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/views/pages/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/profile/profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/profile/profile.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/pages/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/views/pages/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _admin_management_state_admin_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-management/state/admin.effects */ "./src/app/views/pages/admin-management/state/admin.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _admin_management_state_admin_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin-management/state/admin reducer */ "./src/app/views/pages/admin-management/state/admin reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _app_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../app/core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");















var routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        children: [
            {
                path: '',
                component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"],
                canActivate: [_app_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_14__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].ADMIN.READ,
                }
            },
        ]
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_admin_management_state_admin_effects__WEBPACK_IMPORTED_MODULE_9__["AdminEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("admins", _admin_management_state_admin_reducer__WEBPACK_IMPORTED_MODULE_11__["adminReducer"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild()
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-profile-profile-module.js.map