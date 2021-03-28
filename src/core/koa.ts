import { IAnyObject } from '@src/@types/global';
import { Context as KoaContext } from 'koa';

export interface Context extends KoaContext {
     // post fields
    fields?: IAnyObject,

    // session
    session?: object
}