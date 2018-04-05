import CoreFactory from './src/core/core-factory';
import BaseApiService from './src/base/base-api-service';
import BaseController from './src/base/base-controller';
import BaseAngularApiService from './src/angular/base-angular-api-service';
import BaseAngularController from './src/angular/base-angular-controller';
import angularCoreFactory from './src/angular/index';
import vueCoreFactory from './src/vue/index';
import reactCoreFactory from './src/react/index';
import DefaultReactController from './src/react/default-react-controller';
import DefaultVueController from './src/vue/default-vue-controller';

var jslizer;

jslizer = {
    'CoreFactory': CoreFactory,
    'BaseApiService': BaseApiService,
    'BaseController': BaseController,
    'BaseAngularApiService': BaseAngularApiService,
    'BaseAngularController': BaseAngularController,
    'angularCoreFactory': angularCoreFactory,
    'vueCoreFactory': vueCoreFactory,
    'DefaultVueController': DefaultVueController,
    'reactCoreFactory': reactCoreFactory,
    'DefaultReactController': DefaultReactController
};

export default jslizer;
