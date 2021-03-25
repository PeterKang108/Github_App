import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { getRepo } from '../utils/api';
// import storage from '../storage';
import { RepositoryObj } from '../model/models';
import Loading from "./Loading";
import AsyncStorage from "@react-native-community/async-storage";


export default function RepositoryView() {
    const [isLoading, setter] = useState<boolean>(true);
    const [lists, setLists] = useState<RepositoryObj[]>([]);
    useEffect(() => {
        getRepoInfo()
    }, []);

    const getRepoInfo = async () => {
        try {
            const token: any = await AsyncStorage.getItem('OAuthToken')
            const data: any = await getRepo(token)
            if (data) {
                let repositoryList: RepositoryObj[] = []
                data.repositories.nodes.forEach((item: RepositoryObj) => {
                    repositoryList.push(item)
                })
                setLists(repositoryList)
                setter(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ScrollView>
            {isLoading?<Loading style={{ textAlign: "center",fontSize:50}}>Loading Repo</Loading>:
                lists.map((item: any, index) =>
                    <View key={index} style={styles.container}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Text>
                            {item.owner.login}
                        </Text>
                    </View>
                )
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        minHeight: 60
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
