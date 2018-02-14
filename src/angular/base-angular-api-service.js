import CoreFactory from './../core/core-factory';
import BaseApiService from './../base/base-api-service'

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
