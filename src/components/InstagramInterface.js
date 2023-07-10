import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

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


  return (
    <View style={styles.container}>
    
    {/* <Text style={styles.postButton}> Add Post</Text> */}
    <Text style={styles.acountName}>Instagram</Text>
      <View style={styles.header}>
       <TouchableOpacity onPress={addPost}>
          <Text style={styles.postButton}>+ post</Text>
       </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{ uri: 'https://arenamax.com.ua/wp-content/uploads/2021/11/rostovaja-figura-boss-molokosos-the-boss-baby-1500-mm..jpg' }}/>
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
            <Image style={styles.image} source={{ uri: image }}/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    
  },
  header: {
    // borderWidth:1,
    alignItems: 'center',
    padding: 30,
    marginTop:20,
  },
//   button:{
//     backgroundColor: '#3592bd',
//     borderRadius: 15,
//     // paddingVertical: 3,
//     // paddingHorizontal: 3,
//     // marginLeft:5,
//   },
  headerContent: {
//    borderWidth:1,
   alignItems: 'center',
  },
  acountName:{
    // borderWidth:1,
    marginLeft:250,
    marginTop:10,
    fontSize:25,
    fontStyle:'italic',
    fontFamily:'serif',
    fontWeight: 'bold',
    color:'black',
  },
  postButton:{
    // borderWidth:1,
    marginRight:255,
    // marginLeft:20,
    // marginTop:20,
    fontSize:22,
    fontStyle:'italic',
    fontFamily:'serif',
    fontWeight: 'bold',
    color:'black',


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
export default InstagramInterface ;