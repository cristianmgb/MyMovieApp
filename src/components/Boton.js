import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Boton = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => props.action()}>
      <Text style={styles.text}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

Boton.defaultProps = {
  action: () => {},
  title: 'Boton',
};

const styles = StyleSheet.create({
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3C33FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
});

export default Boton;
