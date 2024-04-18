import React, { useState } from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme, View, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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

const MainNavigation = (props) => {
    const Stack = createNativeStackNavigator();
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme);
    const [selectedOption, setSelectedOption] = useState('auto'); // State to track user's choice

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    const MyTheme = theme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name={ScreenNames.Splash} component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.InstagramHome} component={InstagramHome} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.Home} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.SearchUsers} component={SearchUsers} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.TasksToDo} component={TasksList} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.BottomTab} component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
            <View style={styles.dropdownContainer}>
                <DropDownPicker
                    items={[
                        { label: 'Auto', value: 'auto' },
                        { label: 'Light', value: 'light' },
                        { label: 'Dark', value: 'dark' },
                    ]}
                    defaultValue={selectedOption}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={(item) => setSelectedOption(item.value)} // Update selected option
                    labelStyle={{ fontSize: 18 }}
                    arrowIconStyle={styles.arrowIconContainer}
                    arrowIconContainerStyle={styles.arrowIconContainer}
                    arrowIconImageStyle={styles.arrowIconImage}
                    arrowIcon={() => (
                        <Image
                            source={selectedOption === 'light' ? require('../src/components/images/sun.png') : require('../src/components/images/moon.png')} // Assuming you have sun.png and moon.png in your project directory
                            style={styles.arrowIconImage}
                        />
                    )}
                />
            </View>
        </NavigationContainer>
    )
}

export default MainNavigation;

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1, // Ensure dropdown is above other components
    },
    arrowIconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIconImage: {
        width: 24,
        height: 24,
    },
});
