import React, {useState} from 'react';
import Login from '../components/Login';
import Api, {SIGNIN} from '../api/api';

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
