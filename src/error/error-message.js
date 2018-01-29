import CoreFactory from './../core/core-factory';

class ErrorMessage {

    constructor() {
        this.loadMessages();
    }

    loadMessages() {
        var keyList;
        this.MESSAGES = {};
        keyList = Object.getOwnPropertyNames(this);
        for (let i = 0; i < keyList.length; i++) {
            for (let key in this[keyList[i]]) {
                this.MESSAGES[key] = this[keyList[i]][key];
            }
        }
    }

    getErrorMessage(customErrorCode, contextData) {
        var currentLanguage, message, patternString;
        currentLanguage = CoreFactory.systemSettings.SYSTEM_LANGUAGE;
        message = this.MESSAGES[customErrorCode][currentLanguage];
        if (CoreFactory.objectHelper.isNotNull(contextData, null)) {
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