import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Cat from "./src/Cat";
import Home from "./src/Home"
import Homework  from "./src/HomeWork"
import Login from "./src/Login"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoTheme from "./src/DemoTheme"
import DemoIcon from "./src/DemoIcon"
import DemoActivityIncator from "./src/DemoActivityIncator"
import DemoAppbar from "./src/DemoAppbar"
const Stack = createNativeStackNavigator();
import { PaperProvider } from 'react-native-paper'

import Project1 from './src/Lab1/Project1';
import Project2 from './src/Lab1/Project2';
import Project3 from './src/Lab1/Project3';
import Project4 from './src/Lab1/Project4';
import Project5 from './src/Lab1/Project5';
import Project6 from './src/Lab1/Project6';
import Project7 from './src/Lab1/Project7';
import Project8 from './src/Lab1/Project8';
import Calculator from './src/Lab1/Calculator';
import Contacts from './src/Lab2/components/Contacts';
import Routes  from './src/Lab2/components/Routes';
import Store from './src/Lab2/components/Store';
import { Provider } from 'react-redux';
export default function App(){
    return(
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Login">
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Home" component={Home} />
    //     </Stack.Navigator>
    //  </NavigationContainer>
    // <PaperProvider >
    //   <DemoAppbar/>
    // </PaperProvider>
   <Routes/>

    )
   
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }
});
