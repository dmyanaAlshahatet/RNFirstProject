import React from "react";
import { NavigationContainer, DarkTheme, DefaultTheme, } from "@react-navigation/native";
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
import AnimTap2 from "./AnimTab2";
// import { ThemeProvider } from '../src/context/ThemeContext';
import Theme from "../src/components/Theme";



const MainNavigation = (props) => {

    const Stack = createNativeStackNavigator()

    const colorScheme = useColorScheme();

    // const MyTheme = {
    //     ...DefaultTheme,
    //     colors: {
    //         ...DefaultTheme.colors,
    //         primary: 'rgb(255, 45, 85)',
    //     },
    // };

    // const MyTheme = {
    //     dark: false,
    //     colors: {
    //         primary: 'rgb(255, 45, 85)',
    //         background: 'rgb(242, 242, 242)',
    //         card: 'rgb(255, 255, 255)',
    //         text: 'rgb(28, 28, 30)',
    //         border: 'rgb(199, 199, 204)',
    //         notification: 'rgb(255, 69, 58)',
    //     },
    // };

    return (
        // <ThemeProvider>
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name={ScreenNames.Splash} component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenNames.InstagramHome} component={InstagramHome} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenNames.Home} component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenNames.SearchUsers} component={SearchUsers} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenNames.TasksToDo} component={TasksList} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenNames.BottomTab} component={BottomTab} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenNames.AnimTap2} component={AnimTap2} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        // </ThemeProvider>
    )
}

export default MainNavigation;