import express, { Express } from 'express';
import registerController from '../controllers/register.controller';

import loginController from '../controllers/login.controller';

const authenticationRoutes = (app: Express) => {
    let router = express.Router();

    router.post('/register', registerController);
    router.post('/login', loginController);

    app.use('/auth', router);
};

export default authenticationRoutes;
