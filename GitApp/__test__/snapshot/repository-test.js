import renderer from 'react-test-renderer'
import * as React from "react"
import RepoMock from "../../config_test/mock/Repo"
const ListItem = require("../../components/parts/ListItem").default

it(`Repository Views correctly`,async () => {
  let DomArr = jest.fn(()=>RepoMock.map((item,index)=>{
    return (<ListItem index={index} item={item} key={index}/>)
    }));
    const tree = renderer.create(<><DomArr /></>)
    expect(tree).toMatchSnapshot();
});

