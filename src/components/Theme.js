import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ThemeContext from './src/context/ThemeContext';

const Theme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        toggleTheme(newTheme);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'dark' ? 'black' : 'white',
        },
        text: {
            color: theme === 'dark' ? 'white' : 'black',
        },
        button: {
            color: theme === 'dark' ? 'black' : 'white',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home page</Text>
            <TouchableOpacity onPress={handleToggleTheme} style={styles.button}>
                <Text style={styles.button}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Theme;

const styles = StyleSheet.create({
    container:{
        flex:1,  
    },
    button: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: theme === 'dark' ? '#fff' : '#000',
    },
})
