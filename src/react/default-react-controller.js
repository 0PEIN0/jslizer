import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';
import DefaultReactApiService from './default-react-api-service';

class DefaultReactController {

    constructor(loader = null) {
        super(loader);
        this.baseController.service = new DefaultReactApiService(this.loader);
    }
}

export default DefaultReactController;
