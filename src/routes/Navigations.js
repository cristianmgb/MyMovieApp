import React, {useState, useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import Home from '../containers/HomeContainer';
import Splash from '../containers/SplashContainer';
import MovieDetails from '../containers/MovieDetailsContainer';
import Profile from '../containers/ProfileContainer';

import {getData, KEY_DATA_REGISTER} from '../utils/util';
import {GradientContext} from '../context/GradientContext';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const [showSplash, setShowSplash] = useState(true);

  const {authContext, state} = useContext(GradientContext);
  const {signIn} = authContext;

  const checkLogin = () => {
    setTimeout(async () => {
      const data = await getData(KEY_DATA_REGISTER);
      if (data) {
        setShowSplash(false);
        await signIn(data);
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
      {state.userToken ? (
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
