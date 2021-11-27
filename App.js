

import React from 'react';
import { SafeAreaView, StyleSheet, SafeAreaView } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import SignInScreen from './src/screens/signInScreen/SignInScreen';
import SignUpScreen from './src/screens/signUpScreen/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/Navigation';




const App = () => {
  
 

  return (
    <SafeAreaView style={styles.screen}>
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  }
});

export default App;
