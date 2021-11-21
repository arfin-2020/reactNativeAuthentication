/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SignInScreen from './src/screens/signInScreen/SignInScreen';
import {
  Text,View,StyleSheet
} from 'react-native';



const App = () => {
  

  return (
    <View style={styles.screen}>
      <SignInScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
