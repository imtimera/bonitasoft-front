/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_bonita_utils_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/bonita-utils.ts */ \"./src/ts/bonita-utils.ts\");\n/* harmony import */ var _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/appConst.ts */ \"./src/ts/appConst.ts\");\n/* harmony import */ var _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction initDrawRectangles() {\n    var element\n    var canvas = document.getElementById('shape-area')\n    var tabItemToRotate = []\n    var tabItemToRemove = []\n    var index = 0\n\n    var shapeArea = _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__.shapeArea\n    var rectangle = _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__.rectangle\n    var px = _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__.px\n    var drawing = _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__.drawing\n    var shape = _ts_appConst_ts__WEBPACK_IMPORTED_MODULE_1__.shape\n\n    function setMousePosition(e) {\n        var ev = e || window.event\n        if (ev.pageX) {\n            shape.x = ev.pageX + window.pageXOffset\n            shape.y = ev.pageY + window.pageYOffset\n        } else if (ev.clientX) {\n            shape.x = ev.clientX //+ document.body.scrollLeft\n            shape.y = ev.clientY //+ document.body.scrollTop\n        }\n    }\n\n\n    canvas.onmousedown = function (event) {\n        var e = event || window.event\n        if (e.target && e.target.id == shapeArea) {\n            index++\n            drawing = true\n            shape.startX = shape.x\n            shape.startY = shape.y\n            const attributeName = rectangle + index\n            element = document.createElement('canvas')\n            element.className = attributeName\n            element.id = attributeName\n            element.style.position = 'absolute'\n            element.style.left = shape.x + px\n            element.style.top = shape.y + px\n            element.style.width = '0px'\n            element.style.height = '0px'\n            element.style.border = '1px solid'\n            element.style.backgroundColor = (0,_ts_bonita_utils_ts__WEBPACK_IMPORTED_MODULE_0__.randomColor)()\n            element.style.cursor = \"pointer\"\n            element.style.opacity = '1';\n            element.addEventListener(\"dblclick\",\n                function (e) {\n                    const item = e.target\n                    const duration = '5s'\n                    const timeOut = '5000'\n                    tabItemToRotate.push(item.id)\n                    tabItemToRemove.push(item)\n                    const rotationAngle = 'rotate(360deg)'\n                    var promise = new Promise(resolve => setTimeout(function () {\n                        item.style.WebkitTransitionDuration = duration\n                        item.style.webkitTransform = rotationAngle\n                        tabItemToRotate.splice(tabItemToRotate.indexOf(item))\n                        resolve({ 'tabItemToRotate': tabItemToRotate, 'tabItemToRemove': tabItemToRemove })\n                    }, timeOut))\n                    promise.then((value) => {\n                        tabItemToRotate = value.tabItemToRotate\n                        tabItemToRemove = value.tabItemToRemove\n                        if (tabItemToRotate.length == 0) {\n                            tabItemToRemove.forEach(function (rect) {\n                                rect.style.opacity = '0'\n                                setTimeout(function () {\n                                    rect.remove()\n                                }, timeOut)\n                            });\n                        }\n                    });\n\n                })\n            canvas.appendChild(element)\n            canvas.style.cursor = \"crosshair\"\n\n        }\n    }\n\n    canvas.onmousemove = function (e) {\n        setMousePosition(e)\n        if (drawing) {\n            element.style.width = Math.abs(shape.x - shape.startX) + px\n            element.style.height = Math.abs(shape.y - shape.startY) + px\n            element.style.left = (shape.x - shape.startX < 0) ? shape.x + px : shape.startX + px\n            element.style.top = (shape.y - shape.startY < 0) ? shape.y + px : shape.startY + px\n\n        }\n    }\n    canvas.onmouseup = () => drawing = false\n    \n\n}\n\n\n\n\ninitDrawRectangles()\n\n//# sourceURL=webpack://bonitasoft-front/./src/index.js?");

/***/ }),

/***/ "./src/ts/appConst.ts":
/*!****************************!*\
  !*** ./src/ts/appConst.ts ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = {\n    shapeArea: 'shape-area',\n    rectangle: 'rectangle',\n    px: 'px',\n    drawing: false,\n    shape: function () {\n        return {\n            x: 0,\n            y: 0,\n            startX: 0,\n            startY: 0\n        }\n    },\n}\n\n//# sourceURL=webpack://bonitasoft-front/./src/ts/appConst.ts?");

/***/ }),

/***/ "./src/ts/bonita-utils.ts":
/*!********************************!*\
  !*** ./src/ts/bonita-utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomColor\": () => (/* binding */ randomColor),\n/* harmony export */   \"generateRandomBetween0and255\": () => (/* binding */ generateRandomBetween0and255)\n/* harmony export */ });\nfunction randomColor() {\n    const r = generateRandomBetween0and255()\n    const g = generateRandomBetween0and255()\n    const b = generateRandomBetween0and255()\n    return 'rgb(' + r + ', ' + g + ', ' + b + ')'\n}\n\nfunction generateRandomBetween0and255() {\n    return Math.random() * 255\n}\n\n\n//# sourceURL=webpack://bonitasoft-front/./src/ts/bonita-utils.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;