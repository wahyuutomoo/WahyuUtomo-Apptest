import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListContact, AddContact } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ListContact' component={ListContact} />
            <Stack.Screen name='AddContact' component={AddContact} />
        </Stack.Navigator>
    )
}

export default Router;