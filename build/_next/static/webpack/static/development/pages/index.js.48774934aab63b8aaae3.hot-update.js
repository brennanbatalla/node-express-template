webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Steps/StepsComponent.js":
/*!********************************************!*\
  !*** ./components/Steps/StepsComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/Steps/StepsComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var StepsComponent = function StepsComponent(_ref) {
  var _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? [] : _ref$steps;
  return __jsx("div", {
    id: "StepsComponent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h1", {
    className: "text-align-center font-weight-light color-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "How it Works"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, steps.map(function (step, id) {
    var ICON = step.icon;
    return __jsx("div", {
      key: id,
      className: "stepContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(ICON, {
      className: "stepIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, step.title), __jsx("p", {
      className: "stepDescription",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, step.description));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StepsComponent);

/***/ })

})
//# sourceMappingURL=index.js.48774934aab63b8aaae3.hot-update.js.map