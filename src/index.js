import CoreFactory from './core/core-factory';

new CoreFactory();

console.log(77, CoreFactory.objectHelper.isNull(null));

export {
    CoreFactory
};