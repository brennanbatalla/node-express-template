webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer.scss */ "./components/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../translate */ "./translate.js");







var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer, _Component);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "CACHE_LANG_KEY", "SELECTED_LANGUAGE");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      language: "en",
      availableLanguages: [{
        code: "en",
        "en-title": "English",
        "zh-title": "英语",
        "zh-traditional-title": "英語"
      }, {
        code: "zh",
        "en-title": "Chinese - Simple",
        "zh-title": "",
        "zh-traditional-title": ""
      }, {
        code: "zh-traditional",
        "en-title": "Chinese - Traditional",
        "zh-title": "",
        "zh-traditional-title": ""
      }],
      languageCodes: {
        "en": "en",
        "en-US": "en",
        "zh": "zh",
        "zh-hk": "zh",
        "zh-sg": "zh",
        "zh-tw": "zh",
        "zh-traditional": "zh-traditional"
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setLanguage", function (event) {
      var code = event.target.value;

      _this.setGlobalLanguage(code);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setGlobalLanguage", function (code) {
      if (!code) return;
      window.localStorage.setItem(_this.CACHE_LANG_KEY, code);

      _this.setState({
        language: code
      });

      _translate__WEBPACK_IMPORTED_MODULE_10__["translateContent"](code);
    });

    _translate__WEBPACK_IMPORTED_MODULE_10__["setElementKey"]("ling-translate");
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var browserLanguage = window.localStorage.getItem(this.CACHE_LANG_KEY) || window.navigator.language;
      this.setGlobalLanguage(this.state.languageCodes[browserLanguage]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          availableLanguages = _this$state.availableLanguages,
          language = _this$state.language;
      return __jsx("div", {
        id: "FooterComponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("h2", {
        className: "color-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, _constants__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]), __jsx("h4", {
        id: "languageSelectLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Language"), __jsx("select", {
        value: language,
        id: "languageSelect",
        onChange: this.setLanguage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, availableLanguages.map(function (lang, key) {
        return __jsx("option", {
          key: key,
          value: lang.code,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, lang.title);
      })));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.40ba5466c4cfd34f56df.hot-update.js.map