import { Request, Response, NextFunction } from 'express';
import { Md5 } from 'ts-md5';

import db from '../models';

const Users = db.users;

const authenticateUserHelper = async (req: Request, res: Response, next: NextFunction) => {
    const reqBody = req.body;

    if (!reqBody.email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    if (!reqBody.password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    const hashedPassword = Md5.hashStr(reqBody.password);

    try {
        const user = await Users.findAll({
            where: {
                email: reqBody.email,
                password: hashedPassword,
            },
        });
        if (user.length > 0) {
            req.body.user = user[0];
            next();
        } else {
            return res.status(400).json({ error: 'Email or password is incorrect' });
        }
    } catch (err: any) {
        res.status(500).send({
            message: err.message || 'Some error occurred while validating email & password',
        });
    }
};

export default authenticateUserHelper;
