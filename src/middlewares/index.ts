import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import Routers from '../routers/index';
import Auth from './auth';
import JWT from './jwt';
const Middlewares = ( App: Koa ) => {
    App.use( bodyParser() )
    App.use( Auth )
    App.use( JWT )
    App.use( Routers.routes() )
}
export default Middlewares