import * as Koa from 'koa';
import * as KoaLogger from 'koa-logger';
// import 'module-alias/register';
import { connectMongoDB } from './dataBase/conectDB';
import Middlewares from './middlewares/index';
// alias(path.resolve(__dirname, '../'));

const IS_DEV = process.env.NODE_ENV === 'dev'; 
class Application {
    private app: Koa

    constructor() {
        this.app = new Koa()
        this.init()
    }

    private init() {
        if( IS_DEV ) {
            this.app.use( KoaLogger() )
        }
        this.app.use( async ( ctx, next: () => Promise<any>) => {
            const path = ctx.request.path;
            if( path === '/' ) {
                ctx.body = 'welcome to koa'
            }
            await next();
            ctx.set('X-Powered-By', 'Keefe')
        } )
        
        Middlewares( this.app );
    }

    start(port: number) {
        this.app.listen( port, () => {
            connectMongoDB();
            console.log( `Koa server running port：${ port }` );
        })
    }
}

new Application().start(8999);