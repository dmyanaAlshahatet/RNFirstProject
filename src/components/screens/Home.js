import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNFirstProjectContext from '../../../Store/RNFirstProjectContext';
import ScreenNames from '../../../route/screenNames';
import { getAllUsers } from '../../res/api/api';
import { useTheme } from '@react-navigation/native';

const Screen1 = (props) => {
    const [users, setUsers] = useState([]);
    const { Home_c, setHome1_c, scree2_c } = useContext(RNFirstProjectContext);

    useEffect(() => {
        getAllUsersFromApi();
    }, []);

    const getAllUsersFromApi = () => {
        getAllUsers().then(res => {
            console.log("all users: ", res);
            setUsers(res);
        });
    };

    const navigateToScreen = (screenName) => () => {
        setHome1_c(Home_c + 1);
        props.navigation.navigate(screenName);
    };

    const renderButton = (title, onPress) => (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <View style={styles.container}>
                {renderButton('navigate to Screen3', navigateToScreen(ScreenNames.screen3))}
                {renderButton('navigate to Login', navigateToScreen(ScreenNames.Login))}
                {renderButton('TasksToDo', navigateToScreen(ScreenNames.TasksToDo))}
                {renderButton('Home', navigateToScreen(ScreenNames.InstagramHome))}
            </View>
            <Text style={styles.screenTitle}>Home Page</Text>
        </View>
    );
};

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 230,
    },
    screenTitle: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 450,
        fontSize: 15,
        fontStyle: 'italic',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'black',
    },
    btn: {
        width: '50%',
        height: 50,
        borderWidth: 2,
        marginTop: 10,
        borderColor: '#3592bd',
        borderRadius: 14,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        fontSize: 17,
        color: '#4d5b74',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});
