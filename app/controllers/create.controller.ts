import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import db from '../models';

const Docs = db.docs;

// todo
// validate email && password
// create uuid
// validate public
// save
const createController = (req: Request, res: Response) => {
    const reqBody = req.body;

    return res.status(200).json(req.body.user);
};

export default createController;
