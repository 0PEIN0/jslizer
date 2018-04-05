import DefaultController from './../base/default-controller';
import DefaultVueApiService from './default-vue-api-service';

class DefaultVueController extends DefaultController {

    constructor(loader = null) {
        super(loader);
        this.baseController.service = new DefaultVueApiService(this.loader);
    }
}

export default DefaultVueController;
