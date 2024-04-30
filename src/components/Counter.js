import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1); };
    const decrement = () => { if (count > 0) setCount(count - 1); };
    const reset = () => { setCount(0); };

    return (
        <View style={styles.card}>
            <Text style={styles.text}>{count}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={reset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        color: 'black',
        fontSize: 40,
        alignSelf: 'center',
    },
});

export default Counter;
