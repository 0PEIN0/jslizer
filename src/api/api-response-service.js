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
                if (key.includes('_view_link') === true && data[key].indexOf('/') === 0) {
                    data[key] = this._processImageUrls(data[key]);
                }
            }
        }
        return data;
    }

    _processImageUrls(imageUrl) {
        return CoreFactory.systemSettings.ROOT_API_URL + imageUrl;
    }

    genericHandler(response) {
        var validStatusCodes, results, finalResult;
        finalResult = {};
        validStatusCodes = [200, 201];
        results = response.results;
        results = this._dataPostProcessing(results);
        console.log(1111149, results);
        if (CoreFactory.objectHelper.isNull(response, CoreFactory.systemSettings.GENERIC_API_RESPONSE_STATUS_CODE_KEY_NAME) || validStatusCodes.includes(response[CoreFactory.systemSettings.GENERIC_API_RESPONSE_STATUS_CODE_KEY_NAME])) {
            finalResult[CoreFactory.jsLizerConfig.FIELD_RESULTS] = results;
            finalResult[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = false;
            return finalResult;
        }
        finalResult[CoreFactory.jsLizerConfig.FIELD_RESULTS] = results;
        finalResult[CoreFactory.jsLizerConfig.FIELD_HAS_ERROR] = true;
        return finalResult;
    }

}

export default ApiResponseService;
