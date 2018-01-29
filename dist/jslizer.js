(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jslizer", [], factory);
	else if(typeof exports === 'object')
		exports["jslizer"] = factory();
	else
		root["jslizer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _systemSettings = __webpack_require__(2);

var _systemSettings2 = _interopRequireDefault(_systemSettings);

var _objectHelper = __webpack_require__(5);

var _objectHelper2 = _interopRequireDefault(_objectHelper);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _storageHandler = __webpack_require__(7);

var _storageHandler2 = _interopRequireDefault(_storageHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoreFactory = function () {
    function CoreFactory() {
        _classCallCheck(this, CoreFactory);

        this.generateInstances();
    }

    _createClass(CoreFactory, [{
        key: 'generateInstances',
        value: function generateInstances() {
            var objectHelper;
            if (CoreFactory.objectHelper === null || JSON.stringify(CoreFactory.objectHelper) === 'null' || JSON.stringify(CoreFactory.objectHelper) === 'undefined' || typeof CoreFactory.objectHelper === 'undefined') {
                objectHelper = new _objectHelper2.default();
            } else {
                objectHelper = CoreFactory.objectHelper;
            }
            if (objectHelper.isNull(this.systemSettings)) {
                this.systemSettings = CoreFactory.systemSettings = new _systemSettings2.default();
            }
            if (objectHelper.isNull(this.objectHelper)) {
                this.objectHelper = CoreFactory.objectHelper = objectHelper;
            }
            if (objectHelper.isNull(this.jsLizerConfig)) {
                this.jsLizerConfig = CoreFactory.jsLizerConfig = new _config2.default();
            }
            if (objectHelper.isNull(this.storageHandler)) {
                this.storageHandler = CoreFactory.storageHandler = new _storageHandler2.default(this.objectHelper);
            }
        }
    }]);

    return CoreFactory;
}();

exports.default = CoreFactory;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoreFactory = undefined;

var _coreFactory = __webpack_require__(0);

var _coreFactory2 = _interopRequireDefault(_coreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _coreFactory2.default();

exports.CoreFactory = _coreFactory2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customException = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SystemSettings = function () {
    function SystemSettings() {
        _classCallCheck(this, SystemSettings);

        this.SYSTEM_LANGUAGE = 'en';
        this.SYSTEM_DATE_FORMAT = 'DD-MM-YYYY';
        this.SYSTEM_DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm';
        this.setEnvironmentRelatedValues();
    }

    _createClass(SystemSettings, [{
        key: 'setEnvironmentRelatedValues',
        value: function setEnvironmentRelatedValues() {
            if (location.hostname === 'localhost') {
                this.ENVIRONMENT = 'development';
                this.ROOT_URL = 'http://' + location.hostname + '/';
            } else {
                throw new _customException.FatalError('core_system_settings_1', null);
            }
            this.ROOT_API_URL = this.ROOT_URL + 'api/';
        }
    }]);

    return SystemSettings;
}();

exports.default = SystemSettings;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiResponseError = exports.MatchError = exports.FieldError = exports.FatalError = exports.DeveloperError = exports.JsLizerError = exports.ValidationError = undefined;

var _errorMessage = __webpack_require__(4);

var _errorMessage2 = _interopRequireDefault(_errorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomException = function (_Error) {
    _inherits(CustomException, _Error);

    function CustomException(customErrorCode, contextData) {
        _classCallCheck(this, CustomException);

        var _this = _possibleConstructorReturn(this, (CustomException.__proto__ || Object.getPrototypeOf(CustomException)).call(this, customErrorCode));

        _this.className = 'CustomException';
        _this.errorTypeDetails = 'Base custom exception class that extends from Error object.';
        _this.messageCode = '';
        _this.customMessage = '';
        _this.contextData = {};
        _this.contextData = contextData;
        _this.messageCode = customErrorCode;
        _this.customMessage = _errorMessage2.default.getErrorMessage(customErrorCode, contextData);
        console.log('CUSTOM ERROR LOG: ', _this);
        return _this;
    }

    return CustomException;
}(Error);

var ValidationError = function (_CustomException) {
    _inherits(ValidationError, _CustomException);

    function ValidationError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ValidationError);

        var _this2 = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, customErrorCode, contextData));

        _this2.className = 'ValidationError';
        _this2.errorTypeDetails = 'Throws when custom made validation check is failed in the system.';
        return _this2;
    }

    return ValidationError;
}(CustomException);

var JsLizerError = function (_CustomException2) {
    _inherits(JsLizerError, _CustomException2);

    function JsLizerError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, JsLizerError);

        var _this3 = _possibleConstructorReturn(this, (JsLizerError.__proto__ || Object.getPrototypeOf(JsLizerError)).call(this, customErrorCode, contextData));

        _this3.className = 'JsLizerError';
        _this3.errorTypeDetails = 'Exception thrown from Jslizer library that is not fatal.';
        return _this3;
    }

    return JsLizerError;
}(CustomException);

var DeveloperError = function (_CustomException3) {
    _inherits(DeveloperError, _CustomException3);

    function DeveloperError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, DeveloperError);

        var _this4 = _possibleConstructorReturn(this, (DeveloperError.__proto__ || Object.getPrototypeOf(DeveloperError)).call(this, customErrorCode, contextData));

        _this4.className = 'DeveloperError';
        _this4.errorTypeDetails = 'HIGHER THAN FATAL ERROR. BASICALLY THE DEVELOPER MESSED UP. FIX IMMEDIATELY.';
        return _this4;
    }

    return DeveloperError;
}(CustomException);

var FatalError = function (_CustomException4) {
    _inherits(FatalError, _CustomException4);

    function FatalError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, FatalError);

        var _this5 = _possibleConstructorReturn(this, (FatalError.__proto__ || Object.getPrototypeOf(FatalError)).call(this, customErrorCode, contextData));

        _this5.className = 'FatalError';
        _this5.errorTypeDetails = 'FATAL SYSTEM ERROR. FIX IMMEDIATELY.';
        return _this5;
    }

    return FatalError;
}(CustomException);

var FieldError = function (_CustomException5) {
    _inherits(FieldError, _CustomException5);

    function FieldError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, FieldError);

        var _this6 = _possibleConstructorReturn(this, (FieldError.__proto__ || Object.getPrototypeOf(FieldError)).call(this, customErrorCode, contextData));

        _this6.className = 'FieldError';
        _this6.errorTypeDetails = 'Field or attribute error. Probably type check failed.';
        return _this6;
    }

    return FieldError;
}(CustomException);

var MatchError = function (_CustomException6) {
    _inherits(MatchError, _CustomException6);

    function MatchError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, MatchError);

        var _this7 = _possibleConstructorReturn(this, (MatchError.__proto__ || Object.getPrototypeOf(MatchError)).call(this, customErrorCode, contextData));

        _this7.className = 'MatchError';
        _this7.errorTypeDetails = 'Expected match error.';
        return _this7;
    }

    return MatchError;
}(CustomException);

var ApiResponseError = function (_CustomException7) {
    _inherits(ApiResponseError, _CustomException7);

    function ApiResponseError(customErrorCode) {
        var contextData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ApiResponseError);

        var _this8 = _possibleConstructorReturn(this, (ApiResponseError.__proto__ || Object.getPrototypeOf(ApiResponseError)).call(this, customErrorCode, contextData));

        _this8.className = 'ApiResponseError';
        _this8.errorTypeDetails = '';
        _this8.errorTypeDetails = 'Error occured in api response or the response object processing.';
        return _this8;
    }

    return ApiResponseError;
}(CustomException);

exports.ValidationError = ValidationError;
exports.JsLizerError = JsLizerError;
exports.DeveloperError = DeveloperError;
exports.FatalError = FatalError;
exports.FieldError = FieldError;
exports.MatchError = MatchError;
exports.ApiResponseError = ApiResponseError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coreFactory = __webpack_require__(0);

var _coreFactory2 = _interopRequireDefault(_coreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorMessage = function () {
    function ErrorMessage() {
        _classCallCheck(this, ErrorMessage);

        this.loadMessages();
    }

    _createClass(ErrorMessage, [{
        key: 'loadMessages',
        value: function loadMessages() {
            var keyList;
            this.MESSAGES = {};
            keyList = Object.getOwnPropertyNames(this);
            for (var i = 0; i < keyList.length; i++) {
                for (var key in this[keyList[i]]) {
                    this.MESSAGES[key] = this[keyList[i]][key];
                }
            }
        }
    }, {
        key: 'getErrorMessage',
        value: function getErrorMessage(customErrorCode, contextData) {
            var currentLanguage, message, patternString;
            currentLanguage = _coreFactory2.default.systemSettings.SYSTEM_LANGUAGE;
            message = this.MESSAGES[customErrorCode][currentLanguage];
            if (_coreFactory2.default.objectHelper.isNotNull(contextData, null)) {
                for (var key in contextData) {
                    patternString = '{{' + key + '}}';
                    while (message.indexOf(patternString) != -1) {
                        message = message.replace(patternString, contextData[key]);
                    }
                }
            }
            return message;
        }
    }]);

    return ErrorMessage;
}();

exports.default = ErrorMessage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectHelper = function () {
    function ObjectHelper() {
        _classCallCheck(this, ObjectHelper);
    }

    _createClass(ObjectHelper, [{
        key: 'isNull',
        value: function isNull(obj) {
            var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (property === null || JSON.stringify(property) === 'null' || JSON.stringify(property) === 'undefined' || typeof property === 'undefined') {
                if (obj === null || JSON.stringify(obj) === 'null' || JSON.stringify(obj) === 'undefined' || typeof obj === 'undefined') {
                    return true;
                }
                return false;
            } else {
                if (obj === null || JSON.stringify(obj) === 'null' || JSON.stringify(obj) === 'undefined' || typeof obj === 'undefined') {
                    return true;
                }
                if (obj[property] === null || JSON.stringify(obj[property]) === 'null' || JSON.stringify(obj[property]) === 'undefined' || typeof obj[property] === 'undefined') {
                    return true;
                }
                return false;
            }
        }
    }, {
        key: 'isNotNull',
        value: function isNotNull(obj) {
            var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return !this.isNull(obj, property);
        }
    }, {
        key: 'extractFromDef',
        value: function extractFromDef(def) {
            var res, key;
            res = {};
            for (key in def) {
                res[key] = def[key].value;
            }
            return res;
        }
    }]);

    return ObjectHelper;
}();

exports.default = ObjectHelper;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsLizerConfig = function JsLizerConfig() {
    _classCallCheck(this, JsLizerConfig);

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
};

exports.default = JsLizerConfig;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StorageHandler = function () {
    function StorageHandler(objectHelper) {
        _classCallCheck(this, StorageHandler);

        this.objectHelper = objectHelper;
        this.temporaryStorageKey = 'storeTemp';
    }

    _createClass(StorageHandler, [{
        key: 'getValue',
        value: function getValue(key) {
            if (this.objectHelper.isNotNull(window.sessionStorage, key)) {
                return window.sessionStorage[key];
            }
            return window.localStorage[key];
        }
    }, {
        key: 'setValue',
        value: function setValue(key, value) {
            if (this.objectHelper.isNotNull(window.sessionStorage, this.temporaryStorageKey)) {
                window.sessionStorage[key] = value;
            } else {
                window.localStorage[key] = value;
            }
        }
    }, {
        key: 'destroyValue',
        value: function destroyValue(key) {
            window.localStorage.removeItem(key);
            window.sessionStorage.removeItem(key);
        }
    }]);

    return StorageHandler;
}();

exports.default = StorageHandler;

/***/ })
/******/ ]);
});
//# sourceMappingURL=jslizer.map