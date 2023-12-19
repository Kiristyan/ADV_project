import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underDevelopmentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

function SettingsScreen() {
  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.underDevelopmentText}>This app is under development</Text>
      </View>
    </ImageBackground>
  );
}

export default SettingsScreen;
