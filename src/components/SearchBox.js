import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionic name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Search ..."
        placeholderTextColor="#909090"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
    color: 'black',
  },
  searchIcon: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25,
    color: 'black',
  },
  input: {
    width: '94%',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
    
    fontWeight:'bold',
  },
});

export default SearchBox;
