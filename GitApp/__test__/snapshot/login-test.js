import renderer from 'react-test-renderer'
import * as React from "react"

import Loading from "../../components/parts/Loading"

beforeEach(() => {
    jest.useFakeTimers('setTimeout');
});
afterEach(() => {
    jest.useRealTimers();
});

it('Login Loading Views correctly',async ()=>{
    let tree 
    let fn= jest.fn(()=>{
        tree= renderer.create(<Loading>Loading</Loading>).toJSON()
        expect(tree).toMatchSnapshot()
    })
    fn()
})