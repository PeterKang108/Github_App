import React, { useState, useEffect } from 'react';
import {StyleSheet, TextInput, SafeAreaView, View, Button, ActivityIndicator, Text} from 'react-native';
// import storage from '../storage';
import { getUserInfo } from '../utils/api'
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any
}

export default function LoginScreen(props: Props) {
    const [token, setToken] = useState('');
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const value = await AsyncStorage.getItem('OAuthToken')
        try {
            if (value !== null) {
                props.navigation.replace('Root')
            }
            throw new Error("Error");
        } catch (e) {
            setLoading(false)
        }
    }

    const storeData = async (value: any) => {
        try {
            const data: any = await getUserInfo(value)
            if (data.login) {
                await AsyncStorage.multiSet([['OAuthToken', value], ['username', data.login]])
                props.navigation.replace('Root')
            }
        } catch (e) {
            // saving error
        }
    }

    const loginView = () => {
        return (
            <View style={styles.view}>
                <Text style={styles.title_text}>Start Screen</Text>
                <TextInput
                    placeholder='Github API Token'
                    multiline numberOfLines={5}
                    onChangeText={token => setToken(token)}
                    value={token}
                    maxLength={40}
                    style={styles.textinput}
                />

                <Button title="Search" onPress={async () => storeData(token)} />
            </View>
        )
    }

    return (
        <SafeAreaView>
            {isLoading ? <ActivityIndicator size="large" /> : loginView()}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    view: {
        height: '100%',
        padding: 40,
        display: 'flex',
    },
    textinput: {
        height: 40,
        fontSize: 20,
        width: '100%',
        marginTop: 200,
        marginBottom: 40,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title_text: {
        color: '#333333',
        marginTop: 50,
        fontSize: 52,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})


