import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RNFirstProjectContext from '../../../Store/RNFirstProjectContext'


const Screen1 = (props) => {
    const { scree1_c, setScreen1_c, scree2_c } = useContext(RNFirstProjectContext)

    const navigateToScreen2 = () => {
        setScreen1_c(scree1_c + 1)
        props.navigation.navigate('screen2')
    }

    const navigateToScreen3 = () => {
        setScreen1_c(scree1_c + 1)
        props.navigation.navigate('screen3')
    }

    const navigateToLogin = () => {
        props.navigation.navigate('Login')
    }

    const navigateToInstagram = () => {
        props.navigation.navigate('TasksToDo')
    }


    

    console.log("scree1_c: ", scree1_c);

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btn} onPress={navigateToScreen2} >
                <Text style ={styles.titleScreen}> navigate to Screen2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToScreen3} >
                <Text style ={styles.titleScreen}> navigate to Screen3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToLogin} >
                <Text style ={styles.titleScreen} > navigate to Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToInstagram}>
                <Text style ={styles.titleScreen}>TasksToDo</Text>
            </TouchableOpacity>

            
        </View>
    )
}


export default Screen1


const styles = StyleSheet.create({
    btn: {
        width: '50%',
        height: 50,

        // backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleScreen: {
        fontSize: 20,
        color: '#3592bd',
        fontStyle:'italic',
        fontWeight: 'bold',

    },
})