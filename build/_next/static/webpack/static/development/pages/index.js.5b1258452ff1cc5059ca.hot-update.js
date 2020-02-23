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
/* harmony import */ var _StepsComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepsComponent.scss */ "./components/Steps/StepsComponent.scss");
/* harmony import */ var _StepsComponent_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_StepsComponent_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/Steps/StepsComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StepsComponent = function StepsComponent(_ref) {
  var _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? [] : _ref$steps;
  return __jsx("div", {
    id: "StepsComponent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "text-align-center font-weight-light color-primary",
    "ling-translate": "HowItWorksSectionTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "How it Works"), __jsx("div", {
    className: "stepsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, steps.map(function (step, id) {
    return __jsx("div", {
      className: "layout",
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "stepContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      className: "stepIcon",
      src: step.icon,
      alt: step.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, step.title), __jsx("p", {
      className: "stepDescription",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, step.description))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StepsComponent);

/***/ })

})
//# sourceMappingURL=index.js.5b1258452ff1cc5059ca.hot-update.js.map