import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, Text, View} from "react-native";
import {Header} from "react-native/Libraries/NewAppScreen";
import ThemeContext from "./ThemeContext";
import Hello from "./Hello";
import Root from "./Root";

function Profile({route}) {
    const {
        params: {name} = {},
    } = route;
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Header/>
                    <View>
                        <Text>プロフィール: {name}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default Profile;