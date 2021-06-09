/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigator from './src/router/';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;
