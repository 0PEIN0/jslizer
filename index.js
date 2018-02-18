import CoreFactory from './src/core/core-factory';
import BaseApiService from './src/base/base-api-service';
import BaseController from './src/base/base-controller';
import BaseAngularApiService from './src/angular/base-angular-api-service';
import BaseAngularController from './src/angular/base-angular-controller';
import angularCoreFactory from './src/angular/index';
import vueCoreFactory from './src/vue/index';

var jslizer;

jslizer = {
    'CoreFactory': CoreFactory,
    'BaseApiService': BaseApiService,
    'BaseController': BaseController,
    'BaseAngularApiService': BaseAngularApiService,
    'BaseAngularController': BaseAngularController,
    'angularCoreFactory': angularCoreFactory,
    'vueCoreFactory': vueCoreFactory
};

export default jslizer;
