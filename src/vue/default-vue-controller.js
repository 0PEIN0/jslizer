import CoreFactory from './../core/core-factory';
import BaseController from './../base/base-controller';
import DefaultVueApiService from './default-vue-api-service'

class DefaultVueController extends BaseController {

    constructor(loader = null) {
        super();
        this.loader = loader;
        this.service = new DefaultVueApiService(this.loader);
    }

}

export default DefaultVueController;
