import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Calculatorscreen} from './src/screens/calculator/Calculator.screen';
import {theme} from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView style={theme.backgroundDefault}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <Calculatorscreen />
    </SafeAreaView>
  );
};

export default App;
