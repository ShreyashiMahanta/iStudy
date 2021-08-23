import React from 'react';
import HomeStackNavigator from './navigator/navigation';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
    <HomeStackNavigator/>
    </NavigationContainer>
  );
}

