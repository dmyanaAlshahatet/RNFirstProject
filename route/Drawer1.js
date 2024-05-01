import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../src/components/screens/Profile'; 
import HomePage from '../src/components/screens/HomePage';

const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="HomePage" component={HomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

export default Drawer
