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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var _systemSettings = __webpack_require__(3);

var _systemSettings2 = _interopRequireDefault(_systemSettings);

var _objectHelper = __webpack_require__(4);

var _objectHelper2 = _interopRequireDefault(_objectHelper);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _executor = __webpack_require__(6);

var _executor2 = _interopRequireDefault(_executor);

var _storageHandler = __webpack_require__(7);

var _storageHandler2 = _interopRequireDefault(_storageHandler);

var _errorMessage = __webpack_require__(8);

var _errorMessage2 = _interopRequireDefault(_errorMessage);

var _apiResponseService = __webpack_require__(10);

var _apiResponseService2 = _interopRequireDefault(_apiResponseService);

var _customException = __webpack_require__(1);

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
            if (CoreFactory.objectHelper === null || typeof CoreFactory.objectHelper === 'undefined') {
                objectHelper = new _objectHelper2.default();
            } else {
                objectHelper = CoreFactory.objectHelper;
            }
            if (objectHelper.isNull(CoreFactory.systemSettings)) {
                this.systemSettings = CoreFactory.systemSettings = new _systemSettings2.default();
            }
            if (objectHelper.isNull(CoreFactory.objectHelper)) {
                this.objectHelper = CoreFactory.objectHelper = objectHelper;
            }
            if (objectHelper.isNull(CoreFactory.jsLizerConfig)) {
                this.jsLizerConfig = CoreFactory.jsLizerConfig = new _config2.default();
            }
            if (objectHelper.isNull(CoreFactory.storageHandler)) {
                this.storageHandler = CoreFactory.storageHandler = new _storageHandler2.default(CoreFactory.objectHelper);
            }
            if (objectHelper.isNull(CoreFactory.apiResponseService)) {
                this.apiResponseService = CoreFactory.apiResponseService = new _apiResponseService2.default();
            }
            if (objectHelper.isNull(CoreFactory.JsLizerExecutor)) {
                this.JsLizerExecutor = CoreFactory.JsLizerExecutor = _executor2.default;
            }
            if (objectHelper.isNull(CoreFactory.ValidationError)) {
                this.ValidationError = CoreFactory.ValidationError = _customException.ValidationError;
            }
            if (objectHelper.isNull(CoreFactory.JsLizerError)) {
                this.JsLizerError = CoreFactory.JsLizerError = _customException.JsLizerError;
            }
            if (objectHelper.isNull(CoreFactory.DeveloperError)) {
                this.DeveloperError = CoreFactory.DeveloperError = _customException.DeveloperError;
            }
            if (objectHelper.isNull(CoreFactory.FatalError)) {
                this.FatalError = CoreFactory.FatalError = _customException.FatalError;
            }
            if (objectHelper.isNull(CoreFactory.FieldError)) {
                this.FieldError = CoreFactory.FieldError = _customException.FieldError;
            }
            if (objectHelper.isNull(CoreFactory.MatchError)) {
                this.MatchError = CoreFactory.MatchError = _customException.MatchError;
            }
            if (objectHelper.isNull(CoreFactory.ApiResponseError)) {
                this.ApiResponseError = CoreFactory.ApiResponseError = _customException.ApiResponseError;
            }
            if (objectHelper.isNull(CoreFactory.errorMessage)) {
                this.errorMessage = CoreFactory.errorMessage = new _errorMessage2.default(CoreFactory.objectHelper, CoreFactory.systemSettings, CoreFactory.DeveloperError);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomException = function (_Error) {
    _inherits(CustomException, _Error);

    function CustomException(coreFactory, customErrorCode, contextData) {
        _classCallCheck(this, CustomException);

        var _this = _possibleConstructorReturn(this, (CustomException.__proto__ || Object.getPrototypeOf(CustomException)).call(this, customErrorCode));

        _this.className = 'CustomException';
        _this.errorTypeDetails = 'Base custom exception class that extends from Error object.';
        _this.messageCode = '';
        _this.customMessage = '';
        _this.contextData = {};
        _this.contextData = contextData;
        _this.messageCode = customErrorCode;
        _this.customMessage = coreFactory.errorMessage.getErrorMessage(customErrorCode, contextData);
        console.log('CUSTOM ERROR LOG: ', _this.customMessage);
        return _this;
    }

    return CustomException;
}(Error);

var ValidationError = function (_CustomException) {
    _inherits(ValidationError, _CustomException);

    function ValidationError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ValidationError);

        var _this2 = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, coreFactory, customErrorCode, contextData));

        _this2.className = 'ValidationError';
        _this2.errorTypeDetails = 'Throws when custom made validation check is failed in the system.';
        return _this2;
    }

    return ValidationError;
}(CustomException);

var JsLizerError = function (_CustomException2) {
    _inherits(JsLizerError, _CustomException2);

    function JsLizerError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, JsLizerError);

        var _this3 = _possibleConstructorReturn(this, (JsLizerError.__proto__ || Object.getPrototypeOf(JsLizerError)).call(this, coreFactory, customErrorCode, contextData));

        _this3.className = 'JsLizerError';
        _this3.errorTypeDetails = 'Exception thrown from Jslizer library that is not fatal.';
        return _this3;
    }

    return JsLizerError;
}(CustomException);

var DeveloperError = function (_CustomException3) {
    _inherits(DeveloperError, _CustomException3);

    function DeveloperError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, DeveloperError);

        var _this4 = _possibleConstructorReturn(this, (DeveloperError.__proto__ || Object.getPrototypeOf(DeveloperError)).call(this, coreFactory, customErrorCode, contextData));

        _this4.className = 'DeveloperError';
        _this4.errorTypeDetails = 'HIGHER THAN FATAL ERROR. BASICALLY THE DEVELOPER MESSED UP. FIX IMMEDIATELY.';
        return _this4;
    }

    return DeveloperError;
}(CustomException);

var FatalError = function (_CustomException4) {
    _inherits(FatalError, _CustomException4);

    function FatalError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, FatalError);

        var _this5 = _possibleConstructorReturn(this, (FatalError.__proto__ || Object.getPrototypeOf(FatalError)).call(this, coreFactory, customErrorCode, contextData));

        _this5.className = 'FatalError';
        _this5.errorTypeDetails = 'FATAL SYSTEM ERROR. FIX IMMEDIATELY.';
        return _this5;
    }

    return FatalError;
}(CustomException);

var FieldError = function (_CustomException5) {
    _inherits(FieldError, _CustomException5);

    function FieldError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, FieldError);

        var _this6 = _possibleConstructorReturn(this, (FieldError.__proto__ || Object.getPrototypeOf(FieldError)).call(this, coreFactory, customErrorCode, contextData));

        _this6.className = 'FieldError';
        _this6.errorTypeDetails = 'Field or attribute error. Probably type check failed.';
        return _this6;
    }

    return FieldError;
}(CustomException);

var MatchError = function (_CustomException6) {
    _inherits(MatchError, _CustomException6);

    function MatchError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, MatchError);

        var _this7 = _possibleConstructorReturn(this, (MatchError.__proto__ || Object.getPrototypeOf(MatchError)).call(this, coreFactory, customErrorCode, contextData));

        _this7.className = 'MatchError';
        _this7.errorTypeDetails = 'Expected match error.';
        return _this7;
    }

    return MatchError;
}(CustomException);

var ApiResponseError = function (_CustomException7) {
    _inherits(ApiResponseError, _CustomException7);

    function ApiResponseError(coreFactory, customErrorCode) {
        var contextData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ApiResponseError);

        var _this8 = _possibleConstructorReturn(this, (ApiResponseError.__proto__ || Object.getPrototypeOf(ApiResponseError)).call(this, coreFactory, customErrorCode, contextData));

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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core_core_factory__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core_core_factory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_core_core_factory__);


var jslizer, coreFactory;

coreFactory = new __WEBPACK_IMPORTED_MODULE_0__src_core_core_factory___default.a();

jslizer = {
    'CoreFactory': __WEBPACK_IMPORTED_MODULE_0__src_core_core_factory___default.a,
    'coreFactory': coreFactory
};

/* harmony default export */ __webpack_exports__["default"] = (jslizer);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customException = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SystemSettings = function () {
    function SystemSettings() {
        _classCallCheck(this, SystemSettings);

        this.SYSTEM_LANGUAGE = 'en';
        this.SYSTEM_DATE_FORMAT = 'DD-MM-YYYY';
        this.SYSTEM_DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm';
        this.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE = true;
        this.SYSTEM_DEFAULT_AUTHORIZATION_HEADER_KEY = 'Authorization';
        this.SYSTEM_DEFAULT_AUTHORIZATION_HEADER_VALUE_PREFIX = 'JWT ';
        this.SYSTEM_DEFAULT_ERROR_FIELD_KEY = 'errorMessage';
        this.SYSTEM_DEFAULT_SERVICE_DATA_OBJECT_KEY = 'data';
        this.SYSTEM_DEFAULT_API_ERROR_MESSAGE_ID = 'core_system_settings_2';
        this.LOCAL_API_SERVER_DOMAIN_LIST = ['localhost'];
        this.LOCAL_API_SERVER_ADDRESS_LIST = ['http://localhost:8000/'];
        this.API_PREFIX_PATH = 'api/';
        this.setEnvironmentRelatedValues();
    }

    _createClass(SystemSettings, [{
        key: 'setEnvironmentRelatedValues',
        value: function setEnvironmentRelatedValues() {
            if (this.LOCAL_API_SERVER_DOMAIN_LIST.indexOf(location.hostname) !== -1) {
                this.ENVIRONMENT = 'development';
                this.ROOT_URL = this.LOCAL_API_SERVER_ADDRESS_LIST[this.LOCAL_API_SERVER_DOMAIN_LIST.indexOf(location.hostname)];
            } else {
                //TODO: coreFactory was not passed in the custom error class instantiation
                throw new _customException.FatalError('core_system_settings_1');
            }
            this.ROOT_API_URL = this.ROOT_URL + this.API_PREFIX_PATH;
        }
    }]);

    return SystemSettings;
}();

exports.default = SystemSettings;

/***/ }),
/* 4 */
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

            if (property === null || typeof property === 'undefined') {
                if (obj === null || typeof obj === 'undefined') {
                    return true;
                }
                return false;
            } else {
                if (obj === null || typeof obj === 'undefined') {
                    return true;
                }
                if (obj[property] === null || typeof obj[property] === 'undefined') {
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
        key: 'isEmpty',
        value: function isEmpty(stringValue) {
            if (stringValue === '') {
                return true;
            }
            return false;
        }
    }, {
        key: 'isNotEmpty',
        value: function isNotEmpty(stringValue) {
            return !this.isEmpty(stringValue);
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
/* 5 */
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
    this.FIELD_BOOLEAN = 'bool';
    this.FIELD_NULL = 'null';
    this.FIELD_EMPTY = 'empty';
    this.FIELD_REQUIRED = 'required';
    this.FIELD_MAX_LENGTH = 'max';
    this.FIELD_MIN_LENGTH = 'min';
    this.FIELD_HAS_ERROR = 'hasError';
    this.FIELD_VALUE = 'value';
    this.FIELD_ERROR = 'errors';
    this.FIELD_RESULTS = 'results';
    this.DEFAULT_VALUE = '';
    this.DEFAULT_ERROR_VALUE = null;
    this.DEFAULT_ERROR_MESSAGE_KEY = 'message';
    this.ROOT_OBJECT_NAME = '__ROOT_OBJECT__';
    this.STRING_MAX_LENGTH = 102400;
    this.STRING_MIN_LENGTH = 1;
    this.GLOBAL_REQUIRED = true;
    this.GLOBAL_NULL_VALUE = false;
    this.GLOBAL_FIELD_EMPTY = false;
};

exports.default = JsLizerConfig;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsLizerExecutor = function () {
    function JsLizerExecutor(coreFactory, definition, data) {
        _classCallCheck(this, JsLizerExecutor);

        this.coreFactory = coreFactory;
        this.jsLizerConfig = coreFactory.jsLizerConfig;
        this.objectHelper = coreFactory.objectHelper;
        this.JsLizerError = coreFactory.JsLizerError;
        this.DeveloperError = coreFactory.DeveloperError;
        this.rootDefinition = {};
        this.rootDefinition[this.jsLizerConfig.ROOT_OBJECT_NAME] = {};
        this.rootDefinition[this.jsLizerConfig.ROOT_OBJECT_NAME][this.jsLizerConfig.FIELD_TYPE] = this.jsLizerConfig.FIELD_OBJECT;
        this.rootDefinition[this.jsLizerConfig.ROOT_OBJECT_NAME][this.jsLizerConfig.FIELD_CHILD] = definition;
        this.rootData = {};
        this.rootData[this.jsLizerConfig.ROOT_OBJECT_NAME] = data;
    }

    _createClass(JsLizerExecutor, [{
        key: '_checkDeveloperError',
        value: function _checkDeveloperError(exObj) {
            if (exObj.className !== 'JsLizerError') {
                throw new this.DeveloperError(this.coreFactory, 'core_js_lizer_executor_5', {
                    'exceptionMessage': exObj.message
                });
            }
        }
    }, {
        key: '_processInternalError',
        value: function _processInternalError(exObj, currentResult) {
            this._checkDeveloperError(exObj);
            currentResult[this.jsLizerConfig.FIELD_HAS_ERROR] = true;
            currentResult[this.jsLizerConfig.FIELD_ERROR] = exObj.customMessage;
            return currentResult;
        }
    }, {
        key: '_coreDefaults',
        value: function _coreDefaults(definition) {
            if (this.objectHelper.isNull(definition, this.jsLizerConfig.FIELD_REQUIRED)) {
                definition[this.jsLizerConfig.FIELD_REQUIRED] = this.jsLizerConfig.GLOBAL_REQUIRED;
            }
            if (this.objectHelper.isNull(definition, this.jsLizerConfig.FIELD_NULL)) {
                definition[this.jsLizerConfig.FIELD_NULL] = this.jsLizerConfig.GLOBAL_NULL_VALUE;
            }
            if (this.objectHelper.isNull(definition, this.jsLizerConfig.FIELD_EMPTY)) {
                definition[this.jsLizerConfig.FIELD_EMPTY] = this.jsLizerConfig.GLOBAL_FIELD_EMPTY;
            }
            return definition;
        }
    }, {
        key: '_initializePrimitiveDefaults',
        value: function _initializePrimitiveDefaults(definition) {
            definition = this._coreDefaults(definition);
            if (this.objectHelper.isNull(definition, this.jsLizerConfig.FIELD_MAX_LENGTH)) {
                definition[this.jsLizerConfig.FIELD_MAX_LENGTH] = this.jsLizerConfig.STRING_MAX_LENGTH;
            }
            if (this.objectHelper.isNull(definition, this.jsLizerConfig.FIELD_MIN_LENGTH)) {
                definition[this.jsLizerConfig.FIELD_MIN_LENGTH] = this.jsLizerConfig.STRING_MIN_LENGTH;
                if (definition[this.jsLizerConfig.FIELD_EMPTY] === true) {
                    definition[this.jsLizerConfig.FIELD_MIN_LENGTH] = 0;
                }
            }
            return definition;
        }
    }, {
        key: '_initializeResultObj',
        value: function _initializeResultObj() {
            var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var successResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.jsLizerConfig.DEFAULT_VALUE;
            var errorResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.jsLizerConfig.DEFAULT_VALUE;

            var currentResult;
            currentResult = {};
            currentResult[this.jsLizerConfig.FIELD_HAS_ERROR] = hasError;
            currentResult[this.jsLizerConfig.FIELD_ERROR] = errorResult;
            currentResult[this.jsLizerConfig.FIELD_VALUE] = successResult;
            return currentResult;
        }
    }, {
        key: '_performLengthChecks',
        value: function _performLengthChecks(type, value, minLength, maxLength) {
            if (type !== this.jsLizerConfig.FIELD_STRING) {
                value = JSON.stringify(value);
            }
            if (value.length < minLength) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_1', {
                    'minLength': minLength
                });
            }
            if (value.length > maxLength) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_2', {
                    'maxLength': maxLength
                });
            }
        }
    }, {
        key: '_genericValidation',
        value: function _genericValidation(parameters, currentResult, doEscapeNullValue, fn) {
            if (doEscapeNullValue && this.objectHelper.isNull(parameters.value, parameters.key)) {
                return currentResult;
            }
            try {
                fn();
            } catch (exObj) {
                currentResult = this._processInternalError(exObj, currentResult);
            }
            return currentResult;
        }
    }, {
        key: '_lengthChecks',
        value: function _lengthChecks(parameters, currentResult) {
            var _this = this;

            return this._genericValidation(parameters, currentResult, true, function () {
                _this._performLengthChecks(parameters.definition[parameters.key][_this.jsLizerConfig.FIELD_TYPE], parameters.value[parameters.key], parameters.definition[parameters.key][_this.jsLizerConfig.FIELD_MIN_LENGTH], parameters.definition[parameters.key][_this.jsLizerConfig.FIELD_MAX_LENGTH]);
            });
        }
    }, {
        key: '_allowNullCheck',
        value: function _allowNullCheck(parameters, currentResult) {
            var _this2 = this;

            return this._genericValidation(parameters, currentResult, false, function () {
                if (parameters.definition[parameters.key][_this2.jsLizerConfig.FIELD_NULL] === false && _this2.objectHelper.isNull(parameters.value[parameters.key])) {
                    throw new _this2.JsLizerError(_this2.coreFactory, 'core_js_lizer_executor_6', null);
                }
            });
        }
    }, {
        key: '_allowEmptyCheck',
        value: function _allowEmptyCheck(parameters, currentResult) {
            var _this3 = this;

            return this._genericValidation(parameters, currentResult, true, function () {
                if (parameters.definition[parameters.key][_this3.jsLizerConfig.FIELD_EMPTY] === false && _this3.objectHelper.isEmpty(parameters.value[parameters.key])) {
                    throw new _this3.JsLizerError(_this3.coreFactory, 'core_js_lizer_executor_7', null);
                }
            });
        }
    }, {
        key: '_integerCheck',
        value: function _integerCheck(parameters, currentResult) {
            var _this4 = this;

            return this._genericValidation(parameters, currentResult, true, function () {
                try {
                    parseInt(JSON.stringify(parameters.value[parameters.key]));
                } catch (exObj) {
                    throw new _this4.JsLizerError(_this4.coreFactory, 'core_js_lizer_executor_8', null);
                }
            });
        }
    }, {
        key: '_decimalCheck',
        value: function _decimalCheck(parameters, currentResult) {
            var _this5 = this;

            return this._genericValidation(parameters, currentResult, true, function () {
                try {
                    parseFloat(JSON.stringify(parameters.value[parameters.key]));
                } catch (exObj) {
                    throw new _this5.JsLizerError(_this5.coreFactory, 'core_js_lizer_executor_9', null);
                }
            });
        }
    }, {
        key: '_booleanCheck',
        value: function _booleanCheck(parameters, currentResult) {
            var _this6 = this;

            return this._genericValidation(parameters, currentResult, true, function () {
                if (!['true', true, 'false', false].includes(parameters.value[parameters.key])) {
                    throw new _this6.JsLizerError(_this6.coreFactory, 'core_js_lizer_executor_10', null);
                }
            });
        }
    }, {
        key: '_performPrimitiveOperations',
        value: function _performPrimitiveOperations(parameters) {
            var currentResult;
            parameters.definition[parameters.key] = this._initializePrimitiveDefaults(parameters.definition[parameters.key]);
            currentResult = this._initializeResultObj();
            currentResult = this._allowNullCheck(parameters, currentResult);
            currentResult = this._lengthChecks(parameters, currentResult);
            currentResult[this.jsLizerConfig.FIELD_VALUE] = parameters.value[parameters.key];
            return currentResult;
        }
    }, {
        key: '_returnPrimitiveResult',
        value: function _returnPrimitiveResult(parameters, currentResult) {
            var finalResult;
            finalResult = {};
            finalResult[parameters.key] = currentResult;
            console.log(87, parameters, finalResult);
            return finalResult;
        }
    }, {
        key: '_performChildrenDefaultChecks',
        value: function _performChildrenDefaultChecks(key, definition, value) {
            if (definition[this.jsLizerConfig.FIELD_REQUIRED] === true) {
                if (!(key in value)) {
                    throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_3', null);
                }
            }
        }
    }, {
        key: '_handleObject',
        value: function _handleObject(parameters) {
            var objectDef, newDefinition, newValue, definition, value, newParameters, errorResult, successResult, currentResult, finalResult, hasError;
            parameters.definition[parameters.key] = this._coreDefaults(parameters.definition[parameters.key]);
            value = parameters.value[parameters.key];
            definition = parameters.definition[parameters.key];
            objectDef = definition[this.jsLizerConfig.FIELD_CHILD];
            successResult = {};
            errorResult = {};
            hasError = false;
            for (var key in objectDef) {
                newDefinition = objectDef[key];
                newValue = value[key];
                newParameters = {};
                newParameters.key = key;
                newParameters.definition = {};
                newParameters.definition[key] = newDefinition;
                newParameters.value = {};
                newParameters.value[key] = newValue;
                newParameters.parentDefinition = parameters.definition;
                newParameters.parentValue = parameters.value;
                if (definition[this.jsLizerConfig.FIELD_TYPE] !== this.jsLizerConfig.FIELD_OBJECT && definition[this.jsLizerConfig.FIELD_TYPE] !== this.jsLizerConfig.FIELD_ARRAY) {
                    this._performChildrenDefaultChecks(parameters.key, parameters.definition, parameters.value);
                }
                currentResult = this._execute(newParameters);
                hasError = hasError || currentResult[key][this.jsLizerConfig.FIELD_HAS_ERROR];
                successResult[key] = currentResult[key][this.jsLizerConfig.FIELD_VALUE];
                errorResult[key] = currentResult[key][this.jsLizerConfig.FIELD_ERROR];
            }
            finalResult = {};
            finalResult[parameters.key] = this._initializeResultObj(hasError, successResult, errorResult);
            if (!hasError) {
                finalResult[parameters.key][this.jsLizerConfig.FIELD_ERROR] = this.jsLizerConfig.DEFAULT_VALUE;
            }
            console.log(55, parameters, finalResult);
            return finalResult;
        }
    }, {
        key: '_handleArray',
        value: function _handleArray(parameters) {}
    }, {
        key: '_handleString',
        value: function _handleString(parameters) {
            var currentResult;
            currentResult = this._performPrimitiveOperations(parameters);
            currentResult = this._allowEmptyCheck(parameters, currentResult);
            return this._returnPrimitiveResult(parameters, currentResult);
        }
    }, {
        key: '_handleInteger',
        value: function _handleInteger(parameters) {
            var currentResult;
            currentResult = this._performPrimitiveOperations(parameters);
            currentResult = this._integerCheck(parameters, currentResult);
            return this._returnPrimitiveResult(parameters, currentResult);
        }
    }, {
        key: '_handleDate',
        value: function _handleDate(parameters) {
            var currentResult;
            currentResult = this._performPrimitiveOperations(parameters);
            return this._returnPrimitiveResult(parameters, currentResult);
        }
    }, {
        key: '_handleDecimal',
        value: function _handleDecimal(parameters) {
            var currentResult;
            currentResult = this._performPrimitiveOperations(parameters);
            currentResult = this._decimalCheck(parameters, currentResult);
            return this._returnPrimitiveResult(parameters, currentResult);
        }
    }, {
        key: '_handleBoolean',
        value: function _handleBoolean(parameters) {
            var currentResult;
            currentResult = this._performPrimitiveOperations(parameters);
            currentResult = this._booleanCheck(parameters, currentResult);
            return this._returnPrimitiveResult(parameters, currentResult);
        }
    }, {
        key: 'compute',
        value: function compute() {
            var parameters, result, finalResult;
            parameters = {};
            parameters.key = this.jsLizerConfig.ROOT_OBJECT_NAME;
            parameters.definition = this.rootDefinition;
            parameters.value = this.rootData;
            parameters.parentDefinition = null;
            parameters.parentValue = null;
            result = this._execute(parameters);
            finalResult = result[this.jsLizerConfig.ROOT_OBJECT_NAME];
            return finalResult;
        }
    }, {
        key: '_execute',
        value: function _execute(parameters) {
            var returnedResult;
            returnedResult = {};
            switch (parameters.definition[parameters.key][this.jsLizerConfig.FIELD_TYPE]) {
                case this.jsLizerConfig.FIELD_OBJECT:
                    {
                        returnedResult = this._handleObject(parameters);
                        break;
                    }
                case this.jsLizerConfig.FIELD_ARRAY:
                    {
                        returnedResult = this._handleArray(parameters);
                        break;
                    }
                case this.jsLizerConfig.FIELD_STRING:
                    {
                        returnedResult = this._handleString(parameters);
                        break;
                    }
                case this.jsLizerConfig.FIELD_INTEGER:
                    {
                        returnedResult = this._handleInteger(parameters);
                        break;
                    }
                case this.jsLizerConfig.FIELD_DECIMAL:
                    {
                        returnedResult = this._handleDecimal(parameters);
                        break;
                    }
                case this.jsLizerConfig.FIELD_BOOLEAN:
                    {
                        returnedResult = this._handleBoolean(parameters);
                        break;
                    }
                case this.jsLizerConfig.FIELD_DATE:
                    {
                        returnedResult = this._handleDate(parameters);
                        break;
                    }
                default:
                    {
                        throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_4', null);
                    }
            }
            return returnedResult;
        }
    }]);

    return JsLizerExecutor;
}();

exports.default = JsLizerExecutor;

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coreMessages = __webpack_require__(9);

var _coreMessages2 = _interopRequireDefault(_coreMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorMessage = function () {
    function ErrorMessage(objectHelper, systemSettings) {
        _classCallCheck(this, ErrorMessage);

        this.objectHelper = objectHelper;
        this.systemSettings = systemSettings;
        this._loadCoreMessages();
    }

    _createClass(ErrorMessage, [{
        key: '_loadCoreMessages',
        value: function _loadCoreMessages() {
            this.MESSAGES = _coreMessages2.default;
        }
    }, {
        key: 'loadProjectMessages',
        value: function loadProjectMessages(projectMessages) {
            for (var key in projectMessages) {
                this.MESSAGES[key] = {};
                this.MESSAGES[key] = projectMessages[key];
            }
        }
    }, {
        key: 'getErrorMessage',
        value: function getErrorMessage(customErrorCode, contextData) {
            var currentLanguage, message, patternString;
            currentLanguage = this.systemSettings.SYSTEM_LANGUAGE;
            message = this.MESSAGES[customErrorCode][currentLanguage];
            if (this.objectHelper.isNotNull(contextData, null)) {
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CORE_ERROR_MESSAGES = {
    'core_js_lizer_executor_1': {
        'en': 'Not enough characters. Expecting at least {{minLength}} characters.',
        'nl': 'Niet genoeg tekens. Verwacht ten minste {{minLength}} tekens.'
    },
    'core_js_lizer_executor_2': {
        'en': 'Too many characters. Expecting at most {{maxLength}} characters.',
        'nl': 'Te veel karakters. Verwacht maximaal {{maxLength}} tekens.'
    },
    'core_js_lizer_executor_3': {
        'en': 'Required.',
        'nl': 'Verplicht.'
    },
    'core_js_lizer_executor_4': {
        'en': 'Invalid object type.',
        'nl': 'Ongeldig objecttype.'
    },
    'core_js_lizer_executor_5': {
        'en': 'Exception occurred. Details: {{exceptionMessage}}',
        'nl': 'Uitzondering opgetreden. Details: {{exceptionMessage}}'
    },
    'core_js_lizer_executor_6': {
        'en': 'Null value is not allowed on this field.',
        'nl': 'Null-waarde is niet toegestaan in dit veld.'
    },
    'core_js_lizer_executor_7': {
        'en': 'Can not supply empty value here.',
        'nl': 'Kan hier geen lege waarde leveren.'
    },
    'core_js_lizer_executor_8': {
        'en': 'Invalid integer value.',
        'nl': 'Ongeldige integerwaarde.'
    },
    'core_js_lizer_executor_9': {
        'en': 'Invalid decimal value.',
        'nl': 'Ongeldige decimale waarde.'
    },
    'core_js_lizer_executor_10': {
        'en': 'Invalid boolean value.',
        'nl': 'Ongeldige booleaanse waarde.'
    },
    'core_base_page_1': {
        'en': 'Callback function can not null as parameter.',
        'nl': 'Callback-functie kan niet null zijn als parameter.'
    },
    'core_base_page_2': {
        'en': 'Page service must be assigned in page constructor.',
        'nl': 'Paginaservice moet worden toegewezen in paginaconstructor.'
    },
    'core_system_settings_1': {
        'en': 'Could not generate base api url. Possibly the domain you are using is different from what is configured from the server.',
        'nl': 'Kon basis api-URL niet genereren. Mogelijk is het domein dat u gebruikt anders dan wat van de server is geconfigureerd.'
    },
    'core_system_settings_2': {
        'en': 'Did not provide error message.',
        'nl': 'Geen foutmelding gegeven.'
    },
    'core_base_angular_ctrl_1': {
        'en': '`this.scope = $scope;` is needed in child controller constructor.',
        'nl': '`this.scope = $scope;` is needed in child controller constructor.'
    },
    'core_base_ctrl_1': {
        'en': 'Custom error id could not be found, did you forget to declare it? Error ID: {{errorId}}.',
        'nl': 'Aangepaste fout ID kon niet worden gevonden, ben je vergeten om het te declareren? Foutcode: {{errorId}}.'
    }
};

exports.default = CORE_ERROR_MESSAGES;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coreFactory = __webpack_require__(0);

var _coreFactory2 = _interopRequireDefault(_coreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiResponseService = function () {
    function ApiResponseService() {
        _classCallCheck(this, ApiResponseService);
    }

    _createClass(ApiResponseService, [{
        key: '_dataPostProcessing',
        value: function _dataPostProcessing(data) {
            if (Array.isArray(data) === true) {
                var i, len;
                len = data.length;
                for (i = 0; i < len; i++) {
                    data[i] = this._dataPostProcessing(data[i]);
                }
            } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
                var key;
                for (key in data) {
                    data[key] = this._dataPostProcessing(data[key]);
                    if (key.includes('_view_link') === true && data[key].indexOf('/') === 0) {
                        data[key] = this._processImageUrls(data[key]);
                    }
                }
            }
            return data;
        }
    }, {
        key: '_processImageUrls',
        value: function _processImageUrls(imageUrl) {
            return _coreFactory2.default.systemSettings.ROOT_API_URL + imageUrl;
        }
    }, {
        key: 'genericHandler',
        value: function genericHandler(response) {
            var validStatusCodes, results, finalResult;
            finalResult = {};
            validStatusCodes = [200, 201];
            results = response.results;
            results = this._dataPostProcessing(results);
            if (validStatusCodes.includes(response.status_code)) {
                finalResult[_coreFactory2.default.jsLizerConfig.FIELD_RESULTS] = results;
                finalResult[_coreFactory2.default.jsLizerConfig.FIELD_HAS_ERROR] = false;
                return finalResult;
            }
            finalResult[_coreFactory2.default.jsLizerConfig.FIELD_RESULTS] = results;
            finalResult[_coreFactory2.default.jsLizerConfig.FIELD_HAS_ERROR] = true;
            return finalResult;
        }
    }]);

    return ApiResponseService;
}();

exports.default = ApiResponseService;

/***/ })
/******/ ]);
});
//# sourceMappingURL=jslizer.map