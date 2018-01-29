import CoreFactory from './../core/core-factory';
import {
    JsLizerError
} from './../error/custom-exception';

var ObjectHelper = CoreFactory.ObjectHelper;
var JsLizerConfig = CoreFactory.JsLizerConfig;
var ErrorMessage = CoreFactory.ErrorMessage;

class JsLizerExecutor {

    constructor(definition, data) {
        this.rootDefinition = {};
        this.rootDefinition[JsLizerConfig.ROOT_OBJECT_NAME] = {};
        this.rootDefinition[JsLizerConfig.ROOT_OBJECT_NAME][JsLizerConfig.FIELD_TYPE] = JsLizerConfig.FIELD_OBJECT;
        this.rootDefinition[JsLizerConfig.ROOT_OBJECT_NAME][JsLizerConfig.FIELD_CHILD] = definition;
        this.rootData = {};
        this.rootData[JsLizerConfig.FIELD_REQUIRED] = data;
        new ErrorMessage();
    }

    _coreDefaults(definition) {
        if (ObjectHelper.isNull(definition, JsLizerConfig.FIELD_REQUIRED)) {
            definition[JsLizerConfig.FIELD_REQUIRED] = JsLizerConfig.GLOBAL_REQUIRED;
        }
        if (ObjectHelper.isNull(definition, JsLizerConfig.FIELD_NULL)) {
            definition[JsLizerConfig.FIELD_NULL] = JsLizerConfig.GLOBAL_NULL_VALUE;
        }
        return definition;
    }

    _primitiveDefaults(definition) {
        definition = this._coreDefaults(definition);
        if (ObjectHelper.isNull(definition, JsLizerConfig.FIELD_MAX_LENGTH)) {
            definition[JsLizerConfig.FIELD_MAX_LENGTH] = JsLizerConfig.STRING_MAX_LENGTH;
        }
        if (ObjectHelper.isNull(definition, JsLizerConfig.FIELD_MIN_LENGTH)) {
            definition[JsLizerConfig.FIELD_MIN_LENGTH] = JsLizerConfig.STRING_MIN_LENGTH;
        }
        return definition;
    }

    _performLengthChecks(value, minLength, maxLength) {
        if (typeof (value) !== JsLizerConfig.FIELD_STRING) {
            value = JSON.stringify(value);
        }
        if (value.length < minLength) {
            throw new JsLizerError('core_js_lizer_executor_1', {
                'minLength': minLength
            });
        }
        if (value.length > maxLength) {
            throw new JsLizerError('core_js_lizer_executor_2', {
                'maxLength': maxLength
            });
        }
    }

    _performChildrenDefaultChecks(key, definition, parentValue) {
        if (definition[JsLizerConfig.FIELD_REQUIRED] === true) {
            if (!(key in parentValue)) {
                throw new JsLizerError('core_js_lizer_executor_3', null);
            }
        }
    }

    _handleObject(parameters) {
        var objectDef, newDefinition, newValue, definition, value, newParameters;
        value = parameters.definition;
        definition = this._coreDefaults(parameters.definition);
        objectDef = definition[JsLizerConfig.FIELD_CHILD];
        for (let key in objectDef) {
            newDefinition = objectDef[key];
            newValue = value[key];
            newParameters = {};
            newParameters.key = key;
            newParameters.definition = newDefinition;
            newParameters.value = newValue;
            newParameters.parentDefinition = parameters.definition;
            newParameters.parentValue = parameters.value;
            if (definition[JsLizerConfig.FIELD_TYPE] !== JsLizerConfig.FIELD_OBJECT && definition[JsLizerConfig.FIELD_TYPE] !== JsLizerConfig.FIELD_ARRAY) {
                this._performChildrenDefaultChecks(parameters.key, parameters.definition, parameters.parentValue);
            }
            this._execute(newParameters);
        }
    }

    _handleArray(parameters) {}

    _handleString(parameters) {
        var minLength, maxLength, definition;
        definition = this._primitiveDefaults(parameters.definition);
        minLength = definition[JsLizerConfig.FIELD_MIN_LENGTH];
        maxLength = definition[JsLizerConfig.FIELD_MAX_LENGTH];
        this._performLengthChecks(parameters.value, minLength, maxLength);
    }

    _handleInteger(parameters) {}

    _handleDate(parameters) {}

    _handleDecimal(parameters) {}

    compute() {
        var parameters = {};
        parameters.key = JsLizerConfig.ROOT_OBJECT_NAME;
        parameters.definition = this.rootDefinition;
        parameters.value = this.rootData;
        parameters.parentDefinition = null;
        parameters.parentValue = null;
        this._execute(parameters);
    }

    _execute(parameters) {
        var result, returnedResult;
        result = {};
        returnedResult = {};
        result.hasError = false;
        result.data = {};
        result.error = {};
        switch (parameters.definition[JsLizerConfig.FIELD_TYPE]) {
        case JsLizerConfig.FIELD_OBJECT:
            {
                returnedResult = this._handleObject(parameters);
                break;
            }
        case JsLizerConfig.FIELD_ARRAY:
            {
                returnedResult = this._handleArray(parameters);
                break;
            }
        case JsLizerConfig.FIELD_STRING:
            {
                returnedResult = this._handleString(parameters);
                break;
            }
        case JsLizerConfig.FIELD_INTEGER:
            {
                returnedResult = this._handleInteger(parameters);
                break;
            }
        case JsLizerConfig.FIELD_DECIMAL:
            {
                returnedResult = this._handleDecimal(parameters);
                break;
            }
        case JsLizerConfig.FIELD_DATE:
            {
                returnedResult = this._handleDate(parameters);
                break;
            }
        default:
            {
                throw new JsLizerError('core_js_lizer_executor_4', null);
            }
        }
        result.hasError = result.hasError | returnedResult.hasError;
        result.data[parameters.key] = returnedResult.data;
        result.error[parameters.key] = returnedResult.error;
        return result;
    }

}

export default JsLizerExecutor;