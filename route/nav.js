import React from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from 'react-native';
import { Text, View } from "react-native";
import Home from "../src/components/screens/Home";
import ProfileView from "../src/components/ProfileView";
import TasksList from "../src/components/TasksList";
import InstagramInterface from "../src/components/InstagramInterface";
import SearchUsers from "../src/components/SearchUsers";
import BottomTab from "./BottomTab";
import ScreenNames from "./screenNames";
import SearchBar1 from "../src/components/SearchBar1";
import Splash from "../src/components/screens/Splash";
import SwipeBox from "../src/components/SwipeBox";
import InstagramHome from "../src/components/InstagramHome";
// import AnimTap2 from "./AnimTab2";

const MainNavigation = (props) => {

    const Stack = createNativeStackNavigator()

    const colorScheme = useColorScheme();

    const MyTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name={ScreenNames.Splash} component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.InstagramHome} component={InstagramHome} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.Home} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.SearchUsers} component={SearchUsers} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.TasksToDo} component={TasksList} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.BottomTab} component={BottomTab} options={{ headerShown: false }} />
                {/* <Stack.Screen name={ScreenNames.AnimTap2} component={AnimTap2} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;
