import SystemSettings from './system-settings';
import ObjectHelper from './../utils/object-helper';
import JsLizerConfig from './../jslizer/config';
import JsLizerExecutor from './../jslizer/executor';
import StorageHandler from './../utils/storage-handler';
import ErrorMessage from './../error/error-message'
import ApiResponseService from './../api/api-response-service';
import {
    ValidationError,
    JsLizerError,
    DeveloperError,
    FatalError,
    FieldError,
    MatchError,
    ApiResponseError
} from './../error/custom-exception';

class CoreFactory {

    constructor() {
        this.generateInstances();
    }

    generateInstances() {
        var objectHelper;
        if (CoreFactory.objectHelper === null || typeof(CoreFactory.objectHelper) === 'undefined') {
            objectHelper = new ObjectHelper();
        } else {
            objectHelper = CoreFactory.objectHelper;
        }
        if (objectHelper.isNull(CoreFactory.systemSettings)) {
            this.systemSettings = CoreFactory.systemSettings = new SystemSettings();
        }
        if (objectHelper.isNull(CoreFactory.objectHelper)) {
            this.objectHelper = CoreFactory.objectHelper = objectHelper;
        }
        if (objectHelper.isNull(CoreFactory.jsLizerConfig)) {
            this.jsLizerConfig = CoreFactory.jsLizerConfig = new JsLizerConfig();
        }
        if (objectHelper.isNull(CoreFactory.storageHandler)) {
            this.storageHandler = CoreFactory.storageHandler = new StorageHandler(CoreFactory.objectHelper);
        }
        if (objectHelper.isNull(CoreFactory.apiResponseService)) {
            this.apiResponseService = CoreFactory.apiResponseService = new ApiResponseService();
        }
        if (objectHelper.isNull(CoreFactory.JsLizerExecutor)) {
            this.JsLizerExecutor = CoreFactory.JsLizerExecutor = JsLizerExecutor;
        }
        if (objectHelper.isNull(CoreFactory.ValidationError)) {
            this.ValidationError = CoreFactory.ValidationError = ValidationError;
        }
        if (objectHelper.isNull(CoreFactory.JsLizerError)) {
            this.JsLizerError = CoreFactory.JsLizerError = JsLizerError;
        }
        if (objectHelper.isNull(CoreFactory.DeveloperError)) {
            this.DeveloperError = CoreFactory.DeveloperError = DeveloperError;
        }
        if (objectHelper.isNull(CoreFactory.FatalError)) {
            this.FatalError = CoreFactory.FatalError = FatalError;
        }
        if (objectHelper.isNull(CoreFactory.FieldError)) {
            this.FieldError = CoreFactory.FieldError = FieldError;
        }
        if (objectHelper.isNull(CoreFactory.MatchError)) {
            this.MatchError = CoreFactory.MatchError = MatchError;
        }
        if (objectHelper.isNull(CoreFactory.ApiResponseError)) {
            this.ApiResponseError = CoreFactory.ApiResponseError = ApiResponseError;
        }
        if (objectHelper.isNull(CoreFactory.errorMessage)) {
            this.errorMessage = CoreFactory.errorMessage = new ErrorMessage(CoreFactory.objectHelper, CoreFactory.systemSettings, CoreFactory.DeveloperError);
        }
    }
}

export default CoreFactory;