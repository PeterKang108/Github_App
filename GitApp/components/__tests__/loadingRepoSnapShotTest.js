import renderer from 'react-test-renderer'
import * as React from "react"

import Loading from "../../screens/Loading";

it(`Profile Views correctly`, () => {
  const tree = renderer.create(<Loading style={{ textAlign: "center", fontSize:50}}>Loading Repo</Loading>).toJSON()
  expect(tree).toMatchSnapshot()
});