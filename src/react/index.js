import CoreFactory from './../core/core-factory';
import DefaultReactController from './default-react-controller'

let reactCoreFactory = (React, jslizer, PROJECT_MESSAGES = {}, PROJECT_SYSTEM_SETTINGS = {}, loader = null) => {
    jslizer.coreFactory = new CoreFactory();
    jslizer.coreFactory.defaultVueController = new DefaultReactController(loader);
    jslizer.CoreFactory.errorMessage.loadProjectMessages(PROJECT_MESSAGES);
    jslizer.CoreFactory.systemSettings.loadProjectLocalSettings(jslizer.CoreFactory.systemSettings, PROJECT_SYSTEM_SETTINGS);
    class CustomReactComponent extends React.Component {
        constructor(props) {
            super(props);
            this.coreFactory = jslizer.coreFactory;
        }
    }
    return CustomReactComponent;
};


export default reactCoreFactory;