import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ProfileBody, ProfileButtons } from '../ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabProfile from '../BottomTabProfile';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index} style={styles.circleContainer}>
        {index === 0 ? (
          <View style={styles.plusCircle}>
            <Entypo name="plus" style={styles.plusIcon} />
          </View>
        ) : (
          <View style={styles.normalCircle}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <ProfileBody
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../images/baby-boss.png')}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../images/Boss_Baby.jpg')}
        />
      </View>
      <View style={styles.storyHighlights}>
        <Text style={styles.highlightsText}>Story Highlights</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {circles}
        </ScrollView>
      </View>
      {/* <BottomTabProfile /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileInfo: {
    padding: 10,
    // borderWidth: 2,
    // borderColor: '#3592bd',
  },
  circleContainer: {
    marginHorizontal: 5,
  },
  plusCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 40,
    color: 'black',
  },
  normalCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
  },
  storyHighlights: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  highlightsText: {
    padding: 10,
    letterSpacing: 1,
    fontSize: 14,
  },
  scrollView: {
    paddingVertical: 5,
  },
});

export default Profile;
