webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Toolbar/Toolbar.js":
/*!***************************************!*\
  !*** ./components/Toolbar/Toolbar.js ***!
  \***************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Toolbar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toolbar.scss */ "./components/Toolbar/Toolbar.scss");
/* harmony import */ var _Toolbar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Toolbar_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/Toolbar/Toolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




var Toolbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Toolbar, _Component);

  function Toolbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Toolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Toolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showToolbarBackground: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      _this.setState({
        showToolbarBackground: window.scrollY > 100
      });

      window.addEventListener('scroll', function (e) {
        if (window.scrollY > 100) {
          _this.setState({
            showToolbarBackground: true
          });
        } else {
          _this.setState({
            showToolbarBackground: false
          });
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Toolbar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', false);
    }
  }, {
    key: "render",
    value: function render() {
      var showToolbarBackground = this.state.showToolbarBackground;
      var scrollTo = this.props.scrollTo;
      return __jsx("div", {
        id: "ToolbarCmpnt",
        className: showToolbarBackground ? "showBackground" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("h1", {
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Linguartech"), __jsx("span", {
        className: "flex-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("div", {
        onClick: function onClick() {
          scrollTo(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Home")), __jsx("div", {
        onClick: function onClick() {
          scrollTo("");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "About")));
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Toolbar/Toolbar */ "./components/Toolbar/Toolbar.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/index.scss */ "./pages/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/About/About */ "./components/About/About.js");
/* harmony import */ var _components_EnterEmail_EnterEmail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/EnterEmail/EnterEmail */ "./components/EnterEmail/EnterEmail.js");
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Team/Team */ "./components/Team/Team.js");
/* harmony import */ var _components_Steps_StepsComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Steps/StepsComponent */ "./components/Steps/StepsComponent.js");
/* harmony import */ var _assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/phone-24px.svg */ "./assets/icons/phone-24px.svg");
/* harmony import */ var _assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/submit-24px.svg */ "./assets/icons/submit-24px.svg");
/* harmony import */ var _assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/people-24px.svg */ "./assets/icons/people-24px.svg");
/* harmony import */ var _assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/airplane-24px.svg */ "./assets/icons/airplane-24px.svg");
/* harmony import */ var _assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/ContactUs/ContactUs */ "./components/ContactUs/ContactUs.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_21__);







var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "steps", [{
      icon: _assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
      title: "Meet with us",
      description: "When you meet with us, we will go over all the different programs and locations we have to offer.  You will be able to select from over 20 different programs in over 5 countries.  We will collect all the information required for the program and Visa."
    }, {
      icon: _assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      title: "Submit Applications",
      description: "Once you choose a program, we will then submit the application and all the required information.  We will also then help submit all your paper work required to gain a visa for your chosen destination."
    }, {
      icon: _assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
      title: "Interview Preparation",
      description: "After being accepted by the university, you will have one last step before you can attend the program.  In order to receive the Visa for the host country, you must interview. We will help prepare you for this so you do not have to worry!"
    }, {
      icon: _assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
      title: "Pack your bags",
      description: "Last step you must take before your program begins is to PACK YOUR BAGS!  Next your off on to your experience of a lifetime trip!"
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "emailOnchange", function (event) {
      _this.setState({
        email: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollTo", function (elementId) {
      var el = document.getElementById(elementId);
      react_scroll__WEBPACK_IMPORTED_MODULE_21__["animateScroll"].scrollTo(el.offsetTop - 100);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_21__["Events"].scrollEvent.register('begin', function (to, element) {
        console.log("begin", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_21__["Events"].scrollEvent.register('end', function (to, element) {
        console.log("end", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_21__["scrollSpy"].update();
    }
  }, {
    key: "render",
    value: function render() {
      var email = this.state.email;
      return __jsx("div", {
        id: "Index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_components_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        scrollTo: this.scrollTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        scrollTo: this.scrollTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx(_components_EnterEmail_EnterEmail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: this.emailOnchange,
        value: email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), __jsx(_components_About_About__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx(_components_Team_Team__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx(_components_Steps_StepsComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
        steps: this.steps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), __jsx(_components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e9a0896e37a86feaa5b5.hot-update.js.map