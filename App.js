

import React from 'react';
import { StyleSheet, View } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import SignInScreen from './src/screens/signInScreen/SignInScreen';
import SignUpScreen from './src/screens/signUpScreen/SignUpScreen';




const App = () => {
  

  return (
    <View style={styles.screen}>
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      <ConfirmEmailScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  }
});

export default App;
