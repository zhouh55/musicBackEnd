import { Context } from '@core/koa';
import { IReturnData } from '@src/@types/global';
import { getMongoRepository } from 'typeorm';
import { User } from '../../entities/mongodb/user';
type LoginReqBody = {
    account: string,
    password: string
}
export default class AccountController {
    // GET
    static async getAllUser( ctx: Context ) {
        const result = await getMongoRepository(User).find();
        console.log( result );
        
        const data: IReturnData = {
            code: 200,
            data: [],
            message: ''
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
        
        getMongoRepository(User).save(user)
        console.log( user );
        
        console.log( account, password );
        const data: IReturnData = {
            code: 200,
            data: [],
            message: ''
        }
        ctx.body = data;
    }

}