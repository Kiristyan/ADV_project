import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F5772B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonLogout: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonText1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonTextsettings: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonTextLogout: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 35,
  },
});

function HomeScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout? 😢',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Home Screen</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigation('About Us')}
          >
            <FontAwesome5 name="users" size={24} color="white" />
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigation('Settings')}
          >
            <Feather name="settings" size={24} color="white" />
            <Text style={styles.buttonTextsettings}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigation('Help')}
          >
            <MaterialIcons name="message" size={24} color="white" />
            <Text style={styles.buttonText1}>Message Us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            style={styles.buttonLogout}
          >
            <Text style={styles.buttonTextLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
