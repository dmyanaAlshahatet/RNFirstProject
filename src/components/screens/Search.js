import React, { useState } from 'react';
import { View, StatusBar, ScrollView, TouchableOpacity, Dimensions, Image, Text, StyleSheet } from 'react-native';
import SearchBox from '../SearchBox';
import SearchContent from '../SearchContent';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchUsers from '../SearchUsers'
import UserData from '../UserData';

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        {/* <SearchUsers /> */}
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="pluscircleo" style={styles.plusIcon} />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View style={styles.imageOverlay}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View style={styles.imagePopup}>
            <View style={styles.userContainer}>
              <Image source={image} style={styles.userImage} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>the_anonymous_guy</Text>
              </View>
            </View>
            <Image source={image} style={styles.popupImage} />
            <View style={styles.iconContainer}>
              <Entypo name="heart-outlined" style={styles.popupIcon} />
              <Ionicons name="person-outline" style={styles.popupIcon} />
              <Feather name="navigation" style={styles.popupIcon} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  plusButton: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 40,
    color:'black',
    opacity: 0.5,
  },
  imageOverlay: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.8)',
  },
  imagePopup: {
    position: 'absolute',
    top: '25%',
    left: '5%',
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
    elevation: 50,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  userInfo: {
    paddingLeft: 8,
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  popupImage: {
    width: '100%',
    height: '80%',
  },
  iconContainer: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  popupIcon: {
    fontSize: 26,
    color: 'black',
  },
});

export default Search;
