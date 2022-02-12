(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app-contants.ts":
/*!*****************************!*\
  !*** ./src/app-contants.ts ***!
  \*****************************/
/*! exports provided: appConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConstants", function() { return appConstants; });
var appConstants = /** @class */ (function () {
    function appConstants() {
    }
    appConstants.DRIVER_VERIFIED_STATUS = {
        Pending: 0,
        Filled: 1,
        Rejected: 2,
        Verified: 3
    };
    appConstants.REGISTRATION_TYPE = {
        NORMAL: 0,
        GOOGLE: 1,
        FACEBOOK: 2,
        INSTAGRAM: 3
    };
    appConstants.FREQUENCY_TYPE = {
        1: { value: 1, key: "1 Month" },
        2: { value: 3, key: "3 Month" },
        3: { value: 6, key: "6 Month" },
        4: { value: 12, key: "12 Month" }
    };
    return appConstants;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map