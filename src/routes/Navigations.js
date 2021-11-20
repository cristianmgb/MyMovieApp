import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import Home from '../containers/HomeContainer';
import Detail from '../containers/DetailContainer';

const Stack = createNativeStackNavigator();

const Splash = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Splash</Text>
      </View>
    </SafeAreaView>
  );
};

export const StackNavigator = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setSIsLoggedIn] = useState(true);
  setTimeout(() => {
    setShowSplash(false);
  }, 2000);

  if (showSplash) {
    return <Splash />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailCantainer" component={Detail} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
