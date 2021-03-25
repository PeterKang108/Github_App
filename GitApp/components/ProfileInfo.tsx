import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { ProfileObj } from '../model/models';

interface Props {
    data: ProfileObj
    navigation?: any,
}

const ListInfo = (props: Props) => {
    const { data } = props;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{ uri: data.avatarUrl }}
                />
                <View style={styles.name1}>
                    <Text style={styles.value}>{data.login}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.label}>Email Address</Text>
                <Text style={styles.value}>{data.email}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.label}>Bio</Text>
                <Text style={styles.value}>{data.bio}</Text>
            </View>
            <Text style={styles.item} onPress={() => props.navigation.navigate('Repository')}>
                <Text style={styles.label}>Public Repos count</Text>
                <Text style={styles.value}>{data.repositories.totalCount}</Text>
            </Text>
            <View style={styles.item}>
                <Text style={styles.label}>Website</Text>
                <Text style={styles.value}>{data.url}</Text>
            </View>
            <Text style={styles.item} onPress={() => props.navigation.navigate('Following')}>
                <Text style={styles.label}>Following</Text>
                <Text style={styles.value}>{data.following.totalCount}</Text>
            </Text>
            <Text style={styles.item} onPress={() => props.navigation.navigate('Followers')}>
                <Text style={styles.label}>Followers</Text>
                <Text style={styles.value}>{data.followers.totalCount}</Text>
            </Text>
            <View style={styles.item}>
                <Text style={styles.label}>Date Created</Text>
                <Text style={styles.value}>{new Date(data.createdAt).toDateString()}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
    },
    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(43, 174, 255, 0.5)',
        paddingBottom: 30,
        paddingTop: 30
    },
    avatar: {
        width: 72,
        height: 72
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    name1: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        paddingTop: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 16
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        letterSpacing: 1
    }
})

export default ListInfo;