import CoreFactory from './../core/core-factory';
import DefaultVueController from './default-vue-controller'

let vueCoreFactory = (Vue, jslizer, PROJECT_MESSAGES = {}, PROJECT_SYSTEM_SETTINGS = {}, loader = null) => {
    jslizer.coreFactory = new CoreFactory();
    Vue.use(jslizer)
    Vue.mixin({
        // eslint-disable-next-line
        beforeCreate() {
            const options = this.$options
            if (options.jslizer && (this.$coreFactory == null || typeof(this.$coreFactory) === 'undefned' || typeof(this.$coreFactory) === 'null')) {
                this.$coreFactory = options.jslizer.coreFactory
                console.log(442)
            } else if (options.parent && options.parent.$coreFactory && (this.$coreFactory == null || typeof(this.$coreFactory) === 'undefned' || typeof(this.$coreFactory) === 'null')) {
                this.$coreFactory = options.parent.$coreFactory
                console.log(443)
            }
            if (this.$coreFactory.objectHelper.isNull(this.$defaultVueController)) {
                console.log(444)
                this.$defaultVueController = new DefaultVueController(loader)
                this.$coreFactory.errorMessage.loadProjectMessages(PROJECT_MESSAGES)
                this.$coreFactory.systemSettings.loadProjectLocalSettings(this.$coreFactory.systemSettings, PROJECT_SYSTEM_SETTINGS)
            }
        }
    })
};


export default vueCoreFactory;
