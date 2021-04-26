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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleSubmit\": () => (/* binding */ handleSubmit)\n/* harmony export */ });\n\r\nfunction handleSubmit(){\r\n    console.log('Code Goes Here Mama')\r\n}\r\n\r\n//Weather API URL\r\nconst baseURL = \"https://api.openweathermap.org/data/2.5/weather?units=metric&temp=Celsius&zip=\";\r\n\r\n//Personal API KEY\r\nconst apiKey = \"&APPID=eb8a5e185569290a4918724ce7b298ff\";\r\n\r\n// Adding an event listener for the user to click on generate button\r\ndocument.getElementById('generate').addEventListener(\"click\", getData);\r\nconst zip = document.getElementById('zip');\r\nconst feelingsFromUser = document.getElementById('feelings');\r\n\r\nconst dateToday = new Date();\r\nlet newDate = dateToday.getMonth() + 1 +  '-' + dateToday.getDate() + '-' + dateToday.getFullYear();\r\n\r\n\r\nfunction getData() {\r\n\r\n   const userData = {\r\n    feelings: feelingsFromUser.value,\r\n    newDate,\r\n    }\r\n    getWeatherData(baseURL, zip.value, apiKey).then(function (data) {\r\n        saveWeatherInformation('/saveData', data, userData ).then(updateUI());\r\n    })\r\n\r\n}\r\n\r\nconst getWeatherData = async (baseURL, zip, apiKey) => {\r\n    const response = await fetch(baseURL + zip + apiKey);\r\n    try {\r\n        const newData = await response.json();\r\n        return newData;\r\n    }\r\n    catch (error) {\r\n        return error;\r\n    }\r\n}\r\nconst saveWeatherInformation = async (url, data,userData) => {\r\n    const responseAgain = await fetch(url, {\r\n        method: 'POST',\r\n        credentials: 'same-origin',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({dataFromAPI : data, dataFromUser : userData}),\r\n    });\r\n    try {\r\n        const newInfo = await responseAgain.json();\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nconst updateUI = async () =>{\r\n    const request = await fetch('/all')\r\n    try{\r\n        const allData = await request.json();\r\n        document.getElementById('date').innerHTML = `Today is ${newDate}`;\r\n        document.getElementById('temp').innerHTML = `Weather now  ${allData.dataFromAPI.main.temp} \\u00B0C`;\r\n        document.getElementById('content').innerHTML = `You are feeling ${allData.dataFromUser.feelings}`\r\n    }catch(error){\r\n        console.log('There is a problem with '+ error);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weatherjournalapp/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/app */ \"./src/app.js\");\n\r\n\r\nconsole.log(_src_app__WEBPACK_IMPORTED_MODULE_0__.handleSubmit);\n\n//# sourceURL=webpack://weatherjournalapp/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;