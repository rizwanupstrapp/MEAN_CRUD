(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-business-owner-business-owner-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'BUSINESS_OWNER.LIST' | translate }}</h3>\n        </div>\n        <!-- <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/business-owner/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div> -->\n    </div>\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n                <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/business-owner/business-owner.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/business-owner/business-owner.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'BUSINESS_OWNER.EDIT' | translate }} </h3>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <div class=\"example-preview\">\n            <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'personal' }\" id=\"persnol_detail-tab-1\"\n                        data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('personal')\">\n                        <span class=\"nav-icon\"><i class=\"flaticon2-chat-1\"></i></span>\n                        <span class=\"nav-text\">{{'BUSINESS_OWNER.TAB.PERSONAL' | translate }}</span>\n                    </a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'otherDocument' }\"\n                        id=\"driver_other_document-tab-1\" data-toggle=\"tab\" href=\"javascript:;\"\n                        (click)=\"clickLink('otherDocument')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\"><i class=\"flaticon2-layers-1\"></i></span>\n                        <span class=\"nav-text\">{{'BUSINESS_OWNER.TAB.BUSINESS_OWNER_OTHER_DOCUMENT' | translate }}</span>\n                    </a>\n                </li> -->\n            </ul>\n            <div class=\"tab-content mt-5\" id=\"myTabContent1\">\n                <!--START PERSONAL DATA-->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'personal' }\" id=\"persnol_detail\"\n                    *ngIf=\" navObj.link === 'personal'\" role=\"tabpanel\" aria-labelledby=\"persnol_detail-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"personalInfoForm\" [formGroup]=\"personalInfoForm\">\n                        <div class=\"form-group  row\">\n                            <!------ country -->\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.COUNTRY' | translate }}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_countryId\"\n                                        formControlName=\"user_countryId\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_countryId.errors }\">\n                                        <option value=\"\">{{'BUSINESS_OWNER.PLACEHOLDERS.SELECT_COUNTRY' | translate}}\n                                        </option>\n                                        <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                            {{country.country_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_countryId.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_countryId.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"personalInfoForm.controls.user_countryId.errors?.minlength && !personalInfoForm.controls.user_countryId.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"personalInfoForm.controls.user_countryId.errors?.maxlength && !personalInfoForm.controls.user_countryId.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_countryId.errors?.pattern\">\n                                            {{'BUSINESS_OWNER.VALIDATION.COUNTRY_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.USER_PROFILE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Image\"\n                                            *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                                (change)=\"onSelectUserImage($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\"\n                                            *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\"\n                                            style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\"\n                                            (click)=\"removeUserImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- ---first & last Name -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.FIRST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'BUSINESS_OWNER.PLACEHOLDERS.FIRST_NAME' | translate}}\"\n                                        type=\"text\" formControlName=\"user_firstName\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_firstName.errors }\">\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_firstName.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_firstName.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"personalInfoForm.controls.user_firstName.errors?.minlength && !personalInfoForm.controls.user_firstName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"personalInfoForm.controls.user_firstName.errors?.maxlength && !personalInfoForm.controls.user_firstName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_firstName.errors?.pattern\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIRSTNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.LAST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'BUSINESS_OWNER.PLACEHOLDERS.LAST_NAME' | translate}}\"\n                                        type=\"text\" formControlName=\"user_lastName\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_lastName.errors }\">\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_lastName.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_lastName.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"personalInfoForm.controls.user_lastName.errors?.minlength && !personalInfoForm.controls.user_lastName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"personalInfoForm.controls.user_lastName.errors?.maxlength && !personalInfoForm.controls.user_lastName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_lastName.errors?.pattern\">\n                                            {{'BUSINESS_OWNER.VALIDATION.LASTNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- email -- phone & isd-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'BUSINESS_OWNER.PLACEHOLDERS.USER_EMAIL' | translate}}\"\n                                        type=\"text\" formControlName=\"user_email\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_email.errors }\">\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_email.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_email.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_email.errors?.pattern\">\n                                            {{'BUSINESS_OWNER.VALIDATION.EMAIL_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.MOBILE_NO' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"d-flex mbl-sct\">\n                                        <input class=\"form-control m-input m-login__form-input--last\"\n                                            placeholder=\"{{'BUSINESS_OWNER.PLACEHOLDERS.USER_MOBILE' | translate}}\"\n                                            type=\"text\" formControlName=\"user_phoneNumber\"\n                                            [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_phoneNumber.errors }\">\n                                    </div>\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_phoneNumber.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_phoneNumber.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_phoneNumber.errors?.pattern\">\n                                            {{'BUSINESS_OWNER.VALIDATION.MOBILENO_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!---- invitation code & premium ------->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.INVITATION_CODE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'BUSINESS_OWNER.PLACEHOLDERS.INVITATION_CODE' | translate}}\"\n                                        type=\"text\" formControlName=\"user_invitationCode\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_invitationCode.errors }\">\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_invitationCode.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_invitationCode.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.PREMIUM_USER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_premiumUser\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_premiumUser.errors }\">\n                                        <option value=\"0\">{{'BUSINESS_OWNER.LABEL.YES' | translate}}</option>\n                                        <option value=\"1\">{{'BUSINESS_OWNER.LABEL.NO' | translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_premiumUser.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_premiumUser.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- verified -- Status -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.VERIFIED_STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_verifiedStatus\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_verifiedStatus.errors }\">\n                                        <option value=0>{{'BUSINESS_OWNER.LABEL.PENDING' | translate}}</option>\n                                        <option value=1>{{'BUSINESS_OWNER.LABEL.VARIFIED' | translate}}</option>\n                                        <option value=2>{{'BUSINESS_OWNER.LABEL.UNVARIFIED' | translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_verifiedStatus.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_verifiedStatus.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'BUSINESS_OWNER.LABEL.STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_status\"\n                                        [ngClass]=\"{ 'is-invalid': personalInfoSubmitted && personalInfoForm.controls.user_status.errors }\">\n                                        <option value=\"ACTIVE\">{{'BUSINESS_OWNER.LABEL.ACTIVE' | translate}}</option>\n                                        <option value=\"INACTIVE\">{{'BUSINESS_OWNER.LABEL.INACTIVE' | translate}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_status.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"personalInfoSubmitted && personalInfoForm.controls.user_status.errors?.required\">\n                                            {{'BUSINESS_OWNER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/business-owner-management/list\"\n                                        class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"savePersonalDetail()\"\n                                        class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!--END PERSONAL DATA-->\n            </div>\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrlbl_table {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYnVzaW5lc3Mtb3duZXIvYnVzaW5lc3Mtb3duZXItbGlzdC9idXNpbmVzcy1vd25lci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9idXNpbmVzcy1vd25lci9idXNpbmVzcy1vd25lci1saXN0L2J1c2luZXNzLW93bmVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NybGJsX3RhYmxlIHtvdmVyZmxvdy14OiBhdXRvO30iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BusinessOwnerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessOwnerListComponent", function() { return BusinessOwnerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../api-constants */ "./src/api-constants.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");











function _window() {
    // return the global native browser window object
    return window;
}
var BusinessOwnerListComponent = /** @class */ (function () {
    function BusinessOwnerListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_2__["APPNAME"];
        this.BUSINESS_CONST = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.BUSINESS_CONST = this.translate.instant('BUSINESS_OWNER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BUSINESS_OWNER'));
        titleService.setTitle(this.APPNAME + " | " + this.BUSINESS_CONST.MODULE_NAME);
    }
    BusinessOwnerListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    BusinessOwnerListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].BUSINESS_OWNER.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].BUSINESS_OWNER.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].BUSINESS_OWNER.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS"].BUSINESS_OWNER.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    BusinessOwnerListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    BusinessOwnerListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-business-owner-list', scripts).then(function () {
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
                    sProcessing: that.BUSINESS_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_9__["ApiURIs"].userList + '/BUSINESS_OWNER',
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
                        title: that.BUSINESS_CONST.LABEL.SR_NO, data: null
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.USER_PROFILE_IMAGE, data: "user_profileImage",
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.BUSINESS_OWNER_NAME, data: "user_displayName"
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.BUSINESS_NAME, data: "user_businessName"
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.EMAIL, data: "user_email"
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.MOBILE_NO, data: "user_phoneNumber"
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.COUNTRY, data: "businessOwner_countryName"
                    },
                    {
                        title: that.BUSINESS_CONST.LABEL.CITY, data: "businessOwner_cityName"
                    },
                    { title: that.BUSINESS_CONST.LABEL.STATUS, data: "user_status" },
                    { title: that.BUSINESS_CONST.LABEL.CREATED_ON, data: 'user_createdOn' },
                    { title: that.BUSINESS_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.BUSINESS_CONST.LABEL.SR_NO:
                                break;
                            case that.BUSINESS_CONST.LABEL.USER_PROFILE_IMAGE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BUSINESS_CONST.LABEL.BUSINESS_OWNER_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BUSINESS_CONST.LABEL.BUSINESS_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BUSINESS_CONST.LABEL.EMAIL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BUSINESS_CONST.LABEL.MOBILE_NO:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.BUSINESS_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.BUSINESS_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.BUSINESS_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.BUSINESS_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            case that.BUSINESS_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.BUSINESS_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.BUSINESS_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                        width: "10%",
                        orderable: false,
                        render: function (a, e, t, n) {
                            return '<img src="' + a + '" height="80px" width="80px">';
                        },
                    },
                    {
                        targets: 2,
                        width: "10%",
                        render: function (a, e, t, n) {
                            if (t.user_firstName == '' && t.user_lastName == '') {
                                return '-';
                            }
                            else {
                                return t.user_firstName + ' ' + t.user_lastName;
                            }
                        },
                    },
                    {
                        targets: 3,
                        width: "10%",
                        render: function (a, e, t, n) {
                            return '-';
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
                        width: "10%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 6,
                        width: "10%",
                        render: function (a, e, t, n) {
                            if (a != null) {
                                var c = a.filter(function (obj) {
                                    return (obj.lang == 'EN');
                                });
                                return c[0].title;
                            }
                            else {
                                return "-";
                            }
                        },
                    },
                    {
                        targets: 7,
                        width: "10%",
                        render: function (a, e, t, n) {
                            if (a != null) {
                                var c = a.filter(function (obj) {
                                    return (obj.lang == 'EN');
                                });
                                return c[0].title;
                            }
                            else {
                                return "-";
                            }
                        },
                    },
                    {
                        targets: 8,
                        width: '10%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.user_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.user_status].title + '</span>';
                        }
                    },
                    {
                        targets: 9,
                        width: '10%',
                        render: function (a, e, t, n) {
                            var date1 = new Date(a);
                            var newDate1 = date1.getDate() + '/' + (date1.getMonth() + 1) + '/' + date1.getFullYear();
                            return newDate1;
                        }
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
    BusinessOwnerListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/business-owner-management/edit/' + this.id]);
    };
    BusinessOwnerListComponent.prototype.delete = function (e) {
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
                            component: 'businessOwner',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    BusinessOwnerListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'businessOwner',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    BusinessOwnerListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    BusinessOwnerListComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    BusinessOwnerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-business-owner-list',
            template: __webpack_require__(/*! raw-loader!./business-owner-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.html"),
            styles: [__webpack_require__(/*! ./business-owner-list.component.scss */ "./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], BusinessOwnerListComponent);
    return BusinessOwnerListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/business-owner/business-owner.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/business-owner.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2J1c2luZXNzLW93bmVyL2J1c2luZXNzLW93bmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/business-owner/business-owner.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/business-owner.component.ts ***!
  \************************************************************************/
/*! exports provided: BusinessOwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessOwnerComponent", function() { return BusinessOwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var BusinessOwnerComponent = /** @class */ (function () {
    function BusinessOwnerComponent(subheaderService, titleService, translate) {
        this.subheaderService = subheaderService;
        this.translate = translate;
        this.BUSINESS_OWNER_CONST = {};
        this.BUSINESS_OWNER_CONST = this.translate.instant('BUSINESS_OWNER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BUSINESS_OWNER'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["APPNAME"] + " | " + this.translate.instant('MENU.BUSINESS_OWNER'));
    }
    BusinessOwnerComponent.prototype.ngOnInit = function () {
    };
    BusinessOwnerComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    BusinessOwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-business-owner',
            template: __webpack_require__(/*! raw-loader!./business-owner.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/business-owner/business-owner.component.html"),
            styles: [__webpack_require__(/*! ./business-owner.component.scss */ "./src/app/views/pages/business-owner/business-owner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], BusinessOwnerComponent);
    return BusinessOwnerComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/business-owner/business-owner.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/business-owner/business-owner.module.ts ***!
  \*********************************************************************/
/*! exports provided: BusinessOwnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessOwnerModule", function() { return BusinessOwnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_business_owner_edit_business_owner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-business-owner/edit-business-owner.component */ "./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.ts");
/* harmony import */ var _business_owner_list_business_owner_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business-owner-list/business-owner-list.component */ "./src/app/views/pages/business-owner/business-owner-list/business-owner-list.component.ts");
/* harmony import */ var _business_owner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-owner.component */ "./src/app/views/pages/business-owner/business-owner.component.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_business_owner_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/business-owner.effects */ "./src/app/views/pages/business-owner/state/business-owner.effects.ts");
/* harmony import */ var _state_business_owner_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/business-owner.reducer */ "./src/app/views/pages/business-owner/state/business-owner.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].MAIN_MENU.SITE_USER;
var routes = [
    {
        path: '',
        component: _business_owner_component__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _business_owner_list_business_owner_list_component__WEBPACK_IMPORTED_MODULE_4__["BusinessOwnerListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].BUSINESS_OWNER.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _edit_business_owner_edit_business_owner_component__WEBPACK_IMPORTED_MODULE_3__["EditBusinessOwnerComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_6__["PERMISSIONS"].CITY.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var BusinessOwnerModule = /** @class */ (function () {
    function BusinessOwnerModule() {
    }
    BusinessOwnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_business_owner_list_business_owner_list_component__WEBPACK_IMPORTED_MODULE_4__["BusinessOwnerListComponent"], _business_owner_component__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerComponent"], _edit_business_owner_edit_business_owner_component__WEBPACK_IMPORTED_MODULE_3__["EditBusinessOwnerComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_11__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forFeature([_state_business_owner_effects__WEBPACK_IMPORTED_MODULE_14__["BusinessOwnerEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature("businessOwner", _state_business_owner_reducer__WEBPACK_IMPORTED_MODULE_15__["businessOwnerReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
            ]
        })
    ], BusinessOwnerModule);
    return BusinessOwnerModule;
}());



/***/ }),

/***/ "./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYnVzaW5lc3Mtb3duZXIvZWRpdC1idXNpbmVzcy1vd25lci9lZGl0LWJ1c2luZXNzLW93bmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUVBQXFFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9idXNpbmVzcy1vd25lci9lZGl0LWJ1c2luZXNzLW93bmVyL2VkaXQtYnVzaW5lc3Mtb3duZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditBusinessOwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusinessOwnerComponent", function() { return EditBusinessOwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _state_business_owner_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/business-owner.actions */ "./src/app/views/pages/business-owner/state/business-owner.actions.ts");
/* harmony import */ var _state_business_owner_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/business-owner.reducer */ "./src/app/views/pages/business-owner/state/business-owner.reducer.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");















var EditBusinessOwnerComponent = /** @class */ (function () {
    function EditBusinessOwnerComponent(subheaderService, _formBuilder, translate, store, _route, dtr, toastr, countryService, titleService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.translate = translate;
        this.store = store;
        this._route = _route;
        this.dtr = dtr;
        this.toastr = toastr;
        this.countryService = countryService;
        this.navObj = { 'link': 'personal' };
        this.navObjOtherDocument = { 'link': 'otherDocument' };
        this.personalInfoSubmitted = false;
        this.submitStep = { step: '0' };
        this.data = {};
        this.countries = {};
        this.BUSINESS_OWNER_CONST = {};
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.BUSINESS_OWNER_CONST = this.translate.instant('BUSINESS_OWNER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.BUSINESS_OWNER'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_5__["APPNAME"] + " | " + this.BUSINESS_OWNER_CONST.MODULE_NAME);
    }
    EditBusinessOwnerComponent.prototype.clickLink = function (e) {
        this.navObj.link = e;
    };
    EditBusinessOwnerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildPersonalInfoForm()];
                    case 1:
                        _a.sent();
                        this.getUserDetail();
                        this.getAllCountries();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditBusinessOwnerComponent.prototype.buildPersonalInfoForm = function () {
        this.personalInfoForm = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            user_verifiedStatus: [0, []],
            user_countryId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            user_status: ["ACTIVE", []],
            user_invitationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            user_premiumUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    // user Image
    EditBusinessOwnerComponent.prototype.onSelectUserImage = function (event) {
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
                this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
            }
        }
    };
    EditBusinessOwnerComponent.prototype.removeUserImage = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    EditBusinessOwnerComponent.prototype.getAllCountries = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.countryService.getAllCountries().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.countries = data['data'];
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
    EditBusinessOwnerComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_business_owner_actions__WEBPACK_IMPORTED_MODULE_11__["LoadBusinessOwner"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_state_business_owner_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        fd = {
                            'user_firstName': result.user_firstName,
                            'user_lastName': result.user_lastName,
                            'user_email': result.user_email,
                            'user_countryId': result.user_countryId != null && result.user_countryId != undefined ? result.user_countryId : "",
                            'user_phoneNumber': result.user_phoneNumber,
                            'user_roleId': result.user_roleId,
                            'user_verifiedStatus': result.user_verifiedStatus != null && result.user_verifiedStatus != undefined ? result.user_verifiedStatus : "",
                            'user_status': result.user_status != null && result.user_status != undefined ? result.user_status : "",
                            'user_invitationCode': result.user_invitationCode,
                            'user_premiumUser': result.user_premiumUser,
                        };
                        if (result.user_profileImage) {
                            this.url = result.user_profileImage;
                        }
                        this.personalInfoForm.patchValue(fd);
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        this.toastr.error(data['message']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditBusinessOwnerComponent.prototype.savePersonalDetail = function () {
        this.personalInfoSubmitted = true;
        if (this.personalInfoForm.valid) {
            this.saveData('1');
        }
    };
    EditBusinessOwnerComponent.prototype.saveData = function (step) {
        var _this = this;
        if (step === '1') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
            var res = this.personalInfoForm.value;
            var fd = new FormData();
            fd.append('user_firstName', res.user_firstName);
            fd.append('user_lastName', res.user_lastName);
            fd.append('user_email', res.user_email);
            fd.append('user_phoneNumber', res.user_phoneNumber);
            fd.append('user_verifiedStatus', res.user_verifiedStatus);
            fd.append('user_status', res.user_status);
            fd.append('user_invitationCode', res.user_invitationCode);
            fd.append('user_premiumUser', res.user_premiumUser);
            fd.append('user_countryId', res.user_countryId);
            if (this.imageFile) {
                fd.append('user_profileImage', this.imageFile);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_business_owner_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateBusinessOwner"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_state_business_owner_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'personal';
                            this.toastr.success(this.BUSINESS_OWNER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            this.personalInfoSubmitted = false;
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
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
        }
    };
    EditBusinessOwnerComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_7__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    EditBusinessOwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-business-owner',
            template: __webpack_require__(/*! raw-loader!./edit-business-owner.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.html"),
            styles: [__webpack_require__(/*! ./edit-business-owner.component.scss */ "./src/app/views/pages/business-owner/edit-business-owner/edit-business-owner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_7__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], EditBusinessOwnerComponent);
    return EditBusinessOwnerComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/business-owner/state/business-owner.actions.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/state/business-owner.actions.ts ***!
  \****************************************************************************/
/*! exports provided: BusinessOwnerActionTypes, LoadBusinessOwner, LoadBusinessOwnerSuccess, LoadBusinessOwnerFail, UpdateBusinessOwner, UpdateBusinessOwnerSuccess, UpdateBusinessOwnerFail, DeleteBusinessOwner, DeleteBusinessOwnerSuccess, DeleteBusinessOwnerFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, UploadData, UploadDataSuccess, UploadDataFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessOwnerActionTypes", function() { return BusinessOwnerActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBusinessOwner", function() { return LoadBusinessOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBusinessOwnerSuccess", function() { return LoadBusinessOwnerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBusinessOwnerFail", function() { return LoadBusinessOwnerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBusinessOwner", function() { return UpdateBusinessOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBusinessOwnerSuccess", function() { return UpdateBusinessOwnerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBusinessOwnerFail", function() { return UpdateBusinessOwnerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBusinessOwner", function() { return DeleteBusinessOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBusinessOwnerSuccess", function() { return DeleteBusinessOwnerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBusinessOwnerFail", function() { return DeleteBusinessOwnerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadData", function() { return UploadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataSuccess", function() { return UploadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataFail", function() { return UploadDataFail; });
var BusinessOwnerActionTypes;
(function (BusinessOwnerActionTypes) {
    BusinessOwnerActionTypes["UPDATE_STATUS"] = "[BUSINESS_OWNER] Update Status";
    BusinessOwnerActionTypes["UPDATE_STATUS_SUCCESS"] = "[BUSINESS_OWNER]  Update Status Success";
    BusinessOwnerActionTypes["UPDATE_STATUS_FAIL"] = "[BUSINESS_OWNER]  Update Status Fail";
    BusinessOwnerActionTypes["LOAD_BUSINESS_OWNER"] = "[BUSINESS_OWNER] Load Business Owner";
    BusinessOwnerActionTypes["LOAD_BUSINESS_OWNER_SUCCESS"] = "[BUSINESS_OWNER] Load Business Owner Success";
    BusinessOwnerActionTypes["LOAD_BUSINESS_OWNER_FAIL"] = "[BUSINESS_OWNER] Load Business Owner Fail";
    BusinessOwnerActionTypes["UPDATE_BUSINESS_OWNER"] = "[BUSINESS_OWNER] Update Business_Owner";
    BusinessOwnerActionTypes["UPDATE_BUSINESS_OWNER_SUCCESS"] = "[BUSINESS_OWNER] Update Business_Owner Success";
    BusinessOwnerActionTypes["UPDATE_BUSINESS_OWNER_FAIL"] = "[BUSINESS_OWNER] Update Business_Owner Fail";
    BusinessOwnerActionTypes["DELETE_BUSINESS_OWNER"] = "[BUSINESS_OWNER] Delete Business Owner";
    BusinessOwnerActionTypes["DELETE_BUSINESS_OWNER_SUCCESS"] = "[BUSINESS_OWNER] Delete Business Owner Success";
    BusinessOwnerActionTypes["DELETE_BUSINESS_OWNER_FAIL"] = "[BUSINESS_OWNER] Delete Business Owner Fail";
    BusinessOwnerActionTypes["UPLOAD_DATA"] = "[BUSINESS_OWNER] Upload Data";
    BusinessOwnerActionTypes["UPLOAD_DATA_SUCCESS"] = "[BUSINESS_OWNER] Upload Data Success";
    BusinessOwnerActionTypes["UPLOAD_DATA_FAIL"] = "[BUSINESS_OWNER] Upload Data Fail";
})(BusinessOwnerActionTypes || (BusinessOwnerActionTypes = {}));
var LoadBusinessOwner = /** @class */ (function () {
    function LoadBusinessOwner(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER;
    }
    LoadBusinessOwner.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBusinessOwner;
}());

var LoadBusinessOwnerSuccess = /** @class */ (function () {
    function LoadBusinessOwnerSuccess(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER_SUCCESS;
    }
    LoadBusinessOwnerSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBusinessOwnerSuccess;
}());

var LoadBusinessOwnerFail = /** @class */ (function () {
    function LoadBusinessOwnerFail(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.LOAD_BUSINESS_OWNER_FAIL;
    }
    LoadBusinessOwnerFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadBusinessOwnerFail;
}());

var UpdateBusinessOwner = /** @class */ (function () {
    function UpdateBusinessOwner(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER;
    }
    UpdateBusinessOwner.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBusinessOwner;
}());

var UpdateBusinessOwnerSuccess = /** @class */ (function () {
    function UpdateBusinessOwnerSuccess(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER_SUCCESS;
    }
    UpdateBusinessOwnerSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBusinessOwnerSuccess;
}());

var UpdateBusinessOwnerFail = /** @class */ (function () {
    function UpdateBusinessOwnerFail(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPDATE_BUSINESS_OWNER_FAIL;
    }
    UpdateBusinessOwnerFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBusinessOwnerFail;
}());

var DeleteBusinessOwner = /** @class */ (function () {
    function DeleteBusinessOwner(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER;
    }
    DeleteBusinessOwner.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBusinessOwner;
}());

var DeleteBusinessOwnerSuccess = /** @class */ (function () {
    function DeleteBusinessOwnerSuccess(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER_SUCCESS;
    }
    DeleteBusinessOwnerSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBusinessOwnerSuccess;
}());

var DeleteBusinessOwnerFail = /** @class */ (function () {
    function DeleteBusinessOwnerFail(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.DELETE_BUSINESS_OWNER_FAIL;
    }
    DeleteBusinessOwnerFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteBusinessOwnerFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var UploadData = /** @class */ (function () {
    function UploadData(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPLOAD_DATA;
    }
    UploadData.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadData;
}());

var UploadDataSuccess = /** @class */ (function () {
    function UploadDataSuccess(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPLOAD_DATA_SUCCESS;
    }
    UploadDataSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataSuccess;
}());

var UploadDataFail = /** @class */ (function () {
    function UploadDataFail(payload) {
        this.payload = payload;
        this.type = BusinessOwnerActionTypes.UPLOAD_DATA_FAIL;
    }
    UploadDataFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataFail;
}());



/***/ }),

/***/ "./src/app/views/pages/business-owner/state/business-owner.effects.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/state/business-owner.effects.ts ***!
  \****************************************************************************/
/*! exports provided: BusinessOwnerEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessOwnerEffect", function() { return BusinessOwnerEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-owner.actions */ "./src/app/views/pages/business-owner/state/business-owner.actions.ts");
/* harmony import */ var _business_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../business-owner.service */ "./src/app/views/pages/business-owner/business-owner.service.ts");







var BusinessOwnerEffect = /** @class */ (function () {
    function BusinessOwnerEffect(actions$, businessOwnerService) {
        var _this = this;
        this.actions$ = actions$;
        this.businessOwnerService = businessOwnerService;
        this.deleteBusinessOwner$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerActionTypes"].DELETE_BUSINESS_OWNER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.businessOwnerService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBusinessOwnerSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBusinessOwnerFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.businessOwnerService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadBusinessOwner$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerActionTypes"].LOAD_BUSINESS_OWNER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.businessOwnerService.getBusinessOwnerById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBusinessOwnerSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["LoadBusinessOwnerFail"](err));
            }));
        }));
        this.updateBusinessOwner$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerActionTypes"].UPDATE_BUSINESS_OWNER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.businessOwnerService.updateBusinessOwner(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBusinessOwnerSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBusinessOwnerFail"](err)); }));
        }));
        this.uploadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["BusinessOwnerActionTypes"].UPLOAD_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.businessOwnerService.uploadData(data.updType, data.updDocs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateAdmin) {
                return new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataSuccess"](updateAdmin);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _business_owner_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataFail"](err)); }));
        }));
    }
    BusinessOwnerEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _business_owner_service__WEBPACK_IMPORTED_MODULE_6__["BusinessOwnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BusinessOwnerEffect.prototype, "deleteBusinessOwner$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BusinessOwnerEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BusinessOwnerEffect.prototype, "loadBusinessOwner$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BusinessOwnerEffect.prototype, "updateBusinessOwner$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BusinessOwnerEffect.prototype, "uploadData$", void 0);
    BusinessOwnerEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _business_owner_service__WEBPACK_IMPORTED_MODULE_6__["BusinessOwnerService"]])
    ], BusinessOwnerEffect);
    return BusinessOwnerEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/business-owner/state/business-owner.reducer.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/business-owner/state/business-owner.reducer.ts ***!
  \****************************************************************************/
/*! exports provided: initialState, businessOwnerReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessOwnerReducer", function() { return businessOwnerReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-owner.actions */ "./src/app/views/pages/business-owner/state/business-owner.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function businessOwnerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for businessOwner load-----------------------------
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].LOAD_BUSINESS_OWNER_SUCCESS: {
            return action.payload;
        }
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].LOAD_BUSINESS_OWNER_FAIL: {
            return action.payload.error;
        }
        // for businessOwner delete-----------------------------
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].DELETE_BUSINESS_OWNER_SUCCESS: {
            return action.payload;
        }
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].DELETE_BUSINESS_OWNER_FAIL: {
            return action.payload.error;
        }
        // for businessOwner update-----------------------------
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].UPDATE_BUSINESS_OWNER_SUCCESS: {
            return action.payload;
        }
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].UPDATE_BUSINESS_OWNER_FAIL: {
            return action.payload.error;
        }
        // for businessOwner upadat status-----------------------------
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for businessOwner upadate-----------------------------
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].UPLOAD_DATA_SUCCESS: {
            return action.payload;
        }
        case _business_owner_actions__WEBPACK_IMPORTED_MODULE_0__["BusinessOwnerActionTypes"].UPLOAD_DATA_FAIL: {
            return action.payload.error;
        }
    }
}
var getBusinessOwnerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("businessOwner");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getBusinessOwnerState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-business-owner-business-owner-module.js.map