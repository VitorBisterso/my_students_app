import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './appNavigator';

import store from './store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
