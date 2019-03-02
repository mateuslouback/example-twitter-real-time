import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '../src/pages/Login';
import Timeline from '../src/pages/Timeline';
import New from '../src/pages/New';

const Routes = createAppContainer(
    createSwitchNavigator ({
        Login,
        App: createStackNavigator({
            Timeline,
            New
        }),       
    })
);

export default Routes;