import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './features/screens/home';
import SignUpScreen from './features/screens/signUp';
import DashboardScreen from './features/screens/dashboard';

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
