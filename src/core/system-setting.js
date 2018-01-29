import {
    FatalError
} from './../error/custom-exception';

class SystemSettings {

    constructor() {
        this.SYSTEM_LANGUAGE = 'en';
        this.SYSTEM_DATE_FORMAT = 'DD-MM-YYYY';
        this.SYSTEM_DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm';
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