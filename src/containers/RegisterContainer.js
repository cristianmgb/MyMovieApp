import React from 'react';
import Register from '../components/Register';

const RegisterContainer = ({navigation}) => {
  const goLogin = () => {
    navigation.navigate('Login');
  };

  return <Register goLogin={goLogin} />;
};

export default RegisterContainer;
