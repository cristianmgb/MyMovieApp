import React, {createContext, useState, useMemo} from 'react';
import {Reducer} from './Reducer';

export const GradientContext = createContext({});

export const GradientProvider = ({children}) => {
  const [state, dispatch] = Reducer();

  const [colors, setColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setRootColors = _colors => {
    setColors(_colors);
  };

  const setRootPrevColors = _prevColors => {
    setPrevColors(_prevColors);
  };

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: data});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: data});
      },
    }),
    [dispatch],
  );

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setRootColors,
        setRootPrevColors,
        authContext,
        state,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
