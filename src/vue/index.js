import CoreFactory from './../core/core-factory';
import DefaultVueController from './default-vue-controller'

let vueCoreFactory = (Vue, jslizer, loader = null) => {
    console.log(443)
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
            if (this.$coreFactory.objectHelper.isNull(this.$coreFactory.defaultVueController)) {
                this.$coreFactory.defaultVueController = new DefaultVueController(loader)
            }
            console.log(444)
        }
    })
};


export default vueCoreFactory;
