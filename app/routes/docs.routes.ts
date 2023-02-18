import express, { Express } from 'express';

import createController from '../controllers/create.controller';
import authenticateUserHelper from '../helper/authenticateUser.helper';

const docsRoutes = (app: Express) => {
    let router = express.Router();

    router.post('/create', authenticateUserHelper, createController);

    app.use('/docs', router);
};

export default docsRoutes;
