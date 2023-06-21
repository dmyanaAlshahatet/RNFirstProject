import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen1 from './Home'

const Deatails = (props) => {

    const goback = ()=> {
        props.navigation.goBack()
    }

    return (
        <View>
            <TouchableOpacity onPress={goback}>
                <Text>Screen1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Deatails

const styles = StyleSheet.create({})