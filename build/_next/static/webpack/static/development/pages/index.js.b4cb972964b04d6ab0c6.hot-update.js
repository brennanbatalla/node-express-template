webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Utils.js":
/*!******************!*\
  !*** ./Utils.js ***!
  \******************/
/*! exports provided: validateEmail, validatePhoneNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePhoneNumber", function() { return validatePhoneNumber; });
var validateEmail = function validateEmail(email) {
  if (!email) return;
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
var validatePhoneNumber = function validatePhoneNumber(number) {
  if (!number) return;
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return !!number.match(phoneno);
};

/***/ })

})
//# sourceMappingURL=index.js.b4cb972964b04d6ab0c6.hot-update.js.map