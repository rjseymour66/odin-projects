/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/home-bg.jpg */ "./src/assets/home-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
  /* inherit font so you can define styles 
  for h1, h* elements instead of rely on user 
  agent defaults */
  font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.2;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

button,
input,
select,
textarea {
  /* width: 150px; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-family: inherit;
  font-size: 100%;

  /* removes system-level styling */
  appearance: none;
}

/*****************************
* My styles
******************************/

:root {
  font-size: 1em;

  --ff-primary: "Roboto", sans-serif;

  --fs-header: 7rem;
  --fs-header-secondary: 2rem;
  --fs-header-section: 1.75rem;
  --fs-menu-item-name: 1.25rem;
  --fs-menu-desc: 1rem;
  --fs-menu-price: 1.25rem;
  --fs-about-para: 1.25rem;

  --clr-primary: #fffee0;

  --gap-size: 4rem;
  --gap-section: 3rem;

  --max-width: 1000px;
  --side-padding: 1rem;

  --main-margin-top: 2rem;
}

/*****************************
* Styles start
******************************/

body {
  /* background: url(../src/assets/home-bg.jpg); */
  /* background: url(../src/assets/menu-bg.jpg); */
  /* background-size: cover; */
  font-family: var(--ff-primary);
}

/*****************************
* grid setup
******************************/

#content {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  /* background: url(../src/assets/menu-bg.jpg); */
  background-size: cover;

  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

/*****************************
* Header
******************************/

.main-header__heading {
  font-size: var(--fs-header);
  color: var(--clr-primary);

  text-align: center;
}

.site-nav {
  display: flex;
  gap: var(--gap-size);
  list-style-type: none;

  justify-content: center;
}

.site-nav > li > button {
  padding: 0.5rem 1rem;
  color: var(--clr-primary);
  background-color: transparent;
  border: none;

  font-size: 2rem;
  font-weight: 700;
}

.site-nav .active {
  outline: 2px solid var(--clr-primary);
  border-radius: 3px;
}

/*****************************
* Main home section
******************************/

.section-content {
  flex: 1 0 auto;
}

.section-content .home-text {
  color: var(--clr-primary);

  font-size: 2rem;

  padding: 5rem 15%;
  margin: 0 auto;
}

/*****************************
* Footer
******************************/

.footer {
  display: flex;
  gap: var(--gap-size);
  justify-content: center;

  margin: 5rem 0 0.5rem;

  color: var(--clr-primary);
}

/*****************************
* Menu
******************************/

.menu {
  display: grid;
  grid-template-rows: auto;
  gap: var(--gap-section);

  margin: var(--main-margin-top) 0;
}

.menu-section {
  width: min(var(--max-width), 100% - var(--side-padding) * 2);
  margin: auto;
}

.section-title {
  font-size: var(--fs-header-section);
  color: var(--clr-primary);
  text-transform: uppercase;
}

.menu-list {
  list-style-type: none;
  color: var(--clr-primary);
}

.list-item {
  margin: 1rem 0;
}

.item-name {
  display: block;
  font-size: var(--fs-menu-item-name);
  font-weight: bold;
}

.item-price {
  font-size: var(--fs-menu-price);
  margin-left: 1rem;
}

/*****************************
* About
******************************/

.about-main {
  width: min(900px, 100% - var(--side-padding) * 2);
  margin: var(--main-margin-top) auto;

  color: var(--clr-primary);
  font-size: var(--fs-about-para);
  line-height: 1.5;
}

.about-para:not(:first-of-type) {
  margin: var(--main-margin-top) 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;EACE,SAAS;EACT,UAAU;EACV;;kBAEgB;EAChB,aAAa;AACf;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;AACd;;AAEA,2BAA2B;AAC3B;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;;EAGE,eAAe;EACf,cAAc;AAChB;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA;;;;EAIE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,sBAAsB;;EAEtB,oBAAoB;EACpB,eAAe;;EAEf,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;;8BAE8B;;AAE9B;EACE,cAAc;;EAEd,kCAAkC;;EAElC,iBAAiB;EACjB,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;EAC5B,oBAAoB;EACpB,wBAAwB;EACxB,wBAAwB;;EAExB,sBAAsB;;EAEtB,gBAAgB;EAChB,mBAAmB;;EAEnB,mBAAmB;EACnB,oBAAoB;;EAEpB,uBAAuB;AACzB;;AAEA;;8BAE8B;;AAE9B;EACE,gDAAgD;EAChD,gDAAgD;EAChD,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;;8BAE8B;;AAE9B;EACE,mDAA0C;EAC1C,gDAAgD;EAChD,sBAAsB;;EAEtB,gBAAgB;EAChB,aAAa;EACb,iCAAiC;AACnC;;AAEA;;8BAE8B;;AAE9B;EACE,2BAA2B;EAC3B,yBAAyB;;EAEzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;;EAErB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,6BAA6B;EAC7B,YAAY;;EAEZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;;8BAE8B;;AAE9B;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;;EAEzB,eAAe;;EAEf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;8BAE8B;;AAE9B;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;;EAEvB,qBAAqB;;EAErB,yBAAyB;AAC3B;;AAEA;;8BAE8B;;AAE9B;EACE,aAAa;EACb,wBAAwB;EACxB,uBAAuB;;EAEvB,gCAAgC;AAClC;;AAEA;EACE,4DAA4D;EAC5D,YAAY;AACd;;AAEA;EACE,mCAAmC;EACnC,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;;8BAE8B;;AAE9B;EACE,iDAAiD;EACjD,mCAAmC;;EAEnC,yBAAyB;EACzB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  /* inherit font so you can define styles \n  for h1, h* elements instead of rely on user \n  agent defaults */\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n/* Set core body defaults */\nbody {\n  text-rendering: optimizeSpeed;\n  line-height: 1.2;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  /* width: 150px; */\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n\n  font-family: inherit;\n  font-size: 100%;\n\n  /* removes system-level styling */\n  appearance: none;\n}\n\n/*****************************\n* My styles\n******************************/\n\n:root {\n  font-size: 1em;\n\n  --ff-primary: \"Roboto\", sans-serif;\n\n  --fs-header: 7rem;\n  --fs-header-secondary: 2rem;\n  --fs-header-section: 1.75rem;\n  --fs-menu-item-name: 1.25rem;\n  --fs-menu-desc: 1rem;\n  --fs-menu-price: 1.25rem;\n  --fs-about-para: 1.25rem;\n\n  --clr-primary: #fffee0;\n\n  --gap-size: 4rem;\n  --gap-section: 3rem;\n\n  --max-width: 1000px;\n  --side-padding: 1rem;\n\n  --main-margin-top: 2rem;\n}\n\n/*****************************\n* Styles start\n******************************/\n\nbody {\n  /* background: url(../src/assets/home-bg.jpg); */\n  /* background: url(../src/assets/menu-bg.jpg); */\n  /* background-size: cover; */\n  font-family: var(--ff-primary);\n}\n\n/*****************************\n* grid setup\n******************************/\n\n#content {\n  background: url(../src/assets/home-bg.jpg);\n  /* background: url(../src/assets/menu-bg.jpg); */\n  background-size: cover;\n\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n/*****************************\n* Header\n******************************/\n\n.main-header__heading {\n  font-size: var(--fs-header);\n  color: var(--clr-primary);\n\n  text-align: center;\n}\n\n.site-nav {\n  display: flex;\n  gap: var(--gap-size);\n  list-style-type: none;\n\n  justify-content: center;\n}\n\n.site-nav > li > button {\n  padding: 0.5rem 1rem;\n  color: var(--clr-primary);\n  background-color: transparent;\n  border: none;\n\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.site-nav .active {\n  outline: 2px solid var(--clr-primary);\n  border-radius: 3px;\n}\n\n/*****************************\n* Main home section\n******************************/\n\n.section-content {\n  flex: 1 0 auto;\n}\n\n.section-content .home-text {\n  color: var(--clr-primary);\n\n  font-size: 2rem;\n\n  padding: 5rem 15%;\n  margin: 0 auto;\n}\n\n/*****************************\n* Footer\n******************************/\n\n.footer {\n  display: flex;\n  gap: var(--gap-size);\n  justify-content: center;\n\n  margin: 5rem 0 0.5rem;\n\n  color: var(--clr-primary);\n}\n\n/*****************************\n* Menu\n******************************/\n\n.menu {\n  display: grid;\n  grid-template-rows: auto;\n  gap: var(--gap-section);\n\n  margin: var(--main-margin-top) 0;\n}\n\n.menu-section {\n  width: min(var(--max-width), 100% - var(--side-padding) * 2);\n  margin: auto;\n}\n\n.section-title {\n  font-size: var(--fs-header-section);\n  color: var(--clr-primary);\n  text-transform: uppercase;\n}\n\n.menu-list {\n  list-style-type: none;\n  color: var(--clr-primary);\n}\n\n.list-item {\n  margin: 1rem 0;\n}\n\n.item-name {\n  display: block;\n  font-size: var(--fs-menu-item-name);\n  font-weight: bold;\n}\n\n.item-price {\n  font-size: var(--fs-menu-price);\n  margin-left: 1rem;\n}\n\n/*****************************\n* About\n******************************/\n\n.about-main {\n  width: min(900px, 100% - var(--side-padding) * 2);\n  margin: var(--main-margin-top) auto;\n\n  color: var(--clr-primary);\n  font-size: var(--fs-about-para);\n  line-height: 1.5;\n}\n\n.about-para:not(:first-of-type) {\n  margin: var(--main-margin-top) 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAbout: () => (/* binding */ createAbout)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const p1Text = 'Located on the edge of City Square Park in Charlestown – this restaurant is an energetic Italian celebration of reimagined classics. Our beautifully restored grand bar and dining room – which overlooks the park as well as the city skyline – strives to honor our building’s past and its prestigious placement at the gate of this historic Boston neighborhood';

const p2Text = 'Open daily for lunch and dinner, Prima’s hand-crafted menu has been meticulously curated to provide our guests an incredible dining experience at any time of the day.';

const createAbout = () => {

    let main = document.createElement('main');
    main.classList.add('about-main');

    const section = document.createElement('section');

    const p1 = document.createElement('p');
    p1.classList.add('about-para');
    p1.textContent = p1Text;

    const p2 = document.createElement('p');
    p2.classList.add('about-para');
    p2.textContent = p2Text;

    section.appendChild(p1);
    section.appendChild(p2);

    main.appendChild(section);

    return main;
};



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let createFooter = () => {
    let footer = document.createElement('footer');
    footer.classList.add('footer');

    let location = document.createElement('p');
    location.classList.add('location');
    location.textContent = '100 Main Street, Boston MA';

    let phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = '617-123-4321';

    let email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'info@restaurant.com';

    footer.appendChild(location);
    footer.appendChild(phone);
    footer.appendChild(email);

    return footer;
};



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const createSiteNav = () => {
    let nav = document.createElement('nav');
    nav.classList.add('main-header__nav');

    let ul = document.createElement('ul');
    ul.classList.add('site-nav');
    // create a tags
    let homeLink = document.createElement('button');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.classList.add('active');

    let menuLink = document.createElement('button');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';

    let aboutLink = document.createElement('button');
    aboutLink.href = '#';
    aboutLink.textContent = 'About';

    // create lis
    let homeLi = document.createElement('li');
    let menuLi = document.createElement('li');
    let aboutLi = document.createElement('li');

    homeLi.appendChild(homeLink);
    menuLi.appendChild(menuLink);
    aboutLi.appendChild(aboutLink);

    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(aboutLi);

    nav.appendChild(ul);

    return nav;
};


const createHeader = () => {
    let nav = createSiteNav();

    let header = document.createElement('header');
    header.classList.add('main-header');

    let h1 = document.createElement('h1');
    h1.classList.add('main-header__heading');
    h1.textContent = 'Restaurant Name';

    header.appendChild(h1);
    header.appendChild(nav);

    return header;
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeMain: () => (/* binding */ createHomeMain)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let createHomeMain = () => {
    let main = document.createElement('main');
    main.classList.add('section-content');

    let p = document.createElement('p');
    p.classList.add('home-text');
    p.textContent = 'This restaurant rocks and everyone likes it. A lot. A whole lot. We have fancy food and awesome drinks and these drinks are gonna be awesome.';

    main.appendChild(p);

    return main;
};






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuMain: () => (/* binding */ createMenuMain)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _data_cocktails_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/cocktails.json */ "./src/data/cocktails.json");
/* harmony import */ var _data_starters_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/starters.json */ "./src/data/starters.json");
/* harmony import */ var _data_main_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/main.json */ "./src/data/main.json");
/* harmony import */ var _data_desserts_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/desserts.json */ "./src/data/desserts.json");







let createMenuList = (menuList) => {
    // create the ul
    let ul = document.createElement('ul');
    ul.classList.add('cocktail-list');
    ul.classList.add('menu-list');

    for (let item of menuList) {
        //// create li
        let li = document.createElement('li');
        li.classList.add('list-item');

        //// create p
        let p = document.createElement('p');
        p.classList.add('item-desc');

        //// create item-name span
        let nameSpan = document.createElement('span');

        //// add span.textContent
        nameSpan.textContent = item.name;
        nameSpan.classList.add('item-name');

        //// create item-price span
        let priceSpan = document.createElement('span');
        priceSpan.classList.add('item-price');

        //// add span.textContent
        priceSpan.textContent = item.price;

        //// add p.textContent
        p.textContent = item.description;

        p.prepend(nameSpan);

        // append item-price span to p
        p.appendChild(priceSpan);

        // append p to li
        li.appendChild(p);

        // append li to ul
        ul.appendChild(li);
    }
    return ul;
};

const createMenuSection = (sectionTitle, JSONdata) => {
    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = sectionTitle;

    // create cocktail list
    let ul = createMenuList(JSONdata);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMenuMain = () => {
    const main = document.createElement('menu');
    main.classList.add('menu');

    const cocktailSection = createMenuSection('cocktails', _data_cocktails_json__WEBPACK_IMPORTED_MODULE_1__);
    const starterSection = createMenuSection('starters', _data_starters_json__WEBPACK_IMPORTED_MODULE_2__);
    const mainSection = createMenuSection('main', _data_main_json__WEBPACK_IMPORTED_MODULE_3__);
    const dessertSection = createMenuSection('dessert', _data_desserts_json__WEBPACK_IMPORTED_MODULE_4__);

    main.appendChild(cocktailSection);
    main.appendChild(starterSection);
    main.appendChild(mainSection);
    main.appendChild(dessertSection);

    return main;
};



/***/ }),

/***/ "./src/assets/home-bg.jpg":
/*!********************************!*\
  !*** ./src/assets/home-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4415973cd4bdf20f31fc.jpg";

/***/ }),

/***/ "./src/data/cocktails.json":
/*!*********************************!*\
  !*** ./src/data/cocktails.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"House Martini","description":"Olive oil infused Hendrick\'s gin, vermouth, olives","price":"$20"},{"name":"Manhattan","description":"Bourbon, barolo chinato, cacao bitters","price":"$16"},{"name":"Classic Negroni","description":"Dry gin, sweet vermouth, campari","price":"$14"},{"name":"Aperol Spritz","description":"Aperol, prosecco, soda","price":"$14"},{"name":"Espresso Martini","description":"Vodka, coffee liquer, espresso, bitters, amaro","price":"$16"}]');

/***/ }),

/***/ "./src/data/desserts.json":
/*!********************************!*\
  !*** ./src/data/desserts.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Olive oil chocolate mousse","description":"Dark Italian cocoa, whipped cream, blueberries, cocao nibs","price":"$10"},{"name":"Torta gialla","description":"Yellow cake, chocolate fudge buttercream","price":"$10"}]');

/***/ }),

/***/ "./src/data/main.json":
/*!****************************!*\
  !*** ./src/data/main.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Chicken picatta","description":"Lemon caper butter sauce, penne","price":"$26"},{"name":"Chicken or veal chop milanese","description":"Confit tomato, pickled peppers, ricotta, kale","price":"$26/$42"},{"name":"Ribeye","description":"Brandt beef, boneless 16 oz.","price":"$65"},{"name":"Filet mignon","description":"Brandt beef, 12 oz.","price":"$55"},{"name":"Veal prime rib","description":"Mushroom, au jus, horseradish and goat cheese crema","price":"$45"},{"name":"Dry-aged florentine porterhouse","description":"Autumn caponata, concord grape jus, chili-garlic salsa verde","price":"$150"}]');

/***/ }),

/***/ "./src/data/starters.json":
/*!********************************!*\
  !*** ./src/data/starters.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Bruschetta alla Trapanese","description":"Tomato-almond pesto, ricotta","price":"$12"},{"name":"Meatballs","description":"Roasted tomato ragu, pecorino, parsley","price":"$12"},{"name":"Mussels & Clams","description":"Herb gremolata, white beans, prosecco, salsa bomba, focaccia","price":"$21"},{"name":"Caesar salad","description":"Kale & herb dressing, baby lettuces, pecorino, breadcrumbs","price":"$18"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");









const header = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
const homeMain = (0,_home__WEBPACK_IMPORTED_MODULE_3__.createHomeMain)();
const menuMain = (0,_menu__WEBPACK_IMPORTED_MODULE_5__.createMenuMain)();
const aboutMain = (0,_about__WEBPACK_IMPORTED_MODULE_4__.createAbout)();
const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();


// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');

    // add the header that displays home by default
    renderPage(homeMain);

    // set up event listeners on buttons
    const navButtons = document.querySelectorAll('button');
    navButtons.forEach(button => {
        button.addEventListener('click', e => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            switch (e.target.textContent) {
                case 'Home':
                    renderPage(homeMain);
                    break;
                case 'Menu':
                    renderPage(menuMain);
                    break;
                case 'About':
                    renderPage(aboutMain);
                    break;
                default:
                    break;
            }
        });
    });
});

let clearUI = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

const renderPage = (contentMain) => {
    clearUI(content);
    content.appendChild(header);
    content.appendChild(contentMain);
    content.appendChild(footer);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxrQkFBa0I7QUFDakkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLFFBQVEsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxRQUFRLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLFVBQVUsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sTUFBTSxRQUFRLE1BQU0sV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxhQUFhLGNBQWMsYUFBYSxX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QUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQjs7QUFFdEI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnNCOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJzQjs7QUFFdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHNCOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQjs7QUFFNEI7QUFDRjtBQUNSO0FBQ1E7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQsaURBQWE7QUFDeEUseURBQXlELGdEQUFZO0FBQ3JFLGtEQUFrRCw0Q0FBUTtBQUMxRCx3REFBd0QsZ0RBQVk7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRWtCO0FBQ0E7QUFDQTtBQUNGOztBQUVFOztBQUV4QyxlQUFlLHFEQUFZO0FBQzNCLGlCQUFpQixxREFBYztBQUMvQixpQkFBaUIscURBQWM7QUFDL0Isa0JBQWtCLG1EQUFXO0FBQzdCLGVBQWUscURBQVk7OztBQUczQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2hvbWUtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLyogaW5oZXJpdCBmb250IHNvIHlvdSBjYW4gZGVmaW5lIHN0eWxlcyBcbiAgZm9yIGgxLCBoKiBlbGVtZW50cyBpbnN0ZWFkIG9mIHJlbHkgb24gdXNlciBcbiAgYWdlbnQgZGVmYXVsdHMgKi9cbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXG51bFtyb2xlPVwibGlzdFwiXSxcbm9sW3JvbGU9XCJsaXN0XCJdIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuXG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICAvKiB3aWR0aDogMTUwcHg7ICovXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuXG4gIC8qIHJlbW92ZXMgc3lzdGVtLWxldmVsIHN0eWxpbmcgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIE15IHN0eWxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuXG4gIC0tZmYtcHJpbWFyeTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblxuICAtLWZzLWhlYWRlcjogN3JlbTtcbiAgLS1mcy1oZWFkZXItc2Vjb25kYXJ5OiAycmVtO1xuICAtLWZzLWhlYWRlci1zZWN0aW9uOiAxLjc1cmVtO1xuICAtLWZzLW1lbnUtaXRlbS1uYW1lOiAxLjI1cmVtO1xuICAtLWZzLW1lbnUtZGVzYzogMXJlbTtcbiAgLS1mcy1tZW51LXByaWNlOiAxLjI1cmVtO1xuICAtLWZzLWFib3V0LXBhcmE6IDEuMjVyZW07XG5cbiAgLS1jbHItcHJpbWFyeTogI2ZmZmVlMDtcblxuICAtLWdhcC1zaXplOiA0cmVtO1xuICAtLWdhcC1zZWN0aW9uOiAzcmVtO1xuXG4gIC0tbWF4LXdpZHRoOiAxMDAwcHg7XG4gIC0tc2lkZS1wYWRkaW5nOiAxcmVtO1xuXG4gIC0tbWFpbi1tYXJnaW4tdG9wOiAycmVtO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogU3R5bGVzIHN0YXJ0XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoLi4vc3JjL2Fzc2V0cy9ob21lLWJnLmpwZyk7ICovXG4gIC8qIGJhY2tncm91bmQ6IHVybCguLi9zcmMvYXNzZXRzL21lbnUtYmcuanBnKTsgKi9cbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogZ3JpZCBzZXR1cFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4jY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgLyogYmFja2dyb3VuZDogdXJsKC4uL3NyYy9hc3NldHMvbWVudS1iZy5qcGcpOyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEhlYWRlclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4ubWFpbi1oZWFkZXJfX2hlYWRpbmcge1xuICBmb250LXNpemU6IHZhcigtLWZzLWhlYWRlcik7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2l0ZS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IHZhcigtLWdhcC1zaXplKTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2l0ZS1uYXYgPiBsaSA+IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNpdGUtbmF2IC5hY3RpdmUge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBNYWluIGhvbWUgc2VjdGlvblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5zZWN0aW9uLWNvbnRlbnQgLmhvbWUtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG5cbiAgZm9udC1zaXplOiAycmVtO1xuXG4gIHBhZGRpbmc6IDVyZW0gMTUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEZvb3RlclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1nYXAtc2l6ZSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1hcmdpbjogNXJlbSAwIDAuNXJlbTtcblxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogTWVudVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ2FwOiB2YXIoLS1nYXAtc2VjdGlvbik7XG5cbiAgbWFyZ2luOiB2YXIoLS1tYWluLW1hcmdpbi10b3ApIDA7XG59XG5cbi5tZW51LXNlY3Rpb24ge1xuICB3aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksIDEwMCUgLSB2YXIoLS1zaWRlLXBhZGRpbmcpICogMik7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZzLWhlYWRlci1zZWN0aW9uKTtcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1lbnUtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVudS1pdGVtLW5hbWUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW0tcHJpY2Uge1xuICBmb250LXNpemU6IHZhcigtLWZzLW1lbnUtcHJpY2UpO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEFib3V0XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5hYm91dC1tYWluIHtcbiAgd2lkdGg6IG1pbig5MDBweCwgMTAwJSAtIHZhcigtLXNpZGUtcGFkZGluZykgKiAyKTtcbiAgbWFyZ2luOiB2YXIoLS1tYWluLW1hcmdpbi10b3ApIGF1dG87XG5cbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mcy1hYm91dC1wYXJhKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmFib3V0LXBhcmE6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbjogdmFyKC0tbWFpbi1tYXJnaW4tdG9wKSAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWOztrQkFFZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7OztFQUdFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjs7RUFFdEIsb0JBQW9CO0VBQ3BCLGVBQWU7O0VBRWYsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTs7OEJBRThCOztBQUU5QjtFQUNFLGNBQWM7O0VBRWQsa0NBQWtDOztFQUVsQyxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix3QkFBd0I7O0VBRXhCLHNCQUFzQjs7RUFFdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjs7RUFFcEIsdUJBQXVCO0FBQ3pCOztBQUVBOzs4QkFFOEI7O0FBRTlCO0VBQ0UsZ0RBQWdEO0VBQ2hELGdEQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDOztBQUVBOzs4QkFFOEI7O0FBRTlCO0VBQ0UsbURBQTBDO0VBQzFDLGdEQUFnRDtFQUNoRCxzQkFBc0I7O0VBRXRCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBOzs4QkFFOEI7O0FBRTlCO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5Qjs7RUFFekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7O0VBRXJCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFlBQVk7O0VBRVosZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7OzhCQUU4Qjs7QUFFOUI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCOztFQUV6QixlQUFlOztFQUVmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBOzs4QkFFOEI7O0FBRTlCO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQix1QkFBdUI7O0VBRXZCLHFCQUFxQjs7RUFFckIseUJBQXlCO0FBQzNCOztBQUVBOzs4QkFFOEI7O0FBRTlCO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qix1QkFBdUI7O0VBRXZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0FBQ25COztBQUVBOzs4QkFFOEI7O0FBRTlCO0VBQ0UsaURBQWlEO0VBQ2pELG1DQUFtQzs7RUFFbkMseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogaW5oZXJpdCBmb250IHNvIHlvdSBjYW4gZGVmaW5lIHN0eWxlcyBcXG4gIGZvciBoMSwgaCogZWxlbWVudHMgaW5zdGVhZCBvZiByZWx5IG9uIHVzZXIgXFxuICBhZ2VudCBkZWZhdWx0cyAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAvKiB3aWR0aDogMTUwcHg7ICovXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcblxcbiAgLyogcmVtb3ZlcyBzeXN0ZW0tbGV2ZWwgc3R5bGluZyAqL1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuKiBNeSBzdHlsZXNcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxZW07XFxuXFxuICAtLWZmLXByaW1hcnk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgLS1mcy1oZWFkZXI6IDdyZW07XFxuICAtLWZzLWhlYWRlci1zZWNvbmRhcnk6IDJyZW07XFxuICAtLWZzLWhlYWRlci1zZWN0aW9uOiAxLjc1cmVtO1xcbiAgLS1mcy1tZW51LWl0ZW0tbmFtZTogMS4yNXJlbTtcXG4gIC0tZnMtbWVudS1kZXNjOiAxcmVtO1xcbiAgLS1mcy1tZW51LXByaWNlOiAxLjI1cmVtO1xcbiAgLS1mcy1hYm91dC1wYXJhOiAxLjI1cmVtO1xcblxcbiAgLS1jbHItcHJpbWFyeTogI2ZmZmVlMDtcXG5cXG4gIC0tZ2FwLXNpemU6IDRyZW07XFxuICAtLWdhcC1zZWN0aW9uOiAzcmVtO1xcblxcbiAgLS1tYXgtd2lkdGg6IDEwMDBweDtcXG4gIC0tc2lkZS1wYWRkaW5nOiAxcmVtO1xcblxcbiAgLS1tYWluLW1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiogU3R5bGVzIHN0YXJ0XFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZDogdXJsKC4uL3NyYy9hc3NldHMvaG9tZS1iZy5qcGcpOyAqL1xcbiAgLyogYmFja2dyb3VuZDogdXJsKC4uL3NyYy9hc3NldHMvbWVudS1iZy5qcGcpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuKiBncmlkIHNldHVwXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9zcmMvYXNzZXRzL2hvbWUtYmcuanBnKTtcXG4gIC8qIGJhY2tncm91bmQ6IHVybCguLi9zcmMvYXNzZXRzL21lbnUtYmcuanBnKTsgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuKiBIZWFkZXJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLm1haW4taGVhZGVyX19oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtaGVhZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaXRlLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1nYXAtc2l6ZSk7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpdGUtbmF2ID4gbGkgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc2l0ZS1uYXYgLmFjdGl2ZSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4qIE1haW4gaG9tZSBzZWN0aW9uXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5zZWN0aW9uLWNvbnRlbnQge1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5zZWN0aW9uLWNvbnRlbnQgLmhvbWUtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcblxcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgcGFkZGluZzogNXJlbSAxNSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuKiBGb290ZXJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1nYXAtc2l6ZSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIG1hcmdpbjogNXJlbSAwIDAuNXJlbTtcXG5cXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiogTWVudVxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1nYXAtc2VjdGlvbik7XFxuXFxuICBtYXJnaW46IHZhcigtLW1haW4tbWFyZ2luLXRvcCkgMDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICB3aWR0aDogbWluKHZhcigtLW1heC13aWR0aCksIDEwMCUgLSB2YXIoLS1zaWRlLXBhZGRpbmcpICogMik7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtaGVhZGVyLXNlY3Rpb24pO1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tZW51LWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVudS1pdGVtLW5hbWUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVudS1wcmljZSk7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuKiBBYm91dFxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uYWJvdXQtbWFpbiB7XFxuICB3aWR0aDogbWluKDkwMHB4LCAxMDAlIC0gdmFyKC0tc2lkZS1wYWRkaW5nKSAqIDIpO1xcbiAgbWFyZ2luOiB2YXIoLS1tYWluLW1hcmdpbi10b3ApIGF1dG87XFxuXFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy1hYm91dC1wYXJhKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5hYm91dC1wYXJhOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luOiB2YXIoLS1tYWluLW1hcmdpbi10b3ApIDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHAxVGV4dCA9ICdMb2NhdGVkIG9uIHRoZSBlZGdlIG9mIENpdHkgU3F1YXJlIFBhcmsgaW4gQ2hhcmxlc3Rvd24g4oCTIHRoaXMgcmVzdGF1cmFudCBpcyBhbiBlbmVyZ2V0aWMgSXRhbGlhbiBjZWxlYnJhdGlvbiBvZiByZWltYWdpbmVkIGNsYXNzaWNzLiBPdXIgYmVhdXRpZnVsbHkgcmVzdG9yZWQgZ3JhbmQgYmFyIGFuZCBkaW5pbmcgcm9vbSDigJMgd2hpY2ggb3Zlcmxvb2tzIHRoZSBwYXJrIGFzIHdlbGwgYXMgdGhlIGNpdHkgc2t5bGluZSDigJMgc3RyaXZlcyB0byBob25vciBvdXIgYnVpbGRpbmfigJlzIHBhc3QgYW5kIGl0cyBwcmVzdGlnaW91cyBwbGFjZW1lbnQgYXQgdGhlIGdhdGUgb2YgdGhpcyBoaXN0b3JpYyBCb3N0b24gbmVpZ2hib3Job29kJztcblxuY29uc3QgcDJUZXh0ID0gJ09wZW4gZGFpbHkgZm9yIGx1bmNoIGFuZCBkaW5uZXIsIFByaW1h4oCZcyBoYW5kLWNyYWZ0ZWQgbWVudSBoYXMgYmVlbiBtZXRpY3Vsb3VzbHkgY3VyYXRlZCB0byBwcm92aWRlIG91ciBndWVzdHMgYW4gaW5jcmVkaWJsZSBkaW5pbmcgZXhwZXJpZW5jZSBhdCBhbnkgdGltZSBvZiB0aGUgZGF5Lic7XG5cbmNvbnN0IGNyZWF0ZUFib3V0ID0gKCkgPT4ge1xuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1tYWluJyk7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYScpO1xuICAgIHAxLnRleHRDb250ZW50ID0gcDFUZXh0O1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYScpO1xuICAgIHAyLnRleHRDb250ZW50ID0gcDJUZXh0O1xuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwMik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgeyBjcmVhdGVBYm91dCB9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxubGV0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnMTAwIE1haW4gU3RyZWV0LCBCb3N0b24gTUEnO1xuXG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnNjE3LTEyMy00MzIxJztcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2luZm9AcmVzdGF1cmFudC5jb20nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBjcmVhdGVTaXRlTmF2ID0gKCkgPT4ge1xuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX25hdicpO1xuXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdzaXRlLW5hdicpO1xuICAgIC8vIGNyZWF0ZSBhIHRhZ3NcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lTGluay5ocmVmID0gJyMnO1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUxpbmsuaHJlZiA9ICcjJztcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGxldCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhYm91dExpbmsuaHJlZiA9ICcjJztcbiAgICBhYm91dExpbmsudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuXG4gICAgLy8gY3JlYXRlIGxpc1xuICAgIGxldCBob21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBtZW51TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhYm91dExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGhvbWVMaS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgbWVudUxpLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgICBhYm91dExpLmFwcGVuZENoaWxkKGFib3V0TGluayk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChob21lTGkpO1xuICAgIHVsLmFwcGVuZENoaWxkKG1lbnVMaSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWJvdXRMaSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgcmV0dXJuIG5hdjtcbn07XG5cblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCBuYXYgPSBjcmVhdGVTaXRlTmF2KCk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJyk7XG5cbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19oZWFkaW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnUmVzdGF1cmFudCBOYW1lJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sZXQgY3JlYXRlSG9tZU1haW4gPSAoKSA9PiB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgnaG9tZS10ZXh0Jyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdUaGlzIHJlc3RhdXJhbnQgcm9ja3MgYW5kIGV2ZXJ5b25lIGxpa2VzIGl0LiBBIGxvdC4gQSB3aG9sZSBsb3QuIFdlIGhhdmUgZmFuY3kgZm9vZCBhbmQgYXdlc29tZSBkcmlua3MgYW5kIHRoZXNlIGRyaW5rcyBhcmUgZ29ubmEgYmUgYXdlc29tZS4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcblxuICAgIHJldHVybiBtYWluO1xufTtcblxuXG5cblxuZXhwb3J0IHsgY3JlYXRlSG9tZU1haW4gfTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBjb2NrdGFpbHNKU09OIGZyb20gJy4vZGF0YS9jb2NrdGFpbHMuanNvbic7XG5pbXBvcnQgc3RhcnRlcnNKU09OIGZyb20gJy4vZGF0YS9zdGFydGVycy5qc29uJztcbmltcG9ydCBtYWluSlNPTiBmcm9tICcuL2RhdGEvbWFpbi5qc29uJztcbmltcG9ydCBkZXNzZXJ0c0pTT04gZnJvbSAnLi9kYXRhL2Rlc3NlcnRzLmpzb24nO1xuXG5sZXQgY3JlYXRlTWVudUxpc3QgPSAobWVudUxpc3QpID0+IHtcbiAgICAvLyBjcmVhdGUgdGhlIHVsXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdjb2NrdGFpbC1saXN0Jyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0Jyk7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIG1lbnVMaXN0KSB7XG4gICAgICAgIC8vLy8gY3JlYXRlIGxpXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICAgIC8vLy8gY3JlYXRlIHBcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG5cbiAgICAgICAgLy8vLyBjcmVhdGUgaXRlbS1uYW1lIHNwYW5cbiAgICAgICAgbGV0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIC8vLy8gYWRkIHNwYW4udGV4dENvbnRlbnRcbiAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXG4gICAgICAgIC8vLy8gY3JlYXRlIGl0ZW0tcHJpY2Ugc3BhblxuICAgICAgICBsZXQgcHJpY2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBwcmljZVNwYW4uY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuXG4gICAgICAgIC8vLy8gYWRkIHNwYW4udGV4dENvbnRlbnRcbiAgICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICAgICAgICAvLy8vIGFkZCBwLnRleHRDb250ZW50XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHAucHJlcGVuZChuYW1lU3Bhbik7XG5cbiAgICAgICAgLy8gYXBwZW5kIGl0ZW0tcHJpY2Ugc3BhbiB0byBwXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcblxuICAgICAgICAvLyBhcHBlbmQgcCB0byBsaVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICAvLyBhcHBlbmQgbGkgdG8gdWxcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICByZXR1cm4gdWw7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51U2VjdGlvbiA9IChzZWN0aW9uVGl0bGUsIEpTT05kYXRhKSA9PiB7XG4gICAgLy8gY3JlYXRlIHNlY3Rpb25cbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuXG4gICAgLy8gY3JlYXRlIGgyXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLXRpdGxlJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBzZWN0aW9uVGl0bGU7XG5cbiAgICAvLyBjcmVhdGUgY29ja3RhaWwgbGlzdFxuICAgIGxldCB1bCA9IGNyZWF0ZU1lbnVMaXN0KEpTT05kYXRhKTtcblxuICAgIC8vIGFwcGVuZCBoMiB0byBzZWN0aW9uXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMik7XG4gICAgLy8gYXBwZW5kIHVsIHRvIHNlY3Rpb25cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufTtcblxubGV0IGNyZWF0ZU1lbnVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZW51Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBjb2NrdGFpbFNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignY29ja3RhaWxzJywgY29ja3RhaWxzSlNPTik7XG4gICAgY29uc3Qgc3RhcnRlclNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignc3RhcnRlcnMnLCBzdGFydGVyc0pTT04pO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gY3JlYXRlTWVudVNlY3Rpb24oJ21haW4nLCBtYWluSlNPTik7XG4gICAgY29uc3QgZGVzc2VydFNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignZGVzc2VydCcsIGRlc3NlcnRzSlNPTik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvY2t0YWlsU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzdGFydGVyU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNzZXJ0U2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVNYWluIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVNYWluIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSAnLi9hYm91dCc7XG5cbmltcG9ydCB7IGNyZWF0ZU1lbnVNYWluIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG5jb25zdCBob21lTWFpbiA9IGNyZWF0ZUhvbWVNYWluKCk7XG5jb25zdCBtZW51TWFpbiA9IGNyZWF0ZU1lbnVNYWluKCk7XG5jb25zdCBhYm91dE1haW4gPSBjcmVhdGVBYm91dCgpO1xuY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cblxuLy8gRE9NQ29udGVudExvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIC8vIGFkZCB0aGUgaGVhZGVyIHRoYXQgZGlzcGxheXMgaG9tZSBieSBkZWZhdWx0XG4gICAgcmVuZGVyUGFnZShob21lTWFpbik7XG5cbiAgICAvLyBzZXQgdXAgZXZlbnQgbGlzdGVuZXJzIG9uIGJ1dHRvbnNcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnZShob21lTWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKG1lbnVNYWluKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKGFib3V0TWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5sZXQgY2xlYXJVSSA9IChjb250YWluZXIpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gKGNvbnRlbnRNYWluKSA9PiB7XG4gICAgY2xlYXJVSShjb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TWFpbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=