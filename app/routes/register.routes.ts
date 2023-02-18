import express, { Express } from 'express';
import registerController from '../controllers/register.controller';

const registerRoutes = (app: Express) => {
    let router = express.Router();

    router.post('/', registerController);

    app.use('/register', router);
};

export default registerRoutes;
