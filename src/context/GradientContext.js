import React, {createContext, useState} from 'react';

//Context
export const GradientContext = createContext({});

//Provider
export const GradientProvider = ({children}) => {
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

  const setRootPreviousColors = _prevColors => {
    setPrevColors(_prevColors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setRootColors,
        setRootPreviousColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
