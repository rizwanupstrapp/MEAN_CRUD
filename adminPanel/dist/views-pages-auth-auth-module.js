(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/auth-notice/auth-notice.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/auth/auth-notice/auth-notice.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!message\" class=\"alert alert-{{type}}\" role=\"alert\" #alertNotice>\r\n\t<div class=\"alert-text\" [innerHTML]=\"message\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/auth/auth.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1\" id=\"kt_login\">\r\n\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile\">\r\n\t\t<!--begin::Aside-->\r\n\t\t\r\n\t\t<!--begin::Content-->\r\n\t\t<div class=\"kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1 kt-login__wrapper\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t\t<!--end::Content-->\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Body-->\r\n<div class=\"kt-login__body\">\r\n\r\n\t<!--begin::Signin-->\r\n\t<div class=\"kt-login__form\">\r\n\t\t<a href=\"javascript:;\" class=\"kt-login__logo pull-center\">\r\n\t\t\t<!-- <img src=\"./assets/media/logos/logo-4.png\" width=\"150\" height=\"80\"> -->\r\n\t\t\t<img [attr.src]=\"logo\" width=\"150\" height=\"80\">\r\n\t\t</a>\r\n\t\t<div class=\"kt-login__title\">\r\n\t\t\t<h3>{{'AUTH.LABEL.FORGOT_PASSWORD' | translate}}</h3>\r\n\t\t</div>\r\n\r\n\t\t<kt-auth-notice></kt-auth-notice>\r\n\r\n\t\t<form class=\"kt-form\" (ngSubmit)=\"forgotPass()\" [formGroup]=\"forgotPasswordForm\">\r\n\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t<input class=\"form-control m-input\" type=\"text\" formControlName=\"user_email\" placeholder=\"{{ 'AUTH.LABEL.EMAIL' | translate}}\"\r\n\t\t\t\t [ngClass]=\"{ 'is-invalid': submitted1 && forgotPasswordForm.controls.user_email.errors }\" autocomplete=\"off\">\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"submitted1 &&  forgotPasswordForm.controls.user_email.errors\" class=\"form-control-feedback\" style=\"color: red\">\r\n\t\t\t\t<p *ngIf=\"submitted1 &&  forgotPasswordForm.controls.user_email.errors?.required\">\r\n\t\t\t\t\t{{'AUTH.VALIDATION.EMAIL_REQUIRED' | translate}}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p *ngIf=\"submitted1 &&  forgotPasswordForm.controls.user_email.errors?.email\">\r\n\t\t\t\t\t{{'AUTH.VALIDATION.EMAIL_INVALID' | translate}}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p *ngIf=\"submitted1 &&  forgotPasswordForm.controls.user_email.errors?.pattern\">\r\n\t\t\t\t\t{{'AUTH.VALIDATION.EMAIL_INVALID' | translate}}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!--begin::Action-->\r\n\t\t\t<div class=\"kt-login__actions\">\r\n\t\t\t\t<button routerLink=\"/login\" [disabled]=\"loading\" id=\"kt_login_signup_cancel\" class=\"btn btn-secondary btn-elevate kt-login__btn-secondary\">{{ 'BUTTONS.CANCEL' | translate }}</button>\r\n\t\t\t\t<button id=\"kt_login_signin_submit\" class=\"btn btn-primary btn-elevate kt-login__btn-primary\" [ngClass]=\"{'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading}\">{{ 'BUTTONS.SUBMIT' | translate }}</button>\r\n\t\t\t</div>\r\n\t\t\t<!--end::Action-->\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Body-->\r\n<div class=\"kt-login__body\">\r\n\t<!--begin::Signin-->\r\n\t<div class=\"kt-login__form\">\r\n\t\t<a href=\"javascript:;\" class=\"kt-login__logo pull-center\">\r\n\t\t\t<!-- <img src=\"./assets/media/logos/logo-4.png\" alt=\"\" width=\"150\" height=\"80\"> -->\r\n\t\t\t<img [attr.src]=\"logo\" alt=\"\" width=\"150\" height=\"80\">\r\n\t\t</a>\r\n\t\t<div class=\"kt-login__title\">\r\n\t\t\t<h3>Sign In</h3>\r\n\t\t</div>\r\n\t\t<kt-auth-notice></kt-auth-notice>\r\n\t\t<!--begin::Form-->\r\n\t\t<form class=\"kt-form\" (ngSubmit)=\"submit()\" [formGroup]=\"loginForm\">\r\n\r\n\r\n\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t<input class=\"form-control m-input\" formControlName=\"user_email\" type=\"email\" placeholder=\"{{'AUTH.LABEL.EMAIL' | translate}}\"\r\n\t\t\t\t [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.user_email.errors }\">\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"submitted && loginForm.controls.user_email.errors\" class=\"form-control-feedback\" style=\"color: red\">\r\n\t\t\t\t<p *ngIf=\"submitted && loginForm.controls.user_email.errors?.required\">\r\n\t\t\t\t\t{{ 'AUTH.VALIDATION.EMAIL_REQUIRED' | translate }}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p *ngIf=\"submitted && loginForm.controls.user_email.errors?.email\">\r\n\t\t\t\t\t{{ 'AUTH.VALIDATION.EMAIL_INVALID' | translate }}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p *ngIf=\"submitted && loginForm.controls.user_email.errors?.pattern\">\r\n\t\t\t\t\t{{ 'AUTH.VALIDATION.EMAIL_INVALID' | translate }}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.user_password.errors }\"\r\n\t\t\t\t formControlName=\"user_password\" type=\"password\" placeholder=\"{{'AUTH.LABEL.PASSWORD' | translate}}\">\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"submitted && loginForm.controls.user_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\r\n\t\t\t\t<p *ngIf=\"submitted && loginForm.controls.user_password.errors?.required\">\r\n\t\t\t\t\t{{'AUTH.VALIDATION.PASSWORD_REQUIRED' | translate}}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p *ngIf=\"submitted && loginForm.controls.user_password.errors?.pattern\">\r\n\t\t\t\t\t{{'AUTH.VALIDATION.PASSWORD_INVALID' | translate}}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!--begin::Action-->\r\n\t\t\t<div class=\"kt-login__actions\">\r\n\t\t\t\t<a href=\"javascript:;\" routerLink=\"/forgot-password\" class=\"kt-link kt-login__link-forgot\">\r\n\t\t\t\t\t{{ 'AUTH.BUTTONS.FORGOT_BUTTON' | translate }}\r\n\t\t\t\t</a>\r\n\t\t\t\t<button id=\"kt_login_signin_submit\" class=\"btn btn-primary btn-elevate kt-login__btn-primary\">{{ 'AUTH.BUTTONS.LOGIN' | translate }}</button>\r\n\t\t\t</div>\r\n\t\t\t<!--end::Action-->\r\n\t\t</form>\r\n\t\t<!--end::Form-->\r\n\t</div>\r\n\t<!--end::Signin-->\r\n</div>\r\n<!--end::Body-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/reset-password/reset-password.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/auth/reset-password/reset-password.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Body-->\r\n<div class=\"kt-login__body\">\r\n\r\n\t<!--begin::Signin-->\r\n\t<div class=\"kt-login__form\">\r\n\t\t<a href=\"javascript:;\" class=\"kt-login__logo pull-center\">\r\n\t\t\t<!-- <img src=\"./assets/media/logos/logo-4.png\" width=\"150\" height=\"80\"> -->\r\n\t\t\t<img [attr.src]=\"logo\" width=\"150\" height=\"80\">\r\n\t\t</a>\r\n\r\n\t\t<div class=\"kt-login__title\">\r\n\t\t\t<h3>{{'AUTH.LABEL.RESET_PASSWORD' | translate}}</h3>\r\n\t\t</div>\r\n\r\n\t\t<kt-auth-notice></kt-auth-notice>\r\n\r\n\t\t<form class=\"kt-login__form kt-form\" (ngSubmit)=\"ResetPassword()\" [formGroup]=\"resetPassForm\" autocomplete=\"off\">\r\n\r\n\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t<input class=\"form-control m-input m-login__form-input--last \" formControlName=\"user_password\" type=\"password\" placeholder=\"{{'AUTH.LABEL.PASSWORD' | translate}}\"\r\n\t\t\t\t [ngClass]=\"{ 'is-invalid': submitted && resetPassForm.controls.user_password.errors }\">\r\n\t\t\t\t<div *ngIf=\"submitted && resetPassForm.controls.user_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\r\n\t\t\t\t\t<p *ngIf=\"submitted && resetPassForm.controls.user_password.errors?.required\">\r\n\t\t\t\t\t\t{{'AUTH.VALIDATION.PASSWORD_REQUIRED' | translate }}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p *ngIf=\"submitted && resetPassForm.controls.user_password.errors?.pattern\">\r\n\t\t\t\t\t\t{{'AUTH.VALIDATION.PASSWORD_INVALID' | translate }}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t<input class=\"form-control m-input m-login__form-input--last \" formControlName=\"user_confirm_password\" type=\"password\" placeholder=\"{{'AUTH.LABEL.CONFPASSWORD' | translate}}\"\r\n\t\t\t\t [ngClass]=\"{ 'is-invalid': submitted && resetPassForm.controls.user_confirm_password.errors }\">\r\n\t\t\t\t<div *ngIf=\"submitted && resetPassForm.controls.user_confirm_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\r\n\t\t\t\t\t<p *ngIf=\"submitted && resetPassForm.controls.user_confirm_password.errors?.required\">\r\n\t\t\t\t\t\t{{'AUTH.VALIDATION.CONFPASSWORD_REQUIRED' | translate }}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p *ngIf=\"submitted && resetPassForm.controls.user_confirm_password.errors?.pattern\">\r\n\t\t\t\t\t\t{{'AUTH.VALIDATION.CONFPASSWORD_INVALID' | translate }}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!--begin::Action-->\r\n\t\t\t<div class=\"kt-login__actions\">\r\n\t\t\t\t<button id=\"kt_login_signin_submit\" class=\"btn btn-primary btn-elevate kt-login__btn-primary\" [ngClass]=\"{'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading}\">{{ 'AUTH.BUTTONS.RESET_PASSWORD' | translate}}</button>\r\n\t\t\t</div>\r\n\t\t\t<!--end::Action-->\r\n\t\t</form>\r\n\t</div>\r\n</div>"

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

/***/ "./src/app/core/auth/auth-notice/auth-notice.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/auth/auth-notice/auth-notice.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthNoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeService", function() { return AuthNoticeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AuthNoticeService = /** @class */ (function () {
    function AuthNoticeService() {
        this.onNoticeChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AuthNoticeService.prototype.setNotice = function (message, type) {
        var notice = {
            message: message,
            type: type
        };
        this.onNoticeChanged$.next(notice);
    };
    AuthNoticeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthNoticeService);
    return AuthNoticeService;
}());



/***/ }),

/***/ "./src/app/core/auth/index.ts":
/*!************************************!*\
  !*** ./src/app/core/auth/index.ts ***!
  \************************************/
/*! exports provided: AuthService, AuthNoticeService, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services */ "./src/app/core/auth/_services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _auth_notice_auth_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-notice/auth-notice.service */ "./src/app/core/auth/auth-notice/auth-notice.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeService", function() { return _auth_notice_auth_notice_service__WEBPACK_IMPORTED_MODULE_1__["AuthNoticeService"]; });

/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/core/auth/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

// SERVICES


// GUARDS



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

/***/ "./src/app/views/pages/auth/auth-notice/auth-notice.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/auth/auth-notice/auth-notice.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeComponent", function() { return AuthNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/auth/ */ "./src/app/core/auth/index.ts");

// Angular

// Auth

var AuthNoticeComponent = /** @class */ (function () {
    /**
     * Component Constructure
     *
     * @param authNoticeService
     * @param cdr
     */
    function AuthNoticeComponent(authNoticeService, cdr) {
        this.authNoticeService = authNoticeService;
        this.cdr = cdr;
        this.message = '';
        // Private properties
        this.subscriptions = [];
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    AuthNoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.authNoticeService.onNoticeChanged$.subscribe(function (notice) {
            notice = Object.assign({}, { message: '', type: '' }, notice);
            _this.message = notice.message;
            _this.type = notice.type;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * On destroy
     */
    AuthNoticeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    AuthNoticeComponent.ctorParameters = function () { return [
        { type: _core_auth___WEBPACK_IMPORTED_MODULE_2__["AuthNoticeService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthNoticeComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthNoticeComponent.prototype, "message", void 0);
    AuthNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-auth-notice',
            template: __webpack_require__(/*! raw-loader!./auth-notice.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/auth-notice/auth-notice.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth___WEBPACK_IMPORTED_MODULE_2__["AuthNoticeService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AuthNoticeComponent);
    return AuthNoticeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/auth/auth.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/pages/auth/auth.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-login.kt-login--v1 .kt-login__aside {\n  width: 605px;\n  padding: 3rem 3.5rem;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__logo {\n    display: flex; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__title {\n    color: #ffffff;\n    font-size: 2rem;\n    font-weight: 500; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__subtitle {\n    font-size: 1.2rem;\n    font-weight: 200;\n    margin: 2.5rem 0 3.5rem 0;\n    color: rgba(255, 255, 255, 0.7); }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info {\n    display: flex;\n    justify-content: space-between; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a {\n      text-decoration: none;\n      color: #fff;\n      margin-right: 2rem;\n      display: inline-block;\n      color: rgba(255, 255, 255, 0.7); }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a:hover {\n        color: #fff; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a:hover:after {\n          border-bottom: 1px solid #fff;\n          opacity: 0.3; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a:last-child {\n        margin-right: 0; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__copyright {\n      color: rgba(255, 255, 255, 0.4); }\n  .kt-login.kt-login--v1 .kt-login__wrapper {\n  padding: 3rem 3rem;\n  background: #fff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head {\n    font-size: 1rem;\n    font-weight: 500;\n    text-align: right; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head .kt-login__signup-label {\n      color: #74788d; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head .kt-login__signup-link {\n      color: #5d78ff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form {\n      width: 100%;\n      max-width: 450px; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__title {\n        display: block;\n        text-align: center;\n        margin-bottom: 5rem;\n        text-decoration: none; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__title > h3 {\n          font-size: 2rem;\n          color: #67666e; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form {\n        margin: 4rem auto; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group {\n          margin: 0;\n          padding: 0;\n          margin: 0 auto; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group .form-control {\n            border: none;\n            height: 50px;\n            margin-top: 1.25rem;\n            background-color: rgba(247, 247, 249, 0.7);\n            padding-left: 1.25rem;\n            padding-right: 1.25rem;\n            transition: background-color 0.3s ease; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group .form-control:focus {\n              transition: background-color 0.3s ease;\n              background-color: #f7f7f9; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 3rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot {\n          font-weight: 400;\n          color: #74788d; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot:hover {\n            color: #5d78ff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot:hover:after {\n              border-bottom: 1px solid #5d78ff;\n              opacity: 0.3; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__btn-secondary,\n        .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__btn-primary {\n          font-weight: 500;\n          font-size: 1rem;\n          height: 50px;\n          padding-left: 2.75rem;\n          padding-right: 2.75rem; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__divider {\n        margin: 1rem 0 2rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__divider:not(:first-child):not(:last-child) {\n          font-weight: 400;\n          color: #b5b2c3;\n          font-size: 1rem; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options {\n        display: flex;\n        justify-content: center;\n        justify-content: space-between;\n        max-width: 100%; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a {\n          text-decoration: none;\n          flex: 1;\n          justify-content: center;\n          align-items: center;\n          display: flex; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a:not(:last-child) {\n            margin: 0 1.5rem 0 0; }\n  @media (min-width: 1025px) {\n  .kt-login.kt-login--v1 .kt-login__aside {\n    flex: 1; } }\n  @media (max-width: 1024px) {\n  .kt-login.kt-login--v1 .kt-login__aside {\n    width: 100%;\n    height: auto;\n    padding: 2rem 1.5rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__logo {\n      margin-bottom: 2.5rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__info {\n      margin-top: 2rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__subtitle {\n      margin: 2rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper {\n    padding: 3rem 1.5rem; }\n    .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head {\n      padding-left: 2rem;\n      right: 2rem; }\n    .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 5rem; }\n      .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a:not(:first-child):not(:last-child) {\n        margin: 0 0.8rem; } }\n  kt-auth, .kt-login {\n  height: 100%; }\n  kt-auth .mat-form-field, .kt-login .mat-form-field {\n    width: 100%; }\n  kt-auth .kt-spinner, .kt-login .kt-spinner {\n    padding-right: 3rem !important; }\n  .kt-login__logo {\n  text-align: center !important;\n  display: block;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hc3NldHMvc2Fzcy9wYWdlcy9sb2dpbi9sb2dpbi0xLnNjc3MiLCIvaG9tZS93ZWJjbHVlcy1hbmRyb2lkL0Rlc2t0b3AvcHJvamVjdHMvb3Blbl9yaWRlYWxvdHQvYWRtaW5QYW5lbC9zcmMvYXNzZXRzL3Nhc3MvZ2xvYmFsL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9taXhpbnMvX2xpbmsuc2NzcyIsIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hc3NldHMvc2Fzcy9fY29uZmlnLnNjc3MiLCIvaG9tZS93ZWJjbHVlcy1hbmRyb2lkL0Rlc2t0b3AvcHJvamVjdHMvb3Blbl9yaWRlYWxvdHQvYWRtaW5QYW5lbC9zcmMvYXNzZXRzL3Nhc3MvZ2xvYmFsL19taXhpbnMuc2NzcyIsIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBR1EsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7RUFOOUI7SUFTWSxhQUFhLEVBQUE7RUFUekI7SUFhWSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBZjVCO0lBbUJZLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLCtCQUFnQixFQUFBO0VBdEI1QjtJQTBCWSxhQUFhO0lBQ2IsOEJBQThCLEVBQUE7RUEzQjFDO01BK0JvQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixxQkFBcUI7TUN6Q3JDLCtCRDJDZ0QsRUFBQTtFQXBDcEQ7UUNKSyxXRHdDMkQsRUFBQTtFQXBDaEU7VUNETSw2QkRxQzBEO1VDcEMxRCxZQUFZLEVBQUE7RURBbEI7UUF1Q3dCLGVBQWUsRUFBQTtFQXZDdkM7TUE2Q2dCLCtCQUFnQixFQUFBO0VBN0NoQztFQW9EUSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFyRHhCO0lBeURZLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUEzRDdCO01BOERnQixjRXlDRSxFQUFBO0VGdkdsQjtNQWtFZ0IsY0VISyxFQUFBO0VGL0RyQjtJQXdFWSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUEzRXhCO01BK0VnQixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoRmhDO1FBbUZvQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixxQkFBcUIsRUFBQTtFQXRGekM7VUF5RndCLGVBQWU7VUFDZixjQUFjLEVBQUE7RUExRnRDO1FBZ0dvQixpQkFBaUIsRUFBQTtFQWhHckM7VUFtR3dCLFNBQVM7VUFDVCxVQUFVO1VBQ1YsY0FBYyxFQUFBO0VBckd0QztZQXdHNEIsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsMENBQThCO1lBQzlCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsc0NBQXNDLEVBQUE7RUE5R2xFO2NBaUhnQyxzQ0FBc0M7Y0FDdEMseUJBQXlCLEVBQUE7RUFsSHpEO1FBMEhvQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixjQUFjLEVBQUE7RUE3SGxDO1VBZ0l3QixnQkFBZ0I7VUN2SXBDLGNDOEdjLEVBQUE7RUZ2R2xCO1lDSkssY0NtRWdCLEVBQUE7RUYvRHJCO2NDRE0sZ0NDZ0VlO2NEL0RmLFlBQVksRUFBQTtFREFsQjs7VUFzSXdCLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixzQkFBc0IsRUFBQTtFQTFJOUM7UUFnSm9CLHFCQUFxQixFQUFBO0VBaEp6QztVQW1Kd0IsZ0JBQWdCO1VBQ2hCLGNBQWM7VUFDZCxlQUFlLEVBQUE7RUFySnZDO1FBMkpvQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixlQUFlLEVBQUE7RUE5Sm5DO1VBaUt3QixxQkFBcUI7VUFDckIsT0FBTztVQUNQLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsYUFBYSxFQUFBO0VBcktyQztZQXdLNEIsb0JBQW9CLEVBQUE7RUcrSTVDO0VIdlRKO0lBbUxZLE9BQU8sRUFBQSxFQUNWO0VHaUtMO0VIclZKO0lBMExZLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CLEVBQUE7SUE1TGhDO01BK0xnQixxQkFBcUIsRUFBQTtJQS9MckM7TUFtTWdCLGdCQUFnQixFQUFBO0lBbk1oQztNQXVNZ0IsY0FBYyxFQUFBO0VBdk05QjtJQTZNWSxvQkFBb0IsRUFBQTtJQTdNaEM7TUFnTmdCLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7SUFqTjNCO01BcU5nQixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtNQXhOaEM7UUE4TmdDLGdCQUFnQixFQUFBLEVBQ25CO0VJMU83QjtFQUNDLFlBQVksRUFBQTtFQURiO0lBSUUsV0FBVyxFQUFBO0VBSmI7SUFVRSw4QkFBOEIsRUFBQTtFQU1oQztFQUNDLDZCQUE2QjtFQUMxQixjQUFjO0VBQ2QsbUJBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vIFBhZ2UgLSBVc2VyIExvZ2luIDFcclxuLy8gUGFnZXMgU0FTUyBmaWxlcyBhcmUgY29tcGlsZWQgaW50byBzZXBhcmF0ZSBjc3MgZmlsZXNcclxuLy9cclxuXHJcblxyXG5cclxuLy8gR2xvYmFsIGNvbmZpZ1xyXG5AaW1wb3J0IFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG4vLyBMYXlvdXQgY29uZmlnXHJcbkBpbXBvcnQgXCIuLi8uLi9nbG9iYWwvbGF5b3V0L2NvbmZpZy5zY3NzXCI7XHJcblxyXG4vLyBMb2dpbiBCYXNlXHJcbi5rdC1sb2dpbi5rdC1sb2dpbi0tdjEge1xyXG4gICAgLy8gQXNpZGVcclxuICAgIC5rdC1sb2dpbl9fYXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiA2MDVweDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDMuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgICAgIC5rdC1sb2dpbl9fbG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAua3QtbG9naW5fX3RpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5rdC1sb2dpbl9fc3VidGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyLjVyZW0gMCAzLjVyZW0gMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoI2ZmZiwgMC43KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5rdC1sb2dpbl9faW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIC5rdC1sb2dpbl9fbWVudSB7XHJcbiAgICAgICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBrdC1saW5rLWNvbG9yKHJnYmEoI2ZmZiwgMC43KSwgI2ZmZik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5rdC1sb2dpbl9fY29weXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCNmZmYsIDAuNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV3JhcHBlclxyXG4gICAgLmt0LWxvZ2luX193cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDNyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgICAgLy8gSGVhZFxyXG4gICAgICAgIC5rdC1sb2dpbl9faGVhZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAua3QtbG9naW5fX3NpZ251cC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjoga3QtYmFzZS1jb2xvcihsYWJlbCwgMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5rdC1sb2dpbl9fc2lnbnVwLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGt0LWJyYW5kLWNvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJvZHlcclxuICAgICAgICAua3QtbG9naW5fX2JvZHkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybSBXcmFwcGVyXHJcbiAgICAgICAgICAgIC5rdC1sb2dpbl9fZm9ybSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmt0LWxvZ2luX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY3NjY2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9ybVxyXG4gICAgICAgICAgICAgICAgLmt0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHJlbSBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmN2Y3ZjksIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBY3Rpb25cclxuICAgICAgICAgICAgICAgIC5rdC1sb2dpbl9fYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNyZW0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmt0LWxvZ2luX19saW5rLWZvcmdvdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxpbmstY29sb3Ioa3QtYmFzZS1jb2xvcihsYWJlbCwgMiksIGt0LWJyYW5kLWNvbG9yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmt0LWxvZ2luX19idG4tc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIC5rdC1sb2dpbl9fYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEaXZpZGVyXHJcbiAgICAgICAgICAgICAgICAua3QtbG9naW5fX2RpdmlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDJyZW0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiNWIyYzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmt0LWxvZ2luX19vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEuNXJlbSAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUga3QtZGVza3RvcCB7XHJcbiAgICAgICAgLy8gQXNpZGVcclxuICAgICAgICAua3QtbG9naW5fX2FzaWRlIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUga3QtdGFibGV0LWFuZC1tb2JpbGUoKSB7XHJcbiAgICAgICAgLy8gQXNpZGVcclxuICAgICAgICAua3QtbG9naW5fX2FzaWRlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAua3QtbG9naW5fX2xvZ28ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAua3QtbG9naW5fX2luZm8ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmt0LWxvZ2luX19zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV3JhcHBlclxyXG4gICAgICAgIC5rdC1sb2dpbl9fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgLmt0LWxvZ2luX19oZWFkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAua3QtbG9naW5fX2JvZHkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLmt0LWxvZ2luX19mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAua3QtbG9naW5fX29wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vXHJcbi8vIExpbmsgTWl4aW5zXHJcbi8vIFxyXG5cclxuXHJcblxyXG5AbWl4aW4ga3QtbGluay1jb2xvcigkZGVmYXVsdCwgJGhvdmVyKSB7XHJcbiAgIFx0Y29sb3I6ICRkZWZhdWx0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgXHRjb2xvcjogJGhvdmVyO1xyXG5cclxuICAgIFx0JjphZnRlciB7XHJcbiAgICBcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRob3ZlcjsgXHJcbiAgICBcdFx0b3BhY2l0eTogMC4zO1xyXG4gICAgXHR9IFxyXG4gICAgfSAgICBcclxufSIsIi8vXHJcbi8vIEdsb2JhbCBDb25maWdcclxuLy9cclxuXHJcblxyXG5cclxuLy8gSW5pdCBnbG9iYWwgZnVuY3Rpb25zIGFuZCBtaXhpbnNcclxuQGltcG9ydCBcImdsb2JhbC9pbml0XCI7XHJcblxyXG4vLyBMYXlvdXQgQnJlYWtwb2ludHMoYm9vdHN0cmFwIHJlc3BvbnNpdmUgYnJlYWtwb2ludHMpXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLCBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRrdC1tZWRpYS1icmVha3BvaW50czogKFxyXG4gICAgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIHhzOiAwLFxyXG5cclxuICAgIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTogNTc2cHgsXHJcblxyXG4gICAgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbWQ6IDc2OHB4LFxyXG5cclxuICAgIC8vIExhcmdlIHNjcmVlbiAvIGRlc2t0b3BcclxuICAgIGxnOiAxMDI0cHgsIC8vMTAyNHB4LFxyXG5cclxuICAgIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxyXG4gICAgeGw6IDEzOTlweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gR2xvYmFsIHJvdW5kZWQgYm9yZGVyIG1vZGVcclxuJGt0LXJvdW5kZWQ6IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBCb3JkZXIgUmFkaXVzXHJcbiRrdC1ib3JkZXItcmFkaXVzOiA0cHggIWRlZmF1bHQ7XHJcblxyXG4vLyBDb3JlIGljb24gY29kZXMobGluZWF3ZXNvbWUgaWNvbnM6IGh0dHBzOi8vaWNvbnM4LmNvbS9saW5lLWF3ZXNvbWUpXHJcbiRrdC1hY3Rpb24taWNvbnM6IChcclxuICAgIGNsb3NlOiAnXFxmMTkxJyxcclxuICAgIGRvd246ICdcXGYxMTAnLFxyXG4gICAgdXA6ICdcXGYxMTMnLFxyXG4gICAgbGVmdDogJ1xcZjExMScsXHJcbiAgICByaWdodDogJ1xcZjExMicsXHJcbiAgICBwbHVzOiAnXFxmMmMyJyxcclxuICAgIG1pbnVzOiAnXFxmMjhlJ1xyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gQ29yZSBib2xkIGljb24gY29kZXMobGluZWF3ZXNvbWUgaWNvbnM6IGh0dHBzOi8va2VlbnRoZW1lcy5jb20vbWV0cm9uaWMvcHJldmlldy9kZWZhdWx0L2NvbXBvbmVudHMvaWNvbnMvZmxhdGljb24uaHRtbClcclxuJGt0LWFjdGlvbi1ib2xkLWljb25zOiAoXHJcbiAgICBkb3duOiAnXFxmMWEzJyxcclxuICAgIHVwOiAnXFxmMWE1JyxcclxuICAgIGxlZnQ6ICdcXGYxYTQnLFxyXG4gICAgcmlnaHQ6ICdcXGYxOWQnLFxyXG4gICAgY2xvc2U6ICdcXGYxYjInXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBFbGV2YXRlIHNoYWRvd1xyXG4ka3QtZWxldmF0ZS1zaGFkb3c6IDBweCAwcHggMTNweCAwcHggcmdiYSg4Miw2MywxMDUsMC4wNSkgIWRlZmF1bHQ7XHJcbiRrdC1lbGV2YXRlLXNoYWRvdy0yOiAwcHggMHB4IDEzcHggMHB4IHJnYmEoODIsNjMsMTA1LDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93biBzaGFkb3dcclxuJGt0LWRyb3Bkb3duLXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCByZ2JhKDgyLDYzLDEwNSwgMC4xNSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBDdXN0b20gc2Nyb2xsYmFyIGNvbG9yXHJcbiRrdC1zY3JvbGwtY29sb3I6IGRhcmtlbigjZWJlZGYyLCA2JSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBUcmFuc2l0aW9uXHJcbiRrdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsIFotaW5kZXhcclxuJGt0LW1vZGFsLXppbmRleDogMTA1MCAhZGVmYXVsdDtcclxuXHJcbi8vIGRyb3Bkb3duIFotaW5kZXhcclxuJGt0LWRyb3Bkb3duLXppbmRleDogOTUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTdGF0ZSBDb2xvclxyXG4ka3Qtc3RhdGUtY29sb3JzOiAoXHJcbiAgICAvLyBNZXRyb25pYyBzdGF0ZXNcclxuICAgIGJyYW5kOiAoXHJcbiAgICAgICAgYmFzZTogIzVkNzhmZixcclxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXHJcbiAgICApLFxyXG4gICAgbGlnaHQ6IChcclxuICAgICAgICBiYXNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGludmVyc2U6ICMyODJhM2NcclxuICAgICksXHJcbiAgICBkYXJrOiAoXHJcbiAgICAgICAgYmFzZTogIzI4MmEzYyxcclxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXHJcbiAgICApLFxyXG5cclxuICAgIC8vIEJvb3RzdHJhcCBzdGF0ZXNcclxuICAgIHByaW1hcnk6IChcclxuICAgICAgICBiYXNlOiAjNTg2N2RkLFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcclxuICAgICksXHJcbiAgICBzdWNjZXNzOiAoXHJcbiAgICAgICAgYmFzZTogIzBhYmI4NywgLy8xZGM5YjcsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxyXG4gICAgKSxcclxuICAgIGluZm86IChcclxuICAgICAgICBiYXNlOiAjNTU3OGViLFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcclxuICAgICksXHJcbiAgICB3YXJuaW5nOiAoXHJcbiAgICAgICAgYmFzZTogI2ZmYjgyMixcclxuICAgICAgICBpbnZlcnNlOiAjMTExMTExXHJcbiAgICApLFxyXG4gICAgZGFuZ2VyOiAoXHJcbiAgICAgICAgYmFzZTogI2ZkMzk3YSxcclxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXHJcbiAgICApXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQmFzZSBjb2xvcnNcclxuJGt0LWJhc2UtY29sb3JzOiAoXHJcbiAgICBsYWJlbDogKFxyXG4gICAgICAgIDE6ICNhMmE1YjksXHJcbiAgICAgICAgMjogIzc0Nzg4ZCxcclxuICAgICAgICAzOiAjNTk1ZDZlLFxyXG4gICAgICAgIDQ6ICM0ODQ2NWJcclxuICAgICksXHJcbiAgICBzaGFwZTogKFxyXG4gICAgICAgIDE6ICNmMGYzZmYsXHJcbiAgICAgICAgMjogI2U4ZWNmYSxcclxuICAgICAgICAzOiAjOTNhMmRkLFxyXG4gICAgICAgIDQ6ICM2NDZjOWFcclxuICAgICksXHJcbiAgICBncmV5OiAoXHJcbiAgICAgICAgMTogI2Y3ZjhmYSwgLy8jZjRmNWY4XHJcbiAgICAgICAgMjogI2ViZWRmMixcclxuICAgICAgICAzOiBkYXJrZW4oI2ViZWRmMiwgMyUpLFxyXG4gICAgICAgIDQ6IGRhcmtlbigjZWJlZGYyLCA2JSlcclxuICAgIClcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIFNvY2lhbCBuZXR3b3JrIGNvbG9ycyhzZWU6IGh0dHBzOi8vYnJhbmRjb2xvcnMubmV0LylcclxuJGt0LXNvY2lhbC1jb2xvcnM6IChcclxuICAgIGZhY2Vib29rOiAoXHJcbiAgICAgICAgYmFzZTogIzNiNTk5OCxcclxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXHJcbiAgICApLFxyXG4gICAgZ29vZ2xlOiAoXHJcbiAgICAgICAgYmFzZTogI2RjNGU0MSxcclxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXHJcbiAgICApLFxyXG4gICAgdHdpdHRlcjogKFxyXG4gICAgICAgIGJhc2U6ICM0QUIzRjQsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxyXG4gICAgKSxcclxuICAgIGluc3RhZ3JhbTogKFxyXG4gICAgICAgIGJhc2U6ICM1MTdmYTQsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxyXG4gICAgKSxcclxuICAgIHlvdXR1YmU6IChcclxuICAgICAgICBiYXNlOiAjYjMxMjE3LFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcclxuICAgICksXHJcbiAgICBsaW5rZWRpbjogKFxyXG4gICAgICAgIGJhc2U6ICMwMDc3YjUsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxyXG4gICAgKSxcclxuICAgIHNreXBlOiAoXHJcbiAgICAgICAgYmFzZTogIzAwYWZmMCxcclxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXHJcbiAgICApXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBSb290IEZvbnQgU2V0dGluZ3NcclxuJGt0LWZvbnQtZmFtaWxpZXM6IChcclxuICAgIHJlZ3VsYXI6IHVucXVvdGUoJ1BvcHBpbnMsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpLFxyXG4gICAgaGVhZGluZzogdW5xdW90ZSgnUG9wcGlucywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIFJvb3QgRm9udCBTZXR0aW5nc1xyXG4ka3QtZm9udC1zaXplOiAoXHJcbiAgICBzaXplOiAoXHJcbiAgICAgICAgZGVza3RvcDogMTNweCxcclxuICAgICAgICB0YWJsZXQ6IDEycHgsXHJcbiAgICAgICAgbW9iaWxlOiAxMnB4XHJcbiAgICApLFxyXG4gICAgd2VpZ2h0OiAzMDBcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIEdlbmVyYWwgTGluayBTZXR0aW5nc1xyXG4ka3QtZm9udC1jb2xvcjogKFxyXG4gICAgdGV4dDogIzY0NmM5YSxcclxuICAgIGxpbms6IChcclxuICAgICAgICBkZWZhdWx0OiBrdC1zdGF0ZS1jb2xvcihicmFuZCksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbihrdC1zdGF0ZS1jb2xvcihicmFuZCksIDYlKVxyXG4gICAgKVxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gUG9ydGxldCBzZXR0aW5nc1xyXG4ka3QtcG9ydGxldDogKFxyXG4gICAgbWluLWhlaWdodDogKFxyXG4gICAgICAgIGRlZmF1bHQ6IChcclxuICAgICAgICAgICAgZGVza3RvcDogNjBweCxcclxuICAgICAgICAgICAgbW9iaWxlOiA1MHB4XHJcbiAgICAgICAgKSxcclxuICAgICAgICBzbTogKFxyXG4gICAgICAgICAgICBkZXNrdG9wOiA1MHB4LFxyXG4gICAgICAgICAgICBtb2JpbGU6IDQwcHhcclxuICAgICAgICApLFxyXG4gICAgICAgIGxnOiAoXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IDgwcHgsXHJcbiAgICAgICAgICAgIG1vYmlsZTogNjBweFxyXG4gICAgICAgICksXHJcbiAgICAgICAgeGw6IChcclxuICAgICAgICAgICAgZGVza3RvcDogMTAwcHgsXHJcbiAgICAgICAgICAgIG1vYmlsZTogODBweFxyXG4gICAgICAgIClcclxuICAgICksXHJcbiAgICBzcGFjZTogKFxyXG4gICAgICAgIGRlc2t0b3A6IDI1cHgsXHJcbiAgICAgICAgbW9iaWxlOiAxNXB4XHJcbiAgICApLFxyXG4gICAgYm90dG9tLXNwYWNlOiAoXHJcbiAgICAgICAgZGVza3RvcDogMjBweCxcclxuICAgICAgICBtb2JpbGU6IDIwcHhcclxuICAgICksXHJcbiAgICBib3JkZXItY29sb3I6IGt0LWJhc2UtY29sb3IoZ3JleSwgMiksXHJcbiAgICBiZy1jb2xvcjogI2ZmZmZmZixcclxuICAgIHNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDgyLDYzLDEwNSwwLjA1KVxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gUGFnZSBwYWRkaW5nXHJcbiRrdC1wYWdlLXBhZGRpbmc6IChcclxuXHRkZXNrdG9wOiAyNXB4LFxyXG5cdG1vYmlsZTogMTVweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gUGFnZSBjb250YWluZXIgd2lkdGhcclxuJGt0LXBhZ2UtY29udGFpbmVyLXdpZHRoOiAxMzgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBDdXN0b20gU2Nyb2xsKFBlcmZlY3QgU2Nyb2xsYmFyKSBzaXplXHJcbiRrdC1jdXN0b20tc2Nyb2xsLXNpemU6IDRweCAhZGVmYXVsdDtcclxuIiwiLy9cclxuLy8gR2xvYmFsIE1peGluc1xyXG4vL1xyXG5cclxuXHJcblxyXG5cclxuQG1peGluIGt0LWNsZWFyZml4KCkge1xyXG5cdCY6YmVmb3JlLFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogXCIgXCI7IC8vIDFcclxuXHRcdGRpc3BsYXk6IHRhYmxlOyAvLyAyXHJcblx0fVxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG59XHJcblxyXG5AbWl4aW4ga3QtYnV0dG9uLXJlc2V0KCkge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1pbnB1dC1yZXNldCgpIHtcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1peGluIGt0LWJ0bi1yZXNldCgpIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWl4aW4ga3QtZml4LWZpeGVkLXBvc2l0aW9uLWxhZ3MoKSB7XHJcblx0Ly8gd2Via2l0IGhhY2sgZm9yIHNtb290aCBmb250IHZpZXcgb24gZml4ZWQgcG9zaXRpb25lZCBlbGVtZW50c1xyXG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47XHJcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1maXgtYW5pbWF0aW9uLWxhZ3MoKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1hdHRyKCRhdHRyLCAkdmFsdWUsICRpbXBvcnRhbnQ6ICcnKSB7XHJcbiAgICBAaWYgICR2YWx1ZSAhPSBudWxsICB7XHJcbiAgICAgICAgI3skYXR0cn06ICN7JHZhbHVlfSAjeyRpbXBvcnRhbnR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtaGFjay1pZSB7XHJcblx0Ly9JRTEwIGFuZCBJRTExXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuXHRcdEBjb250ZW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1peGluIGt0LWhhY2stZWRnZS1hbGwge1xyXG5cdEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XHJcblx0XHRAY29udGVudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1yb3VuZGVkIHtcclxuICAgIEBpZiAka3Qtcm91bmRlZCA9PSB0cnVlIHtcclxuICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3Qtbm90LXJvdW5kZWQge1xyXG4gICAgQGlmICRrdC1yb3VuZGVkID09IGZhbHNlIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5wdXQgcGxhY2Vob2xkZXIgY29sb3JcclxuQG1peGluIGt0LWlucHV0LXBsYWNlaG9sZGVyKCRjb2xvcikge1xyXG4gICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxuICAgIC8vIFNhZmFyaSBhbmQgQ2hyb21lXHJcbn1cclxuXHJcbkBtaXhpbiBrdC1ob3Zlci10cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246ICRrdC10cmFuc2l0aW9uO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICRrdC10cmFuc2l0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiAka3QtdHJhbnNpdGlvbjtcclxufVxyXG5cclxuLy8gSWNvbiBTaXppbmdcclxuLy8gU0FTUyBNYXA6ICAobGluZWF3ZXNvbWU6IDEuMXJlbSwgZm9udGF3ZXNvbWU6IDEuMnJlbSwgZmxhdGljb246IDEuMXJlbSlcclxuQG1peGluIGt0LWljb25zLXNpemUoJGNvbmZpZykge1xyXG4gICAgLy8gTGluZWF3ZXNvbWVcclxuICAgIFtjbGFzc149XCJsYS1cIl0sXHJcbiAgICBbY2xhc3MqPVwiIGxhLVwiXSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBrdC1nZXQoJGNvbmZpZywgbGluZWF3ZXNvbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvbnRhd2Vzb21lXHJcbiAgICBbY2xhc3NePVwiZmEtXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBmYS1cIl0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZToga3QtZ2V0KCRjb25maWcsIGZvbnRhd2Vzb21lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGbGF0aWNvblxyXG4gICAgW2NsYXNzXj1cImZsYXRpY29uLVwiXSxcclxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24tXCJdLFxyXG4gICAgW2NsYXNzXj1cImZsYXRpY29uMi1cIl0sXHJcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uMi1cIl0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZToga3QtZ2V0KCRjb25maWcsIGZsYXRpY29uKTtcclxuICAgICAgICAvLyBmaXggaWNvbiBwb3NpdGlvbiBmb3IgUlRMXHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEljb24gYXR0clxyXG4vLyBTQVNTIE1hcDogIChsaW5lYXdlc29tZTogMS4xcmVtLCBmb250YXdlc29tZTogMS4ycmVtLCBmbGF0aWNvbjogMS4xcmVtKVxyXG5AbWl4aW4ga3QtaWNvbnMtc3R5bGUoJGF0dHIsICRjb25maWcpIHtcclxuICAgIC8vIGxpbmVhd2Vzb21lXHJcbiAgICBbY2xhc3NePVwibGEtXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBsYS1cIl0ge1xyXG4gICAgICAgICN7JGF0dHJ9OiBrdC1nZXQoJGNvbmZpZywgbGluZWF3ZXNvbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvbnRhd2Vzb21lXHJcbiAgICBbY2xhc3NePVwiZmEtXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBmYS1cIl0ge1xyXG4gICAgICAgICN7JGF0dHJ9OiBrdC1nZXQoJGNvbmZpZywgZm9udGF3ZXNvbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZsYXRpY29uXHJcbiAgICBbY2xhc3NePVwiZmxhdGljb24tXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBmbGF0aWNvbi1cIl0sXHJcbiAgICBbY2xhc3NePVwiZmxhdGljb24yLVwiXSxcclxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24yLVwiXSB7XHJcbiAgICAgICAgI3skYXR0cn06IGt0LWdldCgkY29uZmlnLCBmbGF0aWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNBU1MgTWFwOiAgKGxpbmVhd2Vzb21lOiAxLjFyZW0sIGZvbnRhd2Vzb21lOiAxLjJyZW0sIGZsYXRpY29uOiAxLjFyZW0pXHJcbkBtaXhpbiBrdC1pY29ucyB7XHJcbiAgICBbY2xhc3NePVwibGEtXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBsYS1cIl0sXHJcbiAgICBbY2xhc3NePVwiZmEtXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBmYS1cIl0sXHJcbiAgICBbY2xhc3NePVwiZmxhdGljb24tXCJdLFxyXG4gICAgW2NsYXNzKj1cIiBmbGF0aWNvbi1cIl0sXHJcbiAgICBbY2xhc3NePVwiZmxhdGljb24yLVwiXSxcclxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24yLVwiXSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIExpbmVhd2Vzb21lIGljb25cclxuQG1peGluIGt0LWxhLWljb24oJGljb24pIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxpbmVBd2Vzb21lXCI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiI3skaWNvbn1cIjtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGt0LWxhLWljb24tY2hhbmdlKCRpY29uKSB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCIjeyRpY29ufVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtZmxhdGljb24yLWljb24oJGljb24pIHtcclxuICAgIGZvbnQtZmFtaWx5OiBGbGF0aWNvbjI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGNvbnRlbnQ6IFwiI3skaWNvbn1cIjtcclxufVxyXG5cclxuLy8gTGluZWF3ZXNvbWUgaWNvblxyXG5AbWl4aW4ga3QtbGEtaWNvbi1zZWxmKCRpY29uKSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMaW5lQXdlc29tZVwiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgY29udGVudDogXCIjeyRpY29ufVwiO1xyXG59XHJcblxyXG4vLyBDbG9zZSBpY29uXHJcbkBtaXhpbiBrdC1jbG9zZS1pY29uKCRzZWxmOm51bGwpIHtcclxuICAgIEBpZiAkc2VsZiA9PSB0cnVlIHtcclxuICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBjbG9zZSkgKTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24oIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBjbG9zZSkgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQXJyb3cgaWNvblxyXG5AbWl4aW4ga3QtYXJyb3ctaWNvbigkZGlyLCAkc2VsZjpudWxsKSB7XHJcbiAgICBAaWYgJGRpciA9PSBkb3duIHtcclxuICAgICAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24tc2VsZigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIGRvd24pICk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24oIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBkb3duKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGRpciA9PSB1cCB7XHJcbiAgICAgICAgQGlmICRzZWxmID09IHRydWUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCB1cCkgKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIHVwKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGRpciA9PSBsZWZ0IHtcclxuICAgICAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24tc2VsZigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIGxlZnQpICk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24oIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBsZWZ0KSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGRpciA9PSByaWdodCB7XHJcbiAgICAgICAgQGlmICRzZWxmID09IHRydWUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCByaWdodCkgKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIHJpZ2h0KSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3ZnIGljb24gY29sb3JcclxuQG1peGluIGt0LXN2Zy1pY29uLWNvbG9yKCRjb2xvcikge1xyXG4gICAgZyB7XHJcbiAgICAgICAgW2ZpbGxdIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIGZpbGw6ICRjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgZyB7XHJcbiAgICAgICAgICAgIFtmaWxsXSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQnJlYWtwb2ludCBtaXhpbnNcclxuLy8gTGF5b3V0IEJyZWFrcG9pbnRzXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLCBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcblxyXG5AbWl4aW4ga3QtbWVkaWEtYmVsb3coJHdpZHRoKSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KCR3aWR0aCl9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1tZWRpYS1hYm92ZSgkd2lkdGgpIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoJHdpZHRoKSArIDFweH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGt0LW1lZGlhLXJhbmdlKCRmcm9tLCAkdG8pIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoJGZyb20pICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCgkdG8pfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtbWluaW1hbC1kZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobGcpICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCh4bCl9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1taW5pbWFsLWRlc2t0b3AtYW5kLWJlbG93IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoeGwpfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KGxnKSArIDFweH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGt0LWRlc2t0b3AteGwge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCh4bCkgKyAxcHh9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1kZXNrdG9wLXh4bCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KHh4bCkgKyAxcHh9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1kZXNrdG9wLWFuZC10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludChtZCkgKyAxcHh9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludChtZCkgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KGxnKX0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGt0LXRhYmxldC1hbmQtbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobGcpfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobWQpfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtbW9iaWxlLXNtIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoc20pfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4ga3QtcmVzcG9uc2l2ZS1iZWxvdygkd2lkdGgpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR3aWR0aH0pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBrdC1yZXNwb25zaXZlLWFib3ZlKCR3aWR0aCkge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHdpZHRofSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGt0LXJlc3BvbnNpdmUtcmFuZ2UoJGZyb20sICR0bykge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGZyb219KSBhbmQgKG1heC13aWR0aDogI3skdG99KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBsb2dpbiBjc3NcclxuQGltcG9ydCBcInNhc3MvcGFnZXMvbG9naW4vbG9naW4tMVwiO1xyXG5cclxua3QtYXV0aCwgLmt0LWxvZ2luIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cdC5tYXQtZm9ybS1maWVsZCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0Ly8gYWRkIGV4dHJhIHJpZ2h0IHBhZGRpbmcgd2hlbiBkaXNwbGF5aW5nIHNwaW5uZXIgaW4gYnV0dG9uXHJcblx0Lmt0LXNwaW5uZXIge1xyXG5cdFx0cGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHJcbn1cclxuLmt0LWxvZ2luX19sb2dve1xyXG5cdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/auth/auth.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/pages/auth/auth.component.ts ***!
  \****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");

// Angular

// Layout

// Auth



var AuthComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el
     * @param render
     * @param layoutConfigService: LayoutConfigService
     * @param authNoticeService: authNoticeService
     * @param translationService: TranslationService
     * @param splashScreenService: SplashScreenService
     */
    function AuthComponent(el, render, layoutConfigService, authNoticeService, translationService, splashScreenService, title) {
        this.el = el;
        this.render = render;
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        // Public properties
        this.title = _helper_page_title__WEBPACK_IMPORTED_MODULE_5__["APPNAME"];
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AuthComponent.prototype.ngOnInit = function () {
        this.translationService.setLanguage(this.translationService.getSelectedLanguage());
        this.headerLogo = this.layoutConfigService.getLogo();
        this.splashScreenService.hide();
    };
    /**
     * Load CSS for this specific page only, and destroy when navigate away
     * @param styleUrl
     */
    AuthComponent.prototype.loadCSS = function (styleUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var styleElement = document.createElement('link');
            styleElement.href = styleUrl;
            styleElement.type = 'text/css';
            styleElement.rel = 'stylesheet';
            styleElement.onload = resolve;
            _this.render.appendChild(_this.el.nativeElement, styleElement);
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] },
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthNoticeService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["TranslationService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SplashScreenService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/auth.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/views/pages/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"],
            _core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthNoticeService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["TranslationService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SplashScreenService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/auth/auth.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/auth/auth.module.ts ***!
  \*************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ "./src/app/views/pages/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/pages/auth/login/login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/views/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/views/pages/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-notice/auth-notice.component */ "./src/app/views/pages/auth/auth-notice/auth-notice.component.ts");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");

// Angular




// Material

// CRUD
// Module components





// Auth


var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            },
            {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
            },
            {
                path: 'reset-password/:token',
                component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]
            }
        ]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
            ],
            providers: [
                // InterceptService,
                // {
                // 	provide: HTTP_INTERCEPTORS,
                // 	useClass: InterceptService,
                // 	multi: true
                // },
                _core_auth__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _core_auth__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
            ],
            exports: [_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"]],
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_10__["AuthNoticeComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/views/pages/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

// Angular




// Auth



var ForgotPasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authService
     * @param authNoticeService
     * @param translate
     * @param router
     * @param fb
     * @param cdr
     */
    function ForgotPasswordComponent(authService, authNoticeService, toastr, router, fb, cdr) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.toastr = toastr;
        this.router = router;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.submitted1 = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.buildForgotPasswordForm();
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].site_logo;
    };
    /**
     * On destroy
     */
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    ForgotPasswordComponent.prototype.buildForgotPasswordForm = function () {
        /** build forhetpassword form */
        this.forgotPasswordForm = this.fb.group({
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    /**
     * Form Submit
     */
    ForgotPasswordComponent.prototype.forgotPass = function () {
        var _this = this;
        this.submitted1 = true;
        if (this.forgotPasswordForm.valid) {
            var formData = {
                'user_email': this.forgotPasswordForm.value.user_email
            };
            /**forget password api call */
            this.authService.forgotPassword(formData).subscribe(function (data) {
                /** check api responce success or not  */
                if (data['code'] === 200) {
                    _this.toastr.success(data['message']);
                    /** Open login form */
                    _this.router.navigateByUrl('/auth/login');
                    _this.forgotPasswordForm.patchValue({ email: '' }); // clean the form value
                    _this.submitted1 = false;
                }
                else {
                    _this.toastr.error(data['message']);
                }
            });
        }
        else {
            return false;
        }
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_5__["AuthNoticeService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/forgot-password/forgot-password.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _core_auth__WEBPACK_IMPORTED_MODULE_5__["AuthNoticeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/auth/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/auth/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../roles/roles.service */ "./src/app/views/pages/roles/roles.service.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

// Angular





// Auth








var LoginComponent = /** @class */ (function () {
    // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    /**
     * Component constructor
     *
     * @param router: Router
     * @param auth: AuthService
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     * @param route
     */
    function LoginComponent(router, auth, route, toastr, localStorageService, store, formBuilder, roleService, title) {
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.toastr = toastr;
        this.localStorageService = localStorageService;
        this.store = store;
        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.loading = false;
        this.errors = [];
        this.submitted = false;
        title.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_8__["titles"].login);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].site_logo;
        this.initLoginForm();
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
        // // redirect back to the returnUrl before login
        this.route.queryParams.subscribe(function (params) {
            _this.returnUrl = params.returnUrl || 'dashboard';
        });
    };
    /**
     * Form initalization
     * Default params, validators
     */
    LoginComponent.prototype.initLoginForm = function () {
        /** Build signup form */
        this.loginForm = this.formBuilder.group({
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_12__["validataion"].passwordRegEx)]],
        });
    };
    /**
     * Form Submit
     */
    LoginComponent.prototype.submit = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.submitted = true;
        var result = this.loginForm.value;
        /** check form */
        if (this.loginForm.invalid) {
            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
            return;
        }
        else {
            this.loading = true;
            this.auth
                .login(result.user_email, result.user_password).subscribe(function (data) {
                if (data['code'] === 200) {
                    var result_1 = data['data']['user'];
                    _this.localStorageService.setToken(result_1.user_jwt);
                    var setObj = {
                        _id: result_1._id,
                        user_profileImage: result_1.user_profileImage && result_1.user_profileImage != null ? result_1.user_profileImage : '',
                        user_fullName: result_1.user_fullName ? result_1.user_fullName : result_1.user_firstName + ' ' + result_1.user_lastName,
                        user_isdCode: result_1.user_isdCode,
                        user_phoneNumber: result_1.user_phoneNumber,
                        user_email: result_1.user_email,
                        user_roleId: result_1.user_roleId,
                        user_status: result_1.user_status,
                        user_firstName: result_1.user_firstName,
                        user_lastName: result_1.user_lastName,
                        user_countryId: result_1.user_countryId,
                    };
                    _this.localStorageService.setCurruntUser(setObj);
                    _this.setSessionPermissionArray(setObj);
                    var obj = {
                        usr_email: _this.loginForm.value.usr_email,
                        usr_password: window.btoa(_this.loginForm.value.usr_password),
                    };
                    if (_this.loginForm.value.remember) {
                        _this.localStorageService.setRemeberMe(obj);
                    }
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.success(data['message']);
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.error(data['message']);
                }
            }, function (error) {
                console.log('********************************', error);
                if (error.status == 0) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.error("Connection Error...!!!");
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.error(error.error.message);
                }
            });
        }
    };
    LoginComponent.prototype.setSessionPermissionArray = function (user) {
        var _this = this;
        if (user && user.user_roleId != "") {
            this.roleService.getRoleWisePermissions(user.user_roleId).subscribe(function (data) {
                if (data['code']) {
                    _this.localStorageService.setBehaviorView(data['data'].permissions);
                }
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalstorageService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _roles_roles_service__WEBPACK_IMPORTED_MODULE_11__["RolesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalstorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _roles_roles_service__WEBPACK_IMPORTED_MODULE_11__["RolesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/auth/reset-password/reset-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

// Angular



// Auth




var ResetPasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authNoticeService: AuthNoticeService
     * @param router: Router
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     */
    function ResetPasswordComponent(toastr, router, auth, fb, route) {
        this.toastr = toastr;
        this.router = router;
        this.auth = auth;
        this.fb = fb;
        this.route = route;
        this.loading = false;
        this.submitted = false;
    }
    /**
     * On init
     */
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].site_logo;
        this.buildResetPassForm();
        this.token = {
            Authorization: this.route.snapshot.paramMap.get('token')
        };
        this.auth.authToken(this.token['Authorization']).subscribe(function (result) {
            if (result['data'] != null) {
                if (result['data'].blt_token === _this.route.snapshot.paramMap.get('token')) {
                    _this.toastr.error('Link has been expired');
                    // TODO ----  PUT ROUTER
                    // this.router.navigate(['/login']);
                }
            }
        });
        // authToken
    };
    /**
     * Form initalization
     * Default params, validators
     */
    ResetPasswordComponent.prototype.buildResetPassForm = function () {
        this.resetPassForm = this.fb.group({
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_5__["validataion"].passwordRegEx)]],
            user_confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_5__["validataion"].passwordRegEx)]]
        });
    };
    ResetPasswordComponent.prototype.ResetPassword = function () {
        var _this = this;
        this.submitted = true;
        /** Validate reset form */
        if (this.resetPassForm.valid) {
            /** If both password same than next  */
            if (this.resetPassForm.value.user_password === this.resetPassForm.value.user_confirm_password) {
                this.auth.resetPassword(this.token, this.resetPassForm.value)
                    .subscribe(function (data) {
                    if (data['code'] === 200) {
                        _this.router.navigate(['/login']);
                        _this.toastr.success(data['message']);
                    }
                    else {
                        _this.toastr.error(data['message']);
                    }
                });
            }
            else {
                this.toastr.error('password does not match');
            }
        }
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/auth/reset-password/reset-password.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-auth-auth-module.js.map