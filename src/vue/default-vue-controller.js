import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';
import DefaultVueApiService from './default-vue-api-service'

class DefaultVueController extends BaseController {

    constructor(loader = null) {
        super();
        this.loader = loader;
        this.service = new DefaultVueApiService(this.loader);
    }

    apiErrorResponseOperations(errObj, params, isServerResponse = true) {
        if (isServerResponse) {
            params.parentObj[params.errorObjFieldKey] = errObj;
        } else {
            params.parentObj[params.errorObjFieldKey] = errObj[CoreFactory.jsLizerConfig.FIELD_ERROR];
        }
    }

}

export default DefaultVueController;
