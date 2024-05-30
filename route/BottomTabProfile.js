import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomTabProfile = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabItem}>
        <FontAwesome name="video-camera" size={20} color="black" />
        <Text style={styles.tabText}>Videos</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.tabItem}>
        <FontAwesome name="file-text-o" size={20} color="black" />
        <Text style={styles.tabText}>Posts</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.tabItem}>
        <FontAwesome name="tags" size={20} color="black" />
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
    borderTopColor: 'lightgray',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    backgroundColor: 'lightgray',
  },
});

export default BottomTabProfile;
