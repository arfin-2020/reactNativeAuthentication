

import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './src/screens/signInScreen/SignInScreen';



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
    backgroundColor: '#EAEAEA',
  }
});

export default App;
