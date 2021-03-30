import { Context } from '@core/koa';
import { IReturnData } from '@src/@types/global';
type LoginReqBody = {
    account: string,
    password: string
}
export default class AccountController {
    // POST

    static async login( ctx: Context ) {
        const { account, password }: LoginReqBody = ctx.request.body;
        console.log( account, password );
        
        const data: IReturnData = {
            code: 200,
            data: [],
            message: ''
        }
        ctx.body = data;
    }

    // POST
    static async loginOut() {

    }

}