/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"logSomeStuff\": () => (/* binding */ logSomeStuff),\n/* harmony export */   \"reset\": () => (/* binding */ reset)\n/* harmony export */ });\n// IIFE --> phonetically iffy\n\n\n  let numTimesClicked = 0;\n\n  function win() {\n    alert('You win!');\n    reset();\n  }\n\n  // this gets put into an object\n  function reset() {\n    numTimesClicked = 0;\n  }\n// this gets put into an object\n  function logSomeStuff(str){\n    console.log(\"some stuff HEYHEYHEYHEYHEYHEY _________\", str)\n  }\n    \n\n// export  \n /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  numTimesClicked++;\n  console.log(\"You clicked\", numTimesClicked);\n  if (numTimesClicked === 10) win();\n}\n\n// default exports this is a variable you can reference\n\n\n// one default, and as many named exports as you want\n\n\n\n// what is click = function() {\n  //   numTimesClicked++;\n  //   console.log(\"You clicked\");\n  //   if (numTimesClicked === 10) win();\n  // }\n\n\n\n/*\n  1) look at simple App\n  2) What are issues with this app?\n  3) Make it secure\n  4) Make it like node modules, to \"share\" code accross js files\n  \n  webpack = module bundler\n  1) we need that sweet npm code\n  2) we need to stell webpack what to do.\n    webpack.config.js\n\n\n*/\n\n\n\n//# sourceURL=webpack://webpack-intro/./game.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./game.js\");\n/* harmony import */ var _rando_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rando.js */ \"./rando.js\");\nconst btn = document.getElementById('button');\n\n\n// node modules --> import from\n// import click from './game.js'\n// import {logSomeStuff, reset} from './game.js'\n\n// entry is where all the code is going to be imported\n\n\nbtn.addEventListener('click', function() {\n  (0,_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  loggy(_rando_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n});\n\n/*  \n    THREE MINUTES TO LOOK AT THESE FILES (main.js, index.html, )\n    AND THEN TELL ME WHAT WILL BE/IS GOING ON IN THE \"APP\".\n*/\n\n\n\n//# sourceURL=webpack://webpack-intro/./main.js?");

/***/ }),

/***/ "./rando.js":
/*!******************!*\
  !*** ./rando.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"this string\");\n\n//# sourceURL=webpack://webpack-intro/./rando.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;