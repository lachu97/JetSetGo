/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from './AppModules/Redux/store.js';
import AppNavigation from './AppModules/Navigation/AppNavigation.js';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:Colors.light}}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
