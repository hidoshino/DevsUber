import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../Screens/Preload/index';
import Login from '../Screens/Login';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName="Preload"
        >
            <MainStack.Screen name="Preload" component={Preload} />
            <MainStack.Screen name="Login" component={Login} />
        </MainStack.Navigator>
    )
}


