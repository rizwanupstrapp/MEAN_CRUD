(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-service-operator-service-operator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'SERVICEOPERATOR.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'SERVICEOPERATOR.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/service-operator/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditServiceOperatorForm\" [formGroup]=\"addEditServiceOperatorForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- <div *ngIf=\"Editor\">    \n                    <ckeditor  #editor [editor]=\"Editor\"  class=\"form-control\" type=\"text\" placeholder=\"Enter Contant\" formControlName=\"cms_content_ar\"            [ngClass]=\"{ 'is-invalid': submitted && addEditServiceOperatorForm.controls.cms_content_ar.errors }\"></ckeditor></div> -->\n                <!-- -----------country  city-->\n                <div class=\"form-group  row\">\n                    <!-- <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICEOPERATOR.LABEL.CITY_COUNTRY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"country\"\n                                (change)=\"changeCountry($event.target.value)\"\n                                formControlName=\"serviceOperator_countryId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditServiceOperatorForm.controls.serviceOperator_countryId.errors }\">\n                                <option value=\"\">{{'SERVICEOPERATOR.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                    {{country.country_name}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_countryId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_countryId.errors?.required\">\n                                    {{'SERVICEOPERATOR.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICEOPERATOR.LABEL.COUNTRY_CITY_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- cityId -->\n                       <div class=\"col-lg-12\">\n                            <select *ngIf=\"isAdd\" class=\"form-control m-input\" id=\"city\" formControlName=\"serviceOperator_cityId\" (change)=\"changeCity($event.target.value,1)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditServiceOperatorForm.controls.serviceOperator_cityId.errors }\">\n                                <option value=\"\">{{'SERVICEOPERATOR.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">\n                                    {{city.city_name}}\n                                </option>\n                            </select>\n                            <select *ngIf=\"!isAdd\" class=\"form-control m-input\" id=\"city\" formControlName=\"serviceOperator_cityId\" (change)=\"changeCity($event.target.value,1)\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditServiceOperatorForm.controls.serviceOperator_cityId.errors }\"\n                                disabled>\n                                <option value=\"\">{{'SERVICEOPERATOR.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">\n                                    {{city.city_name}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_cityId.errors\" class=\"form-control-feedback\"\n                                style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_cityId.errors?.required\">\n                                    {{'SERVICEOPERATOR.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n\n                    </div>\n               \n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICEOPERATOR.LABEL.SERVICEOPERATOR_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- Operator Name -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"operatorName\"\n                                formControlName=\"serviceOperator_serviceOperatorId\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditServiceOperatorForm.controls.serviceOperator_serviceOperatorId.errors }\">\n                                <option value=\"\">{{'SERVICEOPERATOR.PLACEHOLDERS.SELECT_OPERATOR' | translate}}</option>\n                                <option value=\"{{operator._id}}\" *ngFor=\"let operator of operators\">\n                                    {{operator.operatorName}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_serviceOperatorId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_serviceOperatorId.errors?.required\">\n                                    {{'SERVICEOPERATOR.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- -----------serviceType Name  Operator Name-->\n                <div class=\"form-group  row\">\n                \n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICEOPERATOR.LABEL.SERVICETYPE_NAME' | translate}}*\n                            </label>\n                        </div>\n                        <!-- service type id -->\n                        <div class=\"col-lg-12 multiselect_drpdwn\">\n                            <angular2-multiselect [data]=\"serviceTypes\" [(ngModel)]=\"selectedItemsServices\"\n                                [settings]=\"dropdownSettingsServices\"\n                                (onSelect)=\"onItemServicesSelect($event)\"\n                                (onDeSelect)=\"onItemServicesDeSelect($event)\"\n                                (onSelectAll)=\"onServicesSelectAll($event)\"\n                                (onDeSelectAll)=\"onServicesDeSelectAll($event)\"\n                                formControlName=\"serviceOperator_serviceTypeId\">\n                            </angular2-multiselect>\n                            <div *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_serviceTypeId.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_serviceTypeId.errors?.required\">\n                                    {{'SERVICEOPERATOR.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                \n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'SERVICEOPERATOR.LABEL.STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- Operator Name -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"serviceOperator_status\"\n                                formControlName=\"serviceOperator_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditServiceOperatorForm.controls.serviceOperator_status.errors }\">\n                                <!-- <option value=\"\">{{'SERVICEOPERATOR.PLACEHOLDERS.STATUS' | translate}}</option> -->\n                                <option value=\"ACTIVE\" selected>{{'SERVICEOPERATOR.LABEL.ACTIVE' | translate}}</option>\n                                <option value=\"INACTIVE\">{{'SERVICEOPERATOR.LABEL.INACTIVE' | translate}}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditServiceOperatorForm.controls.serviceOperator_status.errors?.required\">\n                                    {{'SERVICEOPERATOR.VALIDATION.FIELD_REQUIRED' |translate}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n              \n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/service-operator/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                {{'BUTTONS.CANCEL' | translate }}\n                            </button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" \n                                class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                   </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'SERVICEOPERATOR.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/service-operator/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/service-operator.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/service-operator/service-operator.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

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

/***/ "./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvc2VydmljZS1vcGVyYXRvci9hZGQtZWRpdC1zZXJ2aWNlLW9wZXJhdG9yL2FkZC1lZGl0LXNlcnZpY2Utb3BlcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NlcnZpY2Utb3BlcmF0b3IvYWRkLWVkaXQtc2VydmljZS1vcGVyYXRvci9hZGQtZWRpdC1zZXJ2aWNlLW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddServiceOperatorComponent, EditServiceOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceOperatorComponent", function() { return AddServiceOperatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceOperatorComponent", function() { return EditServiceOperatorComponent; });
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
/* harmony import */ var _state_service_operator_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/service-operator.actions */ "./src/app/views/pages/service-operator/state/service-operator.actions.ts");
/* harmony import */ var _state_service_operator_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/service-operator.reducer */ "./src/app/views/pages/service-operator/state/service-operator.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _service_operator_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");


















var AddServiceOperatorComponent = /** @class */ (function () {
    function AddServiceOperatorComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService, ServiceOperatorService) {
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
        this.ServiceOperatorService = ServiceOperatorService;
        this.isAdd = true;
        this.submitted = false;
        this.selectedItemsServices = [];
        this.countries = [];
        this.cities = [];
        this.operators = [];
        this.cityList = [];
        this.serviceTypes = [];
        this.dropdownSettingsServices = {};
        this.SERVICEOPERATOR_CONST = this.translate.instant('SERVICEOPERATOR');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_OPERATOR'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.SERVICEOPERATOR_CONST.MODULE_NAME);
    }
    AddServiceOperatorComponent.prototype.ngOnInit = function () {
        this.buildAddEditServiveOperatorForm();
        this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry);
        // this.getAllOperators();
        this.getAllServiceTypes();
        this.dropdownSettingsServices = {
            singleSelection: false,
            text: "Select Services",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    };
    AddServiceOperatorComponent.prototype.onItemServicesSelect = function (item) {
        this.selectedItemsServices[item];
    };
    AddServiceOperatorComponent.prototype.onItemServicesDeSelect = function (item) {
        this.selectedItemsServices.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsServices[el];
            }
        });
    };
    AddServiceOperatorComponent.prototype.onServicesSelectAll = function (items) {
    };
    AddServiceOperatorComponent.prototype.onServicesDeSelectAll = function (items) {
    };
    AddServiceOperatorComponent.prototype.buildAddEditServiveOperatorForm = function () {
        this.addEditServiceOperatorForm = this._formBuilder.group({
            // serviceOperator_countryId: ["", [Validators.required]],
            serviceOperator_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceOperator_serviceTypeId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceOperator_serviceOperatorId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceOperator_status: ["ACTIVE", []]
        });
    };
    // getAllCountries() {
    //   Helpers.setLoading(true);
    //   this.countryService.getAllCountries().subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data['code'] == 200) {
    //         this.countries = data['data'];
    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //           this.dtr.detectChanges();
    //         }
    //         Helpers.setLoading(false);
    //       } else {
    //         Helpers.setLoading(false);
    //         this.toastr.error(data['message']);
    //       }
    //     }
    //   });
    // }
    AddServiceOperatorComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService.getCityListServiceOperator(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
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
    AddServiceOperatorComponent.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!cityId) return [3 /*break*/, 2];
                        // let city = {cityId : cityId}
                        return [4 /*yield*/, this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
                                        case 1:
                                            _a.operators = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
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
    AddServiceOperatorComponent.prototype.getAllServiceTypes = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.ServiceOperatorService.getAllServiceTypes().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        data['data'].forEach(function (element) {
                            _this.serviceTypes.push({
                                id: element._id,
                                itemName: element.serviceType_name
                            });
                        });
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
    AddServiceOperatorComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditServiceOperatorForm.valid) {
                    this.saveData();
                }
                else if (!this.addEditServiceOperatorForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddServiceOperatorComponent.prototype.saveData = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var result = this.addEditServiceOperatorForm.value;
        var serviceTypeArray = [];
        result.serviceOperator_serviceTypeId.forEach(function (element) {
            serviceTypeArray.push(element.id);
        });
        var obj = {
            serviceOperator_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry,
            serviceOperator_cityId: result.serviceOperator_cityId,
            serviceOperator_serviceTypeId: serviceTypeArray,
            serviceOperator_serviceOperatorId: result.serviceOperator_serviceOperatorId,
            serviceOperator_status: result.serviceOperator_status,
        };
        this.stateSubscription = this.store.dispatch(new _state_service_operator_actions__WEBPACK_IMPORTED_MODULE_11__["AddServiceOperator"](obj));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_service_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.success(data['message']);
                    _this.stateSubscription.unsubscribe();
                    _this.router.navigate(['/service-operator/list']);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.error(data['message']);
                    _this.stateSubscription.unsubscribe();
                }
            }
        });
    };
    AddServiceOperatorComponent.ctorParameters = function () { return [
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
        { type: _service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"] }
    ]; };
    AddServiceOperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-service-operator',
            template: __webpack_require__(/*! raw-loader!./add-edit-service-operator.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-service-operator.component.scss */ "./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.scss")]
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
            _service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"]])
    ], AddServiceOperatorComponent);
    return AddServiceOperatorComponent;
}());

var EditServiceOperatorComponent = /** @class */ (function () {
    function EditServiceOperatorComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, countryService, cityService, ServiceOperatorService) {
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
        this.ServiceOperatorService = ServiceOperatorService;
        this.isAdd = false;
        this.submitted = false;
        this.SERVICEOPERATOR_CONST = [];
        this.countries = [];
        this.cities = [];
        this.operators = [];
        //Multiselect service types
        this.serviceTypes = [];
        this.selectedItemsServices = [];
        this.dropdownSettingsServices = {};
        // SET SUBHEAD AND TITLE
        this.SERVICEOPERATOR_CONST = this.translate.instant('SERVICEOPERATOR');
        this.subheaderService.setTitle(this.translate.instant('MENU.SERVICE_OPERATOR'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.SERVICEOPERATOR_CONST.MODULE_NAME);
    }
    EditServiceOperatorComponent.prototype.ngOnInit = function () {
        this.buildAddEditServiceOperatorForm();
        this.getServiceOperatorDetails();
        // this.getAllCountries();
        this.dropdownSettingsServices = {
            singleSelection: false,
            text: "Select Services",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdown"
        };
    };
    //yt
    EditServiceOperatorComponent.prototype.onItemServicesSelect = function (item) {
        this.selectedItemsServices[item];
    };
    EditServiceOperatorComponent.prototype.onItemServicesDeSelect = function (item) {
        this.selectedItemsServices.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsServices[el];
            }
        });
    };
    EditServiceOperatorComponent.prototype.onServicesSelectAll = function (items) {
    };
    EditServiceOperatorComponent.prototype.onServicesDeSelectAll = function (items) {
    };
    EditServiceOperatorComponent.prototype.buildAddEditServiceOperatorForm = function () {
        this.addEditServiceOperatorForm = this._formBuilder.group({
            // serviceOperator_countryId: ["", [Validators.required]],
            serviceOperator_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceOperator_serviceTypeId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceOperator_serviceOperatorId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceOperator_status: ["ACTIVE", []]
        });
    };
    // getAllCountries() {
    //   Helpers.setLoading(true);
    //   this.countryService.getAllCountries().subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data['code'] == 200) {
    //         this.countries = data['data'];
    //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
    //           this.dtr.detectChanges();
    //         }
    //         Helpers.setLoading(false);
    //       } else {
    //         Helpers.setLoading(false);
    //         this.toastr.error(data['message']);
    //       }
    //     }
    //   });
    // }
    EditServiceOperatorComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!country) return [3 /*break*/, 2];
                        countryId = { city_countryId: country };
                        return [4 /*yield*/, this.cityService.getCountryCities(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
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
    EditServiceOperatorComponent.prototype.changeCity = function (cityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        if (!cityId) return [3 /*break*/, 2];
                        // let city = {cityId : cityId}
                        return [4 /*yield*/, this.ServiceOperatorService.getOperatorCityWise(cityId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data['code'] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
                                        case 1:
                                            _a.operators = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
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
    EditServiceOperatorComponent.prototype.getAllServiceTypes = function (param) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                        return [4 /*yield*/, this.ServiceOperatorService.getAllServiceTypes().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data && data != undefined)) return [3 /*break*/, 5];
                                            if (!(data['code'] == 200)) return [3 /*break*/, 4];
                                            _a = this;
                                            return [4 /*yield*/, data['data']];
                                        case 1:
                                            _a.serviceTypes = _b.sent();
                                            if (!(param && param.length && this.serviceTypes.length)) return [3 /*break*/, 3];
                                            return [4 /*yield*/, param.map(function (element) {
                                                    var ar = _this.serviceTypes.filter(function (x) { return x.id == element; });
                                                    if (ar.length) {
                                                        _this.selectedItemsServices.push(ar[0]);
                                                    }
                                                    if (_this.selectedItemsServices.length == param) {
                                                        if (_this.dtr && !_this.dtr.destroyed) {
                                                            _this.dtr.detectChanges();
                                                        }
                                                    }
                                                })];
                                        case 2:
                                            _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            // await data['data'].map(element => {
                                            //   this.serviceTypes.push({
                                            //     id: element._id,
                                            //     itemName: element.serviceType_name
                                            //   })
                                            // });
                                            // if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                                            //   this.dtr.detectChanges();
                                            // }
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            return [3 /*break*/, 5];
                                        case 4:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditServiceOperatorComponent.prototype.getServiceOperatorDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_service_operator_actions__WEBPACK_IMPORTED_MODULE_11__["LoadServiceOperator"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_service_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 6];
                        if (!(data['code'] == 200)) return [3 /*break*/, 5];
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        fd = {
                            // serviceOperator_countryId: result.serviceOperator_countryId,
                            serviceOperator_cityId: result.serviceOperator_cityId != null && result.serviceOperator_cityId != undefined ? result.serviceOperator_cityId : "",
                            serviceOperator_serviceOperatorId: result.serviceOperator_serviceOperatorId != null && result.serviceOperator_serviceOperatorId != undefined ? result.serviceOperator_serviceOperatorId : "",
                            serviceOperator_status: result.serviceOperator_status != null && result.serviceOperator_status != undefined ? result.serviceOperator_status : "",
                        };
                        return [4 /*yield*/, this.getAllServiceTypes(result.serviceOperator_serviceTypeId || [])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.changeCountry(result.serviceOperator_countryId)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.changeCity(result.serviceOperator_cityId)
                            // to fecth details for service type
                            // if (this.serviceTypes && this.serviceTypes.length) {
                            //   this.serviceTypes.map(element => {
                            //     console.log('---------------------1----', element.id)
                            //     if (result.serviceOperator_serviceTypeId.indexOf(element.id.toString())) {
                            //       console.log('-------------------------', element.id)
                            //       this.selectedItemsServices.push(element);
                            //       if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                            //         this.dtr.detectChanges();
                            //       }
                            //     }
                            //   });
                            // }
                        ];
                    case 4:
                        _a.sent();
                        // to fecth details for service type
                        // if (this.serviceTypes && this.serviceTypes.length) {
                        //   this.serviceTypes.map(element => {
                        //     console.log('---------------------1----', element.id)
                        //     if (result.serviceOperator_serviceTypeId.indexOf(element.id.toString())) {
                        //       console.log('-------------------------', element.id)
                        //       this.selectedItemsServices.push(element);
                        //       if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        //         this.dtr.detectChanges();
                        //       }
                        //     }
                        //   });
                        // }
                        this.addEditServiceOperatorForm.patchValue(fd);
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 6];
                    case 5:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    EditServiceOperatorComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.addEditServiceOperatorForm.value.serviceOperator_serviceTypeId.length) {
            this.removeValidator();
        }
        if (this.addEditServiceOperatorForm.valid) {
            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
            this.saveData();
        }
        else if (!this.addEditServiceOperatorForm.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditServiceOperatorComponent.prototype.removeValidator = function () {
        this.addEditServiceOperatorForm
            .get('serviceOperator_serviceTypeId')
            .setValidators([]);
        this.addEditServiceOperatorForm.get('serviceOperator_serviceTypeId').updateValueAndValidity();
    };
    EditServiceOperatorComponent.prototype.saveData = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var result = this.addEditServiceOperatorForm.value;
        var serviceTypeArray = [];
        result.serviceOperator_serviceTypeId.forEach(function (element) {
            serviceTypeArray.push(element.id);
        });
        var obj = {
            id: this.id,
            data: {
                serviceOperator_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry,
                serviceOperator_cityId: result.serviceOperator_cityId,
                serviceOperator_serviceTypeId: serviceTypeArray,
                serviceOperator_serviceOperatorId: result.serviceOperator_serviceOperatorId,
                serviceOperator_status: result.serviceOperator_status
            }
        };
        this.stateSubscription = this.store.dispatch(new _state_service_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateServiceOperator"](obj));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_service_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.success(data['message']);
                    _this.stateSubscription.unsubscribe();
                    _this.router.navigate(['/service-operator/list']);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                    _this.toastr.error(data['message']);
                }
            }
        });
    };
    EditServiceOperatorComponent.ctorParameters = function () { return [
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
        { type: _service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"] }
    ]; };
    EditServiceOperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-service-operator',
            template: __webpack_require__(/*! raw-loader!./add-edit-service-operator.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-service-operator.component.scss */ "./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.scss")]
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
            _service_operator_service__WEBPACK_IMPORTED_MODULE_16__["ServiceOperatorService"]])
    ], EditServiceOperatorComponent);
    return EditServiceOperatorComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NlcnZpY2Utb3BlcmF0b3Ivc2VydmljZS1vcGVyYXRvci1saXN0L3NlcnZpY2Utb3BlcmF0b3ItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ServiceOperatorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOperatorListComponent", function() { return ServiceOperatorListComponent; });
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
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");











function _window() {
    // return the global native browser window object
    return window;
}
var ServiceOperatorListComponent = /** @class */ (function () {
    function ServiceOperatorListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = "";
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.SERVICEOPERATOR_CONST = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.SERVICEOPERATOR_CONST = this.translate.instant("SERVICEOPERATOR");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.SERVICE_OPERATOR"));
        titleService.setTitle(this.APPNAME + " | " + this.SERVICEOPERATOR_CONST.MODULE_NAME);
    }
    ServiceOperatorListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    ServiceOperatorListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_OPERATOR.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_OPERATOR.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_OPERATOR.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].SERVICE_OPERATOR.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    ServiceOperatorListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    ServiceOperatorListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script
            .loadScripts("kt-service-operator-list", scripts)
            .then(function () {
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
                    sProcessing: that.SERVICEOPERATOR_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listServiceOperator,
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    },
                },
                columns: [
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.SR_NO,
                        data: null,
                    },
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.SERVICEOPERATOR_CITY,
                        data: "serviceOperator_cityName",
                    },
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.SERVICEOPERATOR_COUNTRY,
                        data: "serviceOperator_countryName",
                    },
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.SERVICEOPERATOR_NAME,
                        data: "serviceOperator_operatorName",
                    },
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.STATUS,
                        data: "serviceOperator_status",
                    },
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.CREATED_ON,
                        data: "serviceOperator_createdOn",
                    },
                    {
                        title: that.SERVICEOPERATOR_CONST.LABEL.MODIFIED_ON,
                        data: "serviceOperator_modifyOn",
                    },
                    { title: that.SERVICEOPERATOR_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api()
                        .columns()
                        .every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.SERVICEOPERATOR_CONST.LABEL.SR_NO:
                                break;
                            case that
                                .SERVICEOPERATOR_CONST.LABEL.SERVICEOPERATOR_COUNTRY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.SERVICEOPERATOR_CONST.LABEL.SERVICEOPERATOR_CITY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.SERVICEOPERATOR_CONST.LABEL.SERVICEOPERATOR_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.SERVICEOPERATOR_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                <option value=\"\">" + that.SERVICEOPERATOR_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.SERVICEOPERATOR_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.SERVICEOPERATOR_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.SERVICEOPERATOR_CONST.LABEL.CREATED_ON:
                            //   input = $(
                            //     `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //     this.index() +
                            //     `"/>`
                            //   );
                            //   break;
                            // case that.SERVICEOPERATOR_CONST.LABEL.MODIFIED_ON:
                            //   input = $(
                            //     `<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` +
                            //     this.index() +
                            //     `"/>`
                            //   );
                            //   break;
                            case that.SERVICEOPERATOR_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.SERVICEOPERATOR_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.SERVICEOPERATOR_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
                                $("<th>")
                                    .append(search)
                                    .append(reset)
                                    .appendTo(rowFilter);
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
                        width: "20%",
                        render: function (a, e, t, n) {
                            var id = t._id;
                            return ('<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' +
                                id +
                                '" onclick="window.my.notimgmt.edit(this)" title="Edit details">\
                   <i class="la la-edit"></i> </a> <a href="javascript:;" id="btnDelete" data-id="' +
                                id +
                                '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
                   <i class="la la-trash"></i>\
                   </a>');
                        },
                    },
                    {
                        targets: 0,
                        width: "5%",
                        orderable: false,
                        render: function (a, e, t, n) {
                            return n.row + 1 + n.settings._iDisplayStart;
                        },
                    },
                    {
                        targets: 1,
                        width: "20%",
                        render: function (a, e, t, n) {
                            return a || "-";
                        },
                    },
                    {
                        targets: 2,
                        width: "20%",
                        render: function (a, e, t, n) {
                            return a || "-";
                        },
                    },
                    {
                        targets: 3,
                        width: "20%",
                        render: function (a, e, t, n) {
                            return a || "-";
                        },
                    },
                    {
                        targets: 4,
                        width: "35%",
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
                                status[row.serviceOperator_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.serviceOperator_status].title +
                                "</span>");
                        },
                    },
                    {
                        targets: 5,
                        width: "10%"
                    },
                    {
                        targets: 6,
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
    ServiceOperatorListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(["/service-operator/edit/" + this.id]);
    };
    ServiceOperatorListComponent.prototype.delete = function (e) {
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
                            component: "serviceOperator",
                            click: "delete",
                            id: this.id,
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceOperatorListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: "serviceOperator",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    ServiceOperatorListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    ServiceOperatorListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    ServiceOperatorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-service-operator-list",
            template: __webpack_require__(/*! raw-loader!./service-operator-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.html"),
            styles: [__webpack_require__(/*! ./service-operator-list.component.scss */ "./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], ServiceOperatorListComponent);
    return ServiceOperatorListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/service-operator/service-operator.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/service-operator.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NlcnZpY2Utb3BlcmF0b3Ivc2VydmljZS1vcGVyYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/service-operator/service-operator.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/service-operator.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOperatorComponent", function() { return ServiceOperatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var ServiceOperatorComponent = /** @class */ (function () {
    function ServiceOperatorComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].SERVICEOPERATOR);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].serviceOperatorManagement);
    }
    ServiceOperatorComponent.prototype.ngOnInit = function () {
    };
    ServiceOperatorComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    ServiceOperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-service-operator',
            template: __webpack_require__(/*! raw-loader!./service-operator.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/service-operator/service-operator.component.html"),
            styles: [__webpack_require__(/*! ./service-operator.component.scss */ "./src/app/views/pages/service-operator/service-operator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ServiceOperatorComponent);
    return ServiceOperatorComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/service-operator/service-operator.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/service-operator.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceOperatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOperatorModule", function() { return ServiceOperatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_service_operator_add_edit_service_operator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-service-operator/add-edit-service-operator.component */ "./src/app/views/pages/service-operator/add-edit-service-operator/add-edit-service-operator.component.ts");
/* harmony import */ var _service_operator_list_service_operator_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-operator-list/service-operator-list.component */ "./src/app/views/pages/service-operator/service-operator-list/service-operator-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_service_operator_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/service-operator.effects */ "./src/app/views/pages/service-operator/state/service-operator.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_service_operator_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/service-operator.reducer */ "./src/app/views/pages/service-operator/state/service-operator.reducer.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _service_operator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service-operator.component */ "./src/app/views/pages/service-operator/service-operator.component.ts");
















var routes = [
    {
        path: '',
        component: _service_operator_component__WEBPACK_IMPORTED_MODULE_15__["ServiceOperatorComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _service_operator_list_service_operator_list_component__WEBPACK_IMPORTED_MODULE_4__["ServiceOperatorListComponent"]
            },
            {
                path: 'add',
                component: _add_edit_service_operator_add_edit_service_operator_component__WEBPACK_IMPORTED_MODULE_3__["AddServiceOperatorComponent"]
            },
            {
                path: 'edit/:id',
                component: _add_edit_service_operator_add_edit_service_operator_component__WEBPACK_IMPORTED_MODULE_3__["EditServiceOperatorComponent"]
            }
        ]
    }
];
var ServiceOperatorModule = /** @class */ (function () {
    function ServiceOperatorModule() {
    }
    ServiceOperatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_service_operator_component__WEBPACK_IMPORTED_MODULE_15__["ServiceOperatorComponent"], _service_operator_list_service_operator_list_component__WEBPACK_IMPORTED_MODULE_4__["ServiceOperatorListComponent"], _add_edit_service_operator_add_edit_service_operator_component__WEBPACK_IMPORTED_MODULE_3__["AddServiceOperatorComponent"], _add_edit_service_operator_add_edit_service_operator_component__WEBPACK_IMPORTED_MODULE_3__["EditServiceOperatorComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_service_operator_effects__WEBPACK_IMPORTED_MODULE_11__["ServiceOperatorEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("service-operator", _state_service_operator_reducer__WEBPACK_IMPORTED_MODULE_13__["ServiceOperatorReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["AngularMultiSelectModule"]
            ]
        })
    ], ServiceOperatorModule);
    return ServiceOperatorModule;
}());



/***/ }),

/***/ "./src/app/views/pages/service-operator/state/service-operator.actions.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/state/service-operator.actions.ts ***!
  \********************************************************************************/
/*! exports provided: ServiceOperatorActionTypes, LoadServiceOperator, LoadServiceOperatorSuccess, LoadServiceOperatorFail, UpdateServiceOperator, UpdateServiceOperatorSuccess, UpdateServiceOperatorFail, DeleteServiceOperator, DeleteServiceOperatorSuccess, DeleteServiceOperatorFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddServiceOperator, AddServiceOperatorSuccess, AddServiceOperatorFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOperatorActionTypes", function() { return ServiceOperatorActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadServiceOperator", function() { return LoadServiceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadServiceOperatorSuccess", function() { return LoadServiceOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadServiceOperatorFail", function() { return LoadServiceOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceOperator", function() { return UpdateServiceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceOperatorSuccess", function() { return UpdateServiceOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceOperatorFail", function() { return UpdateServiceOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceOperator", function() { return DeleteServiceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceOperatorSuccess", function() { return DeleteServiceOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceOperatorFail", function() { return DeleteServiceOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceOperator", function() { return AddServiceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceOperatorSuccess", function() { return AddServiceOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceOperatorFail", function() { return AddServiceOperatorFail; });
var ServiceOperatorActionTypes;
(function (ServiceOperatorActionTypes) {
    ServiceOperatorActionTypes["UPDATE_STATUS"] = "[SERVICEOPERATOR] Update Status";
    ServiceOperatorActionTypes["UPDATE_STATUS_SUCCESS"] = "[SERVICEOPERATOR]  Update Status Success";
    ServiceOperatorActionTypes["UPDATE_STATUS_FAIL"] = "[SERVICEOPERATOR]  Update Status Fail";
    ServiceOperatorActionTypes["LOAD_SERVICEOPERATOR"] = "[SERVICEOPERATOR] Load SERVICEOPERATOR";
    ServiceOperatorActionTypes["LOAD_SERVICEOPERATOR_SUCCESS"] = "[SERVICEOPERATOR] Load SERVICEOPERATOR Success";
    ServiceOperatorActionTypes["LOAD_SERVICEOPERATOR_FAIL"] = "[SERVICEOPERATOR] Load SERVICEOPERATOR Fail";
    ServiceOperatorActionTypes["UPDATE_SERVICEOPERATOR"] = "[SERVICEOPERATOR] Update SERVICEOPERATOR";
    ServiceOperatorActionTypes["UPDATE_SERVICEOPERATOR_SUCCESS"] = "[SERVICEOPERATOR] Update SERVICEOPERATOR Success";
    ServiceOperatorActionTypes["UPDATE_SERVICEOPERATOR_FAIL"] = "[SERVICEOPERATOR] Update SERVICEOPERATOR Fail";
    ServiceOperatorActionTypes["DELETE_SERVICEOPERATOR"] = "[SERVICEOPERATOR] Delete SERVICEOPERATOR";
    ServiceOperatorActionTypes["DELETE_SERVICEOPERATOR_SUCCESS"] = "[SERVICEOPERATOR] Delete SERVICEOPERATOR Success";
    ServiceOperatorActionTypes["DELETE_SERVICEOPERATOR_FAIL"] = "[SERVICEOPERATOR] Delete SERVICEOPERATOR Fail";
    ServiceOperatorActionTypes["ADD_SERVICEOPERATOR"] = "[SERVICEOPERATOR] Upload Data";
    ServiceOperatorActionTypes["ADD_SERVICEOPERATOR_SUCCESS"] = "[SERVICEOPERATOR] Upload Data Success";
    ServiceOperatorActionTypes["ADD_SERVICEOPERATOR_FAIL"] = "[SERVICEOPERATOR] Upload Data Fail";
    ServiceOperatorActionTypes["UPLOAD_DATA"] = "[SERVICEOPERATOR] Upload Data";
    ServiceOperatorActionTypes["UPLOAD_DATA_SUCCESS"] = "[SERVICEOPERATOR] Upload Data Success";
    ServiceOperatorActionTypes["UPLOAD_DATA_FAIL"] = "[SERVICEOPERATOR] Upload Data Fail";
})(ServiceOperatorActionTypes || (ServiceOperatorActionTypes = {}));
var LoadServiceOperator = /** @class */ (function () {
    function LoadServiceOperator(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR;
    }
    LoadServiceOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadServiceOperator;
}());

var LoadServiceOperatorSuccess = /** @class */ (function () {
    function LoadServiceOperatorSuccess(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR_SUCCESS;
    }
    LoadServiceOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadServiceOperatorSuccess;
}());

var LoadServiceOperatorFail = /** @class */ (function () {
    function LoadServiceOperatorFail(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.LOAD_SERVICEOPERATOR_FAIL;
    }
    LoadServiceOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadServiceOperatorFail;
}());

var UpdateServiceOperator = /** @class */ (function () {
    function UpdateServiceOperator(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR;
    }
    UpdateServiceOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateServiceOperator;
}());

var UpdateServiceOperatorSuccess = /** @class */ (function () {
    function UpdateServiceOperatorSuccess(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR_SUCCESS;
    }
    UpdateServiceOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateServiceOperatorSuccess;
}());

var UpdateServiceOperatorFail = /** @class */ (function () {
    function UpdateServiceOperatorFail(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.UPDATE_SERVICEOPERATOR_FAIL;
    }
    UpdateServiceOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateServiceOperatorFail;
}());

var DeleteServiceOperator = /** @class */ (function () {
    function DeleteServiceOperator(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR;
    }
    DeleteServiceOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteServiceOperator;
}());

var DeleteServiceOperatorSuccess = /** @class */ (function () {
    function DeleteServiceOperatorSuccess(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR_SUCCESS;
    }
    DeleteServiceOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteServiceOperatorSuccess;
}());

var DeleteServiceOperatorFail = /** @class */ (function () {
    function DeleteServiceOperatorFail(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.DELETE_SERVICEOPERATOR_FAIL;
    }
    DeleteServiceOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteServiceOperatorFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddServiceOperator = /** @class */ (function () {
    function AddServiceOperator(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.ADD_SERVICEOPERATOR;
    }
    AddServiceOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddServiceOperator;
}());

var AddServiceOperatorSuccess = /** @class */ (function () {
    function AddServiceOperatorSuccess(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.ADD_SERVICEOPERATOR_SUCCESS;
    }
    AddServiceOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddServiceOperatorSuccess;
}());

var AddServiceOperatorFail = /** @class */ (function () {
    function AddServiceOperatorFail(payload) {
        this.payload = payload;
        this.type = ServiceOperatorActionTypes.ADD_SERVICEOPERATOR_FAIL;
    }
    AddServiceOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddServiceOperatorFail;
}());



/***/ }),

/***/ "./src/app/views/pages/service-operator/state/service-operator.effects.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/state/service-operator.effects.ts ***!
  \********************************************************************************/
/*! exports provided: ServiceOperatorEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOperatorEffect", function() { return ServiceOperatorEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-operator.actions */ "./src/app/views/pages/service-operator/state/service-operator.actions.ts");
/* harmony import */ var _service_operator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");







var ServiceOperatorEffect = /** @class */ (function () {
    function ServiceOperatorEffect(actions$, serviceOperatorService) {
        var _this = this;
        this.actions$ = actions$;
        this.serviceOperatorService = serviceOperatorService;
        this.deleteServiceOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceOperatorActionTypes"].DELETE_SERVICEOPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.serviceOperatorService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteServiceOperatorSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteServiceOperatorFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceOperatorActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.serviceOperatorService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadServiceOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceOperatorActionTypes"].LOAD_SERVICEOPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.serviceOperatorService.getServiceOperatorById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["LoadServiceOperatorSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["LoadServiceOperatorFail"](err));
            }));
        }));
        this.updateServiceOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceOperatorActionTypes"].UPDATE_SERVICEOPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.serviceOperatorService.updateServiceOperator(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateServiceOperatorSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateServiceOperatorFail"](err)); }));
        }));
        this.addServiceOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["ServiceOperatorActionTypes"].ADD_SERVICEOPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.serviceOperatorService.addServiceOperator(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["AddServiceOperatorSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _service_operator_actions__WEBPACK_IMPORTED_MODULE_5__["AddServiceOperatorFail"](err));
            }));
        }));
    }
    ServiceOperatorEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _service_operator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceOperatorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceOperatorEffect.prototype, "deleteServiceOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceOperatorEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceOperatorEffect.prototype, "loadServiceOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceOperatorEffect.prototype, "updateServiceOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ServiceOperatorEffect.prototype, "addServiceOperator$", void 0);
    ServiceOperatorEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _service_operator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceOperatorService"]])
    ], ServiceOperatorEffect);
    return ServiceOperatorEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/service-operator/state/service-operator.reducer.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/service-operator/state/service-operator.reducer.ts ***!
  \********************************************************************************/
/*! exports provided: initialState, ServiceOperatorReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOperatorReducer", function() { return ServiceOperatorReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-operator.actions */ "./src/app/views/pages/service-operator/state/service-operator.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function ServiceOperatorReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Service Operator load-----------------------------
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].LOAD_SERVICEOPERATOR_SUCCESS: {
            return action.payload;
        }
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].LOAD_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Service Operator delete-----------------------------
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].DELETE_SERVICEOPERATOR_SUCCESS: {
            return action.payload;
        }
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].DELETE_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Service Operator update-----------------------------
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].UPDATE_SERVICEOPERATOR_SUCCESS: {
            return action.payload;
        }
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].UPDATE_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Service Operator upadat status-----------------------------
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Service Operator add-----------------------------
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].ADD_SERVICEOPERATOR_SUCCESS: {
            return action.payload;
        }
        case _service_operator_actions__WEBPACK_IMPORTED_MODULE_0__["ServiceOperatorActionTypes"].ADD_SERVICEOPERATOR_FAIL: {
            return action.payload.error;
        }
    }
}
var getServiceOperatorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("service-operator");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getServiceOperatorState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-service-operator-service-operator-module.js.map