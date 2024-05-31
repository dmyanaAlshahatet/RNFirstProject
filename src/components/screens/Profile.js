import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { ProfileBody, ProfileButtons } from '../ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabProfile from '../../../route/BottomTabProfile';
import ImageData from '../ImageData';

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
          accountName="mr_ peobody"
          profileImage={require('../images/Boss_Baby.jpg')}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_ peobody"
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
      <BottomTabProfile />
      <View style={styles.horizontalLine}></View>
      <ScrollView contentContainerStyle={styles.body}>
        {ImageData.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
        ))}
      </ScrollView>
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
    borderColor: '#191970',
  },
  plusIcon: {
    fontSize: 40,
    color: '#191970',
  },
  normalCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#4682b4',
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
    fontFamily: 'Lobster-Regular',
    fontWeight: 'bold',
    color: '#191970',
  },
  scrollView: {
    paddingVertical: 5,
  },
  body: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: '33.333%',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  horizontalLine: {
    backgroundColor: '#191970',
    height: 2,
    alignSelf: 'center',
    width: 60, // تحديد عرض الخط هنا
    marginBottom: 10, // لترك مسافة بين الخط والمحتوى تحت كلمة "Posts"
  },
});

export default Profile;
