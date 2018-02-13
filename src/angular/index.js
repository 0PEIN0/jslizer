import CoreFactory from './core/core-factory';

var coreFactory = angular.module('core.coreFactory', [])
    .service('coreFactory', CoreFactory)
    .name;

export {
    coreFactory
};