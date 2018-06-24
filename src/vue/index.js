let vueCoreFactory = (Vue, jslizer, PROJECT_MESSAGES = {}, PROJECT_SYSTEM_SETTINGS = {}, loader = null) => {
    if (jslizer != null && jslizer != undefined) {
        jslizer.coreFactory = new jslizer.CoreFactory(PROJECT_SYSTEM_SETTINGS);
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
                if (this.$coreFactory != null && this.$coreFactory != undefined) {
                    if (this.$coreFactory.objectHelper.isNull(this.$coreFactory.defaultVueController)) {
                        this.$coreFactory.defaultVueController = new jslizer.DefaultVueController(loader)
                    }
                }
            }
        })
        jslizer.CoreFactory.errorMessage.loadProjectMessages(PROJECT_MESSAGES)
        jslizer.CoreFactory.systemSettings.loadProjectLocalSettings(jslizer.CoreFactory.systemSettings, PROJECT_SYSTEM_SETTINGS)
    }
};


export default vueCoreFactory;
