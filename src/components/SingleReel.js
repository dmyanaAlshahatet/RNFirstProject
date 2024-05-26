import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={styles.videoContainer}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.video}
          muted={mute}
          style={styles.video}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={[
          styles.muteIcon,
          { fontSize: mute ? 20 : 0 },
        ]}
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={item.postProfile}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.audioContainer}>
          <Ionic name="ios-musical-note" style={styles.audioIcon} />
          <Text style={styles.audioText}>Original Audio</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => setLike(!like)} style={styles.action}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={[styles.likeIcon, { color: like ? 'red' : 'white' }]}
          />
          <Text style={styles.likeCount}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Ionic
            name="ios-chatbubble-outline"
            style={styles.commentIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Ionic
            name="paper-plane-outline"
            style={styles.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Feather
            name="more-vertical"
            style={styles.moreIcon}
          />
        </TouchableOpacity>
        <View style={styles.profileSmallContainer}>
          <Image
            source={item.postProfile}
            style={styles.profileSmallImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  muteIcon: {
    color: 'white',
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.6)',
    borderRadius: 100,
    padding: 20,
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    bottom: 0,
    padding: 10,
  },
  profileContainer: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: 'white',
    margin: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10,
  },
  audioContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  audioIcon: {
    color: 'white',
    fontSize: 16,
  },
  audioText: {
    color: 'white',
  },
  actionsContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    flexDirection: 'row',
  },
  action: {
    padding: 10,
  },
  likeIcon: {
    fontSize: 25,
  },
  likeCount: {
    color: 'white',
  },
  commentIcon: {
    color: 'white',
    fontSize: 25,
  },
  shareIcon: {
    color: 'white',
    fontSize: 25,
  },
  moreIcon: {
    color: 'white',
    fontSize: 25,
  },
  profileSmallContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
  },
  profileSmallImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default SingleReel;
