import * as JWT from 'koa-jwt'
import { secret } from '../core/secret'
const NO_AUTH_URLS = [ /api\/login/ ]

// 请求的时候要附带  Bearer + 空格
export default JWT({
    secret: secret
}).unless( { path: NO_AUTH_URLS } )