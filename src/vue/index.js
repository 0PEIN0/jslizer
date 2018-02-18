import CoreFactory from './../core/core-factory';

let vueCoreFactory = (Vue, jslizer) => {
    jslizer.coreFactory = new CoreFactory();
    Vue.use(jslizer)
    Vue.mixin({
        // eslint-disable-next-line
        beforeCreate() {
            const options = this.$options
            if (options.jslizer) {
                this.$jslizer = options.jslizer
            } else if (options.parent && options.parent.$jslizer) {
                this.$jslizer = options.parent.$jslizer
            }
        }
    })
};


export default vueCoreFactory;
