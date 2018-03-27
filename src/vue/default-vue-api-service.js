import CoreFactory from './../core/core-factory';
import BaseApiService from './../base/base-api-service'

class DefaultVueApiService extends BaseApiService {

    constructor(loader = null) {
        super();
        this.loader = loader;
        this.apiModuleUrl = null;
        this[CoreFactory.systemSettings.SYSTEM_DEFAULT_SCHEMA_OBJECT_KEY_NAME] = {};
    }

    _apiExecutionOperations() {
        if (CoreFactory.objectHelper.isNotNull(this.loader)) {
            this.loader.show();
        }
    }

}

export default DefaultVueApiService;
