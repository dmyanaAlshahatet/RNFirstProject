import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Stories from '../Stories';
import Post from '../Post';

const HomePage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <View style={styles.header}>
        <View style={styles.row}>
          <FontAwesome name="heart-o" style={styles.icon} />
          <TouchableOpacity onPress={toggleDropdown} style={styles.instagramContainer}> 
          <Feather name={dropdownVisible ? 'chevron-up' : 'chevron-down'} style={styles.arrowIcon} />
            <Text style={styles.title}>Instagram</Text>
           
          </TouchableOpacity>
        </View>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Favorites</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ScrollView>
        <Stories />
        <Post />
        <View style={styles.centered}>
          <Ionicons name="reload-circle-sharp" style={[styles.icon, styles.reloadIcon]} />
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
    position: 'relative',
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
  },
  instagramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
  },
  arrowIcon: {
    marginRight:5,
    fontSize: 20,
    color: 'black',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 16,
    // fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
    
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
