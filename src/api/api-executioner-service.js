import {
    Observable
} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import CoreFactory from "./../core/core-factory";

class ApiExecutionerService {

    constructor() {
        this.httpObj = new XMLHttpRequest();
    }

    _genericHttpCall(requestType, path, needAuthentication, data = {}, queryObject = {}) {
        if (requestType === 'GET') {
            path = this._buildQueryParam(path, queryObject);
        }
        return Observable.fromPromise(new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var response = JSON.parse(xhr.response);
                    if (xhr.status === 200 || xhr.status === 201) {
                        console.log(1111143, response);
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            }
            xhr.open(requestType, path, true);
            this._setGenericHeaders(xhr, needAuthentication);
            xhr.send(data);
        }));
    }

    get(path, needAuthentication = false, queryObject = null) {
        return this._genericHttpCall("GET", path, needAuthentication, {}, queryObject);
    }

    post(path, payload, needAuthentication = false) {
        payload = JSON.stringify(payload);
        return this._genericHttpCall("POST", path, needAuthentication, payload);
    }

    put(path, payload, needAuthentication = false) {
        payload = JSON.stringify(payload);
        return this._genericHttpCall("PUT", path, needAuthentication, payload);
    }

    delete(path, needAuthentication = false) {
        return this._genericHttpCall("DELETE", path, needAuthentication);
    }

    _setGenericHeaders(xhr, needAuthentication) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (needAuthentication) {
            headersConfig[CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHORIZATION_HEADER_KEY] = `${CoreFactory.systemSettings.SYSTEM_DEFAULT_AUTHORIZATION_HEADER_VALUE_PREFIX}${CoreFactory.storageHandler.getToken()}`;
        }
        for (let key in headersConfig) {
            xhr.setRequestHeader(key, headersConfig[key]);
        }
    }

    forceDownloadFile(path) {
        //TODO
    }

    _buildQueryParam(urlPath, queryObject) {
        var queryString, finalPath, cn;
        queryString = '';
        cn = 0;
        for (let key in queryObject) {
            if (cn > 0) {
                queryString += '&';
            }
            queryString += key + '=' + queryObject[key];
            cn++;
        }
        finalPath = urlPath;
        if (queryString !== '') {
            finalPath += '?' + queryString;
        }
        return finalPath;
    }

}

export default ApiExecutionerService;
