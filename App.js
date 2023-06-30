import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Pages from './src/components/Pages';
import SharedPDF from './src/components/SharedPdf';

const App = () => {
  const {container, button, buttonText} = styles;
  return (
    <NavigationContainer>
      <SafeAreaView style={container}>
        <Pages />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});

export default App;
