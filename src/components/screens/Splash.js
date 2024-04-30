import { StyleSheet, Text, View, Image, ActivityIndicator, animating, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import ScreenNames from '../../../route/screenNames'



const SplashScreen = (props) => {

  const [animating, setAnimating] = useState(true);

  const Fun = () => {
    props.navigation.replace(ScreenNames.BottomTab)
  }

  React.useEffect(() => {
    setTimeout(() => {
      Fun()
    }, 1.5 * 1300)
  }, []);


  return (
    <View style={styles.container}>
    <ImageBackground source={require('../images/logo.jpg')} 
    style={styles.imageSplash}
    imageStyle ={styles.imageStyle}>
      {/* <Image style={styles.imageSplash} source={{ uri: 'https://i1.wp.com/somostechbros.com/wp-content/uploads/2021/03/Instagram-Live-Room-TechBros-1.jpg?fit=1920%2C1080' }} /> */}
      {/* <ActivityIndicator
        animating={animating}
        color='#483d8b'
        size="large"
        style={styles.activityIndicator}
      /> */}
      <Text style={styles.wellcomeSentence}>Wellcome To Your Community!</Text>
      <View style={styles.line} >
        <Image source={require('../images/instagram.png')} style={styles.icon} />
      </View>
    </ImageBackground>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    
  },
  // activityIndicator: {
  //   alignItems: 'center',
  //   marginTop:500,
  //   // height: ,
  //   // borderWidth:1,
  // },
  imageSplash: {
    resizeMode: 'contain',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "50%",
    
  },
  wellcomeSentence: {
    fontSize: 16,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#fff0f5',
    marginTop: 80,
    fontStyle: 'italic',
  },
  line: {
    marginTop: 70,
     height: 0.6,
     width:'35%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft:60,
  },
  imageStyle:{
    borderRadius: 20,
    overflow:'hidden',
  },

})