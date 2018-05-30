import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';

class BaseAngularController extends BaseController {

    constructor(loadingController = null) {
        super();
        if (CoreFactory.objectHelper.isNull(this, 'filterQuery')) {
            this.filterQuery = {}
        }
        if (CoreFactory.objectHelper.isNull(this, 'paginationQuery')) {
            this.paginationQuery = {}
        }
        this.loadingController = loadingController;
    }

    apiResponseOperations(runDigestCycle = true) {
        if (runDigestCycle && CoreFactory.objectHelper.isNotNull(this, 'scope')) {
            this.scope.$digest();
        } else if (CoreFactory.objectHelper.isNull(this, 'scope')) {
            throw new CoreFactory.DeveloperError(CoreFactory, 'core_base_angular_ctrl_1');
        }
        if (CoreFactory.objectHelper.isNotNull(this, 'loadingController')) {
            this.loadingController.hide();
        }
    }

    doSearch(methodName) {
        if (CoreFactory.objectHelper.isNull(methodName)) {
            return;
        }
        this.searchQuery = this.buildSearchQueryString(this.searchFields, this.searchTerm);
        if (CoreFactory.objectHelper.isNotNull(this, 'filterQuery')) {
            Object.assign(this.searchQuery, this.filterQuery);
        }
        if (CoreFactory.objectHelper.isNotNull(this, 'paginationQuery')) {
            Object.assign(this.searchQuery, this.paginationQuery);
        }
        this[methodName](this.searchQuery);
    }

}

export default BaseAngularController;
