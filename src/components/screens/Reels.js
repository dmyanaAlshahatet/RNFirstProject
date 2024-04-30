import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reels</Text>
        <Feather name="camera" style={styles.cameraIcon} />
      </View>
      {/* <ReelsComponent /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraIcon: {
    fontSize: 25,
    color: 'white',
  },
});

export default Reels;
