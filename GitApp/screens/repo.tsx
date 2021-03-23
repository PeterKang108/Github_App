import React, { useEffect, useState } from 'react';
import { StyleSheet,ScrollView } from 'react-native';

import { View } from '../components/Themed';
import ListItem from "../components/parts/ListItem"
import { RepositoryProp } from "../models/Repository"
import {  getRepo } from "../api"
import Loading from '../components/parts/Loading';
import storage  from '../utils/storage'

export default function RepositoryScreen() {
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState<RepositoryProp[]>([]);

  useEffect(() => {
    getReposInfo()
  },[]);
 
 const getReposInfo = async () => {
    try{
      const token:string = await storage.load({key: 'usertoken'})
      let ret:any = await getRepo(token)
      setLoading(false);
      if(ret.data){
        let repositoryList:RepositoryProp[] = []
         ret.data.viewer.repositories.nodes.forEach((itm: RepositoryProp)=>{
          repositoryList.push(itm)
        })
        setList(repositoryList) 
      }
    }catch(err){
      
    }
  }

  return (
    <ScrollView>
      {
        isLoading ? <Loading style={{textAlign:"center",paddingVertical:30}}>Loding</Loading>:<View style={styles.container}>
          {
            list.map((item: any,index)=>{
              return <ListItem index={index} item={item} key={index}/>
              }
            )
          }
         </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
