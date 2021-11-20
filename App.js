import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/routes/Navigations';
import {GradientProvider} from './src/context/GradientContext';
// import Register from './src/containers/RegisterContainer';
// import Login from './src/containers/LoginContainer';

const AppState = ({children}) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
