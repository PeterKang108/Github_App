import {getRepo} from '../../utils/api'
import Token from '../../token/token'

it(`has correct repo name`, async ()=>{
  let token = Token.token;
  let res = await getRepo(token);
  expect(res.data).toBeDefined();
  expect(res.data.viewer.repositories.nodes[0].name).toEqual('MP0-Fall2018-PeterKang108');
});

it(`has correct repo description`, async ()=>{
  let token = Token.token;
  let res = await getRepo(token);
  expect(res.data).toBeDefined();
  expect(res.data.viewer.repositories.nodes[0].description).toEqual('MP0-Fall2018-PeterKang108 created by GitHub Classroom');
});

it(`has correct owner`, async ()=>{
  let token = Token.token;
  let res = await getRepo(token);
  expect(res.data).toBeDefined();
  expect(res.data.viewer.repositories.nodes[0].owner.login).toEqual('cs125-illinois-students');
});
