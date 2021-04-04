import * as JsonWebToken from 'jsonwebtoken';
const secret = 'my_app_secret';
const NO_AUTH_URLS = [ '/api/login', '/api/register' ]

type GenerateTokenOptions = {
    payload: object
}
const generateToken = ( options: GenerateTokenOptions ) => {
    const { payload } = options;
    const sign = JsonWebToken.sign( { ...payload }, secret, { expiresIn:  '1h' });
    return `Bearer ${ sign }`;
}

export {
    generateToken,
    secret,
    NO_AUTH_URLS
};

