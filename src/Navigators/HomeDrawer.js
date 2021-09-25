import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../Screens/Home'

export default () => (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
);
