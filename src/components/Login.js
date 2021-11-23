import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import Boton from './Boton';

const Login = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={require('../assets/login_img.jpg')} />
        <Text style={styles.text}>Bienvenido</Text>
      </View>
      <View>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={value => props.changeEmail(value)}
            value={props.email}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Contraseña"
            onChangeText={value => props.changePassword(value)}
            value={props.password}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View>
        <Boton title="Iniciar Sesión" action={props.login} />
      </View>
      <View style={styles.contentHasAccount}>
        <Text style={styles.hasAccount}>
          No tienes cuenta?{' '}
          <Text onPress={() => props.goRegister()} style={styles.aqui}>
            Registrate aquí
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  input: {
    width: 350,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  hasAccount: {
    color: 'grey',
  },
  aqui: {
    color: 'blue',
  },
  contentHasAccount: {
    marginTop: 20,
  },
  text: {
    color: 'grey',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Login;
