(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-operator-operator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'OPERATOR.ADD' | translate }} </h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n\n        <div class=\"example-preview\">\n            <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'personal' }\" id=\"persnol_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('personal')\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-avatar\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.PERSONAL' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" *ngIf=\"submitStep.step !='0'\" [ngClass]=\"{ 'active': navObj.link == 'operator' }\" id=\"subscription_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('operator')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-avatar\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.OPERATOR' | translate }}</span>\n                    </a>\n                </li>\n                <!-- *ngIf=\"submitStep.step !='1'\" -->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" *ngIf=\"submitStep.step !='0'\" [ngClass]=\"{ 'active': navObj.link == 'bank' }\" id=\"bank_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('bank')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-notepad\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.BANK' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" *ngIf=\"submitStep.step !='0'\" [ngClass]=\"{ 'active': navObj.link == 'commission' }\" id=\"commission_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('commission')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-coins\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.COMMISSION' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" *ngIf=\"submitStep.step !='0'\" [ngClass]=\"{ 'active': navObj.link == 'invoice' }\" id=\"invoice_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('invoice')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"fas fa-file-invoice\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.INVOICE' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n            <div class=\"tab-content mt-5\" id=\"myTabContent1\">\n                <!-- ------------------------ tab1 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'personal' }\" id=\"persnol_detail\" *ngIf=\" navObj.link === 'personal'\" role=\"tabpanel\" aria-labelledby=\"persnol_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm1\" [formGroup]=\"addOperatorForm1\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.USER_PROFILE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+userUrl+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Image\" *ngIf=\"userUrl && userUrl=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectUserImage($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"userUrl && userUrl!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"removeUserImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n                            <!-- User Name -->\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.USER_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.USER_NAME'|translate}}\" type=\"text\" formControlName=\"user_userName\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_userName.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_userName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_userName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_userName.errors?.minlength && !addOperatorForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_userName.errors?.maxlength && !addOperatorForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_userName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.USERNAME_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- ---first & last Name -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.FIRST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.FIRST_NAME'|translate}}\" type=\"text\" formControlName=\"user_firstName\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_firstName.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_firstName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_firstName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_firstName.errors?.minlength && !addOperatorForm1.controls.user_firstName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_firstName.errors?.maxlength && !addOperatorForm1.controls.user_firstName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_firstName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.FIRSTNAME_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.LAST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.LAST_NAME'|translate}}\" type=\"text\" formControlName=\"user_lastName\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_lastName.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_lastName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_lastName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_lastName.errors?.minlength && !addOperatorForm1.controls.user_lastName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_lastName.errors?.maxlength && !addOperatorForm1.controls.user_lastName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MIN_CHARACTER'|translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_lastName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.LASTNAME_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- email -- phone -->\n\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.EMAIL'|translate}}\" type=\"text\" formControlName=\"user_email\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_email.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_email.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_email.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_email.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.EMAIL_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.MOBILENO' | translate }} *\n                                    </label>\n                                </div>\n                                <!-- <div class=\"col-lg-12\"> -->\n                                <div class=\"mbl-sct d-flex\">\n                                    <div class=\"col-lg-3\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"text\" formControlName=\"user_isdCode\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_isdCode.errors }\">\n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}}\" type=\"text\" formControlName=\"user_phoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_phoneNumber.errors }\">\n                                    </div>\n                                </div>\n                                <div *ngIf=\"submitted && addOperatorForm1.controls.user_phoneNumber.errors\" class=\"form-control-feedback\" style=\"color: red;margin-top: 10px;padding-left: 10px;\">\n                                    <p *ngIf=\"submitted && addOperatorForm1.controls.user_phoneNumber.errors?.required\">\n                                        {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                    <p *ngIf=\"submitted && addOperatorForm1.controls.user_phoneNumber.errors?.pattern\">\n                                        {{'OPERATOR.VALIDATION.MOBILENO_INVALID'|translate}} </p>\n                                </div>\n                                <!-- </div> -->\n                            </div>\n                        </div>\n\n                        <!-- ---pass & confirm pass -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.PASSWORD' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.PASSWORD'|translate}}\" formControlName=\"user_password\" (keyup)=\"onkeyUp($event.target.value)\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_password.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_password.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_password.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.PASSWORD_INVALID'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.CONPASSWORD' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.CONFIRM_PASSWORD'|translate}}\" formControlName=\"user_confirm_password\" (keyup)=\"onkeyUp($event.target.value)\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_confirm_password.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_confirm_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_confirm_password.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_confirm_password.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.PASSWORD_INVALID'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- verified -- Status -->\n\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.VERIFIED_STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_verifiedStatus\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_verifiedStatus.errors }\">\n                                        <option value=\"0\">Pending</option>\n                                        <option value=\"1\">Verified</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_verifiedStatus.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_verifiedStatus.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                    </div>\n\n\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_status\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_status.errors }\">\n                                        <option value=\"ACTIVE\">{{'OPERATOR.LABEL.ACTIVE'|translate}}</option>\n                                        <option value=\"INACTIVE\">{{'OPERATOR.LABEL.INACTIVE'|translate}}</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_status.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-md-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"savePersonalDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n\n                </div>\n\n                <!-- ------------------------ tab2 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'operator' }\" *ngIf=\" navObj.link === 'operator'\" id=\"subscription_detail\" role=\"tabpanel\" aria-labelledby=\"subscription_detail-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm2\" [formGroup]=\"addOperatorForm2\">\n\n                        <div class=\"form-group  row\">\n                            <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.DOCUMENT_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFile($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'OPERATOR.NOTES.FILE'|translate}}</span>\n                                </div>\n                            </div> -->\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-4\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"col-lg-12\">\n                                        <label for=\"example-text-input\" class=\"col-form-label\">\n                                            {{'OPERATOR.LABEL.DOCUMENT_IMAGE' | translate }}*\n                                        </label>\n                                    </div>\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                            </div>\n                                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                                <i class=\"fa fa-pen\"></i>\n                                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFile($event)\">\n                                            </label>\n                                            <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </span>\n                                        </div>\n                                        <span class=\"form-text text-muted\">{{'OPERATOR.NOTES.FILE'|translate}}</span>\n                                    </div>\n                                </div>\n                                <!-- operator name -- phone -->\n                                <div class=\"form-group  row\">\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.OPERATOR_NAME' | translate }}*\n                                            </label>\n                                        </div>\n                                        <div class=\"col-lg-12\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.OPERATOR_NAME'|translate}}\" type=\"text\" formControlName=\"operatorName\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorName.errors }\">\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.operatorName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorName.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorName.errors?.minlength && !addOperatorForm2.controls.operatorName.errors?.pattern\" class=\"lbl-err\">{{'OPERATOR.VALIDATION.MIN_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorName.errors?.maxlength && !addOperatorForm2.controls.operatorName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MAX_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorName.errors?.pattern\">\n                                                    {{'OPERATOR.VALIDATION.OPERATORNAME_INVALID'|translate}} </p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.MOBILENO' | translate }}*\n                                            </label>\n                                        </div>\n\n                                        <!-- <div class=\"col-lg-12\"> -->\n                                        <div class=\"mbl-sct d-flex\">\n                                            <div class=\"col-lg-3\">\n                                                <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"text\" formControlName=\"operatorIsdCode\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorIsdCode.errors }\">\n                                            </div>\n                                            <div class=\"col-lg-9\">\n                                                <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}}\" type=\"text\" formControlName=\"operatorPhoneNumber\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors }\">\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors\" class=\"form-control-feedback\" style=\"color: red; margin-top: 10px;padding-left: 10px;\">\n                                            <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors?.required\">\n                                                {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                            <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors?.pattern\">\n                                                {{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}} </p>\n                                        </div>\n                                        <!-- </div> -->\n                                    </div>\n                                </div>\n\n                                <!-- License --- -->\n                                <div class=\"form-group row\">\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.LICENCE' | translate }}*\n                                            </label>\n                                        </div>\n                                        <div class=\"col-lg-12\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.LICENSE_NO'|translate}}\" type=\"text\" formControlName=\"operatorLicenseNumber\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors }\">\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorLicenseNumber.errors?.minlength && !addOperatorForm2.controls.operatorLicenseNumber.errors?.pattern\" class=\"lbl-err\">{{'OPERATOR.VALIDATION.MIN_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorLicenseNumber.errors?.maxlength && !addOperatorForm2.controls.operatorLicenseNumber.errors?.pattern\" class=\"lbl-err\">{{'OPERATOR.VALIDATION.MAX_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors?.pattern\">\n                                                    {{'OPERATOR.VALIDATION.LICENSE_INVALID'|translate}} </p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.CITY_NAME' | translate }}*\n                                            </label>\n                                        </div>\n                                        <div class=\"col-lg-12\">\n                                            <select class=\"form-control m-input m-login__form-input--last\" (change)=\"changeCountry()\" formControlName=\"user_cityId\">\n                                                <option value=\"\">{{'OPERATOR.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                                <option value=\"{{city._id}}\" *ngFor=\"let city of cities\">\n                                                    {{city.city_name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.user_cityId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.user_cityId.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-8\">\n                                <div *ngIf=\"addOperatorForm2.value.user_cityId\">\n                                    <agm-map [zoom]=\"5\" [latitude]=\"lat\" [longitude]=\"lng\" (mapReady)=\"onMapReady($event)\" id='agmMap'>\n                                        <agm-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\">\n                                            <agm-circle *ngIf=\"markers[i+1]\" [latitude]=\"markers[i+1].lat\" [longitude]=\"markers[i+1].lng\" [radius]=\"markers[i+1].rad\" [fillColor]=\"'red'\" [editable]=\"true\">\n                                            </agm-circle>\n                                        </agm-marker>\n                                    </agm-map>\n\n                                    <button (click)='deleteSelected()'>Delete selected Shape</button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveOperatorDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- ------------------------ tab3 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'bank' }\" *ngIf=\" navObj.link === 'bank'\" id=\"bank_detail\" role=\"tabpanel\" aria-labelledby=\"bank_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm3\" [formGroup]=\"addOperatorForm3\">\n                        <!--- bank name & account holder name-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.BANK_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.BANK_NAME' | translate}}\" type=\"text\" formControlName=\"bankName\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.bankName.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.bankName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.bankName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.bankName.errors?.minlength && !addOperatorForm3.controls.bankName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.bankName.errors?.maxlength && !addOperatorForm3.controls.bankName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.bankName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INVALID_BANK_NAME' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ACCOUNT_HOLDER_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ACCOUNT_HOLDER_NAME' | translate}}\" type=\"text\" formControlName=\"accountHolderName\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.accountHolderName.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.accountHolderName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountHolderName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.accountHolderName.errors?.minlength && !addOperatorForm3.controls.accountHolderName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.accountHolderName.errors?.maxlength && !addOperatorForm3.controls.accountHolderName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountHolderName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INVALID_ACCONT_HOLDER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- Account Number  institution number-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ACCOUNT_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ACCOUNT_NUMBER' | translate}}\" type=\"text\" formControlName=\"accountNumber\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.accountNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.accountNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountNumber.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountNumber.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.ACCOUNTNO_INVALID'|translate}} \n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.INSTITUTION_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.INSTITUTION_NUMBER' | translate}}\" type=\"text\" formControlName=\"institutionNumber\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.institutionNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.institutionNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.institutionNumber.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.institutionNumber.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INSTITUTIONNO_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.TRANSIST_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.TRANSIST_NUMBER' | translate}}\" type=\"text\" formControlName=\"transitNumber\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.transitNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.transitNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.transitNumber.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.transitNumber.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.TRANSITNO_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveBankDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- -----------------------Tab4 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'commission' }\" *ngIf=\" navObj.link === 'commission'\" id=\"commission_detail\" role=\"tabpanel\" aria-labelledby=\"commission_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm4\" [formGroup]=\"addOperatorForm4\">\n                        <!--- fee & frequency type-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.FEE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.FEE' | translate}}\" type=\"text\" formControlName=\"annualFee\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.annualFee.errors }\">\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.annualFee.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.annualFee.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.annualFee.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.FEE_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.FREQUENCY_TYPE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"frequencyType\" formControlName=\"frequencyType\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.frequencyType.errors }\">\n                                        <option value=\"\">{{'OPERATOR.PLACEHOLDERS.FREQUENCY_TYPE' | translate}}</option>\n                                        <option value=\"{{type['value']['value']}}\" *ngFor=\"let type of operatorFrequencyType | keyvalue \">\n                                            {{type['value']['key']}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.frequencyType.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.frequencyType.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- commission and ride pre-authorised payment-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.COMMISSION' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.COMMISSION' | translate}}\" type=\"text\" formControlName=\"commissionPercentage\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.commissionPercentage.errors }\">\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.commissionPercentage.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.commissionPercentage.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.commissionPercentage.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.COMMISSION_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.RIDE_PRE_AUTHORISED_PAYMENT' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.RIDE_PRE_AUTHORISED_PAYMENT' | translate}}\" type=\"text\" formControlName=\"ridePreAuthorisedPayment\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors }\">\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.RIDE_PRE_AUTHORISED_PAYMENT_IINVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveCommissionDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n\n                <!-- -----------------------Tab5 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'invoice' }\" *ngIf=\" navObj.link === 'invoice'\" id=\"invoice_detail\" role=\"tabpanel\" aria-labelledby=\"invoice_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm5\" [formGroup]=\"addOperatorForm5\">\n                        <!-- address1 and address2 -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ADDRESS1' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <textarea class=\"form-control m-textarea m-login__form-textarea--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ADDRESS1' | translate}}\" type=\"text\" formControlName=\"address1\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.address1.errors }\"></textarea>\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.address1.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.address1.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ADDRESS2' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <textarea class=\"form-control m-textarea m-login__form-textarea--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ADDRESS2' | translate}}\" type=\"text\" formControlName=\"address2\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.address2.errors }\"></textarea>\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.address2.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.address2.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--- postal code & province-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.POSTAL_CODE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.POSTAL_CODE' | translate}}\" type=\"number\" formControlName=\"postalCode\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.postalCode.errors }\">\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.maxlength && !addOperatorForm5.controls.postalCode.errors?.pattern \" class=\"lbl-err \">\n                                            {{'OPERATOR.VALIDATION.POSTALCODE_CHARACTER_LENGTH' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.minlength && !addOperatorForm5.controls.postalCode.errors?.pattern \" class=\"lbl-err \">\n                                            {{'OPERATOR.VALIDATION.POSTALCODE_CHARACTER_LENGTH' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INVALID_POSTALCODE' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.PROVINCE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.PROVINCE' | translate}}\" type=\"text\" formControlName=\"province\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.province.errors }\">\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.province.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.province.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- mobile no and email -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.MOBILENO' | translate }} *\n                                    </label>\n                                </div>\n                                <!-- <div class=\"col-lg-12\"> -->\n                                <div class=\"mbl-sct d-flex\">\n                                    <div class=\"col-lg-3\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"number\" formControlName=\"isdCode\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.isdCode.errors }\">\n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}}\" type=\"text\" formControlName=\"contectNumber\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.contectNumber.errors }\">\n                                    </div>\n                                </div>\n                                <div *ngIf=\"submitted4 && addOperatorForm5.controls.contectNumber.errors\" class=\"form-control-feedback\" style=\"color: red; margin-top: 10px;padding-left: 10px;\">\n                                    <p *ngIf=\"submitted4 && addOperatorForm5.controls.contectNumber.errors?.required\">\n                                        {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                    <p *ngIf=\"submitted4 && addOperatorForm5.controls.contectNumber.errors?.pattern\">\n                                        {{'OPERATOR.VALIDATION.MOBILENO_INVALID'|translate}} </p>\n                                </div>\n                                <!-- </div> -->\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.EMAIL'|translate}}\" type=\"text\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.email.errors }\">\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.email.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.email.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.email.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.EMAIL_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveInvoiceDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"isAdd\">{{'PREFERRED_LOCATION.ADD' | translate }} </h3>\n            <h3 class=\"kt-portlet__head-title\" *ngIf=\"!isAdd\">{{'PREFERRED_LOCATION.EDIT' | translate }}</h3>\n\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" (click)=\"cancel()\" class=\"btn btn-brand btn-elevate btn-icon-sm\"><i\n                    class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n\n    <div class=\"kt-portlet__body\">\n\n        <form class=\"kt-form kt-form__group\" name=\"addEditPreferredLocationForm\"\n            [formGroup]=\"addEditPreferredLocationForm\">\n            <div class=\"kt-portlet__body\">\n\n                <div class=\"form-group  row\">\n                   \n                    <div class=\"col-lg-6\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'PREFERRED_LOCATION.LABEL.LOCATION' | translate}}*\n                            </label>\n                        </div>\n                        <!-- location -->\n                        <div class=\"col-lg-12\">\n                            <input  class=\"form-control m-input m-login__form-input--last\"  *ngIf=\"isAdd\"\n                            placeholder=\"{{'PREFERRED_LOCATION.PLACEHOLDERS.LOCATION' | translate}}\" type=\"text\"\n                               formControlName=\"name\"\n                               [ngClass]=\"{ 'is-invalid': submitted && addEditPreferredLocationForm.controls.name.errors }\">\n                            <input  class=\"form-control m-input m-login__form-input--last\"  *ngIf=\"!isAdd\"\n                             placeholder=\"{{'PREFERRED_LOCATION.PLACEHOLDERS.LOCATION' | translate}}\" type=\"text\"\n                                formControlName=\"name\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditPreferredLocationForm.controls.name.errors }\" disabled>\n                            <div *ngIf=\"submitted && addEditPreferredLocationForm.controls.name.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditPreferredLocationForm.controls.name.errors?.required\">\n                                    {{'PREFERRED_LOCATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                               \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div *ngIf=\"cityId\">\n                            <agm-map [zoom]=\"5\" [latitude]=\"lat\" [longitude]=\"lng\" (mapReady)=\"onMapReady($event)\" id='agmMap'>\n                                <agm-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\">\n                                    <agm-circle *ngIf=\"markers[i+1]\" [latitude]=\"markers[i+1].lat\" [longitude]=\"markers[i+1].lng\" [radius]=\"markers[i+1].rad\" [fillColor]=\"'red'\" [editable]=\"true\">\n                                    </agm-circle>\n                                </agm-marker>\n                            </agm-map>\n\n                            <button *ngIf=\"isAdd\"(click)='deleteSelected()'>Delete selected Shape</button>\n                        </div>\n                    </div>\n                    <!-- lat -->\n                    <!-- <div class=\"col-lg-3\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'PREFERRED_LOCATION.LABEL.LAT' | translate}}*\n                            </label>\n                        </div>\n                     \n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'PREFERRED_LOCATION.PLACEHOLDERS.LAT' | translate}}\" type=\"decimal\"\n                                formControlName=\"lat\" \n                                [ngClass]=\"{ 'is-invalid': submitted && addEditPreferredLocationForm.controls.lat.errors }\">\n                                <div id=\"map_canvas\"></div>\n                            <div *ngIf=\"submitted && addEditPreferredLocationForm.controls.lat.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditPreferredLocationForm.controls.lat.errors?.required\">\n                                    {{'PREFERRED_LOCATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                      <!-- long -->\n\n                    <!-- <div class=\"col-lg-3\">\n                        <div class=\"col-lg-6\">\n                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                {{'PREFERRED_LOCATION.LABEL.LONG' | translate}}*\n                            </label>\n                        </div>\n                      \n                        <div class=\"col-lg-12\">\n                            <input class=\"form-control m-input m-login__form-input--last\"\n                                placeholder=\"{{'PREFERRED_LOCATION.PLACEHOLDERS.LONG' | translate}}\" type=\"decimal\"\n                                formControlName=\"long\"\n                                [ngClass]=\"{ 'is-invalid': submitted && addEditPreferredLocationForm.controls.long.errors }\">\n                            <div *ngIf=\"submitted && addEditPreferredLocationForm.controls.long.errors\"\n                                class=\"form-control-feedback\" style=\"color: red\">\n                                <p *ngIf=\"submitted && addEditPreferredLocationForm.controls.long.errors?.required\">\n                                    {{'PREFERRED_LOCATION.VALIDATION.FIELD_REQUIRED' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div> -->\n                 \n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-xl-12\" *ngIf=\"isAdd\">\n                        <div class=\"col-xl-12\">\n                            <button type=\"button\" (click)=\"cancel()\"\n                                class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">{{'BUTTONS.CANCEL' | translate }}\n                            </button>\n\n                            <button type=\"submit\" (click)=\"onSubmit()\"\n                                class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                {{'BUTTONS.SUBMIT' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/edit-operator/edit-operator.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/operator/edit-operator/edit-operator.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'OPERATOR.EDIT' | translate }} </h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\">\n            <a href=\"javascript:;\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-left-arrow\"></i>{{'BUTTONS.BACK' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n\n        <div class=\"example-preview\">\n            <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'personal' }\" id=\"persnol_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('personal')\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-avatar\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.PERSONAL' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'operator' }\" id=\"subscription_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('operator')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-avatar\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.OPERATOR' | translate }}</span>\n                    </a>\n                </li>\n                <!-- *ngIf=\"submitStep.step !='1'\" -->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'bank' }\" id=\"bank_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('bank')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-notepad\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.BANK' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'commission' }\" id=\"commission_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('commission')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"flaticon-coins\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.COMMISSION' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'invoice' }\" id=\"invoice_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('invoice')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"fas fa-file-invoice\"></i>\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.INVOICE' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{ 'active': navObj.link == 'preferredLocation' }\" id=\"invoice_detail-tab-1\" data-toggle=\"tab\" href=\"javascript:;\" (click)=\"clickLink('preferredLocation')\" aria-controls=\"profile\">\n                        <span class=\"nav-icon\">\n                            <i class=\"fas fa-map-marked-alt\"></i>\n\n                        </span>\n                        <span class=\"nav-text\">{{'OPERATOR.TAB.PREFERREDLOCATION' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n            <div class=\"tab-content mt-5\" id=\"myTabContent1\">\n                <!-- ------------------------ tab1 ------------>\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'personal' }\" id=\"persnol_detail\" *ngIf=\" navObj.link === 'personal'\" role=\"tabpanel\" aria-labelledby=\"persnol_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm1\" [formGroup]=\"addOperatorForm1\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.USER_PROFILE_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url1+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"User Image\" *ngIf=\"url1 && url1=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectUserImage($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url1 && url1!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"removeUserImage()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'DRIVER.NOTES.IMAGE'|translate}}\n                                    </span>\n                                </div>\n                            </div>\n                            <!-- User Name -->\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.USER_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.USER_NAME'|translate}}\" type=\"text\" formControlName=\"user_userName\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_userName.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_userName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_userName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_userName.errors?.minlength && !addOperatorForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_userName.errors?.maxlength && !addOperatorForm1.controls.user_userName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_userName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.USERNAME_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- ---first & last Name -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.FIRST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.FIRST_NAME'|translate}}\" type=\"text\" formControlName=\"user_firstName\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_firstName.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_firstName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_firstName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_firstName.errors?.minlength && !addOperatorForm1.controls.user_firstName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_firstName.errors?.maxlength && !addOperatorForm1.controls.user_firstName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_firstName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.FIRSTNAME_INVALID'|translate}} </p>\n                                    </div>\n\n\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.LAST_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.LAST_NAME'|translate}}\" type=\"text\" formControlName=\"user_lastName\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_lastName.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_lastName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_lastName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_lastName.errors?.minlength && !addOperatorForm1.controls.user_lastName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate}}</p>\n                                        <p *ngIf=\"addOperatorForm1.controls.user_lastName.errors?.maxlength && !addOperatorForm1.controls.user_lastName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MIN_CHARACTER'|translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_lastName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.LASTNAME_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- email -- phone -->\n\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.EMAIL'|translate}}\" type=\"text\" formControlName=\"user_email\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_email.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_email.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_email.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_email.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.EMAIL_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.MOBILENO' | translate }} *\n                                    </label>\n                                </div>\n                                <!-- <div class=\"col-lg-12\"> -->\n                                <div class=\"mbl-sct d-flex\">\n                                    <div class=\"col-lg-3\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"text\" formControlName=\"user_isdCode\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_isdCode.errors }\">\n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}}\" type=\"text\" formControlName=\"user_phoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_phoneNumber.errors }\">\n                                    </div>\n                                </div>\n                                <div *ngIf=\"submitted && addOperatorForm1.controls.user_phoneNumber.errors\" class=\"form-control-feedback\" style=\"color: red; margin-top: 10px; padding-left: 10px;\">\n                                    <p *ngIf=\"submitted && addOperatorForm1.controls.user_phoneNumber.errors?.required\">\n                                        {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                    <p *ngIf=\"submitted && addOperatorForm1.controls.user_phoneNumber.errors?.pattern\">\n                                        {{'OPERATOR.VALIDATION.MOBILENO_INVALID'|translate}} </p>\n                                </div>\n                                <!-- </div> -->\n                            </div>\n                        </div>\n\n                        <!-- ---pass & confirm pass -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.PASSWORD' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.PASSWORD'|translate}}\" formControlName=\"user_password\" (keyup)=\"onkeyUp($event.target.value)\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_password.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_password.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_password.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.PASSWORD_INVALID'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.CONPASSWORD' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.CONFIRM_PASSWORD'|translate}}\" formControlName=\"user_confirm_password\" (keyup)=\"onkeyUp($event.target.value)\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_confirm_password.errors }\">\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_confirm_password.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_confirm_password.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}\n                                        </p>\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_confirm_password.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.PASSWORD_INVALID'|translate}}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- verified -- Status -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.VERIFIED_STATUS' | translate }}*\n\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_verifiedStatus\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_verifiedStatus.errors }\">\n                                        <option value=\"0\">Pending</option>\n                                        <option value=\"1\">Verified</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_verifiedStatus.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_verifiedStatus.errors?.required\">\n                                            This field is required.</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.STATUS' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" formControlName=\"user_status\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm1.controls.user_status.errors }\">\n                                        <option value=\"ACTIVE\">Active</option>\n                                        <option value=\"INACTIVE\">InActive</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && addOperatorForm1.controls.user_status.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted && addOperatorForm1.controls.user_status.errors?.required\">\n                                            This field is required.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div>\n                            <agm-map [zoom]=\"5\" [latitude]=\"lat\" [longitude]=\"lng\" (mapReady)=\"onMapReady($event)\" id='agmMap'>\n                                <agm-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\">\n                                    <agm-circle *ngIf=\"markers[i+1]\" [latitude]=\"markers[i+1].lat\" [longitude]=\"markers[i+1].lng\" [radius]=\"markers[i+1].rad\"\n                                        [fillColor]=\"'red'\" [editable]=\"true\">\n                                    </agm-circle>\n                                </agm-marker>\n                            </agm-map>\n                        </div> -->\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"savePersonalDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n\n                </div>\n\n                <!-- ------------------------ tab2 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'operator' }\" *ngIf=\" navObj.link === 'operator'\" id=\"subscription_detail\" role=\"tabpanel\" aria-labelledby=\"subscription_detail-tab-1\">\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm2\" [formGroup]=\"addOperatorForm2\">\n\n                        <div class=\"form-group  row\">\n                            <!-- <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.DOCUMENT_IMAGE' | translate }}*\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                        <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                        </div>\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\"\n                                            data-original-title=\"Change avatar\">\n                                            <i class=\"fa fa-pen\"></i>\n                                            <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFile($event)\">\n                                        </label>\n                                        <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\"\n                                            data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                            <i class=\"fa fa-times\"></i>\n                                        </span>\n                                    </div>\n                                    <span class=\"form-text text-muted\">{{'OPERATOR.NOTES.FILE'|translate}}</span>\n                                </div>\n                            </div> -->\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-lg-4\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"col-lg-12\">\n                                        <label for=\"example-text-input\" class=\"col-form-label\">\n                                            {{'OPERATOR.LABEL.DOCUMENT_IMAGE' | translate }}*\n                                        </label>\n                                    </div>\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"kt-avatar\" id=\"kt_user_avatar_2\">\n                                            <div class=\"kt-avatar__holder\" [style.background-image]=\"'url('+url+')'\">\n                                            </div>\n                                            <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\" *ngIf=\"url && url=='../../../../../assets/media/newMedia/add.png'\" data-original-title=\"Change avatar\">\n                                                <i class=\"fa fa-pen\"></i>\n                                                <input type=\"file\" name=\"profile_avatar\" accept=\".png, .jpg, .jpeg\" (change)=\"onSelectFile($event)\">\n                                            </label>\n                                            <span class=\"kt-avatar__cancel\" *ngIf=\"url && url!='../../../../../assets/media/newMedia/add.png'\" style=\"display:flex;\" data-toggle=\"kt-tooltip\" title=\"\" (click)=\"imageRemove()\" data-original-title=\"Remove Image\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </span>\n                                        </div>\n                                        <span class=\"form-text text-muted\">{{'OPERATOR.NOTES.FILE'|translate}}</span>\n                                    </div>\n                                </div>\n                                <!-- operator name  -->\n                                <div class=\"form-group  row\">\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.OPERATOR_NAME' | translate }}*\n                                            </label>\n                                        </div>\n                                        <div class=\"col-lg-12\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.OPERATOR_NAME'|translate}}\" type=\"text\" formControlName=\"operatorName\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorName.errors }\">\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.operatorName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorName.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorName.errors?.minlength && !addOperatorForm2.controls.operatorName.errors?.pattern\" class=\"lbl-err\">{{'OPERATOR.VALIDATION.MIN_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorName.errors?.maxlength && !addOperatorForm2.controls.operatorName.errors?.pattern\" class=\"lbl-err\"> {{'OPERATOR.VALIDATION.MAX_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorName.errors?.pattern\">\n                                                    {{'OPERATOR.VALIDATION.OPERATORNAME_INVALID'|translate}} </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- Phone number-->\n                                <div class=\"form-group  row\">\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.MOBILENO' | translate }}*\n                                            </label>\n                                        </div>\n\n                                        <!-- <div class=\"col-lg-12\"> -->\n                                        <div class=\"mbl-sct d-flex\">\n                                            <div class=\"col-lg-4\">\n                                                <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ISD_CODE'|translate}}\" type=\"text\" formControlName=\"operatorIsdCode\" [ngClass]=\"{ 'is-invalid': submitted && addOperatorForm2.controls.operatorIsdCode.errors }\">\n                                            </div>\n                                            <div class=\"col-lg-8\">\n                                                <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}}\" type=\"text\" formControlName=\"operatorPhoneNumber\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors }\">\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors\" class=\"form-control-feedback\" style=\"color: red; margin-top: 10px;padding-left: 10px;\">\n                                            <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors?.required\">\n                                                {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                            <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorPhoneNumber.errors?.pattern\">\n                                                {{'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}} </p>\n                                        </div>\n                                        <!-- </div> -->\n                                    </div>\n                                </div>\n\n                                <!-- License --- -->\n                                <div class=\"form-group row\">\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.LICENCE' | translate }}*\n                                            </label>\n                                        </div>\n                                        <div class=\"col-lg-12\">\n                                            <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.LICENSE_NO'|translate}}\" type=\"text\" formControlName=\"operatorLicenseNumber\" [ngClass]=\"{ 'is-invalid': submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors }\">\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorLicenseNumber.errors?.minlength && !addOperatorForm2.controls.operatorLicenseNumber.errors?.pattern\" class=\"lbl-err\">{{'OPERATOR.VALIDATION.MIN_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"addOperatorForm2.controls.operatorLicenseNumber.errors?.maxlength && !addOperatorForm2.controls.operatorLicenseNumber.errors?.pattern\" class=\"lbl-err\">{{'OPERATOR.VALIDATION.MAX_CHARACTER'|translate}}</p>\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.operatorLicenseNumber.errors?.pattern\">\n                                                    {{'OPERATOR.VALIDATION.LICENSE_INVALID'|translate}} </p>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-lg-12\">\n                                        <div class=\"col-lg-12\">\n                                            <label for=\"example-text-input\" class=\"col-form-label\">\n                                                {{'OPERATOR.LABEL.CITY_NAME' | translate }}*\n                                            </label>\n                                        </div>\n                                        <div class=\"col-lg-12\" *ngIf=\"addOperatorForm2.value.user_cityId\">\n                                            <select class=\"form-control m-input m-login__form-input--last\" (change)=\"changeCountry()\" formControlName=\"user_cityId\" disabled>\n                                                <option value=\"\">{{'OPERATOR.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                                <option value=\"{{city._id}}\" *ngFor=\"let city of cityList\">\n                                                    {{city.city_name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.user_cityId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.user_cityId.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-lg-12\" *ngIf=\"!addOperatorForm2.value.user_cityId\">\n                                            <select class=\"form-control m-input m-login__form-input--last\" (change)=\"changeCountry()\" formControlName=\"user_cityId\">\n                                                <option value=\"\">{{'OPERATOR.PLACEHOLDERS.SELECT_CITY' | translate}}</option>\n                                                <option value=\"{{city._id}}\" *ngFor=\"let city of cityList\">\n                                                    {{city.city_name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted1 && addOperatorForm2.controls.user_cityId.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                                <p *ngIf=\"submitted1 && addOperatorForm2.controls.user_cityId.errors?.required\">\n                                                    {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-8\">\n                                <div *ngIf=\"addOperatorForm2.value.user_cityId\">\n                                    <agm-map [zoom]=\"5\" [latitude]=\"lat\" [longitude]=\"lng\" (mapReady)=\"onMapReady($event)\" id='agmMap'>\n                                        <agm-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [label]=\"m.label\">\n                                            <agm-circle *ngIf=\"markers[i+1]\" [latitude]=\"markers[i+1].lat\" [longitude]=\"markers[i+1].lng\" [radius]=\"markers[i+1].rad\" [fillColor]=\"'red'\" [editable]=\"true\">\n                                            </agm-circle>\n                                        </agm-marker>\n                                    </agm-map>\n\n                                    <button (click)='deleteSelected()'>Delete selected Shape</button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveOperatorDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n\n                <!-- ------------------------ tab3 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'bank' }\" *ngIf=\" navObj.link === 'bank'\" id=\"bank_detail\" role=\"tabpanel\" aria-labelledby=\"bank_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm3\" [formGroup]=\"addOperatorForm3\">\n\n                        <!--- bank name & account holder name-->\n                        <div class=\"form-group  row\">\n\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.BANK_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.BANK_NAME' | translate}}\" type=\"text\" formControlName=\"bankName\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.bankName.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.bankName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.bankName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.bankName.errors?.minlength && !addOperatorForm3.controls.bankName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.bankName.errors?.maxlength && !addOperatorForm3.controls.bankName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.bankName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INVALID_BANK_NAME' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ACCOUNT_HOLDER_NAME' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ACCOUNT_HOLDER_NAME' | translate}}\" type=\"text\" formControlName=\"accountHolderName\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.accountHolderName.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.accountHolderName.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountHolderName.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.accountHolderName.errors?.minlength && !addOperatorForm3.controls.accountHolderName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MIN_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"addOperatorForm3.controls.accountHolderName.errors?.maxlength && !addOperatorForm3.controls.accountHolderName.errors?.pattern\" class=\"lbl-err\">\n                                            {{'OPERATOR.VALIDATION.MAX_CHARACTER' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountHolderName.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INVALID_ACCONT_HOLDER' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!-- Account Number  institution number-->\n                        <div class=\"form-group  row\">\n\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ACCOUNT_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ACCOUNT_NUMBER' | translate}}\" type=\"text\" formControlName=\"accountNumber\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.accountNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.accountNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountNumber.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.accountNumber.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.ACCOUNTNO_INVALID' | translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.INSTITUTION_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.INSTITUTION_NUMBER' | translate}}\" type=\"text\" formControlName=\"institutionNumber\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.institutionNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.institutionNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.institutionNumber.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.institutionNumber.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.INSTITUTIONNO_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"form-group  row\">\n\n                            <div class=\"col-lg-6\">\n\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.TRANSIST_NUMBER' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.TRANSIST_NUMBER' | translate}}\" type=\"text\" formControlName=\"transitNumber\" [ngClass]=\"{ 'is-invalid': submitted2 && addOperatorForm3.controls.transitNumber.errors }\">\n                                    <div *ngIf=\"submitted2 && addOperatorForm3.controls.transitNumber.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.transitNumber.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted2 && addOperatorForm3.controls.transitNumber.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.TRANSITNO_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/driver-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveBankDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n\n                </div>\n\n                <!-- -----------------------Tab4 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'commission' }\" *ngIf=\" navObj.link === 'commission'\" id=\"commission_detail\" role=\"tabpanel\" aria-labelledby=\"commission_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm4\" [formGroup]=\"addOperatorForm4\">\n                        <!--- fee & frequency type-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.FEE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.FEE' | translate}}\" type=\"number\" formControlName=\"annualFee\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.annualFee.errors }\">\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.annualFee.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.annualFee.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.annualFee.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.FEE_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.FREQUENCY_TYPE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <select class=\"form-control m-input\" id=\"frequencyType\" formControlName=\"frequencyType\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.frequencyType.errors }\">\n                                        <option value=\"\">{{'OPERATOR.PLACEHOLDERS.FREQUENCY_TYPE' | translate}}</option>\n                                        <option value=\"{{type['value']['value']}}\" *ngFor=\"let type of operatorFrequencyType | keyvalue \">\n                                            {{type['value']['key']}}\n                                        </option>\n                                    </select>\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.frequencyType.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.frequencyType.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- commission and ride pre-authorised payment-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.COMMISSION' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.COMMISSION' | translate}}\" type=\"number\" formControlName=\"commissionPercentage\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.commissionPercentage.errors }\">\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.commissionPercentage.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.commissionPercentage.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.commissionPercentage.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.COMMISSION_INVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.RIDE_PRE_AUTHORISED_PAYMENT' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.RIDE_PRE_AUTHORISED_PAYMENT' | translate}}\" type=\"number\" formControlName=\"ridePreAuthorisedPayment\" [ngClass]=\"{ 'is-invalid': submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors }\">\n                                    <div *ngIf=\"submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted3 && addOperatorForm4.controls.ridePreAuthorisedPayment.errors?.pattern\">\n                                            {{'OPERATOR.VALIDATION.RIDE_PRE_AUTHORISED_PAYMENT_IINVALID' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"col-lg-12\">\n                                    <button type=\"button\" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3\">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit\" (click)=\"saveCommissionDetail()\" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right\">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n\n                <!-- -----------------------Tab5 -->\n                <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'invoice' }\" *ngIf=\" navObj.link === 'invoice'\" id=\"invoice_detail\" role=\"tabpanel\" aria-labelledby=\"invoice_detail-tab-1\">\n\n                    <form class=\"kt-form kt-form__group\" name=\"addOperatorForm5\" [formGroup]=\"addOperatorForm5\">\n\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ADDRESS1' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <textarea class=\"form-control m-textarea m-login__form-textarea--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ADDRESS1' | translate}}\" type=\"text\" formControlName=\"address1\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.address1.errors }\"></textarea>\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.address1.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.address1.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.ADDRESS2' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <textarea class=\"form-control m-textarea m-login__form-textarea--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.ADDRESS2' | translate}}\" type=\"text\" formControlName=\"address2\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.address2.errors }\"></textarea>\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.address2.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.address2.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--- postal code & province-->\n                        <div class=\"form-group  row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"col-lg-12\">\n                                    <label for=\"example-text-input\" class=\"col-form-label\">\n                                        {{'OPERATOR.LABEL.POSTAL_CODE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <input class=\"form-control m-input m-login__form-input--last\" placeholder=\"{{'OPERATOR.PLACEHOLDERS.POSTAL_CODE' | translate}}\" type=\"text\" formControlName=\"postalCode\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.postalCode.errors }\">\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors\" class=\"form-control-feedback\" style=\"color: red\">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.required\">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.maxlength && !addOperatorForm5.controls.postalCode.errors?.pattern \">\n                                            {{'OPERATOR.VALIDATION.POSTALCODE_CHARACTER_LENGTH' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.minlength && !addOperatorForm5.controls.postalCode.errors?.pattern \">\n                                            {{'OPERATOR.VALIDATION.POSTALCODE_CHARACTER_LENGTH' | translate }}\n                                        </p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.postalCode.errors?.pattern \">\n                                            {{'OPERATOR.VALIDATION.INVALID_POSTALCODE' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-6 \">\n                                <div class=\"col-lg-12 \">\n                                    <label for=\"example-text-input \" class=\"col-form-label \">\n                                        {{'OPERATOR.LABEL.PROVINCE' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12 \">\n                                    <input class=\"form-control m-input m-login__form-input--last \" placeholder=\"{{ 'OPERATOR.PLACEHOLDERS.PROVINCE' | translate}} \" type=\"text \" formControlName=\"province\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.province.errors\n                                            } \">\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.province.errors \" class=\"form-control-feedback \" style=\"color: red \">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.province.errors?.required \">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED' | translate }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- mobile no and email -->\n                        <div class=\"form-group row \">\n                            <div class=\"col-lg-6 \">\n                                <div class=\"col-lg-12 \">\n                                    <label for=\"example-text-input \" class=\"col-form-label \">\n                                        {{'OPERATOR.LABEL.MOBILENO' | translate }} *\n                                    </label>\n                                </div>\n                                <!-- <div class=\"col-lg-12 \"> -->\n                                <div class=\"mbl-sct d-flex \">\n                                    <div class=\"col-lg-3 \">\n                                        <input class=\"form-control m-input m-login__form-input--last \" placeholder=\"{{ 'OPERATOR.PLACEHOLDERS.ISD_CODE'|translate}} \" type=\"text \" formControlName=\"isdCode\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.isdCode.errors} \">\n                                    </div>\n                                    <div class=\"col-lg-9 \">\n                                        <input class=\"form-control m-input m-login__form-input--last \" placeholder=\"{{ 'OPERATOR.PLACEHOLDERS.MOBILE_NO'|translate}} \" type=\"text \" formControlName=\"contectNumber\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.contectNumber.errors } \">\n                                    </div>\n                                </div>\n                                <div *ngIf=\"submitted4 && addOperatorForm5.controls.contectNumber.errors \" class=\"form-control-feedback \" style=\"color: red; margin-top: 10px; padding-left: 10px; \">\n                                    <p *ngIf=\"submitted4 && addOperatorForm5.controls.contectNumber.errors?.required \">\n                                        {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                    <p *ngIf=\"submitted4 && addOperatorForm5.controls.contectNumber.errors?.pattern \">\n                                        {{'OPERATOR.VALIDATION.MOBILENO_INVALID'|translate}} </p>\n                                </div>\n                                <!-- </div> -->\n                            </div>\n\n                            <div class=\"col-lg-6 \">\n                                <div class=\"col-lg-12 \">\n                                    <label for=\"example-text-input \" class=\"col-form-label \">\n                                        {{'OPERATOR.LABEL.EMAIL' | translate }} *\n                                    </label>\n                                </div>\n                                <div class=\"col-lg-12 \">\n                                    <input class=\"form-control m-input m-login__form-input--last \" placeholder=\"{{ 'OPERATOR.PLACEHOLDERS.EMAIL'|translate}} \" type=\"text \" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted4 && addOperatorForm5.controls.email.errors\n                                            } \">\n                                    <div *ngIf=\"submitted4 && addOperatorForm5.controls.email.errors \" class=\"form-control-feedback \" style=\"color: red \">\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.email.errors?.required \">\n                                            {{'OPERATOR.VALIDATION.FIELD_REQUIRED'|translate}}</p>\n                                        <p *ngIf=\"submitted4 && addOperatorForm5.controls.email.errors?.pattern \">\n                                            {{'OPERATOR.VALIDATION.EMAIL_INVALID'|translate}} </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- buttons -->\n                        <div class=\"form-group row \">\n                            <div class=\"col-lg-12 \">\n                                <div class=\"col-lg-12 \">\n                                    <button type=\"button \" routerLink=\"/operator/operator-management/list\" (click)=\"back()\" class=\"btn btn-secondary btn-elevate btn-icon-sm mr-3 \">\n                                        {{'BUTTONS.CANCEL' | translate }}\n                                    </button>\n                                    <button type=\"submit \" (click)=\"saveInvoiceDetail() \" class=\"btn btn-brand btn-elevate btn-icon-sm bt-right \">\n                                        {{'BUTTONS.SUBMIT' | translate }}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            \n                 <!-- -----------------------Tab6 -->\n\n                \n                 <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'preferredLocation' }\" \n                 *ngIf=\" navObj.link === 'preferredLocation'\" id=\"preferredLocation_detail\"\n                  role=\"tabpanel\" aria-labelledby=\"preferredLocation_detail-tab-1\">\n                       \n              \n                  <div class=\"tab-pane fade\" [ngClass]=\"{ 'active show': navObj.link === 'preferredLocation' }\" \n                  *ngIf=\" navObj.link === 'preferredLocation'\" id=\"preferredLocation_detail\"\n                   role=\"tabpanel\" aria-labelledby=\"preferredLocation_detail-tab-1\">\n                  \n                   <!-- <a class=\"btn btn-hover-brand btn-icon btn-pill\" href=\"javascript:;\"\n                   id=\"btnEdit\" (click)=\"edit(preferredLocation._id)\" title=\"Edit details\">\n                   <i class=\"la la-edit\"></i>\n                   </a> -->\n                   <p style=\"margin: 0;\n                   padding: 0;\n                   font-size: 1.2rem;\n                   font-weight: 500;\n                   color: #48465b;\"> {{'OPERATOR.LABEL.PREFERRED_LOCATION_LIST' | translate}}</p>\n                    <div class=\"btn kt-portlet__head-label\" style=\"float: right;\">\n                        <a href=\"javascript:;\" (click)=\"addPreferredLocation()\" \n                            class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n                    </div>\n                      <!--  preferred location lists table starts -->\n                      <div class=\"table-responsive\">\n                        <table class=\"table table-striped- table-bordered table-hover\">\n                            <thead>\n                                <th>{{'OPERATOR.LABEL.SR_NO' | translate}}</th>\n                                <th>{{'OPERATOR.LABEL.LOCATION' | translate}}</th>\n                           <!-- <th>{{'OPERATOR.LABEL.VERIFSTATUS' | translate}}</th> -->\n                                <th>{{'OPERATOR.LABEL.ACTIONS' | translate}}</th>\n                            </thead>\n                            <tbody *ngIf=\"pereferredLocationlists\">\n                                <tr *ngFor=\"let preferredLocation of pereferredLocationlists; let i = index\">\n                                    <td>{{i + 1}}</td>\n                                    <td>{{preferredLocation.name}}</td>\n                                    <!-- <td>\n                                        <span data-status=\"ACTIVE\" data-toggle=\"modal\"\n                                            [style.color]=\"vehiclelist.verifiedStatus == 'Rejected' ? '#ffffff' : '#ffffff'\"\n                                            [style.background-color]=\"vehiclelist.verifiedStatus == 'Rejected' ? '#fd397a' : '#0abb87'\"\n                                            [style.border-radius]=\"vehiclelist.verifiedStatus == 'Rejected' ? '2rem' :  '2rem'\"\n                                            [style.height]=\"vehiclelist.verifiedStatus == 'Rejected' ? 'auto' :  'auto'\"\n                                            [style.width]=\"vehiclelist.verifiedStatus == 'Rejected' ? 'auto' :  'auto'\"\n                                            [style.padding]=\"vehiclelist.verifiedStatus == 'Rejected' ? '0.15rem 0.75rem' :  '0.15rem 0.75rem'\">{{vehiclelist.verifiedStatus}}</span>\n                                    </td> -->\n                                    <td>\n                                        <a class=\"btn btn-hover-brand btn-icon btn-pill\" href=\"javascript:;\"\n                                            id=\"btnEdit\" (click)=\"edit(preferredLocation._id)\" title=\"View details\">\n                                            <i class=\"la la-eye\"></i>\n                                        </a>\n                                        <a href=\"javascript:;\" id=\"btnDelete\" data-toggle=\"modal\"\n                                            data-target=\"#m_modal_6\" (click)=\"delete(preferredLocation._id)\"\n                                            class=\"btn btn-hover-danger btn-icon btn-pill\" title=\"Delete\">\n                                            <i class=\"la la-trash\"></i>\n                                        </a>\n\n                                        \n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"pereferredLocationlists == 0\">\n                                <tr>\n                                    <td></td>\n                                    <td class= \"txt-center\">{{'OPERATOR.LABEL.PREFERRED_LOCATION_NOT_ADDED' | translate}}</td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                      </div>\n                    <!-- preferred location lists table ends -->\n                </div> \n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/operator-list/operator-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/operator/operator-list/operator-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n    <div class=\"kt-portlet__head\">\n        <div class=\"kt-portlet__head-label\">\n            <h3 class=\"kt-portlet__head-title\">{{'OPERATOR.LIST' | translate }}</h3>\n        </div>\n        <div class=\"btn kt-portlet__head-label\" *ngIf=\"createPermission\">\n            <a href=\"javascript:;\" routerLink=\"/operator-management/add\" class=\"btn btn-brand btn-elevate btn-icon-sm\">\n                <i class=\"la la-plus\"></i>{{'BUTTONS.ADDNEW' | translate }}</a>\n        </div>\n    </div>\n    <div class=\"kt-portlet__body\">\n        <!--begin: Datatable -->\n        <div class=\"kt-section\">\n            <div class=\"scrlbl_table\">\n                <table class=\"table table-striped- table-bordered table-hover operator_mangmt_tbl table-checkable action_tbl\" id=\"kt_datatable\">\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/operator.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/operator/operator.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

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

/***/ "./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvb3BlcmF0b3IvYWRkLWVkaXQtb3BlcmF0b3IvYWRkLWVkaXQtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRUFBcUUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL29wZXJhdG9yL2FkZC1lZGl0LW9wZXJhdG9yL2FkZC1lZGl0LW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDEuMzI1cmVtKSBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddEditOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditOperatorComponent", function() { return AddEditOperatorComponent; });
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
/* harmony import */ var _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/operator.actions */ "./src/app/views/pages/operator/state/operator.actions.ts");
/* harmony import */ var _state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/operator.reducer */ "./src/app/views/pages/operator/state/operator.reducer.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../operator.service */ "./src/app/views/pages/operator/operator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_contants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../app-contants */ "./src/app-contants.ts");



















var AddEditOperatorComponent = /** @class */ (function () {
    function AddEditOperatorComponent(subheaderService, _formBuilder, toastr, router, localStorageService, store, titleService, dtr, translate, operatorService, cityService) {
        var _this = this;
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.localStorageService = localStorageService;
        this.store = store;
        this.dtr = dtr;
        this.translate = translate;
        this.operatorService = operatorService;
        this.cityService = cityService;
        this.navObj = { 'link': 'personal' };
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.submitted4 = false;
        this.countryList = [];
        this.submitStep = { step: '0' };
        this.userImageFile = '';
        this.imageFile = '';
        this.userUrl = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.cities = [];
        this.OPERATOR_CONST = [];
        this.operatorDetail = {};
        this.operatorFrequencyType = _app_contants__WEBPACK_IMPORTED_MODULE_18__["appConstants"].FREQUENCY_TYPE;
        this.zoom = 8;
        this.markers = [];
        this.pointList = [];
        this.finalPointArray = [];
        this.user_operator_polygon_array = [];
        this.selectedArea = 0;
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
        this.OPERATOR_CONST = this.translate.instant('OPERATOR');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.OPERATOR'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_10__["APPNAME"] + " | " + this.OPERATOR_CONST.MODULE_NAME);
    }
    AddEditOperatorComponent.prototype.clickLink = function (e) {
        this.navObj.link = e;
    };
    AddEditOperatorComponent.prototype.ngOnInit = function () {
        var self = this;
        this.buildAddOperatorForm1();
        this.buildAddOperatorForm2();
        this.buildAddOperatorForm3();
        this.buildAddOperatorForm4();
        this.buildAddOperatorForm5();
        this.changeCountry();
        // navigator.geolocation.getCurrentPosition(
        //   function (position) { // success cb
        //     if (position.coords.latitude != null) {
        //       self.lat = position.coords.latitude
        //       self.lng = position.coords.longitude
        //       self.markers.push({ lat: position.coords.latitude, lng: position.coords.longitude, draggable: false, rad: 0 })
        //     }
        //   }
        // );
    };
    AddEditOperatorComponent.prototype.back = function () {
        this.router.navigate(['/operator-management/list']);
    };
    AddEditOperatorComponent.prototype.onMapReady = function (map, callFrom) {
        var _this = this;
        if (callFrom != 'changeCountry') {
            this.map = map;
            this.initDrawingManager(map);
        }
        var city = this.cities.find(function (element) { return element._id == _this.addOperatorForm2.value.user_cityId; });
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
        }
    };
    //set selection to a shape
    AddEditOperatorComponent.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
    };
    AddEditOperatorComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    AddEditOperatorComponent.prototype.deleteSelected = function () {
        if (this.selectedShape) {
            this.updatePointList(this.selectedShape.getPath(), 'delete_selected', this.selectedShape.zIndex);
            this.selectedShape.setMap(null);
        }
    };
    AddEditOperatorComponent.prototype.updatePointList = function (path, type, index) {
        var pointList = [];
        var len = path.getLength();
        for (var i = 0; i < len; i++) {
            pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat]);
        }
        if (type == 'add_at') {
            this.user_operator_polygon_array.push({ loc: { type: "Polygon", coordinates: [pointList] }, name: "Polygon" + [index] });
        }
        else if ('delete_selected') {
            var deleteIndex = this.user_operator_polygon_array.findIndex(function (obj) {
                return obj.name == 'Polygon' + index;
            });
            this.user_operator_polygon_array.splice(deleteIndex, 1);
        }
        else {}
        this.selectedArea = google.maps.geometry.spherical.computeArea(path);
    };
    AddEditOperatorComponent.prototype.buildAddOperatorForm1 = function () {
        this.addOperatorForm1 = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength)]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]],
            user_confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]],
            user_verifiedStatus: ["0", []],
            user_status: ["ACTIVE", []],
            user_isdCode: ["+1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    AddEditOperatorComponent.prototype.buildAddOperatorForm2 = function () {
        this.addOperatorForm2 = this._formBuilder.group({
            operatorName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            operatorPhoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            operatorIsdCode: ["+1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            operatorLicenseNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].alphaNumericRegEx)]],
            user_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    AddEditOperatorComponent.prototype.buildAddOperatorForm3 = function () {
        this.addOperatorForm3 = this._formBuilder.group({
            bankName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            accountHolderName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            accountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].accountNumber)]],
            institutionNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].accountNumber)]],
            transitNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].accountNumber)]]
        });
    };
    AddEditOperatorComponent.prototype.buildAddOperatorForm4 = function () {
        this.addOperatorForm4 = this._formBuilder.group({
            annualFee: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].amount)]],
            frequencyType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            commissionPercentage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].percentageRegEx)]],
            ridePreAuthorisedPayment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].percentageRegEx)]]
        });
    };
    AddEditOperatorComponent.prototype.buildAddOperatorForm5 = function () {
        this.addOperatorForm5 = this._formBuilder.group({
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            postalCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].numericOnly), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)]],
            province: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            isdCode: ["+1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].accountNumber)]],
            contectNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].emailRegEx)]]
        });
    };
    AddEditOperatorComponent.prototype.onkeyUp = function (e) {
        var form = this.addOperatorForm1;
        if (e && e != '') {
            form.get('user_password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]);
            form.get('user_password').updateValueAndValidity();
            form.get('user_confirm_password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]);
            form.get('user_confirm_password').updateValueAndValidity();
        }
        else {
            form.get('user_password').clearValidators();
            form.get('user_password').updateValueAndValidity();
            form.get('user_confirm_password').clearValidators();
            form.get('user_confirm_password').updateValueAndValidity();
        }
    };
    AddEditOperatorComponent.prototype.onSelectUserImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.userImageFile = event.target.files[0];
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.userUrl = reader_1.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
            }
        }
    };
    AddEditOperatorComponent.prototype.removeUserImage = function () {
        this.userUrl = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.userImageFile = '';
    };
    AddEditOperatorComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
                _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
                this.imageFile = event.target.files[0];
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(event.target.files[0]);
                reader_2.onload = function () {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    _this.url = reader_2.result;
                    _this.dtr.detectChanges();
                };
            }
            else {
                this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
            }
        }
    };
    AddEditOperatorComponent.prototype.imageRemove = function () {
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.imageFile = '';
    };
    AddEditOperatorComponent.prototype.changeCountry = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onMapReady(this.map, 'changeCountry');
                        countryId = { city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry };
                        return [4 /*yield*/, this.cityService
                                .getCityListOperetor(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log(data);
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cities = _b.sent();
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
    AddEditOperatorComponent.prototype.savePersonalDetail = function () {
        this.submitted = true;
        if (this.addOperatorForm1.valid) {
            if (this.userImageFile == "" || this.userImageFile == _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO || this.userImageFile == undefined) {
                this.submitted = false;
                this.toastr.error(this.translate.instant('OPERATOR.PLACEHOLDERS.USER_IMAGE'));
            }
            else {
                var res = this.addOperatorForm1.value;
                if (res.user_password && res.user_password != '' && res.user_confirm_password && res.user_confirm_password != '') {
                    if ((res.user_password === res.user_confirm_password)) {
                        this.saveData('1');
                    }
                    else {
                        this.toastr.error('Password & Confirm Password Should be Match');
                    }
                }
                else {
                    this.toastr.error('Password & Confirm Password Required');
                }
            }
        }
        else if (!this.addOperatorForm1.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    AddEditOperatorComponent.prototype.saveOperatorDetail = function () {
        this.submitted1 = true;
        if (this.addOperatorForm2.valid) {
            if (this.imageFile == "" || this.imageFile == _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO || this.imageFile == undefined) {
                this.submitted = false;
                this.toastr.error(this.translate.instant('OPERATOR.PLACEHOLDERS.FDD_IMAGE'));
            }
            else {
                this.saveData('2');
            }
        }
        else if (!this.addOperatorForm2.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    AddEditOperatorComponent.prototype.saveBankDetail = function () {
        this.submitted2 = true;
        if (this.addOperatorForm3.valid) {
            this.saveData('3');
        }
        else if (!this.addOperatorForm3.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    AddEditOperatorComponent.prototype.saveCommissionDetail = function () {
        this.submitted3 = true;
        if (this.addOperatorForm4.valid) {
            this.saveData('4');
        }
        else if (!this.addOperatorForm4.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    AddEditOperatorComponent.prototype.saveInvoiceDetail = function () {
        this.submitted4 = true;
        if (this.addOperatorForm5.valid) {
            this.saveData('5');
        }
        else if (!this.addOperatorForm5.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    AddEditOperatorComponent.prototype.saveData = function (step) {
        var _this = this;
        if (step === '1') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var res = this.addOperatorForm1.value;
            var fd = new FormData();
            fd.append('user_firstName', res.user_firstName);
            fd.append('user_lastName', res.user_lastName);
            fd.append('user_userName', res.user_userName);
            fd.append('user_email', res.user_email);
            fd.append('user_phoneNumber', res.user_phoneNumber);
            fd.append('user_isdCode', res.user_isdCode);
            fd.append('user_verifiedStatus', res.user_verifiedStatus);
            fd.append('user_status', res.user_status);
            if (res.user_password && res.user_password != '') {
                fd.append('user_password', res.user_password);
            }
            if (this.userImageFile) {
                fd.append('user_profileImage', this.userImageFile);
            }
            delete this.addOperatorForm1.value.user_confirm_password;
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["AddOperator"](fd));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        var result = data['data'];
                        _this.toastr.success(data['message']);
                        _this.submitStep['step'] = step;
                        _this.navObj.link = 'operator';
                        _this.id = result._id;
                        _this.stateSubscription.unsubscribe();
                        _this.submitted = false;
                        if (_this.dtr && !_this.dtr.destroyed) {
                            _this.dtr.detectChanges();
                        }
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        _this.stateSubscription.unsubscribe();
                        _this.toastr.error(data['message']);
                    }
                }
            });
        }
        else if (step == '2') {
            var res = this.addOperatorForm2.value;
            var fd = new FormData();
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            fd.append('operatorName', res.operatorName);
            fd.append('operatorPhoneNumber', res.operatorPhoneNumber);
            fd.append('operatorIsdCode', res.operatorIsdCode);
            fd.append('operatorLicenseNumber', res.operatorLicenseNumber);
            fd.append('user_countryId', _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry);
            fd.append('user_cityId', res.user_cityId);
            fd.append('user_progress', '2');
            fd.append('user_operator_polygon_array', JSON.stringify(this.user_operator_polygon_array));
            if (this.imageFile) {
                fd.append('operatorFddDocImage', this.imageFile);
            }
            var Obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorProfile"](Obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        var result = data['data'];
                        _this.toastr.success(data['message']);
                        _this.submitStep['step'] = step;
                        _this.navObj.link = 'bank';
                        _this.id = result._id;
                        _this.stateSubscription.unsubscribe();
                        _this.submitted1 = false;
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        _this.stateSubscription.unsubscribe();
                        _this.toastr.error(data['message']);
                    }
                }
            });
        }
        else if (step === '3') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var form = this.addOperatorForm3.value;
            var obj = {
                id: this.id,
                data: {
                    bankName: form.bankName,
                    accountHolderName: form.accountHolderName,
                    accountNumber: form.accountNumber,
                    institutionNumber: form.institutionNumber,
                    transitNumber: form.transitNumber
                }
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorBankDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.success(data['message']);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'commission';
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
        else if (step === '4') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var form = this.addOperatorForm4.value;
            var obj = {
                id: this.id,
                data: {
                    annualFee: form.annualFee,
                    frequencyType: form.frequencyType,
                    commissionPercentage: form.commissionPercentage,
                    ridePreAuthorisedPayment: form.ridePreAuthorisedPayment
                }
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorCommissionDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.success(data['message']);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'invoice';
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
        else if (step === '5') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var form = this.addOperatorForm5.value;
            var obj = {
                id: this.id,
                data: {
                    address1: form.address1,
                    address2: form.address2,
                    postalCode: form.postalCode,
                    province: form.province,
                    isdCode: form.isdCode,
                    contectNumber: form.contectNumber,
                    email: form.email
                }
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorInvoiceDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.success(data['message']);
                            this.submitStep['step'] = step;
                            this.router.navigate(['/operator-management/list']);
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
    AddEditOperatorComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _operator_service__WEBPACK_IMPORTED_MODULE_14__["OperatorService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"] }
    ]; };
    AddEditOperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-edit-operator',
            template: __webpack_require__(/*! raw-loader!./add-edit-operator.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.html"),
            styles: ["\n    agm-map {\n      height: 500px;\n    }\n  ", __webpack_require__(/*! ./add-edit-operator.component.scss */ "./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _operator_service__WEBPACK_IMPORTED_MODULE_14__["OperatorService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"]])
    ], AddEditOperatorComponent);
    return AddEditOperatorComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl-err {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvb3BlcmF0b3IvYWRkLWVkaXQtcHJlZmVycmVkLWxvY2F0aW9uL2FkZC1lZGl0LXByZWZlcnJlZC1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL29wZXJhdG9yL2FkZC1lZGl0LXByZWZlcnJlZC1sb2NhdGlvbi9hZGQtZWRpdC1wcmVmZXJyZWQtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGJsLWVycntcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddPreferredLocationComponent, EditPreferredLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPreferredLocationComponent", function() { return AddPreferredLocationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPreferredLocationComponent", function() { return EditPreferredLocationComponent; });
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _state_operator_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/operator.actions */ "./src/app/views/pages/operator/state/operator.actions.ts");
/* harmony import */ var _state_operator_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../state/operator.reducer */ "./src/app/views/pages/operator/state/operator.reducer.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../operator.service */ "./src/app/views/pages/operator/operator.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");



















var AddPreferredLocationComponent = /** @class */ (function () {
    function AddPreferredLocationComponent(subheaderService, _formBuilder, router, localStorageService, toastr, store, titleService, dtr, cityService, translate, operatorService, _route) {
        var _this = this;
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.dtr = dtr;
        this.cityService = cityService;
        this.translate = translate;
        this.operatorService = operatorService;
        this._route = _route;
        this.isAdd = true;
        this.submitted = false;
        this.elements = false;
        this.zoom = 8;
        this.markers = [];
        this.pointList = [];
        this.finalPointArray = [];
        this.user_operator_preferred_location_polygon_array = [];
        this.selectedArea = 0;
        this.cities = [];
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
        this.PREFERRED_LOCATION_CONST = this.translate.instant('PREFERRED_LOCATION');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.PREFERRED_LOCATION'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.PREFERRED_LOCATION_CONST.MODULE_NAME);
    }
    AddPreferredLocationComponent.prototype.ngOnInit = function () {
        this.buildAddEditPreferredLocationForm();
        this.operatorId = this._route.snapshot.params['id'];
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__;
        this.getOperatorById();
        this.changeCountry();
        // this.initialize();
    };
    AddPreferredLocationComponent.prototype.buildAddEditPreferredLocationForm = function () {
        this.addEditPreferredLocationForm = this._formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
            // location: ["", [Validators.required, Validators.minLength(validataion.nameMinLength), Validators.maxLength(validataion.nameMaxLength)]],
            user_operator_preferred_location_polygon_array: []
        });
    };
    AddPreferredLocationComponent.prototype.getOperatorById = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_13__["LoadOperator"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        this.stateSubscription.unsubscribe();
                        if (result.user_operatorInfo && result.user_operatorInfo != undefined) {
                            if (result.user_cityId) {
                                this.cityId = result.user_cityId;
                            }
                            else {
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        this.toastr.error(data['message']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    // initialize() {
    //   const self = this
    //   var mapOptions = {
    //     center: new google.maps.LatLng(-33.8688, 151.2195),
    //     zoom: 13,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   var map = new google.maps.Map(document.getElementById('map_canvas'),
    //     mapOptions);
    //   var input = document.getElementById('searchTextField');
    //   var autocomplete = new google.maps.places.Autocomplete(input);
    //   autocomplete.bindTo('bounds', map);
    //   google.maps.event.addListener(autocomplete, 'place_changed', function () {
    //     var place = autocomplete.getPlace();
    //     self.location = place.name
    //     self.lat = place.geometry.location.lat()
    //     self.long = place.geometry.location.lng()
    //     self.addEditPreferredLocationForm.patchValue({
    //       location:self.location,
    //       lat: self.lat,
    //       long: self.long
    //     })
    //   });
    // }
    AddPreferredLocationComponent.prototype.cancel = function () {
        this.operatorId = this._route.snapshot.params['id'];
        this.router.navigate(["/operator-management/edit/" + this.operatorId]);
        this.operatorService.updatePrefLoc('updatePrefLoc');
    };
    AddPreferredLocationComponent.prototype.changeCountry = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onMapReady(this.map, 'changeCountry');
                        countryId = { city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].webDefaultCountry };
                        return [4 /*yield*/, this.cityService
                                .getCountryCities(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log(data);
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cities = _b.sent();
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
    AddPreferredLocationComponent.prototype.onMapReady = function (map, callFrom) {
        var _this = this;
        if (callFrom != 'changeCountry') {
            this.map = map;
            this.initDrawingManager(map);
        }
        var city = this.cities.find(function (element) { return element._id == _this.cityId; });
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
        }
    };
    AddPreferredLocationComponent.prototype.updatePointList = function (path, type, index) {
        var self = this;
        var pointList = [];
        var len = path.getLength();
        for (var i = 0; i < len; i++) {
            pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat]);
        }
        if (type == 'add_at') {
            self.user_operator_preferred_location_polygon_array.push({ loc: { type: "Polygon", coordinates: [pointList] }, name: self.addEditPreferredLocationForm.value.name });
        }
        else if ('delete_selected') {
            var deleteIndex = self.user_operator_preferred_location_polygon_array.findIndex(function (obj) {
                return obj.name == self.addEditPreferredLocationForm.value.name;
            });
            self.user_operator_preferred_location_polygon_array.splice(deleteIndex, 1);
        }
        else {}
        self.selectedArea = google.maps.geometry.spherical.computeArea(path);
    };
    //set selection to a shape
    AddPreferredLocationComponent.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
    };
    AddPreferredLocationComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    AddPreferredLocationComponent.prototype.deleteSelected = function () {
        if (this.selectedShape) {
            this.updatePointList(this.selectedShape.getPath(), 'delete_selected', this.selectedShape.zIndex);
            this.selectedShape.setMap(null);
        }
    };
    AddPreferredLocationComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, fd, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.operatorId = this._route.snapshot.params['id'];
                this.submitted = true;
                if (this.user_operator_preferred_location_polygon_array.length > 0) {
                    this.user_operator_preferred_location_polygon_array[0]['name'] = this.addEditPreferredLocationForm.value.name ? this.addEditPreferredLocationForm.value.name : "";
                }
                // console.log("addEditPreferredLocationForm--> 8", this.addEditPreferredLocationForm)
                if (this.addEditPreferredLocationForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditPreferredLocationForm.value;
                    fd = new FormData();
                    // fd.append('location', form.location);
                    fd.append('user_operator_preferred_location_polygon_array', JSON.stringify(this.user_operator_preferred_location_polygon_array));
                    obj = {
                        id: this.operatorId,
                        data: fd
                    };
                    this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_13__["AddPreferredLocation"](obj));
                    this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) {
                        if (data && data != undefined) {
                            if (data['code'] == 200) {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.success(data['message']);
                                _this.stateSubscription.unsubscribe();
                                _this.router.navigate(["/operator-management/edit/" + _this.operatorId]);
                                _this.operatorService.updatePrefLoc('updatePrefLoc');
                            }
                            else {
                                _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                _this.toastr.error(data['message']);
                                _this.stateSubscription.unsubscribe();
                            }
                        }
                    });
                }
                else if (!this.addEditPreferredLocationForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    AddPreferredLocationComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] },
        { type: _operator_service__WEBPACK_IMPORTED_MODULE_17__["OperatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AddPreferredLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-preferred-location',
            template: __webpack_require__(/*! raw-loader!./add-edit-preferred-location.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.html"),
            styles: ["\n  agm-map {\n    height: 500px;\n  }\n", __webpack_require__(/*! ./add-edit-preferred-location.component.scss */ "./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"],
            _operator_service__WEBPACK_IMPORTED_MODULE_17__["OperatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddPreferredLocationComponent);
    return AddPreferredLocationComponent;
}());

var EditPreferredLocationComponent = /** @class */ (function () {
    function EditPreferredLocationComponent(subheaderService, _formBuilder, router, _route, localStorageService, toastr, store, titleService, dtr, cityService, translate, operatorService) {
        var _this = this;
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.store = store;
        this.dtr = dtr;
        this.cityService = cityService;
        this.translate = translate;
        this.operatorService = operatorService;
        this.isAdd = false;
        this.submitted = false;
        this.elements = false;
        this.operatorDetail = {};
        this.prefLocDetail = [];
        this.cityList = [];
        this.user_operator_preferred_location_polygon_array = [];
        this.selectedArea = 0;
        this.user_operator_polygon_array = [];
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
        this.PREFERRED_LOCATION_CONST = this.translate.instant('PREFERRED_LOCATION');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.PREFERRED_LOCATION'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"] + " | " + this.PREFERRED_LOCATION_CONST.MODULE_NAME);
    }
    EditPreferredLocationComponent.prototype.ngOnInit = function () {
        this.buildAddEditPreferredLocationForm();
        // this.initialize();
        this.getPreferredLocationDetails();
        this.getOperatorById();
        this.changeCountry();
        this.id = this._route.snapshot.params['id'];
    };
    EditPreferredLocationComponent.prototype.getOperatorById = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_13__["LoadOperator"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_14__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        this.operatorDetail = data['data'];
                        // this.stateSubscription.unsubscribe();
                        if (result.user_operatorInfo && result.user_operatorInfo != undefined) {
                            if (result.user_cityId) {
                                this.cityId = result.user_cityId;
                            }
                            else {
                            }
                            // this.stateSubscription.unsubscribe();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        this.toastr.error(data['message']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditPreferredLocationComponent.prototype.getPreferredLocationDetails = function () {
        var _this = this;
        this.operatorId = this._route.snapshot.params['id'];
        this.preferenceLocationId = this._route.snapshot.params['preferred-locationId']; // put same as module file on 78 
        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_13__["LoadPreferredLocation"](this.id));
        this.operatorService.getPreferredLocationById(this.operatorId, this.preferenceLocationId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 3];
                        if (!(data['code'] == 200)) return [3 /*break*/, 2];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        this.prefLocDetail = result;
                        fd = {
                            'name': result[0].name != null && result[0].name != undefined ? result[0].name : "",
                        };
                        this.addEditPreferredLocationForm.patchValue(fd);
                        return [3 /*break*/, 3];
                    case 2:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    EditPreferredLocationComponent.prototype.onMapReady = function (map, callFrom) {
        var _this = this;
        if (callFrom != 'changeCountry') {
            this.map = map;
            this.initDrawingManager(map);
        }
        // this.map = map
        // this.initDrawingManager(map);
        // let polygonArray = []
        var city = this.cityList.find(function (element) { return element._id == _this.cityId; });
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
        }
        var self = this;
        if (self.prefLocDetail) {
            self.prefLocDetail.map(function (polygon) {
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
                    self.setSelection(shape);
                }
            });
        }
    };
    //set selection to a shape
    EditPreferredLocationComponent.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
    };
    EditPreferredLocationComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    EditPreferredLocationComponent.prototype.deleteSelected = function () {
        if (this.selectedShape) {
            this.updatePointList(this.selectedShape.getPath(), 'delete_old_selected', this.selectedShape.name);
            this.selectedShape.setMap(null);
        }
    };
    EditPreferredLocationComponent.prototype.updatePointList = function (path, type, index) {
        var self = this;
        var pointList = [];
        self.prefLocDetail[index].loc.coordinates[0] = pointList;
        var len = path.getLength();
        for (var i = 0; i < len; i++) {
            pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat]);
        }
        if (type == 'add_at') {
            var obj = {};
            obj['loc'] = { type: "Polygon", coordinates: [pointList] };
            obj['name'] = "Polygon" + (Number([index]) + Number(this.operatorDetail.user_operator_preferred_location_polygon_array.length));
            self.user_operator_preferred_location_polygon_array = Object.assign([], this.user_operator_preferred_location_polygon_array);
            self.user_operator_preferred_location_polygon_array.push(obj);
        }
        else if (type == 'delete_selected') {
            var deleteIndex = self.user_operator_preferred_location_polygon_array.findIndex(function (obj) {
                return obj.name == 'Polygon' + index;
            });
            self.user_operator_preferred_location_polygon_array.splice(deleteIndex, 1);
        }
        else if (type == 'delete_old_selected') {
            self.user_operator_preferred_location_polygon_array = self.user_operator_preferred_location_polygon_array.filter(function (item) {
                return item.name !== index;
            });
        }
        else {
            self.prefLocDetail[index].loc.coordinates[0] = pointList;
        }
        this.selectedArea = google.maps.geometry.spherical.computeArea(path);
    };
    EditPreferredLocationComponent.prototype.changeCountry = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onMapReady(this.map, 'changeCountry');
                        countryId = { city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].webDefaultCountry };
                        return [4 /*yield*/, this.cityService
                                .getCountryCities(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cityList = _b.sent();
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
    EditPreferredLocationComponent.prototype.buildAddEditPreferredLocationForm = function () {
        this.addEditPreferredLocationForm = this._formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_9__["validataion"].nameMaxLength)]],
        });
    };
    // initialize() {
    //   const self = this
    //   var mapOptions = {
    //     center: new google.maps.LatLng(-33.8688, 151.2195),
    //     zoom: 13,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   var map = new google.maps.Map(document.getElementById('map_canvas'),
    //     mapOptions);
    //   var input = document.getElementById('searchTextField');
    //   var autocomplete = new google.maps.places.Autocomplete(input);
    //   autocomplete.bindTo('bounds', map);
    //   google.maps.event.addListener(autocomplete, 'place_changed', function () {
    //     var place = autocomplete.getPlace();
    //     self.location = place.name
    //     self.lat = place.geometry.location.lat()
    //     self.long = place.geometry.location.lng()
    //     self.addEditPreferredLocationForm.patchValue({
    //       location:self.location,
    //       lat: self.lat,
    //       long: self.long
    //     })
    //   });
    // }
    EditPreferredLocationComponent.prototype.cancel = function () {
        this.operatorId = this._route.snapshot.params['id'];
        this.router.navigate(["/operator-management/edit/" + this.operatorId]);
        this.operatorService.updatePrefLoc('updatePrefLoc');
    };
    EditPreferredLocationComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, fd, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.operatorId = this._route.snapshot.params['id'];
                this.preferenceLocationId = this._route.snapshot.params['preferred-locationId']; // put same as module file on 78 
                this.submitted = true;
                if (this.addEditPreferredLocationForm.valid) {
                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(true);
                    form = this.addEditPreferredLocationForm.value;
                    fd = new FormData();
                    fd.append('location', form.location);
                    fd.append('lat', form.lat);
                    fd.append('long', form.long);
                    fd.append('id', this.preferenceLocationId);
                    obj = {
                        id: this.id,
                        data: fd
                    };
                    this.operatorService.updatePreferredLocation(this.operatorId, obj.data).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var result;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (data && data != undefined) {
                                if (data['code'] == 200) {
                                    result = data['data'];
                                    this.id = result._id;
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    this.toastr.success(data['message']);
                                    this.router.navigate(["/operator-management/edit/" + this.operatorId]);
                                    // this.stateSubscription.unsubscribe();
                                }
                                else {
                                    _helper_helper__WEBPACK_IMPORTED_MODULE_11__["Helpers"].setLoading(false);
                                    this.stateSubscription.unsubscribe();
                                    this.toastr.error(data['message']);
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                else if (!this.addEditPreferredLocationForm.valid) {
                    this.toastr.error('All Tabs Field is Required');
                }
                return [2 /*return*/];
            });
        });
    };
    EditPreferredLocationComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] },
        { type: _operator_service__WEBPACK_IMPORTED_MODULE_17__["OperatorService"] }
    ]; };
    EditPreferredLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-preferred-location',
            template: __webpack_require__(/*! raw-loader!./add-edit-preferred-location.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.html"),
            styles: ["\n  agm-map {\n    height: 500px;\n  }\n", __webpack_require__(/*! ./add-edit-preferred-location.component.scss */ "./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_18__["CityService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"],
            _operator_service__WEBPACK_IMPORTED_MODULE_17__["OperatorService"]])
    ], EditPreferredLocationComponent);
    return EditPreferredLocationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/edit-operator/edit-operator.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/operator/edit-operator/edit-operator.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".was-validated .form-control:invalid, .form-control.is-invalid {\n  background-position: right calc(0.375em + 1.325rem) center !important; }\n\n.txt-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvb3BlcmF0b3IvZWRpdC1vcGVyYXRvci9lZGl0LW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUVBQXFFLEVBQUE7O0FBRXpFO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9vcGVyYXRvci9lZGl0LW9wZXJhdG9yL2VkaXQtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMS4zMjVyZW0pIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnR4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/operator/edit-operator/edit-operator.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/operator/edit-operator/edit-operator.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOperatorComponent", function() { return EditOperatorComponent; });
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
/* harmony import */ var _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/operator.actions */ "./src/app/views/pages/operator/state/operator.actions.ts");
/* harmony import */ var _state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/operator.reducer */ "./src/app/views/pages/operator/state/operator.reducer.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../operator.service */ "./src/app/views/pages/operator/operator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../city/city.service */ "./src/app/views/pages/city/city.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_contants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../app-contants */ "./src/app-contants.ts");



















var EditOperatorComponent = /** @class */ (function () {
    function EditOperatorComponent(subheaderService, _formBuilder, router, toastr, _route, localStorageService, store, titleService, dtr, translate, operatorService, cityService) {
        var _this = this;
        this.subheaderService = subheaderService;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.localStorageService = localStorageService;
        this.store = store;
        this.dtr = dtr;
        this.translate = translate;
        this.operatorService = operatorService;
        this.cityService = cityService;
        this.navObj = { 'link': 'personal' };
        // addOperatorForm6: FormGroup;
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.submitted4 = false;
        this.submitted5 = false;
        this.countryList = [];
        this.submitStep = { step: '0' };
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.url1 = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.cityList = [];
        this.OPERATOR_CONST = [];
        this.operatorDetail = {};
        this.operatorFrequencyType = _app_contants__WEBPACK_IMPORTED_MODULE_18__["appConstants"].FREQUENCY_TYPE;
        this.user_operator_polygon_array = [];
        this.selectedArea = 0;
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
        this.OPERATOR_CONST = this.translate.instant('OPERATOR');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.OPERATOR'));
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_10__["APPNAME"] + " | " + this.OPERATOR_CONST.MODULE_NAME);
    }
    EditOperatorComponent.prototype.clickLink = function (e) {
        this.navObj.link = e;
    };
    EditOperatorComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscription = this.operatorService.isUpdatePrefLoc.subscribe(function (data) {
                            if (data) {
                                _this.operatorService.updatePrefLoc('');
                                if (data === 'updatePrefLoc') {
                                    _this.clickLink('preferredLocation');
                                    if (_this.dtr && !_this.dtr.destroyed) {
                                        _this.dtr.detectChanges();
                                    }
                                }
                            }
                        });
                        return [4 /*yield*/, this.buildAddOperatorForm1()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddOperatorForm2()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddOperatorForm3()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddOperatorForm4()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.buildAddOperatorForm5()];
                    case 5:
                        _a.sent();
                        // await this.buildAddOperatorForm6();
                        return [4 /*yield*/, this.getOperatorById()];
                    case 6:
                        // await this.buildAddOperatorForm6();
                        _a.sent();
                        return [4 /*yield*/, this.changeCountry(status)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditOperatorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditOperatorComponent.prototype.back = function () {
        this.router.navigate(['/operator-management/list']);
    };
    EditOperatorComponent.prototype.onMapReady = function (map) {
        var _this = this;
        // this.getOperatorById()
        this.map = map;
        this.initDrawingManager(map);
        // let polygonArray = []
        var city = this.cityList.find(function (element) { return element._id == _this.addOperatorForm2.value.user_cityId; });
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
        }
        var self = this;
        this.user_operator_polygon_array.map(function (polygon) {
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
                self.setSelection(shape);
            }
        });
    };
    //set selection to a shape
    EditOperatorComponent.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
    };
    EditOperatorComponent.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    // ----- for preferredLocation edit -----
    EditOperatorComponent.prototype.edit = function (id) {
        this.router.navigate(["/operator-management/" + this.id + "/preferred-location/edit/" + id]);
    };
    EditOperatorComponent.prototype.addPreferredLocation = function () {
        this.id = this._route.snapshot.params['id'];
        this.router.navigate(["/operator-management/" + this.id + "/preferred-location/add/"]);
    };
    EditOperatorComponent.prototype.delete = function (preferredLocationId) {
        var _this = this;
        this.operatorId = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.operatorService.deletePreferredLocationById(this.operatorId, preferredLocationId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        this.toastr.success("Preferred location deleted successfully");
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    //--------------------  
    EditOperatorComponent.prototype.deleteSelected = function () {
        if (this.selectedShape) {
            this.updatePointList(this.selectedShape.getPath(), 'delete_old_selected', this.selectedShape.name);
            this.selectedShape.setMap(null);
        }
    };
    EditOperatorComponent.prototype.updatePointList = function (path, type, index) {
        var self = this;
        var pointList = [];
        var len = path.getLength();
        for (var i = 0; i < len; i++) {
            pointList.push([path.getAt(i).toJSON().lng, path.getAt(i).toJSON().lat]);
        }
        if (type == 'add_at') {
            var obj = {};
            obj['loc'] = { type: "Polygon", coordinates: [pointList] };
            obj['name'] = "Polygon" + (Number([index]) + Number(this.operatorDetail.user_operator_polygon_array.length));
            self.user_operator_polygon_array = Object.assign([], this.user_operator_polygon_array);
            self.user_operator_polygon_array.push(obj);
        }
        else if (type == 'delete_selected') {
            var deleteIndex = self.user_operator_polygon_array.findIndex(function (obj) {
                return obj.name == 'Polygon' + index;
            });
            self.user_operator_polygon_array.splice(deleteIndex, 1);
        }
        else if (type == 'delete_old_selected') {
            self.user_operator_polygon_array = self.user_operator_polygon_array.filter(function (item) {
                return item.name !== index;
            });
        }
        else {
            self.user_operator_polygon_array[index].loc.coordinates[0] = pointList;
        }
        this.selectedArea = google.maps.geometry.spherical.computeArea(path);
    };
    EditOperatorComponent.prototype.buildAddOperatorForm1 = function () {
        this.addOperatorForm1 = this._formBuilder.group({
            user_firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            user_userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength)]],
            user_email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].emailRegEx)]],
            user_phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]],
            user_confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]],
            user_verifiedStatus: ["0", []],
            user_status: ["ACTIVE", []],
            user_isdCode: ["+1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EditOperatorComponent.prototype.buildAddOperatorForm2 = function () {
        this.addOperatorForm2 = this._formBuilder.group({
            operatorName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            operatorPhoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            operatorIsdCode: ["+1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            operatorLicenseNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].alphaNumericRegEx)]],
            // operatorCountry: ["", [Validators.required]],
            user_cityId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    EditOperatorComponent.prototype.buildAddOperatorForm3 = function () {
        this.addOperatorForm3 = this._formBuilder.group({
            bankName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            accountHolderName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMinLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameMaxLength), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].nameRegEx)]],
            accountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].alphaNumericRegEx)]],
            institutionNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].alphaNumericRegEx)]],
            transitNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].alphaNumericRegEx)]]
        });
    };
    EditOperatorComponent.prototype.buildAddOperatorForm4 = function () {
        this.addOperatorForm4 = this._formBuilder.group({
            annualFee: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].amount)]],
            frequencyType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            commissionPercentage: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].percentageRegEx)]],
            ridePreAuthorisedPayment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].percentageRegEx)]]
        });
    };
    EditOperatorComponent.prototype.buildAddOperatorForm5 = function () {
        this.addOperatorForm5 = this._formBuilder.group({
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            // Validators.minLength(9)
            postalCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].numericOnly), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)]],
            province: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            isdCode: ["+1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contectNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].phoneRegEx)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].emailRegEx)]]
        });
    };
    // buildAddOperatorForm6() {
    //   this.addOperatorForm6 = this._formBuilder.group({
    //     address1: ["", [Validators.required]]
    //   });
    // }
    EditOperatorComponent.prototype.onkeyUp = function (e) {
        var form = this.addOperatorForm1;
        if (e && e != '') {
            form.get('user_password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]);
            form.get('user_password').updateValueAndValidity();
            form.get('user_confirm_password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_helper_regular_expression__WEBPACK_IMPORTED_MODULE_8__["validataion"].passwordRegEx)]);
            form.get('user_confirm_password').updateValueAndValidity();
        }
        else {
            form.get('user_password').clearValidators();
            form.get('user_password').updateValueAndValidity();
            form.get('user_confirm_password').clearValidators();
            form.get('user_confirm_password').updateValueAndValidity();
        }
    };
    EditOperatorComponent.prototype.getAllPreferredLocationsList = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id']; // operator id
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.operatorService.getALLPreferredLocationList(this.id).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 6];
                        if (!(data['code'] == 200)) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, data['data']];
                    case 1:
                        if (!(_c.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, data['data']];
                    case 2:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _b = 0;
                        _c.label = 4;
                    case 4:
                        _a.pereferredLocationlists = _b;
                        // for (var i = 0; i < this.pereferredLocationlists.length; i++) {
                        //   if (this.pereferredLocationlists[i].verifiedStatus == 0) {
                        //     this.pereferredLocationlists[i].verifiedStatus = this.DRIVER_CONST.LABEL.PENDING
                        //   }
                        //   if (this.vehiclelists[i].verifiedStatus == 1) {
                        //     this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.FILLED
                        //   }
                        //   if (this.vehiclelists[i].verifiedStatus == 2) {
                        //     this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.REJECTED
                        //   }
                        //   if (this.vehiclelists[i].verifiedStatus == 3) {
                        //     this.vehiclelists[i].verifiedStatus = this.DRIVER_CONST.LABEL.VARIFIED
                        //   }
                        //   if (this.vehiclelists[i].isDefault == 0) {
                        //     this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTFalse
                        //   }
                        //   if (this.vehiclelists[i].isDefault == 1) {
                        //     this.vehiclelists[i].isDefault = this.DRIVER_CONST.LABEL.IS_DEFAULTTrue
                        //   }
                        // }
                        // this.previewImageSrc =  this.vehiclelists.carIconImage;
                        // this.zoomImageSrc = this.vehiclelists.carIconImage;
                        // it is used to detect changes for html file
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        return [3 /*break*/, 6];
                    case 5:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.toastr.error(data['message']);
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    EditOperatorComponent.prototype.getOperatorById = function () {
        var _this = this;
        this.id = this._route.snapshot.params['id'];
        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
        this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["LoadOperator"](this.id));
        this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, fd, fd2, fd3, fd4, fd5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data && data != undefined)) return [3 /*break*/, 5];
                        if (!(data['code'] == 200)) return [3 /*break*/, 4];
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.getAllPreferredLocationsList();
                        return [4 /*yield*/, data['data']];
                    case 1:
                        result = _a.sent();
                        this.operatorDetail = data['data'];
                        this.user_operator_polygon_array = this.operatorDetail.user_operator_polygon_array;
                        fd = {
                            'user_firstName': result.user_firstName,
                            'user_lastName': result.user_lastName,
                            'user_userName': result.user_userName,
                            'user_email': result.user_email,
                            'user_phoneNumber': result.user_phoneNumber,
                            // 'user_verifiedStatus': result.user_verifiedStatus,
                            'user_verifiedStatus': result.user_preferredLocations.length > 0 ? 1 : 0,
                            'user_status': result.user_status,
                            'user_isdCode': result.user_isdCode
                        };
                        if (result.user_profileImage) {
                            this.url1 = result.user_profileImage;
                        }
                        if (result.user_profileImage != undefined || result.user_profileImage != null) {
                            this.url1 = result.user_profileImage;
                        }
                        this.addOperatorForm1.patchValue(fd);
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.stateSubscription.unsubscribe();
                        if (!(result.user_operatorInfo && result.user_operatorInfo != undefined)) return [3 /*break*/, 3];
                        fd2 = {
                            'operatorName': result.user_operatorInfo && result.user_operatorInfo.operatorName ? result.user_operatorInfo.operatorName : '',
                            'operatorIsdCode': result.user_operatorInfo && result.user_operatorInfo.operatorIsdCode ? result.user_operatorInfo.operatorIsdCode : '',
                            'operatorPhoneNumber': result.user_operatorInfo && result.user_operatorInfo.operatorPhoneNumber ? result.user_operatorInfo.operatorPhoneNumber : '',
                            'operatorLicenseNumber': result.user_operatorInfo && result.user_operatorInfo.operatorLicenseNumber ? result.user_operatorInfo.operatorLicenseNumber : '',
                            'user_cityId': result.user_cityId && result.user_cityId ? result.user_cityId : ''
                        };
                        if (result.user_operatorInfo && result.user_operatorInfo.operatorFddDocImage != null) {
                            this.url = result.user_operatorInfo.operatorFddDocImage;
                        }
                        if (result.user_cityId) {
                            this.changeCountry('withCity');
                        }
                        else {
                            this.changeCountry('withOutCity');
                        }
                        return [4 /*yield*/, this.addOperatorForm2.patchValue(fd2)];
                    case 2:
                        _a.sent();
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.stateSubscription.unsubscribe();
                        _a.label = 3;
                    case 3:
                        if (result.user_bankDetail && result.user_bankDetail != undefined) {
                            fd3 = {
                                'bankName': result.user_bankDetail.bankName,
                                'accountHolderName': result.user_bankDetail.accountHolderName,
                                'accountNumber': result.user_bankDetail.accountNumber,
                                'institutionNumber': result.user_bankDetail.institutionNumber,
                                'transitNumber': result.user_bankDetail.transitNumber
                            };
                            this.addOperatorForm3.patchValue(fd3);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        if (result.user_operatorInfo.operatorCommission && result.user_operatorInfo.operatorCommission != undefined) {
                            fd4 = {
                                'annualFee': result.user_operatorInfo.operatorCommission.annualFee,
                                'frequencyType': result.user_operatorInfo.operatorCommission.frequencyType,
                                'commissionPercentage': result.user_operatorInfo.operatorCommission.commissionPercentage,
                                'ridePreAuthorisedPayment': result.user_operatorInfo.operatorCommission.ridePreAuthorisedPayment
                            };
                            this.addOperatorForm4.patchValue(fd4);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        // console.log("---------result--------------", result.user_operatorInfo)
                        if (result.user_operatorInfo.operatorInvoiceDetails && result.user_operatorInfo.operatorInvoiceDetails != undefined) {
                            fd5 = {
                                'address1': result.user_operatorInfo.operatorInvoiceDetails.address1,
                                'address2': result.user_operatorInfo.operatorInvoiceDetails.address2,
                                'postalCode': result.user_operatorInfo.operatorInvoiceDetails.postalCode,
                                'province': result.user_operatorInfo.operatorInvoiceDetails.province,
                                'isdCode': result.user_operatorInfo.operatorInvoiceDetails.isdCode,
                                'contectNumber': result.user_operatorInfo.operatorInvoiceDetails.contectNumber,
                                'email': result.user_operatorInfo.operatorInvoiceDetails.email
                            };
                            this.addOperatorForm5.patchValue(fd5);
                            if (this.dtr && !this.dtr.destroyed) {
                                this.dtr.detectChanges();
                            }
                            this.stateSubscription.unsubscribe();
                        }
                        // if (result.user_operatorInfo.operatorInvoiceDetails && result.user_operatorInfo.operatorInvoiceDetails != undefined) {
                        //   let fd6 = {
                        //     'address1': result.user_operatorInfo.operatorInvoiceDetails.address1
                        //   };
                        //   this.addOperatorForm6.patchValue(fd6);
                        //   if (this.dtr && !(this.dtr as ViewRef).destroyed) {
                        //     this.dtr.detectChanges();
                        //   }
                        //   this.stateSubscription.unsubscribe();
                        // }
                        this.addOperatorForm1.patchValue(fd);
                        if (this.dtr && !this.dtr.destroyed) {
                            this.dtr.detectChanges();
                        }
                        this.stateSubscription.unsubscribe();
                        return [3 /*break*/, 5];
                    case 4:
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        this.stateSubscription.unsubscribe();
                        this.toastr.error(data['message']);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    EditOperatorComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].name.match(/\.(png|jpeg|jpg|doc|docx|pdf)$/) && event.target.files[0].size < 4194304) {
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
                this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
            }
        }
    };
    EditOperatorComponent.prototype.imageRemove = function () {
        this.url = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.imageFile = '';
    };
    // user Image
    EditOperatorComponent.prototype.onSelectUserImage = function (event) {
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
                this.toastr.error(this.translate.instant("COMMON_VALIDATION_MESSAGES.FILE_SIZE"));
            }
        }
    };
    EditOperatorComponent.prototype.removeUserImage = function () {
        this.url1 = _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO;
        this.imageFile1 = '';
    };
    EditOperatorComponent.prototype.changeCountry = function (status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countryId, countryId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(status == 'withCity')) return [3 /*break*/, 2];
                        countryId = { city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry };
                        return [4 /*yield*/, this.cityService
                                .getCountryCities(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cityList = _b.sent();
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (false) {}
                        countryId = { city_countryId: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry };
                        return [4 /*yield*/, this.cityService
                                .getCityListOperetor(countryId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data["code"] == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data["data"]];
                                        case 1:
                                            _a.cityList = _b.sent();
                                            this.dtr.detectChanges();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditOperatorComponent.prototype.savePersonalDetail = function () {
        this.submitted = true;
        if (this.addOperatorForm1.valid) {
            if (this.imageFile1 == "" || this.imageFile1 == _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO) {
                this.submitted = false;
                this.toastr.error(this.translate.instant('OPERATOR.PLACEHOLDERS.USER_IMAGE'));
            }
            else {
                var res = this.addOperatorForm1.value;
                if (res.user_password && res.user_password != '' && res.user_confirm_password && res.user_confirm_password != '') {
                    if ((res.user_password === res.user_confirm_password)) {
                        this.saveData('1');
                    }
                    else {
                        this.toastr.error('Password & Confirm Password Should be Match');
                    }
                }
                else {
                    this.saveData('1');
                }
            }
        }
        else if (!this.addOperatorForm1.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditOperatorComponent.prototype.saveOperatorDetail = function () {
        this.submitted1 = true;
        if (this.addOperatorForm2.valid) {
            if (this.imageFile == "" || this.imageFile == _helper_page_title__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_IMAGES"].ADD_PHOTO) {
                this.submitted = false;
                this.toastr.error(this.translate.instant('OPERATOR.PLACEHOLDERS.FDD_IMAGE'));
            }
            else {
                this.saveData('2');
            }
        }
        else if (!this.addOperatorForm2.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditOperatorComponent.prototype.saveBankDetail = function () {
        this.submitted2 = true;
        if (this.addOperatorForm3.valid) {
            this.saveData('3');
        }
        else if (!this.addOperatorForm3.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditOperatorComponent.prototype.saveCommissionDetail = function () {
        this.submitted3 = true;
        if (this.addOperatorForm4.valid) {
            this.saveData('4');
        }
        else if (!this.addOperatorForm4.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    EditOperatorComponent.prototype.saveInvoiceDetail = function () {
        this.submitted4 = true;
        if (this.addOperatorForm5.valid) {
            this.saveData('5');
        }
        else if (!this.addOperatorForm5.valid) {
            this.toastr.error('All Tabs Field is Required');
        }
    };
    // savePreferredLocation() {
    //   this.submitted5 = true;
    //   if (this.addOperatorForm6.valid) {
    //     this.saveData('6')
    //   } else if (!this.addOperatorForm6.valid) {
    //     this.toastr.error('All Tabs Field is Required');
    //   }
    // }
    EditOperatorComponent.prototype.saveData = function (step) {
        var _this = this;
        if (step === '1') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var res = this.addOperatorForm1.value;
            var fd = new FormData();
            fd.append('user_firstName', res.user_firstName);
            fd.append('user_lastName', res.user_lastName);
            fd.append('user_userName', res.user_userName);
            fd.append('user_email', res.user_email);
            fd.append('user_phoneNumber', res.user_phoneNumber);
            fd.append('user_isdCode', res.user_isdCode);
            fd.append('user_verifiedStatus', res.user_verifiedStatus);
            fd.append('user_status', res.user_status);
            fd.append('user_roleId', this.operatorDetail && this.operatorDetail.user_roleId ? this.operatorDetail.user_roleId : '5');
            if (res.user_password && res.user_password != '') {
                fd.append('user_password', res.user_password);
            }
            if (this.imageFile1) {
                fd.append('user_profileImage', this.imageFile1);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperator"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'operator';
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
        else if (step === '2') {
            // const mergedArray = [...this.user_operator_polygon_array, ...this.operatorDetail.user_operator_polygon_array]
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var res = this.addOperatorForm2.value;
            var fd = new FormData();
            fd.append('operatorName', res.operatorName);
            fd.append('operatorPhoneNumber', res.operatorPhoneNumber);
            fd.append('operatorIsdCode', res.operatorIsdCode);
            fd.append('operatorLicenseNumber', res.operatorLicenseNumber);
            fd.append('user_countryId', _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].webDefaultCountry);
            fd.append('user_cityId', res.user_cityId);
            fd.append('user_operator_polygon_array', JSON.stringify(this.user_operator_polygon_array));
            if (this.imageFile) {
                fd.append('operatorFddDocImage', this.imageFile);
            }
            var obj = {
                id: this.id,
                data: fd
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorProfile"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) {
                if (data && data != undefined) {
                    if (data['code'] == 200) {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        var result = data['data'];
                        _this.toastr.success(data['message']);
                        _this.submitStep['step'] = step;
                        _this.navObj.link = 'bank';
                        _this.id = result._id;
                        _this.stateSubscription.unsubscribe();
                        _this.submitted1 = false;
                    }
                    else {
                        _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                        _this.stateSubscription.unsubscribe();
                        _this.toastr.error(data['message']);
                    }
                }
            });
        }
        else if (step === '3') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var form = this.addOperatorForm3.value;
            var obj = {
                id: this.id,
                data: {
                    bankName: form.bankName,
                    accountHolderName: form.accountHolderName,
                    accountNumber: form.accountNumber,
                    institutionNumber: form.institutionNumber,
                    transitNumber: form.transitNumber
                }
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorBankDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.success(data['message']);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'commission';
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
        else if (step === '4') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var form = this.addOperatorForm4.value;
            var obj = {
                id: this.id,
                data: {
                    annualFee: form.annualFee,
                    frequencyType: form.frequencyType,
                    commissionPercentage: form.commissionPercentage,
                    ridePreAuthorisedPayment: form.ridePreAuthorisedPayment
                }
            };
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorCommissionDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.success(data['message']);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'invoice';
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
        else if (step === '5') {
            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(true);
            var form = this.addOperatorForm5.value;
            // console.log("-----form-----", form);
            var obj = {
                id: this.id,
                data: {
                    address1: form.address1,
                    address2: form.address2,
                    postalCode: form.postalCode,
                    province: form.province,
                    isdCode: form.isdCode,
                    contectNumber: form.contectNumber,
                    email: form.email
                }
            };
            // console.log("-----obj.data-----", obj.data);
            this.stateSubscription = this.store.dispatch(new _state_operator_actions__WEBPACK_IMPORTED_MODULE_11__["UpdateOperatorInvoiceDetail"](obj));
            this.stateSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_state_operator_reducer__WEBPACK_IMPORTED_MODULE_12__["selectPageState"])).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (data && data != undefined) {
                        if (data['code'] == 200) {
                            _helper_helper__WEBPACK_IMPORTED_MODULE_13__["Helpers"].setLoading(false);
                            this.toastr.success(data['message']);
                            this.submitStep['step'] = step;
                            this.navObj.link = 'preferredLocation';
                            this.router.navigate(['/operator-management/list']);
                            this.stateSubscription.unsubscribe();
                            this.submitted = false;
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
        // else if (step === '6') {
        //   Helpers.setLoading(true)
        //   const form = this.addOperatorForm6.value;
        //   let obj = {
        //     id: this.id,
        //     data: {
        //       address1: form.address1
        //     }
        //   };
        //   this.stateSubscription = this.store.dispatch(new operatorActions.UpdateOperatorInvoiceDetail(obj))
        //   this.stateSubscription = this.store.pipe(select(fromOperator.selectPageState)).subscribe(async (data) => {
        //     if (data && data != undefined) {
        //       if (data['code'] == 200) {
        //         Helpers.setLoading(false);
        //         this.toastr.success(data['message']);
        //         this.submitStep['step'] = step;
        //         this.router.navigate(['/operator-management/list']);
        //         this.stateSubscription.unsubscribe();
        //         this.submitted = false;
        //         if (this.dtr && !(this.dtr as ViewRef).destroyed) {
        //           this.dtr.detectChanges();
        //         }
        //       } else {
        //         Helpers.setLoading(false);
        //         this.toastr.error(data['message']);
        //         this.stateSubscription.unsubscribe();
        //       }
        //     }
        //   })
        // }
    };
    EditOperatorComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _operator_service__WEBPACK_IMPORTED_MODULE_14__["OperatorService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"] }
    ]; };
    EditOperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-edit-operator',
            template: __webpack_require__(/*! raw-loader!./edit-operator.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/edit-operator/edit-operator.component.html"),
            styles: ["\n    agm-map {\n      height: 500px;\n    }\n  ", __webpack_require__(/*! ./edit-operator.component.scss */ "./src/app/views/pages/operator/edit-operator/edit-operator.component.scss")]
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
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _operator_service__WEBPACK_IMPORTED_MODULE_14__["OperatorService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_16__["CityService"]])
    ], EditOperatorComponent);
    return EditOperatorComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/operator-list/operator-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/operator/operator-list/operator-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrlbl_table {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmNsdWVzLWFuZHJvaWQvRGVza3RvcC9wcm9qZWN0cy9vcGVuX3JpZGVhbG90dC9hZG1pblBhbmVsL3NyYy9hcHAvdmlld3MvcGFnZXMvb3BlcmF0b3Ivb3BlcmF0b3ItbGlzdC9vcGVyYXRvci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9vcGVyYXRvci9vcGVyYXRvci1saXN0L29wZXJhdG9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NybGJsX3RhYmxlIHtvdmVyZmxvdy14OiBhdXRvO30iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/operator/operator-list/operator-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/operator/operator-list/operator-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperatorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorListComponent", function() { return OperatorListComponent; });
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
var OperatorListComponent = /** @class */ (function () {
    function OperatorListComponent(subheaderService, localStorageService, _script, router, titleService, translate) {
        this.subheaderService = subheaderService;
        this.localStorageService = localStorageService;
        this._script = _script;
        this.router = router;
        this.translate = translate;
        this.operator = '';
        this.status = '';
        this.APPNAME = _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["APPNAME"];
        this.OPERATOR_CONST = [];
        this.searchObj = { field: 'operatorName', user_status: '', search: '' };
        this.createPermission = false;
        this.readPermission = false;
        this.deletePermission = false;
        this.editPermission = false;
        this.getPermission();
        this.OPERATOR_CONST = this.translate.instant('OPERATOR');
        // SET SUBHEAD AND TITLE
        this.subheaderService.setTitle(this.translate.instant('MENU.OPERATOR'));
        titleService.setTitle(this.APPNAME + " | " + this.OPERATOR_CONST.MODULE_NAME);
    }
    OperatorListComponent.prototype.getPermission = function () {
        var _this = this;
        this.localStorageService.getBehaviorView().subscribe(function (data) {
            if (data && data.length) {
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].OPERATOR.CREATE)) {
                    _this.createPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].OPERATOR.EDIT)) {
                    _this.editPermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].OPERATOR.DELETE)) {
                    _this.deletePermission = true;
                }
                if (_this.checkHasPermission(data, _helper_page_title__WEBPACK_IMPORTED_MODULE_7__["PERMISSIONS"].OPERATOR.READ)) {
                    _this.readPermission = true;
                }
            }
        });
    };
    OperatorListComponent.prototype.checkHasPermission = function (data, permissionName) {
        return data.find(function (element) {
            return element == permissionName;
        });
    };
    OperatorListComponent.prototype.toTitleCase = function (str) {
        return str.replace(/\S+/g, function (str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase(); });
    };
    OperatorListComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.notimgmt = _window().my.notimgmt || {};
        _window().my.notimgmt.edit = this.edit.bind(this);
        _window().my.notimgmt.delete = this.delete.bind(this);
        _window().my.notimgmt.update = this.update.bind(this);
        if (typeof (_window().isScriptLoadednotimgmt) == 'undefined') {
            _window().isScriptLoadednotimgmt = false;
        }
    };
    OperatorListComponent.prototype.ngAfterViewInit = function () {
        _helper_helper__WEBPACK_IMPORTED_MODULE_10__["Helpers"].setLoading(true);
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadednotimgmt) {
            scripts = ['assets/js/global/datatable/plugins.bundle.js', 'assets/js/global/dttable/datatables.bundle.js'];
        }
        this._script.loadScripts('kt-operator-list', scripts).then(function () {
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
                    sProcessing: that.OPERATOR_CONST.MESSAGES.PROCESSING,
                },
                //   // Pagination settings
                dom: "<'row'<'col-sm-12'tr>>\n              <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                ajax: {
                    url: _api_constants__WEBPACK_IMPORTED_MODULE_8__["ApiURIs"].userList + '/OPERATOR',
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
                        title: that.OPERATOR_CONST.LABEL.SR_NO, data: null
                    },
                    {
                        title: that.OPERATOR_CONST.LABEL.USER_PROFILE_IMAGE, data: "user_profileImage",
                    },
                    {
                        title: that.OPERATOR_CONST.LABEL.DISPLAY_NAME, data: "user_userName"
                    },
                    { title: that.OPERATOR_CONST.LABEL.OPERATOR_NAME, data: 'user_operatorDetailName' },
                    {
                        title: that.OPERATOR_CONST.LABEL.EMAIL, data: "user_email"
                    }, {
                        title: that.OPERATOR_CONST.LABEL.MOBILENO, data: "user_phoneNumber"
                    },
                    { title: that.OPERATOR_CONST.LABEL.STATUS, data: 'user_status' },
                    // {
                    //   title: that.OPERATOR_CONST.LABEL.REGISTEREDVIA, data: "user_registeredVia"
                    // },
                    { title: that.OPERATOR_CONST.LABEL.CREATED_ON, data: 'user_createdOn' },
                    { title: that.OPERATOR_CONST.LABEL.MODIFIED_ON, data: 'user_modifyOn' },
                    { title: that.OPERATOR_CONST.LABEL.ACTIONS }
                ],
                initComplete: function () {
                    var rowFilter = $('<tr class="filter"></tr>').appendTo($(table.table().header()));
                    this.api().columns().every(function () {
                        var column = $(this.header()).text().trim();
                        var input;
                        switch (column) {
                            case that.OPERATOR_CONST.LABEL.SR_NO:
                                break;
                            case that.OPERATOR_CONST.LABEL.USER_PROFILE_IMAGE:
                                break;
                            case that.OPERATOR_CONST.LABEL.DISPLAY_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.OPERATOR_CONST.LABEL.OPERATOR_NAME:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.OPERATOR_CONST.LABEL.EMAIL:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.OPERATOR_CONST.LABEL.MOBILENO:
                                input = $("<input type=\"text\" class=\"form-control form-control-sm form-filter kt-input\" data-col-index=\"" + this.index() + "\"/>");
                                break;
                            case that.OPERATOR_CONST.LABEL.STATUS:
                                input = $("<select class=\"form-control form-control-sm form-filter kt-input\" title=\"Select\" data-col-index=\"" + this.index() + ("\">\n                <option value=\"\">" + that.OPERATOR_CONST.PLACEHOLDERS.STATUS + "</option>\n                <option value=\"ACTIVE\">" + that.OPERATOR_CONST.LABEL.ACTIVE + "</option>\n                <option value=\"INACTIVE\">" + that.OPERATOR_CONST.LABEL.INACTIVE + "</option></select>\n                "));
                                break;
                            // case that.OPERATOR_CONST.LABEL.REGISTEREDVIA:
                            //     input = $(`<select class="form-control form-control-sm form-filter kt-input" title="Select" data-col-index="` + this.index() + `">
                            //     <option value="">${that.OPERATOR_CONST.PLACEHOLDERS.REGISTERED_VIA}</option>
                            //     <option value=${appConstants.REGISTRATION_TYPE.NORMAL}>${that.OPERATOR_CONST.LABEL.NORMAL}</option>
                            //     <option value=${appConstants.REGISTRATION_TYPE.FACEBOOK}>${that.OPERATOR_CONST.LABEL.FACEBOOK}</option>
                            //     <option value=${appConstants.REGISTRATION_TYPE.GOOGLE}>${that.OPERATOR_CONST.LABEL.GOOGLE}</option>
                            //     `);
                            //   break;
                            // case that.OPERATOR_CONST.LABEL.CREATED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            // case that.OPERATOR_CONST.LABEL.MODIFIED_ON:
                            //   input = $(`<input type="text" class="form-control form-control-sm form-filter kt-input" data-col-index="` + this.index() + `"/>`);
                            //   break;
                            case that.OPERATOR_CONST.LABEL.ACTIONS:
                                var search = $("<button class=\"btn btn-brand kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-search\"></i>\n                        <span>" + that.OPERATOR_CONST.BUTTONS.SEARCH + "</span>\n                      </span>\n                    </button>");
                                var reset = $("<button class=\"btn btn-secondary kt-btn btn-sm kt-btn--icon\" style=\"display: inline-block !important;\n                margin-left: 10px !important; margin-top: 0px !important;\">\n                      <span>\n                        <i class=\"la la-close\"></i>\n                        <span>" + that.OPERATOR_CONST.BUTTONS.RESET + "</span>\n                      </span>\n                    </button>");
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
                            return that.toTitleCase(t.user_operatorDetailName) || '-';
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
                        width: '30%',
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
                    // {
                    //   targets: 7,
                    //   width: '10%',
                    //   render: function (a, e, t, n) {
                    //     if (a == appConstants.REGISTRATION_TYPE.GOOGLE) {
                    //       return 'Google';
                    //     } else if (a == appConstants.REGISTRATION_TYPE.FACEBOOK) {
                    //       return 'Facebook';
                    //     } else {
                    //       return 'Normal'
                    //     }
                    //   }
                    // },
                    {
                        targets: 7,
                        width: '10%'
                    },
                    {
                        targets: 8,
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
    OperatorListComponent.prototype.edit = function (e) {
        this.id = $(e).data('id');
        this.router.navigate(['/operator-management/edit/' + this.id]);
    };
    OperatorListComponent.prototype.delete = function (e) {
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
                            component: 'operator',
                            click: 'delete',
                            id: this.id
                        };
                        this.localStorageService.setBehaviorClick(obj);
                        return [2 /*return*/];
                }
            });
        });
    };
    OperatorListComponent.prototype.update = function (e) {
        this.id = $(e).data("id").toString();
        this.status = $(e).data("status");
        $("#m_modal_7").modal({
            backdrop: "static",
            keyboard: false,
            show: true,
        });
        var obj = {
            component: 'operator',
            click: 'update',
            status: this.status,
            id: this.id
        };
        this.localStorageService.setBehaviorClick(obj);
    };
    OperatorListComponent.prototype.ngOnDestroy = function () {
        if (this.stateSubscription && this.stateSubscription != undefined) {
            this.stateSubscription.unsubscribe();
        }
    };
    OperatorListComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
        { type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    OperatorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-operator-list',
            template: __webpack_require__(/*! raw-loader!./operator-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/operator-list/operator-list.component.html"),
            styles: [__webpack_require__(/*! ./operator-list.component.scss */ "./src/app/views/pages/operator/operator-list/operator-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], OperatorListComponent);
    return OperatorListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/operator.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/operator/operator.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL29wZXJhdG9yL29wZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/operator/operator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/operator/operator.component.ts ***!
  \************************************************************/
/*! exports provided: OperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorComponent", function() { return OperatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");





var OperatorComponent = /** @class */ (function () {
    function OperatorComponent(subheaderService, titleService) {
        this.subheaderService = subheaderService;
        this.subheaderService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["subHeader"].OPERATOR);
        titleService.setTitle(_helper_page_title__WEBPACK_IMPORTED_MODULE_4__["titles"].operatorManagement);
    }
    OperatorComponent.prototype.ngOnInit = function () {
    };
    OperatorComponent.ctorParameters = function () { return [
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    OperatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-operator',
            template: __webpack_require__(/*! raw-loader!./operator.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/operator/operator.component.html"),
            styles: [__webpack_require__(/*! ./operator.component.scss */ "./src/app/views/pages/operator/operator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], OperatorComponent);
    return OperatorComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/operator.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/operator/operator.module.ts ***!
  \*********************************************************/
/*! exports provided: OperatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorModule", function() { return OperatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_operator_add_edit_operator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-operator/add-edit-operator.component */ "./src/app/views/pages/operator/add-edit-operator/add-edit-operator.component.ts");
/* harmony import */ var _operator_list_operator_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operator-list/operator-list.component */ "./src/app/views/pages/operator/operator-list/operator-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_operator_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/operator.effects */ "./src/app/views/pages/operator/state/operator.effects.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _state_operator_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/operator.reducer */ "./src/app/views/pages/operator/state/operator.reducer.ts");
/* harmony import */ var _helper_page_title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helper/page.title */ "./src/app/helper/page.title.ts");
/* harmony import */ var _core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/auth/_guards/access-guard-permission.guard */ "./src/app/core/auth/_guards/access-guard-permission.guard.ts");
/* harmony import */ var _operator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./operator.component */ "./src/app/views/pages/operator/operator.component.ts");
/* harmony import */ var _edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-operator/edit-operator.component */ "./src/app/views/pages/operator/edit-operator/edit-operator.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_edit_preferred_location_add_edit_preferred_location_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-edit-preferred-location/add-edit-preferred-location.component */ "./src/app/views/pages/operator/add-edit-preferred-location/add-edit-preferred-location.component.ts");





















var menuPermision = _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].MAIN_MENU.SITE_USER;
var routes = [
    {
        path: '',
        component: _operator_component__WEBPACK_IMPORTED_MODULE_16__["OperatorComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _operator_list_operator_list_component__WEBPACK_IMPORTED_MODULE_4__["OperatorListComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].OPERATOR.READ,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'add',
                component: _add_edit_operator_add_edit_operator_component__WEBPACK_IMPORTED_MODULE_3__["AddEditOperatorComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].OPERATOR.CREATE,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: 'edit/:id',
                component: _edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_17__["EditOperatorComponent"],
                canActivate: [_core_auth_guards_access_guard_permission_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuardPermissionGuard"]],
                data: {
                    permission: _helper_page_title__WEBPACK_IMPORTED_MODULE_14__["PERMISSIONS"].OPERATOR.EDIT,
                    mainModulePermission: menuPermision
                }
            },
            {
                path: ':id/preferred-location/add',
                component: _add_edit_preferred_location_add_edit_preferred_location_component__WEBPACK_IMPORTED_MODULE_20__["AddPreferredLocationComponent"],
                canActivate: [],
                data: {
                // permission: Helper.PERMISSIONS.DRIVER.READ,
                // mainModulePermission: menuPermision
                }
            },
            {
                path: ':id/preferred-location/edit/:preferred-locationId',
                component: _add_edit_preferred_location_add_edit_preferred_location_component__WEBPACK_IMPORTED_MODULE_20__["EditPreferredLocationComponent"],
                canActivate: [],
                data: {
                // permission: Helper.PERMISSIONS.DRIVER.READ,
                // mainModulePermission: menuPermision
                }
            },
        ]
    }
];
var OperatorModule = /** @class */ (function () {
    function OperatorModule() {
    }
    OperatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _operator_component__WEBPACK_IMPORTED_MODULE_16__["OperatorComponent"],
                _operator_list_operator_list_component__WEBPACK_IMPORTED_MODULE_4__["OperatorListComponent"],
                _add_edit_operator_add_edit_operator_component__WEBPACK_IMPORTED_MODULE_3__["AddEditOperatorComponent"],
                _edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_17__["EditOperatorComponent"],
                _add_edit_preferred_location_add_edit_preferred_location_component__WEBPACK_IMPORTED_MODULE_20__["AddPreferredLocationComponent"],
                _add_edit_preferred_location_add_edit_preferred_location_component__WEBPACK_IMPORTED_MODULE_20__["EditPreferredLocationComponent"]
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_operator_effects__WEBPACK_IMPORTED_MODULE_11__["OperatorEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature("operator", _state_operator_reducer__WEBPACK_IMPORTED_MODULE_13__["operatorReducer"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].mapAPIKey
                })
            ]
        })
    ], OperatorModule);
    return OperatorModule;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/state/operator.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/operator/state/operator.actions.ts ***!
  \****************************************************************/
/*! exports provided: OperatorActionTypes, LoadOperator, LoadOperatorSuccess, LoadOperatorFail, UpdateOperator, UpdateOperatorSuccess, UpdateOperatorFail, UpdateOperatorBankDetail, UpdateOperatorBankDetailSuccess, UpdateOperatorBankDetailFail, DeleteOperator, DeleteOperatorSuccess, DeleteOperatorFail, UpdateStatus, UpdateStatusSuccess, UpdateStatusFail, AddOperator, AddOperatorSuccess, AddOperatorFail, UpdateOperatorProfile, UpdateOperatorProfileSuccess, UpdateOperatorProfileFail, UploadData, UploadDataSuccess, UploadDataFail, UpdateOperatorCommissionDetail, UpdateOperatorCommissionDetailSuccess, UpdateOperatorCommissionDetailFail, UpdateOperatorInvoiceDetail, UpdateOperatorInvoiceDetailSuccess, UpdateOperatorInvoiceDetailFail, LoadPreferredLocation, LoadPreferredLocationSuccess, LoadPreferredLocationFail, UpdatePreferredLocation, UpdatePreferredLocationSuccess, UpdatePreferredLocationFail, AddPreferredLocation, AddPreferredLocationSuccess, AddPreferredLocationFail, DeletePreferredLocation, DeletePreferredLocationSuccess, DeletePreferredLocationFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorActionTypes", function() { return OperatorActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperator", function() { return LoadOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperatorSuccess", function() { return LoadOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOperatorFail", function() { return LoadOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperator", function() { return UpdateOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorSuccess", function() { return UpdateOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorFail", function() { return UpdateOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorBankDetail", function() { return UpdateOperatorBankDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorBankDetailSuccess", function() { return UpdateOperatorBankDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorBankDetailFail", function() { return UpdateOperatorBankDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOperator", function() { return DeleteOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOperatorSuccess", function() { return DeleteOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOperatorFail", function() { return DeleteOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusSuccess", function() { return UpdateStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatusFail", function() { return UpdateStatusFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOperator", function() { return AddOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOperatorSuccess", function() { return AddOperatorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOperatorFail", function() { return AddOperatorFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorProfile", function() { return UpdateOperatorProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorProfileSuccess", function() { return UpdateOperatorProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorProfileFail", function() { return UpdateOperatorProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadData", function() { return UploadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataSuccess", function() { return UploadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDataFail", function() { return UploadDataFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorCommissionDetail", function() { return UpdateOperatorCommissionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorCommissionDetailSuccess", function() { return UpdateOperatorCommissionDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorCommissionDetailFail", function() { return UpdateOperatorCommissionDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorInvoiceDetail", function() { return UpdateOperatorInvoiceDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorInvoiceDetailSuccess", function() { return UpdateOperatorInvoiceDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperatorInvoiceDetailFail", function() { return UpdateOperatorInvoiceDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPreferredLocation", function() { return LoadPreferredLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPreferredLocationSuccess", function() { return LoadPreferredLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPreferredLocationFail", function() { return LoadPreferredLocationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePreferredLocation", function() { return UpdatePreferredLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePreferredLocationSuccess", function() { return UpdatePreferredLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePreferredLocationFail", function() { return UpdatePreferredLocationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPreferredLocation", function() { return AddPreferredLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPreferredLocationSuccess", function() { return AddPreferredLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPreferredLocationFail", function() { return AddPreferredLocationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePreferredLocation", function() { return DeletePreferredLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePreferredLocationSuccess", function() { return DeletePreferredLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePreferredLocationFail", function() { return DeletePreferredLocationFail; });
var OperatorActionTypes;
(function (OperatorActionTypes) {
    OperatorActionTypes["UPDATE_STATUS"] = "[OPERATOR] Update Status";
    OperatorActionTypes["UPDATE_STATUS_SUCCESS"] = "[OPERATOR]  Update Status Success";
    OperatorActionTypes["UPDATE_STATUS_FAIL"] = "[OPERATOR]  Update Status Fail";
    OperatorActionTypes["UPDATE_OPERATOR_BANK_DETAIL"] = "[OPERATOR] Update Operator Bank Detail";
    OperatorActionTypes["UPDATE_OPERATOR_BANK_DETAIL_SUCCESS"] = "[OPERATOR] Update Operator Bank Detail Success";
    OperatorActionTypes["UPDATE_OPERATOR_BANK_DETAIL_FAIL"] = "[OPERATOR] Update Operator Bank Detail Fail";
    OperatorActionTypes["LOAD_OPERATOR"] = "[OPERATOR] Load Operator";
    OperatorActionTypes["LOAD_OPERATOR_SUCCESS"] = "[OPERATOR] Load Operator Success";
    OperatorActionTypes["LOAD_OPERATOR_FAIL"] = "[OPERATOR] Load Operator Fail";
    OperatorActionTypes["UPDATE_OPERATOR"] = "[OPERATOR] Update Operator";
    OperatorActionTypes["UPDATE_OPERATOR_SUCCESS"] = "[OPERATOR] Update Operator Success";
    OperatorActionTypes["UPDATE_OPERATOR_FAIL"] = "[OPERATOR] Update Operator Fail";
    OperatorActionTypes["DELETE_OPERATOR"] = "[OPERATOR] Delete Operator";
    OperatorActionTypes["DELETE_OPERATOR_SUCCESS"] = "[OPERATOR] Delete Operator Success";
    OperatorActionTypes["DELETE_OPERATOR_FAIL"] = "[OPERATOR] Delete Operator Fail";
    OperatorActionTypes["ADD_OPERATOR"] = "[OPERATOR] Add Operator";
    OperatorActionTypes["ADD_OPERATOR_SUCCESS"] = "[OPERATOR] Add Operator Success";
    OperatorActionTypes["ADD_OPERATOR_FAIL"] = "[OPERATOR] Add Operator Fail";
    //--------
    OperatorActionTypes["LOAD_PREFERRED_LOCATION"] = "[OPERATOR] Load Preferred Location";
    OperatorActionTypes["LOAD_PREFERRED_LOCATION_SUCCESS"] = "[OPERATOR] Load Preferred Location Success";
    OperatorActionTypes["LOAD_PREFERRED_LOCATION_FAIL"] = "[OPERATOR] Load Preferred Location Fail";
    OperatorActionTypes["UPDATE_PREFERRED_LOCATION"] = "[OPERATOR] Update Preferred Location";
    OperatorActionTypes["UPDATE_PREFERRED_LOCATION_SUCCESS"] = "[OPERATOR] Update Preferred Location Success";
    OperatorActionTypes["UPDATE_PREFERRED_LOCATION_FAIL"] = "[OPERATOR] Update Preferred Location Fail";
    OperatorActionTypes["DELETE_PREFERRED_LOCATION"] = "[OPERATOR] Delete Preferred Location";
    OperatorActionTypes["DELETE_PREFERRED_LOCATION_SUCCESS"] = "[OPERATOR] Delete Preferred Location Success";
    OperatorActionTypes["DELETE_PREFERRED_LOCATION_FAIL"] = "[OPERATOR] Delete Preferred Location Fail";
    OperatorActionTypes["ADD_PREFERRED_LOCATION"] = "[OPERATOR] Add Preferred Location";
    OperatorActionTypes["ADD_PREFERRED_LOCATION_SUCCESS"] = "[OPERATOR] Add Preferred Location Success";
    OperatorActionTypes["ADD_PREFERRED_LOCATION_FAIL"] = "[OPERATOR] Add Preferred Location Fail";
    //--------
    OperatorActionTypes["UPDATE_OPERATOR_PROFILE"] = "[Operator] Update Operator Profile";
    OperatorActionTypes["UPDATE_OPERATOR_PROFILE_SUCCESS"] = "[Operator] Update Operator Profile Success";
    OperatorActionTypes["UPDATE_OPERATOR_PROFILE_FAIL"] = "[Operator] Update Operator Profile Fail";
    OperatorActionTypes["UPLOAD_DATA"] = "[OPERATOR] Upload Data";
    OperatorActionTypes["UPLOAD_DATA_SUCCESS"] = "[OPERATOR] Upload Data Success";
    OperatorActionTypes["UPLOAD_DATA_FAIL"] = "[OPERATOR] Upload Data Fail";
    OperatorActionTypes["UPDATE_OPERATOR_COMMISSION_DETAIL"] = "[OPERATOR] Update Operator Commission Detail";
    OperatorActionTypes["UPDATE_OPERATOR_COMMISSION_DETAIL_SUCCESS"] = "[OPERATOR] Update Operator Commission Detail Success";
    OperatorActionTypes["UPDATE_OPERATOR_COMMISSION_DETAIL_FAIL"] = "[OPERATOR] Update Operator Commission Detail Fail";
    OperatorActionTypes["UPDATE_OPERATOR_INVOICE_DETAIL"] = "[OPERATOR] Update Operator Invoice Detail";
    OperatorActionTypes["UPDATE_OPERATOR_INVOICE_DETAIL_SUCCESS"] = "[OPERATOR] Update Operator Invoice Detail Success";
    OperatorActionTypes["UPDATE_OPERATOR_INVOICE_DETAIL_FAIL"] = "[OPERATOR] Update Operator Invoice Detail Fail";
})(OperatorActionTypes || (OperatorActionTypes = {}));
var LoadOperator = /** @class */ (function () {
    function LoadOperator(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.LOAD_OPERATOR;
    }
    LoadOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadOperator;
}());

var LoadOperatorSuccess = /** @class */ (function () {
    function LoadOperatorSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.LOAD_OPERATOR_SUCCESS;
    }
    LoadOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadOperatorSuccess;
}());

var LoadOperatorFail = /** @class */ (function () {
    function LoadOperatorFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.LOAD_OPERATOR_FAIL;
    }
    LoadOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadOperatorFail;
}());

var UpdateOperator = /** @class */ (function () {
    function UpdateOperator(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR;
    }
    UpdateOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperator;
}());

var UpdateOperatorSuccess = /** @class */ (function () {
    function UpdateOperatorSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_SUCCESS;
    }
    UpdateOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorSuccess;
}());

var UpdateOperatorFail = /** @class */ (function () {
    function UpdateOperatorFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_FAIL;
    }
    UpdateOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorFail;
}());

var UpdateOperatorBankDetail = /** @class */ (function () {
    function UpdateOperatorBankDetail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL;
    }
    UpdateOperatorBankDetail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorBankDetail;
}());

var UpdateOperatorBankDetailSuccess = /** @class */ (function () {
    function UpdateOperatorBankDetailSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL_SUCCESS;
    }
    UpdateOperatorBankDetailSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorBankDetailSuccess;
}());

var UpdateOperatorBankDetailFail = /** @class */ (function () {
    function UpdateOperatorBankDetailFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_BANK_DETAIL_FAIL;
    }
    UpdateOperatorBankDetailFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorBankDetailFail;
}());

var DeleteOperator = /** @class */ (function () {
    function DeleteOperator(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.DELETE_OPERATOR;
    }
    DeleteOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteOperator;
}());

var DeleteOperatorSuccess = /** @class */ (function () {
    function DeleteOperatorSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.DELETE_OPERATOR_SUCCESS;
    }
    DeleteOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteOperatorSuccess;
}());

var DeleteOperatorFail = /** @class */ (function () {
    function DeleteOperatorFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.DELETE_OPERATOR_FAIL;
    }
    DeleteOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteOperatorFail;
}());

var UpdateStatus = /** @class */ (function () {
    function UpdateStatus(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_STATUS;
    }
    UpdateStatus.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatus;
}());

var UpdateStatusSuccess = /** @class */ (function () {
    function UpdateStatusSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_STATUS_SUCCESS;
    }
    UpdateStatusSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusSuccess;
}());

var UpdateStatusFail = /** @class */ (function () {
    function UpdateStatusFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_STATUS_FAIL;
    }
    UpdateStatusFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatusFail;
}());

var AddOperator = /** @class */ (function () {
    function AddOperator(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.ADD_OPERATOR;
    }
    AddOperator.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddOperator;
}());

var AddOperatorSuccess = /** @class */ (function () {
    function AddOperatorSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.ADD_OPERATOR_SUCCESS;
    }
    AddOperatorSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddOperatorSuccess;
}());

var AddOperatorFail = /** @class */ (function () {
    function AddOperatorFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.ADD_OPERATOR_FAIL;
    }
    AddOperatorFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddOperatorFail;
}());

var UpdateOperatorProfile = /** @class */ (function () {
    function UpdateOperatorProfile(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_PROFILE;
    }
    UpdateOperatorProfile.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorProfile;
}());

var UpdateOperatorProfileSuccess = /** @class */ (function () {
    function UpdateOperatorProfileSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_PROFILE_SUCCESS;
    }
    UpdateOperatorProfileSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorProfileSuccess;
}());

var UpdateOperatorProfileFail = /** @class */ (function () {
    function UpdateOperatorProfileFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_PROFILE_FAIL;
    }
    UpdateOperatorProfileFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorProfileFail;
}());

var UploadData = /** @class */ (function () {
    function UploadData(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPLOAD_DATA;
    }
    UploadData.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadData;
}());

var UploadDataSuccess = /** @class */ (function () {
    function UploadDataSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPLOAD_DATA_SUCCESS;
    }
    UploadDataSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataSuccess;
}());

var UploadDataFail = /** @class */ (function () {
    function UploadDataFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPLOAD_DATA_FAIL;
    }
    UploadDataFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadDataFail;
}());

var UpdateOperatorCommissionDetail = /** @class */ (function () {
    function UpdateOperatorCommissionDetail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL;
    }
    UpdateOperatorCommissionDetail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorCommissionDetail;
}());

var UpdateOperatorCommissionDetailSuccess = /** @class */ (function () {
    function UpdateOperatorCommissionDetailSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL_SUCCESS;
    }
    UpdateOperatorCommissionDetailSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorCommissionDetailSuccess;
}());

var UpdateOperatorCommissionDetailFail = /** @class */ (function () {
    function UpdateOperatorCommissionDetailFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_COMMISSION_DETAIL_FAIL;
    }
    UpdateOperatorCommissionDetailFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorCommissionDetailFail;
}());

var UpdateOperatorInvoiceDetail = /** @class */ (function () {
    function UpdateOperatorInvoiceDetail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL;
    }
    UpdateOperatorInvoiceDetail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorInvoiceDetail;
}());

var UpdateOperatorInvoiceDetailSuccess = /** @class */ (function () {
    function UpdateOperatorInvoiceDetailSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL_SUCCESS;
    }
    UpdateOperatorInvoiceDetailSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorInvoiceDetailSuccess;
}());

var UpdateOperatorInvoiceDetailFail = /** @class */ (function () {
    function UpdateOperatorInvoiceDetailFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_OPERATOR_INVOICE_DETAIL_FAIL;
    }
    UpdateOperatorInvoiceDetailFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateOperatorInvoiceDetailFail;
}());

//----
var LoadPreferredLocation = /** @class */ (function () {
    function LoadPreferredLocation(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.LOAD_PREFERRED_LOCATION;
    }
    LoadPreferredLocation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadPreferredLocation;
}());

var LoadPreferredLocationSuccess = /** @class */ (function () {
    function LoadPreferredLocationSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.LOAD_PREFERRED_LOCATION_SUCCESS;
    }
    LoadPreferredLocationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadPreferredLocationSuccess;
}());

var LoadPreferredLocationFail = /** @class */ (function () {
    function LoadPreferredLocationFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.LOAD_PREFERRED_LOCATION_FAIL;
    }
    LoadPreferredLocationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadPreferredLocationFail;
}());

var UpdatePreferredLocation = /** @class */ (function () {
    function UpdatePreferredLocation(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_PREFERRED_LOCATION;
    }
    UpdatePreferredLocation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdatePreferredLocation;
}());

var UpdatePreferredLocationSuccess = /** @class */ (function () {
    function UpdatePreferredLocationSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_PREFERRED_LOCATION_SUCCESS;
    }
    UpdatePreferredLocationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdatePreferredLocationSuccess;
}());

var UpdatePreferredLocationFail = /** @class */ (function () {
    function UpdatePreferredLocationFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.UPDATE_PREFERRED_LOCATION_FAIL;
    }
    UpdatePreferredLocationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdatePreferredLocationFail;
}());

var AddPreferredLocation = /** @class */ (function () {
    function AddPreferredLocation(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.ADD_PREFERRED_LOCATION;
    }
    AddPreferredLocation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddPreferredLocation;
}());

var AddPreferredLocationSuccess = /** @class */ (function () {
    function AddPreferredLocationSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.ADD_PREFERRED_LOCATION_SUCCESS;
    }
    AddPreferredLocationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddPreferredLocationSuccess;
}());

var AddPreferredLocationFail = /** @class */ (function () {
    function AddPreferredLocationFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.ADD_PREFERRED_LOCATION_FAIL;
    }
    AddPreferredLocationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddPreferredLocationFail;
}());

var DeletePreferredLocation = /** @class */ (function () {
    function DeletePreferredLocation(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.DELETE_PREFERRED_LOCATION;
    }
    DeletePreferredLocation.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeletePreferredLocation;
}());

var DeletePreferredLocationSuccess = /** @class */ (function () {
    function DeletePreferredLocationSuccess(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.DELETE_PREFERRED_LOCATION_SUCCESS;
    }
    DeletePreferredLocationSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeletePreferredLocationSuccess;
}());

var DeletePreferredLocationFail = /** @class */ (function () {
    function DeletePreferredLocationFail(payload) {
        this.payload = payload;
        this.type = OperatorActionTypes.DELETE_PREFERRED_LOCATION_FAIL;
    }
    DeletePreferredLocationFail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeletePreferredLocationFail;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/state/operator.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/operator/state/operator.effects.ts ***!
  \****************************************************************/
/*! exports provided: OperatorEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorEffect", function() { return OperatorEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _operator_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operator.actions */ "./src/app/views/pages/operator/state/operator.actions.ts");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operator.service */ "./src/app/views/pages/operator/operator.service.ts");







var OperatorEffect = /** @class */ (function () {
    function OperatorEffect(actions$, operatorService) {
        var _this = this;
        this.actions$ = actions$;
        this.operatorService = operatorService;
        this.deleteOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].DELETE_OPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.operatorService.deleteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteOperatorSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteOperatorFail"](err));
            }));
        }));
        this.updateStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updateStatus(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateStatusFail"](err)); }));
        }));
        this.loadOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].LOAD_OPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) {
            return _this.operatorService.getOperatorById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["LoadOperatorSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["LoadOperatorFail"](err));
            }));
        }));
        this.updateOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_OPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updateOperator(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateOperator) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorSuccess"](updateOperator);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorFail"](err)); }));
        }));
        this.updateOperatorBankDetail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_OPERATOR_BANK_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updateBankDetail(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateOperatorBank) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorBankDetailSuccess"](updateOperatorBank);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorBankDetailFail"](err)); }));
        }));
        this.addOperator$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].ADD_OPERATOR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.createOperatorProfile(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (aaa) { return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["AddOperatorSuccess"](aaa); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["AddOperatorFail"](err));
            }));
        }));
        this.updateOperatorProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_OPERATOR_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updateOperatorProfile(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (udateOperator) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorProfileSuccess"](udateOperator);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorProfileFail"](err));
            }));
        }));
        this.uploadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPLOAD_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.uploadData(data.updType, data.updDocs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateAdmin) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataSuccess"](updateAdmin);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UploadDataFail"](err)); }));
        }));
        this.updateCommissionDetail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_OPERATOR_COMMISSION_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updateCommissionDetail(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateOperatorCommission) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorCommissionDetailSuccess"](updateOperatorCommission);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorCommissionDetailFail"](err)); }));
        }));
        this.updateInvoiceDetail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_OPERATOR_INVOICE_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updateInvoiceDetail(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateOperatorInvoice) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorInvoiceDetailSuccess"](updateOperatorInvoice);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateOperatorInvoiceDetailFail"](err)); }));
        }));
        //-----
        // @Effect()
        // deletePreferredLocation$: Observable<Action> = this.actions$.pipe(
        //     ofType<operatorActions.DeletePreferredLocation>(
        //         operatorActions.OperatorActionTypes.DELETE_PREFERRED_LOCATION
        //     ),
        //     map((action: operatorActions.DeletePreferredLocation) => action.payload),
        //     mergeMap((id: any) =>
        //         this.operatorService.deletePreferredLocationById(id).pipe(
        //             map(
        //                 (response: Response) =>
        //                     new operatorActions.DeletePreferredLocationSuccess(response)
        //             ),
        //             catchError(err =>
        //                 of(new operatorActions.DeletePreferredLocationFail(err)))
        //         )
        //     )
        // );
        // @Effect()
        // loadPreferredLocation$: Observable<Action> = this.actions$.pipe(
        //     ofType<operatorActions.LoadPreferredLocation>(
        //         operatorActions.OperatorActionTypes.LOAD_PREFERRED_LOCATION
        //     ),
        //     map((action: operatorActions.LoadPreferredLocation) => action.payload),
        //     mergeMap((id: any) =>
        //         this.operatorService.getPreferredLocationById(id).pipe(
        //             map(
        //                 (response: Response) =>
        //                     new operatorActions.LoadPreferredLocationSuccess(response)
        //             ),
        //             catchError(err =>
        //                 of(new operatorActions.LoadPreferredLocationFail(err)))
        //         )
        //     )
        // );
        this.updatePreferredLocation$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].UPDATE_PREFERRED_LOCATION_FAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.updatePreferredLocation(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updatePreferredLocation) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePreferredLocationSuccess"](updatePreferredLocation);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePreferredLocationFail"](err)); }));
        }));
        // @Effect()
        // addPreferredLocation$: Observable<Action> = this.actions$.pipe(
        //     ofType<operatorActions.AddPreferredLocation>(
        //         operatorActions.OperatorActionTypes.ADD_PREFERRED_LOCATION
        //     ),
        //     map((action: operatorActions.AddPreferredLocation) => action.payload),
        //     mergeMap((data: any) =>
        //         this.operatorService.createPreferredLocation(data).pipe(
        //             map(
        //                 (aaa: Response) => new operatorActions.AddPreferredLocationSuccess(aaa)
        //             ),
        //             catchError(err =>
        //                 of(new operatorActions.AddPreferredLocationFail(err)))
        //         )
        //     )
        // );
        this.addPreferredLocation$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_operator_actions__WEBPACK_IMPORTED_MODULE_5__["OperatorActionTypes"].ADD_PREFERRED_LOCATION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.operatorService.createPreferredLocation(data.id, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (updateOperator) {
                return new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["AddPreferredLocationSuccess"](updateOperator);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _operator_actions__WEBPACK_IMPORTED_MODULE_5__["AddPreferredLocationFail"](err)); }));
        }));
    }
    OperatorEffect.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _operator_service__WEBPACK_IMPORTED_MODULE_6__["OperatorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "deleteOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updateStatus$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "loadOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updateOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updateOperatorBankDetail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "addOperator$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updateOperatorProfile$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "uploadData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updateCommissionDetail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updateInvoiceDetail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "updatePreferredLocation$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OperatorEffect.prototype, "addPreferredLocation$", void 0);
    OperatorEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _operator_service__WEBPACK_IMPORTED_MODULE_6__["OperatorService"]])
    ], OperatorEffect);
    return OperatorEffect;
}());



/***/ }),

/***/ "./src/app/views/pages/operator/state/operator.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/operator/state/operator.reducer.ts ***!
  \****************************************************************/
/*! exports provided: initialState, operatorReducer, selectPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorReducer", function() { return operatorReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageState", function() { return selectPageState; });
/* harmony import */ var _operator_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operator.actions */ "./src/app/views/pages/operator/state/operator.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var initialState = [];
function operatorReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // for Operator add-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].ADD_OPERATOR_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].ADD_OPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Operator load-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].LOAD_OPERATOR_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].LOAD_OPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Operator delete-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].DELETE_OPERATOR_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].DELETE_OPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Operator update-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_FAIL: {
            return action.payload.error;
        }
        // for Operator update-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_BANK_DETAIL_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_BANK_DETAIL_FAIL: {
            return action.payload.error;
        }
        // for Operator upadat status-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_STATUS_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_STATUS_FAIL: {
            return action.payload.error;
        }
        // for Upadte Operator Profile -----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_PROFILE_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_PROFILE_FAIL: {
            return action.payload.error;
        }
        // for operator upadate-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPLOAD_DATA_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPLOAD_DATA_FAIL: {
            return action.payload.error;
        }
        // for Operator update-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_COMMISSION_DETAIL_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_COMMISSION_DETAIL_FAIL: {
            return action.payload.error;
        }
        // for Operator update-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_INVOICE_DETAIL_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_OPERATOR_INVOICE_DETAIL_FAIL: {
            return action.payload.error;
        }
        // for Preferred Location add-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].ADD_PREFERRED_LOCATION_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].ADD_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }
        // for Preferred Location load-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].LOAD_PREFERRED_LOCATION_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].LOAD_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }
        // for preferred location delete-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].DELETE_PREFERRED_LOCATION_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].DELETE_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }
        // for Preferred Location update-----------------------------
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_PREFERRED_LOCATION_SUCCESS: {
            return action.payload;
        }
        case _operator_actions__WEBPACK_IMPORTED_MODULE_0__["OperatorActionTypes"].UPDATE_PREFERRED_LOCATION_FAIL: {
            return action.payload.error;
        }
    }
}
var getOperatorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("operator");
var selectPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getOperatorState, function (state) { return state; } // return error message
);


/***/ })

}]);
//# sourceMappingURL=views-pages-operator-operator-module.js.map