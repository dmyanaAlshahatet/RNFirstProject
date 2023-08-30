import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";
import Home from "../src/components/screens/Home";
import Screen2 from "../src/components/screens/Screen2";
import Screen3 from "../src/components/screens/Screen3";
import ProfileView from "../src/components/ProfileView";
import TasksList from "../src/components/TasksList";
import InstagramInterface from "../src/components/InstagramInterface";
import SearchAppointments from "../src/components/SearchAppointments";
import BottomTab from "./BottomTab";
import ScreenNames from "./screenNames";
import SearchBar1 from "../src/components/SearchBar1";
import Splash from "../src/components/screens/Splash";



const MainNavigation = (props) => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name={ScreenNames.Splash} component={Splash} options={{ headerShown: false }} />
                {/* <Stack.Screen name={ScreenNames.Home} component={Home} options={{ headerShown: false }} /> */}
                <Stack.Screen name={ScreenNames.searchAppointments} component={SearchAppointments} options={{ headerShown: false }} />
                {/* <Stack.Screen name={ScreenNames.screen2} component={Screen2} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name={ScreenNames.screen3} component={Screen3} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name={ScreenNames.Login} component={ProfileView} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name={ScreenNames.TasksToDo} component={TasksList} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name={ScreenNames.searchBar} component={SearchBar1} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name={ScreenNames.Instagram} component={InstagramInterface} options={{ headerShown: false }} /> */}
                <Stack.Screen name={ScreenNames.BottomTab} component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;