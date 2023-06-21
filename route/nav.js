import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";
import Screen1 from "../src/components/screens/Screen1";
import Screen2 from "../src/components/screens/Screen2";
import Screen3 from "../src/components/screens/Screen3";


const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Screen1}/>
                <Stack.Screen name='screen2' component={Screen2}  />
                <Stack.Screen name='screen3' component={Screen3}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;