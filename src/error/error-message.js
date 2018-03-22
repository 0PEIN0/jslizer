import CORE_ERROR_MESSAGES from './core-messages'

class ErrorMessage {

    constructor(objectHelper, systemSettings) {
        this.objectHelper = objectHelper;
        this.systemSettings = systemSettings;
        this._loadCoreMessages();
    }

    _loadCoreMessages() {
        this.MESSAGES = CORE_ERROR_MESSAGES;
    }

    loadProjectMessages(projectMessages) {
        for (let key in projectMessages) {
            this.MESSAGES[key] = {};
            this.MESSAGES[key] = projectMessages[key];
        }
    }

    getErrorMessage(customErrorCode, contextData) {
        var currentLanguage, message, patternString;
        currentLanguage = this.systemSettings.SYSTEM_LANGUAGE;
        message = this.MESSAGES[customErrorCode][currentLanguage];
        if (this.objectHelper.isNotNull(contextData, null)) {
            for (let key in contextData) {
                patternString = '{{' + key + '}}';
                while (message.indexOf(patternString) != -1) {
                    message = message.replace(patternString, contextData[key]);
                }
            }
        }
        return message;
    }

}

export default ErrorMessage;
