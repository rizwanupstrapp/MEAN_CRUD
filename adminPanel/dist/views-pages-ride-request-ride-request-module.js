(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-ride-request-ride-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'RIDE_REQUEST.LIST' | translate }}</h3>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n               <table class=\"table table-striped- table-bordered ride-reqst_mangmt_tbl table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n               </table>\n           </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-request/ride-request.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ride-request/ride-request.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'RIDE_REQUEST.VIEW' | translate }} </h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/ride-request/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"viewRideRequestForm\" [formGroup]=\"viewRideRequestForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.RIDER_ID' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_ride_id }}\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.USER_NAME' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_user_name }}\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.DRIVER_NAME' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_driver_name }}\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.OPERATOR_NAME' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_operator_name }}\n                            </label>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven\">\n                                {{'RIDE_REQUEST.LABEL.COUNTRY_NAME' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" [(ngModel)]=\"country\"\n                                type=\"text\" formControlName=\"rideRequest_country_name\" disabled>\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.CITY_NAME' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_city_name }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.PICKUP_LOCATION' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_pickup_location }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.DROPOFF_LOCATION' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_dropoff_location }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.SERVICE_TYPE' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_service_type }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.RIDE_CREATED_ON' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_createdOn}}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.RIDE_COMPLETED_DATE' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\" >\n                                {{ rideRequest_ride_complete_date}}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.PICKUP_WAITING_TIME' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_ride_pickup_waiting_time }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.RIDE_DISTANCE' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_ride_distance }}\n                            </label>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.PAYMENT_METHOD' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_payment_method }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.PAYMENT_STATUS' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_payment_status }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven\">\n                                {{'RIDE_REQUEST.LABEL.RIDE_TIP' | translate }}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\" type=\"text\"\n                                formControlName=\"rideRequest_tip\" disabled>\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.TOTALE_FARE_COIN' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven\">\n                                {{ rideRequest_approx_fare_coin }}\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.RIDE_STATUS' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRequest_ride_status }}\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <!-- <select class=\"form-control m-input\" id=\"specific\" formControlName=\"rideRequest_ride_status\"\n                                disabled>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.INPROGRESS' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.INPROGRESS' | translate}}</option>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.ONTHEWAY' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.ONTHEWAY' | translate}}</option>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.PICKUP_POINT' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.PICKUP_POINT' | translate}}</option>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.ONRIDE' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.ONRIDE' | translate}}</option>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.COMPLETED' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.COMPLETED' | translate}}</option>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.CANCELLED' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.CANCELLED' | translate}}</option>\n                                <option value=\"{{'RIDE_REQUEST.LABEL.AUTO_CANCELLED' | translate}}\">\n                                    {{'RIDE_REQUEST.PLACEHOLDERS.AUTO_CANCELLED' | translate}}</option>\n                            </select> -->\n\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\" *ngIf=\"!forRefundHide\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_REQUEST.LABEL.RIDE_CANCEL_REASON' | translate }} :\n                            </label>\n                            <label for=\"example-text-input\"  (change)=\"selectInput($event)\" class=\"col-form-label\">\n                                {{ rideRequest_ride_cancel_reason_other }}\n                            </label>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'RIDE_RATING.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"state_status\" [ngClass]=\"{'is-invalid': submitted && addEditRideRequestForm.controls.state_status.errors}\">\n                                <option value=\"{{'STATE.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'STATE.LABEL.ACTIVE' | translate}}</option>\n                                <option value=\"{{'STATE.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'STATE.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n\n                        </div>\n                    </div> -->\n                </div>\n                <!-- <div class=\"form-group row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/state/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate}}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">{{'BUTTONS.SUBMIT' | translate}}</button>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </form>\n    </div>\n</div>"

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

/***/ "./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrlbl_table {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcmlkZS1yZXF1ZXN0L3JpZGUtcmVxdWVzdC1saXN0L3JpZGUtcmVxdWVzdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9yaWRlLXJlcXVlc3QvcmlkZS1yZXF1ZXN0LWxpc3QvcmlkZS1yZXF1ZXN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NybGJsX3RhYmxlIHtvdmVyZmxvdy14OiBhdXRvO30iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RideRequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestListComponent", function() { return RideRequestListComponent; });
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
    // return the global native browser window object
    return window;
}
var RideRequestListComponent = /** @class */ (function () {
    function RideRequestListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.RIDE_REQUEST_CONST = [];
        // searchObj = { field: 'state_name', state_status: '', search: '' };
        this.searchObj = {
            field: "user_displayName",
            search: "",
        };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.RIDE_REQUEST_CONST = this.translate.instant('RIDE_REQUEST');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_REQUEST'));
        titleService.setTitle(this.APPNAME + " | " + this.RIDE_REQUEST_CONST.MODULE_NAME);
    }
    RideRequestListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.view = this.view.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    RideRequestListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDE_REQUEST.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDE_REQUEST.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    RideRequestListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    RideRequestListComponent.prototype.toTitleCase = function (str) {
        if (str) {
            return str.replace(/\S+/g, function (str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase(); });
        }
        else {
            return "-";
        }
    };
    RideRequestListComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-ride-request-list', scripts).then(function () {
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
                    sProcessing: that.RIDE_REQUEST_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listRideRequest,
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
                        title: that.RIDE_REQUEST_CONST.LABEL.SR_NO, data: null,
                    },
                    { title: that.RIDE_REQUEST_CONST.LABEL.RIDER_ID, data: 'rideRequest_ride_id' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.USER_NAME, data: 'user_displayName' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.DRIVER_NAME, data: 'rideRequest_driverName' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.FARE_AMOUNT, data: 'rideRequest_approx_fare_coin' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.RIDE_KM, data: 'rideRequest_ride_distance' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.STATUS, data: 'rideRequest_ride_status' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.CREATED_ON, data: 'rideRequest_createdOn' },
                    // { title: that.RIDE_REQUEST_CONST.LABEL.MODIFIED_ON, data: 'rideRequest_modifyOn' },
                    { title: that.RIDE_REQUEST_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.RIDE_REQUEST_CONST.LABEL.SR_NO:
                                break;
                            case that.RIDE_REQUEST_CONST.LABEL.RIDER_ID:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_REQUEST_CONST.LABEL.USER_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_REQUEST_CONST.LABEL.DRIVER_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_REQUEST_CONST.LABEL.FARE_AMOUNT:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_REQUEST_CONST.LABEL.RIDE_KM:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_REQUEST_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=1>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.ONTHEWAY + "</option>\n                  <option value=2>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.PICKUP_POINT + "</option>\n                  <option value=3>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.ONRIDE + "</option>\n                  <option value=4>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.COMPLETED + "</option>\n                  <option value=5>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.CANCELLED + "</option>\n                  <option value=6>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.AUTO_CANCELLED + "</option>\n                  <option value=0>" + that.RIDE_REQUEST_CONST.PLACEHOLDERS.INPROGRESS + "</option>\n                  </select>\n                  "));
                                break;
                            // case that.RIDE_REQUEST_CONST.LABEL.CREATED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            // case that.RIDE_REQUEST_CONST.LABEL.MODIFIED_ON:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.RIDE_REQUEST_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                      margin-left: 10px !important; margin-top: 0px !important;\">\n                            <span>\n                              <i class=\"la la-search\"></i>\n                              <span>" + that.RIDE_REQUEST_CONST.BUTTONS.SEARCH + "</span>\n                            </span>\n                          </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                      margin-left: 10px !important; margin-top: 0px !important;\">\n                            <span>\n                              <i class=\"la la-close\"></i>\n                              <span>" + that.RIDE_REQUEST_CONST.BUTTONS.RESET + "</span>\n                            </span>\n                          </button>");
                                $('<th>').append(search).append(reset).appendTo(rowFilter);
                                $(search).on('click', function (e) {
                                    e.preventDefault();
                                    var params = {};
                                    $(rowFilter)
                                        .find('.kt-input')
                                        .each(function () {
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
                                    $(rowFilter).find('.kt-input')
                                        .each(function (i) {
                                        $(this).val('');
                                        table
                                            .column($(this).data('col-index'))
                                            .search('', false, false);
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
                            var viewBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnView" data-id="' + id + '" onclick="window.my.notimgmt.view(this)" title="View details">\
										<i class="la la-eye"></i> </a>\
									';
                            return viewBtn;
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
                            if (t.user_displayName == ' ') {
                                return '-';
                            }
                            else {
                                return that.toTitleCase(t.user_displayName);
                            }
                        }
                    },
                    {
                        targets: 3,
                        width: '20%',
                        render: function (a, e, t, n) {
                            if (t.rideRequest_driverName == " ") {
                                return '-';
                            }
                            else {
                                return that.toTitleCase(t.rideRequest_driverName);
                            }
                        }
                    }, {
                        targets: 4,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a || '-';
                        }
                    }, {
                        targets: 5,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a || '-';
                        }
                    },
                    {
                        targets: 6,
                        width: '10%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                0: { 'title': 'InProgress', 'class': 'kt-badge--success' },
                                1: { 'title': 'On The Way', 'class': 'kt-badge--success' },
                                2: { 'title': 'Pick Up Point', 'class': 'kt-badge--success' },
                                3: { 'title': 'On Ride', 'class': 'kt-badge--successr' },
                                4: { 'title': 'Completed', 'class': 'kt-badge--success' },
                                5: { 'title': 'Cancelled', 'class': 'kt-badge--danger' },
                                6: { 'title': 'Auto Cancelled', 'class': 'kt-badge--danger' },
                            };
                            // return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.rideRequest_ride_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.rideRequest_ride_status].title + '</span>';
                            return '<span style="cursor:Pointer"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.rideRequest_ride_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.rideRequest_ride_status].title + '</span>';
                        }
                    },
                    {
                        targets: 7,
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
    RideRequestListComponent.prototype.view = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/ride-request/view/' + this.id]);
    };
    RideRequestListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    RideRequestListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    RideRequestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ride-request-list',
            template: __webpack_require__(/*! raw-loader!./ride-request-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.html"),
            styles: [__webpack_require__(/*! ./ride-request-list.component.scss */ "./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], RideRequestListComponent);
    return RideRequestListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-request/ride-request.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/ride-request/ride-request.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JpZGUtcmVxdWVzdC9yaWRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/ride-request/ride-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/ride-request/ride-request.component.ts ***!
  \********************************************************************/
/*! exports provided: RideRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestComponent", function() { return RideRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var RideRequestComponent = /** @class */ (function () {
    function RideRequestComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].RIDE_REQUEST);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].rideRequestManagement);
    }
    RideRequestComponent.prototype.ngOnInit = function () {
    };
    RideRequestComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    RideRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ride-request',
            template: __webpack_require__(/*! raw-loader!./ride-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-request/ride-request.component.html"),
            styles: [__webpack_require__(/*! ./ride-request.component.scss */ "./src/app/views/pages/ride-request/ride-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], RideRequestComponent);
    return RideRequestComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-request/ride-request.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/ride-request/ride-request.module.ts ***!
  \*****************************************************************/
/*! exports provided: RideRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestModule", function() { return RideRequestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ride_request_list_ride_request_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ride-request-list/ride-request-list.component */ "./src/app/views/pages/ride-request/ride-request-list/ride-request-list.component.ts");
/* harmony import */ var _view_ride_request_view_ride_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-ride-request/view-ride-request.component */ "./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.ts");
/* harmony import */ var _ride_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ride-request.component */ "./src/app/views/pages/ride-request/ride-request.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_ride_request_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/ride-request.effects */ "./src/app/views/pages/ride-request/state/ride-request.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_ride_request_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/ride-request.reducer */ "./src/app/views/pages/ride-request/state/ride-request.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _ride_request_component__WEBPACK_IMPORTED_MODULE_5__["RideRequestComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _ride_request_list_ride_request_list_component__WEBPACK_IMPORTED_MODULE_3__["RideRequestListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].RIDE_REQUEST.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'view/:id',
                component: _view_ride_request_view_ride_request_component__WEBPACK_IMPORTED_MODULE_4__["ViewRideRequestComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].RIDE_REQUEST.READ,
                    mainModulePermission: menuPermision
                }
            },
        ]
    }
];
var RideRequestModule = /** @class */ (function () {
    function RideRequestModule() {
    }
    RideRequestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ride_request_component__WEBPACK_IMPORTED_MODULE_5__["RideRequestComponent"],
                _ride_request_list_ride_request_list_component__WEBPACK_IMPORTED_MODULE_3__["RideRequestListComponent"],
                _view_ride_request_view_ride_request_component__WEBPACK_IMPORTED_MODULE_4__["ViewRideRequestComponent"]
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_state_ride_request_effects__WEBPACK_IMPORTED_MODULE_12__["RideRequestEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("ride-request", _state_ride_request_reducer__WEBPACK_IMPORTED_MODULE_15__["RideRequestReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]
            ]
        })
    ], RideRequestModule);
    return RideRequestModule;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-request/ride-request.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/ride-request/ride-request.service.ts ***!
  \******************************************************************/
/*! exports provided: RideRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestService", function() { return RideRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api-constants */ "./src/api-constants.ts");





var RideRequestService = /** @class */ (function () {
    function RideRequestService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
    }
    RideRequestService.prototype.getRideRequestById = function (id) {
        return this.http.get(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].getRideRequestById + '/' + id, this.localStorageService.getHeader());
    };
    RideRequestService.prototype.updateRideRequest = function (id, data) {
        return this.http.put(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].updateRideRequest + '/' + id, data, this.localStorageService.getHeader());
    };
    RideRequestService.prototype.updateStatus = function (id, data) {
        return this.http.put(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].updateRideRequestStatus + '/' + id, data, this.localStorageService.getHeader());
    };
    RideRequestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }
    ]; };
    RideRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], RideRequestService);
    return RideRequestService;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-request/state/ride-request.actions.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/state/ride-request.actions.ts ***!
  \************************************************************************/
/*! exports provided: RideRequestActionTypes, LoadRideRequest, LoadRideRequestSuccess, LoadRideRequestFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, UpdateRideRequest, UpdateRideRequestSuccess, UpdateRideRequestFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestActionTypes", function() { return RideRequestActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRideRequest", function() { return LoadRideRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRideRequestSuccess", function() { return LoadRideRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRideRequestFail", function() { return LoadRideRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRideRequest", function() { return UpdateRideRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRideRequestSuccess", function() { return UpdateRideRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRideRequestFail", function() { return UpdateRideRequestFail; });
var RideRequestActionTypes;
(function (RideRequestActionTypes) {
    RideRequestActionTypes["UPDATE_STATUS"] = "[RIDE_REQUEST] Update Status";
    RideRequestActionTypes["UPDATE_STATUS_SUCCESS"] = "[RIDE_REQUEST]  Update Status Success";
    RideRequestActionTypes["UPDATE_STATUS_FAIL"] = "[RIDE_REQUEST]  Update Status Fail";
    RideRequestActionTypes["LOAD_RIDE_REQUEST"] = "[RIDE_REQUEST] Load Ride Request";
    RideRequestActionTypes["LOAD_RIDE_REQUEST_SUCCESS"] = "[RIDE_REQUEST] Load Ride Request Success";
    RideRequestActionTypes["LOAD_RIDE_REQUEST_FAIL"] = "[RIDE_REQUEST] Load Ride Request Fail";
    RideRequestActionTypes["UPDATE_RIDE_REQUEST"] = "[RIDE_REQUEST] Update Ride Request";
    RideRequestActionTypes["UPDATE_RIDE_REQUEST_SUCCESS"] = "[RIDE_REQUEST] Update Ride Request Success";
    RideRequestActionTypes["UPDATE_RIDE_REQUEST_FAIL"] = "[RIDE_REQUEST] Update Ride Request Fail";
})(RideRequestActionTypes || (RideRequestActionTypes = {}));
var LoadRideRequest = /** @class */ (function () {
    function LoadRideRequest(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.LOAD_RIDE_REQUEST;
    }
    LoadRideRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRideRequest;
}());

var LoadRideRequestSuccess = /** @class */ (function () {
    function LoadRideRequestSuccess(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.LOAD_RIDE_REQUEST_SUCCESS;
    }
    LoadRideRequestSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRideRequestSuccess;
}());

var LoadRideRequestFail = /** @class */ (function () {
    function LoadRideRequestFail(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.LOAD_RIDE_REQUEST_FAIL;
    }
    LoadRideRequestFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRideRequestFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var UpdateRideRequest = /** @class */ (function () {
    function UpdateRideRequest(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.UPDATE_RIDE_REQUEST;
    }
    UpdateRideRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRideRequest;
}());

var UpdateRideRequestSuccess = /** @class */ (function () {
    function UpdateRideRequestSuccess(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.UPDATE_RIDE_REQUEST_SUCCESS;
    }
    UpdateRideRequestSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRideRequestSuccess;
}());

var UpdateRideRequestFail = /** @class */ (function () {
    function UpdateRideRequestFail(payload) {
        this.payload = payload;
        this.type = RideRequestActionTypes.UPDATE_RIDE_REQUEST_FAIL;
    }
    UpdateRideRequestFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRideRequestFail;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-request/state/ride-request.effects.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/state/ride-request.effects.ts ***!
  \************************************************************************/
/*! exports provided: RideRequestEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestEffect", function() { return RideRequestEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ride-request.actions */ "./src/app/views/pages/ride-request/state/ride-request.actions.ts");
/* harmony import */ var _ride_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ride-request.service */ "./src/app/views/pages/ride-request/ride-request.service.ts");







var RideRequestEffect = /** @class */ (function () {
    function RideRequestEffect(actions$, RideRequestService) {
        var _this = this;
        this.actions$ = actions$;
        this.RideRequestService = RideRequestService;
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["RideRequestActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.RideRequestService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateRideRequestData) {
                return new _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](updateRideRequestData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadRideRequest$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["RideRequestActionTypes"].LOAD_RIDE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.RideRequestService.getRideRequestById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRideRequestSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRideRequestFail"](err));
            }));
        }));
        this.updateRideRequest$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["RideRequestActionTypes"].UPDATE_RIDE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.RideRequestService.updateRideRequest(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateRideRequestData) {
                return new _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRideRequestSuccess"](updateRideRequestData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_request_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRideRequestFail"](err)); }));
        }));
    }
    RideRequestEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ride_request_service__WEBPACK_IMPORTED_MODULE_6__["RideRequestService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRequestEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRequestEffect.prototype, "loadRideRequest$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRequestEffect.prototype, "updateRideRequest$", void 0);
    RideRequestEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ride_request_service__WEBPACK_IMPORTED_MODULE_6__["RideRequestService"]])
    ], RideRequestEffect);
    return RideRequestEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-request/state/ride-request.reducer.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/state/ride-request.reducer.ts ***!
  \************************************************************************/
/*! exports provided: initialState, RideRequestReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRequestReducer", function() { return RideRequestReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ride-request.actions */ "./src/app/views/pages/ride-request/state/ride-request.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function RideRequestReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Ride Request load-----------------------------
        case _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__["RideRequestActionTypes"].LOAD_RIDE_REQUEST_SUCCESS: {
            return action.payload;
        }
        case _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__["RideRequestActionTypes"].LOAD_RIDE_REQUEST_FAIL: {
            return action.payload.error;
        }
        // for Ride Request upadat status-----------------------------
        case _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__["RideRequestActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__["RideRequestActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Ride Request update-----------------------------
        case _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__["RideRequestActionTypes"].UPDATE_RIDE_REQUEST_SUCCESS: {
            return action.payload;
        }
        case _ride_request_actions__WEBPACK_IMPORTED_MODULE_0__["RideRequestActionTypes"].UPDATE_RIDE_REQUEST_FAIL: {
            return action.payload.error;
        }
    }
}
var getRideRequestState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("ride-request");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getRideRequestState, function (state) { return state; } // return error message
);


/***/ }),

/***/ "./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fw-seven {\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcmlkZS1yZXF1ZXN0L3ZpZXctcmlkZS1yZXF1ZXN0L3ZpZXctcmlkZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9yaWRlLXJlcXVlc3Qvdmlldy1yaWRlLXJlcXVlc3Qvdmlldy1yaWRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnctc2V2ZW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewRideRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRideRequestComponent", function() { return ViewRideRequestComponent; });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_ride_request_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/ride-request.actions */ "./src/app/views/pages/ride-request/state/ride-request.actions.ts");
/* harmony import */ var _state_ride_request_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/ride-request.reducer */ "./src/app/views/pages/ride-request/state/ride-request.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _driver_management_driver_management_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../driver-management/driver-management.service */ "./src/app/views/pages/driver-management/driver-management.service.ts");
/* harmony import */ var _operator_operator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../operator/operator.service */ "./src/app/views/pages/operator/operator.service.ts");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _service_type_service_type_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../service-type/service-type.service */ "./src/app/views/pages/service-type/service-type.service.ts");





















var ViewRideRequestComponent = /** @class */ (function () {
    function ViewRideRequestComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, driverService, operatorService, countryService, cityService, serviceTypeService, datepipe) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.driverService = driverService;
        this.operatorService = operatorService;
        this.countryService = countryService;
        this.cityService = cityService;
        this.serviceTypeService = serviceTypeService;
        this.datepipe = datepipe;
        this.submitted = false;
        this.element = false;
        this.users = [];
        this.operator = [];
        this.country = [];
        this.city = [];
        this.serviceType = [];
        this.RIDE_REQUEST_CONST = this.translate.instant('RIDE_REQUEST');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_REQUEST'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.RIDE_REQUEST_CONST.MODULE_NAME);
    }
    ViewRideRequestComponent.prototype.ngOnInit = function () {
        this.buildViewRideRequestForm();
        this.getRideRequestDetails();
    };
    ViewRideRequestComponent.prototype.buildViewRideRequestForm = function () {
        this.viewRideRequestForm = this._formBuilder.group({
            rideRequest_ride_id: [""],
            rideRequest_user_name: [""],
            rideRequest_driver_name: [""],
            rideRequest_operator_name: [""],
            rideRequest_country_name: [""],
            rideRequest_city_name: [""],
            rideRequest_pickup_location: [""],
            rideRequest_dropoff_location: [""],
            rideRequest_ride_status: [""],
            rideRequest_service_type: [""],
            rideRequest_createdOn: [""],
            rideRequest_ride_complete_date: [""],
            rideRequest_ride_pickup_waiting_time: [""],
            rideRequest_ride_distance: [""],
            rideRequest_tip: [""],
            rideRequest_approx_fare_coin: [""],
            rideRequest_payment_method: [""],
            rideRequest_ride_cancel_reason_other: [""],
            rideRequest_payment_status: [""]
        });
    };
    ViewRideRequestComponent.prototype.getDriverDetail = function (driverId) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        if (driverId == null) {
            // this.viewRideRequestForm.patchValue({
            //   rideRequest_driver_name: "-"
            // })
            this.rideRequest_driver_name = "Not Assigned";
        }
        else {
            this.driverService.getDriverById(driverId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            this.users = data['data'];
                            // this.users = this.users.user_firstName + " " + this.users.user_lastName
                            this.rideRequest_driver_name = this.users.user_firstName + " " + this.users.user_lastName;
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
        }
    };
    ViewRideRequestComponent.prototype.getOperatorDetail = function (operatorId) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.operatorService.getOperatorById(operatorId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.operator = data['data'];
                        this.rideRequest_operator_name = this.operator.user_operatorInfo.operatorName ? this.operator.user_operatorInfo.operatorName : "";
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
    ViewRideRequestComponent.prototype.getCountryDetail = function (countryId) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.countryService.getCountryById(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.country = data['data'];
                        this.country = this.country.country_name.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].webDefaultLang; })[0].title;
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
    ViewRideRequestComponent.prototype.getCityDetail = function (cityId) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.cityService.getCityById(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.city = data['data'];
                        this.rideRequest_city_name = this.city.city_name.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].webDefaultLang; })[0].title;
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
    ViewRideRequestComponent.prototype.getServiceTypeDetail = function (serviceTypeId) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.serviceTypeService.getServiceTypeById(serviceTypeId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.serviceType = data['data'];
                        // this.serviceType = this.serviceType.serviceType_name.filter((obj) => obj.lang == environment.webDefaultLang)[0].title
                        this.rideRequest_service_type = this.serviceType.serviceType_name.filter(function (obj) { return obj.lang == _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].webDefaultLang; })[0].title;
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
    ViewRideRequestComponent.prototype.getRideRequestDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_ride_request_actions__WEBPACK_IMPORTED_MODULE_12__["LoadRideRequest"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_ride_request_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 7];
                        if (!(data['code'] == 200)) return [3 /*break*/, 6];
                        result = data['data'];
                        this.rideRequest_ride_id = result.rideRequest_ride_id,
                            this.rideRequest_user_name = result.rideRequest_first_name + " " + result.rideRequest_last_name,
                            this.rideRequest_pickup_location = result.rideRequest_pickup_location,
                            this.rideRequest_dropoff_location = result.rideRequest_dropoff_location,
                            this.rideRequest_createdOn = new Date(result.rideRequest_createdOn).toDateString() + ", " + new Date(result.rideRequest_createdOn).toLocaleTimeString(),
                            this.rideRequest_createdOn = this.datepipe.transform(this.rideRequest_createdOn, 'MMM d, y, h:mm a');
                        this.rideRequest_approx_fare_coin = result.rideRequest_approx_fare_coin,
                            this.rideRequest_ride_distance = result.rideRequest_ride_distance,
                            this.rideRequest_tip = result.rideRequest_tip,
                            this.rideRequest_payment_method = result.rideRequest_payment_method,
                            this.rideRequest_payment_status = result.rideRequest_payment_status;
                        // this.rideRequest_ride_cancel_reason_other = result.rideRequest_ride_cancel_reason_other
                        if (result.rideRequest_ride_status == 0) {
                            this.rideRequest_ride_status = "INPROGRESS";
                        }
                        else if (result.rideRequest_ride_status == 1) {
                            this.rideRequest_ride_status = "ONTHEWAY";
                        }
                        else if (result.rideRequest_ride_status == 2) {
                            this.rideRequest_ride_status = "PICKUP_POINT";
                        }
                        else if (result.rideRequest_ride_status == 3) {
                            this.rideRequest_ride_status = "ONRIDE";
                        }
                        else if (result.rideRequest_ride_status == 4) {
                            this.rideRequest_ride_status = "COMPLETED";
                        }
                        else if (result.rideRequest_ride_status == 5) {
                            this.rideRequest_ride_status = "CANCELLED";
                        }
                        else if (result.rideRequest_ride_status == 6) {
                            this.rideRequest_ride_status = "AUTO_CANCELLED";
                        }
                        if (result.rideRequest_ride_status == 0) {
                            this.rideRequest_ride_complete_date = '-';
                        }
                        else {
                            this.rideRequest_ride_complete_date = new Date(result.rideRequest_ride_complete_date);
                            if (result.rideRequest_ride_complete_date) {
                                this.rideRequest_ride_complete_date = this.datepipe.transform(this.rideRequest_ride_complete_date, 'MMM d, y, h:mm a');
                            }
                            else {
                                this.rideRequest_ride_complete_date = '-';
                            }
                        }
                        if (result.rideRequest_ride_cancel_reason_other == undefined) {
                            this.forRefundHide = true; // hide
                        }
                        else {
                            this.forRefundHide = false; // show
                            this.rideRequest_ride_cancel_reason_other = result.rideRequest_ride_cancel_reason_other;
                        }
                        if (result.rideRequest_ride_pickup_waiting_time == 0) {
                            this.rideRequest_ride_pickup_waiting_time = 0;
                        }
                        else {
                            this.rideRequest_ride_pickup_waiting_time = new Date(result.rideRequest_ride_pickup_waiting_time);
                            this.rideRequest_ride_pickup_waiting_time = this.datepipe.transform(this.rideRequest_ride_pickup_waiting_time, 'MMM d, y, h:mm a');
                        }
                        return [4 /*yield*/, this.getDriverDetail(result.rideRequest_driver_id || null)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getOperatorDetail(result.rideRequest_operator_id || [])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getCountryDetail(result.rideRequest_country_id || [])];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getCityDetail(result.rideRequest_city_id || [])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getServiceTypeDetail(result.rideRequest_service_id || [])
                            // this.viewRideRequestForm.patchValue(fd);
                        ];
                    case 5:
                        _a.sent();
                        // this.viewRideRequestForm.patchValue(fd);
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 7];
                    case 6:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    ViewRideRequestComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _driver_management_driver_management_service__WEBPACK_IMPORTED_MODULE_16__["DriverManagementService"] },
        { type: _operator_operator_service__WEBPACK_IMPORTED_MODULE_17__["OperatorService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_18__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_19__["CityService"] },
        { type: _service_type_service_type_service__WEBPACK_IMPORTED_MODULE_20__["ServiceTypeService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }
    ]; };
    ViewRideRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-view-ride-request',
            template: __webpack_require__(/*! raw-loader!./view-ride-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.html"),
            styles: [__webpack_require__(/*! ./view-ride-request.component.scss */ "./src/app/views/pages/ride-request/view-ride-request/view-ride-request.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _driver_management_driver_management_service__WEBPACK_IMPORTED_MODULE_16__["DriverManagementService"],
            _operator_operator_service__WEBPACK_IMPORTED_MODULE_17__["OperatorService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_18__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_19__["CityService"],
            _service_type_service_type_service__WEBPACK_IMPORTED_MODULE_20__["ServiceTypeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])
    ], ViewRideRequestComponent);
    return ViewRideRequestComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-ride-request-ride-request-module.js.map