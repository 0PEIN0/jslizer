class StorageHandler {

    constructor(objectHelper) {
        this.objectHelper = objectHelper;
        this.storageKey = 'data';
        this.tokenFieldName = 'userToken';
        this.userUuidFieldName = 'userUUID';
        this.allStorageFieldNames = [
            this.storageKey,
            this.tokenFieldName,
            this.userUuidFieldName
        ];
    }

    getValue(key) {
        if (this.objectHelper.isNotNull(window.sessionStorage, key)) {
            return window.sessionStorage[key];
        }
        return window.localStorage[key];
    }

    setValue(key, value) {
        if (this.objectHelper.isNotNull(window.sessionStorage, this.storageKey)) {
            window.sessionStorage[key] = value;
        } else {
            window.localStorage[key] = value;
        }
    }

    destroyValue(key) {
        window.localStorage.removeItem(key);
        window.sessionStorage.removeItem(key);
    }

    getToken() {
        return this.getValue(this.tokenFieldName);
    }

    getUserUuid() {
        return this.getValue(this.userUuidFieldName);
    }

    saveToken(token, doRemember) {
        if (doRemember === false) {
            window.sessionStorage[this.tokenFieldName] = token;
        } else {
            window.localStorage[this.tokenFieldName] = token;
        }
    }

    saveUserUuid(value) {
        this.setValue(this.userUuidFieldName, value);
    }

    destroyPersistentValues() {
        for (var i = 0; i < this.allStorageFieldNames.length; i++) {
            this.destroyValue(this.allStorageFieldNames[i]);
        }
    }

    deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    destroyAllStorage() {
        localStorage.clear();
        sessionStorage.clear();
        this.deleteAllCookies();
    }

}

export default StorageHandler;
