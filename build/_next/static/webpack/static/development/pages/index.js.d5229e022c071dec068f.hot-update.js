webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NotificationPopup/NotificationPopup.js":
/*!***********************************************************!*\
  !*** ./components/NotificationPopup/NotificationPopup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Notification/Notification */ "./components/NotificationPopup/Notification/Notification.js");
/* harmony import */ var _NotificationPopup_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NotificationPopup.scss */ "./components/NotificationPopup/NotificationPopup.scss");
/* harmony import */ var _NotificationPopup_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_NotificationPopup_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var event_subscription__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! event-subscription */ "./node_modules/event-subscription/index.js");
/* harmony import */ var event_subscription__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(event_subscription__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./constants.js");









var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/NotificationPopup/NotificationPopup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






var NotificationPopup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NotificationPopup, _Component);

  function NotificationPopup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NotificationPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(NotificationPopup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      notifications: {
        0: {
          title: "Form Submitted!",
          type: "success"
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "noticeSubscription", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addNotification", function (notification) {
      console.log(notification);
      var obj = _this.state.notifications;
      obj[_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.notifications).length] = notification;

      _this.setState(function (state) {
        return {
          notifications: obj
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "removeNotification", function (index) {
      _this.setTimeout(function () {
        if (_this.state.notifications[index]) {
          delete _this.state.notifications[index];
        }
      }, 3000);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NotificationPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.noticeSubscription = Object(event_subscription__WEBPACK_IMPORTED_MODULE_12__["subscribe"])(_constants__WEBPACK_IMPORTED_MODULE_13__["ADD_NOTIFCATION"], this.addNotification);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var notifications = this.state.notifications;
      return __jsx("div", {
        id: "NotificationPopup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(notifications).map(function (index, key) {
        var notification = notifications[index];

        _this2.removeNotification(index);

        return __jsx(_Notification_Notification__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: key,
          title: notification.title,
          type: notification.type,
          display: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        });
      }));
    }
  }]);

  return NotificationPopup;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

function mapStateToProps(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationPopup);

/***/ })

})
//# sourceMappingURL=index.js.d5229e022c071dec068f.hot-update.js.map