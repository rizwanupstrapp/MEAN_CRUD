(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-ride-rating-management-ride-rating-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'RIDE_RATING.ADD' | translate}}</h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'RIDE_RATING.VIEW' | translate}}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/ride-rating-management/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addEditRideRatingForm\" [formGroup]=\"addEditRideRatingForm\">\n            <div class=\"kt-portlet__body\">\n                <div class=\"form-group row\">\n                    <!-- rider id -->\n                    <div class=\"col-lg-6\"> \n                        <!-- <div class=\"col-lg-6\"> -->\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_RATING.LABEL.RIDER_ID' | translate}} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRating_ride_Id }}\n                            </label>\n                        <!-- </div> -->\n                    </div>\n                    <!-- from -->\n                    <div class=\"col-lg-6\">\n                        <!-- <div class=\"col-lg-6\"> ride rating from -->\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_RATING.LABEL.RIDE_RATING_FROM' | translate}} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRating_fromUser }}\n                            </label>\n                        <!-- </div> -->\n                    </div>\n                    <!-- to -->\n                    <div class=\"col-lg-6\">\n                        <!-- <div class=\"col-lg-6\"> -->\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_RATING.LABEL.RIDE_RATING_TO' | translate}} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRating_toUser }}\n                            </label>\n                        <!-- </div> -->\n                    </div>\n                    <!-- rated by -->\n                    <div class=\"col-lg-6\"> \n                            <!-- <div class=\"col-lg-6\"> -->\n                                <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                    {{'RIDE_RATING.LABEL.RATED_BY' | translate}} :\n                                </label>\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{ rideRating_roleId }}\n                                </label>\n                            <!-- </div> -->\n                    </div>\n                    <!-- average rating -->\n                    <div class=\"col-lg-6\">\n                        <!-- <div class=\"col-lg-6\"> -->\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_RATING.LABEL.RATING' | translate}} :\n                            </label>\n                            <ngb-rating [max]=\"5\" [(rate)]=\"rideRating_rating\" [readonly]=\"true\" disabled></ngb-rating>\n                        <!-- </div> -->\n                    </div>\n                    <!-- Good Feed back -->\n                    <div class=\"col-lg-6\">\n                        <!-- <div class=\"col-lg-6\"> -->\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_RATING.LABEL.GOOD_FEEDBACK' | translate}} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                 {{ rideRating_good_feedback }}\n                            </label>\n                        <!-- </div> -->\n                    </div>\n                    <!-- Bad feed back -->\n                    <div class=\"col-lg-6\">\n                        <!-- <div class=\"col-lg-6\"> -->\n                            <label for=\"example-text-input\" class=\"col-form-label fw-seven mr-2\">\n                                {{'RIDE_RATING.LABEL.BAD_FEEDBACK' | translate}} :\n                            </label>\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{ rideRating_bad_feedback }}\n                            </label>\n                        <!-- </div> -->\n                    </div>\n                </div>    \n                <!-- <div class=\"form-group row\">\n                    <div class=\"col-xl-12\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" routerLink=\"/model/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate}}</button>\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">{{'BUTTONS.SUBMIT' | translate}}</button>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'RIDE_RATING.LIST' | translate}}</h3>\n        </div>\n        <!-- <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/ride-rating/add\" class=\"btn btn-brand btn-elevte btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate}}</a>\n        </div> -->\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/ride-rating-management.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/ride-rating-management/ride-rating-management.component.html ***!
  \********************************************************************************************************************/
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

/***/ "./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fw-seven {\n  font-weight: 700; }\n\nngb-rating {\n  color: #FFC107;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcmlkZS1yYXRpbmctbWFuYWdlbWVudC9hZGQtZWRpdC1yaWRlLXJhdGluZy9hZGQtZWRpdC1yaWRlLXJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9yaWRlLXJhdGluZy1tYW5hZ2VtZW50L2FkZC1lZGl0LXJpZGUtcmF0aW5nL2FkZC1lZGl0LXJpZGUtcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ3LXNldmVuIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxubmdiLXJhdGluZyB7XG4gICAgY29sb3I6ICNGRkMxMDc7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddRideRatingComponent, EditRideRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRideRatingComponent", function() { return AddRideRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRideRatingComponent", function() { return EditRideRatingComponent; });
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
/* harmony import */ var _state_ride_rating_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/ride-rating.actions */ "./src/app/views/pages/ride-rating-management/state/ride-rating.actions.ts");
/* harmony import */ var _state_ride_rating_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/ride-rating.reducer */ "./src/app/views/pages/ride-rating-management/state/ride-rating.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../brand/brand.service */ "./src/app/views/pages/brand/brand.service.ts");
/* harmony import */ var _ride_rating_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ride-rating.service */ "./src/app/views/pages/ride-rating-management/ride-rating.service.ts");
















var AddRideRatingComponent = /** @class */ (function () {
    function AddRideRatingComponent(subheaderService, _formBuilder, router, localStorageService, toastr, dtr, store, titleService, translate, brandService, modelService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.brandService = brandService;
        this.modelService = modelService;
        this.isAdd = true;
        this.submitted = false;
        this.element = false;
        this.RIDE_RATING_CONST = this.translate.instant('RIDE_RATING');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_RATING'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + "|" + this.RIDE_RATING_CONST.MODULE_NAME);
    }
    AddRideRatingComponent.prototype.ngOnInit = function () {
        // this.buildAddEditModelForm();
    };
    AddRideRatingComponent.prototype.buildAddEditModelForm = function () {
        // this.addEditRideRatingForm = this._formBuilder.group({
        //     model_brandId: ["", [Validators.required]],
        //     model_name: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength), Validators.pattern(validataion.nameRegEx)]],
        // });
    };
    AddRideRatingComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"] },
        { type: _ride_rating_service__WEBPACK_IMPORTED_MODULE_15__["RideRatingService"] }
    ]; };
    AddRideRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-ride-rating',
            template: __webpack_require__(/*! raw-loader!./add-edit-ride-rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-ride-rating.component.scss */ "./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.scss")]
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
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"],
            _ride_rating_service__WEBPACK_IMPORTED_MODULE_15__["RideRatingService"]])
    ], AddRideRatingComponent);
    return AddRideRatingComponent;
}());

var EditRideRatingComponent = /** @class */ (function () {
    function EditRideRatingComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, dtr, store, titleService, translate, brandService, modelService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.dtr = dtr;
        this.store = store;
        this.translate = translate;
        this.brandService = brandService;
        this.modelService = modelService;
        this.isAdd = false;
        this.submitted = false;
        this.element = false;
        this.RIDE_RATING_CONST = this.translate.instant('RIDE_RATING');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDE_RATING'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + "|" + this.RIDE_RATING_CONST.MODULE_NAME);
    }
    EditRideRatingComponent.prototype.ngOnInit = function () {
        this.buildAddEditModelForm();
        this.getModelDetail();
    };
    EditRideRatingComponent.prototype.buildAddEditModelForm = function () {
        this.addEditRideRatingForm = this._formBuilder.group({
            rideRating_good_feedback: [""],
            rideRating_bad_feedback: [""],
            rideRating_rating: [""],
            rideRating_requestId: [""],
            rideRating_roleId: [""],
            rideRating_fromUser: [""],
            rideRating_toUser: [""],
            rideRating_ride_Id: [""]
        });
    };
    EditRideRatingComponent.prototype.getModelDetail = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_ride_rating_actions__WEBPACK_IMPORTED_MODULE_11__["LoadRideRating"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_ride_rating_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        if (result.length > 0) {
                            this.rideRating_rating = result[0].rideRating_rating ? result[0].rideRating_rating : 0;
                            this.rideRating_requestId = result[0].rideRating_requestId ? result[0].rideRating_requestId : "";
                            this.rideRating_roleId = result[0].rideRating_roleId ? result[0].rideRating_roleId : "";
                            this.rideRating_fromUser = result[0].rideRating_fromUser ? result[0].rideRating_fromUser : "";
                            this.rideRating_toUser = result[0].rideRating_toUser ? result[0].rideRating_toUser : "";
                            this.rideRating_ride_Id = result[0].rideRating_ride_Id ? result[0].rideRating_ride_Id : "";
                            if (result[0].rideRating_good_feedback == "") {
                                this.rideRating_good_feedback = "Not Available";
                            }
                            else {
                                this.rideRating_good_feedback = result[0].rideRating_good_feedback;
                            }
                            if (result[0].rideRating_bad_feedback == "") {
                                this.rideRating_bad_feedback = "Not Available";
                            }
                            else {
                                this.rideRating_bad_feedback = result[0].rideRating_bad_feedback;
                            }
                            // it is used to detect changes for html file
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                            this.stateSubscription.unsubscribe();
                        }
                        else {
                            this.rideRating_rating = 0;
                            this.rideRating_requestId = "";
                            this.rideRating_roleId = "";
                            this.rideRating_fromUser = "";
                            this.rideRating_toUser = "";
                            this.rideRating_ride_Id = "";
                            this.rideRating_good_feedback = "Not Available";
                            this.rideRating_bad_feedback = "Not Available";
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                            this.stateSubscription.unsubscribe();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }, function (error) {
            _this.toastr.error(error['message']);
        });
    };
    EditRideRatingComponent.ctorParameters = function () { return [
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
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"] },
        { type: _ride_rating_service__WEBPACK_IMPORTED_MODULE_15__["RideRatingService"] }
    ]; };
    EditRideRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-ride-rating',
            template: __webpack_require__(/*! raw-loader!./add-edit-ride-rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-ride-rating.component.scss */ "./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.scss")]
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
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"],
            _ride_rating_service__WEBPACK_IMPORTED_MODULE_15__["RideRatingService"]])
    ], EditRideRatingComponent);
    return EditRideRatingComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JpZGUtcmF0aW5nLW1hbmFnZW1lbnQvcmlkZS1yYXRpbmctbGlzdC9yaWRlLXJhdGluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RideRatingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingListComponent", function() { return RideRatingListComponent; });
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
    //return the global native browser object
    return window;
}
var RideRatingListComponent = /** @class */ (function () {
    function RideRatingListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.stateSubscription = '';
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.RIDE_RATING_CONST = [];
        // searchObj = { field: 'rideRating_ride_Id', rideRating_status: '', search: '' };
        this.searchObj = {
            field: "user_displayName",
            search: "",
        };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = true;
        this.getPermission();
        this.RIDE_RATING_CONST = this.translate.instant("RIDE_RATING");
        //SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant("MENU.RIDE_RATING"));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.RIDE_RATING_CONST.MODULE_NAME);
    }
    RideRatingListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDE_RATING.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDE_RATING.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDE_RATING.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDE_RATING.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    RideRatingListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            // console.log("Element", element);
            // console.log("permission", permissionName);
            return element == permissionName;
        });
    };
    RideRatingListComponent.prototype.toTitleCase = function (str) {
        return str.replace(/\S+/g, function (str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase(); });
    };
    RideRatingListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof _window().isScriptLoadednotimgmt == "undefined") {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    RideRatingListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-ride-rating-list', scripts).then(function () {
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
                    sProcessing: that.RIDE_RATING_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n          <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listRideRating,
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.RIDE_RATING_CONST.LABEL.SR_NO, data: null,
                    },
                    {
                        title: that.RIDE_RATING_CONST.LABEL.RIDER_ID, data: 'rideRating_ride_Id',
                    },
                    { title: that.RIDE_RATING_CONST.LABEL.RATING_FROM, data: 'rideRating_fromUser' },
                    { title: that.RIDE_RATING_CONST.LABEL.RATING_TO, data: 'rideRating_toUser' },
                    { title: that.RIDE_RATING_CONST.LABEL.RATING, data: 'rideRating_rating' },
                    { title: that.RIDE_RATING_CONST.LABEL.RATED_BY, data: 'rideRating_roleId' },
                    // {
                    //     title: that.RIDE_RATING_CONST.LABEL.ISPUBLISH, data: 'rideRating_isPublish',
                    // },
                    { title: that.RIDE_RATING_CONST.LABEL.CREATED_ON, data: 'rideRating_createdOn' },
                    // { title: that.RIDE_RATING_CONST.LABEL.MODIFIED_ON, data: 'rideRating_modifyOn' },
                    { title: that.RIDE_RATING_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.RIDE_RATING_CONST.LABEL.SR_NO:
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RIDER_ID:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATING_FROM:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATING_TO:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATING:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDE_RATING_CONST.LABEL.RATED_BY:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            // case that.RIDE_RATING_CONST.LABEL.ISPUBLISH:
                            //     input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //     break;
                            case that.RIDE_RATING_CONST.LABEL.CREATED_ON:
                                break;
                            // case that.RIDE_RATING_CONST.LABEL.MODIFIED_ON:
                            //     break;
                            case that.RIDE_RATING_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.RIDE_RATING_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.RIDE_RATING_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                            var editBtn = '<a class="btn btn-hover-brand btn-icon btn-pill" href="javascript:;" id="btnEdit" data-id="' + id + '" onclick="window.my.notimgmt.edit(this)" title="View details">\
              <i class="la la-eye"></i> </a>\
            ';
                            if (that.editPermission) {
                                return editBtn;
                            }
                            else if (that.editPermission) {
                                return editBtn;
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
                            if (t.rideRating_fromUser == ' ') {
                                return '-';
                            }
                            else {
                                return that.toTitleCase(a);
                            }
                            ;
                        }
                    },
                    {
                        targets: 3,
                        width: '20%',
                        render: function (a, e, t, n) {
                            if (t.rideRating_toUser == ' ') {
                                return '-';
                            }
                            else {
                                return that.toTitleCase(a);
                            }
                        }
                    },
                    {
                        targets: 4,
                        width: '10%',
                    },
                    {
                        targets: 5,
                        width: '10%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    },
                    // {
                    //     targets: 6,
                    //     width: '10%',
                    //     render: function (a, e, t, n) {
                    //         if (t.rideRating_isPublish == 1) {
                    //             return 'yes';
                    //         } else {
                    //             return 'no';
                    //         }
                    //     }
                    // },
                    {
                        targets: 6,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
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
    RideRatingListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/ride-rating-management/edit/' + this.id]);
    };
    RideRatingListComponent.prototype.delete = function (e) {
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
                            component: 'ride-rating',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    RideRatingListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'ride-rating',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    RideRatingListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    RideRatingListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    RideRatingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ride-rating-list',
            template: __webpack_require__(/*! raw-loader!./ride-rating-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.html"),
            styles: [__webpack_require__(/*! ./ride-rating-list.component.scss */ "./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], RideRatingListComponent);
    return RideRatingListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/ride-rating-management.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/ride-rating-management.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JpZGUtcmF0aW5nLW1hbmFnZW1lbnQvcmlkZS1yYXRpbmctbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/ride-rating-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/ride-rating-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RideRatingManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingManagementComponent", function() { return RideRatingManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var RideRatingManagementComponent = /** @class */ (function () {
    function RideRatingManagementComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].RIDE_RATING);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].rideRatingManagement);
    }
    RideRatingManagementComponent.prototype.ngOnInit = function () {
    };
    RideRatingManagementComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    RideRatingManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ride-rating-management',
            template: __webpack_require__(/*! raw-loader!./ride-rating-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/ride-rating-management/ride-rating-management.component.html"),
            styles: [__webpack_require__(/*! ./ride-rating-management.component.scss */ "./src/app/views/pages/ride-rating-management/ride-rating-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], RideRatingManagementComponent);
    return RideRatingManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/ride-rating-management.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/ride-rating-management.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RideRatingManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingManagementModule", function() { return RideRatingManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_ride_rating_add_edit_ride_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-ride-rating/add-edit-ride-rating.component */ "./src/app/views/pages/ride-rating-management/add-edit-ride-rating/add-edit-ride-rating.component.ts");
/* harmony import */ var _ride_rating_list_ride_rating_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ride-rating-list/ride-rating-list.component */ "./src/app/views/pages/ride-rating-management/ride-rating-list/ride-rating-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_ride_rating_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/ride-rating.effects */ "./src/app/views/pages/ride-rating-management/state/ride-rating.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_ride_rating_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/ride-rating.reducer */ "./src/app/views/pages/ride-rating-management/state/ride-rating.reducer.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _ride_rating_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ride-rating-management.component */ "./src/app/views/pages/ride-rating-management/ride-rating-management.component.ts");


















var menuPermission = _helper_page_title__WEBPACK_IMPORTED_MODULE_16__["PERMISSIONS"].MAIN_MENU.MASTER;
var routes = [
    {
        path: '',
        component: _ride_rating_management_component__WEBPACK_IMPORTED_MODULE_17__["RideRatingManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _ride_rating_list_ride_rating_list_component__WEBPACK_IMPORTED_MODULE_4__["RideRatingListComponent"],
            },
            {
                path: 'add',
                component: _add_edit_ride_rating_add_edit_ride_rating_component__WEBPACK_IMPORTED_MODULE_3__["AddRideRatingComponent"],
            },
            {
                path: 'edit/:id',
                component: _add_edit_ride_rating_add_edit_ride_rating_component__WEBPACK_IMPORTED_MODULE_3__["EditRideRatingComponent"],
            }
        ]
    }
];
var RideRatingManagementModule = /** @class */ (function () {
    function RideRatingManagementModule() {
    }
    RideRatingManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ride_rating_management_component__WEBPACK_IMPORTED_MODULE_17__["RideRatingManagementComponent"],
                _ride_rating_list_ride_rating_list_component__WEBPACK_IMPORTED_MODULE_4__["RideRatingListComponent"],
                _add_edit_ride_rating_add_edit_ride_rating_component__WEBPACK_IMPORTED_MODULE_3__["AddRideRatingComponent"],
                _add_edit_ride_rating_add_edit_ride_rating_component__WEBPACK_IMPORTED_MODULE_3__["EditRideRatingComponent"]
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_ride_rating_effects__WEBPACK_IMPORTED_MODULE_12__["RideRatingEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature("ride-rating", _state_ride_rating_reducer__WEBPACK_IMPORTED_MODULE_14__["RideRatingReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["AngularMultiSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ]
        })
    ], RideRatingManagementModule);
    return RideRatingManagementModule;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/ride-rating.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/ride-rating.service.ts ***!
  \***************************************************************************/
/*! exports provided: RideRatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingService", function() { return RideRatingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api-constants */ "./src/api-constants.ts");





var RideRatingService = /** @class */ (function () {
    function RideRatingService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
    }
    RideRatingService.prototype.addRideRating = function (data) {
        return this.http.post(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].addModel, data, this.localStorageService.getHeader());
    };
    RideRatingService.prototype.getRideRatingById = function (id) {
        return this.http.get(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].getRideRatingById + '/' + id, this.localStorageService.getHeader());
    };
    RideRatingService.prototype.updateRideRating = function (id, data) {
        return this.http.put(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].updateModel + "/" + id, data, this.localStorageService.getHeader());
    };
    RideRatingService.prototype.deleteById = function (id) {
        return this.http.delete(_api_constants__WEBPACK_IMPORTED_MODULE_4__["ApiURIs"].deleteModel + "/" + id, this.localStorageService.getHeader());
    };
    RideRatingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }
    ]; };
    RideRatingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], RideRatingService);
    return RideRatingService;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/state/ride-rating.actions.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/state/ride-rating.actions.ts ***!
  \*********************************************************************************/
/*! exports provided: RideRatingActionTypes, LoadRideRating, LoadRideRatingSuccess, LoadRideRatingFail, UpdateRideRating, UpdateRideRatingSuccess, UpdateRideRatingFail, DeleteRideRating, DeleteRideRatingSuccess, DeleteRideRatingFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddRideRating, AddRideRatingSuccess, AddRideRatingFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingActionTypes", function() { return RideRatingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRideRating", function() { return LoadRideRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRideRatingSuccess", function() { return LoadRideRatingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRideRatingFail", function() { return LoadRideRatingFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRideRating", function() { return UpdateRideRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRideRatingSuccess", function() { return UpdateRideRatingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRideRatingFail", function() { return UpdateRideRatingFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRideRating", function() { return DeleteRideRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRideRatingSuccess", function() { return DeleteRideRatingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRideRatingFail", function() { return DeleteRideRatingFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRideRating", function() { return AddRideRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRideRatingSuccess", function() { return AddRideRatingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRideRatingFail", function() { return AddRideRatingFail; });
var RideRatingActionTypes;
(function (RideRatingActionTypes) {
    RideRatingActionTypes["UPDATE_STATUS"] = "[RIDE_RATING] Update Status";
    RideRatingActionTypes["UPDATE_STATUS_SUCCESS"] = "[RIDE_RATING]  Update Status Success";
    RideRatingActionTypes["UPDATE_STATUS_FAIL"] = "[RIDE_RATING]  Update Status Fail";
    RideRatingActionTypes["LOAD_RIDE_RATING"] = "[RIDE_RATING] Load RIDE_RATING";
    RideRatingActionTypes["LOAD_RIDE_RATING_SUCCESS"] = "[RIDE_RATING] Load RIDE_RATING Success";
    RideRatingActionTypes["LOAD_RIDE_RATING_FAIL"] = "[RIDE_RATING] Load RIDE_RATING Fail";
    RideRatingActionTypes["UPDATE_RIDE_RATING"] = "[RIDE_RATING] Update RIDE_RATING";
    RideRatingActionTypes["UPDATE_RIDE_RATING_SUCCESS"] = "[RIDE_RATING] Update RIDE_RATING Success";
    RideRatingActionTypes["UPDATE_RIDE_RATING_FAIL"] = "[RIDE_RATING] Update RIDE_RATING Fail";
    RideRatingActionTypes["DELETE_RIDE_RATING"] = "[RIDE_RATING] Delete RIDE_RATING";
    RideRatingActionTypes["DELETE_RIDE_RATING_SUCCESS"] = "[RIDE_RATING] Delete RIDE_RATING Success";
    RideRatingActionTypes["DELETE_RIDE_RATING_FAIL"] = "[RIDE_RATING] Delete RIDE_RATING Fail";
    RideRatingActionTypes["ADD_RIDE_RATING"] = "[RIDE_RATING] Upload Data";
    RideRatingActionTypes["ADD_RIDE_RATING_SUCCESS"] = "[RIDE_RATING] Upload Data Success";
    RideRatingActionTypes["ADD_RIDE_RATING_FAIL"] = "[RIDE_RATING] Upload Data Fail";
    RideRatingActionTypes["UPLOAD_DATA"] = "[RIDE_RATING] Upload Data";
    RideRatingActionTypes["UPLOAD_DATA_SUCCESS"] = "[RIDE_RATING] Upload Data Success";
    RideRatingActionTypes["UPLOAD_DATA_FAIL"] = "[RIDE_RATING] Upload Data Fail";
})(RideRatingActionTypes || (RideRatingActionTypes = {}));
var LoadRideRating = /** @class */ (function () {
    function LoadRideRating(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.LOAD_RIDE_RATING;
    }
    LoadRideRating.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRideRating;
}());

var LoadRideRatingSuccess = /** @class */ (function () {
    function LoadRideRatingSuccess(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.LOAD_RIDE_RATING_SUCCESS;
    }
    LoadRideRatingSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRideRatingSuccess;
}());

var LoadRideRatingFail = /** @class */ (function () {
    function LoadRideRatingFail(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.LOAD_RIDE_RATING_FAIL;
    }
    LoadRideRatingFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRideRatingFail;
}());

var UpdateRideRating = /** @class */ (function () {
    function UpdateRideRating(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.UPDATE_RIDE_RATING;
    }
    UpdateRideRating.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRideRating;
}());

var UpdateRideRatingSuccess = /** @class */ (function () {
    function UpdateRideRatingSuccess(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.UPDATE_RIDE_RATING_SUCCESS;
    }
    UpdateRideRatingSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRideRatingSuccess;
}());

var UpdateRideRatingFail = /** @class */ (function () {
    function UpdateRideRatingFail(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.UPDATE_RIDE_RATING_FAIL;
    }
    UpdateRideRatingFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRideRatingFail;
}());

var DeleteRideRating = /** @class */ (function () {
    function DeleteRideRating(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.DELETE_RIDE_RATING;
    }
    DeleteRideRating.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRideRating;
}());

var DeleteRideRatingSuccess = /** @class */ (function () {
    function DeleteRideRatingSuccess(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.DELETE_RIDE_RATING_SUCCESS;
    }
    DeleteRideRatingSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRideRatingSuccess;
}());

var DeleteRideRatingFail = /** @class */ (function () {
    function DeleteRideRatingFail(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.DELETE_RIDE_RATING_FAIL;
    }
    DeleteRideRatingFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRideRatingFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddRideRating = /** @class */ (function () {
    function AddRideRating(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.ADD_RIDE_RATING;
    }
    AddRideRating.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRideRating;
}());

var AddRideRatingSuccess = /** @class */ (function () {
    function AddRideRatingSuccess(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.ADD_RIDE_RATING_SUCCESS;
    }
    AddRideRatingSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRideRatingSuccess;
}());

var AddRideRatingFail = /** @class */ (function () {
    function AddRideRatingFail(payload) {
        this.payload = payload;
        this.type = RideRatingActionTypes.ADD_RIDE_RATING_FAIL;
    }
    AddRideRatingFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRideRatingFail;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/state/ride-rating.effects.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/state/ride-rating.effects.ts ***!
  \*********************************************************************************/
/*! exports provided: RideRatingEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingEffect", function() { return RideRatingEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ride-rating.actions */ "./src/app/views/pages/ride-rating-management/state/ride-rating.actions.ts");
/* harmony import */ var _ride_rating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ride-rating.service */ "./src/app/views/pages/ride-rating-management/ride-rating.service.ts");







var RideRatingEffect = /** @class */ (function () {
    function RideRatingEffect(actions$, rideRatingService) {
        var _this = this;
        this.actions$ = actions$;
        this.rideRatingService = rideRatingService;
        this.deleteRideRating$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["RideRatingActionTypes"].DELETE_RIDE_RATING), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.rideRatingService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRideRatingSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRideRatingFail"](err));
            }));
        }));
        // @Effect()
        // updateStatus$: Observable<Action> = this.actions$.pipe(
        //   ofType<RideRatingActions.UpdateStatus>(
        //     RideRatingActions.RideRatingActionTypes.UPDATE_STATUS
        //   ),
        //   map((action: RideRatingActions.UpdateStatus) => action.payload),
        //   mergeMap((data: any) =>
        //     this.rideRatingService.updateStatus(data.id, data.data).pipe(
        //       map(
        //         (response: Response) =>
        //           new RideRatingActions.UpdateStatusSuccess(response)
        //       ),
        //       catchError((err) =>
        //         of(new RideRatingActions.UpdateStatusFail(err))
        //       )
        //     )
        //   )
        // );
        this.loadRideRating$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["RideRatingActionTypes"].LOAD_RIDE_RATING), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.rideRatingService.getRideRatingById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRideRatingSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRideRatingFail"](err));
            }));
        }));
        this.updateRideRating$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["RideRatingActionTypes"].UPDATE_RIDE_RATING), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.rideRatingService
                .updateRideRating(data.id, data.data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRideRatingSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRideRatingFail"](err));
            }));
        }));
        this.addRideRating$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["RideRatingActionTypes"].ADD_RIDE_RATING), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.rideRatingService.addRideRating(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["AddRideRatingSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _ride_rating_actions__WEBPACK_IMPORTED_MODULE_5__["AddRideRatingFail"](err));
            }));
        }));
    }
    RideRatingEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _ride_rating_service__WEBPACK_IMPORTED_MODULE_6__["RideRatingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRatingEffect.prototype, "deleteRideRating$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRatingEffect.prototype, "loadRideRating$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRatingEffect.prototype, "updateRideRating$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RideRatingEffect.prototype, "addRideRating$", void 0);
    RideRatingEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ride_rating_service__WEBPACK_IMPORTED_MODULE_6__["RideRatingService"]])
    ], RideRatingEffect);
    return RideRatingEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/ride-rating-management/state/ride-rating.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/ride-rating-management/state/ride-rating.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: initialState, RideRatingReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRatingReducer", function() { return RideRatingReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ride-rating.actions */ "./src/app/views/pages/ride-rating-management/state/ride-rating.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function RideRatingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Ride Rating load-----------------------------
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].LOAD_RIDE_RATING_SUCCESS: {
            return action.payload;
        }
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].LOAD_RIDE_RATING_FAIL: {
            return action.payload.error;
        }
        // for Ride Rating delete-----------------------------
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].DELETE_RIDE_RATING_SUCCESS: {
            return action.payload;
        }
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].DELETE_RIDE_RATING_FAIL: {
            return action.payload.error;
        }
        // for Ride Rating update-----------------------------
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].UPDATE_RIDE_RATING_SUCCESS: {
            return action.payload;
        }
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].UPDATE_RIDE_RATING_FAIL: {
            return action.payload.error;
        }
        // for Ride Rating upadat status-----------------------------
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Ride Rating add-----------------------------
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].ADD_RIDE_RATING_SUCCESS: {
            return action.payload;
        }
        case _ride_rating_actions__WEBPACK_IMPORTED_MODULE_0__["RideRatingActionTypes"].ADD_RIDE_RATING_FAIL: {
            return action.payload.error;
        }
    }
}
var getRideRatingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("ride-rating");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getRideRatingState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-ride-rating-management-ride-rating-management-module.js.map