import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListContact, AddContact, DetailContact } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ListContact' component={ListContact} />
            <Stack.Screen name='AddContact' component={AddContact} />
            <Stack.Screen name='DetailContact' component={DetailContact} />
        </Stack.Navigator>
    )
}

export default Router;