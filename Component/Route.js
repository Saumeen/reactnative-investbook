import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { BottomNavigation } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons';

import Details from './Screens/Details'

import Add from './Screens/AddEntry'

import { GLOBAL } from '../Constant/GlobalConstant'


const Tab = createBottomTabNavigator();




export default () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: GLOBAL.COLOR.ACTIVE_TAB,
                    inactiveBackgroundColor: GLOBAL.COLOR.INACTIVE_TAB_COLOR,
                    activeTintColor: 'black',
                    inactiveTintColor: 'black'
                }}
            >

                <Tab.Screen
                    name="Add"
                    component={Add}
                    options={{
                        tabBarIcon: () => (<Entypo name="squared-plus" size={24} color="black" />),
                    }}></Tab.Screen>
                <Tab.Screen
                    name="Details"
                    component={Details}
                    options={{
                        tabBarIcon: () => (<Entypo name="info" size={24} color="black" />),
                    }}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )


}
