class CustomException extends Error {

    constructor(coreFactory, customErrorCode, contextData) {
        super(customErrorCode);
        this.className = 'CustomException';
        this.errorTypeDetails = 'Base custom exception class that extends from Error object.';
        this.messageCode = '';
        this.customMessage = '';
        this.contextData = {};
        this.contextData = contextData;
        this.messageCode = customErrorCode;
        this.customMessage = coreFactory.errorMessage.getErrorMessage(customErrorCode, contextData);
        console.log('CUSTOM ERROR LOG: ', this.customMessage);
    }

}

class ValidationError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'ValidationError';
        this.errorTypeDetails = 'Throws when custom made validation check is failed in the system.';
    }

}

class JsLizerError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'JsLizerError';
        this.errorTypeDetails = 'Exception thrown from Jslizer library that is not fatal.';
    }

}

class DeveloperError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'DeveloperError';
        this.errorTypeDetails = 'HIGHER THAN FATAL ERROR. BASICALLY THE DEVELOPER MESSED UP. FIX IMMEDIATELY.';
    }

}

class FatalError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'FatalError';
        this.errorTypeDetails = 'FATAL SYSTEM ERROR. FIX IMMEDIATELY.';
    }

}

class FieldError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'FieldError';
        this.errorTypeDetails = 'Field or attribute error. Probably type check failed.';
    }

}

class MatchError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'MatchError';
        this.errorTypeDetails = 'Expected match error.';
    }

}

class ApiResponseError extends CustomException {

    constructor(coreFactory, customErrorCode, contextData = {}) {
        super(coreFactory, customErrorCode, contextData);
        this.className = 'ApiResponseError';
        this.errorTypeDetails = '';
        this.errorTypeDetails = 'Error occured in api response or the response object processing.';
    }

}

export {
    ValidationError,
    JsLizerError,
    DeveloperError,
    FatalError,
    FieldError,
    MatchError,
    ApiResponseError
};