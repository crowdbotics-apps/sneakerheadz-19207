import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial84909Navigator from '../features/Tutorial84909/navigator';
import NotificationList84881Navigator from '../features/NotificationList84881/navigator';
import Settings84880Navigator from '../features/Settings84880/navigator';
import Settings84872Navigator from '../features/Settings84872/navigator';
import UserProfile84870Navigator from '../features/UserProfile84870/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial84909: { screen: Tutorial84909Navigator },
NotificationList84881: { screen: NotificationList84881Navigator },
Settings84880: { screen: Settings84880Navigator },
Settings84872: { screen: Settings84872Navigator },
UserProfile84870: { screen: UserProfile84870Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
