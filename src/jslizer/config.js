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

export default JsLizerConfig;