import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const BottomTabProfile = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../src/components/images/reel.png')} style={styles.tabImage} />
        <Text style={styles.tabText}>Videos</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../src/components/images/posts.png')} style={styles.tabImage} />
        <Text style={styles.tabText}>Posts</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../src/components/images/tags.png')} style={styles.tabImage} />
        <Text style={styles.tabText}>Tags</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.2,
    borderBottomColor: '#4682b4',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color:'#4682b4'
  },
  separator: {
    width: 0,
    backgroundColor: '#4682b4',
  },
});

export default BottomTabProfile;
