import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import style from '../styles/LoginStyle';

import backgroundImage from '../assets/mainbg.png';
import logo from '../assets/crunchyroll-logo.png';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    const auth = getAuth();

    if (!email.includes('@') || !email.includes('.')) {
      alert('Invalid email format. Please enter a valid email.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  const onPressForgotPassword = () => {
    
    // Example: navigation.navigate('ForgotPassword');
  };

  return (
    <ImageBackground source={backgroundImage} style={style.backgroundImage}>
      <KeyboardAvoidingView style={style.container} behavior="padding">
        <View style={style.logoContainer}>
          <Image source={logo} style={style.logo} />
          <Text style={style.title}>AniMania</Text>
          <Text style={style.Betatitle}>ᵇᵉᵗᵃ</Text>
        </View>
        <View style={style.inputGroup}>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#DDD3D1"
            style={style.input}
          />
        </View>
        <View style={style.inputGroup}>
          <TextInput
            onChangeText={(val) => setPassword(val)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#DDD3D1"
            style={style.input}
          />
          <Text style={style.passwordPolicyText}>
            By logging in you're agreeing to our{' '}
            <Text style={style.orangeText}>Terms</Text> &{' '}
            <Text style={style.orangeText}>Privacy Policy </Text> 
            and are at least 16 years old.
          </Text>
        </View>
        <TouchableOpacity onPress={onPressLogin} style={style.button}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={style.bottomContainer}>
          <TouchableOpacity onPress={onPressForgotPassword} style={style.bottomLink}>
            <Text style={[style.bottomText, style.orangeText]}>Forgot Password? </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignup} style={style.bottomLink}>
            <Text style={[style.bottomText, style.orangeText]}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}