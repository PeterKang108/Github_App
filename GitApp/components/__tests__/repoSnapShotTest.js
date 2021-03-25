import renderer from 'react-test-renderer'
import * as React from "react"

import repoItem from "../../test_validates/repoInforForTest"
import {ScrollView, Text, View} from "react-native";

it(`Repository Views correctly`,async () => {
  let Dom = jest.fn(()=>repoItem.map((item,index)=>{
    return (<View key={index}>
      <View >
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
      <Text>
        {item.owner.login}
      </Text>
    </View>)
  }));
  const tree = renderer.create(<><Dom /></>)
  expect(tree).toMatchSnapshot();
});