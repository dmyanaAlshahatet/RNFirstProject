import React, { useState } from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from "react-native";
import Home from "../src/components/screens/Home";
import ProfileView from "../src/components/Login";
import TasksList from "../src/components/TasksList";
import InstagramInterface from "../src/components/InstagramInterface";
import SearchUsers from "../src/components/SearchUsers";
import BottomTab from "./BottomTab";
import ScreenNames from "./screenNames";
import SearchBar1 from "../src/components/SearchBar1";
import Splash from "../src/components/screens/Splash";
import SwipeBox from "../src/components/SwipeBox";
import InstagramHome from "../src/components/Example";
import Status from "../src/components/Status";
import SearchContent from "../src/components/SearchContent";
import Search from "../src/components/screens/Search";
import SearchBar from "../src/components/SearchBar1";
import SearchBox from "../src/components/SearchBox";
import Stories from "../src/components/Stories";
import HomePage from "../src/components/screens/HomePage";
import Reels from "../src/components/screens/Reels";
import Login from "../src/components/Login";
import Drawer1 from "./Drawer1";


const MainNavigation = (props) => {

    const Stack = createNativeStackNavigator()

    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    const MyTheme = theme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="">
                <Stack.Screen name={ScreenNames.Splash} component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.InstagramHome} component={InstagramHome} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.Home} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.SearchUsers} component={SearchUsers} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.BottomTab} component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.Status} component={Status} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.HomePage} component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.TasksList} component={TasksList} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.Login} component={Login} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.Drawer1} component={Drawer1} options={{ headerShown: false }} />
            </Stack.Navigator>
            {/* <TouchableOpacity style={styles.iconContainer} onPress={toggleTheme}>
                <Image source={theme === 'light' ? require('../src/components/images/sun.png') : require('../src/components/images/moon.png')} style={styles.iconImage} />
            </TouchableOpacity> */}
        </NavigationContainer>
    )
}

export default MainNavigation;

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    iconImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});
