import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Boton from '../components/Boton';

const Register = props => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            styles={styles.img}
            source={require('../assets/register_img.jpg')}
          />
          <Text style={styles.text}>Registrarte para ver las películas</Text>
        </View>
        <View>
          <View style={styles.input}>
            <TextInput placeholder="Nombres" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Email" keyboardType="email-address" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Celular" keyboardType="phone-pad" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Constraseña" secureTextEntry={true} />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Confirma Contraseña"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View>
          <Boton title="registrarse" />
        </View>
        <View style={styles.contentHasAccount}>
          <Text style={styles.hasAccount}>
            Ya tienes cuenta?{' '}
            <Text onPress={() => props.goLogin()} style={styles.aqui}>
              Entra aquí
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 5,
    resizeMode: 'contain',
  },
  text: {
    color: 'grey',
    marginBottom: 10,
    fontSize: 16,
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
});

export default Register;