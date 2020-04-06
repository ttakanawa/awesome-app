import React from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';

import App from './App';

const Tab = createBottomTabNavigator();

const TabeBarIcon = icon => ({focused, size}) => {
  return focused ? (
    <Text style={{fontsize: size}}>!!{icon}!!</Text>
  ) : (
    <Text style={{fontsize: size}}>{icon}</Text>
  );
};

function Root() {
    return (
        <NavigationContainer>
            <Tab.Navigator lazy={false}>
                <Tab.Screen name="App" component={App} options={{
                        title: 'App',
                        tabBarLabel: 'トップ',
                    tabBarIcon: TabeBarIcon('😄'),
                    }}
                />
                <Tab.Screen name="Profile" component={Profile} options={{
                        tabBarLabel: 'プロフィール',
                        tabBarIcon: TabeBarIcon('😄'),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Root;