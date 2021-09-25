import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../Screens/Preload/index';
import Login from '../Screens/Login';

import HomeDrawer from './HomeDrawer';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName="HomeDrawer"
        >
            <MainStack.Screen name="Preload" component={Preload} />
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="HomeDrawer" component={HomeDrawer} />
        </MainStack.Navigator>
    )
}


