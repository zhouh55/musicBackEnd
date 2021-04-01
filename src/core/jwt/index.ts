import * as JsonWebToken from 'jsonwebtoken';
import { secret } from '../../core/secret';

type GenerateTokenOptions = {
    payload: object
}
const generateToken = ( options: GenerateTokenOptions ) => {
    const { payload } = options;
    const token = JsonWebToken.sign( { ...payload }, secret, { expiresIn:  '1h' });
    return token;
}

export {
    generateToken
};

