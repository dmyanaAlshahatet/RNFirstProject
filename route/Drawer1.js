import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../src/components/screens/HomePage';
import Profile from '../src/components/screens/Profile' ;

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="HomePage" component={HomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
