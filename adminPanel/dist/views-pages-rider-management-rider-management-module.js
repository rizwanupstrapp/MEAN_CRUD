(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-rider-management-rider-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/rider-management/edit-rider/edit-rider.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/rider-management/edit-rider/edit-rider.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'RIDER.EDIT' | translate }} </h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/rider-management/list\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <div class=\"example-preview\">\n            <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'personal' }\" id=\"persnol_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('personal')\">\n                        <span class=\"nav-icon\"><i class=\"flaticon-avatar\"></i></span>\n                        <span class=\"nav-text\">{{'RIDER.TAB.PERSONAL' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n            <div class=\"tab-content mt-5\" id=\"myTabContent1\">\n                <!-- ------------------------ tab1 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'personal' }\" id=\"persnol_detail\" *ngIf=\" navObj.link === 'personal'\" role=\"tabpanel\" aria-labelledby=\"persnol_detail-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addRiderForm1\" [formGroup]=\"addRiderForm1\">\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.USER_PROFILE_IMAGE' | translate }}\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Image\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                                (change)=\"onSelectUserImage($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"removeUserImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.USER_ID_PROOF_IMAGE' | translate }}\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url1+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Id Proof\" *ngIf=\"url1 && url1=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\"\n                                                (change)=\"onSelectUserIdProofImage($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url1 && url1!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"removeUserIdProofImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n                         <!-- User Name -->\n                         <div class=\"col-lg-6\">\n                            <div class=\"col-lg-12\">\n                                <label for=\"example-text-input\" class=\"col-form-label\">\n                                    {{'RIDER.LABEL.USER_NAME' | translate }} *\n                                </label>\n                            </div>\n                            <div class=\"col-lg-12\">\n                                <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.USER_NAME'|translate}}\" type=\"text\" formControlName=\"user_userName\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_userName.errors }\">\n                                <div *ngIf=\"submitted && addRiderForm1.controls.user_userName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                    <p *ngIf=\"submitted && addRiderForm1.controls.user_userName.errors?.required\">\n                                        {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                    <p *ngIf=\"addRiderForm1.controls.user_userName.errors?.minlength && !addRiderForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'RIDER.VALIDATION.MIN_CHARACTER' | translate}}</p>\n                                    <p *ngIf=\"addRiderForm1.controls.user_userName.errors?.maxlength && !addRiderForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'RIDER.VALIDATION.MAX_CHARACTER' | translate}}</p>\n                                    <p *ngIf=\"submitted && addRiderForm1.controls.user_userName.errors?.pattern\">\n                                        {{'RIDER.VALIDATION.USERNAME_INVALID'|translate}} </p>\n                                </div>\n                            </div>\n                           </div>\n                        </div>\n\n                        <!-- ---first & last Name -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.FIRST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.FIRST_NAME' | translate}}\" type=\"text\" formControlName=\"user_firstName\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_firstName.errors }\">\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_firstName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_firstName.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_firstName.errors?.minlength && !addRiderForm1.controls.user_firstName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'RIDER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_firstName.errors?.maxlength && !addRiderForm1.controls.user_firstName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'RIDER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_firstName.errors?.pattern\">\n                                            {{'RIDER.VALIDATION.FIRSTNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.LAST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.LAST_NAME' | translate}}\" type=\"text\" formControlName=\"user_lastName\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_lastName.errors }\">\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_lastName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_lastName.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_lastName.errors?.minlength && !addRiderForm1.controls.user_lastName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'RIDER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_lastName.errors?.maxlength && !addRiderForm1.controls.user_lastName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'RIDER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_lastName.errors?.pattern\">\n                                            {{'RIDER.VALIDATION.LASTNAME_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- email -- phone & isd-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.USER_EMAIL' | translate}}\" type=\"text\" formControlName=\"user_email\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_email.errors }\">\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_email.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_email.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_email.errors?.pattern\">\n                                            {{'RIDER.VALIDATION.EMAIL_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.ZIPCODE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.ZIPCODE' | translate}}\" type=\"text\" formControlName=\"user_zipCode\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_zipCode.errors }\">\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_zipCode.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_zipCode.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- verified -- Status -->\n                        <!---- invitation code & DOB------->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.INVITATION_CODE' | translate }} \n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.INVITATION_CODE' | translate}}\" type=\"text\" formControlName=\"user_invitationCode\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_invitationCode.errors }\">\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_invitationCode.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_invitationCode.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.DATE_OF_BIRTH' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <!-- <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'DRIVER.PLACEHOLDERS.EXPIRY_DATE' | translate}}\"\n                                        type=\"text\" formControlName=\"user_dob\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_dob.errors }\"> -->\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.DATE_OF_BIRTH' | translate}}\" type=\"text\" name=\"user_dob\" formControlName=\"user_dob\" bsDatepicker [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_dob.errors }\">\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_dob.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_dob.errors?.required\">\n                                            {{'DRIVER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_dob.errors?.minlength && !addRiderForm1.controls.user_dob.errors?.pattern\" class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_dob.errors?.maxlength && !addRiderForm1.controls.user_dob.errors?.pattern\" class=\"lbl-err\">\n                                            {{'DRIVER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.PREMIUM_USER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"col-lg-12\">\n                                        <select class=\"form-control m-input\" formControlName=\"user_premiumUser\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_premiumUser.errors }\">\n                                            <option value=\"0\">{{'RIDER.LABEL.YES'|translate}}</option>\n                                            <option value=\"1\">{{'RIDER.LABEL.NO'|translate}}</option>\n                                        </select>\n                                        <div *ngIf=\"submitted && addRiderForm1.controls.user_premiumUser.errors\"\n                                            class=\"form-control-feedback\" style=\"color: red\">\n                                            <p\n                                                *ngIf=\"submitted && addRiderForm1.controls.user_premiumUser.errors?.required\">\n                                                {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> -->\n\n                        </div>\n                        <!-- <div class=\"form-group  row\"> -->\n                        <!-- ---- country -->\n                        <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.COUNTRY' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input m-login__form-input--last\"\n                                         formControlName=\"user_countryId\">\n                                        <option value=\"\"> {{'RIDER.PLACEHOLDERS.COUNTRY' | translate }}</option>\n                                        <option *ngFor=\"let code of countryList\" [value]=\"code._id\">\n                                            {{code.country_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_countryId.errors\"\n                                        class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_countryId.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_countryId.errors?.minlength && !addRiderForm1.controls.user_countryId.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'RIDER.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addRiderForm1.controls.user_countryId.errors?.maxlength && !addRiderForm1.controls.user_countryId.errors?.pattern\"\n                                            class=\"lbl-err\">\n                                            {{'RIDER.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_countryId.errors?.pattern\">\n                                            {{'RIDER.VALIDATION.COUNTRY_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n\n                        <!-- </div> -->\n\n                        <!--- Mobile number alt number-->\n                        <div class=\"form-group row\">\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.MOBILENO' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"d-flex mbl-sct\">\n                                        <!-- <select class=\"form-control m-input m-login__form-input--last\" formControlName=\"user_isdCode\">\n                                            <option *ngFor=\"let code of countryList\" [value]=\"code.country_isd\">\n                                                {{code.country_code}}({{code.country_isd}})</option>\n                                        </select> -->\n\n                                        <!-- <select class=\"form-control m-input m-login__form-input--last\" formControlName=\"user_isdCode\"> -->\n                                        <!-- <option *ngFor=\"let code of countryList\" [value]=\"code.country_isd\">\n                                            {{code.country_code}}({{code.country_isd}})</option> -->\n                                        <!-- <option [selected] [value]=\"+964\">\n                                            +964</option> -->\n                                        <!-- </select> -->\n                                        <div class=\"col-lg-3\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"text\" formControlName=\"user_isdCode\" [ngClass]=\"{ 'is-invalid': submitted1 && addRiderForm1.controls.user_isdCode.errors }\">\n                                        </div>\n                                        <div class=\"col-lg-9\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.USER_MOBILE' | translate}}\" type=\"text\" formControlName=\"user_phoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_phoneNumber.errors }\">\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_phoneNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_phoneNumber.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_phoneNumber.errors?.pattern\">\n                                            {{'RIDER.VALIDATION.MOBILENO_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.ALT_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"d-flex mbl-sct\">\n                                        <!-- <select class=\"form-control m-input m-login__form-input--last\" formControlName=\"user_isdCode\"> -->\n                                        <!-- <option *ngFor=\"let code of countryList\" [value]=\"code.country_isd\">\n                                        {{code.country_code}}({{code.country_isd}})</option> -->\n                                        <!-- <option [selected] [value]=\"+964\">\n                                                +964</option>\n                                        </select> -->\n                                        <div class=\"col-lg-3\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"text\" formControlName=\"user_alternatenumber_isdCode\" [ngClass]=\"{ 'is-invalid': submitted1 && addRiderForm1.controls.user_alternatenumber_isdCode.errors }\">\n                                        </div>\n                                        <div class=\"col-lg-9\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'RIDER.PLACEHOLDERS.ALT_NUMBER' | translate}}\" type=\"text\" formControlName=\"user_alternatePhoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_alternatePhoneNumber.errors }\">\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <!-- city & state -->\n                        <div class=\"form-group row\">\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.STATE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_stateId\" formControlName=\"user_stateId\" (change)=\"changeState($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_stateId.errors }\">\n                                            <option value=\"\" >{{'RIDER.PLACEHOLDERS.SELECT_STATE' | translate }}</option>\n                                            <option value=\"{{state._id}}\" *ngFor=\"let state of stateList\">{{state.state_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_stateId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_stateId.errors?.required\">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'RIDER.LABEL.CITY' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"user_cityId\" formControlName=\"user_cityId\" [ngClass]=\" { 'is-invalid': submitted && addRiderForm1.controls.user_cityId.errors } \">\n                                            <option value=\" \" >{{'RIDER.PLACEHOLDERS.SELECT_CITY' | translate }}</option>\n                                            <option value=\"{{city._id}}\" *ngFor=\"let city of cityList \">{{city.city_name}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_cityId.errors \" class=\"form-control-feedback \" style=\"color: red \">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_cityId.errors?.required \">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <div class=\"col-lg-6 \">\n                                <div class=\"col-lg-12 \">\n                                    <label for=\"example-text-input \" class=\"col-form-label \">\n                                        {{'RIDER.LABEL.STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12 \">\n                                    <select class=\"form-control m-input \" formControlName=\"user_status\" [ngClass]=\"{ 'is-invalid': submitted && addRiderForm1.controls.user_status.errors } \">\n                                        <option value=\"ACTIVE\">{{'RIDER.LABEL.ACTIVE'|translate}}</option>\n                                        <option value=\"INACTIVE\">{{'RIDER.LABEL.INACTIVE'|translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addRiderForm1.controls.user_status.errors \" class=\"form-control-feedback \" style=\"color: red \">\n                                        <p *ngIf=\"submitted && addRiderForm1.controls.user_status.errors?.required \">\n                                            {{'RIDER.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group row \">\n                            <div class=\"col-lg-12 \">\n                                <div class=\"col-lg-12 \">\n                                    <button type=\"button \" routerLink=\"/rider-management/list \" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3 \">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit \" (click)=\"savePersonalDetail() \" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right mr-3 \">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n\n                                    <button type=\"button\" (click)=\"regeneratedAndSendPassword() \" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right \">\n                                        {{'BUTTONS.REGENERATED_SENDPASSWORD' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/rider-management/rider-list/rider-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/rider-management/rider-list/rider-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{ 'RIDER.LIST' | translate }}</h3>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n                <table class=\"table table-striped- table-bordered table-hover table-checkable action_tbl rider_mangmt_tbl\" id=\"kt_datatable\">\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/rider-management/rider-management.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/rider-management/rider-management.component.html ***!
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

/***/ "./src/app/views/pages/rider-management/edit-rider/edit-rider.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/edit-rider/edit-rider.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n.box-size {\n  width: 25%;\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcmlkZXItbWFuYWdlbWVudC9lZGl0LXJpZGVyL2VkaXQtcmlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQTs7QUFFekU7RUFBVSxVQUFVO0VBQ3BCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmlkZXItbWFuYWdlbWVudC9lZGl0LXJpZGVyL2VkaXQtcmlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmJveC1zaXple3dpZHRoOiAyNSU7XG5tYXJnaW4tcmlnaHQ6IDVweDt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/rider-management/edit-rider/edit-rider.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/edit-rider/edit-rider.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditRiderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRiderComponent", function() { return EditRiderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helper/regular.expression */ "./src/app/helper/regular.expression.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _state_rider_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/rider.actions */ "./src/app/views/pages/rider-management/state/rider.actions.ts");
/* harmony import */ var _state_rider_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/rider.reducer */ "./src/app/views/pages/rider-management/state/rider.reducer.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _country_country_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../country/country.service */ "./src/app/views/pages/country/country.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../state/state.service */ "./src/app/views/pages/state/state.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _rider_management_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rider-management.service */ "./src/app/views/pages/rider-management/rider-management.service.ts");





















var EditRiderComponent = /** @class */ (function () {
    function EditRiderComponent(subheaderService, _formBuilder, router, toastr, _route, localStorageService, store, titleService, dtr, translate, countryService, stateService, cityService, riderManagementService) {
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.store = store;
        this.dtr = dtr;
        this.translate = translate;
        this.countryService = countryService;
        this.stateService = stateService;
        this.cityService = cityService;
        this.riderManagementService = riderManagementService;
        this.navObj = { 'link': 'personal' };
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.countryList = [];
        this.submitStep = { step: '0' };
        this.imageFile = '';
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.stateList = [];
        this.cityList = [];
        this.RIDER_CONST = [];
        this.riderDetail = {};
        this.RIDER_CONST = this.translate.instant('RIDER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDER'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_10__["APPNAME"] + " | " + this.RIDER_CONST.MODULE_NAME);
    }
    EditRiderComponent.prototype.clickLink = function (e) {
        this.navObj.link = e;
    };
    EditRiderComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildAddRiderForm1()];
                    case 1:
                        _a.sent();
                        // await this.getCountryList();
                        return [4 /*yield*/, this.getRiderById()];
                    case 2:
                        // await this.getCountryList();
                        _a.sent();
                        return [4 /*yield*/, this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.changeState(_angular_animations__WEBPACK_IMPORTED_MODULE_19__["state"])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // getCountryList() {
    //   Helpers.setLoading(true);
    //   this.countryService.getAllCountries().subscribe(async (data) => {
    //     if (data && data != undefined) {
    //       if (data["code"] == 200) {
    //         this.countryList = data["data"];
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
    EditRiderComponent.prototype.regeneratedAndSendPassword = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        this.riderManagementService.regeneratedAndSendPassword(this.id).subscribe(function (data) {
            if (data["code"] == 200) {
                // this.toastr.success(this.RIDER_CONST.MESSAGES.UPDATED);
                _this.toastr.success("New generated password has been send to rider");
                _this.dtr.detectChanges();
            }
        });
    };
    EditRiderComponent.prototype.changeCountry = function (country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!country) return [3 /*break*/, 2];
                        // let countryId = { city_countryId: country };
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
                        // let countryId = { city_countryId: country };
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditRiderComponent.prototype.changeState = function (state) {
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
    EditRiderComponent.prototype.buildAddRiderForm1 = function () {
        this.addRiderForm1 = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength)]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            user_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]],
            user_status: ["ACTIVE", []],
            user_isdCode: ["+1"],
            user_dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_alternatePhoneNumber: [''],
            user_cityId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_stateId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_invitationCode: [''],
            // user_premiumUser: [0, [Validators.required]],
            // user_countryId: ["", [Validators.required]],
            user_alternatenumber_isdCode: ["+1"]
        });
    };
    EditRiderComponent.prototype.getRiderById = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_rider_actions__WEBPACK_IMPORTED_MODULE_11__["LoadRider"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_rider_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, res, dob, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        res = result.user_dob.split("/");
                        dob = void 0;
                        dob = res[1] + "/" + res[0] + "/" + res[2];
                        this.riderDetail = data['data'];
                        fd = {
                            'user_firstName': result.user_firstName,
                            'user_lastName': result.user_lastName,
                            'user_userName': result.user_userName,
                            'user_email': result.user_email,
                            'user_phoneNumber': result.user_phoneNumber,
                            'user_status': result.user_status != null && result.user_status != undefined ? result.user_status : "",
                            'user_isdCode': result.user_isdCode != null && result.user_isdCode != undefined ? result.user_isdCode : "",
                            'user_invitationCode': result.user_invitationCode,
                            // 'user_premiumUser': result.user_premiumUser,
                            'user_dob': dob,
                            'user_alternatePhoneNumber': result.user_alternatePhoneNumber,
                            'user_cityId': result.user_cityId,
                            'user_stateId': result.user_stateId,
                            'user_zipCode': result.user_zipCode,
                            "user_alternatenumber_isdCode": result.user_alternatenumber_isdCode
                            // 'user_countryId': result. user_countryId || environment.webDefaultCountry
                        };
                        if (result.user_profileImage) {
                            this.url = result.user_profileImage;
                        }
                        if (result.user_userIdProofImage) {
                            this.url1 = result.user_userIdProofImage;
                        }
                        this.changeCountry(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry);
                        this.changeState(result.user_stateId);
                        this.addRiderForm1.patchValue(fd);
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        this.toastr.error(data['message']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditRiderComponent.prototype.onSelectUserImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.url = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.RIDER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditRiderComponent.prototype.removeUserImage = function () {
        this.url = '../../../../../assets/media/newMedia/add.png';
        this.imageFile = '';
    };
    EditRiderComponent.prototype.onSelectUserIdProofImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.imageFile1 = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.url1 = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                // this.toastr.error('you can upload only jpg,png,jpeg extension file max 4 MB');
                this.toastr.error(this.RIDER_CONST.LABEL.NOTALLOWED_IMAGE);
            }
        }
    };
    EditRiderComponent.prototype.removeUserIdProofImage = function () {
        this.url1 = '../../../../../assets/media/newMedia/add.png';
        this.imageFile1 = '';
    };
    EditRiderComponent.prototype.savePersonalDetail = function () {
        this.submitted = true;
        if (this.addRiderForm1.valid) {
            var res = this.addRiderForm1.value;
            if (res.user_password && res.user_password != '' && res.user_confirm_password && res.user_confirm_password != '') {
                if ((res.user_password === res.user_confirm_password)) {
                    this.saveData('1');
                }
                else {
                    // this.toastr.error('Password & Confirm Password Should be Match')
                    this.submitted = false;
                    this.toastr.error(this.RIDER_CONST.LABEL.PASSWORD_CONFORMEDPASSWORD_MATCH);
                }
            }
            else {
                this.saveData('1');
            }
        }
        else if (!this.addRiderForm1.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditRiderComponent.prototype.saveData = function (step) {
        var _this = this;
        if (step === '1') {
            var res = this.addRiderForm1.value;
            var dob = new Date(res.user_dob).getDate() + "/" + (new Date(res.user_dob).getMonth() + 1) + "/" + new Date(res.user_dob).getFullYear();
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            // for the title case convertion
            this.userFirstName = res.user_firstName.replace(/\b\w/g, function (first) { return first.toLocaleUpperCase(); });
            this.userLastName = res.user_lastName.replace(/\b\w/g, function (first) { return first.toLocaleUpperCase(); });
            var fd = new FormData();
            fd.append('user_firstName', this.userFirstName);
            fd.append('user_lastName', this.userLastName);
            fd.append('user_userName', res.user_userName);
            fd.append('user_email', res.user_email);
            fd.append('user_phoneNumber', res.user_phoneNumber);
            fd.append('user_isdCode', res.user_isdCode);
            fd.append('user_status', res.user_status);
            fd.append('user_invitationCode', res.user_invitationCode);
            // fd.append('user_premiumUser', res.user_premiumUser);
            fd.append('user_countryId', _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].webDefaultCountry);
            fd.append('user_dob', dob);
            fd.append('user_alternatePhoneNumber', res.user_alternatePhoneNumber);
            fd.append('user_cityId', res.user_cityId);
            fd.append('user_stateId', res.user_stateId);
            fd.append('user_zipCode', res.user_zipCode);
            fd.append('user_alternatenumber_isdCode', res.user_alternatenumber_isdCode);
            if (this.imageFile) {
                fd.append('user_profileImage', this.imageFile);
            }
            if (this.imageFile1) {
                fd.append('user_userIdProofImage', this.imageFile1);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_rider_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateRider"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_rider_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'Rider';
                            this.toastr.success(this.RIDER_CONST.MESSAGES.UPDATED);
                            this.router.navigate(["/rider-management/list"]);
                            this.stateSubscription.unsubscribe();
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                        }
                        else {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.error(data['message']);
                            this.stateSubscription.unsubscribe();
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    };
    EditRiderComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _country_country_service__WEBPACK_IMPORTED_MODULE_15__["CountryService"] },
        { type: _state_state_service__WEBPACK_IMPORTED_MODULE_17__["StateService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"] },
        { type: _rider_management_service__WEBPACK_IMPORTED_MODULE_20__["RiderManagementService"] }
    ]; };
    EditRiderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-rider',
            template: __webpack_require__(/*! raw-loader!./edit-rider.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/rider-management/edit-rider/edit-rider.component.html"),
            styles: [__webpack_require__(/*! ./edit-rider.component.scss */ "./src/app/views/pages/rider-management/edit-rider/edit-rider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _country_country_service__WEBPACK_IMPORTED_MODULE_15__["CountryService"],
            _state_state_service__WEBPACK_IMPORTED_MODULE_17__["StateService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"],
            _rider_management_service__WEBPACK_IMPORTED_MODULE_20__["RiderManagementService"]])
    ], EditRiderComponent);
    return EditRiderComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/rider-management/rider-list/rider-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/rider-list/rider-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrlbl_table {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvcmlkZXItbWFuYWdlbWVudC9yaWRlci1saXN0L3JpZGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JpZGVyLW1hbmFnZW1lbnQvcmlkZXItbGlzdC9yaWRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmxibF90YWJsZSB7b3ZlcmZsb3cteDogYXV0bzt9Il19 */"

/***/ }),

/***/ "./src/app/views/pages/rider-management/rider-list/rider-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/rider-list/rider-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RiderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderListComponent", function() { return RiderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/localstorage.service */ "./src/app/services/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../api-constants */ "./src/api-constants.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../..//helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _app_contants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../app-contants */ "./src/app-contants.ts");














function _window() {
    // return the global native browser window object
    return window;
}
var RiderListComponent = /** @class */ (function () {
    function RiderListComponent(subheaderService, localStorageService, _script, router, toastr, store, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.toastr = toastr;
        this.store = store;
        this.translate = translate;
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.RIDER_CONST = [];
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.RIDER_CONST = this.translate.instant('RIDER');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.RIDER'));
        titleService.setTitle(this.APPNAME + " | " + this.RIDER_CONST.MODULE_NAME);
    }
    RiderListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDER.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDER.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDER.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDER.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    RiderListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    RiderListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    RiderListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_12__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-rider-list', scripts).then(function () {
            _window().isScriptLoadednotimgmt = true;
            // begin first table
            var table = $(document).find('#kt_datatable').DataTable({
                responsive: false,
                searchDelay: 500,
                processing: true,
                //colReorder: true, // for column reorder
                "order": [[2, "asc"]],
                serverSide: true,
                oLanguage: {
                    sProcessing: that.RIDER_CONST.MESSAGES.PROCESSING,
                },
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].userList + '/RIDER',
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
                        _helper_helper__WEBPACK_IMPORTED_MODULE_12__["Helpers"].setLoading(false);
                        return JSON.stringify(json);
                    }
                },
                columns: [
                    {
                        title: that.RIDER_CONST.LABEL.SR_NO, data: null
                    },
                    {
                        title: that.RIDER_CONST.LABEL.USER_PROFILE_IMAGE, data: "user_profileImage",
                    },
                    {
                        title: that.RIDER_CONST.LABEL.DISPLAY_NAME, data: "user_userName"
                    },
                    {
                        title: that.RIDER_CONST.LABEL.EMAIL, data: "user_email"
                    }, {
                        title: that.RIDER_CONST.LABEL.MOBILENO, data: "user_phoneNumber"
                    },
                    {
                        title: that.RIDER_CONST.LABEL.RATING, data: "user_rating"
                    },
                    { title: that.RIDER_CONST.LABEL.STATUS, data: 'user_status' },
                    {
                        title: that.RIDER_CONST.LABEL.REGISTEREDVIA, data: "user_registeredVia"
                    },
                    { title: that.RIDER_CONST.LABEL.CREATED_ON, data: 'user_createdOn' },
                    { title: that.RIDER_CONST.LABEL.MODIFIED_ON, data: 'user_modifyOn' },
                    { title: that.RIDER_CONST.LABEL.ACTIONS }
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.RIDER_CONST.LABEL.SR_NO:
                                break;
                            case that.RIDER_CONST.LABEL.USER_PROFILE_IMAGE:
                                break;
                            case that.RIDER_CONST.LABEL.DISPLAY_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDER_CONST.LABEL.EMAIL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDER_CONST.LABEL.MOBILENO:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDER_CONST.LABEL.RATING:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.RIDER_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.RIDER_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.RIDER_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.RIDER_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            case that.RIDER_CONST.LABEL.REGISTEREDVIA:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                  <option value=\"\">" + that.RIDER_CONST.PLACEHOLDERS.REGISTERED_VIA + "</option>\n                  <option value=" + _app_contants__WEBPACK_IMPORTED_MODULE_13__["appConstants"].REGISTRATION_TYPE.NORMAL + ">" + that.RIDER_CONST.LABEL.NORMAL + "</option>\n                  <option value=" + _app_contants__WEBPACK_IMPORTED_MODULE_13__["appConstants"].REGISTRATION_TYPE.FACEBOOK + ">" + that.RIDER_CONST.LABEL.FACEBOOK + "</option>\n                  <option value=" + _app_contants__WEBPACK_IMPORTED_MODULE_13__["appConstants"].REGISTRATION_TYPE.GOOGLE + ">" + that.RIDER_CONST.LABEL.GOOGLE + "</option>\n                  "));
                                break;
                            // case that.RIDER_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.RIDER_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.RIDER_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.RIDER_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.RIDER_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                            return a || '-';
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
                            if (!t.user_rating) {
                                return "-";
                            }
                            else {
                                return t.user_rating;
                            }
                        }
                    },
                    {
                        targets: 6,
                        width: '50%',
                        render: function (value, e, row, n) {
                            var id = row._id;
                            var status = {
                                'INACTIVE': { 'title': 'Inactive', 'class': 'kt-badge--danger' },
                                'ACTIVE': { 'title': 'Active', 'class': 'kt-badge--success' },
                            };
                            return '<span style="cursor:Pointer" onclick="window.my.notimgmt.update(this)"  data-id="' + id + '" data-status="' + value + '" data-toggle="modal"  class="kt-badge ' + status[row.user_status].class + ' kt-badge--inline kt-badge--pill">' + status[row.user_status].title + '</span>';
                        }
                    },
                    {
                        targets: 7,
                        width: '20%',
                        render: function (a, e, t, n) {
                            if (a == _app_contants__WEBPACK_IMPORTED_MODULE_13__["appConstants"].REGISTRATION_TYPE.GOOGLE) {
                                return 'Google';
                            }
                            else if (a == _app_contants__WEBPACK_IMPORTED_MODULE_13__["appConstants"].REGISTRATION_TYPE.FACEBOOK) {
                                return 'Facebook';
                            }
                            else {
                                return 'Normal';
                            }
                        }
                    },
                    {
                        targets: 8,
                        width: '10%'
                    },
                    {
                        targets: 9,
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
    RiderListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/rider-management/edit/' + this.id]);
    };
    RiderListComponent.prototype.delete = function (e) {
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
                            component: 'rider',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    RiderListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'rider',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    RiderListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    RiderListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }
    ]; };
    RiderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-rider-list',
            template: __webpack_require__(/*! raw-loader!./rider-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/rider-management/rider-list/rider-list.component.html"),
            styles: [__webpack_require__(/*! ./rider-list.component.scss */ "./src/app/views/pages/rider-management/rider-list/rider-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
    ], RiderListComponent);
    return RiderListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/rider-management/rider-management.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/rider-management.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JpZGVyLW1hbmFnZW1lbnQvcmlkZXItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/rider-management/rider-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/rider-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: RiderManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderManagementComponent", function() { return RiderManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var RiderManagementComponent = /** @class */ (function () {
    function RiderManagementComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].RIDER);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].riderManagement);
    }
    RiderManagementComponent.prototype.ngOnInit = function () {
    };
    RiderManagementComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    RiderManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-rider-management',
            template: __webpack_require__(/*! raw-loader!./rider-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/rider-management/rider-management.component.html"),
            styles: [__webpack_require__(/*! ./rider-management.component.scss */ "./src/app/views/pages/rider-management/rider-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], RiderManagementComponent);
    return RiderManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/rider-management/rider-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/rider-management/rider-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: RiderManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderManagementModule", function() { return RiderManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rider_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rider-management.component */ "./src/app/views/pages/rider-management/rider-management.component.ts");
/* harmony import */ var _rider_list_rider_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rider-list/rider-list.component */ "./src/app/views/pages/rider-management/rider-list/rider-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_rider_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/rider.effects */ "./src/app/views/pages/rider-management/state/rider.effects.ts");
/* harmony import */ var _state_rider_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/rider.reducer */ "./src/app/views/pages/rider-management/state/rider.reducer.ts");
/* harmony import */ var _edit_rider_edit_rider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-rider/edit-rider.component */ "./src/app/views/pages/rider-management/edit-rider/edit-rider.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");


















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].MAIN_MENU.SITE_USER;
var routes = [
    {
        path: '',
        component: _rider_management_component__WEBPACK_IMPORTED_MODULE_3__["RiderManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _rider_list_rider_list_component__WEBPACK_IMPORTED_MODULE_4__["RiderListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_6__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].RIDER.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _edit_rider_edit_rider_component__WEBPACK_IMPORTED_MODULE_15__["EditRiderComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_6__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].OPERATOR.EDIT,
                    mainModulePermission: menuPermision
                }
            }
        ]
    }
];
var RiderManagementModule = /** @class */ (function () {
    function RiderManagementModule() {
    }
    RiderManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rider_management_component__WEBPACK_IMPORTED_MODULE_3__["RiderManagementComponent"], _rider_list_rider_list_component__WEBPACK_IMPORTED_MODULE_4__["RiderListComponent"], _edit_rider_edit_rider_component__WEBPACK_IMPORTED_MODULE_15__["EditRiderComponent"]],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forFeature([_state_rider_effects__WEBPACK_IMPORTED_MODULE_13__["RiderEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature("rider", _state_rider_reducer__WEBPACK_IMPORTED_MODULE_14__["RiderReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forChild(),
            ]
        })
    ], RiderManagementModule);
    return RiderManagementModule;
}());



/***/ }),

/***/ "./src/app/views/pages/rider-management/state/rider.actions.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/rider-management/state/rider.actions.ts ***!
  \*********************************************************************/
/*! exports provided: RiderActionTypes, LoadRider, LoadRiderSuccess, LoadRiderFail, UpdateRider, UpdateBankDetail, UpdateBankDetailSuccess, UpdateBankDetailFail, UpdateRiderSuccess, UpdateRiderFail, DeleteRider, DeleteRiderSuccess, DeleteRiderFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddRider, AddRiderSuccess, AddRiderFail, AddRider2, AddRider2Success, AddRider2Fail, UploadData, UploadDataSuccess, UploadDataFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderActionTypes", function() { return RiderActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRider", function() { return LoadRider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRiderSuccess", function() { return LoadRiderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRiderFail", function() { return LoadRiderFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRider", function() { return UpdateRider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankDetail", function() { return UpdateBankDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankDetailSuccess", function() { return UpdateBankDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBankDetailFail", function() { return UpdateBankDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRiderSuccess", function() { return UpdateRiderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRiderFail", function() { return UpdateRiderFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRider", function() { return DeleteRider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRiderSuccess", function() { return DeleteRiderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRiderFail", function() { return DeleteRiderFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRider", function() { return AddRider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRiderSuccess", function() { return AddRiderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRiderFail", function() { return AddRiderFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRider2", function() { return AddRider2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRider2Success", function() { return AddRider2Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRider2Fail", function() { return AddRider2Fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadData", function() { return UploadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataSuccess", function() { return UploadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataFail", function() { return UploadDataFail; });
var RiderActionTypes;
(function (RiderActionTypes) {
    RiderActionTypes["UPDATE_STATUS"] = "[RIDER] Update Status";
    RiderActionTypes["UPDATE_STATUS_SUCCESS"] = "[RIDER]  Update Status Success";
    RiderActionTypes["UPDATE_STATUS_FAIL"] = "[RIDER]  Update Status Fail";
    RiderActionTypes["LOAD_RIDER"] = "[RIDER] Load RIDER";
    RiderActionTypes["LOAD_RIDER_SUCCESS"] = "[RIDER] Load RIDER Success";
    RiderActionTypes["LOAD_RIDER_FAIL"] = "[RIDER] Load RIDER Fail";
    RiderActionTypes["UPDATE_RIDER"] = "[RIDER] Update RIDER";
    RiderActionTypes["UPDATE_RIDER_SUCCESS"] = "[RIDER] Update RIDER Success";
    RiderActionTypes["UPDATE_RIDER_FAIL"] = "[RIDER] Update RIDER Fail";
    RiderActionTypes["UPDATE_BANK_DETAIL"] = "[RIDER] Update RIDER Bank Detail";
    RiderActionTypes["UPDATE_BANK_DETAIL_SUCCESS"] = "[RIDER] Update RIDER Bank Success";
    RiderActionTypes["UPDATE_BANK_DETAIL_FAIL"] = "[RIDER] Update RIDER Bank Fail";
    RiderActionTypes["DELETE_RIDER"] = "[RIDER] Delete RIDER";
    RiderActionTypes["DELETE_RIDER_SUCCESS"] = "[RIDER] Delete RIDER Success";
    RiderActionTypes["DELETE_RIDER_FAIL"] = "[RIDER] Delete RIDER Fail";
    RiderActionTypes["ADD_RIDER"] = "[RIDER] Add RIDER";
    RiderActionTypes["ADD_RIDER_SUCCESS"] = "[RIDER] Add RIDER Success";
    RiderActionTypes["ADD_RIDER_FAIL"] = "[RIDER] Add RIDER Fail";
    RiderActionTypes["ADD_RIDER2"] = "[RIDER] Add RIDER2";
    RiderActionTypes["ADD_RIDER2_SUCCESS"] = "[RIDER] Add RIDER2 Success";
    RiderActionTypes["ADD_RIDER2_FAIL"] = "[RIDER] Add RIDER2 Fail";
    RiderActionTypes["UPLOAD_DATA"] = "[RIDER] Upload Data";
    RiderActionTypes["UPLOAD_DATA_SUCCESS"] = "[RIDER] Upload Data Success";
    RiderActionTypes["UPLOAD_DATA_FAIL"] = "[RIDER] Upload Data Fail";
})(RiderActionTypes || (RiderActionTypes = {}));
var LoadRider = /** @class */ (function () {
    function LoadRider(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.LOAD_RIDER;
    }
    LoadRider.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRider;
}());

var LoadRiderSuccess = /** @class */ (function () {
    function LoadRiderSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.LOAD_RIDER_SUCCESS;
    }
    LoadRiderSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRiderSuccess;
}());

var LoadRiderFail = /** @class */ (function () {
    function LoadRiderFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.LOAD_RIDER_FAIL;
    }
    LoadRiderFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRiderFail;
}());

var UpdateRider = /** @class */ (function () {
    function UpdateRider(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_RIDER;
    }
    UpdateRider.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRider;
}());

var UpdateBankDetail = /** @class */ (function () {
    function UpdateBankDetail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_BANK_DETAIL;
    }
    UpdateBankDetail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBankDetail;
}());

var UpdateBankDetailSuccess = /** @class */ (function () {
    function UpdateBankDetailSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_BANK_DETAIL_SUCCESS;
    }
    UpdateBankDetailSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBankDetailSuccess;
}());

var UpdateBankDetailFail = /** @class */ (function () {
    function UpdateBankDetailFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_BANK_DETAIL_FAIL;
    }
    UpdateBankDetailFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateBankDetailFail;
}());

var UpdateRiderSuccess = /** @class */ (function () {
    function UpdateRiderSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_RIDER_SUCCESS;
    }
    UpdateRiderSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRiderSuccess;
}());

var UpdateRiderFail = /** @class */ (function () {
    function UpdateRiderFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_RIDER_FAIL;
    }
    UpdateRiderFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRiderFail;
}());

var DeleteRider = /** @class */ (function () {
    function DeleteRider(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.DELETE_RIDER;
    }
    DeleteRider.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRider;
}());

var DeleteRiderSuccess = /** @class */ (function () {
    function DeleteRiderSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.DELETE_RIDER_SUCCESS;
    }
    DeleteRiderSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRiderSuccess;
}());

var DeleteRiderFail = /** @class */ (function () {
    function DeleteRiderFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.DELETE_RIDER_FAIL;
    }
    DeleteRiderFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteRiderFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddRider = /** @class */ (function () {
    function AddRider(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.ADD_RIDER;
    }
    AddRider.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRider;
}());

var AddRiderSuccess = /** @class */ (function () {
    function AddRiderSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.ADD_RIDER_SUCCESS;
    }
    AddRiderSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRiderSuccess;
}());

var AddRiderFail = /** @class */ (function () {
    function AddRiderFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.ADD_RIDER_FAIL;
    }
    AddRiderFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRiderFail;
}());

var AddRider2 = /** @class */ (function () {
    function AddRider2(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.ADD_RIDER2;
    }
    AddRider2.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRider2;
}());

var AddRider2Success = /** @class */ (function () {
    function AddRider2Success(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.ADD_RIDER2_SUCCESS;
    }
    AddRider2Success.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRider2Success;
}());

var AddRider2Fail = /** @class */ (function () {
    function AddRider2Fail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.ADD_RIDER2_FAIL;
    }
    AddRider2Fail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddRider2Fail;
}());

var UploadData = /** @class */ (function () {
    function UploadData(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPLOAD_DATA;
    }
    UploadData.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadData;
}());

var UploadDataSuccess = /** @class */ (function () {
    function UploadDataSuccess(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPLOAD_DATA_SUCCESS;
    }
    UploadDataSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataSuccess;
}());

var UploadDataFail = /** @class */ (function () {
    function UploadDataFail(payload) {
        this.payload = payload;
        this.type = RiderActionTypes.UPLOAD_DATA_FAIL;
    }
    UploadDataFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataFail;
}());



/***/ }),

/***/ "./src/app/views/pages/rider-management/state/rider.effects.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/rider-management/state/rider.effects.ts ***!
  \*********************************************************************/
/*! exports provided: RiderEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderEffect", function() { return RiderEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rider_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rider.actions */ "./src/app/views/pages/rider-management/state/rider.actions.ts");
/* harmony import */ var _rider_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rider-management.service */ "./src/app/views/pages/rider-management/rider-management.service.ts");





// import { StudentManagementService } from "../student-management.service";


var RiderEffect = /** @class */ (function () {
    function RiderEffect(actions$, riderService) {
        var _this = this;
        this.actions$ = actions$;
        this.riderService = riderService;
        this.deleteRider$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].DELETE_RIDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.riderService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRiderSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRiderFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.riderService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadRider$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].LOAD_RIDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.riderService.getRiderById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRiderSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["LoadRiderFail"](err));
            }));
        }));
        this.updateRider$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].UPDATE_RIDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.riderService.updateRider(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateRider) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRiderSuccess"](updateRider);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRiderFail"](err)); }));
        }));
        this.updateRiderBank$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].UPDATE_BANK_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.riderService.updateBankDetail(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateRider) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBankDetailSuccess"](updateRider);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateBankDetailFail"](err)); }));
        }));
        this.addRider$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].ADD_RIDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.riderService.addRider1(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (aaa) { return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["AddRiderSuccess"](aaa); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["AddRiderFail"](err));
            }));
        }));
        this.addRider2$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].ADD_RIDER2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.riderService.addRider2(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["AddRider2Success"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["AddRider2Fail"](err));
            }));
        }));
        this.uploadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_rider_actions__WEBPACK_IMPORTED_MODULE_5__["RiderActionTypes"].UPLOAD_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.riderService.uploadData(data.updType, data.updDocs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateAdmin) {
                return new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataSuccess"](updateAdmin);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _rider_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataFail"](err)); }));
        }));
    }
    RiderEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _rider_management_service__WEBPACK_IMPORTED_MODULE_6__["RiderManagementService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "deleteRider$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "loadRider$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "updateRider$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "updateRiderBank$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "addRider$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "addRider2$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], RiderEffect.prototype, "uploadData$", void 0);
    RiderEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _rider_management_service__WEBPACK_IMPORTED_MODULE_6__["RiderManagementService"]])
    ], RiderEffect);
    return RiderEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/rider-management/state/rider.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/rider-management/state/rider.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, RiderReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderReducer", function() { return RiderReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _rider_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rider.actions */ "./src/app/views/pages/rider-management/state/rider.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function RiderReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for rider add-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].ADD_RIDER_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].ADD_RIDER_FAIL: {
            return action.payload.error;
        }
        // for rider load-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].LOAD_RIDER_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].LOAD_RIDER_FAIL: {
            return action.payload.error;
        }
        // for rider delete-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].DELETE_RIDER_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].DELETE_RIDER_FAIL: {
            return action.payload.error;
        }
        // for rider update-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPDATE_RIDER_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPDATE_RIDER_FAIL: {
            return action.payload.error;
        }
        // for rider update bank detail-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPDATE_BANK_DETAIL_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPDATE_BANK_DETAIL_FAIL: {
            return action.payload.error;
        }
        // for rider upadat status-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for rider add-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].ADD_RIDER2_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].ADD_RIDER2_FAIL: {
            return action.payload.error;
        }
        // for rider upadate-----------------------------
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPLOAD_DATA_SUCCESS: {
            return action.payload;
        }
        case _rider_actions__WEBPACK_IMPORTED_MODULE_0__["RiderActionTypes"].UPLOAD_DATA_FAIL: {
            return action.payload.error;
        }
        // default: {
        //     return action
        // }
    }
}
var getriderState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("rider");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getriderState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-rider-management-rider-management-module.js.map