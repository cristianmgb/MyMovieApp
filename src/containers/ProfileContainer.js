import React, {useEffect, useState} from 'react';
import {Profile} from '../components/Profile';
import {KEY_DATA_REGISTER, getData, removeData} from '../utils/util';

const ProfileContainer = ({navigation}) => {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const data = await getData(KEY_DATA_REGISTER);
    setUserData(data);
    console.log('data', data);
  };

  const cerrarSesion = async () => {
    await removeData(KEY_DATA_REGISTER);
    setUserData({});
    navigation.navigate('Login');
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <Profile user={userData} cerrarSesion={cerrarSesion} />;
};

export default ProfileContainer;
