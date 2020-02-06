import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './features/home';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
