import { StyleSheet, Text, View, Button, } from 'react-native'
import React, { useEffect, useState } from 'react'


const Counter = () => {

    const [x, setX] = useState(0)

    //<Button title="+" onPress={() => setX(x + 1)}/> // if i want without a function.

    const Increment = () => { setX(x + 1); }
    const reset = () => { setX(0); }
    const Discrement = () => {
        if (x > 0) {
            setX(x - 1)
        }
    }

    return (
        <View style={[styles.card]}>
            <Text style={styles.text}>{x}</Text>
            <View style={styles.buttons}>
                <View style={styles.IncrementCard}>
                    <Button title="+" onPress={Increment} />
                </View>
                <View style={styles.DiscrementCard}>
                    <Button title="-" onPress={Discrement} />
                </View>
                <Button title="reset" onPress={reset} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        width: '80%',
        padding: 30,
        borderRadius: 7,
        marginTop: 20,
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        // borderWidth:1 ,   
        justifyContent: 'space-between',
    },
    IncrementCard: {
        marginLeft: 140,
        // borderWidth:3,

    },
    DiscrementCard: {
        // marginLeft:1,
        // borderWidth:3,

    },
    text: {
        color: 'black',
        fontSize: 40,
        // borderWidth:1 , 
        // alignSelf:'center'
    },
})


export default Counter;