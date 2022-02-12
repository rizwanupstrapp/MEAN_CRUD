(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-highDemand-area-highDemand-area-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'HIGHDEMANDAREA.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'HIGHDEMANDAREA.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/highDemand-area/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditHighDemandAreaForm\" [formGroup]=\"addEditHighDemandAreaForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- country & city -->\n                <div class=\"form-group  row\">\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.COUNTRY' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\" (change)=\"changeCountry($event.target.value)\" formControlName=\"highDemandArea_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_countryId.errors }\"\n                                *ngIf=\"isAdd\">\n                                <option value=\"\">{{'HIGHDEMANDAREA.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name }}</option>\n                            </select>\n                            <select class=\"form-control m-input\" id=\"country\" (change)=\"changeCountry($event.target.value)\" formControlName=\"highDemandArea_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_countryId.errors }\"\n                                *ngIf=\"!isAdd\" disabled>\n                                <option value=\"\">{{'HIGHDEMANDAREA.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_countryId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_countryId.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.CITY' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"city\" formControlName=\"highDemandArea_cityId\" (change)=\"changeCity($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_cityId.errors }\"\n                                *ngIf=\"isAdd\">\n                                <option value=\"\">{{'HIGHDEMANDAREA.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">{{city.city_name}}\n                                </option>\n                            </select>\n                            <select class=\"form-control m-input\" id=\"city\" formControlName=\"highDemandArea_cityId\" (change)=\"changeCity($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_cityId.errors }\"\n                                *ngIf=\"!isAdd\" disabled>\n                                <option value=\"\">{{'HIGHDEMANDAREA.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">{{city.city_name}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_cityId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_cityId.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- franchises & Status -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.FRANCHISE' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"operatorName\" formControlName=\"highDemandArea_franchiseId\" [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_franchiseId.errors }\">\n                                <option value=\"\">{{'HIGHDEMANDAREA.LABEL.SELECT_OPERATOR' | translate}}</option>\n                                <option value=\"{{operator._id}}\" *ngFor=\"let operator of operators\">\n                                    {{operator.operatorName}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_franchiseId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_franchiseId.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"highDemandArea_status\" formControlName=\"highDemandArea_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_status.errors }\">\n                                <option value=\"{{'HIGHDEMANDAREA.PLACEHOLDERS.ACTIVE' | translate}}\" selected>{{'HIGHDEMANDAREA.LABEL.ACTIVE' | translate}}</option>\n                                <option value=\"{{'HIGHDEMANDAREA.PLACEHOLDERS.INACTIVE' | translate}}\">{{'HIGHDEMANDAREA.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_status.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <table style=\"width:100%\">\n                    <tr>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.THRESHOLD_NAME' | translate}}\n                            </label>\n                        </th>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.PRICE_PERCENTAGE' | translate}}\n                            </label>\n                        </th>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.RIDE_REQUEST' | translate}}*\n                            </label>\n                        </th>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.COOL_DOWN_RIDE_REQ' | translate}}*\n                            </label>\n                        </th>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.DRIVER_SEARCH_RADIUS' | translate}}*\n                            </label>\n                        </th>\n                    </tr>\n                    <tr>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.THRESHOLD_NAME_X1' | translate}}\n                            </label>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_price_per_x1\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_price_per_x1.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_price_per_x1.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_price_per_x1.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_ride_request_x1\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_ride_request_x1.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_ride_request_x1.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_ride_request_x1.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_coolDown_rideReq_x1\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_coolDown_rideReq_x1.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_coolDown_rideReq_x1.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_coolDown_rideReq_x1.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_driver_search_radius_x1\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_driver_search_radius_x1.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_driver_search_radius_x1.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_driver_search_radius_x1.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                    </tr>\n                    <tr>\n                        <th>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'HIGHDEMANDAREA.LABEL.THRESHOLD_NAME_X2' | translate}}\n                            </label>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_price_per_x2\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_price_per_x2.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_price_per_x2.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_price_per_x2.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_ride_request_x2\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_ride_request_x2.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_ride_request_x2.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_ride_request_x2.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_coolDown_rideReq_x2\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_coolDown_rideReq_x2.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_coolDown_rideReq_x2.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_coolDown_rideReq_x2.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                        <th>\n                            <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"highDemandArea_driver_search_radius_x2\" type=\"text\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditHighDemandAreaForm.controls.highDemandArea_driver_search_radius_x2.errors }\">\n                            <div *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_driver_search_radius_x2.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditHighDemandAreaForm.controls.highDemandArea_driver_search_radius_x2.errors?.required\">\n                                    {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                </p>\n                            </div>\n                        </th>\n                    </tr>\n                </table>\n                <br>\n                <div>\n                    <button type=\"submit\" (click)=\"onAddAddress()\" class=\"btn btn-brand btn-elevate btn-icon-sm mr-3\"> {{'HIGHDEMANDAREA.BUTTONS.ADD_ADDRESS' | translate }}\n                    </button>\n                </div>\n\n                <div formArrayName=\"highDemandArea_addresses\">\n                    <div *ngFor=\"let highDemandArea_address of highDemandArea_addresses.controls; let i = index;\">\n                        <div [formGroupName]=\"i\">\n                            <div class=\"form-group  row\">\n                                <div class=\"col-lg-5\">\n                                    <div class=\"col-lg-12\">\n                                        <label for=\"example-text-input\" class=\"col-form-label\">\n                                            {{'HIGHDEMANDAREA.LABEL.ADDRESS' | translate}}*\n                                        </label>\n                                    </div>\n                                    <div class=\"col-lg-12\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"address\" type=\"test\" id=\"autoCompleteInput{{i}}\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && highDemandArea_address.controls.address.errors }\"\n                                            (keypress)=\"onAddressChange(i)\">\n                                        <div *ngIf=\"submitted && highDemandArea_address.controls.address.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                            <p *ngIf=\"submitted && highDemandArea_address.controls.address.errors?.required\">\n                                                {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-5\">\n                                    <div class=\"col-lg-12\">\n                                        <label for=\"example-text-input\" class=\"col-form-label\">\n                                            {{'HIGHDEMANDAREA.LABEL.RADIUS' | translate}}*\n                                        </label>\n                                    </div>\n                                    <div class=\"col-lg-12\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"radius\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && highDemandArea_address.controls.radius.errors } \"\n                                            (keyup)=\"onRadiusChange(i,$event.target.value)\">\n                                        <div *ngIf=\"submitted && highDemandArea_address.controls.radius.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                            <p *ngIf=\"submitted && highDemandArea_address.controls.radius.errors?.required\">\n                                                {{'HIGHDEMANDAREA.VALIDATION.FIELD_REQUIRED' | translate}}\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <div class=\"col-lg-12\">\n                                    </div>\n                                    <div class=\"col-lg-12\">\n                                        <button type=\"submit\" (click)=\"removeAddress(i)\" class=\"btn btn-brand btn-elevate btn-icon-sm mr-3 \"> {{'HIGHDEMANDAREA.BUTTONS.REMOVE_ADDRESS' | translate }}\n                                        </button>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row \">\n                    <div class=\"col-xl-12 \">\n                        <div class=\"col-xl-12 \">\n                            <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3 \">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit() \" onSubmit class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n                <div>\n                    <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\" (mapClick)=\"mapClicked($event)\"> -->\n                    <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\n\n                        <agm-marker *ngFor=\"let m of markings; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\">\n\n                            <agm-circle *ngIf=\"markings[i+1]\" [latitude]=\"markings[i+1].lat\" [longitude]=\"markings[i+1].lng\" [radius]=\"markings[i+1].rad\"\n                                [fillColor]=\"'red'\" [editable]=\"true\">\n                            </agm-circle>\n                        </agm-marker>\n                    </agm-map> -->\n                    <div *ngIf=\"addEditHighDemandAreaForm.value.highDemandArea_cityId\">\n                    <agm-map [zoom]=\"5\" [latitude]=\"lat\" [longitude]=\"lng\" (mapReady)=\"onMapReady($event)\" id='agmMap'>\n                        <agm-marker *ngFor=\"let m of markings; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\">\n                            <agm-circle *ngIf=\"markings[i+1]\" [latitude]=\"markings[i+1].lat\" [longitude]=\"markings[i+1].lng\" [radius]=\"markings[i+1].rad\"\n                                [fillColor]=\"'red'\" [editable]=\"true\">\n                            </agm-circle>\n                        </agm-marker>\n                    </agm-map>\n                    <button (click)='deleteSelected()'>Delete selected Shape</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'HIGHDEMANDAREA.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/highDemand-area/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/highDemand-area.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/highDemand-area/highDemand-area.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvaGlnaERlbWFuZC1hcmVhL2FkZC1lZGl0LWhpZ2hEZW1hbmQtYXJlYS9hZGQtZWRpdC1oaWdoRGVtYW5kLWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hpZ2hEZW1hbmQtYXJlYS9hZGQtZWRpdC1oaWdoRGVtYW5kLWFyZWEvYWRkLWVkaXQtaGlnaERlbWFuZC1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AddHighDemandAreaComponent, EditHighDemandAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHighDemandAreaComponent", function() { return AddHighDemandAreaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHighDemandAreaComponent", function() { return EditHighDemandAreaComponent; });
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
/* harmony import */ var _state_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/highDemand-area.actions */ "./src/app/views/pages/highDemand-area/state/highDemand-area.actions.ts");
/* harmony import */ var _state_highDemand_area_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/highDemand-area.reducer */ "./src/app/views/pages/highDemand-area/state/highDemand-area.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../service-operator/service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

















var AddHighDemandAreaComponent = /** @class */ (function () {
    function AddHighDemandAreaComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, cityService, ServiceOperatorService) {
        var _this = this;
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.cityService = cityService;
        this.ServiceOperatorService = ServiceOperatorService;
        this.isAdd = true;
        this.countries = [];
        this.cities = [];
        this.operators = [];
        this.submitted = false;
        this.zoom = 8;
        this.markers = [];
        this.markings = [];
        this.autoComplete = [];
        this.selectedArea = 0;
        this.highDemandArea_polygonArray = [];
        this.pointList = [];
        this.finalPointArray = [];
        this.initDrawingManager = function (map) {
            var self = _this;
            var options = {
                drawingControl: true,
                drawingControlOptions: {
                    drawingModes: ['polygon'],
                },
                polygonOptions: {
                    draggable: true,
                    editable: true,
                },
                drawingMode: google.maps.drawing.OverlayType.POLYGON,
            };
            _this.drawingManager = new google.maps.drawing.DrawingManager(options);
            _this.drawingManager.setMap(map);
            google.maps.event.addListener(_this.drawingManager, 'overlaycomplete', function (event) {
                if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                    var paths = event.overlay.getPaths();
                    for (var p = 0; p < paths.getLength(); p++) {
                        google.maps.event.addListener(paths.getAt(p), 'set_at', function () {
                            _this.setSelection(event.overlay);
                            if (!event.overlay.drag) {
                                self.updatePointList(event.overlay.getPath(), 'set_at', event.overlay.zIndex);
                            }
                        });
                        google.maps.event.addListener(paths.getAt(p), 'insert_at', function () {
                            self.updatePointList(event.overlay.getPath(), 'insert_at', event.overlay.zIndex);
                        });
                        google.maps.event.addListener(paths.getAt(p), 'remove_at', function () {
                            self.updatePointList(event.overlay.getPath(), 'remove_at', event.overlay.zIndex);
                        });
                        google.maps.event.addListener(event.overlay, 'click', function () {
                            console.log('click call');
                            _this.setSelection(event.overlay);
                        });
                    }
                    self.updatePointList(event.overlay.getPath(), 'add_at', event.overlay.zIndex);
                    _this.selectedShape = event.overlay;
                    _this.selectedShape.type = event.type;
                }
                if (event.type !== google.maps.drawing.OverlayType.MARKER) {
                    // Switch back to non-drawing mode after drawing a shape.
                    self.drawingManager.setDrawingMode(null);
                    // To hide:
                    self.drawingManager.setOptions({
                        drawingControl: true,
                        clickable: true
                    });
                    _this.setSelection(_this.selectedShape);
                }
            });
        };
        this.HIGHDEMAND_AREA_CONST = this.translate.instant("HIGHDEMANDAREA");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.HIGHDEMAND_AREA"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.HIGHDEMAND_AREA_CONST.MODULE_NAME);
    }
    AddHighDemandAreaComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                self.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry);
                self.buildAddEditHighDemandAreaForm();
                navigator.geolocation.getCurrentPosition(function (position) {
                    if (position.coords.latitude != null) {
                        self.lat = position.coords.latitude;
                        self.lng = position.coords.longitude;
                        self.markers.push({ lat: position.coords.latitude, lng: position.coords.longitude, draggable: false, rad: 0 });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AddHighDemandAreaComponent.prototype.onMapReady = function (map, callFrom) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var city, geocoder;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (callFrom != 'changeCountry') {
                            this.map = map;
                            this.initDrawingManager(map);
                        }
                        return [4 /*yield*/, this.cities.find(function (element) { return element._id == _this.addEditHighDemandAreaForm.value.highDemandArea_cityId; })];
                    case 1:
                        city = _a.sent();
                        if (city) {
                            geocoder = new google.maps.Geocoder();
                            geocoder.geocode({
                                'address': city.city_name
                            }, function (results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    var marker = new google.maps.Marker({
                                        map: map,
                                        position: results[0].geometry.location
                                    });
                                    var bounds = new google.maps.LatLngBounds();
                                    marker.setMap(map);
                                    bounds.extend(results[0].geometry.location);
                                    map.fitBounds(bounds);
                                    // map.setBounds(bounds);
                                    map.setZoom(14);
                                }
                                else {
                                    alert('Internal error: ' + status);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddHighDemandAreaComponent.prototype.onAddressChange = function (i) {
        if (document.getElementById("autoCompleteInput" + i)) {
            // var options = {
            //     types: ['(regions)'],
            //     componentRestrictions: { country: "in" }
            // };
            var input = document.getElementById("autoCompleteInput" + i);
            // const autocomplete = new google.maps.places.Autocomplete(input, options);
            var autocomplete = new google.maps.places.Autocomplete(input);
            this.autoComplete[i] = autocomplete;
        }
    };
    //set selection to a shape
    AddHighDemandAreaComponent.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
    };
    AddHighDemandAreaComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    AddHighDemandAreaComponent.prototype.deleteSelected = function () {
        if (this.selectedShape) {
            this.updatePointList(this.selectedShape.getPath(), 'delete_selected', this.selectedShape.zIndex);
            this.selectedShape.setMap(null);
        }
    };
    AddHighDemandAreaComponent.prototype.updatePointList = function (path, type, index) {
        var pointList = [];
        var len = path.getLength();
        for (var i = 0; i < len; i++) {
            pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat]);
        }
        if (type == 'add_at') {
            this.highDemandArea_polygonArray.push({ loc: { type: "Polygon", coordinates: [pointList] }, name: "Polygon" + [index] });
        }
        else if ('delete_selected') {
            var deleteIndex = this.highDemandArea_polygonArray.findIndex(function (obj) {
                return obj.name == 'Polygon' + index;
            });
            this.highDemandArea_polygonArray.splice(deleteIndex, 1);
        }
        else {}
        this.selectedArea = google.maps.geometry.spherical.computeArea(path);
    };
    AddHighDemandAreaComponent.prototype.onRadiusChange = function (i, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var place, address;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        place = this.autoComplete[i].getPlace();
                        address = this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i].address;
                        if (!address) return [3 /*break*/, 2];
                        if (!this.geocoder) {
                            this.geocoder = new google.maps.Geocoder();
                        }
                        return [4 /*yield*/, this.geocoder.geocode({
                                'address': address
                            }, function (result, status) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var res;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        if (result[0]) {
                                            res = result[0];
                                            if (result[0].geometry.location) {
                                                if (this.markers.length > 0 && this.markers.length == (i + 1)) {
                                                    this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) });
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()];
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address;
                                                }
                                                else {
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()];
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address;
                                                    this.markers[i + 1] = { lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) };
                                                }
                                                this.addEditHighDemandAreaForm.patchValue({
                                                    highDemandArea_addresses: this.addEditHighDemandAreaForm.value.highDemandArea_addresses
                                                });
                                            }
                                        }
                                        else {
                                            this.lat = 0;
                                            this.lng = 0;
                                        }
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
    // async setLocation(country, city) {
    //     if (!this.geocoder) {
    //         this.geocoder = new google.maps.Geocoder();
    //     }
    //     await this.geocoder.geocode({
    //         'address': country + ',' + city
    //     }, async (result, status) => {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             if (result[0]) {
    //                 let res = result[0];
    //                 if (result[0].geometry.location) {
    //                     this.lat = res.geometry.location.lat();
    //                     this.lng = res.geometry.location.lng();
    //                     this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: 0 })
    //                 }
    //             } else {
    //                 this.lat = 0;
    //                 this.lng = 0;
    //             }
    //         }
    //     });
    // }
    AddHighDemandAreaComponent.prototype.buildAddEditHighDemandAreaForm = function () {
        this.addEditHighDemandAreaForm = this._formBuilder.group({
            // highDemandArea_countryId: ["", [Validators.required,]],
            highDemandArea_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_franchiseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_price_per_x1: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_ride_request_x1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_coolDown_rideReq_x1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_driver_search_radius_x1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_price_per_x2: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_ride_request_x2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_coolDown_rideReq_x2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_driver_search_radius_x2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_addresses: this._formBuilder.array([this.createFields()]),
        });
    };
    // getAllCountries() {
    //     Helpers.setLoading(true);
    //     this.countryService.getAllCountries().subscribe(async (data) => {
    //         if (data && data != undefined) {
    //             if (data["code"] == 200) {
    //                 this.countries = data["data"];
    //                 if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //                     this.dtr.detectChanges();
    //                 }
    //                 Helpers.setLoading(false);
    //             } else {
    //                 Helpers.setLoading(false);
    //                 this.toastr.error(data["message"]);
    //             }
    //         }
    //     });
    // }
    AddHighDemandAreaComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // #agmMap
                        // var map = new google.maps.Map(document.getElementById('agmMap'), {
                        //     zoom: 4,
                        //     center: { lat: -25.363882, lng: 131.044922 }
                        // });
                        // this.initDrawingManager(map);
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService
                                .getCountryCities(countryId)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cities = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
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
    AddHighDemandAreaComponent.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!cityId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.operators = _b.sent();
                                            this.onMapReady(this.map, 'changeCountry');
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
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
    AddHighDemandAreaComponent.prototype.createFields = function () {
        return this._formBuilder.group({
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            coordinates: [[]],
            radius: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]]
        });
    };
    Object.defineProperty(AddHighDemandAreaComponent.prototype, "highDemandArea_addresses", {
        get: function () {
            var form = this.addEditHighDemandAreaForm;
            if (form) {
                return this.addEditHighDemandAreaForm.get('highDemandArea_addresses');
            }
        },
        enumerable: true,
        configurable: true
    });
    AddHighDemandAreaComponent.prototype.onAddAddress = function () {
        this.highDemandArea_addresses.push(this.createFields());
    };
    AddHighDemandAreaComponent.prototype.removeAddress = function (i) {
        this.highDemandArea_addresses.removeAt(i);
        this.markers.splice(i + 1, 1);
        this.autoComplete.splice(i + 1, 1);
    };
    AddHighDemandAreaComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditHighDemandAreaForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditHighDemandAreaForm.value;
                    obj = {
                        highDemandArea_country: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry,
                        highDemandArea_city: form.highDemandArea_cityId,
                        highDemandArea_operator: form.highDemandArea_franchiseId,
                        highDemandArea_status: form.highDemandArea_status,
                        highDemandArea: [],
                        highDemandArea_address: form.highDemandArea_addresses,
                        highDemandArea_polygonArray: JSON.stringify(this.highDemandArea_polygonArray)
                    };
                    obj.highDemandArea.push({
                        thresholdName: '1X',
                        pricePercentage: form.highDemandArea_price_per_x1,
                        rideRequest: form.highDemandArea_ride_request_x1,
                        coolDownRideReq: form.highDemandArea_coolDown_rideReq_x1,
                        driverSearchRadius: form.highDemandArea_driver_search_radius_x1
                    }, {
                        thresholdName: '2X',
                        pricePercentage: form.highDemandArea_price_per_x2,
                        rideRequest: form.highDemandArea_ride_request_x2,
                        coolDownRideReq: form.highDemandArea_coolDown_rideReq_x2,
                        driverSearchRadius: form.highDemandArea_driver_search_radius_x2
                    });
                    this.stateSubscription = this.store.dispatch(new _state_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_11__["AddHighDemandArea"](obj));
                    this.stateSubscription = this.store
                        .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_highDemand_area_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
                        .subscribe(function (data) {
                        if (data && data != undefined) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                            if (data["code"] == 200) {
                                _this.toastr.success(data["message"]);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(["/highDemand-area/list"]);
                            }
                            else {
                                _this.toastr.error(data["message"]);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditHighDemandAreaForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddHighDemandAreaComponent.prototype.onCancel = function () {
        this.router.navigate(["/highDemand-area/list"]);
    };
    AddHighDemandAreaComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_14__["CityService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_15__["ServiceOperatorService"] }
    ]; };
    AddHighDemandAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-add-highDemand-area",
            template: __webpack_require__(/*! raw-loader!./add-edit-highDemand-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.html"),
            styles: ["\n    agm-map {\n      height: 300px;\n    }\n  ", __webpack_require__(/*! ./add-edit-highDemand-area.component.scss */ "./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.scss")]
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
            _city_city_service__WEBPACK_IMPORTED_MODULE_14__["CityService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_15__["ServiceOperatorService"]])
    ], AddHighDemandAreaComponent);
    return AddHighDemandAreaComponent;
}());

var EditHighDemandAreaComponent = /** @class */ (function () {
    function EditHighDemandAreaComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, cityService, ServiceOperatorService) {
        var _this = this;
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.cityService = cityService;
        this.ServiceOperatorService = ServiceOperatorService;
        this.countries = [];
        this.cities = [];
        this.operators = [];
        this.isAdd = false;
        this.submitted = false;
        this.zoom = 8;
        // initial center position for the map
        this.lat = 0;
        this.lng = 0;
        this.markers = [];
        this.markings = [];
        this.autoComplete = [];
        this.selectedArea = 0;
        this.pointList = [];
        this.finalPointArray = [];
        this.highDemandArea_polygonArray = [];
        this.initDrawingManager = function (map) {
            var self = _this;
            var options = {
                drawingControl: true,
                drawingControlOptions: {
                    drawingModes: ['polygon'],
                },
                polygonOptions: {
                    draggable: true,
                    editable: true,
                },
                drawingMode: google.maps.drawing.OverlayType.POLYGON,
            };
            _this.drawingManager = new google.maps.drawing.DrawingManager(options);
            _this.drawingManager.setMap(map);
            google.maps.event.addListener(_this.drawingManager, 'overlaycomplete', function (event) {
                if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                    var paths = event.overlay.getPaths();
                    for (var p = 0; p < paths.getLength(); p++) {
                        google.maps.event.addListener(paths.getAt(p), 'set_at', function () {
                            _this.setSelection(event.overlay);
                            if (!event.overlay.drag) {
                                self.updatePointList(event.overlay.getPath(), 'set_at', event.overlay.zIndex);
                            }
                        });
                        google.maps.event.addListener(paths.getAt(p), 'insert_at', function () {
                            self.updatePointList(event.overlay.getPath(), 'insert_at', event.overlay.zIndex);
                        });
                        google.maps.event.addListener(paths.getAt(p), 'remove_at', function () {
                            self.updatePointList(event.overlay.getPath(), 'remove_at', event.overlay.zIndex);
                        });
                        google.maps.event.addListener(event.overlay, 'click', function () {
                            _this.setSelection(event.overlay);
                        });
                    }
                    self.updatePointList(event.overlay.getPath(), 'add_at', event.overlay.zIndex);
                    _this.selectedShape = event.overlay;
                    _this.selectedShape.type = event.type;
                }
                if (event.type !== google.maps.drawing.OverlayType.MARKER) {
                    // Switch back to non-drawing mode after drawing a shape.
                    self.drawingManager.setDrawingMode(null);
                    // To hide:
                    self.drawingManager.setOptions({
                        drawingControl: true,
                        clickable: true
                    });
                    _this.setSelection(_this.selectedShape);
                }
            });
        };
        this.HIGHDEMAND_AREA_CONST = this.translate.instant("HIGHDEMANDAREA");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.HIGHDEMAND_AREA"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.HIGHDEMAND_AREA_CONST.MODULE_NAME);
    }
    EditHighDemandAreaComponent.prototype.ngOnInit = function () {
        var self = this;
        this.buildAddEditHighDemandAreaForm();
        this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry);
        this.getHighDemandAreaDetails();
        ;
        navigator.geolocation.getCurrentPosition(function (position) {
            if (position.coords.latitude != null) {
                self.lat = position.coords.latitude;
                self.lng = position.coords.longitude;
                self.markers.push({ lat: position.coords.latitude, lng: position.coords.longitude, draggable: false, rad: 0 });
            }
        });
        // this.getAllCountries()
    };
    EditHighDemandAreaComponent.prototype.onMapReady = function (map, callFrom) {
        var _this = this;
        if (callFrom != 'changeCountry') {
            this.map = map;
            this.initDrawingManager(map);
        }
        var city = this.cities.find(function (element) { return element._id == _this.addEditHighDemandAreaForm.value.highDemandArea_cityId; });
        if (city) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'address': city.city_name
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    var bounds = new google.maps.LatLngBounds();
                    marker.setMap(map);
                    bounds.extend(results[0].geometry.location);
                    map.fitBounds(bounds);
                    // map.setBounds(bounds);
                    map.setZoom(14);
                }
                else {
                    alert('Internal error: ' + status);
                }
            });
            var self_1 = this;
            if (self_1.highDemandAreaData) {
                this.highDemandAreaData.highDemandArea_polygonArray.map(function (polygon) {
                    var polygonDetail = [];
                    polygon.loc.coordinates[0].map(function (detail) {
                        polygonDetail.push({ lat: detail[1], lng: detail[0] });
                    });
                    var drawPolygon = new google.maps.Polygon({
                        paths: polygonDetail,
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.35
                    });
                    drawPolygon.setMap(_this.map);
                    drawPolygon.addListener("click", showArrays);
                    function showArrays(event) {
                        var shape = this;
                        shape.name = polygon.name;
                        self_1.setSelection(shape);
                    }
                });
            }
        }
    };
    //set selection to a shape
    EditHighDemandAreaComponent.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
    };
    EditHighDemandAreaComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    EditHighDemandAreaComponent.prototype.deleteSelected = function () {
        if (this.selectedShape) {
            this.updatePointList(this.selectedShape.getPath(), 'delete_old_selected', this.selectedShape.name);
            this.selectedShape.setMap(null);
        }
    };
    EditHighDemandAreaComponent.prototype.updatePointList = function (path, type, index) {
        var self = this;
        var pointList = [];
        var len = path.getLength();
        for (var i = 0; i < len; i++) {
            pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat]);
        }
        if (type == 'add_at') {
            var obj = {};
            obj['loc'] = { type: "Polygon", coordinates: [pointList] };
            obj['name'] = "Polygon" + (Number([index]) + Number(this.highDemandAreaData.highDemandArea_polygonArray.length));
            self.highDemandArea_polygonArray = Object.assign([], this.highDemandArea_polygonArray);
            self.highDemandArea_polygonArray.push(obj);
        }
        else if (type == 'delete_selected') {
            var deleteIndex = self.highDemandArea_polygonArray.findIndex(function (obj) {
                return obj.name == 'Polygon' + index;
            });
            self.highDemandArea_polygonArray.splice(deleteIndex, 1);
        }
        else if (type == 'delete_old_selected') {
            self.highDemandArea_polygonArray = self.highDemandArea_polygonArray.filter(function (item) {
                return item.name !== index;
            });
        }
        else {
            self.highDemandArea_polygonArray[index].loc.coordinates[0] = pointList;
        }
        this.selectedArea = google.maps.geometry.spherical.computeArea(path);
    };
    EditHighDemandAreaComponent.prototype.onAddressChange = function (i) {
        if (document.getElementById("autoCompleteInput" + i)) {
            var options = {
                types: ['(regions)'],
                componentRestrictions: { country: "in" }
            };
            var input = document.getElementById("autoCompleteInput" + i);
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            this.autoComplete[i] = autocomplete;
        }
    };
    EditHighDemandAreaComponent.prototype.onRadiusChange = function (i, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var place, address;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        place = this.autoComplete[i].getPlace();
                        address = this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i].address;
                        if (!address) return [3 /*break*/, 2];
                        if (!this.geocoder) {
                            this.geocoder = new google.maps.Geocoder();
                        }
                        return [4 /*yield*/, this.geocoder.geocode({
                                'address': address
                            }, function (result, status) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var res;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        if (result[0]) {
                                            res = result[0];
                                            if (result[0].geometry.location) {
                                                if (this.markers.length > 0 && this.markers.length == (i + 1)) {
                                                    this.markers.push({ lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) });
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()];
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address;
                                                }
                                                else {
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['coordinates'] = [res.geometry.location.lat(), res.geometry.location.lng()];
                                                    this.addEditHighDemandAreaForm.value.highDemandArea_addresses[i]['address'] = place.formatted_address;
                                                    this.markers[i + 1] = { lat: res.geometry.location.lat(), lng: res.geometry.location.lng(), draggable: false, rad: Number(value) };
                                                }
                                                this.addEditHighDemandAreaForm.patchValue({
                                                    highDemandArea_addresses: this.addEditHighDemandAreaForm.value.highDemandArea_addresses
                                                });
                                            }
                                        }
                                        else {
                                            this.lat = 0;
                                            this.lng = 0;
                                        }
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
    EditHighDemandAreaComponent.prototype.setLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.highDemandAreaData.highDemandArea_address.map(function (data) {
                    _this.markers.push({ lat: data.coordinates[0], lng: data.coordinates[1], draggable: false, rad: data.radius });
                });
                return [2 /*return*/];
            });
        });
    };
    EditHighDemandAreaComponent.prototype.buildAddEditHighDemandAreaForm = function () {
        this.addEditHighDemandAreaForm = this._formBuilder.group({
            // highDemandArea_countryId: ["", [Validators.required,]],
            highDemandArea_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_franchiseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_price_per_x1: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_ride_request_x1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_coolDown_rideReq_x1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_driver_search_radius_x1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_price_per_x2: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_ride_request_x2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_coolDown_rideReq_x2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_driver_search_radius_x2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            highDemandArea_addresses: this._formBuilder.array([]),
        });
    };
    EditHighDemandAreaComponent.prototype.getHighDemandAreaDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params["id"];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_11__["LoadHighDemandArea"](this.id));
        this.stateSubscription = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_highDemand_area_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
            .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 2];
                        if (!(data["code"] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        result = data["data"];
                        this.highDemandAreaData = result;
                        this.highDemandArea_polygonArray = this.highDemandAreaData.highDemandArea_polygonArray;
                        fd = {
                            highDemandArea_countryId: result.highDemandArea_country,
                            highDemandArea_cityId: result.highDemandArea_city,
                            highDemandArea_franchiseId: result.highDemandArea_operator,
                            highDemandArea_status: result.highDemandArea_status,
                            highDemandArea_price_per_x1: result.highDemandArea[0].pricePercentage,
                            highDemandArea_ride_request_x1: result.highDemandArea[0].rideRequest,
                            highDemandArea_coolDown_rideReq_x1: result.highDemandArea[0].coolDownRideReq,
                            highDemandArea_driver_search_radius_x1: result.highDemandArea[0].driverSearchRadius,
                            highDemandArea_price_per_x2: result.highDemandArea[1].pricePercentage,
                            highDemandArea_ride_request_x2: result.highDemandArea[1].rideRequest,
                            highDemandArea_coolDown_rideReq_x2: result.highDemandArea[1].coolDownRideReq,
                            highDemandArea_driver_search_radius_x2: result.highDemandArea[1].driverSearchRadius,
                            highDemandArea_addresses: result.highDemandArea_address
                        };
                        this.changeCountry(result.highDemandArea_country);
                        this.changeCity(result.highDemandArea_city);
                        result.highDemandArea_address.map(function () {
                            _this.highDemandArea_addresses.push(_this.createFields());
                        });
                        // let polygonArray = []
                        // this.highDemandAreaData.highDemandArea_polygonArray.map((polygon) => {
                        //     polygonArray.push(polygon.data)
                        // })
                        // const polygon = new google.maps.Polygon({
                        //     paths: polygonArray,
                        //     strokeColor: "#FF0000",
                        //     strokeOpacity: 0.8,
                        //     strokeWeight: 2,
                        //     fillColor: "#FF0000",
                        //     fillOpacity: 0.35
                        // });
                        // polygon.setMap(this.map);
                        return [4 /*yield*/, this.addEditHighDemandAreaForm.patchValue(fd)];
                    case 1:
                        // let polygonArray = []
                        // this.highDemandAreaData.highDemandArea_polygonArray.map((polygon) => {
                        //     polygonArray.push(polygon.data)
                        // })
                        // const polygon = new google.maps.Polygon({
                        //     paths: polygonArray,
                        //     strokeColor: "#FF0000",
                        //     strokeOpacity: 0.8,
                        //     strokeWeight: 2,
                        //     fillColor: "#FF0000",
                        //     fillOpacity: 0.35
                        // });
                        // polygon.setMap(this.map);
                        _a.sent();
                        this.stateSubscription.unsubscribe();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    // getAllCountries() {
    //     Helpers.setLoading(true);
    //     this.countryService.getAllCountries().subscribe(async (data) => {
    //         if (data && data != undefined) {
    //             if (data["code"] == 200) {
    //                 this.countries = data["data"];
    //                 if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //                     this.dtr.detectChanges();
    //                 }
    //                 Helpers.setLoading(false);
    //             } else {
    //                 Helpers.setLoading(false);
    //                 this.toastr.error(data["message"]);
    //             }
    //         }
    //     });
    // }
    EditHighDemandAreaComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onMapReady(this.map, 'changeCountry');
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService
                                .getCountryCities(countryId)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cities = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
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
    EditHighDemandAreaComponent.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!cityId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.operators = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            // let country = this.countries.find(element => element._id == this.addEditHighDemandAreaForm.value.highDemandArea_countryId);
                                            // if (this.cities.length > 0) {
                                            //     let city = this.cities.find(element => element._id == cityId);
                                            // this.setLocation(country.country_name, city.city_name);
                                            this.setLocation();
                                            _b.label = 2;
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
    EditHighDemandAreaComponent.prototype.createFields = function () {
        return this._formBuilder.group({
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            coordinates: [[]],
            radius: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]]
        });
    };
    Object.defineProperty(EditHighDemandAreaComponent.prototype, "highDemandArea_addresses", {
        get: function () {
            var form = this.addEditHighDemandAreaForm;
            if (form) {
                return this.addEditHighDemandAreaForm.get('highDemandArea_addresses');
            }
        },
        enumerable: true,
        configurable: true
    });
    EditHighDemandAreaComponent.prototype.onAddAddress = function () {
        this.highDemandArea_addresses.push(this.createFields());
    };
    EditHighDemandAreaComponent.prototype.removeAddress = function (i) {
        this.highDemandArea_addresses.removeAt(i);
        this.markers.splice(i + 1, 1);
        this.autoComplete.splice(i + 1, 1);
    };
    EditHighDemandAreaComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                // this.finalPointArray.concat(this.highDemandAreaData.highDemandArea_polygonArray)
                // const mergedArray = [...this.highDemandArea_polygonArray, ...this.highDemandAreaData.highDemandArea_polygonArray]
                if (this.addEditHighDemandAreaForm.valid) {
                    form = this.addEditHighDemandAreaForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            highDemandArea_status: form.highDemandArea_status,
                            highDemandArea: [],
                            highDemandArea_address: form.highDemandArea_addresses,
                            highDemandArea_polygonArray: JSON.stringify(this.highDemandArea_polygonArray)
                        },
                    };
                    obj.data.highDemandArea.push({
                        thresholdName: '1X', pricePercentage: form.highDemandArea_price_per_x1, rideRequest: form.highDemandArea_ride_request_x1, coolDownRideReq: form.highDemandArea_coolDown_rideReq_x1,
                        driverSearchRadius: form.highDemandArea_driver_search_radius_x1
                    }, {
                        thresholdName: '2X', pricePercentage: form.highDemandArea_price_per_x2, rideRequest: form.highDemandArea_ride_request_x2, coolDownRideReq: form.highDemandArea_coolDown_rideReq_x2,
                        driverSearchRadius: form.highDemandArea_driver_search_radius_x2
                    });
                    this.stateSubscription = this.store.dispatch(new _state_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateHighDemandArea"](obj));
                    this.stateSubscription = this.store
                        .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_highDemand_area_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
                        .subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data["code"] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data["message"]);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(["/highDemand-area/list"]);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data["message"]);
                            }
                        }
                    });
                }
                else if (!this.addEditHighDemandAreaForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditHighDemandAreaComponent.prototype.onCancel = function () {
        this.router.navigate(["/highDemand-area/list"]);
    };
    EditHighDemandAreaComponent.ctorParameters = function () { return [
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
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_14__["CityService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_15__["ServiceOperatorService"] }
    ]; };
    EditHighDemandAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-edit-highDemand-area",
            template: __webpack_require__(/*! raw-loader!./add-edit-highDemand-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.html"),
            styles: ["\n    agm-map {\n      height: 300px;\n    }\n  ", __webpack_require__(/*! ./add-edit-highDemand-area.component.scss */ "./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.scss")]
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
            _city_city_service__WEBPACK_IMPORTED_MODULE_14__["CityService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_15__["ServiceOperatorService"]])
    ], EditHighDemandAreaComponent);
    return EditHighDemandAreaComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hpZ2hEZW1hbmQtYXJlYS9oaWdoRGVtYW5kLWFyZWEtbGlzdC9oaWdoRGVtYW5kLWFyZWEtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HighDemandAreaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighDemandAreaListComponent", function() { return HighDemandAreaListComponent; });
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
var HighDemandAreaListComponent = /** @class */ (function () {
    function HighDemandAreaListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.HIGHDEMAND_AREA_CONST = [];
        this.searchObj = { field: 'help_title', highDemandArea_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.HIGHDEMAND_AREA_CONST = this.translate.instant('HIGHDEMANDAREA');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.HIGHDEMAND_AREA'));
        titleService.setTitle(this.APPNAME + " | " + this.HIGHDEMAND_AREA_CONST.MODULE_NAME);
    }
    HighDemandAreaListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    HighDemandAreaListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HIGHDEMAND_AREA.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HIGHDEMAND_AREA.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HIGHDEMAND_AREA.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].HIGHDEMAND_AREA.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    HighDemandAreaListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    HighDemandAreaListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-highDemand-area-list', scripts).then(function () {
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
                    sProcessing: that.HIGHDEMAND_AREA_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listHighDemandArea,
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.HIGHDEMAND_AREA_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.HIGHDEMAND_AREA_CONST.LABEL.COUNTRY, data: 'highDemandArea_country' },
                    { title: that.HIGHDEMAND_AREA_CONST.LABEL.CITY, data: 'highDemandArea_city' },
                    // { title: that.HIGHDEMAND_AREA_CONST.LABEL.FRANCHISE, data: 'highDemandArea_operator' },
                    { title: that.HIGHDEMAND_AREA_CONST.LABEL.STATUS, data: 'highDemandArea_status' },
                    { title: that.HIGHDEMAND_AREA_CONST.LABEL.CREATED_ON, data: 'highDemandArea_createdOn' },
                    { title: that.HIGHDEMAND_AREA_CONST.LABEL.MODIFIED_ON, data: 'highDemandArea_modifyOn' },
                    { title: that.HIGHDEMAND_AREA_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.HIGHDEMAND_AREA_CONST.LABEL.SR_NO:
                                break;
                            case that.HIGHDEMAND_AREA_CONST.LABEL.COUNTRY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            // case that.HIGHDEMAND_AREA_CONST.LABEL.FRANCHISE:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.HIGHDEMAND_AREA_CONST.LABEL.CITY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HIGHDEMAND_AREA_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.HIGHDEMAND_AREA_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.HIGHDEMAND_AREA_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.HIGHDEMAND_AREA_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            case that.HIGHDEMAND_AREA_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HIGHDEMAND_AREA_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.HIGHDEMAND_AREA_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.HIGHDEMAND_AREA_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.HIGHDEMAND_AREA_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                    // {
                    //     targets: 3,
                    //     width: '15%',
                    //     render: function (a, e, t, n) {
                    //         return a;
                    //     }
                    // },
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
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.highDemandArea_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.highDemandArea_status].title + '</span>';
                        }
                    },
                    {
                        targets: 4,
                        width: '10%',
                    },
                    {
                        targets: 5,
                        width: '10%',
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
    HighDemandAreaListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/highDemand-area/edit/' + this.id]);
    };
    HighDemandAreaListComponent.prototype.delete = function (e) {
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
                            component: 'highDemandArea',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    HighDemandAreaListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'highDemandArea',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    HighDemandAreaListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    HighDemandAreaListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    HighDemandAreaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-highDemand-area-list',
            template: __webpack_require__(/*! raw-loader!./highDemand-area-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.html"),
            styles: [__webpack_require__(/*! ./highDemand-area-list.component.scss */ "./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], HighDemandAreaListComponent);
    return HighDemandAreaListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/highDemand-area/highDemand-area.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/highDemand-area.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hpZ2hEZW1hbmQtYXJlYS9oaWdoRGVtYW5kLWFyZWEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/highDemand-area/highDemand-area.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/highDemand-area.component.ts ***!
  \**************************************************************************/
/*! exports provided: HighDemandAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighDemandAreaComponent", function() { return HighDemandAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var HighDemandAreaComponent = /** @class */ (function () {
    function HighDemandAreaComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].FARECALCULATION);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].highDemandAreaManagement);
    }
    HighDemandAreaComponent.prototype.ngOnInit = function () {
    };
    HighDemandAreaComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    HighDemandAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-highDemand-area',
            template: __webpack_require__(/*! raw-loader!./highDemand-area.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/highDemand-area/highDemand-area.component.html"),
            styles: [__webpack_require__(/*! ./highDemand-area.component.scss */ "./src/app/views/pages/highDemand-area/highDemand-area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HighDemandAreaComponent);
    return HighDemandAreaComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/highDemand-area/highDemand-area.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/highDemand-area.module.ts ***!
  \***********************************************************************/
/*! exports provided: HighDemandAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighDemandAreaModule", function() { return HighDemandAreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_highDemand_area_add_edit_highDemand_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-highDemand-area/add-edit-highDemand-area.component */ "./src/app/views/pages/highDemand-area/add-edit-highDemand-area/add-edit-highDemand-area.component.ts");
/* harmony import */ var _highDemand_area_list_highDemand_area_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highDemand-area-list/highDemand-area-list.component */ "./src/app/views/pages/highDemand-area/highDemand-area-list/highDemand-area-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _highDemand_area_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./highDemand-area.component */ "./src/app/views/pages/highDemand-area/highDemand-area.component.ts");
/* harmony import */ var _state_highDemand_area_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./state/highDemand-area.effects */ "./src/app/views/pages/highDemand-area/state/highDemand-area.effects.ts");
/* harmony import */ var _state_highDemand_area_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/highDemand-area.reducer */ "./src/app/views/pages/highDemand-area/state/highDemand-area.reducer.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _highDemand_area_component__WEBPACK_IMPORTED_MODULE_15__["HighDemandAreaComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _highDemand_area_list_highDemand_area_list_component__WEBPACK_IMPORTED_MODULE_4__["HighDemandAreaListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_14__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].FARE_CALCULATION.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_highDemand_area_add_edit_highDemand_area_component__WEBPACK_IMPORTED_MODULE_3__["AddHighDemandAreaComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_14__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].HIGHDEMAND_AREA.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_highDemand_area_add_edit_highDemand_area_component__WEBPACK_IMPORTED_MODULE_3__["EditHighDemandAreaComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_14__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].HIGHDEMAND_AREA.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var HighDemandAreaModule = /** @class */ (function () {
    function HighDemandAreaModule() {
    }
    HighDemandAreaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_highDemand_area_component__WEBPACK_IMPORTED_MODULE_15__["HighDemandAreaComponent"], _highDemand_area_list_highDemand_area_list_component__WEBPACK_IMPORTED_MODULE_4__["HighDemandAreaListComponent"], _add_edit_highDemand_area_add_edit_highDemand_area_component__WEBPACK_IMPORTED_MODULE_3__["AddHighDemandAreaComponent"], _add_edit_highDemand_area_add_edit_highDemand_area_component__WEBPACK_IMPORTED_MODULE_3__["EditHighDemandAreaComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_highDemand_area_effects__WEBPACK_IMPORTED_MODULE_16__["HighDemandAreaEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("highDemand-area", _state_highDemand_area_reducer__WEBPACK_IMPORTED_MODULE_17__["HighDemandAreaReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["AngularMultiSelectModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].mapAPIKey
                })
            ]
        })
    ], HighDemandAreaModule);
    return HighDemandAreaModule;
}());



/***/ }),

/***/ "./src/app/views/pages/highDemand-area/state/highDemand-area.actions.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/state/highDemand-area.actions.ts ***!
  \******************************************************************************/
/*! exports provided: HighDemandAreaActionTypes, LoadHighDemandArea, LoadHighDemandAreaSuccess, LoadHighDemandAreaFail, UpdateHighDemandArea, UpdateHighDemandAreaSuccess, UpdateHighDemandAreaFail, DeleteHighDemandArea, DeleteHighDemandAreaSuccess, DeleteHighDemandAreaFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddHighDemandArea, AddHighDemandAreaSuccess, AddHighDemandAreaFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighDemandAreaActionTypes", function() { return HighDemandAreaActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHighDemandArea", function() { return LoadHighDemandArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHighDemandAreaSuccess", function() { return LoadHighDemandAreaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHighDemandAreaFail", function() { return LoadHighDemandAreaFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHighDemandArea", function() { return UpdateHighDemandArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHighDemandAreaSuccess", function() { return UpdateHighDemandAreaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHighDemandAreaFail", function() { return UpdateHighDemandAreaFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHighDemandArea", function() { return DeleteHighDemandArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHighDemandAreaSuccess", function() { return DeleteHighDemandAreaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHighDemandAreaFail", function() { return DeleteHighDemandAreaFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHighDemandArea", function() { return AddHighDemandArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHighDemandAreaSuccess", function() { return AddHighDemandAreaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHighDemandAreaFail", function() { return AddHighDemandAreaFail; });
var HighDemandAreaActionTypes;
(function (HighDemandAreaActionTypes) {
    HighDemandAreaActionTypes["UPDATE_STATUS"] = "[HIGHDEMANDAREA] Update Status";
    HighDemandAreaActionTypes["UPDATE_STATUS_SUCCESS"] = "[HIGHDEMANDAREA]  Update Status Success";
    HighDemandAreaActionTypes["UPDATE_STATUS_FAIL"] = "[HIGHDEMANDAREA]  Update Status Fail";
    HighDemandAreaActionTypes["LOAD_HIGHDEMANDAREA"] = "[HIGHDEMANDAREA] Load HIGHDEMANDAREA";
    HighDemandAreaActionTypes["LOAD_HIGHDEMANDAREA_SUCCESS"] = "[HIGHDEMANDAREA] Load HIGHDEMANDAREA Success";
    HighDemandAreaActionTypes["LOAD_HIGHDEMANDAREA_FAIL"] = "[HIGHDEMANDAREA] Load HIGHDEMANDAREA Fail";
    HighDemandAreaActionTypes["UPDATE_HIGHDEMANDAREA"] = "[HIGHDEMANDAREA] Update HIGHDEMANDAREA";
    HighDemandAreaActionTypes["UPDATE_HIGHDEMANDAREA_SUCCESS"] = "[HIGHDEMANDAREA] Update HIGHDEMANDAREA Success";
    HighDemandAreaActionTypes["UPDATE_HIGHDEMANDAREA_FAIL"] = "[HIGHDEMANDAREA] Update HIGHDEMANDAREA Fail";
    HighDemandAreaActionTypes["DELETE_HIGHDEMANDAREA"] = "[HIGHDEMANDAREA] Delete HIGHDEMANDAREA";
    HighDemandAreaActionTypes["DELETE_HIGHDEMANDAREA_SUCCESS"] = "[HIGHDEMANDAREA] Delete HIGHDEMANDAREA Success";
    HighDemandAreaActionTypes["DELETE_HIGHDEMANDAREA_FAIL"] = "[HIGHDEMANDAREA] Delete HIGHDEMANDAREA Fail";
    HighDemandAreaActionTypes["ADD_HIGHDEMANDAREA"] = "[HIGHDEMANDAREA] Upload Data";
    HighDemandAreaActionTypes["ADD_HIGHDEMANDAREA_SUCCESS"] = "[HIGHDEMANDAREA] Upload Data Success";
    HighDemandAreaActionTypes["ADD_HIGHDEMANDAREA_FAIL"] = "[HIGHDEMANDAREA] Upload Data Fail";
    HighDemandAreaActionTypes["UPLOAD_DATA"] = "[HIGHDEMANDAREA] Upload Data";
    HighDemandAreaActionTypes["UPLOAD_DATA_SUCCESS"] = "[HIGHDEMANDAREA] Upload Data Success";
    HighDemandAreaActionTypes["UPLOAD_DATA_FAIL"] = "[HIGHDEMANDAREA] Upload Data Fail";
})(HighDemandAreaActionTypes || (HighDemandAreaActionTypes = {}));
var LoadHighDemandArea = /** @class */ (function () {
    function LoadHighDemandArea(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA;
    }
    LoadHighDemandArea.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHighDemandArea;
}());

var LoadHighDemandAreaSuccess = /** @class */ (function () {
    function LoadHighDemandAreaSuccess(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA_SUCCESS;
    }
    LoadHighDemandAreaSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHighDemandAreaSuccess;
}());

var LoadHighDemandAreaFail = /** @class */ (function () {
    function LoadHighDemandAreaFail(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.LOAD_HIGHDEMANDAREA_FAIL;
    }
    LoadHighDemandAreaFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadHighDemandAreaFail;
}());

var UpdateHighDemandArea = /** @class */ (function () {
    function UpdateHighDemandArea(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA;
    }
    UpdateHighDemandArea.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHighDemandArea;
}());

var UpdateHighDemandAreaSuccess = /** @class */ (function () {
    function UpdateHighDemandAreaSuccess(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA_SUCCESS;
    }
    UpdateHighDemandAreaSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHighDemandAreaSuccess;
}());

var UpdateHighDemandAreaFail = /** @class */ (function () {
    function UpdateHighDemandAreaFail(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.UPDATE_HIGHDEMANDAREA_FAIL;
    }
    UpdateHighDemandAreaFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateHighDemandAreaFail;
}());

var DeleteHighDemandArea = /** @class */ (function () {
    function DeleteHighDemandArea(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA;
    }
    DeleteHighDemandArea.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHighDemandArea;
}());

var DeleteHighDemandAreaSuccess = /** @class */ (function () {
    function DeleteHighDemandAreaSuccess(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA_SUCCESS;
    }
    DeleteHighDemandAreaSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHighDemandAreaSuccess;
}());

var DeleteHighDemandAreaFail = /** @class */ (function () {
    function DeleteHighDemandAreaFail(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.DELETE_HIGHDEMANDAREA_FAIL;
    }
    DeleteHighDemandAreaFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteHighDemandAreaFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddHighDemandArea = /** @class */ (function () {
    function AddHighDemandArea(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA;
    }
    AddHighDemandArea.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHighDemandArea;
}());

var AddHighDemandAreaSuccess = /** @class */ (function () {
    function AddHighDemandAreaSuccess(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA_SUCCESS;
    }
    AddHighDemandAreaSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHighDemandAreaSuccess;
}());

var AddHighDemandAreaFail = /** @class */ (function () {
    function AddHighDemandAreaFail(payload) {
        this.payload = payload;
        this.type = HighDemandAreaActionTypes.ADD_HIGHDEMANDAREA_FAIL;
    }
    AddHighDemandAreaFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddHighDemandAreaFail;
}());



/***/ }),

/***/ "./src/app/views/pages/highDemand-area/state/highDemand-area.effects.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/state/highDemand-area.effects.ts ***!
  \******************************************************************************/
/*! exports provided: HighDemandAreaEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighDemandAreaEffect", function() { return HighDemandAreaEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highDemand-area.actions */ "./src/app/views/pages/highDemand-area/state/highDemand-area.actions.ts");
/* harmony import */ var _highDemand_area_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../highDemand-area.service */ "./src/app/views/pages/highDemand-area/highDemand-area.service.ts");







var HighDemandAreaEffect = /** @class */ (function () {
    function HighDemandAreaEffect(actions$, HighDemandAreaService) {
        var _this = this;
        this.actions$ = actions$;
        this.HighDemandAreaService = HighDemandAreaService;
        this.deleteHighDemandArea$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["HighDemandAreaActionTypes"].DELETE_HIGHDEMANDAREA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.HighDemandAreaService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteHighDemandAreaSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteHighDemandAreaFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["HighDemandAreaActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HighDemandAreaService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadHighDemandArea$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["HighDemandAreaActionTypes"].LOAD_HIGHDEMANDAREA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.HighDemandAreaService.getHighDemandAreaById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["LoadHighDemandAreaSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["LoadHighDemandAreaFail"](err));
            }));
        }));
        this.updateHighDemandArea$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["HighDemandAreaActionTypes"].UPDATE_HIGHDEMANDAREA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HighDemandAreaService.updateHighDemandArea(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateHighDemandAreaSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateHighDemandAreaFail"](err)); }));
        }));
        this.addHighDemandArea$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["HighDemandAreaActionTypes"].ADD_HIGHDEMANDAREA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.HighDemandAreaService.addHighDemandArea(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["AddHighDemandAreaSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_5__["AddHighDemandAreaFail"](err));
            }));
        }));
    }
    HighDemandAreaEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _highDemand_area_service__WEBPACK_IMPORTED_MODULE_6__["HighDemandAreaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HighDemandAreaEffect.prototype, "deleteHighDemandArea$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HighDemandAreaEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HighDemandAreaEffect.prototype, "loadHighDemandArea$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HighDemandAreaEffect.prototype, "updateHighDemandArea$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HighDemandAreaEffect.prototype, "addHighDemandArea$", void 0);
    HighDemandAreaEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _highDemand_area_service__WEBPACK_IMPORTED_MODULE_6__["HighDemandAreaService"]])
    ], HighDemandAreaEffect);
    return HighDemandAreaEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/highDemand-area/state/highDemand-area.reducer.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/highDemand-area/state/highDemand-area.reducer.ts ***!
  \******************************************************************************/
/*! exports provided: initialState, HighDemandAreaReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighDemandAreaReducer", function() { return HighDemandAreaReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highDemand-area.actions */ "./src/app/views/pages/highDemand-area/state/highDemand-area.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function HighDemandAreaReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for High Demand Area load-----------------------------
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].LOAD_HIGHDEMANDAREA_SUCCESS: {
            return action.payload;
        }
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].LOAD_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }
        // for High Demand Area delete-----------------------------
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].DELETE_HIGHDEMANDAREA_SUCCESS: {
            return action.payload;
        }
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].DELETE_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }
        // for High Demand Area update-----------------------------
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].UPDATE_HIGHDEMANDAREA_SUCCESS: {
            return action.payload;
        }
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].UPDATE_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }
        // for High Demand Area upadat status-----------------------------
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for High Demand Area add-----------------------------
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].ADD_HIGHDEMANDAREA_SUCCESS: {
            return action.payload;
        }
        case _highDemand_area_actions__WEBPACK_IMPORTED_MODULE_0__["HighDemandAreaActionTypes"].ADD_HIGHDEMANDAREA_FAIL: {
            return action.payload.error;
        }
    }
}
var getHighDemandAreaState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("highDemand-area");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getHighDemandAreaState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-highDemand-area-highDemand-area-module.js.map