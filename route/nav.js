import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";
import Screen1 from "../src/components/screens/Screen1";
import Screen2 from "../src/components/screens/Screen2";
import Screen3 from "../src/components/screens/Screen3";
import ProfileView from "../src/components/ProfileView";
import TasksList from "../src/components/TasksList";
import InstagramInterface from "../src/components/InstagramInterface";
import BottomTab from "../src/components/BottomTab";
import ScreenNames from "./screenNames";


const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Edit">
                 {/* <Stack.Screen name='Home' component={Screen1}/>
                <Stack.Screen name='screen2' component={Screen2}  />
                <Stack.Screen name='screen3' component={Screen3}  />
                <Stack.Screen name='Login' component={ProfileView}  /> */}
                <Stack.Screen name='TasksToDo' component={TasksList}  />
                <Stack.Screen name={ScreenNames.Instagram} component={InstagramInterface}  /> 
                <Stack.Screen name='BottomTab' component={BottomTab}    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;