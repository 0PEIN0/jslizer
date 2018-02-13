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
    }
}

export default JsLizerConfig;