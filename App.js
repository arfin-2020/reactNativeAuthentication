import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/Navigation';


const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
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
