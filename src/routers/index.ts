import * as Router from 'koa-router';
import AccountController from '../controllers/AccountController';
import UserController from '../controllers/UserController';
const router = new Router();

router
    .post( '/api/login', AccountController.login )
    .post( '/api/register', AccountController.register )
    .post( '/api/loginOut', AccountController.loginOut )
    .get( '/api/getAllUser', UserController.getAllUser)
    .post( '/api/addUser', UserController.addUser)
export default router;