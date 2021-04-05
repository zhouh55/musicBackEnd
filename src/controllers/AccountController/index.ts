import { Context } from '@core/koa';
import { getMongoManager, getMongoRepository } from 'typeorm';
import { generateToken } from '../../core/jwt';
import { User } from '../../entities/mongodb/user';
import { getResponseDataFormat } from '../../utils/publicFunction';
interface LoginReqBody  {
    account: string,
    password: string
}
interface RegisterReqBody extends LoginReqBody {
    name: string
}
export default class AccountController {
    // POST
    static async login( ctx: Context ) {
        const { account = '', password = '' }: LoginReqBody = ctx.request.body;
        
        const result = await getMongoManager().findOne(User, {
            select:[ 'name' ],
            where: {
                account: account,
                password: password
            }
        } );
        
        let data = getResponseDataFormat();
        
        if( result ) {
            data.data = {
                token: generateToken( { payload: result } )
            }
            data.message = '登录成功！';
        }
        else {
            data.code = 400
            data.message = '账号或密码错误！'
        }
        
        ctx.body = data;
    }

     // POST
     static async register( ctx: Context ) {
        const { account, password, name }: RegisterReqBody = ctx.request.body;
        let user = new User();
        user.name = name || 'Bears';
        user.account = account;
        user.password = password;
        
        const result = await getMongoRepository(User).save(user);
        let data = getResponseDataFormat( { code: 200, message: '注册成功！' } );

        if( !result ) {
            data.message = '注册失败！'
            data.code = 500;
        }
        ctx.body = data;
    }


    // POST
    static async loginOut() {

    }

}