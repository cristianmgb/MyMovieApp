import React, {useState} from 'react';
import {Alert} from 'react-native';
import Login from '../components/Login';
import Api, {SIGNIN} from '../api/api';
import {storeData, KEY_DATA_REGISTER} from '../utils/util';

const LoginContainer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = text => {
    setEmail(text);
  };

  const changePassword = text => {
    setPassword(text);
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  const login = async () => {
    const data = {
      email,
      password,
    };
    const res = await Api.post(SIGNIN, data);
    if (res.status === 'ERROR') {
      Alert.alert('Error', 'Verifica tus datos o registrate!');
    } else {
      storeData(KEY_DATA_REGISTER, res.data);
      navigation.navigate('Home');
    }
    console.log(res);
  };
  return (
    <Login
      goRegister={goRegister}
      email={email}
      password={password}
      changePassword={changePassword}
      changeEmail={changeEmail}
      login={login}
    />
  );
};

export default LoginContainer;
