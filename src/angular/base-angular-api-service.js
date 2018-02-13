import CoreFactory from './core-factory';
import BaseApiService from './base-api-service'

class BaseAngularApiService extends BaseApiService {

    constructor(loadingController = null) {
        super();
        this.loadingController = loadingController;
    }

    _apiExecutionOperations() {
        if (CoreFactory.objectHelper.isNotNull(this.loadingController)) {
            this.loadingController.show();
        }
    }

}

export default BaseAngularApiService;