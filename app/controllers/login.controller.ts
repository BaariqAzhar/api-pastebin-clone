import { Request, Response } from 'express';
import { Md5 } from 'ts-md5';

import db from '../models';

const Users = db.users;

// todo
// O Validate request body
// O Hash password
// O Validate email & password
const loginController = async (req: Request, res: Response) => {
    const reqBody = req.body;

    if (!reqBody.email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    if (!reqBody.password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    const hashedPassword = Md5.hashStr(reqBody.password);

    Users.findAll({
        where: {
            email: reqBody.email,
            password: hashedPassword,
        },
    })
        .then((user: any) => {
            if (user.length > 0) {
                return res.status(200).json({
                    login: true,
                    user: {
                        email: user[0].email,
                        password: reqBody.password,
                    },
                });
            } else {
                return res.status(400).json({ error: 'Email or password is incorrect' });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while validating email',
            });
        });
};

export default loginController;
