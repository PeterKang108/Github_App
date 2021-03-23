import renderer from 'react-test-renderer'
import * as React from "react"

import UseInfoMock from "../../config_test/mock/UseInfo"
import Info from "../../components/parts/Info"

it(`Profile Views correctly`, () => {
   const tree = renderer.create(<Info data={UseInfoMock}></Info>).toJSON()
   expect(tree).toMatchSnapshot()
});

