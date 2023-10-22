import { StyleSheet, Image, View } from 'react-native'
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
import TasksList from "../src/components/TasksList";
import SwipeBox from "../src/components/SwipeBox";
import SearchUsers from "../src/components/SearchUsers";
import InstagramHome from "../src/components/InstagramHome";
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
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarIconStyle: {
          backgroundColor: '#ffc125',
          height: 80,
          shadowColor: '#000',
          ...styles.shadow
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          marginBottom: 15,
          marginHorizontal: 10,
          position: 'absolute',
          borderRadius: 15,
          borderTopColor: 'white',
          elevation: 10,
          shadowColor: '#000',

        },
      })}
    >

      {/* <Tab.Screen name="Home" component={InstagramHome} options={{ headerShown:false, tabBarBadge: 1, tabBarLabelPosition: 'below-icon', tabBarBadgeStyle: { backgroundColor: 'red' }
        // tabBarIcon: (focused) => (
        //   <Image style={styles.BottomTab} source={
        //     focused
        //       ? { uri: 'https://example.com/jane-doe-avatar.png' }
        //       : { uri: 'https://www.bootdey.com/image/250x250/008B8B/008B8B' }
        //   } />
        // )
      }} /> */}
      <Tab.Screen name="Login" component={ProfileView} options={{ headerShown: false }} />
      {/* <Tab.Screen name={ScreenNames.SwipeBox} component={SwipeBox} options={{ headerShown: false }} /> */}
      <Tab.Screen name="search" component={SearchUsers} options={{ headerShown: false }} />
      {/* <Tab.Screen name='TasksToDo' component={TasksList} options={{ headerShown: false }} /> */}
      <Tab.Screen name={ScreenNames.Instagram} component={InstagramInterface} options={{ headerShown: false}} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  backgroundColor: '#ffc125',
  // height: 90,
  borderRadius: 5,
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
    width: 24,
    height: 24,
    borderRadius: 50
  },
})