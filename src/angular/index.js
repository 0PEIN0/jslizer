import CoreFactory from './../core/core-factory';

var angularCoreFactory = () => {
    return angular.module('core.coreFactory', [])
        .service('coreFactory', CoreFactory)
        .name;
}

export {
    angularCoreFactory
};
