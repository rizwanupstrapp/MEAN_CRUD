(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-time-frame-time-frame-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'TIMEFRAME.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'TIMEFRAME.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/time-frame/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditTimeFrameForm\" [formGroup]=\"addEditTimeFrameForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TIMEFRAME.LABEL.TIMEFRAME_TYPE' | translate}}*\n                            </label>\n                        </div>\n                        <!-- timeFrame_timeType -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"timeFrame_timeType\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTimeFrameForm.controls.timeFrame_timeType.errors }\">\n                                <option value=\"{{'TIMEFRAME.PLACEHOLDERS.DAY' | translate}}\">\n                                    {{'TIMEFRAME.LABEL.DAY' | translate }}</option>\n                                <option value=\"{{'TIMEFRAME.PLACEHOLDERS.NIGHT' | translate}}\">\n                                    {{'TIMEFRAME.LABEL.NIGHT' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_timeType.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_timeType.errors?.required\">\n                                    {{'TIMEFRAME.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                     <!-- -----------from time -->\n                     <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TIMEFRAME.LABEL.TIMEFRAME_FROM_TIME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input formControlName=\"timeFrame_fromTime\" class=\"form-control m-input\" type=\"time\"\n                                atp-time-picker value=\"8:55\" onlyHour=\"true\" onlyAM='true' />\n                        </div>\n                        <div *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_fromTime.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_fromTime.errors?.required\">\n                                {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <!-- -----------to time -->\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TIMEFRAME.LABEL.TIMEFRAME_TO_TIME' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\">\n                            <input formControlName=\"timeFrame_toTime\" type=\"time\" atp-time-picker value=\"8:55\"\n                                onlyHour=\"true\" onlyAM='true' class=\"form-control m-input\" />\n                        </div>\n                        <div *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_toTime.errors\"\n                            class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_toTime.errors?.required\">\n                                {{'HELP.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                \n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'TIMEFRAME.LABEL.TIMEFRAME_STATUS' | translate}}*\n                            </label>\n                        </div>\n                        <!-- timeFrame_status -->\n                        <div class=\"col-lg-12\">\n                            <select class=\"form-control m-input\" id=\"specific\" formControlName=\"timeFrame_status\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditTimeFrameForm.controls.timeFrame_status.errors }\">\n                                <option value=\"{{'TIMEFRAME.PLACEHOLDERS.ACTIVE' | translate}}\">\n                                    {{'COUNTRY.LABEL.ACTIVE' | translate }}</option>\n                                <option value=\"{{'TIMEFRAME.PLACEHOLDERS.INACTIVE' | translate}}\">\n                                    {{'COUNTRY.LABEL.INACTIVE' | translate }}</option>\n                            </select>\n                            <div *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_status.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditTimeFrameForm.controls.timeFrame_status.errors?.required\">\n                                    {{'TIMEFRAME.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                           <button type=\"button\" routerLink=\"/time-frame/list\"\n                            class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" \n                            class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                        </button>\n                        </div>\n                   </div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'TIMEFRAME.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/time-frame/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/time-frame.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/time-frame/time-frame.component.html ***!
  \********************************************************************************************/
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

/***/ "./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvdGltZS1mcmFtZS9hZGQtZWRpdC10aW1lLWZyYW1lL2FkZC1lZGl0LXRpbWUtZnJhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RpbWUtZnJhbWUvYWRkLWVkaXQtdGltZS1mcmFtZS9hZGQtZWRpdC10aW1lLWZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddTimeFrameComponent, EditTimeFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeFrameComponent", function() { return AddTimeFrameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimeFrameComponent", function() { return EditTimeFrameComponent; });
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
/* harmony import */ var _state_time_frame_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/time-frame.actions */ "./src/app/views/pages/time-frame/state/time-frame.actions.ts");
/* harmony import */ var _state_time_frame_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/time-frame.reducer */ "./src/app/views/pages/time-frame/state/time-frame.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");














var AddTimeFrameComponent = /** @class */ (function () {
    function AddTimeFrameComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.TIMEFRAME_CONST = this.translate.instant('TIMEFRAME');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.TIME_FRAME'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.TIMEFRAME_CONST.MODULE_NAME);
    }
    AddTimeFrameComponent.prototype.ngOnInit = function () {
        this.buildAddEditTimeFrameForm();
    };
    AddTimeFrameComponent.prototype.buildAddEditTimeFrameForm = function () {
        this.addEditTimeFrameForm = this._formBuilder.group({
            timeFrame_timeType: ["Day", []],
            timeFrame_fromTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            timeFrame_toTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            timeFrame_status: ["ACTIVE", []],
        });
    };
    AddTimeFrameComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditTimeFrameForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    form = this.addEditTimeFrameForm.value;
                    obj = {
                        timeFrame_timeType: form.timeFrame_timeType,
                        timeFrame_fromTime: form.timeFrame_fromTime,
                        timeFrame_toTime: form.timeFrame_toTime,
                        timeFrame_status: form.timeFrame_status
                    };
                    this.stateSubscription = this.store.dispatch(new _state_time_frame_actions__WEBPACK_IMPORTED_MODULE_11__["AddTimeFrame"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_time_frame_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/time-frame/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditTimeFrameForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddTimeFrameComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }
    ]; };
    AddTimeFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-time-frame',
            template: __webpack_require__(/*! raw-loader!./add-edit-time-frame.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-time-frame.component.scss */ "./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]])
    ], AddTimeFrameComponent);
    return AddTimeFrameComponent;
}());

var EditTimeFrameComponent = /** @class */ (function () {
    function EditTimeFrameComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.TIMEFRAME_CONST = this.translate.instant('TIMEFRAME');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.TIME_FRAME'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.TIMEFRAME_CONST.MODULE_NAME);
    }
    EditTimeFrameComponent.prototype.ngOnInit = function () {
        this.buildAddEditTimeFrameForm();
        this.getTimeFrameDetails();
    };
    EditTimeFrameComponent.prototype.buildAddEditTimeFrameForm = function () {
        this.addEditTimeFrameForm = this._formBuilder.group({
            timeFrame_timeType: ["Day", []],
            timeFrame_fromTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            timeFrame_toTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            timeFrame_status: ["ACTIVE", []],
        });
    };
    EditTimeFrameComponent.prototype.getTimeFrameDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_time_frame_actions__WEBPACK_IMPORTED_MODULE_11__["LoadTimeFrame"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_time_frame_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            timeFrame_timeType: result.timeFrame_timeType != null && result.timeFrame_timeType != undefined ? result.timeFrame_timeType : "",
                            timeFrame_fromTime: result.timeFrame_fromTime,
                            timeFrame_toTime: result.timeFrame_toTime,
                            timeFrame_status: result.timeFrame_status != null && result.timeFrame_status != undefined ? result.timeFrame_status : "",
                        };
                        return [4 /*yield*/, this.addEditTimeFrameForm.patchValue(fd)];
                    case 1:
                        _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditTimeFrameComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditTimeFrameForm.valid) {
                    form = this.addEditTimeFrameForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            timeFrame_timeType: form.timeFrame_timeType,
                            timeFrame_fromTime: form.timeFrame_fromTime,
                            timeFrame_toTime: form.timeFrame_toTime,
                            timeFrame_status: form.timeFrame_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_time_frame_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateTimeFrame"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_time_frame_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/time-frame/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                else if (!this.addEditTimeFrameForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditTimeFrameComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }
    ]; };
    EditTimeFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-time-frame',
            template: __webpack_require__(/*! raw-loader!./add-edit-time-frame.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-time-frame.component.scss */ "./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]])
    ], EditTimeFrameComponent);
    return EditTimeFrameComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/time-frame/state/time-frame.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/time-frame/state/time-frame.actions.ts ***!
  \********************************************************************/
/*! exports provided: TimeFrameActionTypes, LoadTimeFrame, LoadTimeFrameSuccess, LoadTimeFrameFail, UpdateTimeFrame, UpdateTimeFrameSuccess, UpdateTimeFrameFail, DeleteTimeFrame, DeleteTimeFrameSuccess, DeleteTimeFrameFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddTimeFrame, AddTimeFrameSuccess, AddTimeFrameFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameActionTypes", function() { return TimeFrameActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTimeFrame", function() { return LoadTimeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTimeFrameSuccess", function() { return LoadTimeFrameSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTimeFrameFail", function() { return LoadTimeFrameFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTimeFrame", function() { return UpdateTimeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTimeFrameSuccess", function() { return UpdateTimeFrameSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTimeFrameFail", function() { return UpdateTimeFrameFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTimeFrame", function() { return DeleteTimeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTimeFrameSuccess", function() { return DeleteTimeFrameSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTimeFrameFail", function() { return DeleteTimeFrameFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeFrame", function() { return AddTimeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeFrameSuccess", function() { return AddTimeFrameSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeFrameFail", function() { return AddTimeFrameFail; });
var TimeFrameActionTypes;
(function (TimeFrameActionTypes) {
    TimeFrameActionTypes["UPDATE_STATUS"] = "[TIMEFRAME] Update Status";
    TimeFrameActionTypes["UPDATE_STATUS_SUCCESS"] = "[TIMEFRAME]  Update Status Success";
    TimeFrameActionTypes["UPDATE_STATUS_FAIL"] = "[TIMEFRAME]  Update Status Fail";
    TimeFrameActionTypes["LOAD_TIMEFRAME"] = "[TIMEFRAME] Load TIMEFRAME";
    TimeFrameActionTypes["LOAD_TIMEFRAME_SUCCESS"] = "[TIMEFRAME] Load TIMEFRAME Success";
    TimeFrameActionTypes["LOAD_TIMEFRAME_FAIL"] = "[TIMEFRAME] Load TIMEFRAME Fail";
    TimeFrameActionTypes["UPDATE_TIMEFRAME"] = "[TIMEFRAME] Update TIMEFRAME";
    TimeFrameActionTypes["UPDATE_TIMEFRAME_SUCCESS"] = "[TIMEFRAME] Update TIMEFRAME Success";
    TimeFrameActionTypes["UPDATE_TIMEFRAME_FAIL"] = "[TIMEFRAME] Update TIMEFRAME Fail";
    TimeFrameActionTypes["DELETE_TIMEFRAME"] = "[TIMEFRAME] Delete TIMEFRAME";
    TimeFrameActionTypes["DELETE_TIMEFRAME_SUCCESS"] = "[TIMEFRAME] Delete TIMEFRAME Success";
    TimeFrameActionTypes["DELETE_TIMEFRAME_FAIL"] = "[TIMEFRAME] Delete TIMEFRAME Fail";
    TimeFrameActionTypes["ADD_TIMEFRAME"] = "[TIMEFRAME] Upload Data";
    TimeFrameActionTypes["ADD_TIMEFRAME_SUCCESS"] = "[TIMEFRAME] Upload Data Success";
    TimeFrameActionTypes["ADD_TIMEFRAME_FAIL"] = "[TIMEFRAME] Upload Data Fail";
    TimeFrameActionTypes["UPLOAD_DATA"] = "[TIMEFRAME] Upload Data";
    TimeFrameActionTypes["UPLOAD_DATA_SUCCESS"] = "[TIMEFRAME] Upload Data Success";
    TimeFrameActionTypes["UPLOAD_DATA_FAIL"] = "[TIMEFRAME] Upload Data Fail";
})(TimeFrameActionTypes || (TimeFrameActionTypes = {}));
var LoadTimeFrame = /** @class */ (function () {
    function LoadTimeFrame(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.LOAD_TIMEFRAME;
    }
    LoadTimeFrame.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadTimeFrame;
}());

var LoadTimeFrameSuccess = /** @class */ (function () {
    function LoadTimeFrameSuccess(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.LOAD_TIMEFRAME_SUCCESS;
    }
    LoadTimeFrameSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadTimeFrameSuccess;
}());

var LoadTimeFrameFail = /** @class */ (function () {
    function LoadTimeFrameFail(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.LOAD_TIMEFRAME_FAIL;
    }
    LoadTimeFrameFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadTimeFrameFail;
}());

var UpdateTimeFrame = /** @class */ (function () {
    function UpdateTimeFrame(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.UPDATE_TIMEFRAME;
    }
    UpdateTimeFrame.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateTimeFrame;
}());

var UpdateTimeFrameSuccess = /** @class */ (function () {
    function UpdateTimeFrameSuccess(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.UPDATE_TIMEFRAME_SUCCESS;
    }
    UpdateTimeFrameSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateTimeFrameSuccess;
}());

var UpdateTimeFrameFail = /** @class */ (function () {
    function UpdateTimeFrameFail(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.UPDATE_TIMEFRAME_FAIL;
    }
    UpdateTimeFrameFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateTimeFrameFail;
}());

var DeleteTimeFrame = /** @class */ (function () {
    function DeleteTimeFrame(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.DELETE_TIMEFRAME;
    }
    DeleteTimeFrame.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteTimeFrame;
}());

var DeleteTimeFrameSuccess = /** @class */ (function () {
    function DeleteTimeFrameSuccess(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.DELETE_TIMEFRAME_SUCCESS;
    }
    DeleteTimeFrameSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteTimeFrameSuccess;
}());

var DeleteTimeFrameFail = /** @class */ (function () {
    function DeleteTimeFrameFail(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.DELETE_TIMEFRAME_FAIL;
    }
    DeleteTimeFrameFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteTimeFrameFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddTimeFrame = /** @class */ (function () {
    function AddTimeFrame(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.ADD_TIMEFRAME;
    }
    AddTimeFrame.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTimeFrame;
}());

var AddTimeFrameSuccess = /** @class */ (function () {
    function AddTimeFrameSuccess(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.ADD_TIMEFRAME_SUCCESS;
    }
    AddTimeFrameSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTimeFrameSuccess;
}());

var AddTimeFrameFail = /** @class */ (function () {
    function AddTimeFrameFail(payload) {
        this.payload = payload;
        this.type = TimeFrameActionTypes.ADD_TIMEFRAME_FAIL;
    }
    AddTimeFrameFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddTimeFrameFail;
}());



/***/ }),

/***/ "./src/app/views/pages/time-frame/state/time-frame.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/time-frame/state/time-frame.effects.ts ***!
  \********************************************************************/
/*! exports provided: TimeFrameEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameEffect", function() { return TimeFrameEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-frame.actions */ "./src/app/views/pages/time-frame/state/time-frame.actions.ts");
/* harmony import */ var _time_frame_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../time-frame.service */ "./src/app/views/pages/time-frame/time-frame.service.ts");







var TimeFrameEffect = /** @class */ (function () {
    function TimeFrameEffect(actions$, TimeFrameService) {
        var _this = this;
        this.actions$ = actions$;
        this.TimeFrameService = TimeFrameService;
        this.deleteTimeFrame$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["TimeFrameActionTypes"].DELETE_TIMEFRAME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.TimeFrameService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteTimeFrameSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteTimeFrameFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["TimeFrameActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.TimeFrameService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadTimeFrame$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["TimeFrameActionTypes"].LOAD_TIMEFRAME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.TimeFrameService.getTimeFrameById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTimeFrameSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTimeFrameFail"](err));
            }));
        }));
        this.updateTimeFrame$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["TimeFrameActionTypes"].UPDATE_TIMEFRAME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.TimeFrameService.updateTimeFrame(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTimeFrameSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateTimeFrameFail"](err)); }));
        }));
        this.addTimeFrame$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["TimeFrameActionTypes"].ADD_TIMEFRAME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.TimeFrameService.addTimeFrame(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["AddTimeFrameSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _time_frame_actions__WEBPACK_IMPORTED_MODULE_5__["AddTimeFrameFail"](err));
            }));
        }));
    }
    TimeFrameEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _time_frame_service__WEBPACK_IMPORTED_MODULE_6__["TimeFrameService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TimeFrameEffect.prototype, "deleteTimeFrame$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TimeFrameEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TimeFrameEffect.prototype, "loadTimeFrame$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TimeFrameEffect.prototype, "updateTimeFrame$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TimeFrameEffect.prototype, "addTimeFrame$", void 0);
    TimeFrameEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _time_frame_service__WEBPACK_IMPORTED_MODULE_6__["TimeFrameService"]])
    ], TimeFrameEffect);
    return TimeFrameEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/time-frame/state/time-frame.reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/time-frame/state/time-frame.reducer.ts ***!
  \********************************************************************/
/*! exports provided: initialState, TimeFrameReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameReducer", function() { return TimeFrameReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-frame.actions */ "./src/app/views/pages/time-frame/state/time-frame.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function TimeFrameReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Time Frame load-----------------------------
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].LOAD_TIMEFRAME_SUCCESS: {
            return action.payload;
        }
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].LOAD_TIMEFRAME_FAIL: {
            return action.payload.error;
        }
        // for Time Frame delete-----------------------------
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].DELETE_TIMEFRAME_SUCCESS: {
            return action.payload;
        }
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].DELETE_TIMEFRAME_FAIL: {
            return action.payload.error;
        }
        // for Time Frame update-----------------------------
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].UPDATE_TIMEFRAME_SUCCESS: {
            return action.payload;
        }
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].UPDATE_TIMEFRAME_FAIL: {
            return action.payload.error;
        }
        // for Time Frame upadat status-----------------------------
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Time Frame add-----------------------------
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].ADD_TIMEFRAME_SUCCESS: {
            return action.payload;
        }
        case _time_frame_actions__WEBPACK_IMPORTED_MODULE_0__["TimeFrameActionTypes"].ADD_TIMEFRAME_FAIL: {
            return action.payload.error;
        }
    }
}
var getTimeFrameState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("time-frame");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getTimeFrameState, function (state) { return state; } // return error message
);


/***/ }),

/***/ "./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RpbWUtZnJhbWUvdGltZS1mcmFtZS1saXN0L3RpbWUtZnJhbWUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TimeFrameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameListComponent", function() { return TimeFrameListComponent; });
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
var TimeFrameListComponent = /** @class */ (function () {
    function TimeFrameListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = "";
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.TIMEFRAME_CONST = [];
        this.searchObj = { field: "timeFrame_timeType", timeFrame_status: "", search: "" };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.TIMEFRAME_CONST = this.translate.instant("TIMEFRAME");
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.TIME_FRAME"));
        titleService.setTitle(this.APPNAME + " | " + this.TIMEFRAME_CONST.MODULE_NAME);
    }
    TimeFrameListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    TimeFrameListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TIME_FRAME.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TIME_FRAME.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TIME_FRAME.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].TIME_FRAME.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    TimeFrameListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    TimeFrameListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_9__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = [
                "assets/js/global/datatable/plugins.bundle.js",
                "assets/js/global/dttable/datatables.bundle.js",
            ];
        }
        this._script.loadScripts("kt-time-frame-list", scripts).then(function () {
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
                    sProcessing: that.TIMEFRAME_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listTimeFrame,
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
                        title: that.TIMEFRAME_CONST.LABEL.SR_NO,
                        data: null,
                    },
                    {
                        title: that.TIMEFRAME_CONST.LABEL.TIMEFRAME_TYPE,
                        data: "timeFrame_timeType",
                    },
                    {
                        title: that.TIMEFRAME_CONST.LABEL.TIMEFRAME_FROM_TIME,
                        data: "timeFrame_fromTime",
                    },
                    {
                        title: that.TIMEFRAME_CONST.LABEL.TIMEFRAME_TO_TIME,
                        data: "timeFrame_toTime",
                    },
                    {
                        title: that.TIMEFRAME_CONST.LABEL.STATUS,
                        data: "timeFrame_status",
                    },
                    {
                        title: that.TIMEFRAME_CONST.LABEL.CREATED_ON,
                        data: "timeFrame_createdOn",
                    },
                    {
                        title: that.TIMEFRAME_CONST.LABEL.MODIFIED_ON,
                        data: "timeFrame_modifyOn",
                    },
                    { title: that.TIMEFRAME_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api()
                        .columns()
                        .every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.TIMEFRAME_CONST.LABEL.SR_NO:
                                break;
                            case that.TIMEFRAME_CONST.LABEL.TIMEFRAME_TYPE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TIMEFRAME_CONST.LABEL.TIMEFRAME_FROM_TIME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TIMEFRAME_CONST.LABEL.TIMEFRAME_TO_TIME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TIMEFRAME_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" +
                                    this.index() +
                                    ("\">\n                <option value=\"\">" + that.TIMEFRAME_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.TIMEFRAME_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.TIMEFRAME_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            case that.TIMEFRAME_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TIMEFRAME_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" +
                                    this.index() +
                                    "\"/>");
                                break;
                            case that.TIMEFRAME_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.TIMEFRAME_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.TIMEFRAME_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                            return a;
                        },
                    },
                    {
                        targets: 2,
                        width: "20%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 3,
                        width: "20%",
                        render: function (a, e, t, n) {
                            return a;
                        },
                    },
                    {
                        targets: 4,
                        width: "21%",
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
                                status[row.timeFrame_status].class +
                                ' kt-badge--inline kt-badge--pill">' +
                                status[row.timeFrame_status].title +
                                "</span>");
                        },
                    },
                    {
                        targets: 5,
                        width: "10%",
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
    TimeFrameListComponent.prototype.edit = function (e) {
        this.id = $(e).data("id");
        this.router.navigate(["/time-frame/edit/" + this.id]);
    };
    TimeFrameListComponent.prototype.delete = function (e) {
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
                            component: "timeFrame",
                            click: "delete",
                            id: this.id,
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeFrameListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: "timeFrame",
            click: "update",
            status: this.status,
            id: this.id,
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    TimeFrameListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    TimeFrameListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    TimeFrameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-time-frame-list",
            template: __webpack_require__(/*! raw-loader!./time-frame-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.html"),
            styles: [__webpack_require__(/*! ./time-frame-list.component.scss */ "./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], TimeFrameListComponent);
    return TimeFrameListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/time-frame/time-frame.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/time-frame/time-frame.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RpbWUtZnJhbWUvdGltZS1mcmFtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/time-frame/time-frame.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/time-frame/time-frame.component.ts ***!
  \****************************************************************/
/*! exports provided: TimeFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameComponent", function() { return TimeFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var TimeFrameComponent = /** @class */ (function () {
    function TimeFrameComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].TIMEFRAME);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].timeFrameManagement);
    }
    TimeFrameComponent.prototype.ngOnInit = function () {
    };
    TimeFrameComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    TimeFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-time-frame',
            template: __webpack_require__(/*! raw-loader!./time-frame.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/time-frame/time-frame.component.html"),
            styles: [__webpack_require__(/*! ./time-frame.component.scss */ "./src/app/views/pages/time-frame/time-frame.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], TimeFrameComponent);
    return TimeFrameComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/time-frame/time-frame.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/time-frame/time-frame.module.ts ***!
  \*************************************************************/
/*! exports provided: TimeFrameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameModule", function() { return TimeFrameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_time_frame_add_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-time-frame/add-edit-time-frame.component */ "./src/app/views/pages/time-frame/add-edit-time-frame/add-edit-time-frame.component.ts");
/* harmony import */ var _time_frame_list_time_frame_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time-frame-list/time-frame-list.component */ "./src/app/views/pages/time-frame/time-frame-list/time-frame-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_time_frame_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/time-frame.effects */ "./src/app/views/pages/time-frame/state/time-frame.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _state_time_frame_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/time-frame.reducer */ "./src/app/views/pages/time-frame/state/time-frame.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _time_frame_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./time-frame.component */ "./src/app/views/pages/time-frame/time-frame.component.ts");

















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_15__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _time_frame_component__WEBPACK_IMPORTED_MODULE_16__["TimeFrameComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _time_frame_list_time_frame_list_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameListComponent"],
            },
            {
                path: 'add',
                component: _add_edit_time_frame_add_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_3__["AddTimeFrameComponent"],
            },
            {
                path: 'edit/:id',
                component: _add_edit_time_frame_add_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_3__["EditTimeFrameComponent"],
            }
        ]
    }
];
var TimeFrameModule = /** @class */ (function () {
    function TimeFrameModule() {
    }
    TimeFrameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_time_frame_component__WEBPACK_IMPORTED_MODULE_16__["TimeFrameComponent"], _time_frame_list_time_frame_list_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameListComponent"], _add_edit_time_frame_add_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_3__["AddTimeFrameComponent"], _add_edit_time_frame_add_edit_time_frame_component__WEBPACK_IMPORTED_MODULE_3__["EditTimeFrameComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_time_frame_effects__WEBPACK_IMPORTED_MODULE_11__["TimeFrameEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("time-frame", _state_time_frame_reducer__WEBPACK_IMPORTED_MODULE_14__["TimeFrameReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ]
        })
    ], TimeFrameModule);
    return TimeFrameModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-time-frame-time-frame-module.js.map