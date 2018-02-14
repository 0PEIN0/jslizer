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
        console.log(111115, 'before load', this.MESSAGES, projectMessages);
        for (let key in projectMessages) {
            this.MESSAGES[key] = {};
            this.MESSAGES[key] = projectMessages[key];
        }
        console.log(111116, 'after load', this.MESSAGES, projectMessages);
    }

    getErrorMessage(customErrorCode, contextData) {
        var currentLanguage, message, patternString;
        currentLanguage = this.systemSettings.SYSTEM_LANGUAGE;
        message = this.MESSAGES[customErrorCode][currentLanguage];
        console.log(111117, 'fetching message', this.MESSAGES);
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
