import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
// import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = (props) => {
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      // <GestureHandlerRootView style={{ flex: 1 }}>
        <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
          <View style={styles.deleteBox}>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              Delete
            </Animated.Text>
          </View>
        </TouchableOpacity>
      // </GestureHandlerRootView>
    );
  };

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View style={styles.container}>
        {/* Your item content goes here */}
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
  },
});

export default ItemBox;
