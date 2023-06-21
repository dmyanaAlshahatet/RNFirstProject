import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";
import Home from "../src/components/screens/Home";
import Deatails from "../src/components/screens/Deatails";

const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='screen2' component={Deatails}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;