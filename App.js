import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Pages from './src/components/Pages';
import 'react-native-gesture-handler';

const App = () => {
  const {container} = styles;
  return (
    <NavigationContainer>
      <SafeAreaView style={container}>
        <Pages />
      </SafeAreaView>
    </NavigationContainer>
    // <SharedPDF />
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
