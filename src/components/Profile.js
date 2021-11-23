import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export const Profile = ({user, cerrarSesion}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{user.name?.toUpperCase()}</Text>
          <Text style={styles.info}>{user.email?.toLowerCase()}</Text>
          <Text style={styles.description}>{user.cellphone}</Text>

          <TouchableOpacity
            onPress={() => cerrarSesion()}
            style={styles.buttonContainer}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
              Cerrar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  backButton: {
    marginTop: 40,
    marginLeft: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.6,
    elevation: 1,
  },
});
