import { StyleSheet, Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Login from '../src/components/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InstagramInterface from '../src/components/InstagramInterface';
import ScreenNames from './screenNames';
import { shadow } from 'react-native-paper';
import SearchBar from '../src/components/SearchBar1';
import TasksList from "../src/components/TasksList";
import SwipeBox from "../src/components/SwipeBox";
import SearchUsers from "../src/components/SearchUsers";
import InstagramHome from "../src/components/Example";
import ShoppingCart from '../src/components/ShoppingCart';
import ThemedComponent from '../src/context/ThemeContext';
import Status from '../src/components/Status';
import SearchContent from '../src/components/SearchContent';
import Search from '../src/components/screens/Search';
import SearchBox from '../src/components/SearchBox';
import Home from '../src/components/screens/Home';
import HomePage from '../src/components/screens/HomePage';
import Reels from '../src/components/screens/Reels';
import Counter from '../src/components/Counter';
import Profile from '../src/components/screens/Profile';
// import Fingerprint from '../src/components/Fingerprint';

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
            size = focused ? size + 6 : size + 5;
          } else if (route.name === 'Login') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            size = focused ? size + 6 : size + 5;
          } else if (route.name === 'Instagram') {
            iconName = focused ? 'logo-instagram' : 'apps-outline';
            size = focused ? size + 6 : size + 5;
          } else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search-outline';
            size = focused ? size + 6 : size + 5;
          } else if (route.name === 'reels') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
            size = focused ? size + 6 : size + 5;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarIconStyle: {
          // borderRadius: 50,
          backgroundColor: '#ffc125',
          height: 80,
          shadowColor: '#000',
          // ...styles.shadow
        },
        tabBarActiveTintColor: '#000',
        tabBarActiveBackgroundColor:'#f0f8ff',
        tabBarInactiveTintColor: '#000',
        tabBarShowLabel: false,
        borderRadius: 50,
        tabBarStyle: {
          // backgroundColor: 'white',
          marginBottom: 15,
          marginHorizontal: 10,
          position: 'absolute',
          borderRadius: 15,
          overflow: 'hidden', 
          borderTopColor: 'white',
          elevation: 10,
          shadowColor: '#000',

        },
      })}
    >

      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false}}/>
      <Tab.Screen name="search" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="reels" component={Reels} options={{ headerShown: false }} />
      <Tab.Screen name={ScreenNames.Instagram} component={Profile} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <Image style={styles.BottomTab}
            source={focused ? require('../src/components/images/angryBoss.jpg') : require('../src/components/images/Boss_Baby.jpg')}
          />
        ),
      }} />
    </Tab.Navigator >
  )
}

export default BottomTab

const styles = StyleSheet.create({
  backgroundColor: '#ffc125',
  _borderRadius: 5,
  get borderRadius() {
    return this._borderRadius;
  },
  set borderRadius(value) {
    this._borderRadius = value;
  },
  borderWidth: 1,
  shadowColor: 'blue',
  elevation: 10,
  shadowOpacity: 0.25,
  shadowRadius: 3.5,

  // shadow: {
  //   shadowOffset: "#7FSdF0",
  //   width: 0,
  //   height: 10,
  // },

  BottomTab: {
    width: 30,
    height: 30,
    // borderRadius: 50,
    // borderWidth: 1,
    borderRadius: 15,
  },
})