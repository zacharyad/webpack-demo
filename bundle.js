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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"consoleThatLog\": () => (/* binding */ consoleThatLog),\n/* harmony export */   \"reset\": () => (/* binding */ reset),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n  // IIFE, phonetically Iffy\n\n    let numTimesClicked = 0;\n\n     function win() {\n      alert('You win!');\n      reset();\n    }\n\n    function consoleThatLog(){\n      console.log(\"hey i was logged\")\n    }\n    \n    function reset() {\n      numTimesClicked = 0;\n    }\n    \n\n  //)()\n\n\n  // we can default export one thing and one thing only\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  numTimesClicked++;\n  console.log(\"cat\");\n  if (numTimesClicked === 10) win();\n}\n\n\n  // click() //  is equal to ---> \n    //function() {\n    //   numTimesClicked++;\n    //   console.log(\"You've been clicked.\");\n    //   if (numTimesClicked === 10) win();\n    // }\n\n \n  \n  \n/*\n  1) look at simple App\n  2) What are issues with this app?\n  3) Make it secure\n  4) Make it like node modules, to \"share\" code accross js files\n  \n  webpack = module bundler\n  1) we need to install webpack and webpack-cli [ x ]\n  2) add script to package.json to build your files into a bundle\n  3) configure webpack\n\n\n*/\n\n\n\n//# sourceURL=webpack://webpack-intro/./game.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./game.js\");\nconst button = document.getElementById('button');\n// const click = require(\"./game.js\") this is no good in the front end\n \n//  import {consoleThatLog as c, reset} from './game'\n\n (0,_game__WEBPACK_IMPORTED_MODULE_0__.consoleThatLog)();\nbutton.addEventListener('click', function() {\n  clickTheButtonFunc();\n});\n\n/*  \n    THREE MINUTES TO LOOK AT THESE FILES \n    AND THEN TELL ME WHAT WILL BE/IS GOING ON IN THE \"APP\".\n*/\n\n\n\n//# sourceURL=webpack://webpack-intro/./main.js?");

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