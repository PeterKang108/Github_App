import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { getUserInformation } from "../api";
import { ProfileProp } from "../models/Profile"
import Loading from '../components/parts/Loading';
import Info from '../components/parts/Info';
import storage  from '../utils/storage'



interface Props {
  navigation: any,
}

export default function ProfileScreen(props:Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<ProfileProp>({
    login: '',
    email: '',
    name: '',
    avatarUrl: '',
    bio: '',
    repositories: { totalCount : 0},
    following: { totalCount : 0},
    followers: { totalCount: 0 },
    url: '',
    createdAt: ''
  });

  useEffect(() => {
    userInfo();
  }, []);

  //getUerInfo
  const userInfo = async () => {
    const token:string = await storage.load({key: 'usertoken'})
    let ret: any = await getUserInformation(token);
    setLoading(false);
    if (ret.data) {
      setData(ret.data.viewer)
    }
  }
  
  const doLogout = ()=>{
    storage.remove({key: 'usertoken'})
    props.navigation.push('Login')
  }

  return (
    <ScrollView style={{ height: '100%' }}>
      {isLoading ? <Loading style={{ textAlign: "center", paddingVertical: 30 }}>Loading</Loading> : 
      <Info clickLogout={doLogout} data={data} {...props}/>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
