// import { mongoDBConfig } from '@config/db.config';
// import { MongodbEntities } from '@entities/mongodb/index';
import { createConnection } from "typeorm";
import { mongoDBConfig } from '../../config/db.config';
import { MongodbEntities } from '../entities/mongodb/index';
// @config
const IS_DEV = process.env.NODE_ENV === 'dev';
const connectMongoDB = (): Promise<void> => {
    return createConnection( {
        // name: mongoDBConfig.name,
        type: 'mongodb',
        host: mongoDBConfig.host,
        port: mongoDBConfig.port,
        database: mongoDBConfig.database,
        entities: MongodbEntities,
        logging: IS_DEV ? true : false,
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        synchronize: true
    } )
    .then( connect => {
        console.log( 'open mongodb success!' )
    } )
    .catch( err => console.log( 'connect fail mongodb', err ) )
}

export {
    connectMongoDB
};

