import CoreFactory from './../core/core-factory';
import BaseApiService from './../base/base-api-service'

class DefaultVueApiService extends BaseApiService {

    constructor(coreFactory, loader = null) {
        super();
        this.loader = loader;
        this.coreFactory = coreFactory;
        this.apiModuleUrl = null;
        this.defaultSchema = {};
    }

    _apiExecutionOperations() {
        if (CoreFactory.objectHelper.isNotNull(this.loader)) {
            this.loader.show();
        }
    }

}

export default DefaultVueApiService;
