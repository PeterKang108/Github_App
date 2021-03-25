import renderer from 'react-test-renderer'
import * as React from "react"

import UseInfoMock from "../../test_validates/userInfoForTest"
import ListInfo from "../ProfileInfo";

it(`Profile Views correctly`, () => {
  const tree = renderer.create(<ListInfo data={UseInfoMock}></ListInfo>).toJSON()
  expect(tree).toMatchSnapshot()
});