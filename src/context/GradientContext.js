import React, {createContext, useState} from 'react';

export const GradientContext = createContext({});

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

  const setRootPrevColors = _prevColors => {
    setPrevColors(_prevColors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setRootColors,
        setRootPrevColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
