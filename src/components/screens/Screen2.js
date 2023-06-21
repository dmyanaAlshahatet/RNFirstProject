import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Screen1 from './Screen1'
import RNFirstProjectContext from '../../../Store/RNFirstProjectContext'

const Screen2 = (props) => {
    const { setScreen2_c, scree2_c } = useContext(RNFirstProjectContext)

    const goback = () => {
        setScreen2_c(scree2_c + 1)
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

export default Screen2

const styles = StyleSheet.create({})