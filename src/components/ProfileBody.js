import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export const ProfileBody = ({props,
    name,
    accountName,
    profileImage,
    post,
    followers,
    following,
}) => {

    const addPost = () => {
        navigation.navigate('TasksList');
      };

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <View>
            {accountName && (
                <View style={styles.header}>
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountName}>{accountName}</Text>
                        <Feather name="chevron-down" style={styles.icon} />
                    </View>
                    <View style={styles.actions}>
                        <Feather name="plus-square"  onPress={addPost} style={styles.icon} />
                        <TouchableOpacity onPress={openDrawer} style={styles.actions}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                    </View>
                </View>
            )}
            <View style={styles.statsContainer}>
                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.stats}>
                    <Text style={styles.statText}>{post}</Text>
                    <Text>Posts</Text>
                </View>
                <View style={styles.stats}>
                    <Text style={styles.statText}>{followers}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={styles.stats}>
                    <Text style={styles.statText}>{following}</Text>
                    <Text>Following</Text>
                </View>
            </View>
        </View>
    );
};

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
    const navigation = useNavigation();
    const [follow, setFollow] = useState(follow);

    return (
        <View style={styles.buttonContainer}>
            {id === 0 ? (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Login'
                            // name: name,
                            // Email: Email,
                            // Bio: Bio,
                        )
                    }
                    style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.followButtonContainer}>
                    <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={[
                            styles.followButton,
                            { backgroundColor: follow ? null : '#3493D9' },
                        ]}>
                        <Text style={{ color: follow ? 'black' : 'white' }}>
                            {follow ? 'Following' : 'Follow'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.messageButton}>
                        <Text>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownButton}>
                        <Feather name="chevron-down" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    accountName: {
        fontSize: 20,
        fontStyle: 'italic',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'black',
    },
    accountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 20,
        color: '#000',
        paddingHorizontal: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    profileImage: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c13584',
        resizeMode: 'cover',
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    stats: {
        alignItems: 'center',
    },
    statText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 5,
    },
    editButton: {
        width: '100%',
        height: 35,
        borderRadius: 15,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButtonText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        letterSpacing: 1,
        opacity: 0.8,
    },
    followButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    followButton: {
        width: '42%',
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageButton: {
        width: '42%',
        height: 35,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    dropdownButton: {
        width: '10%',
        height: 35,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});
