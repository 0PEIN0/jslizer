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
}

export default ObjectHelper;