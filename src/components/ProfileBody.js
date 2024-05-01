import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName && (
        <View style={styles.header}>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>{accountName}</Text>
            <Feather name="chevron-down" style={styles.icon} />
          </View>
          <View style={styles.actions}>
            <Feather name="plus-square" style={styles.icon} />
            <Feather name="menu" style={styles.icon} />
          </View>
        </View>
      )}
      <View style={styles.statsContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.stats}>
          <Text style={styles.statText}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statText}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statText}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileButtons = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(follow);

  return (
    <View style={styles.buttonContainer}>
      {id === 0 ? (
        <TouchableOpacity
          onPress={() =>
            navigation.push('EditProfile', {
              name: name,
              accountName: accountName,
              profileImage: profileImage,
            })
          }
          style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.followButtonContainer}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={[
              styles.followButton,
              {backgroundColor: follow ? null : '#3493D9'},
            ]}>
            <Text style={{color: follow ? 'black' : 'white'}}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownButton}>
            <Feather name="chevron-down" style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  profileImage: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  stats: {
    alignItems: 'center',
  },
  statText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 5,
  },
  editButton: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
  },
  followButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  followButton: {
    width: '42%',
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageButton: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dropdownButton: {
    width: '10%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});