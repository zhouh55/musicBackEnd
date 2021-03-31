import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import Routers from '../routers/index';
import JWT from './xJWT';
const Middlewares = ( App: Koa ) => {
    App.use( bodyParser() )
    App.use( JWT )
    App.use( Routers.routes() )
}
export default Middlewares