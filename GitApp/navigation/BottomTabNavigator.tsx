import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfileView from '../screens/ProfileView';
import RepositoryView from '../screens/RepositoryView';
import FollowingView from '../screens/FollowingView';
import FollowersView from '../screens/FollowersView';
import { BottomTabParamList, ProfileParamList, RepositoryParamList, FollowingParamList, FollowersParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="Profile"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color}) => <AntDesign name="user" size={24} color="black" />,
                }}
            />
            <BottomTab.Screen
                name="Repository"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="cloud" size={24} color="black" />,
                }}
            />
            <BottomTab.Screen
                name="Following"
                component={TabThreeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="star" size={24} color="black" />,
                }}
            />
            <BottomTab.Screen
                name="Followers"
                component={TabFourNavigator}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="team" size={24} color="black" />,
                }}
            />
        </BottomTab.Navigator>
    );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<ProfileParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="ProfileScreen"
                component={ProfileView}
                options={{
                    headerTitle: 'Profile',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#2baeff'
                    }
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<RepositoryParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="RepositoryScreen"
                component={RepositoryView}
                options={{
                    headerTitle: 'Repository',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#2baeff'
                    }
                }}
            />
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack = createStackNavigator<FollowingParamList>();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="FollowingScreen"
                component={FollowingView}
                options={{
                    headerTitle: 'Following',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#2baeff'
                    }
                }}
            />
        </TabThreeStack.Navigator>
    );
}

const TabFourStack = createStackNavigator<FollowersParamList>();

function TabFourNavigator() {
    return (
        <TabFourStack.Navigator>
            <TabFourStack.Screen
                name="FollowersScreen"
                component={FollowersView}
                options={{
                    headerTitle: 'Followers',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#2baeff'
                    }
                }}
            />
        </TabFourStack.Navigator>
    );
}
