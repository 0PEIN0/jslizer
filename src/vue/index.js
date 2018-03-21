import CoreFactory from './../core/core-factory';
import DefaultVueController from './default-vue-controller'

let vueCoreFactory = (Vue, jslizer, PROJECT_MESSAGES = null, PROJECT_SYSTEM_SETTINGS = null, loader = null) => {
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
            if (this.$coreFactory.objectHelper.isNotNull(PROJECT_MESSAGES)) {
                this.$coreFactory.errorMessage.loadProjectMessages(PROJECT_MESSAGES)
            }
            if (this.$coreFactory.objectHelper.isNotNull(PROJECT_SYSTEM_SETTINGS)) {
                this.$coreFactory.systemSettings.loadProjectLocalSettings(this.$coreFactory.systemSettings, PROJECT_SYSTEM_SETTINGS)
            }
        }
    })
};


export default vueCoreFactory;
