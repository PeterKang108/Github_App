
import renderer from 'react-test-renderer'
import * as React from "react"
import Loading from "../../components/parts/Loading"

it('Profile Loading Views correctly',async ()=>{
    let tree = renderer.create(<Loading>Loading</Loading>).toJSON()
    expect(tree).toMatchSnapshot()
})