class ObjectHelper {

    constructor() {}

    isNull( obj, property = null ) {
        if ( property === null || JSON.stringify( property ) === 'null' || JSON.stringify( property ) === 'undefined' || typeof ( property ) === 'undefined' ) {
            if ( obj === null || JSON.stringify( obj ) === 'null' || JSON.stringify( obj ) === 'undefined' || typeof ( obj ) === 'undefined' ) {
                return true;
            }
            return false;
        } else {
            if ( obj === null || JSON.stringify( obj ) === 'null' || JSON.stringify( obj ) === 'undefined' || typeof ( obj ) === 'undefined' ) {
                return true;
            }
            if ( obj[ property ] === null || JSON.stringify( obj[ property ] ) === 'null' || JSON.stringify( obj[ property ] ) === 'undefined' || typeof ( obj[ property ] ) === 'undefined' ) {
                return true;
            }
            return false;
        }
    }

    isNotNull( obj, property = null ) {
        return !this.isNull( obj, property );
    }

    extractFromDef( def ) {
        var res, key;
        res = {};
        for ( key in def ) {
            res[ key ] = def[ key ].value;
        }
        return res;
    }
}

export default ObjectHelper;