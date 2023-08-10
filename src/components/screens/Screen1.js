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
        <View >
            <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={navigateToScreen2} >
                <Text style ={styles.btnTitle}> navigate to Screen2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToScreen3} >
                <Text style ={styles.btnTitle}> navigate to Screen3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToLogin} >
                <Text style ={styles.btnTitle} > navigate to Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToInstagram}>
                <Text style ={styles.btnTitle}>TasksToDo</Text>
            </TouchableOpacity> 
            </View>
            <Text style={styles.screenTitle}>Home Page</Text>
        </View>
        
    )
}


export default Screen1


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:250,
        // borderWidth:1,

    },

    screenTitle:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom:150,
    marginTop:450,
    fontSize:15,
    fontStyle:'italic',
    fontFamily:'serif',
    fontWeight: 'bold',
    color:'black',
    },

    btn: {
        width: '50%',
        height: 50,
        borderWidth:2,
        marginTop:10,
        // marginBottom:50,
        borderColor: '#3592bd',
        borderRadius:14,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnTitle: {
        fontSize: 17,
        color: '#4d5b74',
        fontStyle:'italic',
        fontWeight: 'bold',

    },
})