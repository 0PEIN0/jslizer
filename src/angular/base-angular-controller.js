import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';

class BaseAngularController extends BaseController {

    constructor(loadingController = null) {
        super();
        this.loadingController = loadingController;
    }

    _apiResponseOperations(runDigestCycle = true) {
        if (runDigestCycle && CoreFactory.objectHelper.isNotNull(this, 'scope')) {
            this.scope.$apply();
        } else if (CoreFactory.objectHelper.isNull(this, 'scope')) {
            throw new CoreFactory.DeveloperError(CoreFactory, 'core_base_angular_ctrl_1');
        }
        if (CoreFactory.objectHelper.isNotNull(this, 'loadingController')) {
            this.loadingController.hide();
        }
    }

    _apiErrorResponseOperations(errObj, params, isServerResponse = true) {
        var len, i, customErrorObj;
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

export default BaseAngularController;