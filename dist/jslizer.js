var jslizer =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_object_helper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jslizer_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_storage_handler__ = __webpack_require__(7);





class CoreFactory {

    constructor() {
        this.generateInstances();
    }

    generateInstances() {
        var objectHelper;
        if (CoreFactory.objectHelper === null || JSON.stringify(CoreFactory.objectHelper) === 'null' || JSON.stringify(CoreFactory.objectHelper) === 'undefined' || typeof (CoreFactory.objectHelper) === 'undefined') {
            objectHelper = new __WEBPACK_IMPORTED_MODULE_1__utils_object_helper__["a" /* default */]();
        } else {
            objectHelper = CoreFactory.objectHelper;
        }
        if (objectHelper.isNull(this.systemSettings)) {
            this.systemSettings = CoreFactory.systemSettings = new __WEBPACK_IMPORTED_MODULE_0__system_settings__["a" /* default */]();
        }
        if (objectHelper.isNull(this.objectHelper)) {
            this.objectHelper = CoreFactory.objectHelper = objectHelper;
        }
        if (objectHelper.isNull(this.jsLizerConfig)) {
            this.jsLizerConfig = CoreFactory.jsLizerConfig = new __WEBPACK_IMPORTED_MODULE_2__jslizer_config__["a" /* default */]();
        }
        if (objectHelper.isNull(this.storageHandler)) {
            this.storageHandler = CoreFactory.storageHandler = new __WEBPACK_IMPORTED_MODULE_3__utils_storage_handler__["a" /* default */](this.objectHelper);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (CoreFactory);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_core_factory__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__core_core_factory__["a"]; });


new __WEBPACK_IMPORTED_MODULE_0__core_core_factory__["a" /* default */]();

console.log(77, __WEBPACK_IMPORTED_MODULE_0__core_core_factory__["a" /* default */].objectHelper.isNull(null));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_custom_exception__ = __webpack_require__(3);


class SystemSettings {

    constructor() {
        this.SYSTEM_LANGUAGE = 'en';
        this.SYSTEM_DATE_FORMAT = 'DD-MM-YYYY';
        this.SYSTEM_DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm';
        this.setEnvironmentRelatedValues();
    }

    setEnvironmentRelatedValues() {
        if (location.hostname === 'localhost') {
            this.ENVIRONMENT = 'development';
            this.ROOT_URL = 'http://' + location.hostname + '/';
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_custom_exception__["a" /* FatalError */]('core_system_settings_1', null);
        }
        this.ROOT_API_URL = this.ROOT_URL + 'api/';
    }

}

/* harmony default export */ __webpack_exports__["a"] = (SystemSettings);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ValidationError */
/* unused harmony export JsLizerError */
/* unused harmony export DeveloperError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FatalError; });
/* unused harmony export FieldError */
/* unused harmony export MatchError */
/* unused harmony export ApiResponseError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_message__ = __webpack_require__(4);


class CustomException extends Error {

    constructor(customErrorCode, contextData) {
        super(customErrorCode);
        this.className = 'CustomException';
        this.errorTypeDetails = 'Base custom exception class that extends from Error object.';
        this.messageCode = '';
        this.customMessage = '';
        this.contextData = {};
        this.contextData = contextData;
        this.messageCode = customErrorCode;
        this.customMessage = __WEBPACK_IMPORTED_MODULE_0__error_message__["a" /* default */].getErrorMessage(customErrorCode, contextData);
        console.log('CUSTOM ERROR LOG: ', this);
    }

}

class ValidationError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'ValidationError';
        this.errorTypeDetails = 'Throws when custom made validation check is failed in the system.';
    }

}

class JsLizerError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'JsLizerError';
        this.errorTypeDetails = 'Exception thrown from Jslizer library that is not fatal.';
    }

}

class DeveloperError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'DeveloperError';
        this.errorTypeDetails = 'HIGHER THAN FATAL ERROR. BASICALLY THE DEVELOPER MESSED UP. FIX IMMEDIATELY.';
    }

}

class FatalError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'FatalError';
        this.errorTypeDetails = 'FATAL SYSTEM ERROR. FIX IMMEDIATELY.';
    }

}

class FieldError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'FieldError';
        this.errorTypeDetails = 'Field or attribute error. Probably type check failed.';
    }

}

class MatchError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'MatchError';
        this.errorTypeDetails = 'Expected match error.';
    }

}

class ApiResponseError extends CustomException {

    constructor(customErrorCode, contextData = {}) {
        super(customErrorCode, contextData);
        this.className = 'ApiResponseError';
        this.errorTypeDetails = '';
        this.errorTypeDetails = 'Error occured in api response or the response object processing.';
    }

}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_core_factory__ = __webpack_require__(0);


class ErrorMessage {

    constructor() {
        this.loadMessages();
    }

    loadMessages() {
        var keyList;
        this.MESSAGES = {};
        keyList = Object.getOwnPropertyNames(this);
        for (let i = 0; i < keyList.length; i++) {
            for (let key in this[keyList[i]]) {
                this.MESSAGES[key] = this[keyList[i]][key];
            }
        }
    }

    getErrorMessage(customErrorCode, contextData) {
        var currentLanguage, message, patternString;
        currentLanguage = __WEBPACK_IMPORTED_MODULE_0__core_core_factory__["a" /* default */].systemSettings.SYSTEM_LANGUAGE;
        message = this.MESSAGES[customErrorCode][currentLanguage];
        if (__WEBPACK_IMPORTED_MODULE_0__core_core_factory__["a" /* default */].objectHelper.isNotNull(contextData, null)) {
            for (let key in contextData) {
                patternString = '{{' + key + '}}';
                while (message.indexOf(patternString) != -1) {
                    message = message.replace(patternString, contextData[key]);
                }
            }
        }
        return message;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (ErrorMessage);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ObjectHelper {

    constructor() {}

    isNull( obj, property = null ) {
        if ( property === null || JSON.stringify( property ) === 'null' || JSON.stringify( property ) === 'undefined' || typeof ( property ) === 'undefined' ) {
            if ( obj === null || JSON.stringify( obj ) === 'null' || JSON.stringify( obj ) === 'undefined' || typeof ( obj ) === 'undefined' ) {
                return true;
            }
            return false;
        } else {
            if ( obj === null || JSON.stringify( obj ) === 'null' || JSON.stringify( obj ) === 'undefined' || typeof ( obj ) === 'undefined' ) {
                return true;
            }
            if ( obj[ property ] === null || JSON.stringify( obj[ property ] ) === 'null' || JSON.stringify( obj[ property ] ) === 'undefined' || typeof ( obj[ property ] ) === 'undefined' ) {
                return true;
            }
            return false;
        }
    }

    isNotNull( obj, property = null ) {
        return !this.isNull( obj, property );
    }

    extractFromDef( def ) {
        var res, key;
        res = {};
        for ( key in def ) {
            res[ key ] = def[ key ].value;
        }
        return res;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ObjectHelper);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class JsLizerConfig {

    constructor() {
        this.FIELD_CHILD = 'child';
        this.FIELD_TYPE = 'type';
        this.FIELD_OBJECT = 'obj';
        this.FIELD_ARRAY = 'arr';
        this.FIELD_STRING = 'str';
        this.FIELD_INTEGER = 'int';
        this.FIELD_DATE = 'date';
        this.FIELD_DECIMAL = 'float';
        this.FIELD_NULL = 'null';
        this.FIELD_REQUIRED = 'required';
        this.FIELD_MAX_LENGTH = 'max';
        this.FIELD_MIN_LENGTH = 'min';
        this.ROOT_OBJECT_NAME = '__ROOT_OBJECT__';
        this.STRING_MAX_LENGTH = 128;
        this.STRING_MIN_LENGTH = 1;
        this.GLOBAL_REQUIRED = true;
        this.GLOBAL_NULL_VALUE = false;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (JsLizerConfig);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StorageHandler {

    constructor(objectHelper) {
        this.objectHelper = objectHelper;
        this.temporaryStorageKey = 'storeTemp';
    }

    getValue(key) {
        if (this.objectHelper.isNotNull(window.sessionStorage, key)) {
            return window.sessionStorage[key];
        }
        return window.localStorage[key];
    }

    setValue(key, value) {
        if (this.objectHelper.isNotNull(window.sessionStorage, this.temporaryStorageKey)) {
            window.sessionStorage[key] = value;
        } else {
            window.localStorage[key] = value;
        }
    }

    destroyValue(key) {
        window.localStorage.removeItem(key);
        window.sessionStorage.removeItem(key);
    }

}

/* harmony default export */ __webpack_exports__["a"] = (StorageHandler);

/***/ })
/******/ ]);