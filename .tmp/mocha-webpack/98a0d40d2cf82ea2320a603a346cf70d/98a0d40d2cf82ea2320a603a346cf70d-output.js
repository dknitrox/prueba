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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.spec.ts": 3
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 0;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


    var testsContext = __webpack_require__(0);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

var app = __WEBPACK_IMPORTED_MODULE_0_express__();
var port = 8000;
var baseUrl = "http://localhost:" + port;
//import * as supertest from 'supertest';
//const request=supertest(app);
app.set('view engine', 'html');
app.set('views', 'src');
app.use('/', __WEBPACK_IMPORTED_MODULE_0_express__["static"]('dist', { index: false }));
app.get('/data', function (req, res) {
    console.time("GET: " + req.originalUrl);
    res.send("exitoo");
    console.timeEnd("GET: " + req.originalUrl);
});
app.listen(8001, function () {
});
/*
request(app)
.get('/user')
.expect('Content-Type', /json/)
.expect('Content-Length', '15')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});
*/


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chai__);
var app = __webpack_require__(2);
var request = __webpack_require__(6);

describe('Testeando un endpoint', function () {
    it('1+1=2', function (cb) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(2).to.be.eq(1 + 1);
        cb();
    });
});
describe('Testeando un endpoint', function () {
    it('deberia mostrar exito', function (cb) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(2).to.be.eq(1 + 1);
        cb();
    });
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("supertest");

/***/ })
/******/ ]);
//# sourceMappingURL=98a0d40d2cf82ea2320a603a346cf70d-output.js.map