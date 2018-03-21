import {
    Observable
} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import CoreFactory from './../core/core-factory';
import ApiExecutionerService from './../api/api-executioner-service';

class BaseApiService {

    constructor() {
        this.apiExecutionerService = new ApiExecutionerService();
        this.customFetchUrl = '';
        this.fetchNeedsAuthentication = CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE;
        this.customListingUrl = '';
        this.listingNeedsAuthentication = CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE;
        this.customSaveUrl = '';
        this.saveNeedsAuthentication = CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE;
        this.customDestoryUrl = '';
        this.destoryNeedsAuthentication = CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE;
        this.customUpdateUrl = '';
        this.updateNeedsAuthentication = CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE;
        this.coreFactory = CoreFactory;
        this.apiModuleUrl = null;
    }

    _genericApiExecutionOperations() {
        if (CoreFactory.objectHelper.isNotNull(this._apiExecutionOperations)) {
            this._apiExecutionOperations();
        }
    }

    _buildUrl(overriddenUrl, uuid = null) {
        var partialUrl;
        if (overriddenUrl !== '') {
            partialUrl = overriddenUrl;
        } else {
            partialUrl = this.apiModuleUrl;
        }
        if (CoreFactory.objectHelper.isNotNull(uuid)) {
            partialUrl = partialUrl + uuid;
            if (CoreFactory.systemSettings.API_URL_HAS_TRAILING_SLASH === true) {
                partialUrl = partialUrl + '/';
            }
        }
        return CoreFactory.systemSettings.ROOT_API_URL + partialUrl;
    }

    fetch(uuid = null) {
        var partialUrl, obsrv;
        this._genericApiExecutionOperations();
        partialUrl = this._buildUrl(this.customFetchUrl, uuid);
        obsrv = this.apiExecutionerService.get(partialUrl, this.fetchNeedsAuthentication);
        return obsrv;
    }

    listing(queryObj = {}) {
        var partialUrl, obsrv;
        this._genericApiExecutionOperations();
        partialUrl = this._buildUrl(this.customListingUrl);
        obsrv = this.apiExecutionerService.get(partialUrl, this.listingNeedsAuthentication, queryObj);
        return obsrv;
    }

    save(data = {}) {
        var partialUrl, obsrv;
        this._genericApiExecutionOperations();
        partialUrl = this._buildUrl(this.customSaveUrl);
        obsrv = this.apiExecutionerService.post(partialUrl, data, this.saveNeedsAuthentication);
        return obsrv;
    }

    destory(uuid = null) {
        var partialUrl, obsrv;
        this._genericApiExecutionOperations();
        partialUrl = this._buildUrl(this.customDestoryUrl, uuid);
        obsrv = this.apiExecutionerService.delete(partialUrl, this.destoryNeedsAuthentication);
        return obsrv;
    }

    update(uuid = null, dataObj = {}) {
        var partialUrl, obsrv;
        this._genericApiExecutionOperations();
        partialUrl = this._buildUrl(this.customUpdateUrl, uuid);
        obsrv = this.apiExecutionerService.put(partialUrl, dataObj, this.updateNeedsAuthentication);
        return obsrv;
    }

}

export default BaseApiService;
