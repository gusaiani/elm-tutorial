/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ace-css/css/ace.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"font-awesome/css/font-awesome.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	// Require index.html so it gets copied to dist
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.index.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Elm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Main.elm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var mountNode = document.getElementById('main');

	// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
	var app = Elm.Main.embed(mountNode);


/***/ }
/******/ ]);