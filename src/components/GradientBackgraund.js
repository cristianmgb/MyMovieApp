import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

export const GradientBackgraund = ({children}) => {
  const {colors, prevColors, setRootPrevColors} = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(setRootPrevColors(colors));
    fadeOut();
  }, [colors, fadeIn, fadeOut, setRootPrevColors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#FFFFFF']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.9, y: 0.9}}
        style={{...StyleSheet.absoluteFillObject}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#FFFFFF']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.9, y: 0.9}}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
