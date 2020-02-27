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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      language: "en",
      availableLanguages: [{
        code: "en",
        title: "English"
      }, {
        code: "zh",
        title: "Chinese - Simple"
      }, {
        code: "zh-traditional",
        title: "Chinese - Traditional"
      }],
      languageCodes: {
        "en": "en",
        "en-US": "en",
        "zh": "zh",
        "zh-hk": "zh",
        "zh-sg": "zh",
        "zh-tw": "zh"
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "CACHE_LANG_KEY", "SELECTED_LANGUAGE");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setLanguage", function (event) {
      var code = event.target.value;

      _this.setGlobalLanguage(code);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setGlobalLanguage", function (code) {
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
          lineNumber: 54
        },
        __self: this
      }, __jsx("h2", {
        className: "color-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, _constants__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]), __jsx("h4", {
        id: "languageSelectLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Language"), __jsx("select", {
        value: language,
        id: "languageSelect",
        onChange: this.setLanguage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, availableLanguages.map(function (lang, key) {
        return __jsx("option", {
          key: key,
          value: lang.code,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, lang.title);
      })));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./translatedContent.json":
/*!********************************!*\
  !*** ./translatedContent.json ***!
  \********************************/
/*! exports provided: HeaderTitle, HeaderSubtitle, ContactUsButton, HomeSectionTitle, AboutSectionTitle, OurTeamSectionTitle, HowItWorksSectionTitle, ContactUsSectionTitle, EmailSubscribe, EmailSubscribeButton, EmailSubscribeInput, AboutUsContentText, AboutUsBookingPlatform, AboutUsBookingPlatformText, AboutUsOnlineEducation, AboutUsOnlineEducationText, AboutUsGlobalNetwork, AboutUsGlobalNetworkText, StepsSearch, StepsSearchText, StepsSubmit, StepsSubmitText, StepsTalk, StepsTalkText, StepsPack, StepsPackText, FounderCEO, CoFounderCTO, CoFounderAdvisor, ContactUsFirstName, ContactUsLastName, ContactUsEmail, ContactUsPhoneNumber, ContactUsPhoneNumberHint, ContactUsAdditionalInfo, ContactUsFormError, SubmitButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HeaderTitle\":{\"zh-traditional\":\"學習與探索\",\"zh\":\"学习与探索\",\"en\":\"Learn and Explore\"},\"HeaderSubtitle\":{\"zh-traditional\":\"我們相信在學習的同時，你也應該去探索和了解外面的世界。在Linguartech,學習和探索可以同時發生。在Linguartech搜索課程，開啟你的新旅程吧！\",\"zh\":\"我们相信在学习的同时，你也应该去探索和了解外面的世界。在Linguartech, 学习和探索可以同时发生。在Linguartech搜索课程，开启你的新旅程吧！\",\"en\":\"We believe in order to learn you need to adventure outside what you know and experience the world for its many hidden treasures. At Linguartech, learning and exploring can happen at the same time! Join the Linguartech, let’s start this journey now! \"},\"ContactUsButton\":{\"en\":\"Contact Us\",\"zh-traditional\":\"聯繫我們\",\"zh\":\"联系我们\"},\"HomeSectionTitle\":{\"en\":\"Home\",\"zh-traditional\":\"主頁\",\"zh\":\"主页\"},\"AboutSectionTitle\":{\"en\":\"About Us\",\"zh-traditional\":\"關於我們\",\"zh\":\"关于我们\"},\"OurTeamSectionTitle\":{\"en\":\"Our Team\",\"zh-traditional\":\"我們的团队\",\"zh\":\"我们的团队\"},\"HowItWorksSectionTitle\":{\"en\":\"How It Works\",\"zh-traditional\":\"如何操作\",\"zh\":\"如何操作\"},\"ContactUsSectionTitle\":{\"en\":\"Contact Us\",\"zh-traditional\":\"聯繫我們\",\"zh\":\"联系我们\"},\"EmailSubscribe\":{\"en\":\"Subscribe to get alerts on international news, visa updates, discounts and more!\",\"zh-traditional\":\"訂閱以獲得有關國際新聞，簽證更新，折扣等的警報!\",\"zh\":\"点击订阅，获得我们最新的国际项目，推送信息，折扣信息等。\"},\"EmailSubscribeButton\":{\"en\":\"Subscribe\",\"zh-traditional\":\"訂閱\",\"zh\":\"订阅\"},\"EmailSubscribeInput\":{\"en\":\"Enter your Email\",\"zh-traditional\":\"請輸入你的電子郵箱\",\"zh\":\"请输入你的电子邮箱\"},\"AboutUsContentText\":{\"en\":\"Linguartech is an educational booking platform and an online learning center. We connect students to worldwide short-term academic programs by helping them go to the school in person or through an online offering. With Linguartech, you can find Language Learning, Music & Art, and Science & Technology programs. No matter who you are or where you live, you have the same opportunity to reach the best programs in the world.\",\"zh-traditional\":\" Linguartech是一個提供短期國際教育項目的訂購平台和一個在線學習中心。在Linguartech，我們提供國際語言學習項目，國際音樂與藝術項目，國際自然與科技項目等。無論你是誰，無論你來自與哪裡，你擁有和每一個人同樣的機會去選擇世界最好的學術項目和課程。\",\"zh\":\"Linguartech是一个提供短期国际教育项目的订购平台和一个在线学习中心。在Linguartech，我们提供国际语言学习项目，国际音乐与艺术项目，国际自然与科技项目等。无论你是谁，无论你来自与哪里，你拥有和每一个人同样的机会去选择世界最好的学术项目和课程。\"},\"AboutUsBookingPlatform\":{\"en\":\"Booking Platform\",\"zh-traditional\":\"訂購平台\",\"zh\":\"订购平台\"},\"AboutUsBookingPlatformText\":{\"en\":\"Linguartech is a booking platform!  You can find Language, Music & Art, and Science & Tech programs located in over 10 different countries.  With us, we can guarantee you the best prices out there.\",\"zh-traditional\":\" Linguartech是一個網絡訂購平台。你可以找到來自全球超過10個發達國家的語言學習，音樂與藝術，自然與科技的課程。我們保證我們為您提供最優秀的項目和最優惠的價格。\",\"zh\":\"Linguartech是一个网络订购平台。你可以找到来自全球超过10个发达国家的语言学习，音乐与艺术，自然与科技的课程。我们保证我们为您提供最优秀的项目和最优惠的价格。\"},\"AboutUsOnlineEducation\":{\"en\":\"Online Education\",\"zh-traditional\":\"在線教育\",\"zh\":\"在线教育\"},\"AboutUsOnlineEducationText\":{\"en\":\"Linguartech’s online learning center focuses on foreign language learning; we work with language experts to provide comprehensive courses designed for the best online experience.\",\"zh-traditional\":\" Linguartech在線學習中心專註於不同的語言學習；我們與語言專家合作為大家設計和提供高質量的在線語言學習環境。\",\"zh\":\"Linguartech在线学习中心专注于不同的语言学习；我们与语言专家合作为大家设计和提供高质量的在线语言学习环境。\"},\"AboutUsGlobalNetwork\":{\"en\":\"Global Network\",\"zh-traditional\":\"國際合作\",\"zh\":\"国际合作\"},\"AboutUsGlobalNetworkText\":{\"en\":\"Linguartech has partnered with Colleges and Universities all over the world who are excited to accept new applicants.  Our partners are located in over 10 different countries with programs that fit the needs of any applicant!\",\"zh-traditional\":\" Linguartech與全球的學院和大學建立合作合夥關係，我們的合作夥伴遍布世界各地。如果你有興趣成為我們的合伙人，請聯繫我們。\",\"zh\":\"Linguartech与全球的学院和大学建立合作合伙关系，我们的合作伙伴遍布世界各地。如果你有兴趣成为我们的合伙人，请联系我们。\"},\"StepsSearch\":{\"en\":\"Find Your Programs\",\"zh-traditional\":\"搜索\",\"zh\":\"搜索\"},\"StepsSearchText\":{\"en\":\"We offer many different programs in many different countries. Using our booking platform, you can easily search through them all and find the program that fits your unique needs.\",\"zh-traditional\":\"我們提供位於不同國家，不同領域的國際課程。請使用我們的搜索欄，你可以輕鬆的搜索到符合你的國際項目。\",\"zh\":\"我们提供位于不同国家，不同领域的国际课程。请使用我们的搜索栏，你可以轻松的搜索到符合你的国际项目。\"},\"StepsSubmit\":{\"en\":\"Submit Applications\",\"zh-traditional\":\"提交申請\",\"zh\":\"提交申请\"},\"StepsSubmitText\":{\"en\":\"Using our booking platform, you can easily submit applications for as many programs as you like.  When you submit them, you can rest easily knowing all your personal data is well protected and will only be shared with whom you choose!\",\"zh-traditional\":\"使用我們的預訂平台，您可以輕鬆提交任意數量的程序的申請。當您提交它們時，您可以輕鬆知道所有個人數據都受到良好保護，並且只會與您選擇的人共享！\",\"zh\":\"使用我们的订购平台，你能为你所喜欢的项目快速的提交申请。同时，我们会保护好你的所有个人信息和数据\"},\"StepsTalk\":{\"en\":\"Talk with us\",\"zh-traditional\":\"與我們連線\",\"zh\":\"与我们连线\"},\"StepsTalkText\":{\"en\":\"Once your applications have been submitted, we will contact you within 48 hours. Our professional team will assist you with the application process, visa application, and all other stages of your study abroad trip.\",\"zh-traditional\":\"我們的團隊會在您提交申請後的48小時內與您聯繫。請相信我們專業的團隊對您的協助，我們將為您每個階段的申請流程保駕護航。\",\"zh\":\"我们的团队会在您提交申请后的48小时内与您联系。请相信我们专业的团队对您的协助，我们将为您每个阶段的申请流程保驾护航。\"},\"StepsPack\":{\"en\":\"Pack Your Bags\",\"zh-traditional\":\"整裝待發\",\"zh\":\"整装待发\"},\"StepsPackText\":{\"en\":\"The last step is to go abroad! Once you receive the program offer and visa, it’s time to pack! We will be there to help you with every step of the way and to answer any question you may have!\",\"zh-traditional\":\"當您拿到項目的錄取通知和相應簽證，就可以開始收拾行李，準備出發啦！如旅途中遇到任何問題或需要任何幫助，請隨時聯繫我們！\",\"zh\":\" 当您拿到项目的录取通知和相应签证，就可以开始收拾行李，准备出发啦！如旅途中遇到任何问题或需要任何帮助，请随时联系我们！\"},\"FounderCEO\":{\"en\":\"Founder and CEO\",\"zh-traditional\":\"創始人兼首席執行官\",\"zh\":\"创始人兼首席执行官\"},\"CoFounderCTO\":{\"en\":\"Co-Founder and CTO\",\"zh-traditional\":\"聯合創始人兼首席技術官\",\"zh\":\"联合创始人兼首席技术官\"},\"CoFounderAdvisor\":{\"en\":\"Co-Founder and Advisor\",\"zh-traditional\":\"聯合創始人兼顧問\",\"zh\":\"联合创始人兼顾问\"},\"ContactUsFirstName\":{\"en\":\"First Name\",\"zh-traditional\":\"名\",\"zh\":\"名\"},\"ContactUsLastName\":{\"en\":\"Last Name\",\"zh-traditional\":\"姓\",\"zh\":\"姓\"},\"ContactUsEmail\":{\"en\":\"Email\",\"zh-traditional\":\"電子郵箱\",\"zh\":\"电子邮箱\"},\"ContactUsPhoneNumber\":{\"en\":\"Phone Number\",\"zh-traditional\":\"電話號碼\",\"zh\":\"电话号码\"},\"ContactUsPhoneNumberHint\":{\"en\":\"Please include country code as well.\",\"zh-traditional\":\"請輸入對應的國家代碼\",\"zh\":\"请输入对应的国家代码\"},\"ContactUsAdditionalInfo\":{\"en\":\"(Optional) Any questions or comments you would like us to know ahead of time!\",\"zh-traditional\":\"(選填）請留言告訴我們你的問題和意見建議。\",\"zh\":\"（选填）请留言告诉我们你的问题和意见建议。\"},\"ContactUsFormError\":{\"en\":\"This field is required.\",\"zh-traditional\":\"必填欄。\",\"zh\":\"必填栏\"},\"SubmitButton\":{\"en\":\"Submit\",\"zh-traditional\":\"提交\",\"zh\":\"提交\"}}");

/***/ })

})
//# sourceMappingURL=index.js.3001c6a731ca62e5e3c3.hot-update.js.map