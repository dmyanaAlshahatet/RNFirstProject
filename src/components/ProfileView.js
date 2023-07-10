import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import RNFirstProjectContext from '../../Store/RNFirstProjectContext';

const ProfileView = (props) => {
    
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

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profile}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9bcU8_C37sTTeYcd3bPPvEyeM82PA1WRDg&usqp=CAU'}}
        />
        <TouchableOpacity style={styles.changeProfileButton} onPress={() => {/* open image picker */}}>
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },

  form: {
    width: '80%',
    shadowColor:'blue',
    // borderWidth:1,
    shadowOffset:{
        width:30,
        height:30,
    },
    shadowOpacity:20,
    shadowRadius:50,
    elevation:100,
    marginBottom:90,
    padding:20,
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
    marginTop: 30,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
   // textAlign:'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign:'center',
    
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

