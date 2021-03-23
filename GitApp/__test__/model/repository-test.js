import {getRepo} from '../../api/index'
import ConfigTest from '../../config_test/token'

//describe
describe("describe api test",()=>{
    let token = ConfigTest.token;
    let login = ConfigTest.login

    /**
     * token
     */
    it('===>TOKEN correctly',()=>{
        expect(token).toBeDefined()
    })

    
    /**
     * getRepos
     * remark:test ≈ it
     * jest.setTimeout(10000):https://github.com/facebook/jest/issues/5055
     * timeout 15s
     */
    test("===> GetRepos correctly",async ()=>{
        let ret = await getRepo(token)
        expect(ret).toHaveProperty('networkStatus', 7);
        expect(ret.data).toBeDefined();
    },15*1000)
})


