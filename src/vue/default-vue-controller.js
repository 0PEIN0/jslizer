import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';
import DefaultVueApiService from './default-vue-api-service'

class DefaultVueController {

    constructor(loader = null) {
        this.loader = loader;
        this.baseController = new BaseController();
        this.baseController.service = new DefaultVueApiService(this.loader);
    }

    apiErrorResponseOperations(errObj, params, isServerResponse = true) {
        if (isServerResponse) {
            params.parentObj[params.errorObjFieldKey] = errObj;
        } else {
            params.parentObj[params.errorObjFieldKey] = errObj[CoreFactory.jsLizerConfig.FIELD_ERROR];
        }
    }

    _processDefaultControllerParams(params, operationTypeUrl, operationTypeNeedsAuthentication) {
        var newParams;
        newParams = {};
        if (CoreFactory.objectHelper.isNull(params, CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME)) {
            newParams[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME] = params.parentObj[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME];
        }
        if (CoreFactory.objectHelper.isNull(params, 'apiModuleUrl')) {
            params.apiModuleUrl = CoreFactory.systemSettings.SYSTEM_DEFAULT_API_MODULE_URL;
        }
        if (CoreFactory.objectHelper.isNull(params, operationTypeUrl)) {
            params[operationTypeUrl] = '';
        }
        if (CoreFactory.objectHelper.isNull(params, operationTypeNeedsAuthentication)) {
            params.operationTypeNeedsAuthentication = params.parentObj.$coreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE;
        }
        newParams.errorId = params.errorId;
        newParams.payload = params.payload;
        newParams.parentObj = params.parentObj;
        newParams[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME] = params[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME];
        newParams.service = this.baseController.service;
        newParams.successFieldKey = params.successFieldKey;
        this.baseController.service.apiModuleUrl = params.apiModuleUrl;
        this.baseController.service[operationTypeUrl] = params[operationTypeUrl];
        this.baseController.service[operationTypeNeedsAuthentication] = params[operationTypeNeedsAuthentication];
        return newParams;
    }

    _initializeObjects(schemaObj, payloadObj, errorObj) {
        // TODO: implement multi depth form data, regex, date and error object initialization
        for (var key in schemaObj) {
            if (schemaObj.hasOwnProperty(key)) {
                if (schemaObj[key][CoreFactory.jsLizerConfig.FIELD_TYPE] === CoreFactory.jsLizerConfig.FIELD_OBJECT) {
                    errorObj[key] = {};
                    payloadObj[key] = {};
                    for (var childKey in schemaObj[key][CoreFactory.jsLizerConfig.FIELD_CHILD]) {
                        if (schemaObj.hasOwnProperty(childKey)) {
                            this._initializeObjects(schemaObj[key][CoreFactory.jsLizerConfig.FIELD_CHILD][childKey], payloadObj[key], errorObj[key]);
                        }
                    }
                } else if (schemaObj[key][CoreFactory.jsLizerConfig.FIELD_TYPE] === CoreFactory.jsLizerConfig.FIELD_ARRAY) {
                    errorObj[key] = [];
                    payloadObj[key] = [];
                    //this._initializeObjects(schemaObj[key], payloadObj[key], errorObj[key]);
                } else {
                    // TODO: use default values from system settings
                    payloadObj[key] = '';
                    if (schemaObj[key][CoreFactory.jsLizerConfig.FIELD_TYPE] === CoreFactory.jsLizerConfig.FIELD_INTEGER) {
                        payloadObj[key] = 0;
                    }
                    if (schemaObj[key][CoreFactory.jsLizerConfig.FIELD_TYPE] === CoreFactory.jsLizerConfig.FIELD_DECIMAL) {
                        payloadObj[key] = 0.00;
                    }
                    if (schemaObj[key][CoreFactory.jsLizerConfig.FIELD_TYPE] === CoreFactory.jsLizerConfig.FIELD_BOOLEAN) {
                        payloadObj[key] = false;
                    }
                    errorObj[key] = null;
                }
            }
        }
    }

    initForm(parentObj, schemaObjKeyName = null, payloadKeyName = null, errorFieldKeyName = null, errorMessageFieldKeyName = null) {
        var payloadObj, errorObj, schemaObj;
        if (CoreFactory.objectHelper.isNull(schemaObjKeyName)) {
            schemaObjKeyName = CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME;
        }
        if (CoreFactory.objectHelper.isNull(payloadKeyName)) {
            payloadKeyName = CoreFactory.systemSettings.SYSTEM_DEFAULT_PAYLOAD_KEY_NAME;
        }
        if (CoreFactory.objectHelper.isNull(errorFieldKeyName)) {
            errorFieldKeyName = CoreFactory.jsLizerConfig.FIELD_ERROR;
        }
        if (CoreFactory.objectHelper.isNull(errorMessageFieldKeyName)) {
            errorMessageFieldKeyName = CoreFactory.systemSettings.SYSTEM_DEFAULT_ERROR_FIELD_KEY;
        }
        errorObj = {};
        parentObj[errorFieldKeyName] = errorObj;
        if (CoreFactory.objectHelper.isNotNull(parentObj, schemaObjKeyName)) {
            schemaObj = parentObj[schemaObjKeyName];
            if (CoreFactory.objectHelper.isNull(parentObj, payloadKeyName)) {
                payloadObj = {};
            } else {
                payloadObj = parentObj[payloadKeyName];
            }
            errorObj = parentObj[errorFieldKeyName];
            this._initializeObjects(schemaObj, payloadObj, errorObj);
            parentObj[payloadKeyName] = payloadObj;
            parentObj[errorFieldKeyName] = errorObj;
        }
        parentObj[errorMessageFieldKeyName] = null;
    }

    callFetch(params, cbfn = null) {
        var newParams = this._processDefaultControllerParams(params, 'customFetchUrl', 'fetchNeedsAuthentication')
        this.baseController.callFetch(newParams, cbfn)
    }

    callListing(params, cbfn = null) {
        var newParams = this._processDefaultControllerParams(params, 'customListingUrl', 'listingNeedsAuthentication')
        this.baseController.callListing(newParams, cbfn)
    }

    callSave(params, cbfn = null) {
        var newParams = this._processDefaultControllerParams(params, 'customSaveUrl', 'saveNeedsAuthentication')
        this.baseController.callSave(newParams, cbfn)
    }

    callUpdate(params, cbfn = null) {
        var newParams = this._processDefaultControllerParams(params, 'customUpdateUrl', 'updateNeedsAuthentication')
        this.baseController.callUpdate(newParams, cbfn)
    }

    callDelete(params, cbfn = null) {
        var newParams = this._processDefaultControllerParams(params, 'customDestoryUrl', 'destoryNeedsAuthentication')
        this.baseController.callDelete(newParams, cbfn)
    }

}

export default DefaultVueController;
