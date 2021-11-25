

import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './src/screens/signInScreen/SignInScreen';
import SignUpScreen from './src/screens/signUpScreen/SignInScreen';



const App = () => {
  

  return (
    <View style={styles.screen}>
      {/* <SignInScreen/> */}
      <SignUpScreen/>
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
