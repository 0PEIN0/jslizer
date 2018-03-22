class JsLizerExecutor {

    constructor(coreFactory, definition, data) {
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

    _checkDeveloperError(exObj) {
        if (exObj.className !== 'JsLizerError') {
            throw new this.DeveloperError(this.coreFactory, 'core_js_lizer_executor_5', {
                'exceptionMessage': exObj.message
            });
        }
    }

    _processInternalError(exObj, currentResult) {
        this._checkDeveloperError(exObj);
        currentResult[this.jsLizerConfig.FIELD_HAS_ERROR] = true;
        currentResult[this.jsLizerConfig.FIELD_ERROR] = exObj.customMessage;
        return currentResult;
    }

    _coreDefaults(definition) {
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

    _initializePrimitiveDefaults(definition) {
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

    _initializeResultObj(hasError = false, successResult = this.jsLizerConfig.DEFAULT_VALUE, errorResult = this.jsLizerConfig.DEFAULT_VALUE) {
        var currentResult;
        currentResult = {};
        currentResult[this.jsLizerConfig.FIELD_HAS_ERROR] = hasError;
        currentResult[this.jsLizerConfig.FIELD_ERROR] = errorResult;
        currentResult[this.jsLizerConfig.FIELD_VALUE] = successResult;
        return currentResult;
    }

    _performLengthChecks(type, value, minLength, maxLength) {
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

    _genericValidation(parameters, currentResult, doEscapeNullValue, fn) {
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

    _lengthChecks(parameters, currentResult) {
        return this._genericValidation(parameters, currentResult, true, () => {
            this._performLengthChecks(parameters.definition[parameters.key][this.jsLizerConfig.FIELD_TYPE], parameters.value[parameters.key], parameters.definition[parameters.key][this.jsLizerConfig.FIELD_MIN_LENGTH], parameters.definition[parameters.key][this.jsLizerConfig.FIELD_MAX_LENGTH]);
        });
    }

    _allowNullCheck(parameters, currentResult) {
        return this._genericValidation(parameters, currentResult, false, () => {
            if (parameters.definition[parameters.key][this.jsLizerConfig.FIELD_NULL] === false && this.objectHelper.isNull(parameters.value[parameters.key])) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_6', null);
            }
        });
    }

    _allowEmptyCheck(parameters, currentResult) {
        return this._genericValidation(parameters, currentResult, true, () => {
            if (parameters.definition[parameters.key][this.jsLizerConfig.FIELD_EMPTY] === false && this.objectHelper.isEmpty(parameters.value[parameters.key])) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_7', null);
            }
        });
    }

    _integerCheck(parameters, currentResult) {
        return this._genericValidation(parameters, currentResult, true, () => {
            try {
                parseInt(JSON.stringify(parameters.value[parameters.key]));
            } catch (exObj) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_8', null);
            }
        });
    }


    _decimalCheck(parameters, currentResult) {
        return this._genericValidation(parameters, currentResult, true, () => {
            try {
                parseFloat(JSON.stringify(parameters.value[parameters.key]));
            } catch (exObj) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_9', null);
            }
        });
    }

    _booleanCheck(parameters, currentResult) {
        return this._genericValidation(parameters, currentResult, true, () => {
            if (!['true', true, 'false', false].includes(parameters.value[parameters.key])) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_10', null);
            }
        });
    }

    _performPrimitiveOperations(parameters) {
        var currentResult;
        parameters.definition[parameters.key] = this._initializePrimitiveDefaults(parameters.definition[parameters.key]);
        currentResult = this._initializeResultObj();
        currentResult = this._allowNullCheck(parameters, currentResult);
        currentResult = this._lengthChecks(parameters, currentResult);
        currentResult[this.jsLizerConfig.FIELD_VALUE] = parameters.value[parameters.key];
        return currentResult;
    }

    _returnPrimitiveResult(parameters, currentResult) {
        var finalResult;
        finalResult = {};
        finalResult[parameters.key] = currentResult;
        if (this.coreFactory.systemSettings.ENVIRONMENT === this.coreFactory.systemSettings.LOCAL_DEVELOPMENT_ENVIRONMENT_KEY_NAME) {
            console.log('JSLIZER PRIMITIVE TYPE PROPERTY HANDLER: ', parameters, finalResult);
        }
        return finalResult;
    }

    _performChildrenDefaultChecks(key, definition, value) {
        if (definition[this.jsLizerConfig.FIELD_REQUIRED] === true) {
            if (!(key in value)) {
                throw new this.JsLizerError(this.coreFactory, 'core_js_lizer_executor_3', null);
            }
        }
    }

    _handleObject(parameters) {
        var objectDef, newDefinition, newValue, definition, value, newParameters, errorResult, successResult, currentResult, finalResult, hasError;
        parameters.definition[parameters.key] = this._coreDefaults(parameters.definition[parameters.key]);
        value = parameters.value[parameters.key];
        definition = parameters.definition[parameters.key];
        objectDef = definition[this.jsLizerConfig.FIELD_CHILD];
        successResult = {};
        errorResult = {};
        hasError = false;
        for (let key in objectDef) {
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
        if (this.coreFactory.systemSettings.ENVIRONMENT === this.coreFactory.systemSettings.LOCAL_DEVELOPMENT_ENVIRONMENT_KEY_NAME) {
            console.log('JSLIZER OBJECT TYPE PROPERTY HANDLER: ', parameters, finalResult);
        }
        return finalResult;
    }

    _handleArray(parameters) {}

    _handleString(parameters) {
        var currentResult;
        currentResult = this._performPrimitiveOperations(parameters);
        currentResult = this._allowEmptyCheck(parameters, currentResult);
        return this._returnPrimitiveResult(parameters, currentResult);
    }

    _handleInteger(parameters) {
        var currentResult;
        currentResult = this._performPrimitiveOperations(parameters);
        currentResult = this._integerCheck(parameters, currentResult);
        return this._returnPrimitiveResult(parameters, currentResult);
    }

    _handleDate(parameters) {
        var currentResult;
        currentResult = this._performPrimitiveOperations(parameters);
        return this._returnPrimitiveResult(parameters, currentResult);
    }

    _handleDecimal(parameters) {
        var currentResult;
        currentResult = this._performPrimitiveOperations(parameters);
        currentResult = this._decimalCheck(parameters, currentResult);
        return this._returnPrimitiveResult(parameters, currentResult);
    }

    _handleBoolean(parameters) {
        var currentResult;
        currentResult = this._performPrimitiveOperations(parameters);
        currentResult = this._booleanCheck(parameters, currentResult);
        return this._returnPrimitiveResult(parameters, currentResult);
    }

    compute() {
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

    _execute(parameters) {
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

}

export default JsLizerExecutor;
