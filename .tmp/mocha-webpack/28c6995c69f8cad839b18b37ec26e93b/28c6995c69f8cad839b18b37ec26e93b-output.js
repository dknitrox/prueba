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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(5);
exports.app = express();
var port = 8000;
var baseUrl = "http://localhost:" + port;
//import * as supertest from 'supertest';
//const request=supertest(app);
exports.app.set('view engine', 'html');
exports.app.set('views', 'src');
exports.app.use('/', express.static('dist', { index: false }));
exports.app.get('/data', function (req, res) {
    console.time("GET: " + req.originalUrl);
    res.status(200).send({ data: "exito" });
    console.timeEnd("GET: " + req.originalUrl);
});
exports.app.get('/users', function (req, res) {
    console.time("GET: " + req.originalUrl);
    res.status(200).json({ data: ["a", "b", "c"] });
});
exports.server = exports.app.listen(8001, function () {
    console.log("app inciiada");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_server_1 = __webpack_require__(2);
var request = __webpack_require__(6)(main_server_1.app);
var chai_1 = __webpack_require__(4);
describe('#Numeros', function () {
    afterEach(function () {
        main_server_1.server.close();
    });
    it('1+1=2', function (cb) {
        chai_1.expect(2).to.be.eq(2);
        cb();
    });
    describe('#Testeando un endpoint', function () {
        it('--- Con promise', function () {
            return request
                .get('/data')
                .expect('Content-type', /json/)
                .expect(200)
                .then(function (data) {
                chai_1.expect("exito").to.be.equals(data.body.data);
            });
        });
        it('Testeando users', function () {
            return request
                .get('/users')
                .expect(200)
                .then(function (data) {
                chai_1.expect(3).to.be.equals(data.body.data.length);
            });
        });
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