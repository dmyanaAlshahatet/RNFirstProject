import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Screen1 from './screens/Screen1';
import ProfileView from './ProfileView';




const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
  screenOptions={{
    headerShown:false,
    tabBarStyle: { position: 'absolute' },
  }}


>
    
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Login" component={ProfileView} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
    shadow:{
        shadowOffset:"#7FSdF0",
        width:0,
        height:10,
    }

})