import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

import backgroundImage from '../assets/login-background.jpg';
import logo from '../assets/crunchyroll-logo.png';
import signupStyle from '../styles/SignupStyle';

export default function SignupScreen() {
  const navigation = useNavigation();

  const [profileName, setProfileName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignup = async () => {
    const auth = getAuth();

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Show success message and navigate to Home
      Alert.alert(
        'Account Created',
        'Your account has been created. Please check your email for verification.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      Alert.alert('Error', errorMessage);
    }
  };

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={backgroundImage} style={signupStyle.backgroundImage}>
      <KeyboardAvoidingView style={signupStyle.container} behavior="padding">
        <View style={signupStyle.logoContainer}>
          <Image source={logo} style={signupStyle.logo} />
          <Text style={signupStyle.title}>Sugoii</Text>
        </View>
        <View style={signupStyle.inputGroup}>
          <View style={signupStyle.centerAlign}>
            <Text style={[signupStyle.label, signupStyle.boldText]}>Profile Name</Text>
          </View>
          <TextInput
            onChangeText={(val) => setProfileName(val)}
            value={profileName}
            placeholder="Make your Profile Name"
            placeholderTextColor="#DDD3D1"
            style={signupStyle.input}
          />
        </View>
        <View style={signupStyle.inputGroup}>
          <View style={signupStyle.centerAlign}>
            <Text style={[signupStyle.label, signupStyle.boldText]}>Email</Text>
          </View>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            value={email}
            placeholder="Enter your valid Email"
            keyboardType="email-address"
            placeholderTextColor="#DDD3D1"
            style={signupStyle.input}
          />
        </View>
        <View style={signupStyle.inputGroup}>
          <View style={signupStyle.centerAlign}>
            <Text style={[signupStyle.label, signupStyle.boldText]}>Password</Text>
          </View>
          <TextInput
            onChangeText={(val) => setPassword(val)}
            value={password}
            placeholder="Enter your Password"
            secureTextEntry={true}
            placeholderTextColor="#DDD3D1"
            style={signupStyle.input}
          />
          <Text style={[signupStyle.orangeText, signupStyle.passwordPolicyText]}>
            By Creating an account you're agreeing to our{' '}
            <Text style={signupStyle.orangeText}>Terms</Text> &{' '}
            <Text style={signupStyle.orangeText}>Privacy Policy </Text>
            and are at least 16 years old.
          </Text>
        </View>
        <TouchableOpacity onPress={onPressSignup} style={signupStyle.button}>
          <Text style={signupStyle.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={signupStyle.bottomContainer}>
          <Text style={[signupStyle.bottomText, signupStyle.whiteText]}>Already have an account? </Text>
          <TouchableOpacity onPress={onPressLogin}>
            <Text style={[signupStyle.bottomText, signupStyle.orangeText]}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
