import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const InstagramInterface = (props) => {

  const [images, setImages] = useState([
    'https://i.pinimg.com/280x280_RS/22/14/da/2214da1135c6402df44ad3353ded6f00.jpg',
    'https://cdn.pricespy.co.nz/product/standard/280/4821220.jpg',
    'https://vse-footbolki.ru/image/cache/catalog/vsm/0/1/1344/1344549/previews/people_3_hat_fullprint_front_white_700-280x280.jpg',
    'https://www.dvdlipa.sk/img/p/33077-74650-large.jpg',
    'https://shop.dith-software.de/media/image/product/602747/md/boss-baby-the-br-min-98-dd51-ws-dreamworks-neues-cover_1.png',
    'https://tr.rbxcdn.com/47b74d2195f2570793f763e88963f4a3/500/280/Image/Jpeg',
  ]);

  const [postCount, setPostCount] = useState(6);
  const [followingCount, setFollowingCount] = useState(250);
  const [followerCount, setFollowerCount] = useState(1000);

  const addPost = () => {
    props.navigation.navigate('TasksToDo')
  }

  const goHome = () => {
    props.navigation.goBack()
    // if (navigation.canGoBack())
    // props.navigation.goBack()
    // else
    // navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.postButton}> Add Post</Text> */}
      {/* <View style={styles.postButtonChat}> */}
      <View style={styles.postButtonChat} >
        <View style={styles.goHomeIcon}>
          <TouchableOpacity onPress={goHome}>
            <AntDesign name='arrowleft' size={30} color='black' />
          </TouchableOpacity>
        </View>
        <Text style={styles.acountName}>Instagram</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.postButtonChat}>
          <View style={styles.postButton}>
            <TouchableOpacity onPress={addPost}>
              <MaterialIcons name='post-add' size={37} color='black' />
            </TouchableOpacity>
          </View>
          <View style={styles.chat}>
            <TouchableOpacity>
              <AntDesign name='wechat' size={35} color='black' />
            </TouchableOpacity>
          </View>
          {/* <Image style={styles.chat} source={{ uri: 'https://cdn.statically.io/img/i.pinimg.com/originals/f0/70/3e/f0703e34b09159d23b2a6b3abcbcecb8.jpg' }}/> */}
        </View>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{ uri: 'https://arenamax.com.ua/wp-content/uploads/2021/11/rostovaja-figura-boss-molokosos-the-boss-baby-1500-mm..jpg' }} />
          <Text style={styles.name}>@Boss_Baby</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={styles.statsCount}>{postCount}</Text>
              <Text style={styles.statsLabel}>Posts</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsCount}>{followingCount}</Text>
              <Text style={styles.statsLabel}>Following</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsCount}>{followerCount}</Text>
              <Text style={styles.statsLabel}>Followers</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }} />
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
    boxWithShadow: {
      elevation: 10
    }
  },
  header: {
    // borderWidth:1,
    alignItems: 'center',
    padding: 10,
    // marginTop: 20,
  },
  postButtonChat: {
    flexDirection: 'row',
    marginBottom: 15,
    // borderWidth:1,
    justifyContent: 'space-between',
  },
  headerContent: {
    //  borderWidth:1,
    alignItems: 'center',
  },
  acountName: {
    // borderWidth:1,
    marginLeft: 4,
    marginRight: 10,
    marginTop: 15,
    fontSize: 25,
    fontStyle: 'italic',
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
  goHomeIcon: {
    // borderWidth:1,
    marginTop: 15,
    marginRight: 230
  },
  postButton: {
    // borderWidth:1,
    marginRight: 265,
    // marginLeft:5,
    marginTop: 20,
    fontSize: 22,
    fontStyle: 'italic',
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  chat: {
    // width: 60,
    // height: 35,
    // marginLeft:290,
    // borderWidth:1,
    // borderRadius: 1,
    marginTop: 20,
    margin: 10,

  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: '#3592bd',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    // borderWidth:1,
  },
  statsBox: {
    alignItems: 'center',
    marginHorizontal: 10,
    // borderWidth:1,
  },
  statsCount: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  statsLabel: {
    fontSize: 14,
    color: 'gray',
    // borderWidth:1,

  },
  body: {
    alignItems: 'center',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'white'
  },
  imageContainer: {
    width: '33%',
    padding: 2,
  },
  image: {
    width: '100%',
    height: 120,
    // borderColor:'black',
    // borderWidth:1,
  },
});
export default InstagramInterface;