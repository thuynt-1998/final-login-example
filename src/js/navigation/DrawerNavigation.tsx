import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;