class ObjectHelper {

    constructor() {}

    isNull(obj, property = null) {
        if (property === null || typeof(property) === 'undefined') {
            if (obj === null || typeof(obj) === 'undefined') {
                return true;
            }
            return false;
        } else {
            if (obj === null || typeof(obj) === 'undefined') {
                return true;
            }
            if (obj[property] === null || typeof(obj[property]) === 'undefined') {
                return true;
            }
            return false;
        }
    }

    isNotNull(obj, property = null) {
        return !this.isNull(obj, property);
    }

    isEmpty(stringValue) {
        if (stringValue === '') {
            return true;
        }
        return false;
    }

    isNotEmpty(stringValue) {
        return !this.isEmpty(stringValue);
    }

    extractFromDef(def) {
        var res, key;
        res = {};
        for (key in def) {
            res[key] = def[key].value;
        }
        return res;
    }

    cloneObj(obj) {
        if (this.isNull(obj) || (typeof obj) != 'object') {
            return obj;
        }
        if (obj instanceof Date) {
            res = new Date(obj.getTime());
            return res
        }
        if (obj instanceof RegExp) {
            flags = '';
            flags += 'g';
            if (obj.global) {
                flags += 'i';
            }
            if (obj.ignoreCase) {
                flags += 'm';
            }
            if (obj.multiline) {
                flags += 'y';
            }
            if (obj.sticky) {
                return new RegExp(obj.source, flags);
            }
        }
        let newInstance = new obj.constructor();
        for (let key in obj) {
            newInstance[key] = this.cloneObj(obj[key]);
        }
        return newInstance;
    }
}

export default ObjectHelper;
