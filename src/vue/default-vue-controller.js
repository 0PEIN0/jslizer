import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';
import DefaultVueApiService from './default-vue-api-service';

class DefaultVueController {

    constructor(loader = null) {
        super(loader);
        this.baseController.service = new DefaultVueApiService(this.loader);
    }
}

export default DefaultVueController;
