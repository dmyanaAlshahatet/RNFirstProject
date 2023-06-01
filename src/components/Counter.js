import { StyleSheet, Text, View, Button, } from 'react-native'
import React, { useEffect, useState } from 'react'


const Counter = () => {
    const [x, setX] = useState(0)

    // const Increment = () => setX((x) => x + 1);
    // const Discrement = () => setX((x) => x - 1);
    // Increment = () =>{} 
    
    return (
        <View style={[styles.card ]}>
            <Text style={styles.text}>{x}</Text>
             <View style={styles.buttons}>
                <View style={styles.IncrementCard}>  
                <Button title="+" onPress={() => setX(x + 1)}/> 
                </View>
                <Button title="reset" onPress={() => setX(0)}/> 
             </View>
        </View>
    )
}



const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        width: '80%',
        padding: 30,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        // borderWidth:1 ,   
        justifyContent:'space-between',      
    },

    IncrementCard: {
        marginLeft:150,
        // borderWidth:3,
    },
    
    text: {
        color: 'black',
        fontSize: 40,
        //   borderWidth:1 , 
        // alignSelf:'center'
    },
})


export default Counter;