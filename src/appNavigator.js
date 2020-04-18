import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './features/home';
import SignUpScreen from './features/signUp';
import DashboardScreen from './features/dashboard';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    Dashboard: {
      screen: DashboardScreen
    }
  },
  {
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
