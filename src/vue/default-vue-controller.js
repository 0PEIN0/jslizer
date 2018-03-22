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
        if (CoreFactory.objectHelper.isNull(params, 'schema')) {
            newParams.schema = params.parentObj.schema
        }
        if (CoreFactory.objectHelper.isNull(params, 'apiModuleUrl')) {
            params.apiModuleUrl = CoreFactory.systemSettings.SYSTEM_DEFAULT_API_MODULE_URL
        }
        if (CoreFactory.objectHelper.isNull(params, operationTypeUrl)) {
            params[operationTypeUrl] = ''
        }
        if (CoreFactory.objectHelper.isNull(params, operationTypeNeedsAuthentication)) {
            params.operationTypeNeedsAuthentication = params.parentObj.$coreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE
        }
        newParams.errorId = params.errorId
        newParams.payload = params.payload
        newParams.parentObj = params.parentObj
        newParams.schema = params.schema
        newParams.successFieldKey = params.successFieldKey
        this.baseController.service.apiModuleUrl = params.apiModuleUrl
        this.baseController.service[operationTypeUrl] = params[operationTypeUrl]
        this.baseController.service[operationTypeNeedsAuthentication] = params[operationTypeNeedsAuthentication]
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
