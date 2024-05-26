import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, Animated, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const [heartPressed, setHeartPressed] = useState(false); // حالة لتتبع ما إذا تم الضغط على القلب أو لا

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  const handleHeartPress = () => {
    setHeartPressed(!heartPressed); // عند الضغط على القلب، غير حالته
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.progressBar}>
        <Animated.View style={[styles.progressBarFill, { width: progressAnimation }]} />
      </View>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={image} style={styles.avatar} />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.headerName}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={styles.image} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Send message"
          placeholderTextColor="white"
          style={styles.input}
        />

        <View style={styles.iconContainer}>
          <TouchableOpacity >
            <Feather name="navigation" style={styles.sendIcon} /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHeartPress}>
            <FontAwesome name={heartPressed ? "heart" : "heart-o"} style={[styles.sendIcon, { color: heartPressed ? 'red' : 'white' }]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  avatarContainer: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },
  headerText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  headerName: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  closeIcon: {
    fontSize: 20,
    color: 'white',
    opacity: 0.6,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 600,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  input: {
    borderColor: 'white',
    borderRadius: 25,
    width: '60%',
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendIcon: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
  },
});

export default Status;
