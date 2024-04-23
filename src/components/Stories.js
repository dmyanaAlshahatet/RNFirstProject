import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import storyData from './storyData';

const Stories = () => {
    const navigation = useNavigation();

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}>
            {storyData.map((data, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.push('Status', {
                                name: data.name,
                                image: data.image,
                            })
                        }>
                        <View style={styles.storyItem}>
                            {data.id == 1 ? (
                                <View style={styles.plusIconContainer}>
                                    <Entypo
                                        name="circle-with-plus"
                                        style={styles.plusIcon}
                                    />
                                </View>
                            ) : null}
                            <View style={styles.imageContainer}>
                                <Image
                                    source={data.image}
                                    style={styles.image}
                                />
                            </View>
                            <Text style={[styles.name, {opacity: data.id == 0 ? 1 : 0.5}]}>
                                {data.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    storyItem: {
        flexDirection: 'column',
        paddingHorizontal: 8,
        position: 'relative',
    },
    plusIconContainer: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        zIndex: 1,
    },
    plusIcon: {
        fontSize: 20,
        color: '#405de6',
        backgroundColor: 'white',
        borderRadius: 100,
    },
    imageContainer: {
        width: 68,
        height: 68,
        backgroundColor: 'white',
        borderWidth: 1.8,
        borderRadius: 100,
        borderColor: '#c13584',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: '92%',
        height: '92%',
        borderRadius: 100,
        backgroundColor: 'orange',
    },
    name: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight:'bold',
        color:'black',
    },
});

export default Stories;
