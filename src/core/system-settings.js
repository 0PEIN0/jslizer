import {
    FatalError
} from './../error/custom-exception';

class SystemSettings {

    constructor() {
        this.SYSTEM_LANGUAGE = 'en';
        this.SYSTEM_DATE_FORMAT = 'DD-MM-YYYY';
        this.SYSTEM_DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm';
        this.SYSTEM_DEFAULT_AUTHENTICATION_REQUIRED_VALUE = true;
        this.SYSTEM_DEFAULT_AUTHORIZATION_HEADER_KEY = 'Authorization';
        this.SYSTEM_DEFAULT_AUTHORIZATION_HEADER_VALUE_PREFIX = 'JWT ';
        this.SYSTEM_DEFAULT_ERROR_FIELD_KEY = 'errorMessage';
        this.SYSTEM_DEFAULT_SERVICE_DATA_OBJECT_KEY = 'data';
        this.SYSTEM_DEFAULT_API_ERROR_MESSAGE_ID = 'core_system_settings_2';
        this.LOCAL_API_SERVER_DOMAIN_LIST = ['localhost'];
        this.LOCAL_API_SERVER_ADDRESS_LIST = ['http://localhost:8000/'];
        this.API_PREFIX_PATH = 'api/';
        this.API_URL_HAS_TRAILING_SLASH = true;
        this.setEnvironmentRelatedValues();
    }

    setEnvironmentRelatedValues() {
        if (this.LOCAL_API_SERVER_DOMAIN_LIST.indexOf(location.hostname) !== -1) {
            this.ENVIRONMENT = 'development';
            this.ROOT_URL = this.LOCAL_API_SERVER_ADDRESS_LIST[this.LOCAL_API_SERVER_DOMAIN_LIST.indexOf(location.hostname)];
        } else {
            //TODO: coreFactory was not passed in the custom error class instantiation
            throw new FatalError('core_system_settings_1');
        }
        this.ROOT_API_URL = this.ROOT_URL + this.API_PREFIX_PATH;
    }

    loadProjectLocalSettings(parentObj, projectSystemSettings) {
        for (var key in projectSystemSettings) {
            if (projectSystemSettings.hasOwnProperty(key)) {
                parentObj[key] = projectSystemSettings[key];
            }
        }
        this.setEnvironmentRelatedValues();
        return parentObj;
    }

}

export default SystemSettings;
