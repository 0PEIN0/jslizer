class BasicLogger {

    constructor(systemSettings) {
        this.systemSettings = systemSettings;
    }

    log(...params) {
        if (this.systemSettings.ENVIRONMENT === this.systemSettings.LOCAL_DEVELOPMENT_ENVIRONMENT_KEY_NAME && this.systemSettings.CONSOLE_LOG_ENABLED) {
            console.log(params);
        }
    }
}

export default ObjectHelper;
