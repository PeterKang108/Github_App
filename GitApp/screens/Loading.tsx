import React from "react"
import { Text } from '../components/Themed'
import { StyleSheet ,Text as DefaultText} from 'react-native';

export default (props:DefaultText['props'])=>{
    return (
        <Text {...props}></Text>
    )
}