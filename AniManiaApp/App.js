import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import AccountScreen from './screens/AccountScreen';
import AnimeCategoryScreen from './screens/AnimeCategoryScreen';
import MangaCategoryScreen from './screens/MangaCategoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import HelpScreen from './screens/HelpScreen';


const Stack = createStackNavigator();

const headerStyle = {
  backgroundColor: 'black',
};

const headerTitleStyle = {
  color: 'white',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome User,',
            headerBackTitleVisible: false,
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen} 
          options={{
            title: 'Create Account',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Discover"
          component={DiscoverScreen} 
          options={{
            title: 'Discover',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen} 
          options={{
            title: 'Dear users,',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen} 
          options={{
            title: 'Account',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="AnimeCategory"
          component={AnimeCategoryScreen} 
          options={{
            title: 'Available Anime today',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="MangaCategory"
          component={MangaCategoryScreen} 
          options={{
            title: 'Available Manga today',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen} 
          options={{
            title: 'Settings',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />
         <Stack.Screen
          name="About Us"
          component={AboutScreen} 
          options={{
            title: 'About Us',
            headerStyle,
            headerTintColor: 'white',
            headerTitleStyle,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
