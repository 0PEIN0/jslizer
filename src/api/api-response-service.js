import CoreFactory from './../core/core-factory';

class ApiResponseService {

    constructor() {}

    _dataPostProcessing(data) {
        if (Array.isArray(data) === true) {
            var i, len;
            len = data.length;
            for (i = 0; i < len; i++) {
                data[i] = this._dataPostProcessing(data[i]);
            }
        } else if (typeof(data) === 'object') {
            var key;
            for (key in data) {
                data[key] = this._dataPostProcessing(data[key]);
                if (CoreFactory.objectHelper.isNotNull(data, key)) {
                    if (key.includes('_view_link') === true && data[key].indexOf('/') === 0) {
                        data[key] = this._processImageUrls(data[key]);
                    }
                }
            }
        }
        return data;
    }

    _processImageUrls(imageUrl) {
        return CoreFactory.systemSettings.ROOT_API_URL + imageUrl;
    }

    genericHandler(params, response) {
        var validStatusCodes, results, finalResult;
        finalResult = {};
        validStatusCodes = [200, 201];
        if (CoreFactory.objectHelper.isNull(CoreFactory.systemSettings.GENERIC_API_RESPONSE_SUCCESS_RESULT_KEY_NAME) || CoreFactory.objectHelper.isNull(response, CoreFactory.systemSettings.GENERIC_API_RESPONSE_SUCCESS_RESULT_KEY_NAME)) {
            results = response;
        } else {
            results = response[CoreFactory.systemSettings.GENERIC_API_RESPONSE_SUCCESS_RESULT_KEY_NAME];
        }
        if (CoreFactory.objectHelper.isNotNull(response, CoreFactory.systemSettings.GENERIC_LISTING_API_RESPONSE_COUNT_FIELD)) {
            finalResult[CoreFactory.systemSettings.GENERIC_LISTING_API_RESPONSE_COUNT_FIELD] = response[CoreFactory.systemSettings.GENERIC_LISTING_API_RESPONSE_COUNT_FIELD];
        }
        results = this._dataPostProcessing(results);
        if (CoreFactory.objectHelper.isNull(response, CoreFactory.systemSettings.GENERIC_API_RESPONSE_STATUS_CODE_KEY_NAME) || validStatusCodes.includes(response[CoreFactory.systemSettings.GENERIC_API_RESPONSE_STATUS_CODE_KEY_NAME])) {
            finalResult[CoreFactory.jsLizerConfig.FIELD_RESULTS] = results;
            finalResult[CoreFactory.jsLizerConfig.FIELD_ERROR] = CoreFactory.jsLizerConfig.DEFAULT_ERROR_VALUE;
            finalResult[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = false;
            return finalResult;
        }
        finalResult[CoreFactory.jsLizerConfig.FIELD_RESULTS] = results;
        finalResult[CoreFactory.jsLizerConfig.FIELD_ERROR] = CoreFactory.jsLizerConfig.DEFAULT_ERROR_VALUE;
        params.parentObj[params.errorMessageFieldKey] = CoreFactory.errorMessage.getErrorMessage(params.errorId);
        finalResult[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = true;
        return finalResult;
    }

}

export default ApiResponseService;
