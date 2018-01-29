class StorageHandler {

    constructor(objectHelper) {
        this.objectHelper = objectHelper;
        this.temporaryStorageKey = 'storeTemp';
    }

    getValue(key) {
        if (this.objectHelper.isNotNull(window.sessionStorage, key)) {
            return window.sessionStorage[key];
        }
        return window.localStorage[key];
    }

    setValue(key, value) {
        if (this.objectHelper.isNotNull(window.sessionStorage, this.temporaryStorageKey)) {
            window.sessionStorage[key] = value;
        } else {
            window.localStorage[key] = value;
        }
    }

    destroyValue(key) {
        window.localStorage.removeItem(key);
        window.sessionStorage.removeItem(key);
    }

}

export default StorageHandler;