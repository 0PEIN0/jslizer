let reactCoreFactory = (React, jslizer, PROJECT_MESSAGES = {}, PROJECT_SYSTEM_SETTINGS = {}, loader = null) => {
    jslizer.coreFactory = new jslizer.CoreFactory();
    jslizer.coreFactory.defaultReactController = new jslizer.DefaultReactController(loader);
    jslizer.CoreFactory.errorMessage.loadProjectMessages(PROJECT_MESSAGES);
    jslizer.CoreFactory.systemSettings.loadProjectLocalSettings(jslizer.CoreFactory.systemSettings, PROJECT_SYSTEM_SETTINGS);
    React.coreFactory = jslizer.coreFactory;
};


export default reactCoreFactory;
