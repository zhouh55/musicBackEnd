import * as JWT from 'koa-jwt'
const IS_DEV = process.env.NODE_ENV === 'dev'

const NO_AUTH_URLS = [ /api\/login/ ]


export default JWT({
    debug: IS_DEV ? true : false,
    secret: 'a1'
}).unless( { path: NO_AUTH_URLS } )