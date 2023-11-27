import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen} 
          options={{
            title: 'Create Account',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
