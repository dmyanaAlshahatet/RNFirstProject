import React from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../Stories';
import Post from '../Post';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.header}>
        {/* <FontAwesome name="plus-square-o" style={styles.icon} /> */}
        <Text style={styles.title}>Instagram</Text>
        {/* <Feather name="navigation" style={styles.icon} /> */}
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View style={styles.centered}>
          <Ionic
            name="reload-circle-sharp"
            style={[styles.icon, styles.reloadIcon]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    fontWeight: 'bold',
    color:'black'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  reloadIcon: {
    fontSize: 60,
    opacity: 0.2,
    fontWeight: 'bold',

  },
});

export default HomePage;
