import { Context } from '@core/koa';
import { IReturnData } from '@src/@types/global';
import { getMongoManager, getMongoRepository } from 'typeorm';
import { generateToken } from '../../core/jwt';
import { User } from '../../entities/mongodb/user';
type LoginReqBody = {
    account: string,
    password: string,
    name?: string
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
        let data: IReturnData = {
            code: 200,
            data: '',
            message: '登录成功！'
        }
        if( result ) {
            data.data = {
                token: generateToken( { payload: result } )
            }
        }
        else {
            data.code = 400
            data.message = '账号或密码错误！'
        }
        
        ctx.body = data;
    }

     // POST
     static async register( ctx: Context ) {
        const { account, password, name }: LoginReqBody = ctx.request.body;
        let user = new User();
        user.name = name || 'Bears';
        user.account = account;
        user.password = password;
        
        const result = await getMongoRepository(User).save(user);
        let data: IReturnData = {
            code: 200,
            message: '注册成功'
        }

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