import { Context } from '@core/koa';
import { IReturnData } from '@src/@types/global';
import { getMongoRepository } from 'typeorm';
import { User } from '../../entities/mongodb/user';
type LoginReqBody = {
    account: string,
    password: string
}
export default class UserController {
    // GET
    static async getAllUser( ctx: Context ) {
        const result = await getMongoRepository(User).find();
        let data: IReturnData = {
            code: 200,
            data: result || [],
            message: '查询成功！'
        }
        if( !result ) {
            data.code = 500
            data.message = '查询失败！'
        }
        ctx.body = data;
    }

    // POST
    static async addUser( ctx: Context ) {
        const { account, password }: LoginReqBody = ctx.request.body;
        let user = new User();
        user.name = 'Bears';
        user.account = account;
        user.password = password;
        
        const result = await getMongoRepository(User).save(user);
        let data: IReturnData = {
            code: 200,
            message: '创建成功！'
        }

        if( !result ) {
            data.message = '创建失败！'
            data.code = 500;
        }
        ctx.body = data;
    }

}