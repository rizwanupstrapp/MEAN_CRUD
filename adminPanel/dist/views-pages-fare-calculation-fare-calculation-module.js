(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-fare-calculation-fare-calculation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'FARECALCULATION.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'FARECALCULATION.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/fare-calculation/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditFareCalculationForm\" [formGroup]=\"addEditFareCalculationForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- country & city -->\n                <div class=\"form-group  row\">\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'FARECALCULATION.LABEL.COUNTRY' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\" (change)=\"changeCountry($event.target.value)\" formControlName=\"fareCalculation_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_countryId.errors }\">\n                                <option value=\"\">{{'FARECALCULATION.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_countryId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_countryId.errors?.required\">\n                                    {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'FARECALCULATION.LABEL.CITY' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select *ngIf=\"isAdd\" class=\"form-control m-input\" id=\"city\" formControlName=\"fareCalculation_cityId\" (change)=\"changeCity($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_cityId.errors }\">\n                                <option value=\"\">{{'FARECALCULATION.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">{{city.city_name}}\n                                </option>\n                            </select>\n                            <select *ngIf=\"!isAdd\" class=\"form-control m-input\" id=\"city\" formControlName=\"fareCalculation_cityId\" (change)=\"changeCity($event.target.value)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_cityId.errors }\"\n                                disabled>\n                                <option value=\"\">{{'FARECALCULATION.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">{{city.city_name}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_cityId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_cityId.errors?.required\">\n                                    {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n                    <!-- franchises & time frames -->\n                    <!-- <div class=\"form-group  row\"> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'FARECALCULATION.LABEL.FRANCHISE' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select *ngIf=\"isAdd\" class=\"form-control m-input\" id=\"operatorName\" formControlName=\"fareCalculation_franchiseId\" (change)=\"operatorChange()\" [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_franchiseId.errors }\">\n                                <option value=\"\">{{'FARECALCULATION.LABEL.SELECT_OPERATOR' | translate}}</option>\n                                <option value=\"{{operator._id}}\" *ngFor=\"let operator of operators\">\n                                    {{operator.operatorName}}</option>\n                            </select>\n                            <select *ngIf=\"!isAdd\" class=\"form-control m-input\" id=\"operatorName\" formControlName=\"fareCalculation_franchiseId\" [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_franchiseId.errors }\"\n                                disabled>\n                                <option value=\"\">{{'FARECALCULATION.LABEL.SELECT_OPERATOR' | translate}}</option>\n                                <option value=\"{{operator._id}}\" *ngFor=\"let operator of operators\">\n                                    {{operator.operatorName}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_franchiseId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_franchiseId.errors?.required\">\n                                    {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'FARECALCULATION.LABEL.TIME_FRAME' | translate }} *\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select *ngIf=\"isAdd\" class=\"form-control m-input\" id=\"TimeFrame\" formControlName=\"fareCalculation_timeFrameId\" [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_timeFrameId.errors }\">\n                                <option value=\"\">{{'FARECALCULATION.PLACEHOLDERS.SELECT_TIMEFRAME' | translate }}\n                                </option>\n                                <option value=\"{{timeFrameRange._id}}\" *ngFor=\"let timeFrameRange of timeFrameRanges\">{{timeFrameRange.timeFrame_range}} </option>\n                            </select>\n                            <select *ngIf=\"!isAdd\" class=\"form-control m-input\" id=\"TimeFrame\" formControlName=\"fareCalculation_timeFrameId\" [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_timeFrameId.errors }\"\n                                disabled>\n                                <option value=\"\">{{'FARECALCULATION.PLACEHOLDERS.SELECT_TIMEFRAME' | translate }}\n                                </option>\n                                <option value=\"{{timeFrameRange._id}}\" *ngFor=\"let timeFrameRange of timeFrameRanges\">{{timeFrameRange.timeFrame_range}} </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_timeFrameId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_timeFrameId.errors?.required\">\n                                    {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- </div> -->\n                    <!-- Status -->\n                    <!-- <div class=\"form-group  row\"> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'FARECALCULATION.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"fareCalculation_status\" formControlName=\"fareCalculation_status\" [ngClass]=\"{ 'is-invalid': submitted && addEditFareCalculationForm.controls.fareCalculation_status.errors }\">\n                                <option value=\"{{'FARECALCULATION.PLACEHOLDERS.ACTIVE' | translate}}\" selected>{{'FARECALCULATION.LABEL.ACTIVE' | translate}}</option>\n                                <option value=\"{{'FARECALCULATION.PLACEHOLDERS.INACTIVE' | translate}}\">{{'FARECALCULATION.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_status.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditFareCalculationForm.controls.fareCalculation_status.errors?.required\">\n                                    {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"addEditFareCalculationForm.value.fareCalculation_franchiseId\">\n                    <!-- <div> -->\n                    <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n                        <li class=\"nav-item\" *ngFor=\"let serviceType of serviceTypes\">\n                            <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == serviceType.serviceType_name }\" id=\"persnol_detail-tab-1\" data-toggle=\"tab\"\n                                href=\"javascript:;\" (click)=\"clickLink(serviceType.serviceType_name)\">\n                                <span class=\"nav-text\">{{serviceType.serviceType_name}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content mt-5\" id=\"myTabContent1\" *ngIf='serviceTypes'>\n                        <div formArrayName=\"fareCalculation_service_types\">\n                            <div *ngFor=\"let fareCalculation_service_type of fareCalculation_service_types.controls; let i = index;\">\n                                <div [formGroupName]=\"i\">\n                                    <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === serviceTypes[i].serviceType_name }\" id=\"persnol_detail\"\n                                        *ngIf=\" navObj.link === serviceTypes[i].serviceType_name\" role=\"tabpanel\" aria-labelledby=\"persnol_detail-tab-1\">\n                                        <input type=\"hidden\" class=\"form-control\" formControlName=\"fareCalculation_service_type_id\">\n                                        <!-- Payment Method -->\n                                        <div class=\"form-group  row\">\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-12\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.PAYMENT_METHOD' | translate}} : {{'FARECALCULATION.LABEL.COIN' | translate}}\n                                                        <!-- : {{'FARECALCULATION.LABEL.COIN' | translate}}* -->\n\n                                                    </label>\n                                                </div>\n                                                <!-- <div class=\"col-lg-12 multiselect_drpdwn\">\n                                                    <angular2-multiselect [data]=\"paymentMethods\" [settings]=\"dropdownSettingsPaymentMethod\" (onSelect)=\"onItemPaymentMethodSelect($event)\"\n                                                        (onDeSelect)=\"onItemPaymentMethodDeSelect($event)\" (onSelectAll)=\"onPaymentMethodSelectAll($event)\"\n                                                        (onDeSelectAll)=\"onPaymentMethodDeSelectAll($event)\" formControlName=\"fareCalculation_payment_method\">\n                                                    </angular2-multiselect>\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_payment_method.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_payment_method.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' |translate}}\n                                                        </p>\n                                                    </div>\n                                                \n                                                </div> -->\n\n\n                                            </div>\n                                        </div>\n                                        <!-- Select -->\n                                        <!-- <div class=\"form-group  row\">\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-3\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.SELECT' | translate }} *\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"kt-radio-inline\">\n                                                        <label class=\"kt-radio kt-radio--bold kt-radio--brand\">\n                                                            <input type=\"radio\" value=\"RADIUS\" formControlName=\"fareCalculation_select\"> Radius\n                                                            <span></span>\n                                                        </label>\n                                                        <label class=\"kt-radio kt-radio--bold kt-radio--brand\">\n                                                            <input type=\"radio\" value=\"ACTUALDISTANCE\" formControlName=\"fareCalculation_select\"> Actual Distance\n                                                            <span></span>\n                                                        </label>\n                                                    </div>\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_select.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_select.errors?.required\">\n                                                            This field is required.\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                        </div> -->\n                                        <!-- Free KM and Pickup Free Time -->\n                                        <div class=\"form-group  row\">\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-12\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.FREE_KM' | translate}}*\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-lg-12\">\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_free_km\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_free_km.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_free_km.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_free_km.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-12\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.PICKUP_FREE_TIME' | translate}}*\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-lg-12\">\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_pickup_free_time\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_pickup_free_time.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_free_time.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_free_time.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group  row\">\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-12\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.CONGESTION_FREE_TIME' | translate}}*\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-lg-12\">\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_congestion_free_time\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_congestion_free_time.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_free_time.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_free_time.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-12\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.COMPLETE_STOP_FREE_TIME' | translate}}*\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-lg-12\">\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_complete_stop_free_time\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_complete_stop_free_time.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_complete_stop_free_time.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_complete_stop_free_time.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- Tax -->\n                                        <div class=\"form-group  row\">\n                                            <div class=\"col-lg-6\">\n                                                <div class=\"col-lg-12\">\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.TAX' | translate}}*\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-lg-12\">\n                                                    {{creds | json}}\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_tax\" type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_tax.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_tax.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_tax.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <table style=\"width:100%\">\n                                            <tr>\n                                                <th></th>\n                                                <th>\n                                                    <label>Distributed On (%)</label>\n                                                </th>\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label>Fare Component</label>\n                                                </th>\n                                                <th>\n                                                    <label>Coin</label>\n                                                </th>\n                                                <!-- <th>\n                                                    <label>Driver (%)</label>\n                                                </th>\n                                                <th>\n                                                    <label>Admin (%)</label>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.BASE_FARE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_base_fare_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_base_fare_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                                    <!-- <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_base_fare_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_base_fare_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.BOOKING_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_booking_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_booking_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_booking_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_booking_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.PER_KM_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_per_km_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_per_km_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_per_km_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_km_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.PER_MIN_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_per_min_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_per_min_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_per_min_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_per_min_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.PICKUP_WAITING_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_pickup_waiting_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_pickup_waiting_fee_driver\"\n                                                        type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_pickup_waiting_fee_admin\"\n                                                        type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_pickup_waiting_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.STOP_WAITING_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_stop_waiting_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_stop_waiting_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_stop_waiting_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_stop_waiting_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.CONGESTION_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_congestion_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_congestion_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_congestion_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_congestion_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.DESTINATION_CHANGE_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_destination_change_fee_coin\"\n                                                        type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_destination_change_fee_driver\"\n                                                        type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_destination_change_fee_admin\"\n                                                        type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_destination_change_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n                                                <th>\n                                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                                        {{'FARECALCULATION.LABEL.GOVERNMENTAL_FEE' | translate }} *\n                                                    </label>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" min=\"0\" formControlName=\"fareCalculation_governmental_fee_coin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors?.min && !fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MIN_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors?.max && !fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors?.pattern\"\n                                                            class=\"lbl-err\">\n                                                            {{'FARECALCULATION.VALIDATION.MAX_VALUE' | translate }}\n                                                        </p>\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_coin.errors?.pattern\">\n                                                            {{'FARECALCULATION.VALIDATION.INVALID_FIELD_VALUE' | translate }}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_governmental_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_governmental_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_governmental_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_cancellation_fee_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_cancellation_fee_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_cancellation_fee_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_cancellation_fee_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_cancellation_fee_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_cancellation_fee_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_cancellation_fee_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_cancellation_fee_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                            <tr>\n\n                                                <th>\n\n                                                    <!-- <th>\n>>>>>>> origin/M1_ADMIN_FARE_CALCULATION_MANAGEMENT\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_driver_tip_driver\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_driver_tip_driver.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_driver_tip_driver.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_driver_tip_driver.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th>\n                                                <th>\n                                                    <input class=\"form-control m-input m-login__form-input--last\" formControlName=\"fareCalculation_driver_tip_admin\" type=\"number\"\n                                                        [ngClass]=\"{ 'is-invalid': submitted && fareCalculation_service_type.controls.fareCalculation_driver_tip_admin.errors }\">\n                                                    <div *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_driver_tip_admin.errors\" class=\"form-control-feedback\"\n                                                        style=\"color: red\">\n                                                        <p *ngIf=\"submitted && fareCalculation_service_type.controls.fareCalculation_driver_tip_admin.errors?.required\">\n                                                            {{'FARECALCULATION.VALIDATION.FIELD_REQUIRED' | translate}}\n                                                        </p>\n                                                    </div>\n                                                </th> -->\n                                            </tr>\n                                        </table>\n\n\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/fare-calculation/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'FARECALCULATION.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/fare-calculation/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover fare-calcl_mangmt_tbl table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/fare-calculation.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fare-calculation/fare-calculation.component.html ***!
  \********************************************************************************************************/
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

/***/ "./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvZmFyZS1jYWxjdWxhdGlvbi9hZGQtZWRpdC1mYXJlLWNhbGN1bGF0aW9uL2FkZC1lZGl0LWZhcmUtY2FsY3VsYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ZhcmUtY2FsY3VsYXRpb24vYWRkLWVkaXQtZmFyZS1jYWxjdWxhdGlvbi9hZGQtZWRpdC1mYXJlLWNhbGN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddFareCalculationComponent, EditFareCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFareCalculationComponent", function() { return AddFareCalculationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFareCalculationComponent", function() { return EditFareCalculationComponent; });
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
/* harmony import */ var _state_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/fare-calculation.actions */ "./src/app/views/pages/fare-calculation/state/fare-calculation.actions.ts");
/* harmony import */ var _state_fare_calculation_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/fare-calculation.reducer */ "./src/app/views/pages/fare-calculation/state/fare-calculation.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _fare_calculation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fare-calculation.service */ "./src/app/views/pages/fare-calculation/fare-calculation.service.ts");
/* harmony import */ var _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../service-operator/service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");




















var AddFareCalculationComponent = /** @class */ (function () {
    function AddFareCalculationComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService, FareCalculationService, ServiceOperatorService) {
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
        this.FareCalculationService = FareCalculationService;
        this.ServiceOperatorService = ServiceOperatorService;
        this.navObj = {};
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.countries = [];
        this.cities = [];
        this.countryCities = [];
        this.Franchises = [];
        this.timeFrameRanges = [];
        this.operators = [];
        //variable declared  yt
        this.dropdownList = [];
        this.selectedItemsCountry = [];
        this.selectedItemsCity = [];
        this.city_countryId = [];
        this.dropdownSettingsCountry = {};
        this.paymentMethods = [];
        this.dropdownSettingsPaymentMethod = [];
        this.dropdownSettingsCity = {};
        this.FARE_CALCULATION_CONST = this.translate.instant("FARECALCULATION");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.FARE_CALCULATION"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.FARE_CALCULATION_CONST.MODULE_NAME);
    }
    AddFareCalculationComponent.prototype.clickLink = function (e) {
        this.navObj['link'] = e;
    };
    AddFareCalculationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownSettingsPaymentMethod = {
            singleSelection: false,
            text: "Select Payment method",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
        this.FARE_CALCULATION_CONST.PAYMENT_VALUE.map(function (value, index) {
            _this.paymentMethods.push({ id: index, itemName: value });
        });
        this.buildAddEditFareCalculationForm();
        // this.getAllCountries();
        this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry);
        this.getAllTimeFramesList();
        // this.getAllServiceTypes();
    };
    AddFareCalculationComponent.prototype.operatorChange = function () {
        this.getAllServiceTypes(this.addEditFareCalculationForm.value.fareCalculation_franchiseId); // operator id 
    };
    AddFareCalculationComponent.prototype.onItemPaymentMethodSelect = function (item, i) {
        this.addEditFareCalculationForm.value.fareCalculation_service_types[i] ? this.addEditFareCalculationForm.value.fareCalculation_service_types[i].fareCalculation_payment_method[item] : "";
        this.addEditFareCalculationForm.patchValue({
            fareCalculation_service_types: this.addEditFareCalculationForm.value.fareCalculation_service_types
        });
        if (this.dtr && !this.dtr.destroyed) {
            this.dtr.detectChanges();
        }
    };
    AddFareCalculationComponent.prototype.onItemPaymentMethodDeSelect = function (item) {
        // this.selectedPaymentMethod.filter(function (el) {
        //   if (el.id == item.id) {
        //     delete this.selectedPaymentMethod[el];
        //   }
        // });
    };
    AddFareCalculationComponent.prototype.onPaymentMethodSelectAll = function (items) {
    };
    AddFareCalculationComponent.prototype.onPaymentMethodDeSelectAll = function (items) {
    };
    AddFareCalculationComponent.prototype.getAllServiceTypes = function (id) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        //getOperatorServiceTypes
        this.ServiceOperatorService.getOperatorServiceTypes(id).subscribe(function (data) {
            if (data && data != undefined) {
                console.log(data);
                if (data['code'] == 200) {
                    _this.serviceTypes = data['data'];
                    if (_this.serviceTypes.length > 0) {
                        for (var i = 0; i < _this.serviceTypes.length; i++) {
                            _this.serviceTypes[i].fareCalculation_service_type_id = _this.serviceTypes[i].id;
                            _this.serviceTypes[i].fareCalculation_payment_method = 'COIN';
                            // this.serviceTypes[i].fareCalculation_select = ''
                            _this.serviceTypes[i].fareCalculation_free_km = '';
                            _this.serviceTypes[i].fareCalculation_pickup_free_time = '';
                            _this.serviceTypes[i].fareCalculation_congestion_free_time = '';
                            _this.serviceTypes[i].fareCalculation_complete_stop_free_time = '';
                            _this.serviceTypes[i].fareCalculation_tax = '',
                                _this.serviceTypes[i].fareCalculation_base_fare_coin = "",
                                // this.serviceTypes[i].fareCalculation_base_fare_driver = "",
                                // this.serviceTypes[i].fareCalculation_base_fare_admin = "",
                                _this.serviceTypes[i].fareCalculation_booking_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_booking_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_booking_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_per_km_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_per_km_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_per_km_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_per_min_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_per_min_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_per_min_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_pickup_waiting_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_pickup_waiting_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_pickup_waiting_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_stop_waiting_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_stop_waiting_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_stop_waiting_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_congestion_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_congestion_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_congestion_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_destination_change_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_destination_change_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_destination_change_fee_admin = "",
                                _this.serviceTypes[i].fareCalculation_governmental_fee_coin = "",
                                // this.serviceTypes[i].fareCalculation_governmental_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_governmental_fee_admin = "",
                                // this.serviceTypes[i].fareCalculation_cancellation_fee_driver = "",
                                // this.serviceTypes[i].fareCalculation_cancellation_fee_admin = "",
                                // this.serviceTypes[i].fareCalculation_driver_tip_driver = "",
                                // this.serviceTypes[i].fareCalculation_driver_tip_admin = "",
                                _this.fareCalculation_service_types.push(_this.createFields());
                        }
                        _this.addEditFareCalculationForm.patchValue({
                            fareCalculation_service_types: _this.serviceTypes
                        });
                    }
                    _this.navObj['link'] = _this.serviceTypes[0].serviceType_name;
                    if (_this.dtr && !_this.dtr.destroyed) {
                        _this.dtr.detectChanges();
                    }
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.error(data['message']);
                }
            }
        }, function (error) {
            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
            _this.toastr.error("Data Not Found");
        });
    };
    Object.defineProperty(AddFareCalculationComponent.prototype, "fareCalculation_service_types", {
        get: function () {
            var form = this.addEditFareCalculationForm;
            if (form) {
                return this.addEditFareCalculationForm.get('fareCalculation_service_types');
            }
        },
        enumerable: true,
        configurable: true
    });
    AddFareCalculationComponent.prototype.buildAddEditFareCalculationForm = function () {
        this.addEditFareCalculationForm = this._formBuilder.group({
            // fareCalculation_countryId: ["", [Validators.required,]],
            fareCalculation_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_franchiseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_timeFrameId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_service_types: this._formBuilder.array([]),
        });
    };
    AddFareCalculationComponent.prototype.createFields = function () {
        return this._formBuilder.group({
            fareCalculation_service_type_id: '',
            fareCalculation_payment_method: ["COIN"],
            // fareCalculation_select: ["ACTUALDISTANCE"],
            fareCalculation_free_km: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_pickup_free_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_congestion_free_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_complete_stop_free_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_tax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_base_fare_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_base_fare_driver: [""],
            // fareCalculation_base_fare_admin: [""],
            fareCalculation_booking_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_booking_fee_driver: [""],
            // fareCalculation_booking_fee_admin: [""],
            fareCalculation_per_km_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_per_km_fee_driver: [""],
            // fareCalculation_per_km_fee_admin: [""],
            fareCalculation_per_min_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_per_min_fee_driver: [""],
            // fareCalculation_per_min_fee_admin: [""],
            fareCalculation_pickup_waiting_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_pickup_waiting_fee_driver: [""],
            // fareCalculation_pickup_waiting_fee_admin: [""],
            fareCalculation_stop_waiting_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_stop_waiting_fee_driver: [""],
            // fareCalculation_stop_waiting_fee_admin: [""],
            fareCalculation_congestion_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_congestion_fee_driver: [""],
            // fareCalculation_congestion_fee_admin: [""],
            fareCalculation_destination_change_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_destination_change_fee_driver: [""],
            // fareCalculation_destination_change_fee_admin: [""],
            fareCalculation_governmental_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
        });
    };
    // getAllCountries() {
    //   Helpers.setLoading(true);
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
    AddFareCalculationComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                                            // Helpers.setLoading(false);
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
    AddFareCalculationComponent.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                                            // Helpers.setLoading(false);
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
    AddFareCalculationComponent.prototype.getAllTimeFramesList = function () {
        var _this = this;
        // Helpers.setLoading(true);
        this.FareCalculationService.getAllTimeFramesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data["code"] == 200) {
                        this.timeFrameRanges = data["data"];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        // Helpers.setLoading(false);
                    }
                    else {
                        // Helpers.setLoading(false);
                        this.toastr.error(data["message"]);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddFareCalculationComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj, serviceType_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditFareCalculationForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditFareCalculationForm.value;
                    obj = {
                        fareCalculation_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry,
                        fareCalculation_cityId: form.fareCalculation_cityId,
                        fareCalculation_franchiseId: form.fareCalculation_franchiseId,
                        fareCalculation_timeFrameId: form.fareCalculation_timeFrameId,
                        fareCalculation_status: form.fareCalculation_status,
                    };
                    serviceType_1 = [];
                    form.fareCalculation_service_types.map(function (fareCalculationService, i) {
                        serviceType_1.push({
                            fareCalculation_service_type_id: fareCalculationService.fareCalculation_service_type_id,
                            fareCalculation_payment_method: fareCalculationService.fareCalculation_payment_method ? fareCalculationService.fareCalculation_payment_method : 'COIN',
                            fareCalculation_select: fareCalculationService.fareCalculation_select,
                            fareCalculation_free_km: fareCalculationService.fareCalculation_free_km,
                            fareCalculation_pickup_free_time: fareCalculationService.fareCalculation_pickup_free_time,
                            fareCalculation_congestion_free_time: fareCalculationService.fareCalculation_congestion_free_time,
                            fareCalculation_complete_stop_free_time: fareCalculationService.fareCalculation_complete_stop_free_time,
                            fareCalculation_tax: fareCalculationService.fareCalculation_tax,
                            fareCalculation_base_fare: {
                                coin: fareCalculationService.fareCalculation_base_fare_coin,
                            },
                            fareCalculation_booking_fee: {
                                coin: fareCalculationService.fareCalculation_booking_fee_coin,
                            },
                            fareCalculation_per_km_fee: {
                                coin: fareCalculationService.fareCalculation_per_km_fee_coin,
                            },
                            fareCalculation_per_min_fee: {
                                coin: fareCalculationService.fareCalculation_per_min_fee_coin,
                            },
                            fareCalculation_pickup_waiting_fee: {
                                coin: fareCalculationService.fareCalculation_pickup_waiting_fee_coin,
                            },
                            fareCalculation_stop_waiting_fee: {
                                coin: fareCalculationService.fareCalculation_stop_waiting_fee_coin,
                            },
                            fareCalculation_congestion_fee: {
                                coin: fareCalculationService.fareCalculation_congestion_fee_coin,
                            },
                            fareCalculation_destination_change_fee: {
                                coin: fareCalculationService.fareCalculation_destination_change_fee_coin,
                            },
                            fareCalculation_governmental_fee: {
                                coin: fareCalculationService.fareCalculation_governmental_fee_coin,
                            },
                            fareCalculation_cancellation_fee: {
                            // admin_percentage:fareCalculationService.fareCalculation_cancellation_fee_admin,
                            // driver_percentage:fareCalculationService.fareCalculation_cancellation_fee_driver,
                            },
                            fareCalculation_driver_tip: {
                            // admin_percentage:fareCalculationService.fareCalculation_driver_tip_admin,
                            // driver_percentage:fareCalculationService.fareCalculation_driver_tip_driver,
                            }
                        });
                    });
                    obj['fareCalculation_service_types'] = serviceType_1;
                    this.stateSubscription = this.store.dispatch(new _state_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_11__["AddFareCalculation"](obj));
                    this.stateSubscription = this.store
                        .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_fare_calculation_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
                        .subscribe(function (data) {
                        if (data && data != undefined) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                            if (data["code"] == 200) {
                                _this.toastr.success(data["message"]);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(["/fare-calculation/list"]);
                            }
                            else {
                                _this.toastr.error(data["message"]);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditFareCalculationForm.controls.fareCalculation_service_types.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddFareCalculationComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"] },
        { type: _fare_calculation_service__WEBPACK_IMPORTED_MODULE_16__["FareCalculationService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_17__["ServiceOperatorService"] }
    ]; };
    AddFareCalculationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-add-fare-calculation",
            template: __webpack_require__(/*! raw-loader!./add-edit-fare-calculation.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-fare-calculation.component.scss */ "./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.scss")]
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
            _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"],
            _fare_calculation_service__WEBPACK_IMPORTED_MODULE_16__["FareCalculationService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_17__["ServiceOperatorService"]])
    ], AddFareCalculationComponent);
    return AddFareCalculationComponent;
}());

var EditFareCalculationComponent = /** @class */ (function () {
    function EditFareCalculationComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService, FareCalculationService, ServiceOperatorService) {
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
        this.FareCalculationService = FareCalculationService;
        this.ServiceOperatorService = ServiceOperatorService;
        this.navObj = {};
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.countries = [];
        this.cities = [];
        this.operators = [];
        this.dropdownSettingsPaymentMethod = [];
        this.timeFrameRanges = [];
        this.paymentMethods = [];
        this.selectedPaymentMethod = [];
        this.FARE_CALCULATION_CONST = this.translate.instant("FARECALCULATION");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.FARE_CALCULATION"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.FARE_CALCULATION_CONST.MODULE_NAME);
    }
    EditFareCalculationComponent.prototype.clickLink = function (e) {
        this.navObj['link'] = e;
    };
    EditFareCalculationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildAddEditFareCalculationForm();
        // this.getAllServiceTypes();
        this.dropdownSettingsPaymentMethod = {
            singleSelection: false,
            text: "Select Payment method",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
        this.FARE_CALCULATION_CONST.PAYMENT_VALUE.map(function (value, index) {
            _this.paymentMethods = Object.assign([], _this.paymentMethods);
            _this.paymentMethods.push({ id: index, itemName: value });
        });
        // this.getAllCountries();
        this.getAllTimeFramesList();
        this.getFareCalculationDetails();
    };
    EditFareCalculationComponent.prototype.operatorChange = function (id) {
        this.getAllServiceTypes(id);
    };
    EditFareCalculationComponent.prototype.onItemPaymentMethodSelect = function (item, i) {
        if (this.addEditFareCalculationForm.value.fareCalculation_service_types[i]) {
            this.addEditFareCalculationForm.value.fareCalculation_service_types[i].fareCalculation_payment_method[item];
            this.addEditFareCalculationForm.patchValue({
                fareCalculation_service_types: this.addEditFareCalculationForm.value.fareCalculation_service_types
            });
        }
        if (this.dtr && !this.dtr.destroyed) {
            this.dtr.detectChanges();
        }
    };
    EditFareCalculationComponent.prototype.onItemPaymentMethodDeSelect = function (item) {
        // this.paymentMethods.filter(function (el) {
        // if (el.id == item.id) {
        //   delete this.selectedItemsServices[el];
        // }
        // });
    };
    EditFareCalculationComponent.prototype.onPaymentMethodSelectAll = function (items) {
    };
    EditFareCalculationComponent.prototype.onPaymentMethodDeSelectAll = function (items) {
    };
    EditFareCalculationComponent.prototype.buildAddEditFareCalculationForm = function () {
        this.addEditFareCalculationForm = this._formBuilder.group({
            // fareCalculation_countryId: ["", [Validators.required,]],
            fareCalculation_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_franchiseId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_timeFrameId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_status: ["ACTIVE", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_service_types: this._formBuilder.array([]),
        });
    };
    Object.defineProperty(EditFareCalculationComponent.prototype, "fareCalculation_service_types", {
        get: function () {
            var form = this.addEditFareCalculationForm;
            if (form) {
                return this.addEditFareCalculationForm.get('fareCalculation_service_types');
            }
        },
        enumerable: true,
        configurable: true
    });
    EditFareCalculationComponent.prototype.getAllServiceTypes = function (id) {
        var _this = this;
        // Helpers.setLoading(true);
        this.ServiceOperatorService.getOperatorServiceTypes(id).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.serviceTypes = data['data'];
                        this.navObj['link'] = this.serviceTypes[0].serviceType_name;
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        // Helpers.setLoading(false);
                    }
                    else {
                        // Helpers.setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditFareCalculationComponent.prototype.createFields = function () {
        return this._formBuilder.group({
            fareCalculation_service_type_id: '',
            fareCalculation_payment_method: ["COIN"],
            // fareCalculation_select: ["ACTUALDISTANCE"],
            fareCalculation_free_km: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_pickup_free_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_congestion_free_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_complete_stop_free_time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_tax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            fareCalculation_base_fare_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            // fareCalculation_base_fare_driver: [""],
            // fareCalculation_base_fare_admin: [""],
            fareCalculation_booking_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_booking_fee_driver: [""],
            // fareCalculation_booking_fee_admin: [""],
            fareCalculation_per_km_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_per_km_fee_driver: [""],
            // fareCalculation_per_km_fee_admin: [""],
            fareCalculation_per_min_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_per_min_fee_driver: [""],
            // fareCalculation_per_min_fee_admin: [""],
            fareCalculation_pickup_waiting_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_pickup_waiting_fee_driver: [""],
            // fareCalculation_pickup_waiting_fee_admin: [""],
            fareCalculation_stop_waiting_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_stop_waiting_fee_driver: [""],
            // fareCalculation_stop_waiting_fee_admin: [""],
            fareCalculation_congestion_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_congestion_fee_driver: [""],
            // fareCalculation_congestion_fee_admin: [""],
            fareCalculation_destination_change_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
            // fareCalculation_destination_change_fee_driver: [""],
            // fareCalculation_destination_change_fee_admin: [""],
            fareCalculation_governmental_fee_coin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].fare_max), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_19__["validataion"].numericOnly)]],
        });
    };
    // getAllCountries() {
    //   Helpers.setLoading(true);
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
    EditFareCalculationComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                                            // Helpers.setLoading(false);
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
    EditFareCalculationComponent.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cityId) return [3 /*break*/, 2];
                        // let city = {cityId : cityId}
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
                                            // Helpers.setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        // let city = {cityId : cityId}
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditFareCalculationComponent.prototype.getAllTimeFramesList = function () {
        var _this = this;
        // Helpers.setLoading(true);
        this.FareCalculationService.getAllTimeFramesList().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data["code"] == 200) {
                        this.timeFrameRanges = data["data"];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        // Helpers.setLoading(false);
                    }
                    else {
                        // Helpers.setLoading(false);
                        this.toastr.error(data["message"]);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditFareCalculationComponent.prototype.getFareCalculationDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params["id"];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_11__["LoadFareCalculation"](this.id));
        this.stateSubscription = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_fare_calculation_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
            .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fareCalculationServiceArray, i, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data["code"] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        result = data["data"];
                        fareCalculationServiceArray = [];
                        for (i = 0; i < result.fareCalculation_service_types.length; i++) {
                            fareCalculationServiceArray.push({
                                fareCalculation_service_type_id: result.fareCalculation_service_types[i].fareCalculation_service_type_id,
                                fareCalculation_payment_method: result.fareCalculation_service_types[i].fareCalculation_payment_method ? result.fareCalculation_service_types[i].fareCalculation_payment_method : 'COIN',
                                fareCalculation_free_km: result.fareCalculation_service_types[i].fareCalculation_free_km,
                                fareCalculation_pickup_free_time: result.fareCalculation_service_types[i].fareCalculation_pickup_free_time,
                                fareCalculation_congestion_free_time: result.fareCalculation_service_types[i].fareCalculation_congestion_free_time,
                                fareCalculation_complete_stop_free_time: result.fareCalculation_service_types[i].fareCalculation_complete_stop_free_time,
                                fareCalculation_tax: result.fareCalculation_service_types[i].fareCalculation_tax,
                                fareCalculation_base_fare_coin: result.fareCalculation_service_types[i].fareCalculation_base_fare.coin,
                                // fareCalculation_base_fare_driver: result.fareCalculation_service_types[i].fareCalculation_base_fare.driver_percentage,
                                // fareCalculation_base_fare_admin: result.fareCalculation_service_types[i].fareCalculation_base_fare.admin_percentage,
                                fareCalculation_booking_fee_coin: result.fareCalculation_service_types[i].fareCalculation_booking_fee.coin,
                                // fareCalculation_booking_fee_driver: result.fareCalculation_service_types[i].fareCalculation_booking_fee.driver_percentage,
                                // fareCalculation_booking_fee_admin: result.fareCalculation_service_types[i].fareCalculation_booking_fee.admin_percentage,
                                fareCalculation_per_km_fee_coin: result.fareCalculation_service_types[i].fareCalculation_per_km_fee.coin,
                                // fareCalculation_per_km_fee_driver: result.fareCalculation_service_types[i].fareCalculation_per_km_fee.driver_percentage,
                                // fareCalculation_per_km_fee_admin: result.fareCalculation_service_types[i].fareCalculation_per_km_fee.admin_percentage,
                                fareCalculation_per_min_fee_coin: result.fareCalculation_service_types[i].fareCalculation_per_min_fee.coin,
                                // fareCalculation_per_min_fee_driver: result.fareCalculation_service_types[i].fareCalculation_per_min_fee.driver_percentage,
                                // fareCalculation_per_min_fee_admin: result.fareCalculation_service_types[i].fareCalculation_per_min_fee.admin_percentage,
                                fareCalculation_pickup_waiting_fee_coin: result.fareCalculation_service_types[i].fareCalculation_pickup_waiting_fee.coin,
                                // fareCalculation_pickup_waiting_fee_driver: result.fareCalculation_service_types[i].fareCalculation_pickup_waiting_fee.driver_percentage,
                                // fareCalculation_pickup_waiting_fee_admin: result.fareCalculation_service_types[i].fareCalculation_pickup_waiting_fee.admin_percentage,
                                fareCalculation_stop_waiting_fee_coin: result.fareCalculation_service_types[i].fareCalculation_stop_waiting_fee.coin,
                                // fareCalculation_stop_waiting_fee_driver: result.fareCalculation_service_types[i].fareCalculation_stop_waiting_fee.driver_percentage,
                                // fareCalculation_stop_waiting_fee_admin: result.fareCalculation_service_types[i].fareCalculation_stop_waiting_fee.admin_percentage,
                                fareCalculation_congestion_fee_coin: result.fareCalculation_service_types[i].fareCalculation_congestion_fee.coin,
                                // fareCalculation_congestion_fee_driver: result.fareCalculation_service_types[i].fareCalculation_congestion_fee.driver_percentage,
                                // fareCalculation_congestion_fee_admin: result.fareCalculation_service_types[i].fareCalculation_congestion_fee.admin_percentage,
                                fareCalculation_destination_change_fee_coin: result.fareCalculation_service_types[i].fareCalculation_destination_change_fee.coin,
                                // fareCalculation_destination_change_fee_driver: result.fareCalculation_service_types[i].fareCalculation_destination_change_fee.driver_percentage,
                                // fareCalculation_destination_change_fee_admin: result.fareCalculation_service_types[i].fareCalculation_destination_change_fee.admin_percentage,
                                fareCalculation_governmental_fee_coin: result.fareCalculation_service_types[i].fareCalculation_governmental_fee.coin,
                            });
                            this.fareCalculation_service_types.push(this.createFields());
                        }
                        fd = {
                            fareCalculation_countryId: result.fareCalculation_countryId,
                            fareCalculation_cityId: result.fareCalculation_cityId,
                            fareCalculation_franchiseId: result.fareCalculation_franchiseId,
                            fareCalculation_timeFrameId: result.fareCalculation_timeFrameId,
                            fareCalculation_status: result.fareCalculation_status,
                            fareCalculation_service_types: fareCalculationServiceArray
                        };
                        this.changeCountry(result.fareCalculation_countryId || _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry);
                        this.changeCity(result.fareCalculation_cityId);
                        this.operatorChange(result.fareCalculation_franchiseId);
                        return [4 /*yield*/, this.addEditFareCalculationForm.patchValue(fd)];
                    case 1:
                        _a.sent();
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data["message"]);
                        this.stateSubscription.unsubscribe();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditFareCalculationComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form_1, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditFareCalculationForm.valid) {
                    form_1 = this.addEditFareCalculationForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            fareCalculation_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].webDefaultCountry,
                            fareCalculation_cityId: form_1.fareCalculation_cityId,
                            fareCalculation_franchiseId: form_1.fareCalculation_franchiseId,
                            fareCalculation_timeFrameId: form_1.fareCalculation_timeFrameId,
                            fareCalculation_status: form_1.fareCalculation_status,
                        },
                    };
                    form_1.fareCalculation_service_types.map(function (fareCalculationService, i) {
                        form_1.fareCalculation_service_types[i] =
                            {
                                fareCalculation_service_type_id: fareCalculationService.fareCalculation_service_type_id,
                                fareCalculation_payment_method: fareCalculationService.fareCalculation_payment_method,
                                // fareCalculation_select: fareCalculationService.fareCalculation_select,
                                fareCalculation_free_km: fareCalculationService.fareCalculation_free_km,
                                fareCalculation_pickup_free_time: fareCalculationService.fareCalculation_pickup_free_time,
                                fareCalculation_congestion_free_time: fareCalculationService.fareCalculation_congestion_free_time,
                                fareCalculation_complete_stop_free_time: fareCalculationService.fareCalculation_complete_stop_free_time,
                                fareCalculation_tax: fareCalculationService.fareCalculation_tax,
                                fareCalculation_base_fare: {
                                    coin: fareCalculationService.fareCalculation_base_fare_coin,
                                },
                                fareCalculation_booking_fee: {
                                    coin: fareCalculationService.fareCalculation_booking_fee_coin,
                                },
                                fareCalculation_per_km_fee: {
                                    coin: fareCalculationService.fareCalculation_per_km_fee_coin,
                                },
                                fareCalculation_per_min_fee: {
                                    coin: fareCalculationService.fareCalculation_per_min_fee_coin,
                                },
                                fareCalculation_pickup_waiting_fee: {
                                    coin: fareCalculationService.fareCalculation_pickup_waiting_fee_coin,
                                },
                                fareCalculation_stop_waiting_fee: {
                                    coin: fareCalculationService.fareCalculation_stop_waiting_fee_coin,
                                },
                                fareCalculation_congestion_fee: {
                                    coin: fareCalculationService.fareCalculation_congestion_fee_coin,
                                },
                                fareCalculation_destination_change_fee: {
                                    coin: fareCalculationService.fareCalculation_destination_change_fee_coin,
                                },
                                fareCalculation_governmental_fee: {
                                    coin: fareCalculationService.fareCalculation_governmental_fee_coin,
                                },
                                fareCalculation_cancellation_fee: {
                                // admin_percentage: fareCalculationService.fareCalculation_cancellation_fee_admin,
                                // driver_percentage: fareCalculationService.fareCalculation_cancellation_fee_driver,
                                },
                                fareCalculation_driver_tip: {
                                // admin_percentage: fareCalculationService.fareCalculation_driver_tip_admin,
                                // driver_percentage: fareCalculationService.fareCalculation_driver_tip_driver ,
                                }
                            };
                    });
                    obj['data']['fareCalculation_service_types'] = form_1.fareCalculation_service_types;
                    this.stateSubscription = this.store.dispatch(new _state_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateFareCalculation"](obj));
                    this.stateSubscription = this.store
                        .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_fare_calculation_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"]))
                        .subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data["code"] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data["message"]);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(["/fare-calculation/list"]);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data["message"]);
                            }
                        }
                    });
                }
                else if (!this.addEditFareCalculationForm.controls.fareCalculation_service_types.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditFareCalculationComponent.ctorParameters = function () { return [
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
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"] },
        { type: _fare_calculation_service__WEBPACK_IMPORTED_MODULE_16__["FareCalculationService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_17__["ServiceOperatorService"] }
    ]; };
    EditFareCalculationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-edit-fare-calculation",
            template: __webpack_require__(/*! raw-loader!./add-edit-fare-calculation.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-fare-calculation.component.scss */ "./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.scss")]
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
            _country_country_service__WEBPACK_IMPORTED_MODULE_14__["CountryService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_15__["CityService"],
            _fare_calculation_service__WEBPACK_IMPORTED_MODULE_16__["FareCalculationService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_17__["ServiceOperatorService"]])
    ], EditFareCalculationComponent);
    return EditFareCalculationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ZhcmUtY2FsY3VsYXRpb24vZmFyZS1jYWxjdWxhdGlvbi1saXN0L2ZhcmUtY2FsY3VsYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FareCalculationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareCalculationListComponent", function() { return FareCalculationListComponent; });
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
var FareCalculationListComponent = /** @class */ (function () {
    function FareCalculationListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.FARE_CALCULATION_CONST = [];
        this.searchObj = { field: 'help_title', fareCalculation_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.FARE_CALCULATION_CONST = this.translate.instant('FARECALCULATION');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.FARE_CALCULATION'));
        titleService.setTitle(this.APPNAME + " | " + this.FARE_CALCULATION_CONST.MODULE_NAME);
    }
    FareCalculationListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    FareCalculationListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].FARE_CALCULATION.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].FARE_CALCULATION.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].FARE_CALCULATION.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].FARE_CALCULATION.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    FareCalculationListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    FareCalculationListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-fare-calculation-list', scripts).then(function () {
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
                    sProcessing: that.FARE_CALCULATION_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listFareCalculation,
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
                        title: that.FARE_CALCULATION_CONST.LABEL.SR_NO, data: null
                    },
                    // { title: that.FARE_CALCULATION_CONST.LABEL.COUNTRY, data: 'fareCalculation_countryName' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.CITY, data: 'fareCalculation_cityName' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.FRANCHISE, data: 'fareCalculation_franchiseName' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.TIME_FRAME, data: 'timeFrame_range' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.STATUS, data: 'fareCalculation_status' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.CREATED_ON, data: 'fareCalculation_createdOn' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.MODIFIED_ON, data: 'fareCalculation_modifyOn' },
                    { title: that.FARE_CALCULATION_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.FARE_CALCULATION_CONST.LABEL.SR_NO:
                                break;
                            // case that.FARE_CALCULATION_CONST.LABEL.COUNTRY:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.FARE_CALCULATION_CONST.LABEL.FRANCHISE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.FARE_CALCULATION_CONST.LABEL.CITY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.FARE_CALCULATION_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.FARE_CALCULATION_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"ACTIVE\">" + that.FARE_CALCULATION_CONST.LABEL.ACTIVE + "</option>\n                  <option value=\"INACTIVE\">" + that.FARE_CALCULATION_CONST.LABEL.INACTIVE + "</option></select>\n                  "));
                                break;
                            case that.FARE_CALCULATION_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.FARE_CALCULATION_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.FARE_CALCULATION_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.FARE_CALCULATION_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.FARE_CALCULATION_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                                // Enter key throu search
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
                    {
                        targets: 3,
                        width: '20%',
                        orderable: false,
                        render: function (a, e, t, n) {
                            return a;
                        }
                    },
                    // {
                    //   targets: 3,
                    //   width: '20%',
                    //   render: function (a, e, t, n) {
                    //     return a;
                    //   }
                    // },
                    {
                        targets: 4,
                        width: '15%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.fareCalculation_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.fareCalculation_status].title + '</span>';
                        }
                    },
                    {
                        targets: 5,
                        width: '10%'
                    },
                    {
                        targets: 6,
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
    FareCalculationListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/fare-calculation/edit/' + this.id]);
    };
    FareCalculationListComponent.prototype.delete = function (e) {
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
                            component: 'fareCalculation',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    FareCalculationListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'fareCalculation',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    FareCalculationListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    FareCalculationListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    FareCalculationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-fare-calculation-list',
            template: __webpack_require__(/*! raw-loader!./fare-calculation-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.html"),
            styles: [__webpack_require__(/*! ./fare-calculation-list.component.scss */ "./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], FareCalculationListComponent);
    return FareCalculationListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fare-calculation/fare-calculation.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/fare-calculation.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ZhcmUtY2FsY3VsYXRpb24vZmFyZS1jYWxjdWxhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/fare-calculation/fare-calculation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/fare-calculation.component.ts ***!
  \****************************************************************************/
/*! exports provided: FareCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareCalculationComponent", function() { return FareCalculationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var FareCalculationComponent = /** @class */ (function () {
    function FareCalculationComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].FARECALCULATION);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].fareCalculationManagement);
    }
    FareCalculationComponent.prototype.ngOnInit = function () {
    };
    FareCalculationComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    FareCalculationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-fare-calculation',
            template: __webpack_require__(/*! raw-loader!./fare-calculation.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fare-calculation/fare-calculation.component.html"),
            styles: [__webpack_require__(/*! ./fare-calculation.component.scss */ "./src/app/views/pages/fare-calculation/fare-calculation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], FareCalculationComponent);
    return FareCalculationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fare-calculation/fare-calculation.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/fare-calculation.module.ts ***!
  \*************************************************************************/
/*! exports provided: FareCalculationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareCalculationModule", function() { return FareCalculationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_fare_calculation_add_edit_fare_calculation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-fare-calculation/add-edit-fare-calculation.component */ "./src/app/views/pages/fare-calculation/add-edit-fare-calculation/add-edit-fare-calculation.component.ts");
/* harmony import */ var _fare_calculation_list_fare_calculation_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fare-calculation-list/fare-calculation-list.component */ "./src/app/views/pages/fare-calculation/fare-calculation-list/fare-calculation-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _fare_calculation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fare-calculation.component */ "./src/app/views/pages/fare-calculation/fare-calculation.component.ts");
/* harmony import */ var _state_fare_calculation_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/fare-calculation.effects */ "./src/app/views/pages/fare-calculation/state/fare-calculation.effects.ts");
/* harmony import */ var _state_fare_calculation_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./state/fare-calculation.reducer */ "./src/app/views/pages/fare-calculation/state/fare-calculation.reducer.ts");



















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _fare_calculation_component__WEBPACK_IMPORTED_MODULE_16__["FareCalculationComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _fare_calculation_list_fare_calculation_list_component__WEBPACK_IMPORTED_MODULE_4__["FareCalculationListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].FARE_CALCULATION.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_fare_calculation_add_edit_fare_calculation_component__WEBPACK_IMPORTED_MODULE_3__["AddFareCalculationComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].FARE_CALCULATION.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _add_edit_fare_calculation_add_edit_fare_calculation_component__WEBPACK_IMPORTED_MODULE_3__["EditFareCalculationComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].FARE_CALCULATION.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var FareCalculationModule = /** @class */ (function () {
    function FareCalculationModule() {
    }
    FareCalculationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_fare_calculation_component__WEBPACK_IMPORTED_MODULE_16__["FareCalculationComponent"], _fare_calculation_list_fare_calculation_list_component__WEBPACK_IMPORTED_MODULE_4__["FareCalculationListComponent"], _add_edit_fare_calculation_add_edit_fare_calculation_component__WEBPACK_IMPORTED_MODULE_3__["AddFareCalculationComponent"], _add_edit_fare_calculation_add_edit_fare_calculation_component__WEBPACK_IMPORTED_MODULE_3__["EditFareCalculationComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_fare_calculation_effects__WEBPACK_IMPORTED_MODULE_17__["FareCalculationEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("fare-calculation", _state_fare_calculation_reducer__WEBPACK_IMPORTED_MODULE_18__["FareCalculationReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["AngularMultiSelectModule"]
            ]
        })
    ], FareCalculationModule);
    return FareCalculationModule;
}());



/***/ }),

/***/ "./src/app/views/pages/fare-calculation/state/fare-calculation.actions.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/state/fare-calculation.actions.ts ***!
  \********************************************************************************/
/*! exports provided: FareCalculationActionTypes, LoadFareCalculation, LoadFareCalculationSuccess, LoadFareCalculationFail, UpdateFareCalculation, UpdateFareCalculationSuccess, UpdateFareCalculationFail, DeleteFareCalculation, DeleteFareCalculationSuccess, DeleteFareCalculationFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddFareCalculation, AddFareCalculationSuccess, AddFareCalculationFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareCalculationActionTypes", function() { return FareCalculationActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFareCalculation", function() { return LoadFareCalculation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFareCalculationSuccess", function() { return LoadFareCalculationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFareCalculationFail", function() { return LoadFareCalculationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFareCalculation", function() { return UpdateFareCalculation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFareCalculationSuccess", function() { return UpdateFareCalculationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFareCalculationFail", function() { return UpdateFareCalculationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFareCalculation", function() { return DeleteFareCalculation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFareCalculationSuccess", function() { return DeleteFareCalculationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFareCalculationFail", function() { return DeleteFareCalculationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFareCalculation", function() { return AddFareCalculation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFareCalculationSuccess", function() { return AddFareCalculationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFareCalculationFail", function() { return AddFareCalculationFail; });
var FareCalculationActionTypes;
(function (FareCalculationActionTypes) {
    FareCalculationActionTypes["UPDATE_STATUS"] = "[FARECALCULATION] Update Status";
    FareCalculationActionTypes["UPDATE_STATUS_SUCCESS"] = "[FARECALCULATION]  Update Status Success";
    FareCalculationActionTypes["UPDATE_STATUS_FAIL"] = "[FARECALCULATION]  Update Status Fail";
    FareCalculationActionTypes["LOAD_FARECALCULATION"] = "[FARECALCULATION] Load FARECALCULATION";
    FareCalculationActionTypes["LOAD_FARECALCULATION_SUCCESS"] = "[FARECALCULATION] Load FARECALCULATION Success";
    FareCalculationActionTypes["LOAD_FARECALCULATION_FAIL"] = "[FARECALCULATION] Load FARECALCULATION Fail";
    FareCalculationActionTypes["UPDATE_FARECALCULATION"] = "[FARECALCULATION] Update FARECALCULATION";
    FareCalculationActionTypes["UPDATE_FARECALCULATION_SUCCESS"] = "[FARECALCULATION] Update FARECALCULATION Success";
    FareCalculationActionTypes["UPDATE_FARECALCULATION_FAIL"] = "[FARECALCULATION] Update FARECALCULATION Fail";
    FareCalculationActionTypes["DELETE_FARECALCULATION"] = "[FARECALCULATION] Delete FARECALCULATION";
    FareCalculationActionTypes["DELETE_FARECALCULATION_SUCCESS"] = "[FARECALCULATION] Delete FARECALCULATION Success";
    FareCalculationActionTypes["DELETE_FARECALCULATION_FAIL"] = "[FARECALCULATION] Delete FARECALCULATION Fail";
    FareCalculationActionTypes["ADD_FARECALCULATION"] = "[FARECALCULATION] Upload Data";
    FareCalculationActionTypes["ADD_FARECALCULATION_SUCCESS"] = "[FARECALCULATION] Upload Data Success";
    FareCalculationActionTypes["ADD_FARECALCULATION_FAIL"] = "[FARECALCULATION] Upload Data Fail";
    FareCalculationActionTypes["UPLOAD_DATA"] = "[FARECALCULATION] Upload Data";
    FareCalculationActionTypes["UPLOAD_DATA_SUCCESS"] = "[FARECALCULATION] Upload Data Success";
    FareCalculationActionTypes["UPLOAD_DATA_FAIL"] = "[FARECALCULATION] Upload Data Fail";
})(FareCalculationActionTypes || (FareCalculationActionTypes = {}));
var LoadFareCalculation = /** @class */ (function () {
    function LoadFareCalculation(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.LOAD_FARECALCULATION;
    }
    LoadFareCalculation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadFareCalculation;
}());

var LoadFareCalculationSuccess = /** @class */ (function () {
    function LoadFareCalculationSuccess(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.LOAD_FARECALCULATION_SUCCESS;
    }
    LoadFareCalculationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadFareCalculationSuccess;
}());

var LoadFareCalculationFail = /** @class */ (function () {
    function LoadFareCalculationFail(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.LOAD_FARECALCULATION_FAIL;
    }
    LoadFareCalculationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadFareCalculationFail;
}());

var UpdateFareCalculation = /** @class */ (function () {
    function UpdateFareCalculation(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.UPDATE_FARECALCULATION;
    }
    UpdateFareCalculation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateFareCalculation;
}());

var UpdateFareCalculationSuccess = /** @class */ (function () {
    function UpdateFareCalculationSuccess(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.UPDATE_FARECALCULATION_SUCCESS;
    }
    UpdateFareCalculationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateFareCalculationSuccess;
}());

var UpdateFareCalculationFail = /** @class */ (function () {
    function UpdateFareCalculationFail(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.UPDATE_FARECALCULATION_FAIL;
    }
    UpdateFareCalculationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateFareCalculationFail;
}());

var DeleteFareCalculation = /** @class */ (function () {
    function DeleteFareCalculation(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.DELETE_FARECALCULATION;
    }
    DeleteFareCalculation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteFareCalculation;
}());

var DeleteFareCalculationSuccess = /** @class */ (function () {
    function DeleteFareCalculationSuccess(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.DELETE_FARECALCULATION_SUCCESS;
    }
    DeleteFareCalculationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteFareCalculationSuccess;
}());

var DeleteFareCalculationFail = /** @class */ (function () {
    function DeleteFareCalculationFail(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.DELETE_FARECALCULATION_FAIL;
    }
    DeleteFareCalculationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteFareCalculationFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddFareCalculation = /** @class */ (function () {
    function AddFareCalculation(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.ADD_FARECALCULATION;
    }
    AddFareCalculation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddFareCalculation;
}());

var AddFareCalculationSuccess = /** @class */ (function () {
    function AddFareCalculationSuccess(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.ADD_FARECALCULATION_SUCCESS;
    }
    AddFareCalculationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddFareCalculationSuccess;
}());

var AddFareCalculationFail = /** @class */ (function () {
    function AddFareCalculationFail(payload) {
        this.payload = payload;
        this.type = FareCalculationActionTypes.ADD_FARECALCULATION_FAIL;
    }
    AddFareCalculationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddFareCalculationFail;
}());



/***/ }),

/***/ "./src/app/views/pages/fare-calculation/state/fare-calculation.effects.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/state/fare-calculation.effects.ts ***!
  \********************************************************************************/
/*! exports provided: FareCalculationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareCalculationEffect", function() { return FareCalculationEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fare-calculation.actions */ "./src/app/views/pages/fare-calculation/state/fare-calculation.actions.ts");
/* harmony import */ var _fare_calculation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fare-calculation.service */ "./src/app/views/pages/fare-calculation/fare-calculation.service.ts");







var FareCalculationEffect = /** @class */ (function () {
    function FareCalculationEffect(actions$, FareCalculationService) {
        var _this = this;
        this.actions$ = actions$;
        this.FareCalculationService = FareCalculationService;
        this.deleteFareCalculation$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["FareCalculationActionTypes"].DELETE_FARECALCULATION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.FareCalculationService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteFareCalculationSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteFareCalculationFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["FareCalculationActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.FareCalculationService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadFareCalculation$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["FareCalculationActionTypes"].LOAD_FARECALCULATION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.FareCalculationService.getFareCalculationById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["LoadFareCalculationSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["LoadFareCalculationFail"](err));
            }));
        }));
        this.updateFareCalculation$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["FareCalculationActionTypes"].UPDATE_FARECALCULATION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.FareCalculationService.updateFareCalculation(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateFareCalculationSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateFareCalculationFail"](err)); }));
        }));
        this.addFareCalculation$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["FareCalculationActionTypes"].ADD_FARECALCULATION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.FareCalculationService.addFareCalculation(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["AddFareCalculationSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_5__["AddFareCalculationFail"](err));
            }));
        }));
    }
    FareCalculationEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _fare_calculation_service__WEBPACK_IMPORTED_MODULE_6__["FareCalculationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], FareCalculationEffect.prototype, "deleteFareCalculation$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], FareCalculationEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], FareCalculationEffect.prototype, "loadFareCalculation$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], FareCalculationEffect.prototype, "updateFareCalculation$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], FareCalculationEffect.prototype, "addFareCalculation$", void 0);
    FareCalculationEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _fare_calculation_service__WEBPACK_IMPORTED_MODULE_6__["FareCalculationService"]])
    ], FareCalculationEffect);
    return FareCalculationEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/fare-calculation/state/fare-calculation.reducer.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/fare-calculation/state/fare-calculation.reducer.ts ***!
  \********************************************************************************/
/*! exports provided: initialState, FareCalculationReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareCalculationReducer", function() { return FareCalculationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fare-calculation.actions */ "./src/app/views/pages/fare-calculation/state/fare-calculation.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function FareCalculationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Fare Calculation load-----------------------------
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].LOAD_FARECALCULATION_SUCCESS: {
            return action.payload;
        }
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].LOAD_FARECALCULATION_FAIL: {
            return action.payload.error;
        }
        // for Fare Calculation delete-----------------------------
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].DELETE_FARECALCULATION_SUCCESS: {
            return action.payload;
        }
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].DELETE_FARECALCULATION_FAIL: {
            return action.payload.error;
        }
        // for Fare Calculation update-----------------------------
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].UPDATE_FARECALCULATION_SUCCESS: {
            return action.payload;
        }
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].UPDATE_FARECALCULATION_FAIL: {
            return action.payload.error;
        }
        // for Fare Calculation upadat status-----------------------------
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Fare Calculation add-----------------------------
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].ADD_FARECALCULATION_SUCCESS: {
            return action.payload;
        }
        case _fare_calculation_actions__WEBPACK_IMPORTED_MODULE_0__["FareCalculationActionTypes"].ADD_FARECALCULATION_FAIL: {
            return action.payload.error;
        }
    }
}
var getFareCalculationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("fare-calculation");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getFareCalculationState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-fare-calculation-fare-calculation-module.js.map