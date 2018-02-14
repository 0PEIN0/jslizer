import CoreFactory from './src/core/core-factory';
import BaseApiService from './src/base/base-api-service';
import BaseController from './src/base/base-controller';
import BaseAngularApiService from './src/angular/base-angular-api-service';
import BaseAngularController from './src/angular/base-angular-controller';
import angularCoreFactory from './src/angular/index';

var jslizer, coreFactory;

coreFactory = new CoreFactory();

jslizer = {
    'CoreFactory': CoreFactory,
    'coreFactory': coreFactory,
    'BaseApiService': BaseApiService,
    'BaseController': BaseController,
    'BaseAngularApiService': BaseAngularApiService,
    'BaseAngularController': BaseAngularController,
    'angularCoreFactory': angularCoreFactory
};

export default jslizer;
