import { Context } from '@core/koa';
import { IReturnData } from '@src/@types/global';
import { getMongoManager } from 'typeorm';
import { User } from '../../entities/mongodb/user';
type LoginReqBody = {
    account: string,
    password: string
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
            data: result,
            message: '登录成功！'
        }
        if( !result ) {
            data.code = 400
            data.message = '账号或密码错误！'
        }
        
        ctx.body = data;
    }

    // POST
    static async loginOut() {

    }

}