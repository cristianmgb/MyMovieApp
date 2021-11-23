import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import Home from '../containers/HomeContainer';
import Splash from '../containers/SplashContainer';
import MovieDetails from '../containers/MovieDetailsContainer';
import Profile from '../containers/ProfileContainer';

import {getData, KEY_DATA_REGISTER} from '../utils/util';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    setTimeout(async () => {
      const data = await getData(KEY_DATA_REGISTER);
      console.log('data', data);
      if (data) {
        setIsLoggedIn(true);
        setShowSplash(false);
      } else {
        setIsLoggedIn(false);
        setShowSplash(false);
      }
    }, 1500);
  };

  useEffect(() => {
    checkLogin();
  }, []);

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
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="Profile" component={Profile} />
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
