(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-driver-management-driver-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label btn-addVehicle\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'VEHICLE.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'VEHICLE.EDIT' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" (click)=cancle() class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n        <form class=\"kt-form kt-form__group\" name=\"addDriverForm2\" [formGroup]=\"addDriverForm2\">\n            <!-- brand & Insurance image -->\n            <div class=\"form-group  row\">\n              <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.SERVICETYPE_NAME' | translate }}*\n                        </label>\n                    </div>\n\n                    <div class=\"col-lg-12\" *ngIf=\"serviceTypes\">\n                        <select class=\"form-control m-input\" id=\"carType\" formControlName=\"carType\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.carType.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_SERVICETYPE' | translate}}</option>\n                            <option value=\"{{carType._id}}\" *ngFor=\"let carType of serviceTypes\">\n                                {{carType.serviceType_name}}</option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.carType.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.carType.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.BRAND_NAME' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"brandName\" (change)=\"changeBrand($event.target.value)\" formControlName=\"brandName\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.brandName.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_BRAND'|translate}}</option>\n                            <option value=\"{{brand._id}}\" *ngFor=\"let brand of brands\">{{brand.brand_name}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.brandName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.brandName.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.brandName.errors?.pattern\">\n                                {{'DRIVER.VALIDATION.BRANDNAME_INVALID' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>   \n            </div>\n            <div class=\"form-group  row\">\n                \n                \n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.INSURANCE_IMAGE' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                            </div>\n                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Insurance Image\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                <i class=\"fa fa-pen\"></i>\n                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                    (change)=\"onSelectFile($event)\">\n                            </label>\n                            <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                <i class=\"fa fa-times\"></i>\n                            </span>\n                        </div>\n                        <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <!-- model name  & number plate-->\n            <div class=\"form-group  row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.MODEL_NAME' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"brandName\" (change)=\"changeModel($event.target.value)\" formControlName=\"vehicleModelName\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.vehicleModelName.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_MODEL' | translate}}</option>\n                            <option value=\"{{model._id}}\" *ngFor=\"let model of models\">{{model.model_name}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.vehicleModelName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.vehicleModelName.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.REGISTARTION_DOC_IMAGE' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url2+')'\">\n                            </div>\n                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Number Plate\" *ngIf=\"url2 && url2=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                <i class=\"fa fa-pen\"></i>\n                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                    (change)=\"onSelectFileRegistrationDocImage($event)\">\n                                <!-- formControlName= \"registrationNoImage\" -->\n                            </label>\n                            <span class=\"kt-avatar__cancel\" *ngIf=\"url2 && url2!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemoveRegistrationDoc()\" data-original-title=\"Remove Image\">\n                                <i class=\"fa fa-times\"></i>\n                            </span>\n                        </div>\n                        <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                        </span>\n                        <!-- <div *ngIf=\"submitted1 && addDriverForm2.controls.registrationNoImage.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p\n                            *ngIf=\"submitted1 && addDriverForm2.controls.registrationNoImage.errors?.required\">\n                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div> -->\n                    </div>\n                </div>\n            </div>\n            <!-- Trim & inspection image  -->\n            <div class=\"form-group row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.TRIM_NAME' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"brandName\" formControlName=\"vehicleTrimName\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.vehicleTrimName.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_TRIM' | translate}}</option>\n                            <option value=\"{{trim._id}}\" *ngFor=\"let trim of trims\">{{trim.trim_name}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.vehicleTrimName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.vehicleTrimName.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.INSPECTION_IMAGE' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url3+')'\">\n                            </div>\n                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Inspection Image\" *ngIf=\"url3 && url3=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                <i class=\"fa fa-pen\"></i>\n                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                    (change)=\"onSelectInspectionFile($event)\">\n                            </label>\n                            <span class=\"kt-avatar__cancel\" *ngIf=\"url3 && url3!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageInspectionRemove()\" data-original-title=\"Remove Image\">\n                                <i class=\"fa fa-times\"></i>\n                            </span>\n                        </div>\n                        <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                        </span>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-------color and Car Icon-->\n            <div class=\"form-group  row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.VEHICLE_COLOR' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"color\" formControlName=\"color\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.color.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_COLOR' | translate }}</option>\n                            <option value=\"{{color._id}}\" *ngFor=\"let color of colors\">{{color.color_name}}</option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.color.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.color.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.CAR_ICON' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url1+')'\">\n                            </div>\n                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Car Icon\" *ngIf=\"url1 && url1=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                <i class=\"fa fa-pen\"></i>\n                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                    (change)=\"onSelectFileIcon($event)\">\n                                    <img [src]=\"imgUrl\" height=\"200\"   *ngIf= \"imgUrl\">\n                            </label>\n                            <span class=\"kt-avatar__cancel\" *ngIf=\"url1 && url1!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemoveIcon()\" data-original-title=\"Remove Image\">\n                                <i class=\"fa fa-times\"></i>\n                            </span>\n                        </div>\n                         \n                        <!-- <lib-ngx-image-zoom class= \"img-zoom\"\n                            [thumbImage]=myThumbnail\n                            [fullImage]=myFullresImage\n                            [magnification]=\"1\"\n                            [enableScrollZoom]=\"true\"\n                            [enableLens]=\"true\"\n                            [lensWidth]=\"200\"\n                        ></lib-ngx-image-zoom> -->\n                        <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                        </span>\n                        <!-- <div *ngIf=\"submitted1 && addDriverForm2.controls.carIconImage.errors\"\n                        class=\"form-control-feedback\" style=\"color: red\">\n                        <p\n                            *ngIf=\"submitted1 && addDriverForm2.controls.carIconImage.errors?.required\">\n                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                        </p>\n                       </div> -->\n                       <!-- <ngx-img-zoom\n                       [zoomImageSrc]=\"zoomImageSrc\"\n                       [previewImageSrc]=\"previewImageSrc\" \n                       [imgStyle]=\"'width:515px; height:515px; bottom:0;  left:0;  right:0;  top:0;  margin:0 auto; border:1px solid #dcdcdc;'\" \n                       [resultStyle]=\"`width:824px; height:824px; background-repeat: no-repeat; z-index: 2; position:absolute;\n                                   -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n                                       box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 100%;`\"\n                       [lensStyle]=\"'width:155px; height:155px\"\n                       [enableZoom] = \"enableZoom\"\n                       [containerStyle]=\"\"\n                   ></ngx-img-zoom> -->\n                    </div>\n                </div>\n\n            </div>\n            <!-- amemities &  year -->\n            <div class=\"form-group row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.AMMENITIES' | translate}}*\n                        </label>\n                    </div>\n\n                    <div class=\"col-lg-12 muti_select\">\n                        <angular2-multiselect [data]=\"allAmmenities\" [(ngModel)]=\"selectedItemsAmmenities\" [settings]=\"dropdownSettingsAmmenities\" (onSelect)=\"onItemAmmenitiesSelect($event,selectedItemsAmmenities)\" (onDeSelect)=\"onItemAmmenitiesDeSelect($event,selectedItemsAmmenities)\"\n                            (onSelectAll)=\"onAmmenitiesSelectAll($event)\" (onDeSelectAll)=\"onAmmenitiesDeSelectAll($event)\" formControlName=\"ammenities\">\n                        </angular2-multiselect>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.ammenities.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.ammenities.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.YEAR_OF_VEHICLE' | translate }}*\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"year\" formControlName=\"year\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.year.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_YEAR' | translate}}</option>\n                            <option value=\"{{year}}\" *ngFor=\"let year of years\">{{year}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.year.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.year.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- ---- Driver status & Name Plate -->\n            <div class=\"form-group  row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-6\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.DRIVER_STATUS' | translate}}*\n                        </label>\n                    </div>\n\n                    <div class=\"col-lg-12\">\n                        <select class=\"form-control m-input\" id=\"verifiedStatus\" formControlName=\"verifiedStatus\" (change)=\"selectVerifiedValue($event)\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.verifiedStatus.errors }\">\n                            <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                            <option value=\"{{status.value}}\"\n                                *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">{{status.key}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.verifiedStatus.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.verifiedStatus.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12 mrgn_tp_ckb\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.IS_VEHICLE_DEFAULT' | translate}}*\n                        </label>\n                        <input class=\"form-control m-input m-login__form-input--last inln_ckbx\" type=\"checkbox\" formControlName=\"isDefault\">\n                    </div>\n                    <!-- (change)=\"status = $event.target.checked ? 1: 0\"\n                     (change)=\"changeCheckBox($event.target.value)\"     -->\n                </div>\n            </div>\n\n            <div class=\"form-group row\" *ngIf=\"!isVerifiedSelected\">\n                <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12\">\n                        <label for=\"example-text-input\" class=\"col-form-label\">\n                            {{'DRIVER.LABEL.REJECTED_REASON' | translate }} *\n                        </label>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.REJECTED_REASON' | translate}}\" type=\"text\" formControlName=\"rejectedReason\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.rejectedReason.errors }\">\n                        <div *ngIf=\"submitted1 && addDriverForm2.controls.rejectedReason.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                            <p *ngIf=\"submitted1 && addDriverForm2.controls.rejectedReason.errors?.required\">\n                                {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- buttons -->\n            <div class=\"form-group  row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"col-lg-12\">\n                        <button type=\"button\" (click)=cancle() class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                            {{'BUTTONS.CANCEL' | translate }}\n                        </button>\n                        <button type=\"submit\" (click)=\"saveVehicleDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                            {{'BUTTONS.SUBMIT' | translate }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/driver-list/driver-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/driver-management/driver-list/driver-list.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'DRIVER.LIST' | translate }}</h3>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n                <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl driver_mangmt_tbl\"\n                    id=\"kt_datatable\">\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/driver-management.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/driver-management/driver-management.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/edit-driver/edit-driver.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/driver-management/edit-driver/edit-driver.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'DRIVER.EDIT' | translate }} </h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/driver-management/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <div class=\"example-preview\">\n            <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'personal' }\" id=\"persnol_detail-tab-1\"\n                        data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('personal')\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-avatar\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.PERSONAL' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'vehicle' }\"\n                        id=\"subscription_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\"\n                        (click)=\"clickLink('vehicle')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon2-delivery-truck\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.VEHICLE' | translate }}</span>\n                    </a>\n                </li>\n                <!-- *ngIf=\"submitStep.step !='1'\" -->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'bank' }\" id=\"bank_detail-tab-1\"\n                        data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('bank')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-notepad\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.BANK' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'address' }\" id=\"bank_detail-tab-1\"\n                        data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('address')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-placeholder\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.DRIVER_ADDRESS' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'document' }\" id=\"bank_detail-tab-1\"\n                        data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('document')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon2-crisp-icons\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.DRIVER_DOCUMENT' | translate }}</span>\n                    </a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'otherDocument' }\" id=\"driver_other_document-tab-1\" data-toggle=\"tab\"\n                        href=\"javascript:;\" (click)=\"clickLink('otherDocument')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon2-crisp-icons\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.DRIVER_OTHER_DOCUMENT' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'citizenShip' }\" id=\"citizen_ship-tab-1\" data-toggle=\"tab\" href=\"javascript:;\"\n                        (click)=\"clickLink('citizenShip')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-home\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'DRIVER.TAB.DRIVER_CITIZEN_SHIP' | translate}}</span>\n                    </a>\n                </li> -->\n            </ul>\n            <div class=\"tab-content mt-5\" id=\"myTabContent1\">\n                <!-- ------------------------ tab1 --------------->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'personal' }\" id=\"persnol_detail\"\n                    *ngIf=\" navObj.link === 'personal'\" role=\"tabpanel\" aria-labelledby=\"persnol_detail-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addDriverForm1\" [formGroup]=\"addDriverForm1\">\n                        <!-- ---user_roleId -->\n                        <div class=\"form-group  row\">\n                            <!-- ---- country & operator & Driver Image  -->\n                            <!-- <div class=\"col-lg-3\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.COUNTRY' | translate }}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_countryId\" formControlName=\"user_countryId\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_countryId.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_COUNTRY' | translate}}</option>\n                                        <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                            {{country.country_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_countryId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_countryId.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.DRIVER_OPERATOR' | translate }}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\" *ngIf=\"operators\">\n                                    <select class=\"form-control m-input\" id=\"user_operatorId\"\n                                        formControlName=\"user_operatorId\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_operatorId.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_OPERATOR' | translate}}</option>\n                                        <option value=\"{{operator._id}}\" *ngFor=\"let operator of operators\">\n                                            {{operator.operatorName}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_operatorId.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted && addDriverForm1.controls.user_operatorId.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.USER_PROFILE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url5+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Image\"\n                                            *ngIf=\"url5 && url5=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                                (change)=\"onSelectUserImage($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\"\n                                            *ngIf=\"url5 && url5!='../../../../../assets/media/newMedia/add.png'\"\n                                            style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\"\n                                            (click)=\"removeUserImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n\n                               <!-- User Name -->\n                               <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.USER_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.USER_NAME'|translate}}\" type=\"text\" formControlName=\"user_userName\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_userName.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_userName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_userName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_userName.errors?.minlength && !addDriverForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_userName.errors?.maxlength && !addDriverForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_userName.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.USERNAME_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                               </div>\n                        </div>\n\n                        <!-- ---first & last Name -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.FIRST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.FIRST_NAME' | translate}}\" type=\"text\"\n                                        formControlName=\"user_firstName\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_firstName.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_firstName.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_firstName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_firstName.errors?.minlength && !addDriverForm1.controls.user_firstName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_firstName.errors?.maxlength && !addDriverForm1.controls.user_firstName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_firstName.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.FIRSTNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.LAST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.LAST_NAME' | translate}}\" type=\"text\"\n                                        formControlName=\"user_lastName\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_lastName.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_lastName.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_lastName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_lastName.errors?.minlength && !addDriverForm1.controls.user_lastName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_lastName.errors?.maxlength && !addDriverForm1.controls.user_lastName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_lastName.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.LASTNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- email -- phone & isd-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.USER_EMAIL' | translate}}\" type=\"text\"\n                                        formControlName=\"user_email\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_email.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_email.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_email.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_email.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.EMAIL_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.MOBILENO' | translate }} *\n                                    </label>\n                                </div>\n                                <!-- <div class=\"col-lg-12\"> -->\n                                <div class=\"d-flex mbl-sct\">\n                                    <div class=\"col-lg-3\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" type=\"text\"\n                                            formControlName=\"user_isdCode\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_isdCode.errors }\">\n                                    </div>\n                                    <!-- <select class=\"form-control m-input m-login__form-input--last\" formControlName=\"user_isdCode\">\n                                            <option *ngFor=\"let code of countries\" [value]=\"code.country_isd\">\n                                                {{code.country_isd}}({{code.country_iso}})</option>\n                                        </select> -->\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.USER_MOBILE' | translate}}\" type=\"text\"\n                                        formControlName=\"user_phoneNumber\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_phoneNumber.errors }\">\n                                </div>\n                                <div *ngIf=\"submitted && addDriverForm1.controls.user_phoneNumber.errors\"\n                                    class=\"form-control-feedback\" style=\"color: red\">\n                                    <p *ngIf=\"submitted && addDriverForm1.controls.user_phoneNumber.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                    <p *ngIf=\"submitted && addDriverForm1.controls.user_phoneNumber.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.MOBILENO_INVALID' | translate }}\n                                    </p>\n                                </div>\n                                <!-- </div> -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.STATE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_stateId\"\n                                        formControlName=\"user_stateId\" (change)=\"changeState($event.target.value)\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_stateId.errors }\">\n                                        <option value=\"\">{{'RIDER.PLACEHOLDERS.SELECT_STATE' | translate }}</option>\n                                        <option value=\"{{state._id}}\" *ngFor=\"let state of stateList\">\n                                            {{state.state_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_stateId.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_stateId.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.CITY' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_cityId\" formControlName=\"user_cityId\"\n                                        [ngClass]=\" { 'is-invalid': submitted && addDriverForm1.controls.user_cityId.errors } \">\n                                        <option value=\" \">{{'RIDER.PLACEHOLDERS.SELECT_CITY' | translate }}</option>\n                                        <option value=\"{{city._id}}\" *ngFor=\"let city of cityList \">{{city.city_name}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_cityId.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_cityId.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <!-- invitation code & zip code -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.DATE_OF_BIRTH' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <!-- <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.EXPIRY_DATE' | translate}}\"\n                                        type=\"text\" formControlName=\"user_dob\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_dob.errors }\"> -->\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.DATE_OF_BIRTH' | translate}}\" type=\"text\"\n                                        name=\"user_dob\" formControlName=\"user_dob\" #dp1=\"bsDatepicker\" bsDatepicker\n                                        [bsConfig]=\"bsConfigs\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_dob.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_dob.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_dob.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_dob.errors?.minlength && !addDriverForm1.controls.user_dob.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_dob.errors?.maxlength && !addDriverForm1.controls.user_dob.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ZIPCODE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.ZIPCODE' | translate}}\" type=\"text\"\n                                        formControlName=\"user_zipCode\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_zipCode.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_zipCode.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_zipCode.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_zipCode.errors?.minlength && !addDriverForm1.controls.user_zipCode.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.ZIPCODE_MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm1.controls.user_zipCode.errors?.maxlength && !addDriverForm1.controls.user_zipCode.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.ZIPCODE_MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_zipCode.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.ZIPCODE_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.PREMIUM_USER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_premiumUser\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_premiumUser.errors }\">\n                                        <option value=\"0\">{{'DRIVER.LABEL.YES' | translate}}</option>\n                                        <option value=\"1\">{{'DRIVER.LABEL.NO' | translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_premiumUser.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_premiumUser.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                        </div>\n                        <!-- ride Info -- wallet -->\n                        <!-- <div class=\"form-group  row\"> -->\n                        <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.RIDE_INFO' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.RIDE_INFO' | translate}}\"\n                                        type=\"text\" formControlName=\"user_rideInfo\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_rideInfo.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_rideInfo.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_rideInfo.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                        <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.WALLETS' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.user_wallets' | translate}}\"\n                                        type=\"text\" formControlName=\"user_wallets\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_wallets.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_wallets.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_wallets.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                        <!-- </div> -->\n                        <!-- verified -- Status -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.INVITATION_CODE' | translate }} \n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.INVITATION_CODE' | translate}}\" type=\"text\"\n                                        formControlName=\"user_invitationCode\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_invitationCode.errors }\">\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_invitationCode.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted && addDriverForm1.controls.user_invitationCode.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_status\" [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_status.errors }\">\n                                        <option value=\"ACTIVE\">{{'DRIVER.LABEL.ACTIVE' | translate}}</option>\n                                        <option value=\"INACTIVE\">{{'DRIVER.LABEL.INACTIVE' | translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_status.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                            <!-- </div> -->\n                            <!---city & state-->\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.VERIFSTATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_verifiedStatus\"\n                                        formControlName=\"user_verifiedStatus\"\n                                        [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm1.controls.user_verifiedStatus.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                        <option value=\"{{status.value}}\"\n                                            *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">\n                                            {{status.key}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_verifiedStatus.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted && addDriverForm1.controls.user_verifiedStatus.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- dob & status   -->\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_status\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm1.controls.user_status.errors }\">\n                                        <option value=\"ACTIVE\">{{'DRIVER.LABEL.ACTIVE' | translate}}</option>\n                                        <option value=\"INACTIVE\">{{'DRIVER.LABEL.INACTIVE' | translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addDriverForm1.controls.user_status.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addDriverForm1.controls.user_status.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\"\n                                        class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"savePersonalDetail()\"\n                                        class=\"btn btn-brand btn-elevate btn-icon-sm bt-right mr-3\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                    <button type=\"button\" (click)=\"regeneratedAndSendPassword() \" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.REGENERATED_SENDPASSWORD' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- ------------------------ tab2 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'vehicle' }\"\n                    *ngIf=\" navObj.link === 'vehicle'\" id=\"subscription_detail\" role=\"tabpanel\"\n                    aria-labelledby=\"subscription_detail-tab-1\">\n                    <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'vehicle' }\"\n                        *ngIf=\" navObj.link === 'vehicle'\" id=\"subscription_detail\" role=\"tabpanel\"\n                        aria-labelledby=\"subscription_detail-tab-1\">\n                        <!-- <div class=\"kt-portlet__head-label text-right mb-2\">\n                            <a href=\"javascript:;\" routerLink=\"/driver-management/{{id}}/vehicle/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n                        </div> -->\n                        <p style=\"margin-bottom: 23px;\n                        padding: 0;\n                        font-size: 1.2rem;\n                        font-weight: 500;\n                        color: #48465b;\"> {{'DRIVER.LABEL.VEHICLE_LIST' | translate}}</p>\n                        <!-- Drivers vehicle lists table stars -->\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped- table-bordered table-hover\">\n                                <thead>\n                                    <th>{{'DRIVER.LABEL.SR_NO' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.CAR_IMAGE' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.BRAND' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.MODEL' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.SERVICETYPE_NAME' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.YEAR_OF_VEHICLE' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.IS_DEFAULT' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.VERIFSTATUS' | translate}}</th>\n                                    <th>{{'DRIVER.LABEL.ACTIONS' | translate}}</th>\n                                </thead>\n                                <tbody *ngIf=\"vehiclelists.length > 0\">\n                                    <tr *ngFor=\"let vehiclelist of vehiclelists; let i = index\">\n                                        <td>{{i + 1}}</td>\n                                        <td>\n                                            <img src=\"{{vehiclelist.carIconImage}}\" height=\"80px\" width=\"80px\">\n                                            <!-- <lib-ngx-image-zoom \n                                            [thumbImage]=\"vehiclelist.carIconImage\" \n                                            [fullImage]=\"vehiclelist.carIconImage\"\n                                            >\n                                            </lib-ngx-image-zoom> -->\n                                            <!-- <ngx-image-zoom\n                                                [thumbImage]=myThumbnail\n                                                [fullImage]=myFullresImage\n                                                [magnification]=\"1\"\n                                                [enableScrollZoom]=\"true\"\n                                                [enableLens]=\"true\"\n                                                [lensWidth]=\"200\"\n                                            ></ngx-image-zoom> -->\n                                            <!-- <ngx-img-zoom\n                                                [zoomImageSrc]=\"vehiclelist.carIconImage\"\n                                                [previewImageSrc]=\"vehiclelist.carIconImage\"\n                                                [imgStyle]=\"'width:515px; height:515px; bottom:0;  left:0;  right:0;  top:0;  margin:0 auto; border:1px solid #dcdcdc;'\"\n                                                [resultStyle]=\"'width:824px; height:824px; background-repeat: no-repeat; z-index: 2; position:absolute;-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 100%;'\"\n                                                [lensStyle]=\"'width:55px; height:55px'\"\n                                                [enableZoom]=\"enableZoom\"\n                                                [containerStyle]=\"\"\n                                                ></ngx-img-zoom> -->\n                                        </td>\n                                        <td>{{vehiclelist.brandName}}</td>\n                                        <td>{{vehiclelist.modelName}}</td>\n                                        <td>{{vehiclelist.carType[0].title}}</td>\n                                        <td>{{vehiclelist.year}}</td>\n                                        <td>{{vehiclelist.isDefault}}</td>\n                                        <td>\n                                            <span data-status=\"ACTIVE\" data-toggle=\"modal\"\n                                                [style.color]=\"vehiclelist.verifiedStatus == 'Rejected' ? '#ffffff' : '#ffffff'\"\n                                                [style.background-color]=\"vehiclelist.verifiedStatus == 'Rejected' ? '#fd397a' : '#0abb87'\"\n                                                [style.border-radius]=\"vehiclelist.verifiedStatus == 'Rejected' ? '2rem' :  '2rem'\"\n                                                [style.height]=\"vehiclelist.verifiedStatus == 'Rejected' ? 'auto' :  'auto'\"\n                                                [style.width]=\"vehiclelist.verifiedStatus == 'Rejected' ? 'auto' :  'auto'\"\n                                                [style.padding]=\"vehiclelist.verifiedStatus == 'Rejected' ? '0.15rem 0.75rem' :  '0.15rem 0.75rem'\">{{vehiclelist.verifiedStatus}}</span>\n                                        </td>\n                                        <td>\n                                            <a class=\"btn btn-hover-brand btn-icon btn-pill\" href=\"javascript:;\"\n                                                id=\"btnEdit\" (click)=\"edit(vehiclelist._id)\" title=\"Edit details\">\n                                                <i class=\"la la-edit\"></i>\n                                            </a>\n                                            <a href=\"javascript:;\" id=\"btnDelete\" data-toggle=\"modal\"\n                                                data-target=\"#m_modal_6\" (click)=\"delete(vehiclelist._id)\"\n                                                class=\"btn btn-hover-danger btn-icon btn-pill\" title=\"Delete\">\n                                                <i class=\"la la-trash\"></i>\n                                            </a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"vehiclelists.length <= 0\">\n                                    <tr>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td class=\"txt-center\">{{'DRIVER.LABEL.VEHICLE_NOT_ADDED' | translate}}</td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!--Drivers vehicle lists table stars -->\n                        <!--\n                            <form class=\"kt-form kt-form__group\" name=\"addDriverForm2\" [formGroup]=\"addDriverForm2\">\n                        <! brand -- vehicle --\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.BRAND_NAME' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"brandName\" (change)=\"changeBrand($event.target.value)\" formControlName=\"brandName\"\n                                        [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.brandName.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_BRAND'|translate}}</option>\n                                        <option value=\"{{brand._id}}\" *ngFor=\"let brand of brands\">{{brand.brand_name}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.brandName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.brandName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.brandName.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.BRANDNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.VEHICLE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Vehicle Image\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFile($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\"\n                                            data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- model name --\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.MODEL_NAME' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"brandName\" formControlName=\"vehicleModelName\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.vehicleModelName.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_MODEL' | translate}}</option>\n                                        <option value=\"{{model._id}}\" *ngFor=\"let model of models\">{{model.model_name}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.vehicleModelName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.vehicleModelName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.NUMBER_PLATE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url2+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Number Plate\" *ngIf=\"url2 && url2=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFileNumberPlate($event)\">\n                                            <!-- formControlName= \"registrationNoImage\" --\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url2 && url2!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\"\n                                            data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemoveNumberPlate()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                    <!-- <div *ngIf=\"submitted1 && addDriverForm2.controls.registrationNoImage.errors\"\n                                    class=\"form-control-feedback\" style=\"color: red\">\n                                    <p\n                                        *ngIf=\"submitted1 && addDriverForm2.controls.registrationNoImage.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                   </div> --\n                                </div>\n                            </div>\n                        </div>\n                        <!-- ---- Name Plate & Vehicle icon --\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.NUMBER_PLATE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.NUMBER_PLATE' | translate}}\"\n                                        type=\"text\" formControlName=\"numberPlate\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.numberPlate.errors }\">\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.numberPlate.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.numberPlate.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.CAR_ICON' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url1+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Car Icon\" *ngIf=\"url1 && url1=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFileIcon($event)\">\n                                            <!-- formControlName= \"carIconImage --\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url1 && url1!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\"\n                                            data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemoveIcon()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                    <!-- <div *ngIf=\"submitted1 && addDriverForm2.controls.carIconImage.errors\"\n                                    class=\"form-control-feedback\" style=\"color: red\">\n                                    <p\n                                        *ngIf=\"submitted1 && addDriverForm2.controls.carIconImage.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                   </div> --\n                    </div>\n                </div>\n            </div>\n            <!-------color and year--\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.VEHICLE_COLOR' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"color\" formControlName=\"color\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.color.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_COLOR' | translate }}</option>\n                                        <option value=\"{{color._id}}\" *ngFor=\"let color of colors\">{{color.color_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.color.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.color.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.YEAR_OF_VEHICLE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"year\" formControlName=\"year\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.year.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_YEAR' | translate}}</option>\n                                        <option value=\"{{year}}\" *ngFor=\"let year of years\">{{year}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.year.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.year.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.AMMENITIES' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <angular2-multiselect [data]=\"allAmmenities\" [(ngModel)]=\"selectedItemsAmmenities\" [settings]=\"dropdownSettingsAmmenities\"\n                                        (onSelect)=\"onItemAmmenitiesSelect($event,selectedItemsAmmenities)\" (onDeSelect)=\"onItemAmmenitiesDeSelect($event,selectedItemsAmmenities)\"\n                                        (onSelectAll)=\"onAmmenitiesSelectAll($event)\" (onDeSelectAll)=\"onAmmenitiesDeSelectAll($event)\"\n                                        formControlName=\"ammenities\">\n                                    </angular2-multiselect>\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.ammenities.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.ammenities.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.DRIVER_STATUS' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"verifiedStatus\" formControlName=\"verifiedStatus\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm2.controls.verifiedStatus.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                        <option value=\"{{status.value}}\" *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">{{status.key}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted1 && addDriverForm2.controls.verifiedStatus.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted1 && addDriverForm2.controls.verifiedStatus.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons --\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveVehicleDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                        -->\n                    </div>\n                </div>\n                <!-- Driver Bank Details Start -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'bank' }\"\n                    *ngIf=\" navObj.link === 'bank'\" id=\"bank_detail\" role=\"tabpanel\"\n                    aria-labelledby=\"bank_detail-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addDriverForm3\" [formGroup]=\"addDriverForm3\">\n                        <!--- bank name & account holder name-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.BANK_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.BANK_NAME' | translate}}\" type=\"text\"\n                                        formControlName=\"bankName\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.bankName.errors }\">\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.bankName.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addDriverForm3.controls.bankName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm3.controls.bankName.errors?.minlength && !addDriverForm3.controls.bankName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm3.controls.bankName.errors?.maxlength && !addDriverForm3.controls.bankName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addDriverForm3.controls.bankName.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.BANKNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ACCOUNT_HOLDER_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.ACCOUNT_HOLDER_NAME' | translate}}\"\n                                        type=\"text\" formControlName=\"accountHolderName\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.accountHolderName.errors }\">\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.accountHolderName.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted2 && addDriverForm3.controls.accountHolderName.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm3.controls.accountHolderName.errors?.minlength && !addDriverForm3.controls.accountHolderName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm3.controls.accountHolderName.errors?.maxlength && !addDriverForm3.controls.accountHolderName.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p\n                                            *ngIf=\"submitted2 && addDriverForm3.controls.accountHolderName.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.ACCOUNT_HOLDERNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--- account number & account type-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ACCOUNT_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.ACCOUNT_NUMBER' | translate}}\" type=\"text\"\n                                        formControlName=\"accountNumber\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.accountNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.accountNumber.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addDriverForm3.controls.accountNumber.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addDriverForm3.controls.accountNumber.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.ACCOUNT_NUMBER_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ACCOUNT_TYPE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"account\" formControlName=\"accountType\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.accountType.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_ACCOUNT_TYPE'|translate}}\n                                        </option>\n                                        <option value=\"{{accountType._id}}\" *ngFor=\"let accountType of accountTypes\">\n                                            {{accountType.account_type_name}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.accountType.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addDriverForm3.controls.accountType.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!-- Routing number -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ROUTING_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.ROUTING_NUMBER' | translate}}\" type=\"text\"\n                                        formControlName=\"routingNumber\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.routingNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.routingNumber.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addDriverForm3.controls.routingNumber.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.VERIFIED_STATUS' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"verifiedStatus\"\n                                        formControlName=\"verifiedStatus\" (change)=\"selectVerifiedBankValue($event)\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.verifiedStatus.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                        <option value=\"{{status.value}}\"\n                                            *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">\n                                            {{status.key}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.verifiedStatus.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted2 && addDriverForm3.controls.verifiedStatus.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\" *ngIf=\"addDriverForm3.value.verifiedStatus == '2'\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.REJECTED_REASON' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.REJECTED_REASON' | translate}}\" type=\"text\"\n                                        formControlName=\"rejectedReason\"\n                                        [ngClass]=\"{ 'is-invalid': submitted2 && addDriverForm3.controls.rejectedReason.errors }\">\n                                    <div *ngIf=\"submitted2 && addDriverForm3.controls.rejectedReason.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted2 && addDriverForm3.controls.rejectedReason.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\"\n                                        class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveBankDetail()\"\n                                        class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- Driver Bank Details End-->\n                <!-- Driver Address Details  Start -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObjAddress.link === 'address' }\"\n                    *ngIf=\" navObj.link === 'address'\" id=\"user_address\" role=\"tabpanel\"\n                    aria-labelledby=\"user_address-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addDriverForm4\" [formGroup]=\"addDriverForm4\">\n                        <!--- address1 & address2 -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ADDRESS1' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <textarea class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.USER_ADDRESS' | translate}}\" type=\"text\"\n                                        formControlName=\"address1\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.address1.errors }\"></textarea>\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.address1.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addDriverForm4.controls.address1.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm4.controls.address1.errors?.minlength && !addDriverForm4.controls.address1.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm4.controls.address1.errors?.maxlength && !addDriverForm4.controls.address1.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ADDRESS2' | translate }} \n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <textarea class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.HOUSE_APARTMENT' | translate}}\" type=\"text\"\n                                        formControlName=\"address2\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.address2.errors }\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- country  city-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.CITY_COUNTRY_NAME' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.COUNTRY_NAME' | translate}}\" type=\"text\"\n                                        formControlName=\"country\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.country.errors }\">\n                                    <!-- <select class=\"form-control m-input\" id=\"country\" formControlName=\"country\" (change)=\"changeCountry($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.country.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_COUNTRY'|translate}}</option>\n                                        <option value=\"{{country._id}}\" *ngFor=\"let country of countries\">\n                                            {{country.country_name}}</option>\n                                    </select> -->\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.country.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addDriverForm4.controls.country.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.COUNTRY_STATE_NAME' | translate}}*\n                                    </label>\n                                </div>\n                                <!-- state -->\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.ENTER_STATE' | translate}}\" type=\"text\"\n                                        formControlName=\"state\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.state.errors }\">\n                                    <!-- <select class=\"form-control m-input\" id=\"country\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.city.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATE'|translate}}</option>\n                                        <option value=\"{{state._id}}\" *ngFor=\"let city of cities\">{{state.state_name}}\n                                        </option>\n                                    </select> -->\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.state.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addDriverForm4.controls.state.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!---  city & status-->\n                        <div class=\"form-group  row\">\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.COUNTRY_CITY_NAME' | translate}}*\n                                    </label>\n                                </div>\n                                <!-- cityId -->\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.CITY_NAME' | translate}}\" type=\"text\"\n                                        formControlName=\"city\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.city.errors }\">\n                                    <!-- <select class=\"form-control m-input\" id=\"country\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.city.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_CITY'|translate}}</option>\n                                        <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">{{city.city_name}}\n                                        </option>\n                                    </select> -->\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.city.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addDriverForm4.controls.city.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.ZIP_CODE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.ZIP_CODE' | translate}}\" type=\"text\"\n                                        formControlName=\"zipCode\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.zipCode.errors }\">\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.zipCode.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addDriverForm4.controls.zipCode.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm4.controls.zipCode.errors?.minlength\" class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.ZIPCODE_MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm4.controls.zipCode.errors?.maxlength\" class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.ZIPCODE_MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addDriverForm4.controls.zipCode.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.ZIPCODE_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <!---  StreetName Zip Code-->\n                        <div class=\"form-group  row\">\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.VERIFIED_STATUS' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"verifiedStatus\"\n                                        formControlName=\"verifiedStatus\" (change)=\"selectVerifiedAddressValue($event)\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.verifiedStatus.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                        <option value=\"{{status.value}}\"\n                                            *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">\n                                            {{status.key}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.verifiedStatus.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted3 && addDriverForm4.controls.verifiedStatus.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\" *ngIf=\"addDriverForm4.value.verifiedStatus == '2'\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.REJECTED_REASON' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.REJECTED_REASON' | translate}}\" type=\"text\"\n                                        formControlName=\"rejectedReason\"\n                                        [ngClass]=\"{ 'is-invalid': submitted3 && addDriverForm4.controls.rejectedReason.errors }\">\n                                    <div *ngIf=\"submitted3 && addDriverForm4.controls.rejectedReason.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted3 && addDriverForm4.controls.rejectedReason.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\"\n                                        class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveUserAddress()\"\n                                        class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!---- Driving License start -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObjDocument.link === 'document' }\"\n                    *ngIf=\" navObj.link === 'document'\" id=\"driver_document\" role=\"tabpanel\"\n                    aria-labelledby=\"driver_document-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addDriverForm5\" [formGroup]=\"addDriverForm5\">\n                        <!-- licenceNumber & license Image-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.DRIVER_LICENCE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url3+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Licence Image\"\n                                            *ngIf=\"url3 && url3=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                                (change)=\"onSelectLicenceImage($event)\">\n                                            <!-- formControlName= \"licenceImage -->\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\"\n                                            *ngIf=\"url3 && url3!='../../../../../assets/media/newMedia/add.png'\"\n                                            style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\"\n                                            (click)=\"RemoveLicenceImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                    <!-- <div *ngIf=\"submitted4 && addDriverForm5.controls.licenceImage.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted4 && addDriverForm5.controls.licenceImage.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                     </div> -->\n                                </div>\n                            </div>\n\n\n                            <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.USER_LICENCE_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.USER_LICENCE_NUMBER' | translate}}\"\n                                        type=\"text\" formControlName=\"licenceNumber\"\n                                        [ngClass]=\"{ 'is-invalid': submitted4 && addDriverForm5.controls.licenceNumber.errors }\">\n                                    <div *ngIf=\"submitted4 && addDriverForm5.controls.licenceNumber.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addDriverForm5.controls.licenceNumber.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm5.controls.licenceNumber.errors?.minlength && !addDriverForm5.controls.licenceNumber.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm5.controls.licenceNumber.errors?.maxlength && !addDriverForm5.controls.licenceNumber.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.LICENSE_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.LICENSE_NUMBER' | translate}}\" type=\"text\"\n                                        formControlName=\"licenceNumber\"\n                                        [ngClass]=\"{ 'is-invalid': submitted4 && addDriverForm5.controls.licenceNumber.errors }\">\n                                    <div *ngIf=\"submitted4 && addDriverForm5.controls.licenceNumber.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addDriverForm5.controls.licenceNumber.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm5.controls.licenceNumber.errors?.minlength && !addDriverForm5.controls.licenceNumber.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm5.controls.licenceNumber.errors?.maxlength && !addDriverForm5.controls.licenceNumber.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.EXPIRY_DATE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <!-- <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.EXPIRY_DATE' | translate}}\"\n                                        type=\"text\" formControlName=\"expiryDate\" [ngClass]=\"{ 'is-invalid': submitted4 && addDriverForm5.controls.expiryDate.errors }\"> -->\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.EXPIRY_DATE' | translate}}\" type=\"text\"\n                                        name=\"expiryDate\" formControlName=\"expiryDate\" #dp=\"bsDatepicker\" bsDatepicker\n                                        [bsConfig]=\"bsConfig\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm5.controls.promocode_startDate.errors }\">\n                                    <div *ngIf=\"submitted4 && addDriverForm5.controls.expiryDate.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addDriverForm5.controls.expiryDate.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm5.controls.expiryDate.errors?.minlength && !addDriverForm5.controls.expiryDate.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addDriverForm5.controls.expiryDate.errors?.maxlength && !addDriverForm5.controls.expiryDate.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.STATE_ISSUED' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"stateIssued\" formControlName=\"stateIssued\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && addDriverForm5.controls.stateIssued.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.STATE_ISSUED' | translate}}</option>\n                                        <option value=\"{{state._id}}\" *ngFor=\"let state of states\">\n                                            {{state.state_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted4 && addDriverForm5.controls.stateIssued.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addDriverForm5.controls.stateIssued.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.VERIFIED_STATUS' | translate}}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"verifiedStatus\"\n                                        (change)=\"selectVerifiedLicenseValue($event)\" formControlName=\"verifiedStatus\"\n                                        [ngClass]=\"{ 'is-invalid': submitted4 && addDriverForm5.controls.verifiedStatus.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                        <option value=\"{{status.value}}\"\n                                            *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">\n                                            {{status.key}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted4 && addDriverForm5.controls.verifiedStatus.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted4 && addDriverForm5.controls.verifiedStatus.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\" *ngIf=\"addDriverForm5.value.verifiedStatus == '2'\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.REJECTED_REASON' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.REJECTED_REASON' | translate}}\" type=\"text\"\n                                        formControlName=\"rejectedReason\"\n                                        [ngClass]=\"{ 'is-invalid': submitted4 && addDriverForm5.controls.rejectedReason.errors }\">\n                                    <div *ngIf=\"submitted4 && addDriverForm5.controls.rejectedReason.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted4 && addDriverForm5.controls.rejectedReason.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\"\n                                        class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveDriverDetails()\"\n                                        class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!---- Driving License end -->\n                <!----Other Document start -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObjOtherDocument.link === 'otherDocument' }\"\n                    *ngIf=\" navObj.link === 'otherDocument'\" id=\"driver_other_document\" role=\"tabpanel\"\n                    aria-labelledby=\"driver_other_document-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addDriverForm6\" [formGroup]=\"addDriverForm6\">\n                       <!-- Document & Document Name -->\n                       <div class=\"form-group  row\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"col-lg-12\">\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{'DRIVER.LABEL.OTHER_DOCUMENT' | translate}}*\n                                </label>\n                            </div>\n\n                            <div class=\"col-lg-12\">\n                                <select class=\"form-control m-input\" id=\"specific\" formControlName=\"otherDocument\" (change)=\"selectInput($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted5 && addDriverForm6.controls.otherDocument.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.OTHER_DOCUMENTS' | translate}}</option>\n                                        <option value=\"{{type._id}}\" *ngFor=\"let type of documentTypes  \">{{type.documentType_name}}\n                                        </option>\n                                </select>\n                                <div *ngIf=\"submitted5 && addDriverForm6.controls.otherDocument.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                    <p *ngIf=\"submitted5 && addDriverForm6.controls.otherDocument.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                </div>\n                            </div>\n\n                        </div>\n                       </div>\n                    <div class=\"form-group  row\">\n                        <div class=\"col-lg-6\" *ngIf=\"otherSelected\">\n                            <div class=\"col-lg-12\">\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{'DRIVER.LABEL.DOCUMENT_NAME' | translate }} *\n                                </label>\n                            </div>\n                            <div class=\"col-lg-12\">\n\n                                <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.DOCUMENT_NAME' | translate}}\" type=\"text\" formControlName=\"documentName\" [ngClass]=\"{ 'is-invalid': submitted5 && addDriverForm6.controls.documentName.errors }\">\n                                <div *ngIf=\"submitted5 && addDriverForm6.controls.documentName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                    <p *ngIf=\"submitted5 && addDriverForm6.controls.documentName.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                    <p *ngIf=\"addDriverForm6.controls.documentName.errors?.minlength && !addDriverForm6.controls.documentName.errors?.pattern\" class=\"lbl-err\">\n                                        {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                    </p>\n                                    <p *ngIf=\"addDriverForm6.controls.documentName.errors?.maxlength && !addDriverForm6.controls.documentName.errors?.pattern\" class=\"lbl-err\">\n                                        {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Document Image & status -->\n                    <div class=\"form-group  row\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"col-lg-12\">\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{'DRIVER.LABEL.DOCUMENT_IMAGE' | translate }}*\n                                </label>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                    <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url4+')'\">\n                                    </div>\n                                    <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"Document Image\" *ngIf=\"url4 && url4=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                        <i class=\"fa fa-pen\"></i>\n                                        <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectOtherDocumentImage($event)\">\n                                        <!-- formControlName= \"documentImage\" -->\n                                    </label>\n                                    <span class=\"kt-avatar__cancel\" *ngIf=\"url4 && url4!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"RemoveOtherDocumentImage()\" data-original-title=\"Remove Image\">\n                                        <i class=\"fa fa-times\"></i>\n                                    </span>\n                                </div>\n                                <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                </span>\n                                <!-- <div *ngIf=\"submitted5 && addDriverForm6.controls.documentImage.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p\n                                    *ngIf=\"submitted5 && addDriverForm6.controls.documentImage.errors?.required\">\n                                    {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                               </div> -->\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"col-lg-6\">\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{'DRIVER.LABEL.DRIVER_STATUS' | translate}}*\n                                </label>\n                            </div>\n\n                            <div class=\"col-lg-12\">\n                                <select class=\"form-control m-input\" id=\"verifiedStatus\" formControlName=\"verifiedStatus\" [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm6.controls.verifiedStatus.errors }\">\n                                    <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                    <option value=\"{{status.value}}\" *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">{{status.key}}\n                                    </option>\n                                </select>\n                                <div *ngIf=\"submitted5 && addDriverForm6.controls.verifiedStatus.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                    <p *ngIf=\"submitted5 && addDriverForm6.controls.verifiedStatus.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- buttons -->\n                    <div class=\"form-group  row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"col-lg-12\">\n                                <button type=\"button\" routerLink=\"/driver-management/list\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                    {{'BUTTONS.CANCEL' | translate }}\n                                </button>\n                                <button type=\"submit\" (click)=\"saveDriverOtherDetails()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                    {{'BUTTONS.SUBMIT' | translate }}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                    </form>\n                </div>\n                <!----Other Document end -->\n\n                <!-- Citizen Ship Start -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObjCitizenShip.link === 'citizenShip'}\"\n                    *ngIf=\"navObj.link === 'citizenShip'\" id='citizenShip_detail' role=\"tabpanel\"\n                    aria-labelledby=\"citizen_ship-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addDriverForm7\" [formGroup]=\"addDriverForm7\">\n                        <!-- citizen ship type and social security number -->\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class='col-form-label'>\n                                        {{'DRIVER.LABEL.CITIZEN_SHIP_TYPE' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"type\" formControlName=\"type\"\n                                        [ngClass]=\"{ 'is-invalid': submitted6 && addDriverForm7.controls.type.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.CITIZEN_SHIP' | translate}}</option>\n                                        <option\n                                            value=\"{{'DRIVER.PLACEHOLDERS.PERMANENT_RESIDENT_CARD_HOLDER' | translate}}\">\n                                            {{'DRIVER.PLACEHOLDERS.PERMANENT_RESIDENT_CARD_HOLDER' | translate}}\n                                        </option>\n                                        <option\n                                            value=\"{{'DRIVER.PLACEHOLDERS.TEMPORARY_RESIDENT_CARD_HOLDER' | translate}}\">\n                                            {{'DRIVER.PLACEHOLDERS.TEMPORARY_RESIDENT_CARD_HOLDER' | translate}}\n                                        </option>\n                                        <option value=\"{{'DRIVER.PLACEHOLDERS.WORK_PERMIT_HOLDER' | translate}}\">\n                                            {{'DRIVER.PLACEHOLDERS.WORK_PERMIT_HOLDER' | translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted6 && addDriverForm7.controls.type.errors\"\n                                        class=\"form-control-feedback\" style=\"color:red\">\n                                        <p *ngIf=\"submitted6 && addDriverForm7.controls.type.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class='col-form-label'>\n                                        {{'DRIVER.LABEL.SOCIAL_SECURITY_NUMBER' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\"\n                                        placeholder=\"{{'DRIVER.PLACEHOLDERS.SOCIAL_SECURITY_NUMBER' | translate}}\"\n                                        type=\"text\" formControlName=\"socialSecurityNumber\"\n                                        [ngClass]=\"{ 'is-invalid': submitted6 && addDriverForm7.controls.socialSecurityNumber.errors}\">\n                                    <div *ngIf=\" submitted6 && addDriverForm7.controls.socialSecurityNumber.errors\"\n                                        class=\"form-control-feedback\" style=\"color:red\">\n                                        <p\n                                            *ngIf=\"submitted6 && addDriverForm7.controls.socialSecurityNumber.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate}}\n                                        </p>\n                                        <p\n                                            *ngIf=\"addDriverForm7.controls.socialSecurityNumber.errors?.minlength && !addDriverForm7.controls.socialSecurityNumber.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate}}\n                                        </p>\n                                        <p\n                                            *ngIf=\"addDriverForm7.controls.socialSecurityNumber.errors?.maxlength && !addDriverForm7.controls.socialSecurityNumber.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate}}\n                                        </p>\n                                        <p\n                                            *ngIf=\"submitted6 && addDriverForm7.controls.socialSecurityNumber.errors?.pattern\">\n                                            {{'DRIVER.VALIDATION.SOCIAL_SECURITY_NUMBER_INVLID' | translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                         \n                            <!-- </div> -->\n                            <!-- Identity number and HST-->\n                            <!-- <div class=\"form-group row\">\n                        <div class=\"col-log-6\">\n                            <div class=\"col-log-12\">\n                                <label for=\"example-text-input\" class='col-form-label'>\n                                    {{'DRIVER.LABEL.IDENTITY_NUMBER' | translate}}*\n                                </label>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <input class=\"form-control m-input m-login__form-input--last\"\n                                    placeholder=\"{{'DRIVER.PLACEHOLDERS.IDENTITY_NUMBER' | translate}}\" type=\"text\"\n                                    formControlName=\"identityNumber\"\n                                    [ngClass]=\"{ 'is-invalid': submitted6 && addDriverForm7.controls.identityNumber.errors}\">\n                                <div *ngIf=\" submitted6 && addDriverForm7.controls.identityNumber.errors\" class=\"form-control-feedback\"\n                                    style=\"color:red\">\n                                    <p *ngIf=\"submitted6 && addDriverForm7.controls.identityNumber.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate}}\n                                    </p>\n                                    <p\n                                        *ngIf=\"addDriverForm7.controls.identityNumber.errors?.minlength && !addDriverForm7.controls.identityNumber.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate}}\n                                    </p>\n                                    <p\n                                        *ngIf=\"addDriverForm7.controls.identityNumber.errors?.maxlength && !addDriverForm7.controls.identityNumber.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate}}\n                                    </p>\n                                    <p *ngIf=\"submitted6 && addDriverForm7.controls.identityNumber.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.IDENTITY_NUMBER_INVALID' | translate}}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-log-6\">\n                            <div class=\"col-log-12\">\n                                <label for=\"example-text-input\" class='col-form-label'>\n                                    {{'DRIVER.LABEL.HST' | translate}}*\n                                </label>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <input class=\"form-control m-input m-login__form-input--last\"\n                                    placeholder=\"{{'DRIVER.PLACEHOLDERS.HST' | translate}}\" type=\"text\"\n                                    formControlName=\"HST\"\n                                    [ngClass]=\"{ 'is-invalid': submitted6 && addDriverForm7.controls.hst.errors}\">\n                                <div *ngIf=\" submitted6 && addDriverForm7.controls.hst.errors\" class=\"form-control-feedback\"\n                                    style=\"color:red\">\n                                    <p *ngIf=\"submitted6 && addDriverForm7.controls.hst.errors?.required\">\n                                        {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate}}\n                                    </p>\n                                    <p\n                                        *ngIf=\"addDriverForm7.controls.hst.errors?.minlength && !addDriverForm7.controls.hst.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate}}\n                                    </p>\n                                    <p\n                                        *ngIf=\"addDriverForm7.controls.hst.errors?.maxlength && !addDriverForm7.controls.hst.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate}}\n                                    </p>\n                                    <p *ngIf=\"submitted6 && addDriverForm7.controls.hst.errors?.pattern\">\n                                        {{'DRIVER.VALIDATION.HST_INVALID' | translate}}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'DRIVER.LABEL.DRIVER_STATUS' | translate}}*\n                                    </label>\n                                </div>\n\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"verifiedStatus\"\n                                        formControlName=\"verifiedStatus\"\n                                        [ngClass]=\"{ 'is-invalid': submitted1 && addDriverForm6.controls.verifiedStatus.errors }\">\n                                        <option value=\"\">{{'DRIVER.PLACEHOLDERS.SELECT_STATUS' | translate}}</option>\n                                        <option value=\"{{status.value}}\"\n                                            *ngFor=\"let status of driverDocumentVerifiedStatus | keyvalue \">\n                                            {{status.key}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted5 && addDriverForm6.controls.verifiedStatus.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p\n                                            *ngIf=\"submitted5 && addDriverForm6.controls.verifiedStatus.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-6\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\"\n                                        class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveCitizenShip()\"\n                                        class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- Citizen Ship End -->\n            </div>\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ht-auto {\n  height: auto !important; }\n\n.inln_ckbx {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  vertical-align: middle;\n  margin-left: 15px; }\n\n.mrgn_tp_ckb {\n  margin-top: 37px; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n.btn-addVehicle {\n  float: right; }\n\n.img-zoom {\n  height: 200px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvZHJpdmVyLW1hbmFnZW1lbnQvYWRkLWVkaXQtdmVoaWNsZS9hZGQtZWRpdC12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsdUJBQXVCLEVBQUE7O0FBQ2pDO0VBQ0kscUJBQXFCO0VBQ3BCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUVyQjtFQUFjLGdCQUFnQixFQUFBOztBQUM5QjtFQUNHLHFFQUFxRSxFQUFBOztBQUV6RTtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2RyaXZlci1tYW5hZ2VtZW50L2FkZC1lZGl0LXZlaGljbGUvYWRkLWVkaXQtdmVoaWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odC1hdXRvIHtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDt9XG4uaW5sbl9ja2J4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIGhlaWdodDogMjBweDtcbiAgICAgd2lkdGg6IDIwcHg7XG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuIH1cbiAubXJnbl90cF9ja2Ige21hcmdpbi10b3A6IDM3cHg7fVxuIC53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjYWxjKDAuMzc1ZW0gKyAxLjMyNXJlbSkgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uYnRuLWFkZFZlaGljbGUge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5pbWctem9vbSB7XG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddVehicleComponent, EditVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehicleComponent", function() { return EditVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_contants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app-contants */ "./src/app-contants.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_driver_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/driver.actions */ "./src/app/views/pages/driver-management/state/driver.actions.ts");
/* harmony import */ var _state_driver_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state/driver.reducer */ "./src/app/views/pages/driver-management/state/driver.reducer.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _brand_brand_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../brand/brand.service */ "./src/app/views/pages/brand/brand.service.ts");
/* harmony import */ var _model_model_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/model.service */ "./src/app/views/pages/model/model.service.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _driver_management_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../driver-management.service */ "./src/app/views/pages/driver-management/driver-management.service.ts");
/* harmony import */ var _trim_trim_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../trim/trim.service */ "./src/app/views/pages/trim/trim.service.ts");
/* harmony import */ var _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../service-operator/service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");




















var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(_formBuilder, store, toastr, brandService, dtr, modelService, translate, router, subheaderService, titleService, driverService, trimService, _route, ServiceOperatorService) {
        this._formBuilder = _formBuilder;
        this.store = store;
        this.toastr = toastr;
        this.brandService = brandService;
        this.dtr = dtr;
        this.modelService = modelService;
        this.translate = translate;
        this.router = router;
        this.subheaderService = subheaderService;
        this.driverService = driverService;
        this.trimService = trimService;
        this._route = _route;
        this.ServiceOperatorService = ServiceOperatorService;
        this.isAdd = true;
        // insurance
        this.url = '../../../../../assets/media/newMedia/add.png';
        // car icon
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        // number plate  
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        // inspection
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.DRIVER_CONST = [];
        this.brands = [];
        this.models = [];
        this.trims = [];
        this.colors = [];
        this.years = [];
        this.allAmmenities = [];
        this.selectedItemsAmmenities = [];
        this.dropdownSettingsAmmenities = {};
        this.driverDocumentVerifiedStatus = _app_contants__WEBPACK_IMPORTED_MODULE_5__["appConstants"].DRIVER_VERIFIED_STATUS;
        this.serviceTypes = [];
        this.selectedItemsServices = [];
        this.dropdownSettingsServices = {};
        this.VEHICLE_CONST = this.translate.instant('VEHICLE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.VEHICLE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_13__["APPNAME"] + " | " + this.VEHICLE_CONST.MODULE_NAME);
    }
    AddVehicleComponent.prototype.selectVerifiedValue = function (event) {
        var selected = event.target.value;
        if (selected == 2) {
            var rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = false;
        }
        else {
            var rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = true;
        }
    };
    AddVehicleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = this._route.snapshot.params['id'];
                        this.dropdownSettingsAmmenities = {
                            singleSelection: false,
                            text: "Select Amenities",
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            enableSearchFilter: true,
                            classes: "dropdown"
                        };
                        this.dropdownSettingsServices = {
                            singleSelection: false,
                            text: "Select Services",
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            enableSearchFilter: true,
                            classes: "dropdown"
                        };
                        return [4 /*yield*/, this.buildAddDriverForm2()];
                    case 1:
                        _a.sent();
                        this.getAllBrands();
                        this.getAllColors();
                        this.getAllAmmenities();
                        this.getYear();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddVehicleComponent.prototype.onItemServicesSelect = function (item) {
        this.selectedItemsServices[item];
    };
    AddVehicleComponent.prototype.onItemServicesDeSelect = function (item) {
        this.selectedItemsServices.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsServices[el];
            }
        });
    };
    AddVehicleComponent.prototype.onServicesSelectAll = function (items) {
    };
    AddVehicleComponent.prototype.onServicesDeSelectAll = function (items) {
    };
    AddVehicleComponent.prototype.buildAddDriverForm2 = function () {
        this.addDriverForm2 = this._formBuilder.group({
            brandName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_3__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_3__["validataion"].nameMaxLength)]],
            carType: [""],
            vehicleModelName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // numberPlate: ["", [Validators.required]],
            year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            color: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ammenities: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vehicleTrimName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rejectedReason: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isDefault: [],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_5__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    };
    AddVehicleComponent.prototype.getAllBrands = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.brandService.getAllBrands().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.brands = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddVehicleComponent.prototype.getAllServiceTypes = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.ServiceOperatorService.getAllServiceTypes().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.serviceTypes = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddVehicleComponent.prototype.changeBrand = function (brand) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                        if (!brand) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modelService
                                .getBrandModel(brand)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.models = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    AddVehicleComponent.prototype.changeModel = function (model) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                        if (!model) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.trimService
                                .getModelTrim(model)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.trims = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    AddVehicleComponent.prototype.getAllColors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                        return [4 /*yield*/, this.modelService
                                .getAllColors()
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.colors = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    AddVehicleComponent.prototype.getAllAmmenities = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.driverService.getAllAmmenities().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        data['data'].forEach(function (element) {
                            _this.allAmmenities.push({
                                id: element._id,
                                itemName: element.ammenities_name
                            });
                        });
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddVehicleComponent.prototype.onItemAmmenitiesSelect = function (e, item) {
        this.selectedItemsAmmenities[item];
    };
    AddVehicleComponent.prototype.onItemAmmenitiesDeSelect = function (e, item) {
        this.selectedItemsAmmenities.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsAmmenities[el];
            }
        });
    };
    AddVehicleComponent.prototype.onAmmenitiesSelectAll = function (items) { };
    AddVehicleComponent.prototype.onAmmenitiesDeSelectAll = function (items) { };
    // insuranceDocumentImage
    AddVehicleComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                //   this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    AddVehicleComponent.prototype.imageRemove = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    //for car Icon
    AddVehicleComponent.prototype.onSelectFileIcon = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile1 = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url1 = reader_2.result;
                    // this.previewImageSrc = reader.result;
                    // this.zoomImageSrc = reader.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    AddVehicleComponent.prototype.imageRemoveIcon = function () {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
    };
    // for registration Document Image
    AddVehicleComponent.prototype.onSelectFileRegistrationDocImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile2 = event.target.files[0];
                var reader_3 = new FileReader();
                reader_3.readAsDataURL(event.target.files[0]);
                reader_3.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url2 = reader_3.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    AddVehicleComponent.prototype.imageRemoveRegistrationDoc = function () {
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile2 = '';
    };
    // Inspection image
    AddVehicleComponent.prototype.onSelectInspectionFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile3 = event.target.files[0];
                var reader_4 = new FileReader();
                reader_4.readAsDataURL(event.target.files[0]);
                reader_4.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url3 = reader_4.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    AddVehicleComponent.prototype.imageInspectionRemove = function () {
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile3 = '';
    };
    AddVehicleComponent.prototype.getYear = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        var startYear = 1970;
        var currentYear = new Date().getFullYear();
        for (var i = startYear; i <= currentYear; i++) {
            this.years.push(i);
        }
    };
    AddVehicleComponent.prototype.saveVehicleDetail = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        var form = this.addDriverForm2.value;
        var fd = new FormData();
        fd.append('brandName', form.brandName);
        fd.append('carType', form.carType);
        fd.append('vehicleModelName', form.vehicleModelName);
        // fd.append('numberPlate', form.numberPlate);
        fd.append('year', form.year);
        fd.append('color', form.color);
        fd.append('vehicleTrimName', form.vehicleTrimName);
        fd.append('verifiedStatus', form.verifiedStatus);
        if (form.isDefault == true) {
            form.isDefault = 1;
        }
        else {
            form.isDefault = 0;
        }
        fd.append('isDefault', form.isDefault);
        var ammenitiesArray = [];
        form.ammenities.forEach(function (element) {
            ammenitiesArray.push(element.id);
        });
        fd.append('rejectedReason', form.rejectedReason);
        fd.append('ammenities', ammenitiesArray);
        if (this.imageFile) {
            fd.append('insuranceDocumentImage', this.imageFile);
        }
        if (this.imageFile1) {
            fd.append('carIconImage', this.imageFile1);
        }
        if (this.imageFile2) {
            fd.append('registrationDocumentImage', this.imageFile2);
        }
        if (this.imageFile3) {
            fd.append('inspectionCertificateImage', this.imageFile3);
        }
        var obj = {
            id: this.id,
            data: fd
        };
        this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateVehicleInfo"](obj));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_9__["selectPageState"])).subscribe(function (data) {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    var result = data['data'];
                    _this.id = result._id;
                    _this.toastr.error(_this.DRIVER_CONST.MESSAGES.VEHICLEADD);
                    _this.stateSubscription.unsubscribe();
                    _this.router.navigate(["/driver-management/list"]);
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.stateSubscription.unsubscribe();
                    _this.toastr.error(data['message']);
                }
            }
        });
    };
    AddVehicleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _model_model_service__WEBPACK_IMPORTED_MODULE_12__["ModelService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_15__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["Title"] },
        { type: _driver_management_service__WEBPACK_IMPORTED_MODULE_17__["DriverManagementService"] },
        { type: _trim_trim_service__WEBPACK_IMPORTED_MODULE_18__["TrimService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_19__["ServiceOperatorService"] }
    ]; };
    AddVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-vehicle',
            template: __webpack_require__(/*! raw-loader!./add-edit-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-vehicle.component.scss */ "./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _model_model_service__WEBPACK_IMPORTED_MODULE_12__["ModelService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_15__["SubheaderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["Title"],
            _driver_management_service__WEBPACK_IMPORTED_MODULE_17__["DriverManagementService"],
            _trim_trim_service__WEBPACK_IMPORTED_MODULE_18__["TrimService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_19__["ServiceOperatorService"]])
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());

var EditVehicleComponent = /** @class */ (function () {
    function EditVehicleComponent(_formBuilder, store, toastr, brandService, dtr, modelService, router, translate, subheaderService, titleService, driverService, _route, trimService, ServiceOperatorService) {
        this._formBuilder = _formBuilder;
        this.store = store;
        this.toastr = toastr;
        this.brandService = brandService;
        this.dtr = dtr;
        this.modelService = modelService;
        this.router = router;
        this.translate = translate;
        this.subheaderService = subheaderService;
        this.driverService = driverService;
        this._route = _route;
        this.trimService = trimService;
        this.ServiceOperatorService = ServiceOperatorService;
        // insurance
        this.url = '../../../../../assets/media/newMedia/add.png';
        // car icon
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        // number plate  
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        // inspection
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.DRIVER_CONST = [];
        this.brands = [];
        this.serviceTypes = [];
        this.models = [];
        this.colors = [];
        this.trims = [];
        this.years = [];
        this.allAmmenities = [];
        this.selectedItemsAmmenities = [];
        this.dropdownSettingsAmmenities = {};
        this.driverDocumentVerifiedStatus = _app_contants__WEBPACK_IMPORTED_MODULE_5__["appConstants"].DRIVER_VERIFIED_STATUS;
        this.selectedItemsServices = [];
        this.dropdownSettingsServices = {};
        this.VEHICLE_CONST = this.translate.instant('VEHICLE');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.VEHICLE'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_13__["APPNAME"] + " | " + this.VEHICLE_CONST.MODULE_NAME);
        this.getAllAmmenities();
    }
    EditVehicleComponent.prototype.selectVerifiedValue = function (event) {
        var selected = event.target.value;
        if (selected == 2) {
            var rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = false;
        }
        else {
            var rejectedReasonControl = this.addDriverForm2.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            this.isVerifiedSelected = true;
        }
    };
    EditVehicleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = this._route.snapshot.params['id'];
                        this.dropdownSettingsAmmenities = {
                            singleSelection: false,
                            text: "Select Amenities",
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            enableSearchFilter: true,
                            classes: "dropdown"
                        };
                        this.dropdownSettingsServices = {
                            singleSelection: false,
                            text: "Select Services",
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            enableSearchFilter: true,
                            classes: "dropdown"
                        };
                        return [4 /*yield*/, this.buildAddDriverForm2()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAllBrands()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getAllServiceTypes()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getAllColors()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getYear()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.getVehicleById()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVehicleComponent.prototype.onItemServicesSelect = function (item) {
        this.selectedItemsServices[item];
    };
    EditVehicleComponent.prototype.onItemServicesDeSelect = function (item) {
        this.selectedItemsServices.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsServices[el];
            }
        });
    };
    EditVehicleComponent.prototype.onServicesSelectAll = function (items) {
    };
    EditVehicleComponent.prototype.onServicesDeSelectAll = function (items) {
    };
    EditVehicleComponent.prototype.buildAddDriverForm2 = function () {
        this.addDriverForm2 = this._formBuilder.group({
            brandName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_3__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_3__["validataion"].nameMaxLength)]],
            carType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vehicleModelName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // numberPlate: ["", [Validators.required]],
            year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            color: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ammenities: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vehicleTrimName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rejectedReason: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isDefault: [""],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_5__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    };
    EditVehicleComponent.prototype.getAllBrands = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.brandService.getAllBrands().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.brands = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditVehicleComponent.prototype.getAllServiceTypes = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.ServiceOperatorService.getAllServiceTypes().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.serviceTypes = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditVehicleComponent.prototype.changeBrand = function (brand) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                        if (!brand) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modelService
                                .getBrandModel(brand)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.models = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    EditVehicleComponent.prototype.changeModel = function (model) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                        if (!model) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.trimService
                                .getModelTrim(model)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.trims = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    EditVehicleComponent.prototype.getAllColors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                        return [4 /*yield*/, this.modelService
                                .getAllColors()
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.colors = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    EditVehicleComponent.prototype.getAllAmmenities = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.driverService.getAllAmmenities().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        data['data'].forEach(function (element) {
                            _this.allAmmenities.push({
                                id: element._id,
                                itemName: element.ammenities_name
                            });
                        });
                        // if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        this.dtr.detectChanges();
                        // }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditVehicleComponent.prototype.onItemAmmenitiesSelect = function (e, item) {
        this.selectedItemsAmmenities[item];
    };
    EditVehicleComponent.prototype.onItemAmmenitiesDeSelect = function (e, item) {
        this.selectedItemsAmmenities.filter(function (el) {
            if (el.id == item.id) {
                delete this.selectedItemsAmmenities[el];
            }
        });
    };
    EditVehicleComponent.prototype.onAmmenitiesSelectAll = function (items) { };
    EditVehicleComponent.prototype.onAmmenitiesDeSelectAll = function (items) { };
    // insuranceDocumentImage
    EditVehicleComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_5 = new FileReader();
                reader_5.readAsDataURL(event.target.files[0]);
                reader_5.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url = reader_5.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditVehicleComponent.prototype.cancle = function () {
        this.router.navigate(["/driver-management/edit/" + this.driverId]);
        this.driverService.updateVehicle('updateVehicle');
    };
    EditVehicleComponent.prototype.imageRemove = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    //for car Icon
    EditVehicleComponent.prototype.onSelectFileIcon = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile1 = event.target.files[0];
                var reader_6 = new FileReader();
                reader_6.readAsDataURL(event.target.files[0]);
                reader_6.onload = function (event) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url1 = reader_6.result;
                    _this.myThumbnail = reader_6.result;
                    _this.myFullresImage = reader_6.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditVehicleComponent.prototype.imageRemoveIcon = function () {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
    };
    // for registration Document Image
    EditVehicleComponent.prototype.onSelectFileRegistrationDocImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile2 = event.target.files[0];
                var reader_7 = new FileReader();
                reader_7.readAsDataURL(event.target.files[0]);
                reader_7.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url2 = reader_7.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditVehicleComponent.prototype.imageRemoveRegistrationDoc = function () {
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile2 = '';
    };
    // Inspection image
    EditVehicleComponent.prototype.onSelectInspectionFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
                this.imageFile3 = event.target.files[0];
                var reader_8 = new FileReader();
                reader_8.readAsDataURL(event.target.files[0]);
                reader_8.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.url3 = reader_8.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditVehicleComponent.prototype.imageInspectionRemove = function () {
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile3 = '';
    };
    EditVehicleComponent.prototype.getYear = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        var startYear = 1970;
        var currentYear = new Date().getFullYear();
        for (var i = startYear; i <= currentYear; i++) {
            this.years.push(i);
        }
    };
    EditVehicleComponent.prototype.getVehicleById = function () {
        var _this = this;
        this.driverId = this._route.snapshot.params['id'];
        this.vehicleId = this._route.snapshot.params['vehicleId'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        this.driverService.getVehicleById(this.driverId, this.vehicleId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result_1, fd2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result_1 = _a.sent();
                        if (result_1.vhecalInfo && result_1.vhecalInfo != undefined) {
                            fd2 = {
                                'brandName': result_1.vhecalInfo.brandName != null && result_1.vhecalInfo.brandName != undefined ? result_1.vhecalInfo.brandName : "",
                                "carType": result_1.vhecalInfo.carType != null && result_1.vhecalInfo.carType != undefined ? result_1.vhecalInfo.carType : "",
                                'vehicleModelName': result_1.vhecalInfo.vehicleModelName && result_1.vhecalInfo.vehicleModelName != undefined ? result_1.vhecalInfo.vehicleModelName : "",
                                // 'numberPlate': result.user_driverInfo.driverVehicleInfo.numberPlate,
                                'year': result_1.vhecalInfo.year,
                                'color': result_1.vhecalInfo.color != null && result_1.vhecalInfo.color != undefined ? result_1.vhecalInfo.color : "",
                                'vehicleTrimName': result_1.vhecalInfo.vehicleTrimName,
                                'isDefault': result_1.vhecalInfo.isDefault,
                                'rejectedReason': result_1.vhecalInfo.rejectedReason,
                                'verifiedStatus': result_1.vhecalInfo.verifiedStatus,
                            };
                            // for hidindg input field when data fetched
                            if (typeof (result_1.vhecalInfo.rejectedReason) == "string" &&
                                typeof (result_1.vhecalInfo.rejectedReason) != undefined) {
                                this.isVerifiedSelected = false;
                                // this.dtr.detectChanges();
                            }
                            else {
                                this.isVerifiedSelected = true;
                                // this.dtr.detectChanges();
                            }
                            if (result_1.vhecalInfo.insuranceDocumentImage) {
                                this.url = result_1.vhecalInfo.insuranceDocumentImage;
                            }
                            if (result_1.vhecalInfo.carIconImage) {
                                this.url1 = result_1.vhecalInfo.carIconImage;
                            }
                            if (result_1.vhecalInfo.registrationDocumentImage) {
                                this.url2 = result_1.vhecalInfo.registrationDocumentImage;
                            }
                            if (result_1.vhecalInfo.inspectionCertificateImage) {
                                this.url3 = result_1.vhecalInfo.inspectionCertificateImage;
                            }
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.addDriverForm2.patchValue(fd2);
                            this.changeBrand(result_1.vhecalInfo.brandName);
                            this.changeModel(result_1.vhecalInfo.vehicleModelName);
                            this.allAmmenities.forEach(function (element) {
                                if (result_1.vhecalInfo.ammenities.indexOf(element.id) >= 0) {
                                    _this.selectedItemsAmmenities.push(element);
                                    if (_this.dtr && !_this.dtr.destroyed) {
                                        _this.dtr.detectChanges();
                                    }
                                }
                            });
                            _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                            // this.stateSubscription.unsubscribe();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditVehicleComponent.prototype.saveVehicleDetail = function () {
        var _this = this;
        this.driverId = this._route.snapshot.params['id'];
        this.vehicleId = this._route.snapshot.params['vehicleId'];
        // if (this.imageFile == "" || this.imageFile == '../../../../../assets/media/newMedia/add.png') {
        //     this.submitted1 = false
        //     this.toastr.error("Vehicle image is required");
        // } else if (this.imageFile1 == "" || this.imageFile1 == '../../../../../assets/media/newMedia/add.png') {
        //     this.submitted1 = false
        //     this.toastr.error("Car icon is required")
        // } else if (this.imageFile2 == "" || this.imageFile2 == '../../../../../assets/media/newMedia/add.png') {
        //     this.submitted1 = false
        //     this.toastr.error("Number plate image is required")
        // } else {
        _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(true);
        var form = this.addDriverForm2.value;
        var fd = new FormData();
        fd.append('brandName', form.brandName);
        fd.append('carType', form.carType);
        fd.append('vehicleModelName', form.vehicleModelName);
        // fd.append('numberPlate', form.numberPlate);
        fd.append('year', form.year);
        fd.append('color', form.color);
        fd.append('vehicleTrimName', form.vehicleTrimName);
        fd.append('verifiedStatus', form.verifiedStatus);
        fd.append('rejectedReason', form.rejectedReason);
        if (form.isDefault == true) {
            form.isDefault = 1;
        }
        else {
            form.isDefault = 0;
        }
        fd.append('isDefault', form.isDefault);
        var ammenitiesArray = [];
        form.ammenities.forEach(function (element) {
            ammenitiesArray.push(element.id);
        });
        fd.append('ammenities', ammenitiesArray);
        if (this.imageFile) {
            fd.append('insuranceDocumentImage', this.imageFile);
        }
        if (this.imageFile1) {
            fd.append('carIconImage', this.imageFile1);
        }
        if (this.imageFile2) {
            fd.append('registrationDocumentImage', this.imageFile2);
        }
        if (this.imageFile3) {
            fd.append('inspectionCertificateImage', this.imageFile3);
        }
        fd.append('vehicleId', this.vehicleId);
        var obj = {
            id: this.id,
            data: fd
        };
        this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateVehicleInfo"](obj));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_9__["selectPageState"])).subscribe(function (data) {
            if (data && data != undefined) {
                if (data['code'] == 200) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    var result = data['data'];
                    _this.id = result._id;
                    _this.toastr.success(data['message']);
                    _this.stateSubscription.unsubscribe();
                    _this.router.navigate(["/driver-management/edit/" + _this.driverId]);
                    _this.driverService.updateVehicle('updateVehicle');
                }
                else {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_6__["Helpers"].setLoading(false);
                    _this.stateSubscription.unsubscribe();
                    _this.toastr.error(data['message']);
                }
            }
        });
        // }
    };
    EditVehicleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _model_model_service__WEBPACK_IMPORTED_MODULE_12__["ModelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_15__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["Title"] },
        { type: _driver_management_service__WEBPACK_IMPORTED_MODULE_17__["DriverManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _trim_trim_service__WEBPACK_IMPORTED_MODULE_18__["TrimService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_19__["ServiceOperatorService"] }
    ]; };
    EditVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-vehicle',
            template: __webpack_require__(/*! raw-loader!./add-edit-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-vehicle.component.scss */ "./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _model_model_service__WEBPACK_IMPORTED_MODULE_12__["ModelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_15__["SubheaderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["Title"],
            _driver_management_service__WEBPACK_IMPORTED_MODULE_17__["DriverManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _trim_trim_service__WEBPACK_IMPORTED_MODULE_18__["TrimService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_19__["ServiceOperatorService"]])
    ], EditVehicleComponent);
    return EditVehicleComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/driver-list/driver-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/driver-list/driver-list.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrlbl_table {\n  overflow-x: auto; }\n\n.kt-page-loader:before {\n  content: \"\" !important;\n  position: fixed !important;\n  width: 100% !important;\n  height: 100% !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  z-index: 9999 !important; }\n\n.kt-page-loader .kt-blockui {\n  z-index: 99999;\n  position: relative; }\n\n@media screen and (max-width: 1300px) {\n  .dataTables_wrapper {\n    overflow-x: auto; } }\n\n.kt-portlet__body > .kt-section {\n  margin-bottom: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvZHJpdmVyLW1hbmFnZW1lbnQvZHJpdmVyLWxpc3QvZHJpdmVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxnQkFBZ0IsRUFBQTs7QUFFOUI7RUFDRyxzQkFBc0I7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLCtDQUE0QztFQUM1Qyx3QkFBd0IsRUFBQTs7QUFFMUI7RUFBNkIsY0FBYztFQUFDLGtCQUFrQixFQUFBOztBQUM5RDtFQUF1QztJQUFxQixnQkFBZ0IsRUFBQSxFQUFHOztBQUMvRTtFQUErQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2RyaXZlci1tYW5hZ2VtZW50L2RyaXZlci1saXN0L2RyaXZlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmxibF90YWJsZSB7b3ZlcmZsb3cteDogYXV0bzt9XG5cbiAua3QtcGFnZS1sb2FkZXI6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbiAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMykgIWltcG9ydGFudDtcbiAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiB9XG4gLmt0LXBhZ2UtbG9hZGVyIC5rdC1ibG9ja3VpIHt6LWluZGV4OiA5OTk5OTtwb3NpdGlvbjogcmVsYXRpdmU7fVxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkgey5kYXRhVGFibGVzX3dyYXBwZXIge292ZXJmbG93LXg6IGF1dG87fX1cbiAua3QtcG9ydGxldF9fYm9keT4ua3Qtc2VjdGlvbiB7bWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O30iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/driver-management/driver-list/driver-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/driver-list/driver-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: DriverListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverListComponent", function() { return DriverListComponent; });
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
/* harmony import */ var _app_contants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../app-contants */ "./src/app-contants.ts");












function _window() {
    // return the global native browser window object
    return window;
}
var DriverListComponent = /** @class */ (function () {
    function DriverListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.DRIVER_CONST = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.DRIVER_CONST = this.translate.instant('DRIVER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.DRIVER'));
        titleService.setTitle(this.APPNAME + " | " + this.DRIVER_CONST.MODULE_NAME);
    }
    DriverListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].DRIVER.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].DRIVER.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].DRIVER.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].DRIVER.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    DriverListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    DriverListComponent.prototype.toTitleCase = function (str) {
        return str.replace(/\S+/g, function (str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase(); });
    };
    DriverListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    DriverListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-driver-list', scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            // begin first table
            var table = $(document).find('#kt_datatable').DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                "order": [[2, "asc"]],
                //colReorder: true, // for column reorder
                serverSide: true,
                oLanguage: {
                    sProcessing: that.DRIVER_CONST.MESSAGES.PROCESSING,
                },
                //  Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].userList + '/DRIVER',
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
                        title: that.DRIVER_CONST.LABEL.SR_NO, data: null
                    },
                    {
                        title: that.DRIVER_CONST.LABEL.USER_PROFILE_IMAGE, data: "user_profileImage",
                    },
                    {
                        title: that.DRIVER_CONST.LABEL.DISPLAY_NAME, data: "user_fullName"
                    },
                    { title: that.DRIVER_CONST.LABEL.OPERATOR_NAME, data: 'user_operatorName' },
                    {
                        title: that.DRIVER_CONST.LABEL.EMAIL, data: "user_email"
                    },
                    {
                        title: that.DRIVER_CONST.LABEL.MOBILENO, data: "user_phoneNumber"
                    },
                    {
                        title: that.DRIVER_CONST.LABEL.RATING, data: "user_rating"
                    },
                    { title: that.DRIVER_CONST.LABEL.STATUS, data: 'user_status' },
                    {
                        title: that.DRIVER_CONST.LABEL.REGISTEREDVIA, data: "user_registeredVia"
                    },
                    { title: that.DRIVER_CONST.LABEL.CREATED_ON, data: 'user_createdOn' },
                    { title: that.DRIVER_CONST.LABEL.MODIFIED_ON, data: 'user_modifyOn' },
                    { title: that.DRIVER_CONST.LABEL.ACTIONS }
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.DRIVER_CONST.LABEL.SR_NO:
                                break;
                            case that.DRIVER_CONST.LABEL.USER_PROFILE_IMAGE:
                                break;
                            case that.DRIVER_CONST.LABEL.DISPLAY_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.DRIVER_CONST.LABEL.OPERATOR_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.DRIVER_CONST.LABEL.EMAIL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.DRIVER_CONST.LABEL.MOBILENO:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.DRIVER_CONST.LABEL.RATING:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.DRIVER_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.DRIVER_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.DRIVER_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.DRIVER_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            case that.DRIVER_CONST.LABEL.REGISTEREDVIA:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.DRIVER_CONST.PLACEHOLDERS.REGISTERED_VIA + "</option>\n                <option value=" + _app_contants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REGISTRATION_TYPE.NORMAL + ">" + that.DRIVER_CONST.LABEL.NORMAL + "</option>\n                <option value=" + _app_contants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REGISTRATION_TYPE.FACEBOOK + ">" + that.DRIVER_CONST.LABEL.FACEBOOK + "</option>\n                <option value=" + _app_contants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REGISTRATION_TYPE.GOOGLE + ">" + that.DRIVER_CONST.LABEL.GOOGLE + "</option>\n                "));
                                break;
                            // case that.DRIVER_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.DRIVER_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.DRIVER_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.DRIVER_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.DRIVER_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                        width: '10%',
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
                        width: '10%',
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
                        width: '10%',
                        render: function (a, e, t, n) {
                            return that.toTitleCase(t.user_operatorName);
                        }
                    },
                    {
                        targets: 4,
                        width: '10%',
                        render: function (a, e, t, n) {
                            return a || '-';
                        }
                    },
                    {
                        targets: 5,
                        width: '10%',
                        render: function (a, e, t, n) {
                            return a || '-';
                        }
                    },
                    {
                        targets: 6,
                        width: '10%',
                        render: function (a, e, t, n) {
                            if (!t.user_rating) {
                                return "-";
                            }
                            else {
                                return t.user_rating;
                            }
                        }
                    },
                    {
                        targets: 7,
                        width: '20%',
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
                        targets: 8,
                        width: '15%',
                        render: function (a, e, t, n) {
                            if (a == _app_contants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REGISTRATION_TYPE.GOOGLE) {
                                return 'Google';
                            }
                            else if (a == _app_contants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REGISTRATION_TYPE.FACEBOOK) {
                                return 'Facebook';
                            }
                            else {
                                return 'Normal';
                            }
                        }
                    },
                    {
                        targets: 9,
                        width: '10%'
                    },
                    {
                        targets: 10,
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
    DriverListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/driver-management/edit/' + this.id]);
    };
    DriverListComponent.prototype.delete = function (e) {
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
                            component: 'driver',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    DriverListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'driver',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    DriverListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    DriverListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    DriverListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-driver-list',
            template: __webpack_require__(/*! raw-loader!./driver-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/driver-list/driver-list.component.html"),
            styles: [__webpack_require__(/*! ./driver-list.component.scss */ "./src/app/views/pages/driver-management/driver-list/driver-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], DriverListComponent);
    return DriverListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/driver-management.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/driver-management.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2RyaXZlci1tYW5hZ2VtZW50L2RyaXZlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/driver-management/driver-management.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/driver-management.component.ts ***!
  \******************************************************************************/
/*! exports provided: DriverManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverManagementComponent", function() { return DriverManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var DriverManagementComponent = /** @class */ (function () {
    function DriverManagementComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].DRIVER);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].driverManagement);
    }
    DriverManagementComponent.prototype.ngOnInit = function () {
    };
    DriverManagementComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    DriverManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-driver-management',
            template: __webpack_require__(/*! raw-loader!./driver-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/driver-management.component.html"),
            styles: [__webpack_require__(/*! ./driver-management.component.scss */ "./src/app/views/pages/driver-management/driver-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], DriverManagementComponent);
    return DriverManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/driver-management.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/driver-management.module.ts ***!
  \***************************************************************************/
/*! exports provided: DriverManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverManagementModule", function() { return DriverManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _driver_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-management.component */ "./src/app/views/pages/driver-management/driver-management.component.ts");
/* harmony import */ var _driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-list/driver-list.component */ "./src/app/views/pages/driver-management/driver-list/driver-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/fesm5/ngx-image-zoom.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_driver_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/driver.effects */ "./src/app/views/pages/driver-management/state/driver.effects.ts");
/* harmony import */ var _state_driver_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./state/driver.reducer */ "./src/app/views/pages/driver-management/state/driver.reducer.ts");
/* harmony import */ var _edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-driver/edit-driver.component */ "./src/app/views/pages/driver-management/edit-driver/edit-driver.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _add_edit_vehicle_add_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-edit-vehicle/add-edit-vehicle.component */ "./src/app/views/pages/driver-management/add-edit-vehicle/add-edit-vehicle.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");























var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].MAIN_MENU.SITE_USER;
var routes = [
    {
        path: '',
        component: _driver_management_component__WEBPACK_IMPORTED_MODULE_3__["DriverManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_4__["DriverListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_6__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].DRIVER.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: ':id/vehicle/add',
                component: _add_edit_vehicle_add_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_20__["AddVehicleComponent"],
                canActivate: [],
                data: {
                // permission: Helper.PERMISSIONS.DRIVER.READ,
                // mainModulePermission: menuPermision
                }
            },
            {
                path: ':id/vehicle/edit/:vehicleId',
                component: _add_edit_vehicle_add_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_20__["EditVehicleComponent"],
                canActivate: [],
                data: {
                // permission: Helper.PERMISSIONS.DRIVER.READ,
                // mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_17__["EditDriverComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_6__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].DRIVER.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var DriverManagementModule = /** @class */ (function () {
    function DriverManagementModule() {
    }
    DriverManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_driver_management_component__WEBPACK_IMPORTED_MODULE_3__["DriverManagementComponent"], _driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_4__["DriverListComponent"], _edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_17__["EditDriverComponent"], _add_edit_vehicle_add_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_20__["AddVehicleComponent"], _add_edit_vehicle_add_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_20__["EditVehicleComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"],
                ngx_image_zoom__WEBPACK_IMPORTED_MODULE_12__["NgxImageZoomModule"],
                // NgxImgZoomModule,
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forFeature([_state_driver_effects__WEBPACK_IMPORTED_MODULE_15__["DriverEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forFeature("driver", _state_driver_reducer__WEBPACK_IMPORTED_MODULE_16__["driverReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forChild(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["AngularMultiSelectModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].mapAPIKey
                })
            ]
        })
    ], DriverManagementModule);
    return DriverManagementModule;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/edit-driver/edit-driver.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/edit-driver/edit-driver.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n.txt-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvZHJpdmVyLW1hbmFnZW1lbnQvZWRpdC1kcml2ZXIvZWRpdC1kcml2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQTs7QUFFekU7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2RyaXZlci1tYW5hZ2VtZW50L2VkaXQtZHJpdmVyL2VkaXQtZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi50eHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/driver-management/edit-driver/edit-driver.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/driver-management/edit-driver/edit-driver.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDriverComponent", function() { return EditDriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var ngx_img_zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-img-zoom */ "./node_modules/ngx-img-zoom/fesm5/ngx-img-zoom.js");
/* harmony import */ var _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/driver.actions */ "./src/app/views/pages/driver-management/state/driver.actions.ts");
/* harmony import */ var _state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../state/driver.reducer */ "./src/app/views/pages/driver-management/state/driver.reducer.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../state/state.service */ "./src/app/views/pages/state/state.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _brand_brand_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../brand/brand.service */ "./src/app/views/pages/brand/brand.service.ts");
/* harmony import */ var _model_model_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../model/model.service */ "./src/app/views/pages/model/model.service.ts");
/* harmony import */ var _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../service-operator/service-operator.service */ "./src/app/views/pages/service-operator/service-operator.service.ts");
/* harmony import */ var _app_contants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../app-contants */ "./src/app-contants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _driver_management_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../driver-management.service */ "./src/app/views/pages/driver-management/driver-management.service.ts");
/* harmony import */ var _account_type_account_type_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../account-type/account-type.service */ "./src/app/views/pages/account-type/account-type.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _rider_management_rider_management_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../rider-management/rider-management.service */ "./src/app/views/pages/rider-management/rider-management.service.ts");




























function _window() {
    // return the global native browser window object
    return window;
}
var EditDriverComponent = /** @class */ (function () {
    function EditDriverComponent(subheaderService, _formBuilder, router, toastr, _route, localStorageService, store, titleService, dtr, translate, stateService, cityService, brandService, modelService, driverService, serviceOperatorService, accountTypeService, driverManagementService, ref, ngxImgZoom, riderManagementService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.store = store;
        this.dtr = dtr;
        this.translate = translate;
        this.stateService = stateService;
        this.cityService = cityService;
        this.brandService = brandService;
        this.modelService = modelService;
        this.driverService = driverService;
        this.serviceOperatorService = serviceOperatorService;
        this.accountTypeService = accountTypeService;
        this.driverManagementService = driverManagementService;
        this.ref = ref;
        this.ngxImgZoom = ngxImgZoom;
        this.riderManagementService = riderManagementService;
        this.enableZoom = true;
        this.previewImageSrc = 'pathToImage';
        this.zoomImageSrc = 'pathToImage';
        this.myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
        this.myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
        this.minDate = new Date();
        this.maxDate = new Date();
        this.navObj = { 'link': 'personal' };
        this.navObjAddress = { 'link': 'address' };
        this.navObjDocument = { 'link': 'document' };
        this.navObjOtherDocument = { 'link': 'otherDocument' };
        this.navObjCitizenShip = { 'link': 'citizenShip' };
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.submitted4 = false;
        this.submitted5 = false;
        this.submitted6 = false;
        this.stateList = [];
        this.submitStep = { step: '0' };
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.url4 = '../../../../../assets/media/newMedia/add.png';
        this.url5 = '../../../../../assets/media/newMedia/add.png';
        this.countries = [];
        this.cities = [];
        this.operators = [];
        this.DRIVER_CONST = [];
        this.brands = [];
        this.models = [];
        this.colors = [];
        this.vehiclelists = [];
        this.data = {};
        this.years = [];
        this.verifiedStatus = [];
        this.documentTypes = [];
        this.accountTypes = [];
        this.driverDocumentVerifiedStatus = _app_contants__WEBPACK_IMPORTED_MODULE_22__["appConstants"].DRIVER_VERIFIED_STATUS;
        this.states = [];
        this.bsConfig = Object.assign({}, { minDate: this.minDate });
        this.bsConfigs = Object.assign({}, { maxDate: this.maxDate });
        this.ngxImgZoom.setZoomBreakPoints([
            { w: 100, h: 100 },
            { w: 150, h: 150 },
            { w: 200, h: 200 },
            { w: 250, h: 250 },
            { w: 300, h: 300 }
        ]);
        this.DRIVER_CONST = this.translate.instant('DRIVER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.DRIVER'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_11__["APPNAME"] + " | " + this.DRIVER_CONST.MODULE_NAME);
        // this.getAllAmmenities()
    }
    EditDriverComponent.prototype.selectInput = function (event) {
        var selected = event ? event.target.value : '';
        if (selected == "Select Document") {
            this.isNameSelected = true;
        }
        else {
            this.isNameSelected = false;
        }
    };
    // for show hid text field for bank details
    // isVerifiedSelected: boolean;
    // bank
    EditDriverComponent.prototype.selectVerifiedBankValue = function (event) {
        var selected = event.target.value;
        if (selected == 2) {
            var rejectedReasonControl = this.addDriverForm3.get('rejectedReason');
            rejectedReasonControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            rejectedReasonControl.updateValueAndValidity();
            // this.isVerifiedSelected = false;
            // console.log('--------show---------')
        }
        else {
            var rejectedReasonControl = this.addDriverForm3.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            // this.isVerifiedSelected = true;
            // console.log('--------hide---------')
        }
    };
    // for address
    EditDriverComponent.prototype.selectVerifiedAddressValue = function (event) {
        var selected = event.target.value;
        if (selected == 2) {
            var rejectedReasonControl = this.addDriverForm4.get('rejectedReason');
            rejectedReasonControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            rejectedReasonControl.updateValueAndValidity();
            // this.isVerifiedSelected = false;
            // console.log('--------show---------')
        }
        else {
            var rejectedReasonControl = this.addDriverForm4.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            // this.isVerifiedSelected = true;
            // console.log('--------hide---------')
        }
    };
    // for driving license
    EditDriverComponent.prototype.selectVerifiedLicenseValue = function (event) {
        var selected = event.target.value;
        if (selected == 2) {
            var rejectedReasonControl = this.addDriverForm5.get('rejectedReason');
            rejectedReasonControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            rejectedReasonControl.updateValueAndValidity();
            // this.isVerifiedSelected = false;
            // console.log('--------show---------')
        }
        else {
            var rejectedReasonControl = this.addDriverForm5.get('rejectedReason');
            rejectedReasonControl.clearValidators();
            rejectedReasonControl.updateValueAndValidity();
            // this.isVerifiedSelected = true;
            // console.log('--------hide---------')
        }
    };
    EditDriverComponent.prototype.clickLink = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navObj.link = e;
                return [2 /*return*/];
            });
        });
    };
    EditDriverComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscription = this.driverManagementService.isUpdateVehicle.subscribe(function (data) {
                            if (data) {
                                _this.driverManagementService.updateVehicle('');
                                if (data === 'updateVehicle') {
                                    _this.clickLink('vehicle');
                                    if (_this.dtr && !_this.dtr.destroyed) {
                                        _this.dtr.detectChanges();
                                    }
                                }
                            }
                        });
                        return [4 /*yield*/, this.buildAddDriverForm1()];
                    case 1:
                        _a.sent();
                        // await this.buildAddDriverForm2();
                        return [4 /*yield*/, this.buildAddDriverForm3()];
                    case 2:
                        // await this.buildAddDriverForm2();
                        _a.sent();
                        return [4 /*yield*/, this.buildAddDriverForm4()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddDriverForm5()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddDriverForm6()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddDriverForm7()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.getAllCountries()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.getDriverById()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].webDefaultCountry)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.changeState(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])];
                    case 10:
                        _a.sent();
                        this.getAllBrands();
                        this.getAllColors();
                        this.getAllOperators();
                        this.getAllDocumentType();
                        this.getAllAccountType();
                        this.getYear();
                        this.getAllState(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].webDefaultCountry);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditDriverComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditDriverComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!country) return [3 /*break*/, 2];
                        // let countryId = { city_countryId: country };W
                        return [4 /*yield*/, this.stateService.getStateList(country).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.stateList = _b.sent();
                                            // Helpers.setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        // let countryId = { city_countryId: country };W
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditDriverComponent.prototype.regeneratedAndSendPassword = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        this.riderManagementService.regeneratedAndSendPassword(this.id).subscribe(function (data) {
            if (data["code"] == 200) {
                // this.toastr.success(this.RIDER_CONST.MESSAGES.UPDATED);
                _this.toastr.success("New generated password has been send to driver");
                _this.dtr.detectChanges();
            }
        });
    };
    EditDriverComponent.prototype.changeState = function (state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var stateId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(state);
                        stateId = { city_stateId: state };
                        return [4 /*yield*/, this.cityService.getStateCity(stateId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cityList = _b.sent();
                                            // Helpers.setLoading(false);
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
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
    EditDriverComponent.prototype.getAllVehicleList = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id']; // Driver id
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.driverManagementService.getAllVehicleList(this.id).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.vehiclelists = data['data'];
                        for (i = 0; i < this.vehiclelists.length; i++) {
                            if (this.vehiclelists[i].verifiedStatus == 0) {
                                this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.PENDING;
                            }
                            if (this.vehiclelists[i].verifiedStatus == 1) {
                                this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.FILLED;
                            }
                            if (this.vehiclelists[i].verifiedStatus == 2) {
                                this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.REJECTED;
                            }
                            if (this.vehiclelists[i].verifiedStatus == 3) {
                                this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.VARIFIED;
                            }
                            if (this.vehiclelists[i].isDefault == 0) {
                                this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTFalse;
                            }
                            if (this.vehiclelists[i].isDefault == 1) {
                                this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTTrue;
                            }
                        }
                        // this.previewImageSrc =  this.vehiclelists.carIconImage;
                        // this.zoomImageSrc = this.vehiclelists.carIconImage;
                        // it is used to detect changes for html file
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        console.log(this.vehiclelists);
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.getAllBrands = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.brandService.getAllBrands().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.brands = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.edit = function (id) {
        this.router.navigate(["/driver-management/" + this.id + "/vehicle/edit/" + id]);
    };
    EditDriverComponent.prototype.delete = function (vehicleId) {
        var _this = this;
        this.driverId = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.driverManagementService.deleteVehicleInfo(this.driverId, vehicleId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.toastr.success(this.DRIVER_CONST.MESSAGES.VEHICLEDELEDTED);
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.getAllDocumentType = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.driverService.getAllDocumentType().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.documentTypes = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.getAllAccountType = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.accountTypeService.getAllAccountType().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.accountTypes = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.changeBrand = function (brand) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                        if (!brand) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modelService
                                .getBrandModel(brand)
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.models = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    EditDriverComponent.prototype.getAllColors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                        return [4 /*yield*/, this.modelService
                                .getAllColors()
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.colors = _b.sent();
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                                            this.dtr.detectChanges();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                                            this.toastr.error(data['message']);
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
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
    EditDriverComponent.prototype.getAllCountries = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.driverService.getAllCountries().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.countries = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.getAllState = function (country) {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.stateService.getStateList(country).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.states = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EditDriverComponent.prototype.getAllOperators = function () {
        var _this = this;
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.serviceOperatorService.getAllOperators().subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.operators = data['data'];
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    // async changeCountry(country) {
    //   Helpers.setLoading(true);
    //   if (country) {
    //     let countryId = { city_countryId: country };
    //     await this.cityService
    //       .getCountryCities(countryId)
    //       .subscribe(async (data) => {
    //         if (data["code"] == 200) {
    //           this.cities = await data["data"];
    //           Helpers.setLoading(false);
    //           this.dtr.detectChanges();
    //         }
    //       });
    //   }
    // }
    EditDriverComponent.prototype.getYear = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        var startYear = 1970;
        var currentYear = new Date().getFullYear();
        for (var i = startYear; i <= currentYear; i++) {
            this.years.push(i);
        }
    };
    EditDriverComponent.prototype.buildAddDriverForm1 = function () {
        this.addDriverForm1 = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            user_userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].phoneRegEx)]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].passwordRegEx)]],
            user_verifiedStatus: [[]],
            user_status: ["ACTIVE", []],
            user_isdCode: ["+964", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_invitationCode: [''],
            user_premiumUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            // user_countryId: ["", [Validators.required]],
            user_operatorId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_rideInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_wallets: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            user_cityId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_stateId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    // Bank Detail form
    EditDriverComponent.prototype.buildAddDriverForm3 = function () {
        this.addDriverForm3 = this._formBuilder.group({
            bankName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            accountHolderName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameRegEx)]],
            accountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].accountNumber)]],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_22__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []],
            accountType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            routingNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rejectedReason: [""],
        });
    };
    // User Address Form
    EditDriverComponent.prototype.buildAddDriverForm4 = function () {
        this.addDriverForm4 = this._formBuilder.group({
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address2: [""],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            // streetName: ["", [Validators.required]],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rejectedReason: [""],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_22__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    };
    // driver licence update
    EditDriverComponent.prototype.buildAddDriverForm5 = function () {
        this.addDriverForm5 = this._formBuilder.group({
            // licenceImage: ["", [Validators.required]],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_22__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []],
            stateIssued: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            licenceNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            expiryDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rejectedReason: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    // other document update
    EditDriverComponent.prototype.buildAddDriverForm6 = function () {
        this.addDriverForm6 = this._formBuilder.group({
            otherDocument: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            documentName: [""],
            documentImage: [""],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_22__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    };
    //citizen ship update
    EditDriverComponent.prototype.buildAddDriverForm7 = function () {
        this.addDriverForm7 = this._formBuilder.group({
            type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            socialSecurityNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            //   identityNumber: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            //   HST: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            verifiedStatus: [_app_contants__WEBPACK_IMPORTED_MODULE_22__["appConstants"].DRIVER_VERIFIED_STATUS['Pending'], []]
        });
    };
    EditDriverComponent.prototype.getDriverById = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["LoadDriver"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, res, dob, fd, fd3, fd4, expiryDate, fd5, fd6, fd7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 5];
                        if (!(data['code'] == 200)) return [3 /*break*/, 4];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.getAllVehicleList();
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        res = result.user_dob.split("/");
                        dob = void 0;
                        dob = res[1] + "/" + res[0] + "/" + res[2];
                        this.driverDetails = result;
                        fd = {
                            'user_firstName': result.user_firstName,
                            'user_lastName': result.user_lastName,
                            'user_userName': result.user_userName,
                            'user_email': result.user_email,
                            'user_phoneNumber': result.user_phoneNumber,
                            'user_verifiedStatus': result.user_verifiedStatus != null && result.user_verifiedStatus != undefined ? result.user_verifiedStatus : "",
                            'user_status': result.user_status != null && result.user_status != undefined ? result.user_status : "",
                            'user_isdCode': result.user_isdCode,
                            'user_invitationCode': result.user_invitationCode,
                            'user_premiumUser': result.user_premiumUser,
                            'user_countryId': result.user_countryId,
                            'user_operatorId': result.user_operatorId != null && result.user_operatorId != undefined ? result.user_operatorId : "",
                            'user_rideInfo': result.user_rideInfo,
                            'user_wallets': result.user_wallets,
                            'user_dob': new Date(dob),
                            'user_zipCode': result.user_zipCode,
                            'user_cityId': result.user_cityId,
                            'user_stateId': result.user_stateId,
                        };
                        if (result.user_profileImage != undefined ||
                            result.user_profileImage != null) {
                            this.url5 = result.user_profileImage;
                        }
                        return [4 /*yield*/, this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].webDefaultCountry)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.changeState(result.user_stateId)];
                    case 3:
                        _a.sent();
                        this.addDriverForm1.patchValue(fd);
                        // it is used to detect changes for html file
                        this.ref.detectChanges();
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.stateSubscription.unsubscribe();
                        if (result.user_bankDetail && result.user_bankDetail != undefined) {
                            fd3 = {
                                bankName: result.user_bankDetail.bankName,
                                accountHolderName: result.user_bankDetail.accountHolderName,
                                accountNumber: result.user_bankDetail.accountNumber,
                                verifiedStatus: result.user_bankDetail.verifiedStatus != null && result.user_bankDetail.verifiedStatus != undefined ? result.user_bankDetail.verifiedStatus : "",
                                accountType: result.user_bankDetail.accountType,
                                routingNumber: result.user_bankDetail.routingNumber,
                                rejectedReason: result.user_bankDetail.rejectedReason
                            };
                            // for hidindg input field when data fetched
                            if (typeof (result.user_bankDetail.rejectedReason) == "string" && typeof (result.user_bankDetail.rejectedReason) != undefined) {
                                // this.isVerifiedSelected = false;
                                this.dtr.detectChanges();
                            }
                            else {
                                // this.isVerifiedSelected = true;
                                this.dtr.detectChanges();
                            }
                            this.addDriverForm3.patchValue(fd3);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        if (result.user_Address && result.user_Address != undefined) {
                            fd4 = {
                                address1: result.user_Address.address1,
                                address2: result.user_Address.address2,
                                city: result.user_Address.city,
                                // streetName: result.user_Address.streetName,
                                zipCode: result.user_Address.zipCode,
                                state: result.user_Address.state,
                                country: result.user_Address.country,
                                rejectedReason: result.user_Address.rejectedReason,
                                verifiedStatus: result.user_Address.verifiedStatus != null && result.user_Address.verifiedStatus != undefined ? result.user_Address.verifiedStatus : "",
                            };
                            // console.log("result.user_Address patch vale", result.user_Address)
                            // for hidindg input field when data fetched
                            if (typeof (result.user_Address.rejectedReason) == "string" && typeof (result.user_Address.rejectedReason) != undefined) {
                                // this.isVerifiedSelected = false;
                            }
                            else {
                                // this.isVerifiedSelected = true;
                            }
                            // this.changeCountry(result.user_Address.country)
                            this.addDriverForm4.patchValue(fd4);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        // Driving License 
                        if (result.user_driverInfo.driverLicenceDocument && result.user_driverInfo.driverLicenceDocument != undefined) {
                            expiryDate = result.user_driverInfo.driverLicenceDocument.expiryDate.split("/");
                            fd5 = {
                                'verifiedStatus': result.user_driverInfo.driverLicenceDocument.verifiedStatus,
                                'stateIssued': result.user_driverInfo.driverLicenceDocument.stateIssued,
                                'licenceNumber': result.user_driverInfo.driverLicenceDocument.licenceNumber,
                                'expiryDate': new Date(expiryDate[2], expiryDate[1] - 1, expiryDate[0]),
                                'rejectedReason': result.user_driverInfo.driverLicenceDocument.rejectedReason
                            };
                            // for hidindg input field when data fetched
                            if (typeof (result.user_driverInfo.driverLicenceDocument.rejectedReason) == "string" &&
                                typeof (result.user_driverInfo.driverLicenceDocument.rejectedReason) != undefined) {
                                // this.isVerifiedSelected = false;
                            }
                            else {
                                // this.isVerifiedSelected = true;
                            }
                            this.getAllState(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].webDefaultCountry);
                            if (result.user_driverInfo.driverLicenceDocument.licenceImage != undefined ||
                                result.user_driverInfo.driverLicenceDocument.licenceImage != null) {
                                this.url3 = result.user_driverInfo.driverLicenceDocument.licenceImage;
                            }
                            this.addDriverForm5.patchValue(fd5);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        // other document
                        if (result.user_driverInfo.driverOtherDocument && result.user_driverInfo.driverOtherDocument != undefined) {
                            fd6 = {
                                'otherDocument': result.user_driverInfo.driverOtherDocument.otherDocument != null && result.user_driverInfo.driverOtherDocument.otherDocument != undefined ? result.user_driverInfo.driverOtherDocument.otherDocument : "",
                                'documentName': result.user_driverInfo.driverOtherDocument.documentName,
                                'verifiedStatus': result.user_driverInfo.driverOtherDocument.verifiedStatus
                            };
                            if ((result.user_driverInfo.driverOtherDocument.documentImages != undefined ||
                                result.user_driverInfo.driverOtherDocument.documentImages != null) && result.user_driverInfo.driverOtherDocument.documentImages.length) {
                                this.url4 = result.user_driverInfo.driverOtherDocument.documentImages[0].documentImage;
                            }
                            this.selectInput(result.user_driverInfo.driverOtherDocument.otherDocument);
                            this.addDriverForm6.patchValue(fd6);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        // Citizen Ship
                        if (result.user_driverInfo.driverCitizenShipDetail && result.user_driverInfo.driverCitizenShipDetail != undefined) {
                            fd7 = {
                                'type': result.user_driverInfo.driverCitizenShipDetail.type != null && result.user_driverInfo.driverCitizenShipDetail.type != undefined ? result.user_driverInfo.driverCitizenShipDetail.type : "",
                                'socialSecurityNumber': result.user_driverInfo.driverCitizenShipDetail.socialSecurityNumber,
                                // 'identityNumber': result.user_driverInfo.driverCitizenShipDetail.identityNumber,
                                // 'HST': result.user_driverInfo.driverCitizenShipDetail.HST
                                'verifiedStatus': result.user_driverInfo.driverCitizenShipDetail.verifiedStatus != null && result.user_driverInfo.driverCitizenShipDetail.verifiedStatus != undefined ? result.user_driverInfo.driverCitizenShipDetail.verifiedStatus : "",
                            };
                            this.addDriverForm7.patchValue(fd7);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        this.toastr.error(data['message']);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    // user Image
    EditDriverComponent.prototype.onSelectUserImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                this.imageFile5 = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    _this.url5 = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditDriverComponent.prototype.removeUserImage = function () {
        this.url5 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile5 = '';
    };
    // vehicle image
    EditDriverComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    _this.url = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditDriverComponent.prototype.imageRemove = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    //for Vehicle Icon
    EditDriverComponent.prototype.onSelectFileIcon = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                this.imageFile1 = event.target.files[0];
                var reader_3 = new FileReader();
                reader_3.readAsDataURL(event.target.files[0]);
                reader_3.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    _this.url1 = reader_3.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditDriverComponent.prototype.imageRemoveIcon = function () {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
    };
    // for number plate image
    EditDriverComponent.prototype.onSelectFileNumberPlate = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                this.imageFile2 = event.target.files[0];
                var reader_4 = new FileReader();
                reader_4.readAsDataURL(event.target.files[0]);
                reader_4.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    _this.url2 = reader_4.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditDriverComponent.prototype.imageRemoveNumberPlate = function () {
        this.url2 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile2 = '';
    };
    // for License image
    EditDriverComponent.prototype.onSelectLicenceImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                this.imageFile3 = event.target.files[0];
                var reader_5 = new FileReader();
                reader_5.readAsDataURL(event.target.files[0]);
                reader_5.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    _this.url3 = reader_5.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                //  this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditDriverComponent.prototype.RemoveLicenceImage = function () {
        this.url3 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile3 = '';
    };
    // for other documents
    EditDriverComponent.prototype.onSelectOtherDocumentImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
                this.imageFile4 = event.target.files[0];
                var reader_6 = new FileReader();
                reader_6.readAsDataURL(event.target.files[0]);
                reader_6.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                    _this.url4 = reader_6.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.DRIVER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditDriverComponent.prototype.RemoveOtherDocumentImage = function () {
        this.url4 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile4 = '';
    };
    //  save Personal Detail 
    EditDriverComponent.prototype.savePersonalDetail = function () {
        this.submitted = true;
        if (this.addDriverForm1.valid) {
            if (this.imageFile3 == "" || this.imageFile3 == '../../../../../assets/media/newMedia/add.png') {
                this.submitted4 = false;
                this.toastr.error("Driving license is required");
            }
            else {
                this.saveData('1');
            }
        }
        else if (!this.addDriverForm1.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    // save Bank Detail
    EditDriverComponent.prototype.saveBankDetail = function () {
        this.submitted2 = true;
        if (this.addDriverForm3.valid) {
            this.saveData('3');
        }
        else if (!this.addDriverForm3.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    // save User Address
    EditDriverComponent.prototype.saveUserAddress = function () {
        this.submitted3 = true;
        if (this.addDriverForm4.valid) {
            this.saveData('4');
        }
        else if (!this.addDriverForm4.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    // license
    EditDriverComponent.prototype.saveDriverDetails = function () {
        this.submitted4 = true;
        if (this.addDriverForm5.valid) {
            this.saveData('5');
        }
        else if (!this.addDriverForm5.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    // other Docs
    EditDriverComponent.prototype.saveDriverOtherDetails = function () {
        this.submitted5 = true;
        if (this.imageFile4 == "" || this.imageFile4 == '../../../../../assets/media/newMedia/add.png') {
            this.submitted5 = false;
            this.toastr.error("Other document image is required");
        }
        else {
            this.saveData('6');
        }
    };
    //citizen ship
    EditDriverComponent.prototype.saveCitizenShip = function () {
        this.submitted6 = true;
        if (this.addDriverForm7.valid) {
            this.saveData('7');
        }
        else if (!this.addDriverForm7.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditDriverComponent.prototype.saveData = function (step) {
        var _this = this;
        if (step === '1') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
            var res = this.addDriverForm1.value;
            // for the title case convertion
            this.userFirstName = res.user_firstName.replace(/\b\w/g, function (first) { return first.toLocaleUpperCase(); });
            this.userLastName = res.user_lastName.replace(/\b\w/g, function (first) { return first.toLocaleUpperCase(); });
            var dob = new Date(res.user_dob).getDate() + "/" + (new Date(res.user_dob).getMonth() + 1) + "/" + new Date(res.user_dob).getFullYear();
            var fd = new FormData();
            fd.append('user_firstName', this.userFirstName);
            fd.append('user_lastName', this.userLastName);
            fd.append('user_userName', res.user_userName);
            fd.append('user_email', res.user_email);
            fd.append('user_phoneNumber', res.user_phoneNumber);
            fd.append('user_isdCode', res.user_isdCode);
            fd.append('user_verifiedStatus', res.user_verifiedStatus);
            fd.append('user_status', res.user_status);
            fd.append('user_invitationCode', res.user_invitationCode);
            fd.append('user_premiumUser', res.user_premiumUser);
            fd.append('user_countryId', _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].webDefaultCountry);
            fd.append('user_operatorId', res.user_operatorId);
            fd.append('user_rideInfo', res.user_rideInfo);
            fd.append('user_wallets', res.user_wallets);
            fd.append('user_dob', dob);
            fd.append('user_zipCode', res.user_zipCode);
            fd.append('user_cityId', res.user_cityId);
            fd.append('user_stateId', res.user_stateId);
            if (this.imageFile5) {
                fd.append('user_profileImage', this.imageFile5);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateDriver"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'personal';
                            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else if (step === '3') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
            var form = this.addDriverForm3.value;
            var obj = {
                id: this.id,
                data: {
                    bankName: form.bankName,
                    accountHolderName: form.accountHolderName,
                    accountNumber: form.accountNumber,
                    verifiedStatus: form.verifiedStatus,
                    accountType: form.accountType,
                    routingNumber: form.routingNumber,
                    rejectedReason: form.rejectedReason
                }
            };
            this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateBankDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'bank';
                            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else if (step === '4') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
            var form = this.addDriverForm4.value;
            var obj = {
                id: this.id,
                data: {
                    address1: form.address1,
                    address2: form.address2,
                    // streetName: form.streetName,
                    city: form.city,
                    zipCode: form.zipCode,
                    country: form.country,
                    state: form.state,
                    rejectedReason: form.rejectedReason,
                    verifiedStatus: form.verifiedStatus
                }
            };
            // console.log("obj.dataa", obj.data)
            this.dtr.detectChanges();
            this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateUserAddress"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'address';
                            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else if (step === '5') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
            var form = this.addDriverForm5.value;
            var fd = new FormData();
            var expiryDate = new Date(form.expiryDate).getDate() + "/" + (new Date(form.expiryDate).getMonth() + 1) + "/" + new Date(form.expiryDate).getFullYear();
            fd.append('verifiedStatus', form.verifiedStatus);
            fd.append('stateIssued', form.stateIssued);
            fd.append('licenceNumber', form.licenceNumber);
            fd.append('rejectedReason', form.rejectedReason);
            fd.append('expiryDate', expiryDate);
            // it append image if we send new image
            if (this.imageFile3) {
                fd.append('licenceImage', this.imageFile3);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateUserDetails"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObjDocument.link = 'document';
                            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else if (step === '6') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
            var form = this.addDriverForm6.value;
            var fd = new FormData();
            fd.append('otherDocument', form.otherDocument);
            fd.append('documentName', form.documentName);
            fd.append('verifiedStatus', form.verifiedStatus);
            // it append image if we send new image
            if (this.imageFile4) {
                fd.append('documentImage', this.imageFile4);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateUserOtherDetails"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObjOtherDocument.link = 'otherDocument';
                            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else if (step == '7') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(true);
            var form = this.addDriverForm7.value;
            var obj = {
                id: this.id,
                data: {
                    type: form.type,
                    socialSecurityNumber: form.socialSecurityNumber,
                    verifiedStatus: form.verifiedStatus,
                },
            };
            this.stateSubscription = this.store.dispatch(new _state_driver_actions__WEBPACK_IMPORTED_MODULE_13__["UpdateUserCitizenShip"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_driver_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObjCitizenShip.link = 'citizenShip';
                            this.toastr.success(this.DRIVER_CONST.MESSAGES.UPDATED);
                            this.stateSubscription.unsubscribe();
                            this.router.navigate(["/driver-management/list"]);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_15__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    };
    EditDriverComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] },
        { type: _state_state_service__WEBPACK_IMPORTED_MODULE_17__["StateService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"] },
        { type: _brand_brand_service__WEBPACK_IMPORTED_MODULE_19__["BrandService"] },
        { type: _model_model_service__WEBPACK_IMPORTED_MODULE_20__["ModelService"] },
        { type: _driver_management_service__WEBPACK_IMPORTED_MODULE_24__["DriverManagementService"] },
        { type: _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_21__["ServiceOperatorService"] },
        { type: _account_type_account_type_service__WEBPACK_IMPORTED_MODULE_25__["AccountTypeService"] },
        { type: _driver_management_service__WEBPACK_IMPORTED_MODULE_24__["DriverManagementService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_img_zoom__WEBPACK_IMPORTED_MODULE_12__["NgxImgZoomService"] },
        { type: _rider_management_rider_management_service__WEBPACK_IMPORTED_MODULE_27__["RiderManagementService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dp', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDaterangepickerDirective"])
    ], EditDriverComponent.prototype, "datepicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dp1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDaterangepickerDirective"])
    ], EditDriverComponent.prototype, "datepickers", void 0);
    EditDriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'kt-edit-driver',
            template: __webpack_require__(/*! raw-loader!./edit-driver.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/driver-management/edit-driver/edit-driver.component.html"),
            styles: [__webpack_require__(/*! ./edit-driver.component.scss */ "./src/app/views/pages/driver-management/edit-driver/edit-driver.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"],
            _state_state_service__WEBPACK_IMPORTED_MODULE_17__["StateService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"],
            _brand_brand_service__WEBPACK_IMPORTED_MODULE_19__["BrandService"],
            _model_model_service__WEBPACK_IMPORTED_MODULE_20__["ModelService"],
            _driver_management_service__WEBPACK_IMPORTED_MODULE_24__["DriverManagementService"],
            _service_operator_service_operator_service__WEBPACK_IMPORTED_MODULE_21__["ServiceOperatorService"],
            _account_type_account_type_service__WEBPACK_IMPORTED_MODULE_25__["AccountTypeService"],
            _driver_management_service__WEBPACK_IMPORTED_MODULE_24__["DriverManagementService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_img_zoom__WEBPACK_IMPORTED_MODULE_12__["NgxImgZoomService"],
            _rider_management_rider_management_service__WEBPACK_IMPORTED_MODULE_27__["RiderManagementService"]])
    ], EditDriverComponent);
    return EditDriverComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/state/driver.actions.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/driver-management/state/driver.actions.ts ***!
  \***********************************************************************/
/*! exports provided: DriverActionTypes, LoadDriver, LoadDriverSuccess, LoadDriverFail, LoadVehicle, LoadVehicleSuccess, LoadVehicleFail, UpdateDriver, UpdateDriverSuccess, UpdateDriverFail, UpdateBankDetail, UpdateBankDetailSuccess, UpdateBankDetailFail, UpdateVehicleInfo, UpdateVehicleInfoSuccess, UpdateVehicleInfoFail, UpdateUserAddress, UpdateUserAddressSuccess, UpdateUserAddressFail, UpdateUserDetails, UpdateUserDetailsSuccess, UpdateUserDetailsFail, UpdateUserOtherDetails, UpdateUserOtherDetailsSuccess, UpdateUserOtherDetailsFail, UpdateUserCitizenShip, UpdateUserCitizenShipSuccess, UpdateUserCitizenShipFail, DeleteDriver, DeleteDriverSuccess, DeleteDriverFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddDriver, AddDriverSuccess, AddDriverFail, AddDriver2, AddDriver2Success, AddDriver2Fail, UploadData, UploadDataSuccess, UploadDataFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverActionTypes", function() { return DriverActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDriver", function() { return LoadDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDriverSuccess", function() { return LoadDriverSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDriverFail", function() { return LoadDriverFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadVehicle", function() { return LoadVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadVehicleSuccess", function() { return LoadVehicleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadVehicleFail", function() { return LoadVehicleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDriver", function() { return UpdateDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDriverSuccess", function() { return UpdateDriverSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDriverFail", function() { return UpdateDriverFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankDetail", function() { return UpdateBankDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankDetailSuccess", function() { return UpdateBankDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankDetailFail", function() { return UpdateBankDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehicleInfo", function() { return UpdateVehicleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehicleInfoSuccess", function() { return UpdateVehicleInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehicleInfoFail", function() { return UpdateVehicleInfoFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserAddress", function() { return UpdateUserAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserAddressSuccess", function() { return UpdateUserAddressSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserAddressFail", function() { return UpdateUserAddressFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserDetails", function() { return UpdateUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserDetailsSuccess", function() { return UpdateUserDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserDetailsFail", function() { return UpdateUserDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserOtherDetails", function() { return UpdateUserOtherDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserOtherDetailsSuccess", function() { return UpdateUserOtherDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserOtherDetailsFail", function() { return UpdateUserOtherDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserCitizenShip", function() { return UpdateUserCitizenShip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserCitizenShipSuccess", function() { return UpdateUserCitizenShipSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserCitizenShipFail", function() { return UpdateUserCitizenShipFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDriver", function() { return DeleteDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDriverSuccess", function() { return DeleteDriverSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDriverFail", function() { return DeleteDriverFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriver", function() { return AddDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverSuccess", function() { return AddDriverSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverFail", function() { return AddDriverFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriver2", function() { return AddDriver2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriver2Success", function() { return AddDriver2Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriver2Fail", function() { return AddDriver2Fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadData", function() { return UploadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataSuccess", function() { return UploadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataFail", function() { return UploadDataFail; });
var DriverActionTypes;
(function (DriverActionTypes) {
    DriverActionTypes["UPDATE_STATUS"] = "[DRIVER] Update Status";
    DriverActionTypes["UPDATE_STATUS_SUCCESS"] = "[DRIVER]  Update Status Success";
    DriverActionTypes["UPDATE_STATUS_FAIL"] = "[DRIVER]  Update Status Fail";
    DriverActionTypes["LOAD_DRIVER"] = "[DRIVER] Load DRIVER";
    DriverActionTypes["LOAD_DRIVER_SUCCESS"] = "[DRIVER] Load DRIVER Success";
    DriverActionTypes["LOAD_DRIVER_FAIL"] = "[DRIVER] Load DRIVER Fail";
    DriverActionTypes["LOAD_VEHICLE"] = "[DRIVER] Load Vehicle";
    DriverActionTypes["LOAD_VEHICLE_SUCCESS"] = "[DRIVER] Load Vehicle Success";
    DriverActionTypes["LOAD_VEHICLE_FAIL"] = "[DRIVER] Load Vehicle Fail";
    DriverActionTypes["UPDATE_DRIVER"] = "[DRIVER] Update DRIVER";
    DriverActionTypes["UPDATE_DRIVER_SUCCESS"] = "[DRIVER] Update DRIVER Success";
    DriverActionTypes["UPDATE_DRIVER_FAIL"] = "[DRIVER] Update DRIVER Fail";
    DriverActionTypes["UPDATE_BANK_DETAIL"] = "[DRIVER] Update Driver Bank Detail";
    DriverActionTypes["UPDATE_BANK_DETAIL_SUCCESS"] = "[DRIVER] Update Driver Bank Success";
    DriverActionTypes["UPDATE_BANK_DETAIL_FAIL"] = "[DRIVER] Update Driver Bank Fail";
    DriverActionTypes["UPDATE_VEHICLE_INFO"] = "[DRIVER] Update Vehicle Info";
    DriverActionTypes["UPDATE_VEHICLE_INFO_SUCCESS"] = "[DRIVER] Update Vehicle Info Success";
    DriverActionTypes["UPDATE_VEHICLE_INFO_FAIL"] = "[DRIVER] Update Vehicle Info Fail";
    DriverActionTypes["UPDATE_USER_ADDRESS"] = "[DRIVER] Update User Address";
    DriverActionTypes["UPDATE_USER_ADDRESS_SUCCESS"] = "[DRIVER] Update User Addres Success";
    DriverActionTypes["UPDATE_USER_ADDRESS_FAIL"] = "[DRIVER] Update User Addres Fail";
    DriverActionTypes["UPDATE_USER_DETAILS"] = "[DRIVER] Update User Details";
    DriverActionTypes["UPDATE_USER_DETAILS_SUCCESS"] = "[DRIVER] Update User Details Success";
    DriverActionTypes["UPDATE_USER_DETAILS_FAIL"] = "[DRIVER] Update User Details Fail";
    DriverActionTypes["UPDATE_USER_OTHER_DETAILS"] = "[DRIVER] Update User Other Details";
    DriverActionTypes["UPDATE_USER_OTHER_DETAILS_SUCCESS"] = "[DRIVER] Update User Other Details Success";
    DriverActionTypes["UPDATE_USER_OTHER_DETAILS_FAIL"] = "[DRIVER] Update User Other Details Fail";
    DriverActionTypes["UPDATE_USER_CITIZEN_SHIP"] = "[DRIVER] Update User citizen ship Details";
    DriverActionTypes["UPDATE_USER_CITIZEN_SHIP_SUCCESS"] = "[DRIVER] Update User citizen ship Details Success";
    DriverActionTypes["UPDATE_USER_CITIZEN_SHIP_FAIL"] = "[DRIVER] Update User citizen ship Details Fail";
    DriverActionTypes["DELETE_DRIVER"] = "[DRIVER] Delete DRIVER";
    DriverActionTypes["DELETE_DRIVER_SUCCESS"] = "[DRIVER] Delete DRIVER Success";
    DriverActionTypes["DELETE_DRIVER_FAIL"] = "[DRIVER] Delete DRIVER Fail";
    DriverActionTypes["ADD_DRIVER"] = "[DRIVER] Add DRIVER";
    DriverActionTypes["ADD_DRIVER_SUCCESS"] = "[DRIVER] Add DRIVER Success";
    DriverActionTypes["ADD_DRIVER_FAIL"] = "[DRIVER] Add DRIVER Fail";
    DriverActionTypes["ADD_DRIVER2"] = "[DRIVER] Add DRIVER2";
    DriverActionTypes["ADD_DRIVER2_SUCCESS"] = "[DRIVER] Add DRIVER2 Success";
    DriverActionTypes["ADD_DRIVER2_FAIL"] = "[DRIVER] Add DRIVER2 Fail";
    DriverActionTypes["UPLOAD_DATA"] = "[DRIVER] Upload Data";
    DriverActionTypes["UPLOAD_DATA_SUCCESS"] = "[DRIVER] Upload Data Success";
    DriverActionTypes["UPLOAD_DATA_FAIL"] = "[DRIVER] Upload Data Fail";
})(DriverActionTypes || (DriverActionTypes = {}));
var LoadDriver = /** @class */ (function () {
    function LoadDriver(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.LOAD_DRIVER;
    }
    LoadDriver.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadDriver;
}());

var LoadDriverSuccess = /** @class */ (function () {
    function LoadDriverSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.LOAD_DRIVER_SUCCESS;
    }
    LoadDriverSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadDriverSuccess;
}());

var LoadDriverFail = /** @class */ (function () {
    function LoadDriverFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.LOAD_DRIVER_FAIL;
    }
    LoadDriverFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadDriverFail;
}());

var LoadVehicle = /** @class */ (function () {
    function LoadVehicle(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.LOAD_VEHICLE;
    }
    LoadVehicle.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadVehicle;
}());

var LoadVehicleSuccess = /** @class */ (function () {
    function LoadVehicleSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.LOAD_VEHICLE_SUCCESS;
    }
    LoadVehicleSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadVehicleSuccess;
}());

var LoadVehicleFail = /** @class */ (function () {
    function LoadVehicleFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.LOAD_VEHICLE_FAIL;
    }
    LoadVehicleFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadVehicleFail;
}());

var UpdateDriver = /** @class */ (function () {
    function UpdateDriver(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_DRIVER;
    }
    UpdateDriver.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateDriver;
}());

var UpdateDriverSuccess = /** @class */ (function () {
    function UpdateDriverSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_DRIVER_SUCCESS;
    }
    UpdateDriverSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateDriverSuccess;
}());

var UpdateDriverFail = /** @class */ (function () {
    function UpdateDriverFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_DRIVER_FAIL;
    }
    UpdateDriverFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateDriverFail;
}());

var UpdateBankDetail = /** @class */ (function () {
    function UpdateBankDetail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_BANK_DETAIL;
    }
    UpdateBankDetail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBankDetail;
}());

var UpdateBankDetailSuccess = /** @class */ (function () {
    function UpdateBankDetailSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_BANK_DETAIL_SUCCESS;
    }
    UpdateBankDetailSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBankDetailSuccess;
}());

var UpdateBankDetailFail = /** @class */ (function () {
    function UpdateBankDetailFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_BANK_DETAIL_FAIL;
    }
    UpdateBankDetailFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBankDetailFail;
}());

var UpdateVehicleInfo = /** @class */ (function () {
    function UpdateVehicleInfo(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_VEHICLE_INFO;
    }
    UpdateVehicleInfo.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateVehicleInfo;
}());

var UpdateVehicleInfoSuccess = /** @class */ (function () {
    function UpdateVehicleInfoSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_VEHICLE_INFO_SUCCESS;
    }
    UpdateVehicleInfoSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateVehicleInfoSuccess;
}());

var UpdateVehicleInfoFail = /** @class */ (function () {
    function UpdateVehicleInfoFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_VEHICLE_INFO_FAIL;
    }
    UpdateVehicleInfoFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateVehicleInfoFail;
}());

var UpdateUserAddress = /** @class */ (function () {
    function UpdateUserAddress(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_ADDRESS;
    }
    UpdateUserAddress.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserAddress;
}());

var UpdateUserAddressSuccess = /** @class */ (function () {
    function UpdateUserAddressSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_ADDRESS_SUCCESS;
    }
    UpdateUserAddressSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserAddressSuccess;
}());

var UpdateUserAddressFail = /** @class */ (function () {
    function UpdateUserAddressFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_ADDRESS_FAIL;
    }
    UpdateUserAddressFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserAddressFail;
}());

var UpdateUserDetails = /** @class */ (function () {
    function UpdateUserDetails(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_DETAILS;
    }
    UpdateUserDetails.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserDetails;
}());

var UpdateUserDetailsSuccess = /** @class */ (function () {
    function UpdateUserDetailsSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_DETAILS_SUCCESS;
    }
    UpdateUserDetailsSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserDetailsSuccess;
}());

var UpdateUserDetailsFail = /** @class */ (function () {
    function UpdateUserDetailsFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_DETAILS_FAIL;
    }
    UpdateUserDetailsFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserDetailsFail;
}());

var UpdateUserOtherDetails = /** @class */ (function () {
    function UpdateUserOtherDetails(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_OTHER_DETAILS;
    }
    UpdateUserOtherDetails.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserOtherDetails;
}());

var UpdateUserOtherDetailsSuccess = /** @class */ (function () {
    function UpdateUserOtherDetailsSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_OTHER_DETAILS_SUCCESS;
    }
    UpdateUserOtherDetailsSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserOtherDetailsSuccess;
}());

var UpdateUserOtherDetailsFail = /** @class */ (function () {
    function UpdateUserOtherDetailsFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_OTHER_DETAILS_FAIL;
    }
    UpdateUserOtherDetailsFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserOtherDetailsFail;
}());

var UpdateUserCitizenShip = /** @class */ (function () {
    function UpdateUserCitizenShip(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_CITIZEN_SHIP;
    }
    UpdateUserCitizenShip.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserCitizenShip;
}());

var UpdateUserCitizenShipSuccess = /** @class */ (function () {
    function UpdateUserCitizenShipSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_CITIZEN_SHIP_SUCCESS;
    }
    UpdateUserCitizenShipSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserCitizenShipSuccess;
}());

var UpdateUserCitizenShipFail = /** @class */ (function () {
    function UpdateUserCitizenShipFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_USER_CITIZEN_SHIP_FAIL;
    }
    UpdateUserCitizenShipFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserCitizenShipFail;
}());

var DeleteDriver = /** @class */ (function () {
    function DeleteDriver(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.DELETE_DRIVER;
    }
    DeleteDriver.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteDriver;
}());

var DeleteDriverSuccess = /** @class */ (function () {
    function DeleteDriverSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.DELETE_DRIVER_SUCCESS;
    }
    DeleteDriverSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteDriverSuccess;
}());

var DeleteDriverFail = /** @class */ (function () {
    function DeleteDriverFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.DELETE_DRIVER_FAIL;
    }
    DeleteDriverFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteDriverFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddDriver = /** @class */ (function () {
    function AddDriver(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.ADD_DRIVER;
    }
    AddDriver.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddDriver;
}());

var AddDriverSuccess = /** @class */ (function () {
    function AddDriverSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.ADD_DRIVER_SUCCESS;
    }
    AddDriverSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddDriverSuccess;
}());

var AddDriverFail = /** @class */ (function () {
    function AddDriverFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.ADD_DRIVER_FAIL;
    }
    AddDriverFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddDriverFail;
}());

var AddDriver2 = /** @class */ (function () {
    function AddDriver2(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.ADD_DRIVER2;
    }
    AddDriver2.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddDriver2;
}());

var AddDriver2Success = /** @class */ (function () {
    function AddDriver2Success(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.ADD_DRIVER2_SUCCESS;
    }
    AddDriver2Success.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddDriver2Success;
}());

var AddDriver2Fail = /** @class */ (function () {
    function AddDriver2Fail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.ADD_DRIVER2_FAIL;
    }
    AddDriver2Fail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddDriver2Fail;
}());

var UploadData = /** @class */ (function () {
    function UploadData(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPLOAD_DATA;
    }
    UploadData.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadData;
}());

var UploadDataSuccess = /** @class */ (function () {
    function UploadDataSuccess(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPLOAD_DATA_SUCCESS;
    }
    UploadDataSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataSuccess;
}());

var UploadDataFail = /** @class */ (function () {
    function UploadDataFail(payload) {
        this.payload = payload;
        this.type = DriverActionTypes.UPLOAD_DATA_FAIL;
    }
    UploadDataFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataFail;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/state/driver.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/driver-management/state/driver.effects.ts ***!
  \***********************************************************************/
/*! exports provided: DriverEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverEffect", function() { return DriverEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _driver_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver.actions */ "./src/app/views/pages/driver-management/state/driver.actions.ts");
/* harmony import */ var _driver_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../driver-management.service */ "./src/app/views/pages/driver-management/driver-management.service.ts");







var DriverEffect = /** @class */ (function () {
    function DriverEffect(actions$, driverService) {
        var _this = this;
        this.actions$ = actions$;
        this.driverService = driverService;
        this.deleteDriver$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].DELETE_DRIVER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.driverService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteDriverSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteDriverFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadDriver$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].LOAD_DRIVER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.driverService.getDriverById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["LoadDriverSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["LoadDriverFail"](err));
            }));
        }));
        this.loadVehicle$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].LOAD_VEHICLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.getVehicleById(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["LoadVehicleSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["LoadVehicleFail"](err));
            }));
        }));
        this.updateDriver$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_DRIVER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateDriver(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateDriver) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateDriverSuccess"](updateDriver);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateDriverFail"](err)); }));
        }));
        this.updateDriverBank$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_BANK_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateBankDetail(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateDriver) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBankDetailSuccess"](updateDriver);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBankDetailFail"](err)); }));
        }));
        this.updateVehicleInfo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_VEHICLE_INFO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateVehicleInfo(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateVehicleInfo) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateVehicleInfoSuccess"](updateVehicleInfo);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateVehicleInfoFail"](err)); }));
        }));
        this.updateUserAddress$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_USER_ADDRESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateUserAddress(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateDriver) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserAddressSuccess"](updateDriver);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserAddressFail"](err)); }));
        }));
        this.updateUserDetails$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_USER_DETAILS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateLicenceDetails(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (UpdateUserDetails) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserDetailsSuccess"](UpdateUserDetails);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserDetailsFail"](err)); }));
        }));
        this.updateUserOtherDetails$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_USER_OTHER_DETAILS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateUserOtherDetails(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (UpdateUserOtherDetails) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserOtherDetailsSuccess"](UpdateUserOtherDetails);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserOtherDetailsFail"](err)); }));
        }));
        this.updateUserCitizenShip$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPDATE_USER_CITIZEN_SHIP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateUserCitizenSHip(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (UpdateUserOtherDetails) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserCitizenShipSuccess"](UpdateUserOtherDetails);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserCitizenShipFail"](err)); }));
        }));
        this.addDriver$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].ADD_DRIVER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.createProfile(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (aaa) { return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["AddDriverSuccess"](aaa); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["AddDriverFail"](err));
            }));
        }));
        this.addDriver2$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].ADD_DRIVER2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.updateProfile(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["AddDriver2Success"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["AddDriver2Fail"](err));
            }));
        }));
        this.uploadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_driver_actions__WEBPACK_IMPORTED_MODULE_5__["DriverActionTypes"].UPLOAD_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.driverService.uploadData(data.updType, data.updDocs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateAdmin) {
                return new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataSuccess"](updateAdmin);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _driver_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataFail"](err)); }));
        }));
    }
    DriverEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _driver_management_service__WEBPACK_IMPORTED_MODULE_6__["DriverManagementService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "deleteDriver$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "loadDriver$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "loadVehicle$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateDriver$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateDriverBank$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateVehicleInfo$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateUserAddress$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateUserDetails$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateUserOtherDetails$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "updateUserCitizenShip$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "addDriver$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "addDriver2$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DriverEffect.prototype, "uploadData$", void 0);
    DriverEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _driver_management_service__WEBPACK_IMPORTED_MODULE_6__["DriverManagementService"]])
    ], DriverEffect);
    return DriverEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/driver-management/state/driver.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/driver-management/state/driver.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: initialState, driverReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driverReducer", function() { return driverReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _driver_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver.actions */ "./src/app/views/pages/driver-management/state/driver.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function driverReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for driver add-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].ADD_DRIVER_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].ADD_DRIVER_FAIL: {
            return action.payload.error;
        }
        // for driver load-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].LOAD_DRIVER_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].LOAD_DRIVER_FAIL: {
            return action.payload.error;
        }
        // for Vehicle load-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].LOAD_VEHICLE_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].LOAD_VEHICLE_FAIL: {
            return action.payload.error;
        }
        // for driver delete-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].DELETE_DRIVER_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].DELETE_DRIVER_FAIL: {
            return action.payload.error;
        }
        // for driver update-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_DRIVER_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_DRIVER_FAIL: {
            return action.payload.error;
        }
        // for driver update bank detail-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_BANK_DETAIL_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_BANK_DETAIL_FAIL: {
            return action.payload.error;
        }
        // for update address-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_ADDRESS_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_ADDRESS_FAIL: {
            return action.payload.error;
        }
        // for vehicle info -----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_VEHICLE_INFO_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_VEHICLE_INFO_FAIL: {
            return action.payload.error;
        }
        // for User Details -----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_DETAILS_FAIL: {
            return action.payload.error;
        }
        // for User Other Details -----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_OTHER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_OTHER_DETAILS_FAIL: {
            return action.payload.error;
        }
        // for User Citizen ship -----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_CITIZEN_SHIP_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_USER_CITIZEN_SHIP_FAIL: {
            return action.payload.error;
        }
        // for driver upadat status-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for driver add-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].ADD_DRIVER2_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].ADD_DRIVER2_FAIL: {
            return action.payload.error;
        }
        // for driver upadate-----------------------------
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPLOAD_DATA_SUCCESS: {
            return action.payload;
        }
        case _driver_actions__WEBPACK_IMPORTED_MODULE_0__["DriverActionTypes"].UPLOAD_DATA_FAIL: {
            return action.payload.error;
        }
    }
}
var getDriverState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("driver");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getDriverState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-driver-management-driver-management-module.js.map