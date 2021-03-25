import React, { useState, useEffect } from 'react';
import {StyleSheet, Button, ScrollView} from 'react-native';

import ListInfo from '../components/ProfileInfo';
import { View } from '../components/Themed';
// import storage from '../storage';
import { getUserInfo } from '../utils/api';
import { ProfileObj } from '../model/models';
import Loading from "./Loading";
import AsyncStorage from "@react-native-community/async-storage";


interface Props {
    navigation: any,
}

export default function ProfileView(props: Props) {
    const [isLoading, setter] = useState<boolean>(true);
    const [data, setData] = useState<ProfileObj>({
        avatarUrl: '',
        name: '',
        login: '',
        email: '',
        bio: '',
        repositories: { totalCount: 0 },
        url: '',
        following: { totalCount: 0 },
        followers: { totalCount: 0 },
        createdAt: '',
    })
    console.log(JSON.stringify(data));

    const userCache = async () => {
        const value: any = await AsyncStorage.getItem('OAuthToken')
        const data: any = await getUserInfo(value)
        try {
            if (data) {
                setData(data)
                setter(false)
            }
            // throw new Error("Error");
        } catch (e) {
            // error
        }
    }

    useEffect(() => {
        userCache();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
            {isLoading ? <Loading style={{ textAlign: "center",fontSize:50}}>Loading Profile</Loading> :
                <ListInfo data={data} {...props} />}
            <View style={styles.logout}><Button onPress={() => { AsyncStorage.removeItem('OAuthToken').then(() => { props.navigation.push('Search') }) }} title="LOGOUT" /></View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 30,
    },
    button: {
        width: '80%',
        borderRadius: 5
    },
    logout: {
        width: '70%',
        borderRadius: 5
    }
});
