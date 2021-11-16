import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/routes/Navigations';
import {SafeAreaView, Text, View} from 'react-native';
// import Register from './src/containers/RegisterContainer';
// import Login from './src/containers/LoginContainer';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
