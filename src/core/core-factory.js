import SystemSettings from './system-settings';
import ObjectHelper from './../utils/object-helper';
import JsLizerConfig from './../jslizer/jslizer-config';
import StorageHandler from './../utils/storage-handler';

class CoreFactory {

    constructor() {
        this.generateInstances();
    }

    generateInstances() {
        var objectHelper;
        if (CoreFactory.objectHelper === null || JSON.stringify(CoreFactory.objectHelper) === 'null' || JSON.stringify(CoreFactory.objectHelper) === 'undefined' || typeof (CoreFactory.objectHelper) === 'undefined') {
            objectHelper = new ObjectHelper();
        } else {
            objectHelper = CoreFactory.objectHelper;
        }
        if (objectHelper.isNull(this.systemSettings)) {
            this.systemSettings = CoreFactory.systemSettings = new SystemSettings();
        }
        if (objectHelper.isNull(this.objectHelper)) {
            this.objectHelper = CoreFactory.objectHelper = objectHelper;
        }
        if (objectHelper.isNull(this.jsLizerConfig)) {
            this.jsLizerConfig = CoreFactory.jsLizerConfig = new JsLizerConfig();
        }
        if (objectHelper.isNull(this.storageHandler)) {
            this.storageHandler = CoreFactory.storageHandler = new StorageHandler(this.objectHelper);
        }
    }
}

export default CoreFactory;