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
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
var validatePhoneNumber = function validatePhoneNumber(number) {
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  if (number.value.match(phoneno)) {
    return true;
  } else {
    alert("message");
    return false;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.51af43dd37e7496d8e40.hot-update.js.map