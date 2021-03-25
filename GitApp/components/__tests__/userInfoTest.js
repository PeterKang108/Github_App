import {getUserInfo} from '../../utils/api'
import Token from '../../token/token'

it(`has correct username`, async ()=>{
  let token = Token.token;
  let res = await getUserInfo(token)
  expect(res.data).toBeDefined();
  expect(res.data.viewer.login).toEqual('PeterKang108');
});

it(`has correct website`, async ()=>{
  let token = Token.token;
  let res = await getUserInfo(token)
  expect(res.data).toBeDefined();
  expect(res.data.viewer.url).toEqual('https://github.com/PeterKang108');
});

it(`has correct repositories count`, async ()=>{
  let token = Token.token;
  let res = await getUserInfo(token)
  expect(res.data).toBeDefined();
  expect(res.data.viewer.repositories.totalCount).toEqual(18);
});

it(`has correct following`, async ()=>{
  let token = Token.token;
  let res = await getUserInfo(token)
  expect(res.data).toBeDefined();
  expect(res.data.viewer.following.totalCount).toEqual(0);
});

it(`has correct follower`, async ()=>{
  let token = Token.token;
  let res = await getUserInfo(token)
  expect(res.data).toBeDefined();
  expect(res.data.viewer.followers.totalCount).toEqual(0);
});

it(`has correct avatar`, async ()=>{
  let token = Token.token;
  let res = await getUserInfo(token)
  expect(res.data).toBeDefined();
  expect(res.data.viewer.avatarUrl).toEqual('https://avatars.githubusercontent.com/u/42983521?v=4');
});
