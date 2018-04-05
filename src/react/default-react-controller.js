import DefaultController from './../base/default-controller';
import DefaultReactApiService from './default-react-api-service';

class DefaultReactController extends DefaultController {

    constructor(loader = null) {
        super(loader);
        this.baseController.service = new DefaultReactApiService(this.loader);
    }
}

export default DefaultReactController;
