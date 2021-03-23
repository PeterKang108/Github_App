import React, { useEffect, useState }  from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, Button ,View, Alert} from 'react-native';
import storage  from '../utils/storage'
import { getUserInformation } from '../api/index'
import Loading from '../components/parts/Loading';

interface Props {
  navigation: any
}

export default function FollowersScreen(props:Props) {
const [text, onChangeText] = React.useState("");
const [isLoading, setLoading] = React.useState(true);

useEffect(() => {
  getUserToken();
},[]);

// 获取用户token
const getUserToken = async ()=>{
  storage.load({
    key: 'usertoken'
  }).then(token =>{
    if(token){
      props.navigation.replace('Root')
    }
  }).catch(err=>{
    setLoading(false)
  })
}

/**
 * 获取用户信息
 * */ 
const getUserInfo = async (token: any) =>{
  const ret: any = await getUserInformation(token)
  if(ret.data.viewer.login){
    storage.save({ key: 'usertoken', data: token, expires: 1000 * 3600*24 }); // 1d expires
    storage.save({ key: 'username', data: ret.data.viewer.login, expires: 1000 * 3600*24 }); // 1d expires
    props.navigation.replace('Root')
  }
}

// 点击确认获取用户token 且验证
const onPress = async () =>{
  getUserInfo(text)
}

const renderView = ()=>{
  return (
    <View>
        <TextInput multiline={true} style={styles.input} onChangeText={onChangeText} placeholder="请输入Github Token" value={text} />
        <View  style={styles.button}>
          <Button onPress={onPress} title="Login"  color="#009688" />
        </View>
    </View>
  )
}

return (
  <SafeAreaView style={styles.login} >
    {isLoading ? <Loading style={{textAlign:"center",paddingVertical:30}}>Loading...</Loading> :renderView()}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
login: {
  flex:1,
  height: '100%',
  backgroundColor: '#fff'
},
input: {
  height: 100,
  marginTop: 200,
  marginLeft: 30,
  marginRight: 30,
  padding: 10,
  borderWidth: 1,
  borderColor: '#666',
  borderRadius: 4,
},
text: {
  marginLeft: 30,
  marginRight: 30,
},
button:{
    margin: 30
}
});