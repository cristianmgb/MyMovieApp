import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import Home from '../containers/HomeContainer';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
