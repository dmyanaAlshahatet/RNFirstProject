import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,colors} from 'react-native'
import RNFirstProjectContext from '../../../Store/RNFirstProjectContext'
import ScreenNames from '../../../route/screenNames'
import { getAllUsers } from '../../res/api/api'
import { useTheme } from '@react-navigation/native';//new


const Screen1 = (props) => {

    const [users, setUsers] = useState([]);
    const getAllUsersFromApi = () => {
        getAllUsers().then(res => {
            console.log("all users: ", res);
            setUsers(res);
        });
    };

    useEffect(() => {
        getAllUsersFromApi();
    }, []);


    const { Home_c, setHome1_c, scree2_c } = useContext(RNFirstProjectContext)

    // const navigateToScreen2 = () => {
    //     setHome1_c(Home_c + 1)
    //     props.navigation.navigate(ScreenNames.screen2)
    // }

    const navigateToScreen3 = () => {
        setHome1_c(Home_c + 1)
        props.navigation.navigate(ScreenNames.screen3)
    }

    const navigateToLogin = () => {
        props.navigation.navigate(ScreenNames.Login)
    }

    const navigateToInstagram = () => {
        props.navigation.navigate(ScreenNames.Instagram)
    }
    const navigateToAppointments = () => {
        props.navigation.navigate(ScreenNames.SearchUsers)
    }

    const navigateToInstagramHome = () => {
        props.navigation.navigate(ScreenNames.InstagramHome)
    }
    const TasksToDo = () => {
        props.navigation.navigate(ScreenNames.TasksToDo)
    }


    console.log("screeHome_c: ", Home_c);

    const MyButton = () => {
        const { colors } = useTheme();
    }

    return (
        <View >
            <View style={styles.container}>
                {/* <TouchableOpacity style={{ backgroundColor: colors.card }}>
                    <Text style={{ color: colors.text }}>Button!</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.btn} onPress={navigateToScreen3} >
                    <Text style={styles.btnTitle}> navigate to Screen3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={navigateToLogin} >
                    <Text style={styles.btnTitle} > navigate to Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={TasksToDo}>
                    <Text style={styles.btnTitle}>TasksToDo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={navigateToInstagramHome}>
                    <Text style={styles.btnTitle}>Home</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.screenTitle}>Home Page</Text>
        </View>
    )
}


export default Screen1


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 230,
        // borderWidth:1,
    },
    screenTitle: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom:150,
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
        // marginBottom:50,
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
})




// function MyButton() {
//     const { colors } = useTheme();

//     return (
//         <TouchableOpacity style={{ backgroundColor: colors.card }}>
//             <Text style={{ color: colors.text }}>Button!</Text>
//         </TouchableOpacity>
//     );
// }

