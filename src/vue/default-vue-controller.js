import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';
import DefaultVueApiService from './default-vue-api-service'

class DefaultVueController extends BaseController {

    constructor(loader = null) {
        super();
        this.loader = loader;
        this.service = new DefaultVueApiService(this.loader);
    }

    _apiResponseOperations() {
        if (CoreFactory.objectHelper.isNotNull(this, 'loader')) {
            this.loader.hide();
        }
    }

    _apiErrorResponseOperations(errObj, params, isServerResponse = true) {
        var len, i, customErrorObj;
        console.log(678, errObj, params, isServerResponse);
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

}

export default DefaultVueController;
