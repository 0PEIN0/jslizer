import CoreFactory from './../core/core-factory';

let vueCoreFactory = (Vue, jslizer) => {
    jslizer.coreFactory = new CoreFactory();
    Vue.use(jslizer)
    Vue.mixin({
        // eslint-disable-next-line
        beforeCreate() {
            const options = this.$options
            if (options.jslizer) {
                this.$coreFactory = options.jslizer.coreFactory
            } else if (options.parent && options.parent.$coreFactory) {
                this.$coreFactory = options.parent.$coreFactory
            }
        }
    })
};


export default vueCoreFactory;
