import { StyleSheet, Text, View, Image, ActivityIndicator, animating } from 'react-native'
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
    }, 1.5 * 1000)
  }, []);


  return (
    <View style={styles.container} >
      <Image style={styles.imageSplash} source={{ uri: 'https://i1.wp.com/somostechbros.com/wp-content/uploads/2021/03/Instagram-Live-Room-TechBros-1.jpg?fit=1920%2C1080' }} />
      <ActivityIndicator
        animating={animating}
        color='#483d8b'
        size="large"
        style={styles.activityIndicator}
      />
      <Text style={styles.wellcomeSentence}>Wellcome To The App!</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    // marginBottom:10,
    height: 80,
    // borderWidth:1,
  },
  imageSplash: {
    resizeMode: 'contain',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    width: "50%",
    height: "50%",
  },
  wellcomeSentence:{
    justifyContent: 'center',
    fontSize:20,
    fontFamily:'serif',
    fontWeight: 'bold',
    color:'black',
    marginTop:40,
   // fontStyle:'italic',
  },
})