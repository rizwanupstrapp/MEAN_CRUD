(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-complaint-complaint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/complaint/complaint-list/complaint-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/complaint/complaint-list/complaint-list.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'COMPLAINT.LIST' | translate }}</h3>\n        </div>\n        <!-- <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/complaint/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div> -->\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n\n            <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl\" id=\"kt_datatable\">\n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/complaint/complaint.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/complaint/complaint.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'COMPLAINT.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'COMPLAINT.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/complaint/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditComplaintForm\" [formGroup]=\"addEditComplaintForm\">\n            <div class=\"kt-portlet__body\">\n                <!-- complain comment & status -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-12\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'COMPLAINT.LABEL.COMPLAINT_COMMENT' | translate}}*\n                            </label>\n                        </div>\n                        <div class=\"col-lg-12\" *ngIf=\"Editor\">\n                            <ckeditor #editor [editor]=\"Editor\" class=\"form-control ht-auto\" type=\"text\"\n                                placeholder=\"Enter Content\" formControlName=\"complaint_comment\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditComplaintForm.controls.complaint_comment.errors }\">\n                            </ckeditor>\n\n                            <div *ngIf=\"submitted && addEditComplaintForm.controls.complaint_comment.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditComplaintForm.controls.complaint_comment.errors?.required\">\n                                    {{'COMPLAINT.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                            <div class=\"col-lg-12\">\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{'COMPLAINT.LABEL.STATUS' | translate}}*\n                                </label>\n                            </div>\n                        <!-- complaint_status -->\n                            <div class=\"col-lg-12\">\n                                <select class=\"form-control m-input\" id=\"specific\" formControlName=\"complaint_status\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && addEditComplaintForm.controls.complaint_status.errors }\">\n                                    <option value=\"{{'COMPLAINT.PLACEHOLDERS.PENDING' | translate}}\">\n                                        {{'COMPLAINT.LABEL.PENDING' | translate }}</option>\n                                    <option value=\"{{'COMPLAINT.PLACEHOLDERS.INPROGRESS' | translate}}\">\n                                        {{'COMPLAINT.LABEL.INPROGRESS' | translate }}</option>\n                                    <option value=\"{{'COMPLAINT.PLACEHOLDERS.RESOLVE' | translate}}\">\n                                        {{'COMPLAINT.LABEL.RESOLVE' | translate }}</option>\n                                    <option value=\"{{'COMPLAINT.PLACEHOLDERS.REJECT' | translate}}\">\n                                        {{'COMPLAINT.LABEL.REJECT' | translate }}</option>\n                                </select>\n                                <div *ngIf=\"submitted && addEditComplaintForm.controls.complaint_status.errors\"\n                                    class=\"form-control-feedback\" style=\"color: red\">\n                                    <p *ngIf=\"submitted && addEditComplaintForm.controls.complaint_status.errors?.required\">\n                                        {{'COMPLAINT.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group  row\">\n                        <div class=\"col-xl-12\">\n                            <div class=\"col-xl-12\">\n                                    <button type=\"button\" routerLink=\"/complaint/list\"\n                                    class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}</button>\n                                    <button type=\"submit\" (click)=\"onSubmit()\" \n                                    class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\"> {{'BUTTONS.SUBMIT' | translate }}\n                                   </button>\n                            </div>\n                        </div>\n                    </div>\n                <!-- table -->\n                    <div class=\"form-group row\">\n                        <div class=\"col-lg-12\">\n                            <table class=\"table pd-b-5 table-bordered tbl_headclr\">\n                                <thead>\n                                    <tr>\n                                        <th>{{'COMPLAINT.LABEL.ROLE' | translate }}</th>\n                                        <th>{{'COMPLAINT.LABEL.FROM_USER' | translate }}</th>\n                                        <th>{{'COMPLAINT.LABEL.TO_USER' | translate }}</th>\n                                        <th>{{'COMPLAINT.LABEL.COMMENT' | translate }}</th>\n                                        <th>{{'COMPLAINT.LABEL.SEND_DATE' | translate }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n\n                                    <tr *ngFor=\"let complaint of complaints\">\n                                        <td>{{complaint.complaint_rideId}}</td>\n                                        <td>{{complaint.complaint_reportedUser}}</td>\n                                        <td></td>\n                                        <td>{{complaint.complaint_comment}}</td>\n                                        <td>{{complaint.complaint_createdOn}}</td>\n                                    </tr>\n                            </table>\n                        </div>\n                    </div>\n            </div>\n        </form>\n    </div>\n</div>"

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

/***/ "./src/app/views/pages/complaint/complaint-list/complaint-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/complaint/complaint-list/complaint-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NvbXBsYWludC9jb21wbGFpbnQtbGlzdC9jb21wbGFpbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/complaint/complaint-list/complaint-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/complaint/complaint-list/complaint-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ComplaintListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListComponent", function() { return ComplaintListComponent; });
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
var ComplaintListComponent = /** @class */ (function () {
    function ComplaintListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.COMPLAINT_CONST = [];
        this.searchObj = { field: 'complaint_comment', complaint_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        // deletePermission: boolean = false;
        this.editPermission = false;
        this.getPermission();
        this.COMPLAINT_CONST = this.translate.instant('COMPLAINT');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.COMPLAINT'));
        titleService.setTitle(this.APPNAME + " | " + this.COMPLAINT_CONST.MODULE_NAME);
    }
    ComplaintListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        // _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    ComplaintListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].COMPLAINT.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].COMPLAINT.EDIT)) {
                    _this.editPermission = true;
                }
                // if (this.checkHasPermission(data, PERMISSIONS.COMPLAINT.DELETE)) {
                //   this.deletePermission = true;
                // }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].COMPLAINT.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    ComplaintListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    ComplaintListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-complaint-list', scripts).then(function () {
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
                    sProcessing: that.COMPLAINT_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].listComplaint,
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
                        title: that.COMPLAINT_CONST.LABEL.SR_NO, data: null
                    },
                    { title: that.COMPLAINT_CONST.LABEL.COMPLAINT_RIDE_ID, data: 'complaint_rideId' },
                    { title: that.COMPLAINT_CONST.LABEL.COMPLAINT_COMPLAINTS, data: 'complaint_comment' },
                    { title: that.COMPLAINT_CONST.LABEL.COMPLAINT_USERTYPE, data: 'complaint_userType' },
                    { title: that.COMPLAINT_CONST.LABEL.COMPLAINT_REPORTED_USER, data: 'complaint_reportedUser' },
                    { title: that.COMPLAINT_CONST.LABEL.STATUS, data: 'complaint_status' },
                    { title: that.COMPLAINT_CONST.LABEL.CREATED_ON, data: 'complaint_createdOn' },
                    { title: that.COMPLAINT_CONST.LABEL.MODIFIED_ON, data: 'complaint_modifyOn' },
                    { title: that.COMPLAINT_CONST.LABEL.ACTIONS },
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.COMPLAINT_CONST.LABEL.SR_NO:
                                break;
                            case that.COMPLAINT_CONST.LABEL.COMPLAINT_RIDE_ID:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.COMPLAINT_CONST.LABEL.COMPLAINT_COMPLAINTS:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.COMPLAINT_CONST.LABEL.COMPLAINT_USERTYPE:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.COMPLAINT_CONST.LABEL.COMPLAINT_REPORTED_USER:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.COMPLAINT_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.COMPLAINT_CONST.PLACEHOLDERS.STATUS + "</option>\n                  <option value=\"PENDING\">" + that.COMPLAINT_CONST.LABEL.PENDING + "</option>\n                  <option value=\"INPROGRESS\">" + that.COMPLAINT_CONST.LABEL.INPROGRESS + "</option>\n                  <option value=\"RESOLVE\">" + that.COMPLAINT_CONST.LABEL.RESOLVE + "</option>\n                  <option value=\"REJECT\">" + that.COMPLAINT_CONST.LABEL.REJECT + "</option>\n                  </select>\n                  "));
                                break;
                            case that.COMPLAINT_CONST.LABEL.CREATED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.COMPLAINT_CONST.LABEL.MODIFIED_ON:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.COMPLAINT_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-search\"></i>\n                          <span>" + that.COMPLAINT_CONST.BUTTONS.SEARCH + "</span>\n                        </span>\n                      </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                  margin-left: 10px !important; margin-top: 0px !important;\">\n                        <span>\n                          <i class=\"la la-close\"></i>\n                          <span>" + that.COMPLAINT_CONST.BUTTONS.RESET + "</span>\n                        </span>\n                      </button>");
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
                            // let deleteBtn = '<a href="javascript:;" id="btnDelete" data-id="' + id + '" onclick="window.my.notimgmt.delete(this)" data-toggle="modal" data-target="#m_modal_6"  class="btn btn-hover-danger btn-icon btn-pill" title="Delete">\
                            // 					<i class="la la-trash"></i>\
                            // 				</a>';
                            if (that.editPermission) {
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
                            return a;
                        }
                    },
                    {
                        targets: 3,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    },
                    {
                        targets: 4,
                        width: '20%',
                        render: function (a, e, t, n) {
                            return a;
                        }
                    },
                    {
                        targets: 5,
                        width: '10%',
                        render: function (value, e, row, n) {
                            // return status || '-';
                            var id = row._id;
                            var status = {
                                'RESOLVE': { 'title': 'Resolve', 'class': 'kt-badge--success' },
                                'PENDING': { 'title': 'Pending', 'class': 'kt-badge--success' },
                                'INPROGRESS': { 'title': 'InProgress', 'class': 'kt-badge--success' },
                                'REJECT': { 'title': 'Reject', 'class': 'kt-badge--danger' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.complaint_status] + ' kt-badge--inline kt-badge--pill">' + status[row.complaint_status] + '</span>';
                        }
                    },
                    {
                        targets: 6,
                        width: '10%'
                    },
                    {
                        targets: 7,
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
    ComplaintListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/complaint/edit/' + this.id]);
    };
    // async delete(e) {
    //   this.id = await $(e).data("id");
    //   let obj = {
    //     component: 'complaint',
    //     click: 'delete',
    //     id: this.id
    //   }
    //   this.localStorageService.setBehaviorClick(obj)
    // }
    ComplaintListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'complaint',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    ComplaintListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    ComplaintListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    ComplaintListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-complaint-list',
            template: __webpack_require__(/*! raw-loader!./complaint-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/complaint/complaint-list/complaint-list.component.html"),
            styles: [__webpack_require__(/*! ./complaint-list.component.scss */ "./src/app/views/pages/complaint/complaint-list/complaint-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], ComplaintListComponent);
    return ComplaintListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/complaint/complaint.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/complaint/complaint.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NvbXBsYWludC9jb21wbGFpbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/complaint/complaint.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/complaint/complaint.component.ts ***!
  \**************************************************************/
/*! exports provided: ComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintComponent", function() { return ComplaintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var ComplaintComponent = /** @class */ (function () {
    function ComplaintComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].COMPLAINT);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].complaintManagement);
    }
    ComplaintComponent.prototype.ngOnInit = function () {
    };
    ComplaintComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    ComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-complaint',
            template: __webpack_require__(/*! raw-loader!./complaint.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/complaint/complaint.component.html"),
            styles: [__webpack_require__(/*! ./complaint.component.scss */ "./src/app/views/pages/complaint/complaint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ComplaintComponent);
    return ComplaintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/complaint/complaint.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/complaint/complaint.module.ts ***!
  \***********************************************************/
/*! exports provided: ComplaintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintModule", function() { return ComplaintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_complaint_edit_complaint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-complaint/edit-complaint.component */ "./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.ts");
/* harmony import */ var _complaint_list_complaint_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complaint-list/complaint-list.component */ "./src/app/views/pages/complaint/complaint-list/complaint-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _state_complaint_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/complaint.effects */ "./src/app/views/pages/complaint/state/complaint.effects.ts");
/* harmony import */ var _state_complaint_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/complaint.reducer */ "./src/app/views/pages/complaint/state/complaint.reducer.ts");
/* harmony import */ var _complaint_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./complaint.component */ "./src/app/views/pages/complaint/complaint.component.ts");
/* harmony import */ var _app_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../app/core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].MAIN_MENU.CONTENT;
var routes = [
    {
        path: '',
        component: _complaint_component__WEBPACK_IMPORTED_MODULE_16__["ComplaintComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _complaint_list_complaint_list_component__WEBPACK_IMPORTED_MODULE_4__["ComplaintListComponent"],
                canActivate: [_app_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].COMPLAINT.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _edit_complaint_edit_complaint_component__WEBPACK_IMPORTED_MODULE_3__["EditComplaintComponent"],
                canActivate: [_app_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_17__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_13__["PERMISSIONS"].COMPLAINT.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var ComplaintModule = /** @class */ (function () {
    function ComplaintModule() {
    }
    ComplaintModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_complaint_component__WEBPACK_IMPORTED_MODULE_16__["ComplaintComponent"], _complaint_list_complaint_list_component__WEBPACK_IMPORTED_MODULE_4__["ComplaintListComponent"], _edit_complaint_edit_complaint_component__WEBPACK_IMPORTED_MODULE_3__["EditComplaintComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_complaint_effects__WEBPACK_IMPORTED_MODULE_14__["ComplaintEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("complaint", _state_complaint_reducer__WEBPACK_IMPORTED_MODULE_15__["ComplaintReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"]
            ]
        })
    ], ComplaintModule);
    return ComplaintModule;
}());



/***/ }),

/***/ "./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.tbl_headclr thead th {\n  background-color: #eee !important; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvY29tcGxhaW50L2VkaXQtY29tcGxhaW50L2VkaXQtY29tcGxhaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsdUJBQXVCLEVBQUE7O0FBQ2pDO0VBQXVCLGlDQUFpQyxFQUFBOztBQUN4RDtFQUNJLHFFQUFxRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY29tcGxhaW50L2VkaXQtY29tcGxhaW50L2VkaXQtY29tcGxhaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0LWF1dG8ge2hlaWdodDogYXV0byAhaW1wb3J0YW50O31cbi50YmxfaGVhZGNsciB0aGVhZCB0aCB7YmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O31cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAxLjMyNXJlbSkgY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComplaintComponent", function() { return EditComplaintComponent; });
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
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _state_complaint_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/complaint.actions */ "./src/app/views/pages/complaint/state/complaint.actions.ts");
/* harmony import */ var _state_complaint_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/complaint.reducer */ "./src/app/views/pages/complaint/state/complaint.reducer.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__);
















var EditComplaintComponent = /** @class */ (function () {
    function EditComplaintComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, store, titleService, translate, ref) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.ref = ref;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.complaints = [];
        this.COMPLAINT_CONST = this.translate.instant('COMPLAINT');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.COMPLAINT'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.COMPLAINT_CONST.MODULE_NAME);
    }
    EditComplaintComponent.prototype.ngOnInit = function () {
        this.buildAddEditComplaintForm();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__;
        this.getComplaintDetails();
    };
    EditComplaintComponent.prototype.buildAddEditComplaintForm = function () {
        this.addEditComplaintForm = this._formBuilder.group({
            complaint_comment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            complaint_status: ["PENDING", []],
        });
    };
    EditComplaintComponent.prototype.getComplaintDetails = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_complaint_actions__WEBPACK_IMPORTED_MODULE_12__["LoadComplaint"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_complaint_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        result = data['data'];
                        fd = {
                            complaint_comment: result.complaint_comment,
                            complaint_status: result.complaint_status != null && result.complaint_status != undefined ? result.complaint_status : "",
                        };
                        this.complaints.push(result);
                        // it is used to detect changes for html file
                        this.ref.detectChanges();
                        return [4 /*yield*/, this.addEditComplaintForm.patchValue(fd)];
                    case 1:
                        _a.sent();
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        this.stateSubscription.unsubscribe();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditComplaintComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                if (this.addEditComplaintForm.valid) {
                    form = this.addEditComplaintForm.value;
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    obj = {
                        id: this.id,
                        data: {
                            complaint_comment: form.complaint_comment,
                            complaint_status: form.complaint_status
                        }
                    };
                    this.stateSubscription = this.store.dispatch(new _state_complaint_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateComplaint"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_complaint_reducer__WEBPACK_IMPORTED_MODULE_13__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(['/complaint/list']);
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                            }
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    EditComplaintComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    EditComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-complaint',
            template: __webpack_require__(/*! raw-loader!./edit-complaint.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.html"),
            styles: [__webpack_require__(/*! ./edit-complaint.component.scss */ "./src/app/views/pages/complaint/edit-complaint/edit-complaint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EditComplaintComponent);
    return EditComplaintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/complaint/state/complaint.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/complaint/state/complaint.actions.ts ***!
  \******************************************************************/
/*! exports provided: ComplaintActionTypes, LoadComplaint, LoadComplaintSuccess, LoadComplaintFail, UpdateComplaint, UpdateComplaintSuccess, UpdateComplaintFail, DeleteComplaint, DeleteComplaintSuccess, DeleteComplaintFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintActionTypes", function() { return ComplaintActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComplaint", function() { return LoadComplaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComplaintSuccess", function() { return LoadComplaintSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComplaintFail", function() { return LoadComplaintFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComplaint", function() { return UpdateComplaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComplaintSuccess", function() { return UpdateComplaintSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComplaintFail", function() { return UpdateComplaintFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComplaint", function() { return DeleteComplaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComplaintSuccess", function() { return DeleteComplaintSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComplaintFail", function() { return DeleteComplaintFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
var ComplaintActionTypes;
(function (ComplaintActionTypes) {
    ComplaintActionTypes["UPDATE_STATUS"] = "[COMPLAINT] Update Status";
    ComplaintActionTypes["UPDATE_STATUS_SUCCESS"] = "[COMPLAINT]  Update Status Success";
    ComplaintActionTypes["UPDATE_STATUS_FAIL"] = "[COMPLAINT]  Update Status Fail";
    ComplaintActionTypes["LOAD_COMPLAINT"] = "[COMPLAINT] Load COMPLAINT";
    ComplaintActionTypes["LOAD_COMPLAINT_SUCCESS"] = "[COMPLAINT] Load COMPLAINT Success";
    ComplaintActionTypes["LOAD_COMPLAINT_FAIL"] = "[COMPLAINT] Load COMPLAINT Fail";
    ComplaintActionTypes["UPDATE_COMPLAINT"] = "[COMPLAINT] Update COMPLAINT";
    ComplaintActionTypes["UPDATE_COMPLAINT_SUCCESS"] = "[COMPLAINT] Update COMPLAINT Success";
    ComplaintActionTypes["UPDATE_COMPLAINT_FAIL"] = "[COMPLAINT] Update COMPLAINT Fail";
    ComplaintActionTypes["DELETE_COMPLAINT"] = "[COMPLAINT] Delete COMPLAINT";
    ComplaintActionTypes["DELETE_COMPLAINT_SUCCESS"] = "[COMPLAINT] Delete COMPLAINT Success";
    ComplaintActionTypes["DELETE_COMPLAINT_FAIL"] = "[COMPLAINT] Delete COMPLAINT Fail";
    ComplaintActionTypes["ADD_COMPLAINT"] = "[COMPLAINT] Upload Data";
    ComplaintActionTypes["ADD_COMPLAINT_SUCCESS"] = "[COMPLAINT] Upload Data Success";
    ComplaintActionTypes["ADD_COMPLAINT_FAIL"] = "[COMPLAINT] Upload Data Fail";
    ComplaintActionTypes["UPLOAD_DATA"] = "[COMPLAINT] Upload Data";
    ComplaintActionTypes["UPLOAD_DATA_SUCCESS"] = "[COMPLAINT] Upload Data Success";
    ComplaintActionTypes["UPLOAD_DATA_FAIL"] = "[COMPLAINT] Upload Data Fail";
})(ComplaintActionTypes || (ComplaintActionTypes = {}));
var LoadComplaint = /** @class */ (function () {
    function LoadComplaint(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.LOAD_COMPLAINT;
    }
    LoadComplaint.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadComplaint;
}());

var LoadComplaintSuccess = /** @class */ (function () {
    function LoadComplaintSuccess(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.LOAD_COMPLAINT_SUCCESS;
    }
    LoadComplaintSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadComplaintSuccess;
}());

var LoadComplaintFail = /** @class */ (function () {
    function LoadComplaintFail(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.LOAD_COMPLAINT_FAIL;
    }
    LoadComplaintFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadComplaintFail;
}());

var UpdateComplaint = /** @class */ (function () {
    function UpdateComplaint(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.UPDATE_COMPLAINT;
    }
    UpdateComplaint.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateComplaint;
}());

var UpdateComplaintSuccess = /** @class */ (function () {
    function UpdateComplaintSuccess(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.UPDATE_COMPLAINT_SUCCESS;
    }
    UpdateComplaintSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateComplaintSuccess;
}());

var UpdateComplaintFail = /** @class */ (function () {
    function UpdateComplaintFail(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.UPDATE_COMPLAINT_FAIL;
    }
    UpdateComplaintFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateComplaintFail;
}());

var DeleteComplaint = /** @class */ (function () {
    function DeleteComplaint(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.DELETE_COMPLAINT;
    }
    DeleteComplaint.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteComplaint;
}());

var DeleteComplaintSuccess = /** @class */ (function () {
    function DeleteComplaintSuccess(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.DELETE_COMPLAINT_SUCCESS;
    }
    DeleteComplaintSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteComplaintSuccess;
}());

var DeleteComplaintFail = /** @class */ (function () {
    function DeleteComplaintFail(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.DELETE_COMPLAINT_FAIL;
    }
    DeleteComplaintFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteComplaintFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = ComplaintActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());



/***/ }),

/***/ "./src/app/views/pages/complaint/state/complaint.effects.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/complaint/state/complaint.effects.ts ***!
  \******************************************************************/
/*! exports provided: ComplaintEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintEffect", function() { return ComplaintEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _complaint_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaint.actions */ "./src/app/views/pages/complaint/state/complaint.actions.ts");
/* harmony import */ var _complaint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../complaint.service */ "./src/app/views/pages/complaint/complaint.service.ts");







var ComplaintEffect = /** @class */ (function () {
    function ComplaintEffect(actions$, ComplaintService) {
        var _this = this;
        this.actions$ = actions$;
        this.ComplaintService = ComplaintService;
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_complaint_actions__WEBPACK_IMPORTED_MODULE_5__["ComplaintActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ComplaintService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _complaint_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _complaint_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadComplaint$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_complaint_actions__WEBPACK_IMPORTED_MODULE_5__["ComplaintActionTypes"].LOAD_COMPLAINT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.ComplaintService.getComplaintById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _complaint_actions__WEBPACK_IMPORTED_MODULE_5__["LoadComplaintSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _complaint_actions__WEBPACK_IMPORTED_MODULE_5__["LoadComplaintFail"](err));
            }));
        }));
        this.updateComplaint$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_complaint_actions__WEBPACK_IMPORTED_MODULE_5__["ComplaintActionTypes"].UPDATE_COMPLAINT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.ComplaintService.updateComplaint(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateComplaint) {
                return new _complaint_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateComplaintSuccess"](updateComplaint);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _complaint_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateComplaintFail"](err)); }));
        }));
    }
    ComplaintEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _complaint_service__WEBPACK_IMPORTED_MODULE_6__["ComplaintService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ComplaintEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ComplaintEffect.prototype, "loadComplaint$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ComplaintEffect.prototype, "updateComplaint$", void 0);
    ComplaintEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _complaint_service__WEBPACK_IMPORTED_MODULE_6__["ComplaintService"]])
    ], ComplaintEffect);
    return ComplaintEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/complaint/state/complaint.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/complaint/state/complaint.reducer.ts ***!
  \******************************************************************/
/*! exports provided: initialState, ComplaintReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintReducer", function() { return ComplaintReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _complaint_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaint.actions */ "./src/app/views/pages/complaint/state/complaint.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function ComplaintReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Complaint load-----------------------------
        case _complaint_actions__WEBPACK_IMPORTED_MODULE_0__["ComplaintActionTypes"].LOAD_COMPLAINT_SUCCESS: {
            return action.payload;
        }
        case _complaint_actions__WEBPACK_IMPORTED_MODULE_0__["ComplaintActionTypes"].LOAD_COMPLAINT_FAIL: {
            return action.payload.error;
        }
        // for Complaint update-----------------------------
        case _complaint_actions__WEBPACK_IMPORTED_MODULE_0__["ComplaintActionTypes"].UPDATE_COMPLAINT_SUCCESS: {
            return action.payload;
        }
        case _complaint_actions__WEBPACK_IMPORTED_MODULE_0__["ComplaintActionTypes"].UPDATE_COMPLAINT_FAIL: {
            return action.payload.error;
        }
        // for Complaint update status-----------------------------
        case _complaint_actions__WEBPACK_IMPORTED_MODULE_0__["ComplaintActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _complaint_actions__WEBPACK_IMPORTED_MODULE_0__["ComplaintActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
    }
}
var getComplaintState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("complaint");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getComplaintState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-complaint-complaint-module.js.map