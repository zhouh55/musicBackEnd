import { Context } from '@core/koa';
import * as JsonWebToken from 'jsonwebtoken';
import { NO_AUTH_URLS, secret } from '../core/jwt/index';
 
const sendNoLogin = (ctx: Context ) => {
  ctx.status = 200;
  ctx.body = {
    code: 401,
    message: '请登录！！'
  }
}
export default async ( ctx: Context, next: () => Promise<any> ) => {
    // 白名单
    if( NO_AUTH_URLS.some(d => d === ctx.url ) ) {
      await next();
      return;
    }

    if( ctx?.header?.authorization ) {
      const authorizationAry = ctx.header.authorization.split(' ');
      if( authorizationAry.length === 2 ) {
        const token = authorizationAry[1];
        // 验证 token 合法性
        try {
            const result = JsonWebToken.verify(token, secret, { complete: true });
            // 提前判断是否过期，如果过期了的话就 重新生成 token 返回给前端
            // if( typeof result === 'object' ) {
            //   console.log(1, result, ( result as any ).payload );

            // }

            await next()
            return;
        }
        catch ( error ) {
          if( error.message === 'jwt expired' ) {
            // 登录过期
            sendNoLogin( ctx );
            return;
          }
        }
      }
    } 

    sendNoLogin( ctx );
}