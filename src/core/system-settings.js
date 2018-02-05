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
        this.LOCAL_API_SERVER_ADDRESS_LIST = ['http://localhost/'];
        this.setEnvironmentRelatedValues();
    }

    setEnvironmentRelatedValues() {
        if (location.hostname === 'localhost') {
            this.ENVIRONMENT = 'development';
            this.ROOT_URL = 'http://' + location.hostname + '/';
        } else {
            throw new FatalError('core_system_settings_1', null);
        }
        this.ROOT_API_URL = this.ROOT_URL + 'api/';
    }

}

export default SystemSettings;