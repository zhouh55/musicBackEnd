import * as Router from 'koa-router';
import AccountController from '../controllers/AccountController';
const router = new Router();

router
    .post('/api/login', AccountController.login)
    .post('/api/loginOut', AccountController.loginOut)

export default router;