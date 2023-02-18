import express, { Express } from 'express';

import authenticateUserHelper from '../helper/authenticateUser.helper';

import createController from '../controllers/create.controller';
import readAllController from '../controllers/readAll.controller';

const docsRoutes = (app: Express) => {
    let router = express.Router();

    router.post('/create', authenticateUserHelper, createController);

    router.post('/readAll', authenticateUserHelper, readAllController);

    app.use('/docs', router);
};

export default docsRoutes;
