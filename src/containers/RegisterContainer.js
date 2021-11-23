import React, {useState} from 'react';
import {Alert} from 'react-native';
import Register from '../components/Register';
import Api, {SIGNUP} from '../api/api';
import {storeData, KEY_DATA_REGISTER} from '../utils/util';

const RegisterContainer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [celular, setCelular] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const goLogin = () => {
    navigation.navigate('Login');
  };

  const changeNombre = text => {
    setName(text);
  };
  const changeEmail = text => {
    setEmail(text);
  };
  const changeCelular = text => {
    setCelular(text);
  };
  const changePassword = text => {
    setPassword(text);
  };
  const changePasswordConfirm = text => {
    setPasswordConfirm(text);
  };

  const register = async () => {
    if (
      name !== '' &&
      email !== '' &&
      password !== '' &&
      passwordConfirm !== '' &&
      celular !== ''
    ) {
      if (password === passwordConfirm) {
        const data = {
          name,
          email,
          password,
          cellphone: celular,
        };
        setIsLoading(true);
        const res = await Api.post(SIGNUP, data);
        if (res.status === 'OK') {
          console.log('res', res);
          storeData(KEY_DATA_REGISTER, res.data);
          setIsLoading(false);
          navigation.navigate('Home');
        } else {
          setIsLoading(false);
          Alert.alert('Error', res.message);
        }
      } else {
        Alert.alert('Error', 'Las contraseñas no coinciden');
      }
    } else {
      Alert.alert('Error', 'Todos los campos son obligatorios');
    }
  };

  return (
    <Register
      goLogin={goLogin}
      name={name}
      email={email}
      password={password}
      passwordConfirm={passwordConfirm}
      celular={celular}
      changeNombre={changeNombre}
      changeEmail={changeEmail}
      changePassword={changePassword}
      changePasswordConfirm={changePasswordConfirm}
      changeCelular={changeCelular}
      register={register}
      isLoading={isLoading}
    />
  );
};

export default RegisterContainer;
