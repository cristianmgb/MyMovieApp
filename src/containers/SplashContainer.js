import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const SplashContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentText}>
        <Text style={styles.text}>My Movie App</Text>
        <ActivityIndicator size={100} color="#fff" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});

export default SplashContainer;
