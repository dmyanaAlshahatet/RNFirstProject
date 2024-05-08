import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import postInfo from './postInfo';

const Post = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <View>
            {postInfo.map((data, index) => {
                const [like, setLike] = useState(data.isLiked);
                return (
                    <View
                        key={index}
                        style={styles.postContainer}>
                        <View style={styles.postHeader}>
                            <View style={styles.postHeaderLeft}>
                                <Image
                                    source={data.postPersonImage}
                                    style={styles.personImage}
                                />
                                <View style={styles.postTitleContainer}>
                                    <Text style={styles.postTitle}>
                                        {data.postTitle}
                                    </Text>
                                </View>
                            </View>
                            <Feather name="more-vertical" style={styles.moreIcon} />
                        </View>
                        <View style={styles.postImageContainer}>
                            <Image
                                source={data.postImage}
                                style={styles.postImage}
                            />
                        </View>
                        <View style={styles.actionsContainer}>
                            <View style={styles.actionIconsContainer}>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign
                                        name={like ? 'heart' : 'hearto'}
                                        style={[styles.actionIcon, { color: like ? 'red' : 'black' }]}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic
                                        name="chatbubble-outline"
                                        style={styles.actionIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name="navigation" style={styles.actionIcon} />
                                </TouchableOpacity>
                            </View>
                            <Feather name="bookmark" style={styles.bookmarkIcon} />
                        </View>
                        <View style={styles.likesAndCommentsContainer}>
                            <Text style={styles.likesText}>
                                Liked by {like ? 'you and' : ''}{' '}
                                {like ? data.likes + 1 : data.likes} others
                            </Text>
                            <Text style={styles.commentsText}>
                                If enjoy the video ! Please like and Subscribe :)
                            </Text>
                            <Text style={styles.viewAllCommentsText}>
                                View all comments
                            </Text>
                            <View style={styles.commentInputContainer}>
                                <Image
                                    source={data.postPersonImage}
                                    style={styles.commentPersonImage}
                                />
                                <TextInput
                                    placeholder="Add a comment "
                                    style={styles.commentInput}
                                />

                                <Entypo
                                    name="emoji-happy"
                                    style={{ fontSize: 15, color: 'lightgreen', marginRight: 10 }}
                                />
                                <Entypo
                                    name="emoji-neutral"
                                    style={{ fontSize: 15, color: 'pink', marginRight: 10 }}
                                />
                                <Entypo
                                    name="emoji-sad"
                                    style={{ fontSize: 15, color: 'red' }}
                                />

                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.1,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    postHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    personImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    postTitleContainer: {
        paddingLeft: 5,
    },
    postTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    moreIcon: {
        fontSize: 20,
        color: 'black',
    },
    postImageContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postImage: {
        width: '100%',
        height: 400,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 15,
    },
    actionIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        paddingRight: 10,
        fontSize: 20,
        color: 'black',
    },
    bookmarkIcon: {
        fontSize: 20,
        color: 'black',
    },
    likesAndCommentsContainer: {
        paddingHorizontal: 15,
    },
    likesText: {
        fontWeight: '700',
        fontSize: 14,
        color: 'black',
        paddingVertical: 2,
    },
    commentsText: {
        opacity: 0.4,
        color: 'black',
        paddingVertical: 2,
    },
    viewAllCommentsText: {
        paddingVertical: 2,
    },
    commentInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    commentPersonImage: {
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: 'orange',
        marginRight: 10,
    },
    commentInput: {
        opacity: 0.5,
        flex: 1,
    },
    emojiIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    // emojiIcon: {
    //     fontSize: 15,
    //     color: 'black',
    //     marginRight: 10,
    // }, // i wanted different colors of the emojis
});

export default Post;
