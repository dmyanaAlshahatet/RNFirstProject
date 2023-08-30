import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../src/components/screens/Home';
import ProfileView from '../src/components/ProfileView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InstagramInterface from '../src/components/InstagramInterface';
import ScreenNames from './screenNames';
import { shadow } from 'react-native-paper';
import SearchBar from '../src/components/SearchBar1';
import Card from '../src/components/Card';
// import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';


const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? size + 7 : size + 5;
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
            size = focused ? size + 7 : size + 5;
          } else if (route.name === 'Instagram') {
            iconName = focused ? 'logo-instagram' : 'apps-outline';
            size = focused ? size + 7 : size + 5;
          } else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search-outline';
            size = focused ? size + 7 : size + 5;
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarIconStyle: {
          backgroundColor: '#ffc125',
          height: 80,
          borderRadius: 50,
          shadowColor: '#000',
          elevation: 10,
          // borderWidth :1,
          // ...styles.shadow
        },
        borderRadius: 10,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        styles: {

        }
      })}
    >
      <Tab.Screen name="Home" component={Home} styles={{fontWeight: 'serif',fontSize: 30,}}/>
      <Tab.Screen name="Login" component={ProfileView} options={{ headerShown: false }} />
      {/* <Tab.Screen name="card" component={Card} options={{headerShown:false}} /> */}
      <Tab.Screen name="search" component={SearchBar} options={{ headerShown: false }} />
      {/* <Tab.Screen name='TasksToDo' component={TasksList} options={{headerShown:false}}  /> */}
      <Tab.Screen name={ScreenNames.Instagram} component={InstagramInterface} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  backgroundColor: '#ffc125',
  height: 90,
  borderRadius: 5,
  borderWidth: 1,
  shadowColor: '#000',
  elevation: 10,
  // shadow:{
  // shadowOffset:"#7FSdF0",
  // width:0,
  // height:10,
  // },
  // shadowOpacity: 0.25,
  // shadowRadius :3.5,
})