import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquare = 7;

  for (let index = 0; index < numberOfSquare; index++) {
    squares.push(
      <View key={index} style={styles.squareContainer}>
        <View style={styles.square}></View>
      </View>,
    );
  }

  const Posts = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.tabContent}>
        <View style={styles.tabContentContainer}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Video = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.tabContent}>
        <View style={styles.tabContentContainer}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Tags = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.tabContent}>
        <View style={styles.tabContentContainer}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            height: 1.5,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Posts') {
              iconName = focused ? 'apps-sharp' : 'apps-sharp';
              color = focused ? 'black' : 'gray';
            } else if (route.name === 'Video') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              color = focused ? 'black' : 'gray';
            } else if (route.name === 'Tags') {
              iconName = focused ? 'person' : 'person-outline';
              color = focused ? 'black' : 'gray';
            }

            return <Ionic name={iconName} color={color} size={22} />;
          },
        })}>
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Video" component={Video} />
        <Tab.Screen name="Tags" component={Tags} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  squareContainer: {
    marginVertical: 0.5,
  },
  square: {
    width: 130,
    height: 150,
    backgroundColor: 'black',
    opacity: 0.1,
  },
  tabContent: {
    width: '100%',
    height: '100%',
  },
  tabContentContainer: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
});

export default BottomTabView;
