import express, { Express } from 'express';

import authenticateUserHelper from '../helper/authenticateUser.helper';

import createController from '../controllers/create.controller';
import readAllController from '../controllers/readAll.controller';
import readController from '../controllers/read.controller';
import deleteController from '../controllers/delete.controller';

const docsRoutes = (app: Express) => {
    let router = express.Router();

    router.post('/create', authenticateUserHelper, createController);

    router.post('/readAll', authenticateUserHelper, readAllController);
    router.get('/read/:doc_uuid', readController);
    router.post('/delete', authenticateUserHelper, deleteController);
    router.post('/update', authenticateUserHelper);

    app.use('/docs', router);
};

export default docsRoutes;
