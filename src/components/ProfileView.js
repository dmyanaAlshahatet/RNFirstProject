import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import RNFirstProjectContext from '../../Store/RNFirstProjectContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import shadow from 'react-na/tive-paper/lib/typescript/src/styles/shadow';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileView = (props) => {

  const colorScheme = useColorScheme();

  const profileData = {
    name: 'Boss Baby',
    email: 'boss.baby@example.com',
    bio: 'Developer and Kids Head',
    profile: 'https://example.com/jane-doe-avatar.png',
  }
  const [name, setName] = useState(profileData.name);
  const [email, setEmail] = useState(profileData.email);
  const [bio, setBio] = useState(profileData.bio);
  const [profile, setProfile] = useState(profileData.profile);

  const handleSubmit = () => {
    props.navigation.navigate('Instagram')
  }

  const goHome = () => {
    props.navigation.goBack()
  }

  // const generateBoxShadowStyle = (
  //   xOffset,
  //   yOffset,
  //   shadowColorIos,
  //   shadowOpacity,
  //   shadowRadius,
  //   elevation,
  //   shadowColorAndroid,
  // ) => {
  //   if (Platform.OS === 'ios') {
  //     styles.boxShadow = {
  //       shadowColor: shadowColorIos,
  //       shadowOffset: {width: xOffset, height: yOffset},
  //       shadowOpacity,
  //       shadowRadius,
  //     };
  //   } else if (Platform.OS === 'android') {
  //     styles.boxShadow = {
  //       elevation,
  //       shadowColor: shadowColorAndroid,
  //     };
  //   }
  // };
  /*********************************Test***************************************/

  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
        <Image style={styles.profile}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9bcU8_C37sTTeYcd3bPPvEyeM82PA1WRDg&usqp=CAU' }}
        />
        <TouchableOpacity style={styles.changeProfileButton} onPress={() => {/* open image picker */ }}>
          <Text style={styles.changeProfileButtonText}>Change profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Bio"
          value={bio}
          onChangeText={setBio}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Or}>Or</Text>
      <View style={styles.loginWithFacebook}>
        <AntDesign.Button
          name="facebook-square"
          backgroundColor="#3b5998"
          Icon size={20}
          iconStyle={{ marginRight: 5, borderRadius: 19 }}
          onPress={this.loginWithFacebook}>
          Login with Facebook
        </AntDesign.Button>
      </View>
    </View>
  );
};
// generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717');/*********new change**********/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  form: {
    width: '80%',
    // borderWidth:1,
    elevation: 34,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'blue',
    // shadowOffset:{
    // width:50,
    // height:50,
    // },
    // shadowOpacity:0.25,
    // shadowRadius:3.84,
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 40,
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 20,
    // textAlign:'center',
  },
  loginWithFacebook: {
    // borderWidth:1,
    borderRadius: 18,
  },
  Or: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    // borderWidth:1,
    // marginTop:20,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeProfileButton: {
    marginTop: 10,
    // borderWidth:1,
  },
  changeProfileButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default ProfileView;

