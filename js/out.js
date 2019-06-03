/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SASS/Style.scss":
/*!*************************!*\
  !*** ./SASS/Style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./Style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./SASS/Style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./SASS/Style.scss?");

/***/ }),

/***/ "./assets/css3.svg":
/*!*************************!*\
  !*** ./assets/css3.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/css3.svg\";\n\n//# sourceURL=webpack:///./assets/css3.svg?");

/***/ }),

/***/ "./assets/email_orange.svg":
/*!*********************************!*\
  !*** ./assets/email_orange.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/email_orange.svg\";\n\n//# sourceURL=webpack:///./assets/email_orange.svg?");

/***/ }),

/***/ "./assets/github_orange.svg":
/*!**********************************!*\
  !*** ./assets/github_orange.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/github_orange.svg\";\n\n//# sourceURL=webpack:///./assets/github_orange.svg?");

/***/ }),

/***/ "./assets/html5.svg":
/*!**************************!*\
  !*** ./assets/html5.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/html5.svg\";\n\n//# sourceURL=webpack:///./assets/html5.svg?");

/***/ }),

/***/ "./assets/jquery.svg":
/*!***************************!*\
  !*** ./assets/jquery.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/jquery.svg\";\n\n//# sourceURL=webpack:///./assets/jquery.svg?");

/***/ }),

/***/ "./assets/js.svg":
/*!***********************!*\
  !*** ./assets/js.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/js.svg\";\n\n//# sourceURL=webpack:///./assets/js.svg?");

/***/ }),

/***/ "./assets/linkedin_orange.svg":
/*!************************************!*\
  !*** ./assets/linkedin_orange.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/linkedin_orange.svg\";\n\n//# sourceURL=webpack:///./assets/linkedin_orange.svg?");

/***/ }),

/***/ "./assets/live_preview.svg":
/*!*********************************!*\
  !*** ./assets/live_preview.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/live_preview.svg\";\n\n//# sourceURL=webpack:///./assets/live_preview.svg?");

/***/ }),

/***/ "./assets/react.svg":
/*!**************************!*\
  !*** ./assets/react.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/react.svg\";\n\n//# sourceURL=webpack:///./assets/react.svg?");

/***/ }),

/***/ "./assets/sass.svg":
/*!*************************!*\
  !*** ./assets/sass.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/sass.svg\";\n\n//# sourceURL=webpack:///./assets/sass.svg?");

/***/ }),

/***/ "./assets/show_code.svg":
/*!******************************!*\
  !*** ./assets/show_code.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/show_code.svg\";\n\n//# sourceURL=webpack:///./assets/show_code.svg?");

/***/ }),

/***/ "./assets/technology--small.jpg":
/*!**************************************!*\
  !*** ./assets/technology--small.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/technology--small.jpg\";\n\n//# sourceURL=webpack:///./assets/technology--small.jpg?");

/***/ }),

/***/ "./assets/vscode.svg":
/*!***************************!*\
  !*** ./assets/vscode.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/vscode.svg\";\n\n//# sourceURL=webpack:///./assets/vscode.svg?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _nav = __webpack_require__(/*! ./nav */ \"./js/nav.js\");\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _hamburger = __webpack_require__(/*! ./hamburger */ \"./js/hamburger.js\");\n\nvar _hamburger2 = _interopRequireDefault(_hamburger);\n\nvar _socialMediaIcons = __webpack_require__(/*! ./social-media-icons */ \"./js/social-media-icons.js\");\n\nvar _socialMediaIcons2 = _interopRequireDefault(_socialMediaIcons);\n\nvar _copyrights = __webpack_require__(/*! ./copyrights */ \"./js/copyrights.js\");\n\nvar _copyrights2 = _interopRequireDefault(_copyrights);\n\nvar _arrowGoDown = __webpack_require__(/*! ./arrowGoDown */ \"./js/arrowGoDown.js\");\n\nvar _arrowGoDown2 = _interopRequireDefault(_arrowGoDown);\n\nvar _arrowGoToTop = __webpack_require__(/*! ./arrowGoToTop */ \"./js/arrowGoToTop.js\");\n\nvar _arrowGoToTop2 = _interopRequireDefault(_arrowGoToTop);\n\n__webpack_require__(/*! ../SASS/Style.scss */ \"./SASS/Style.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar desktopBreakPoint = 740;\n$(document).ready(function () {\n  var loadingPage = \"<div class='loading__page'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>\";\n  var body = $(\"body\");\n\n  body.append(loadingPage);\n\n  setTimeout(function () {\n    $(\".loading__page\").hide();\n    (0, _nav2.default)();\n    (0, _hamburger2.default)();\n    (0, _socialMediaIcons2.default)();\n    (0, _copyrights2.default)();\n    (0, _arrowGoDown2.default)();\n    (0, _arrowGoToTop2.default)();\n  }, 1000);\n\n  var mainNav = $(\".nav\");\n  console.log(mainNav);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/arrowGoDown.js":
/*!***************************!*\
  !*** ./js/arrowGoDown.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar arrowDownElement = function arrowDownElement() {\n  var nav = $(\"nav\");\n\n  var createArrowDown = $(\"<div class='arrow--down'></div>\");\n  nav.append(createArrowDown);\n\n  var arrowDown = $(\".arrow--down\");\n\n  //Display arrowDown\n\n  window.addEventListener(\"scroll\", function () {\n    if (window.pageYOffset >= 500) {\n      arrowDown.css(\"display\", \"none\");\n    } else {\n      arrowDown.css(\"display\", \"block\");\n    }\n  });\n\n  arrowDown.on(\"click\", function () {\n    $(\"body, html\").animate({\n      scrollTop: $(\"#about\").offset().top\n    }, 600);\n  });\n};\n\nexports.default = arrowDownElement;\n\n//# sourceURL=webpack:///./js/arrowGoDown.js?");

/***/ }),

/***/ "./js/arrowGoToTop.js":
/*!****************************!*\
  !*** ./js/arrowGoToTop.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar arrowUpElement = function arrowUpElement() {\n  var mainContainer = $(\".main__container\");\n\n  var arrowUp = $(\"<div class='arrow--up'></div>\");\n  mainContainer.append(arrowUp);\n\n  var arrow = $(\".arrow--up\");\n\n  //Display arrowUp\n  arrow.hide();\n  window.addEventListener(\"scroll\", function () {\n    if (window.pageYOffset >= 500) {\n      arrowUp.css(\"display\", \"initial\");\n    } else {\n      arrowUp.css(\"display\", \"none\");\n    }\n  });\n\n  arrow.on(\"click\", function () {\n    $(\"body, html\").animate({\n      scrollTop: $(\"header\").offset().top\n    }, 600);\n  });\n};\n\nexports.default = arrowUpElement;\n\n//# sourceURL=webpack:///./js/arrowGoToTop.js?");

/***/ }),

/***/ "./js/copyrights.js":
/*!**************************!*\
  !*** ./js/copyrights.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _variables = __webpack_require__(/*! ./variables */ \"./js/variables.js\");\n\nvar copyrightsElement = function copyrightsElement() {\n  var copyrightsTop = $(\"header\").find(\".copyrights\");\n  var copyrightsBottom = $(\"footer\").find(\".copyrights\");\n\n  var loadCopy = function loadCopy() {\n    if (window.innerWidth < _variables.desktopBreakPoint) {\n      copyrightsTop.hide();\n      copyrightsBottom.show();\n    } else {\n      copyrightsBottom.hide();\n      copyrightsTop.show();\n    }\n  };\n\n  var displayCopyOnResize = function displayCopyOnResize() {\n    $(window).resize(function () {\n      loadCopy();\n    });\n  };\n\n  var copyScrollBehavior = function copyScrollBehavior() {\n    $(window).on(\"scroll\", function () {\n      if (window.pageYOffset >= 500) {\n        copyrightsTop.addClass(\"display\");\n      } else {\n        copyrightsTop.removeClass(\"display\");\n      }\n    });\n  };\n\n  loadCopy();\n  displayCopyOnResize();\n  copyScrollBehavior();\n};\n\nexports.default = copyrightsElement;\n\n//# sourceURL=webpack:///./js/copyrights.js?");

/***/ }),

/***/ "./js/hamburger.js":
/*!*************************!*\
  !*** ./js/hamburger.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar hamburgerElement = function hamburgerElement() {\n  //Create hamburger\n  var nav = $(\"nav\");\n  var hamburger = $(\"<div class='hamburger'>\" + \"<div class='hamburger__line'></div>\" + \"<div class='hamburger__line'></div>\" + \"<div class='hamburger__line'></div>\" + \"</div>\");\n\n  nav.prepend(hamburger);\n  var mainNavList = $(\".nav__list\");\n\n  //Toggle mobile-nav on click\n  hamburger.on(\"click\", function () {\n    mainNavList.toggle();\n  });\n};\n\nexports.default = hamburgerElement;\n\n//# sourceURL=webpack:///./js/hamburger.js?");

/***/ }),

/***/ "./js/nav.js":
/*!*******************!*\
  !*** ./js/nav.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _variables = __webpack_require__(/*! ./variables */ \"./js/variables.js\");\n\nvar navElement = function navElement() {\n  // Nav list\n  var navList = $(\".nav__list\");\n  var navListItem = $(\".nav__list__item>a\");\n  var breakPoint = 740;\n  console.log(breakPoint);\n  // Add function on click to nav links\n  navListItem.each(function () {\n    var navLink = $(this).attr(\"href\");\n\n    $(this).on(\"click\", function () {\n      $(\"body, html\").animate({\n        scrollTop: $(navLink).offset().top\n      }, 600);\n    });\n  });\n\n  if (window.innerWidth < _variables.desktopBreakPoint) {\n    navList.hide();\n  } else {\n    navList.show();\n  }\n\n  $(window).on(\"scroll\", function () {\n    if (window.innerWidth > _variables.desktopBreakPoint) {\n      if (window.pageYOffset > 450) {\n        navList.addClass(\"sticky__nav--add\");\n      } else {\n        navList.removeClass(\"sticky__nav--add\");\n      }\n    } else {\n      navList.removeClass(\"sticky__nav--add\");\n    }\n  });\n\n  $(window).resize(function () {\n    if (window.innerWidth < _variables.desktopBreakPoint) {\n      navList.hide();\n    } else {\n      navList.show();\n    }\n  });\n};\n\nexports.default = navElement;\n\n//# sourceURL=webpack:///./js/nav.js?");

/***/ }),

/***/ "./js/social-media-icons.js":
/*!**********************************!*\
  !*** ./js/social-media-icons.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _variables = __webpack_require__(/*! ./variables */ \"./js/variables.js\");\n\nvar socialMediaIconsElement = function socialMediaIconsElement() {\n  //Social media icons\n  var socialMediaIcons = $(\".social__media__icons\");\n  var linkedin = $(\".linkedin\");\n  var github = $(\".github\");\n  var email = $(\".email\");\n\n  linkedin.on(\"click\", function () {\n    window.open(\"https://www.linkedin.com/in/tomasz-mojsiuk/\");\n  });\n\n  github.on(\"click\", function () {\n    window.open(\"https://github.com/TomekMojsiuk\");\n  });\n\n  email.on(\"click\", function () {\n    $(\"body, html\").animate({\n      scrollTop: $(\"#contact\").offset().top\n    }, 600);\n  });\n\n  var pageOffset = function pageOffset() {\n    $(window).on(\"scroll\", function () {\n      if (window.innerWidth > _variables.desktopBreakPoint) {\n        if (window.pageYOffset > 450) {\n          socialMediaIcons.addClass(\"sticky__icons--add\");\n        } else {\n          socialMediaIcons.removeClass(\"sticky__icons--add\");\n        }\n      } else {\n        socialMediaIcons.removeClass(\"sticky__icons--add\");\n      }\n    });\n  };\n  pageOffset();\n};\n\nexports.default = socialMediaIconsElement;\n\n//# sourceURL=webpack:///./js/social-media-icons.js?");

/***/ }),

/***/ "./js/variables.js":
/*!*************************!*\
  !*** ./js/variables.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar desktopBreakPoint = exports.desktopBreakPoint = 740;\n\n//# sourceURL=webpack:///./js/variables.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./SASS/Style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./SASS/Style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Poppins);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Mukta);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Ubuntu);\", \"\"]);\nvar urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/linkedin_orange.svg */ \"./assets/linkedin_orange.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../assets/github_orange.svg */ \"./assets/github_orange.svg\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../assets/email_orange.svg */ \"./assets/email_orange.svg\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../assets/technology--small.jpg */ \"./assets/technology--small.jpg\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../assets/html5.svg */ \"./assets/html5.svg\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../assets/css3.svg */ \"./assets/css3.svg\"));\nvar ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../assets/sass.svg */ \"./assets/sass.svg\"));\nvar ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../assets/js.svg */ \"./assets/js.svg\"));\nvar ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../assets/jquery.svg */ \"./assets/jquery.svg\"));\nvar ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../assets/react.svg */ \"./assets/react.svg\"));\nvar ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../assets/vscode.svg */ \"./assets/vscode.svg\"));\nvar ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../assets/show_code.svg */ \"./assets/show_code.svg\"));\nvar ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../assets/live_preview.svg */ \"./assets/live_preview.svg\"));\n\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  color: #d5e2fd; }\\n\\nhtml,\\nbody {\\n  font-family: 'Open Sans', sans-serif;\\n  font-weight: 100;\\n  letter-spacing: 1px;\\n  font-size: 10px;\\n  min-height: 450vh;\\n  background: linear-gradient(to top, #05111A, #092233, #092233, #0B283D, #113E5E);\\n  background-size: cover;\\n  background-repeat: no-repeat; }\\n  @media all and (min-width: 740px) {\\n    html,\\n    body {\\n      min-height: 500vh;\\n      overflow-x: hidden; } }\\n\\nsection {\\n  font-family: 'Calibri Light', sans-serif;\\n  letter-spacing: 1px;\\n  min-height: 100vh;\\n  padding: 50px 0 20px 0; }\\n  @media all and (min-width: 740px) {\\n    section {\\n      padding: 80px 0 20px 0; } }\\n  section h2 {\\n    align-self: flex-start;\\n    margin: 10px 0 30px 10px;\\n    font-size: 3rem;\\n    letter-spacing: 2px; }\\n    section h2 span {\\n      font-size: 3.5rem;\\n      margin-right: 2px; }\\n    @media all and (min-width: 740px) {\\n      section h2 {\\n        margin: 40px 0;\\n        margin-left: calc(20%); }\\n        section h2 span {\\n          margin-right: 0; } }\\n\\nul, li {\\n  list-style: none; }\\n\\na {\\n  text-decoration: none; }\\n\\nspan {\\n  color: #F59C00; }\\n\\n.main__container {\\n  margin: 0 auto;\\n  padding: 0 10px;\\n  max-width: 1100px;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column; }\\n\\n.loading__page {\\n  position: fixed;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100vw;\\n  background: linear-gradient(to top, #051937, #092a49, #103c5b, #194f6c, #25627c);\\n  transition: all .3s ease-in-out;\\n  z-index: 30; }\\n  .loading__page .lds-roller {\\n    display: inline-block;\\n    position: relative;\\n    width: 64px;\\n    height: 64px; }\\n  .loading__page .lds-roller div {\\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\\n    transform-origin: 32px 32px; }\\n  .loading__page .lds-roller div:after {\\n    content: \\\" \\\";\\n    display: block;\\n    position: absolute;\\n    width: 6px;\\n    height: 6px;\\n    border-radius: 50%;\\n    background: #F59C00;\\n    margin: -3px 0 0 -3px; }\\n  .loading__page .lds-roller div:nth-child(1) {\\n    animation-delay: -0.036s; }\\n  .loading__page .lds-roller div:nth-child(1):after {\\n    top: 50px;\\n    left: 50px; }\\n  .loading__page .lds-roller div:nth-child(2) {\\n    animation-delay: -0.072s; }\\n  .loading__page .lds-roller div:nth-child(2):after {\\n    top: 54px;\\n    left: 45px; }\\n  .loading__page .lds-roller div:nth-child(3) {\\n    animation-delay: -0.108s; }\\n  .loading__page .lds-roller div:nth-child(3):after {\\n    top: 57px;\\n    left: 39px; }\\n  .loading__page .lds-roller div:nth-child(4) {\\n    animation-delay: -0.144s; }\\n  .loading__page .lds-roller div:nth-child(4):after {\\n    top: 58px;\\n    left: 32px; }\\n  .loading__page .lds-roller div:nth-child(5) {\\n    animation-delay: -0.18s; }\\n  .loading__page .lds-roller div:nth-child(5):after {\\n    top: 57px;\\n    left: 25px; }\\n  .loading__page .lds-roller div:nth-child(6) {\\n    animation-delay: -0.216s; }\\n  .loading__page .lds-roller div:nth-child(6):after {\\n    top: 54px;\\n    left: 19px; }\\n  .loading__page .lds-roller div:nth-child(7) {\\n    animation-delay: -0.252s; }\\n  .loading__page .lds-roller div:nth-child(7):after {\\n    top: 50px;\\n    left: 14px; }\\n  .loading__page .lds-roller div:nth-child(8) {\\n    animation-delay: -0.288s; }\\n  .loading__page .lds-roller div:nth-child(8):after {\\n    top: 45px;\\n    left: 10px; }\\n\\n@keyframes lds-roller {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n.arrow--up {\\n  position: fixed;\\n  bottom: 15px;\\n  right: 15px;\\n  height: 20px;\\n  width: 20px;\\n  border-top: 2px solid #F59C00;\\n  border-left: 2px solid #F59C00;\\n  transform: rotate(45deg);\\n  transition: all .3s ease-in-out;\\n  z-index: 1; }\\n  .arrow--up:active {\\n    border-color: rgba(245, 156, 0, 0.6); }\\n  @media all and (min-width: 740px) {\\n    .arrow--up {\\n      height: 35px;\\n      width: 35px;\\n      right: 100px;\\n      border-top: 3px solid #F59C00;\\n      border-left: 3px solid #F59C00; }\\n      .arrow--up:hover {\\n        border-color: rgba(245, 156, 0, 0.6);\\n        height: 38px;\\n        width: 38px;\\n        border-top: 4px solid #F59C00;\\n        border-left: 4px solid #F59C00; } }\\n\\n.arrow--down {\\n  position: absolute;\\n  bottom: 20%;\\n  left: calc(50% - 13px);\\n  height: 20px;\\n  width: 20px;\\n  border-bottom: 2px solid #F59C00;\\n  border-right: 2px solid #F59C00;\\n  transform: rotate(45deg);\\n  transition: all 0.3s ease-in-out;\\n  z-index: 1;\\n  animation: color 1.5s infinite; }\\n  .arrow--down:active {\\n    border-color: rgba(245, 156, 0, 0.6); }\\n  @media all and (min-width: 740px) {\\n    .arrow--down {\\n      height: 26px;\\n      width: 26px;\\n      border-bottom: 2px solid #F59C00;\\n      border-right: 2px solid #F59C00;\\n      transition: all 0.3s ease-in-out; }\\n      .arrow--down:hover {\\n        border-color: rgba(245, 156, 0, 0.6);\\n        height: 30px;\\n        width: 30px;\\n        border-bottom: 2px solid #F59C00;\\n        border-right: 2px solid #F59C00;\\n        transition: all 0.3s ease-in-out; } }\\n\\n@keyframes color {\\n  0% {\\n    border-bottom: 2px solid rgba(245, 156, 0, 0.8);\\n    border-right: 2px solid rgba(245, 156, 0, 0.8); }\\n  50% {\\n    border-bottom: 2px solid rgba(245, 156, 0, 0.4);\\n    border-right: 2px solid rgba(245, 156, 0, 0.4); }\\n  100% {\\n    border-bottom: 2px solid rgba(245, 156, 0, 0.8);\\n    border-right: 2px solid rgba(245, 156, 0, 0.8); } }\\n\\n@keyframes showItem {\\n  from {\\n    opacity: 0;\\n    top: -300px; }\\n  to {\\n    opacity: 1;\\n    top: 60px; } }\\n\\n.nav__list {\\n  position: fixed;\\n  width: 325px;\\n  top: 90px;\\n  left: calc(50% - 162.5px);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  border-radius: 5px;\\n  background: rgba(5, 17, 26, 0.9);\\n  transition: all 0.3s ease-in-out;\\n  z-index: 30; }\\n  .nav__list__item {\\n    width: 300px;\\n    margin: 20px 0;\\n    animation: showItem 1s; }\\n    .nav__list__item a {\\n      display: block;\\n      width: 100%;\\n      padding: 8px 0;\\n      font-size: 2rem;\\n      border: 1px solid transparent; }\\n    .nav__list__item :active {\\n      border: 1px solid #F59C00;\\n      border-radius: 5px; }\\n  @media all and (min-width: 740px) {\\n    .nav__list {\\n      position: initial;\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: space-between;\\n      left: calc(50% - 250px);\\n      width: 500px;\\n      height: 70px;\\n      border: none;\\n      box-shadow: none;\\n      background: none;\\n      margin-bottom: 30px;\\n      transition: all 0.8s ease-in-out; }\\n      .nav__list__item {\\n        width: 150px;\\n        margin: 20px 0; }\\n        .nav__list__item a {\\n          display: block;\\n          position: relative;\\n          width: 100%;\\n          line-height: 60px;\\n          font-size: 2.5rem;\\n          border: 1p solid transparent;\\n          transition: none; }\\n          .nav__list__item a::after {\\n            content: \\\"\\\";\\n            position: absolute;\\n            width: 100%;\\n            height: 0;\\n            bottom: 0;\\n            left: 0;\\n            border-radius: 5px;\\n            transition: height 0.2s ease-in-out; }\\n          .nav__list__item a:hover::after {\\n            height: 70px;\\n            box-shadow: 0 0 1px 1px rgba(235, 240, 245, 0.2); }\\n        .nav__list__item :focus {\\n          border: 1px solid transparent; }\\n        .nav__list__item:last-child {\\n          margin-right: 0; } }\\n\\n.sticky__nav--add {\\n  position: fixed;\\n  font-size: 2rem;\\n  top: 15px;\\n  height: 70px;\\n  left: calc(50% - 250px); }\\n\\n/*======= HAMBURGER =========*/\\n.hamburger {\\n  position: fixed;\\n  top: 15px;\\n  right: 10px;\\n  width: 30px;\\n  height: 30px;\\n  z-index: 3; }\\n  .hamburger .hamburger__line {\\n    height: 3px;\\n    width: 100%;\\n    margin-bottom: 9px;\\n    background-color: #F59C00;\\n    border-radius: 2px; }\\n    .hamburger .hamburger__line:last-child {\\n      margin-bottom: 0; }\\n  .hamburger:active .hamburger__line {\\n    background-color: rgba(245, 156, 0, 0.6); }\\n  @media all and (min-width: 740px) {\\n    .hamburger {\\n      display: none; } }\\n\\nheader {\\n  font-family: 'Calibri Light', sans-serif;\\n  letter-spacing: 1px;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 1.2rem;\\n  min-height: 100vh; }\\n  @media all and (min-width: 740px) {\\n    header {\\n      font-size: 2rem;\\n      min-height: 100vh;\\n      justify-content: center; } }\\n\\n.title__mobile {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center; }\\n  .title__mobile :nth-child(1) {\\n    font-size: 2.5rem; }\\n    .title__mobile :nth-child(1) span {\\n      font-size: 3.5rem; }\\n  .title__mobile :nth-child(2) {\\n    font-size: 1.4rem; }\\n    .title__mobile :nth-child(2) span {\\n      font-size: 2rem; }\\n  @media all and (min-width: 740px) {\\n    .title__mobile {\\n      display: none; } }\\n\\n.social__media__icons {\\n  display: flex;\\n  position: fixed;\\n  top: 16px;\\n  left: 10px;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n  width: 60%;\\n  height: 30px;\\n  transition: all 0.3s ease-in-out;\\n  z-index: 10; }\\n  @media all and (min-width: 740px) {\\n    .social__media__icons {\\n      position: absolute;\\n      top: calc(60% - 50px);\\n      left: calc(50% - 208px);\\n      align-items: center;\\n      justify-content: space-between;\\n      width: 416px;\\n      height: 50px; } }\\n  .social__media__icons .icon {\\n    height: 30px;\\n    width: 30px;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    transition: all .3s ease-in-out; }\\n    @media all and (min-width: 740px) {\\n      .social__media__icons .icon {\\n        height: 50px;\\n        width: 50px; }\\n        .social__media__icons .icon:hover {\\n          transform: rotate(360deg); } }\\n  .social__media__icons :nth-child(1) {\\n    background: url(\" + ___CSS_LOADER_URL___0___ + \");\\n    background-size: cover;\\n    background-repeat: no-repeat; }\\n  .social__media__icons :nth-child(2) {\\n    background: url(\" + ___CSS_LOADER_URL___1___ + \");\\n    background-size: cover;\\n    background-repeat: no-repeat; }\\n  .social__media__icons :nth-child(3) {\\n    background: url(\" + ___CSS_LOADER_URL___2___ + \");\\n    background-size: cover;\\n    background-repeat: no-repeat; }\\n\\n.sticky__icons--add {\\n  position: fixed;\\n  justify-content: space-around;\\n  font-size: 1rem;\\n  left: calc(50% - 150px);\\n  top: 93vh;\\n  width: 300px;\\n  transition: all .8s ease-in-out; }\\n  .sticky__icons--add .icon {\\n    height: 40px;\\n    width: 40px; }\\n\\n.copyrights {\\n  position: absolute;\\n  display: block;\\n  font-size: 1.2rem;\\n  height: 30px;\\n  width: 220px;\\n  bottom: -12px;\\n  padding: 8px 7px;\\n  border-right: 1px solid #F59C00;\\n  border-top: 1px solid #F59C00; }\\n  @media all and (min-width: 740px) {\\n    .copyrights {\\n      font-size: 1.7rem;\\n      height: 45px;\\n      width: 340px;\\n      bottom: 1vh;\\n      left: 0;\\n      border-right: 3px solid #F59C00;\\n      border-top: 3px solid #F59C00;\\n      transition: all .5s ease-in-out; } }\\n\\n.display {\\n  left: -100%; }\\n\\n#about {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center; }\\n  @media all and (min-width: 740px) {\\n    #about {\\n      justify-content: flex-start; } }\\n  #about .contentbox {\\n    width: 95%;\\n    font-size: 1.7rem;\\n    text-align: left;\\n    padding: 5px 10px;\\n    border: 1px solid;\\n    border-top: none;\\n    border-right: none;\\n    border-image: linear-gradient(to bottom, #F59C00, transparent) 0 20; }\\n    @media all and (min-width: 740px) {\\n      #about .contentbox {\\n        width: 60%;\\n        padding: 5px 15px 10px 15px;\\n        font-size: 2.5rem;\\n        text-align: left;\\n        border-left: 1px solid #F59C00; } }\\n    #about .contentbox p {\\n      letter-spacing: 1px;\\n      width: 100%;\\n      margin: 10px 0; }\\n    #about .contentbox :first-child {\\n      margin: 0 0 10px 0; }\\n  #about .tech__box {\\n    width: 100%;\\n    margin: 50px 0 0 0; }\\n  #about .technologies {\\n    display: flex;\\n    position: relative;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    height: 150px;\\n    z-index: 2; }\\n    #about .technologies ::after {\\n      content: \\\"\\\";\\n      position: absolute;\\n      height: 100%;\\n      width: 100%;\\n      top: 0;\\n      left: 0;\\n      background-image: url(\" + ___CSS_LOADER_URL___3___ + \");\\n      opacity: .1;\\n      background-size: cover;\\n      background-position: center;\\n      background-repeat: no-repeat;\\n      border-radius: 5px;\\n      z-index: -1; }\\n    @media all and (min-width: 740px) {\\n      #about .technologies {\\n        height: 200px;\\n        flex-wrap: nowrap;\\n        justify-content: space-around; } }\\n    #about .technologies .tech__img {\\n      height: 70px;\\n      width: 70px;\\n      background-size: cover;\\n      background-repeat: no-repeat;\\n      opacity: 1; }\\n      @media all and (min-width: 740px) {\\n        #about .technologies .tech__img {\\n          height: 100px;\\n          width: 100px; } }\\n    #about .technologies :nth-child(1) {\\n      margin-bottom: 0; }\\n  #about .html {\\n    background: url(\" + ___CSS_LOADER_URL___4___ + \"); }\\n  #about .css {\\n    background: url(\" + ___CSS_LOADER_URL___5___ + \"); }\\n  #about .sass {\\n    background: url(\" + ___CSS_LOADER_URL___6___ + \"); }\\n  #about .js {\\n    background: url(\" + ___CSS_LOADER_URL___7___ + \"); }\\n  #about .jquery {\\n    background: url(\" + ___CSS_LOADER_URL___8___ + \"); }\\n  #about .react {\\n    background: url(\" + ___CSS_LOADER_URL___9___ + \"); }\\n  #about .vscode {\\n    background: url(\" + ___CSS_LOADER_URL___10___ + \"); }\\n\\n#portfolio {\\n  font-family: 'Calibri Light', sans-serif;\\n  letter-spacing: 1px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  width: 100%;\\n  padding: 50px 10px 0 10px; }\\n  @media all and (min-width: 740px) {\\n    #portfolio {\\n      flex-direction: row; } }\\n\\n.project {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n  width: 100%;\\n  min-height: 200px;\\n  padding: 0 0 0 5px;\\n  margin: 20px 0;\\n  border-left: 1px solid;\\n  border-image: linear-gradient(to bottom, #F59C00, transparent) 0 20; }\\n  .project .project__img {\\n    position: relative;\\n    height: 100%;\\n    width: 100%; }\\n    .project .project__img img {\\n      height: 100%;\\n      width: 100%; }\\n    @media all and (min-width: 740px) {\\n      .project .project__img {\\n        height: 200px;\\n        width: 200px; } }\\n    .project .project__img:hover .project__img--detalis, .project .project__img:active .project__img--detalis, .project .project__img:focus .project__img--detalis {\\n      height: 100%; }\\n      .project .project__img:hover .project__img--detalis .icon, .project .project__img:active .project__img--detalis .icon, .project .project__img:focus .project__img--detalis .icon {\\n        display: initial; }\\n  .project .project__img--detalis {\\n    position: absolute;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    justify-content: center;\\n    align-items: center;\\n    height: 0%;\\n    width: 100%;\\n    bottom: 0;\\n    left: 0;\\n    background: rgba(5, 25, 55, 0.5);\\n    transition: all .3s ease-in-out;\\n    z-index: 1; }\\n    .project .project__img--detalis .icon {\\n      display: none;\\n      height: 50px;\\n      width: 50px;\\n      margin-right: 40px;\\n      transition: all .3s ease-in-out; }\\n      .project .project__img--detalis .icon:hover {\\n        transform: rotate(360deg); }\\n    .project .project__img--detalis .show__code {\\n      background: url(\" + ___CSS_LOADER_URL___11___ + \");\\n      background-size: cover;\\n      background-repeat: no-repeat; }\\n    .project .project__img--detalis .show__preview {\\n      margin-right: 0;\\n      background: url(\" + ___CSS_LOADER_URL___12___ + \");\\n      background-size: cover;\\n      background-repeat: no-repeat; }\\n  .project .project__details {\\n    display: flex;\\n    flex-direction: column;\\n    height: auto;\\n    width: 100%; }\\n    .project .project__details .used__technologies {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center;\\n      justify-content: flex-start;\\n      width: 100%;\\n      height: auto;\\n      padding: 10px 0; }\\n      .project .project__details .used__technologies .tech {\\n        height: 40px;\\n        width: 40px;\\n        margin-right: 10px;\\n        background-size: cover;\\n        background-repeat: no-repeat; }\\n    .project .project__details .description {\\n      padding: 10px 0;\\n      font-size: 1.7rem; }\\n  .project .html {\\n    background: url(\" + ___CSS_LOADER_URL___4___ + \"); }\\n  .project .css {\\n    background: url(\" + ___CSS_LOADER_URL___5___ + \"); }\\n  .project .sass {\\n    background: url(\" + ___CSS_LOADER_URL___6___ + \"); }\\n  .project .js {\\n    background: url(\" + ___CSS_LOADER_URL___7___ + \"); }\\n  .project .jquery {\\n    background: url(\" + ___CSS_LOADER_URL___8___ + \"); }\\n  .project .react {\\n    background: url(\" + ___CSS_LOADER_URL___9___ + \"); }\\n  .project .vscode {\\n    background: url(\" + ___CSS_LOADER_URL___10___ + \"); }\\n\\nfooter {\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  font-size: .8rem;\\n  min-height: 10vh;\\n  bottom: 20px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./SASS/Style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });