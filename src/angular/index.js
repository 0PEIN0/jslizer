import CoreFactory from './../core/core-factory';

let angularCoreFactory = () => {
    return angular.module('core.coreFactory', [])
        .service('coreFactory', CoreFactory)
        .name;
}

export default angularCoreFactory;
