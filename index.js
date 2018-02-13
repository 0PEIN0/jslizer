import CoreFactory from './src/core/core-factory';

var jslizer, coreFactory;

coreFactory = new CoreFactory();

jslizer = {
    'CoreFactory': CoreFactory,
    'coreFactory': coreFactory
};

export default jslizer;