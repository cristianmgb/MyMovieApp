import React, {useEffect, useState, useContext} from 'react';
import {Profile} from '../components/Profile';
import {KEY_DATA_REGISTER, getData, removeData} from '../utils/util';
import {GradientContext} from '../context/GradientContext';

const ProfileContainer = ({navigation}) => {
  const [userData, setUserData] = useState({});

  const {authContext} = useContext(GradientContext);
  const {signOut} = authContext;

  const getUserData = async () => {
    const data = await getData(KEY_DATA_REGISTER);
    setUserData(data);
    console.log('data', data);
  };

  const cerrarSesion = async () => {
    await removeData(KEY_DATA_REGISTER);
    setUserData({});
    signOut();
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <Profile user={userData} cerrarSesion={cerrarSesion} />;
};

export default ProfileContainer;
