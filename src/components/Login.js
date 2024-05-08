import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, useColorScheme, Button } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = (props) => {
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
  const [isSensorAvailable, setIsSensorAvailable] = useState(false);

  const handleSubmit = () => {
    props.navigation.navigate('Instagram')
  }

  const goHome = () => {
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={goHome} >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image style={styles.profile} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9bcU8_C37sTTeYcd3bPPvEyeM82PA1WRDg&usqp=CAU' }} />
        <TouchableOpacity style={styles.changeProfileButton} onPress={() => { }}>
          <Text style={styles.changeProfileButtonText}>Change profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter Name" value={name} onChangeText={setName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Bio</Text>
        <TextInput style={styles.input} placeholder="Enter Bio" value={bio} onChangeText={setBio} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {isSensorAvailable ? (
          <Button title="Scan Fingerprint" onPress={scanFingerprint} />
        ) : (
          <Text>Fingerprint sensor not available</Text>
        )}
      </View>
      <View style={styles.OrContainer}>
        <View style={styles.OrLine} />
        <Text style={styles.OrText}>Or</Text>
        <View style={styles.OrLine} />
      </View>
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
      {/* Bio Icon */}
      <View style={styles.bioIconContainer}>
        {/* <Ionic name="finger-print-outline" size={30} color="#2f4f4f" /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  form: {
    width: '80%',
    elevation: 34,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'blue',
  },
  label: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'black',
    fontFamily: 'serif',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
  },
  button: {
    marginTop: 40,
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  OrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  OrLine: {
    flex: 1,
    height: 0.5,
    width:1,
    backgroundColor: 'gray',
    marginHorizontal: 25,

  },
  OrText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'serif',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  profileContainer: {
    // marginTop: 20,
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeProfileButton: {
    marginTop: 10,
  },
  changeProfileButtonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  loginWithFacebook: {
    borderRadius: 18,
  },
  bioIconContainer: {
    marginTop: 20,
  },
  arrow: {
    position: 'absolute',
    marginRight: 350,
    top: 30, 
    left: 20,
  },
});

export default Login;
