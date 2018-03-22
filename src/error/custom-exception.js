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
        this.systemSettings = coreFactory.systemSettings;
        this.customMessage = coreFactory.errorMessage.getErrorMessage(customErrorCode, contextData);
        if (this.systemSettings.ENVIRONMENT === this.systemSettings.LOCAL_DEVELOPMENT_ENVIRONMENT_KEY_NAME) {
            console.log('CUSTOM ERROR LOG: ', this.customMessage);
        }
    }

    _constructGenericErrorObject(exObj) {
        var res, stack, i, len, newStack, stackLine, methodName, fileLink, fileInfo, fileName, lineNumber, columnNumber;
        res = {};
        res.name = exObj.name;
        res.message = exObj.message;
        stack = exObj.stack;
        stack = stack.split("" + String.fromCharCode(10));
        len = stack.length;
        newStack = [];
        for (i = 0; i < len; i++) {
            stackLine = stack[i];
            stackLine = stackLine.trim();
            if (stackLine.indexOf('at ') === 0) {
                stackLine = stackLine.replace('at ', '');
            }
            if (stackLine.indexOf('(') === -1) {
                methodName = '';
                fileLink = stackLine;
            } else {
                methodName = stackLine.split('(')[0].trim();
                fileLink = stackLine.split('(')[1].replace(')', '').trim();
            }
            fileInfo = fileLink.split('/');
            fileInfo = fileInfo[fileInfo.length - 1].split(':');
            fileName = fileInfo[0];
            lineNumber = parseInt(fileInfo[1]);
            columnNumber = parseInt(fileInfo[2]);
            fileLink = fileLink.split(':');
            fileLink.splice(-2, 2);
            fileLink = fileLink.join('');
            stackLine = {
                'stackLineTrace': stackLine,
                'methodName': methodName,
                'fileLink': fileLink,
                'fileName': fileName,
                'lineNumber': lineNumber,
                'columnNumber': columnNumber
            };
            if (i > 0) {
                newStack.push(stackLine);
            }
        }
        res.stack = newStack;
        if (this.systemSettings.ENVIRONMENT === this.systemSettings.LOCAL_DEVELOPMENT_ENVIRONMENT_KEY_NAME) {
            console.log('GENERIC ERROR OBJECT: ', res);
        }
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
