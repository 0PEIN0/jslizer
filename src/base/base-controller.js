import CoreFactory from './../core/core-factory';

class BaseController {

    constructor() {
        this.pageCount = 1;
        this.pageList = [];
        this.pageSize = CoreFactory.systemSettings.PAGE_SIZE_LIST;
        this.selectedPage = 1;
        this.selectedPageSize = CoreFactory.systemSettings.DEFAULT_PAGE_SIZE;
        this.computePaginationQuery();
    }

    _baseParamInitializer(params) {
        if (CoreFactory.objectHelper.isNull(params.service)) {
            params.service = this.service;
        }
        if (CoreFactory.objectHelper.isNull(params.parentObj)) {
            params.parentObj = this;
        }
        if (CoreFactory.objectHelper.isNull(params.errorId)) {
            params.errorId = CoreFactory.systemSettings.SYSTEM_DEFAULT_API_ERROR_MESSAGE_ID;
        }
        if (CoreFactory.objectHelper.isNull(params.successFieldKey)) {
            params.successFieldKey = CoreFactory.systemSettings.SYSTEM_DEFAULT_SERVICE_DATA_OBJECT_KEY;
        }
        if (CoreFactory.objectHelper.isNull(params.errorMessageFieldKey)) {
            params.errorMessageFieldKey = CoreFactory.systemSettings.SYSTEM_DEFAULT_ERROR_FIELD_KEY;
        }
        if (CoreFactory.objectHelper.isNull(params.errorObjFieldKey)) {
            params.errorObjFieldKey = CoreFactory.jsLizerConfig.FIELD_ERROR;
        }
        if (CoreFactory.objectHelper.isNull(params.payload)) {
            params.payload = {};
        }
        if (CoreFactory.objectHelper.isNull(params, CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME)) {
            params[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME] = null;
        }
        return params;
    }

    _checkErrorMessageExistance(errorId) {
        if (CoreFactory.objectHelper.isNull(CoreFactory.errorMessage.MESSAGES, errorId)) {
            throw new CoreFactory.DeveloperError(CoreFactory, 'core_base_ctrl_1', {
                errorId: errorId
            });
        }
    }

    _processGenericErrorResponse(errObj, params, runDigestCycle = true, isServerResponse = true) {
        params.parentObj[params.errorMessageFieldKey] = null;
        if (CoreFactory.objectHelper.isNotNull(this.apiErrorResponseOperations)) {
            this.apiErrorResponseOperations(errObj, params, isServerResponse);
        }
        if (CoreFactory.objectHelper.isNotNull(errObj, CoreFactory.jsLizerConfig.DEFAULT_ERROR_MESSAGE_KEY)) {
            params.parentObj[params.errorMessageFieldKey] = errObj[CoreFactory.jsLizerConfig.DEFAULT_ERROR_MESSAGE_KEY];
        } else {
            this._checkErrorMessageExistance(params.errorId);
            if (!(CoreFactory.objectHelper.isNotNull(errObj, CoreFactory.jsLizerConfig.FIELD_HAS_ERROR) && errObj[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] === false)) {
                params.parentObj[params.errorMessageFieldKey] = CoreFactory.errorMessage.getErrorMessage(params.errorId);
            }
        }
        if (CoreFactory.objectHelper.isNotNull(this.apiResponseOperations)) {
            this.apiResponseOperations(runDigestCycle);
        }
    }

    _sendOutJslizerErrorResponse(params, cbfn, schemaResult) {
        if (CoreFactory.objectHelper.isNotNull(cbfn)) {
            var results = {};
            results[CoreFactory.jsLizerConfig.FIELD_VALUE] = schemaResult[CoreFactory.jsLizerConfig.FIELD_VALUE];
            results[CoreFactory.jsLizerConfig.FIELD_ERROR] = schemaResult[CoreFactory.jsLizerConfig.FIELD_ERROR];
            results[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = true;
            cbfn(results, null);
        }
    }

    _processServerErrorResponse(params) {
        var results = {};
        results[CoreFactory.jsLizerConfig.FIELD_VALUE] = params.payload;
        results[CoreFactory.jsLizerConfig.FIELD_ERROR] = params.parentObj[params.errorObjFieldKey];
        results[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = true;
        return results;
    }

    _bindSubscriber(params, promise, cbfn = null) {
        promise.subscribe(data => {
            if (CoreFactory.objectHelper.isNull(CoreFactory.systemSettings.GENERIC_API_RESPONSE_SUCCESS_RESULT_KEY_NAME) || CoreFactory.objectHelper.isNull(data, CoreFactory.systemSettings.GENERIC_API_RESPONSE_SUCCESS_RESULT_KEY_NAME)) {
                params.parentObj[params.successFieldKey] = data;
            } else {
                params.parentObj[params.successFieldKey] = data[CoreFactory.systemSettings.GENERIC_API_RESPONSE_SUCCESS_RESULT_KEY_NAME];
            }
            if (CoreFactory.objectHelper.isNotNull(this.apiResponseOperations)) {
                this.apiResponseOperations();
            }
            if (CoreFactory.objectHelper.isNotNull(cbfn)) {
                var results = CoreFactory.apiResponseService.genericHandler(params, data);
                cbfn(results, data);
            }
        }, errObj => {
            this._processGenericErrorResponse(errObj, params);
            cbfn(this._processServerErrorResponse(params), null);
        });
    }

    _executeSchema(definition, data) {
        var jsLizerObj, result;
        result = {};
        if (CoreFactory.objectHelper.isNull(definition)) {
            result[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = false;
            result[CoreFactory.jsLizerConfig.FIELD_VALUE] = data;
            result[CoreFactory.jsLizerConfig.FIELD_ERROR] = CoreFactory.jsLizerConfig.DEFAULT_ERROR_VALUE;
            return result;
        }
        jsLizerObj = new CoreFactory.JsLizerExecutor(CoreFactory,
            definition,
            data);
        return jsLizerObj.compute();
    }

    _processPayload(params) {
        var schemaResult;
        schemaResult = this._executeSchema(params[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME], params.payload);
        this._processGenericErrorResponse(schemaResult, params, false, false);
        return schemaResult;
    }

    apiResponseOperations() {
        var i, len, loaderKeyNameList;
        loaderKeyNameList = ['loader', 'loadingController'];
        len = loaderKeyNameList.length;
        for (i = 0; i < len; i++) {
            if (CoreFactory.objectHelper.isNotNull(this, 'loader')) {
                if (CoreFactory.objectHelper.isNotNull(this.loader, 'hide')) {
                    if (typeof this.loader.hide === 'function') {
                        this.loader.hide();
                        break;
                    }
                }
            }
        }
    }

    apiErrorResponseOperations(errObj, params, isServerResponse = true) {
        var len, i, customErrorObj;
        if (isServerResponse) {
            if (CoreFactory.objectHelper.isNotNull(errObj, CoreFactory.jsLizerConfig.FIELD_ERROR)) {
                customErrorObj = {};
                len = errObj[CoreFactory.jsLizerConfig.FIELD_ERROR].length;
                for (i = 0; i < len; i++) {
                    customErrorObj[errObj[CoreFactory.jsLizerConfig.FIELD_ERROR][i].field] = errObj[CoreFactory.jsLizerConfig.FIELD_ERROR][i].message;
                }
                params.parentObj[params.errorObjFieldKey] = customErrorObj;
            }
        } else {
            params.parentObj[params.errorObjFieldKey] = errObj[CoreFactory.jsLizerConfig.FIELD_ERROR];
        }
    }

    callFetch(params, cbfn = null) {
        var promise;
        params = this._baseParamInitializer(params);
        promise = params.service.fetch(params.uuid);
        this._bindSubscriber(params, promise, cbfn);
    }

    callListing(params, cbfn = null) {
        var promise;
        params = this._baseParamInitializer(params);
        promise = params.service.listing(params.queryObj);
        this._bindSubscriber(params, promise, cbfn);
    }

    callSave(params, cbfn = null) {
        var promise, schemaResult;
        params = this._baseParamInitializer(params);
        schemaResult = this._processPayload(params);
        if (schemaResult[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR]) {
            return this._sendOutJslizerErrorResponse(params, cbfn, schemaResult);
        }
        promise = params.service.save(params.payload);
        this._bindSubscriber(params, promise, cbfn);
    }

    callUpdate(params, cbfn = null) {
        var promise, schemaResult;
        params = this._baseParamInitializer(params);
        schemaResult = this._processPayload(params);
        if (schemaResult[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR]) {
            return this._sendOutJslizerErrorResponse(params, cbfn, schemaResult);
        }
        promise = params.service.update(params.uuid, params.payload);
        this._bindSubscriber(params, promise, cbfn);
    }

    callDelete(params, cbfn = null) {
        var promise;
        params = this._baseParamInitializer(params);
        promise = params.service.destory(params.uuid);
        this._bindSubscriber(params, promise, cbfn);
    }

    buildSearchQueryString(searchFields, searchTerm) {
        let len, orQuery, searchQuery;
        searchQuery = {};
        if (CoreFactory.objectHelper.isNull(searchTerm) || CoreFactory.objectHelper.isEmpty(searchTerm)) {
            return searchQuery;
        }
        len = searchFields.length;
        orQuery = {};
        for (let i = 0; i < len; i++) {
            orQuery[searchFields[i] + CoreFactory.systemSettings.SEARCH_QUERY_FILTER_OPERATOR] = searchTerm;
        }
        orQuery = JSON.stringify(orQuery);
        searchQuery[CoreFactory.systemSettings.SEARCH_QUERY_KEY] = orQuery;
        return searchQuery;
    }

    calculatePagination(response) {
        let total;
        total = response[CoreFactory.systemSettings.GENERIC_LISTING_API_RESPONSE_COUNT_FIELD];
        this.pageCount = Math.ceil(total / this.selectedPageSize * 1.0);
        this.pageList = [];
        for (let i = 1; i <= this.pageCount; i++) {
            this.pageList.push(i + '');
        }
    }

    searchTermChanged(methodName) {
        if (CoreFactory.objectHelper.isNull(methodName)) {
            return;
        }
        this.selectedPage = 1;
        this.selectedPageSize = CoreFactory.systemSettings.DEFAULT_PAGE_SIZE;
        this.computePaginationQuery();
        this.buildAllQueryStrings(methodName);
    }

    buildAllQueryStrings(methodName) {
        if (CoreFactory.objectHelper.isNull(methodName)) {
            return;
        }
        let searchQuery = this.buildSearchQueryString(this.searchFields, this.searchTerm);
        if (CoreFactory.objectHelper.isNotNull(this, 'filterQuery')) {
            Object.assign(searchQuery, this.filterQuery);
        }
        if (CoreFactory.objectHelper.isNotNull(this, 'paginationQuery')) {
            Object.assign(searchQuery, this.paginationQuery);
        }
        this[methodName](searchQuery);
    }

    computePaginationQuery() {
        this.paginationQuery = {};
        if (CoreFactory.objectHelper.isNotNull(this, 'selectedPageSize')) {
            this.paginationQuery[CoreFactory.systemSettings.PAGE_SIZE_FIELD_KEY] = this.selectedPageSize;
        }
        if (CoreFactory.objectHelper.isNotNull(this, 'selectedPage')) {
            this.paginationQuery[CoreFactory.systemSettings.PAGE_NUMBER_FIELD_KEY] = this.selectedPage;
        }
    }

    paginationChanged(methodName) {
        this.computePaginationQuery();
        this.buildAllQueryStrings(methodName);
    }

    prevPage(methodName) {
        this.selectedPage--;
        if (this.selectedPage < 1) {
            this.selectedPage = 1;
        } else {
            this.paginationChanged(methodName);
        }
    }

    nextPage(methodName) {
        this.selectedPage++;
        if (this.selectedPage > this.pageList.length - 1) {
            this.selectedPage = this.pageList[this.pageList.length - 1];
        } else {
            this.paginationChanged(methodName);
        }
    }

    getSelectedPage() {
        if (CoreFactory.objectHelper.isNotNull(this.selectedPage)) {
            return this.selectedPage;
        } else {
            return 1;
        }
    }

    getSelectedPageSize() {
        if (CoreFactory.objectHelper.isNotNull(this.selectedPageSize)) {
            return this.selectedPageSize;
        } else {
            return CoreFactory.systemSettings.DEFAULT_PAGE_SIZE;
        }
    }
}

export default BaseController;
