import { Request, Response } from 'express';
import { Md5 } from 'ts-md5';
import { v4 as uuidv4 } from 'uuid';

import db from '../models';

const Users = db.users;

// todo
// O 1. Validate request body
// O 2. Check if email is already in use
// O 3. Hash password
// O 4. Create user
// O 5. Return user
const registerController = async (req: Request, res: Response) => {
    const reqBody = req.body;
    if (!reqBody.email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    if (!reqBody.password) {
        return res.status(400).json({ error: 'Password is required' });
    }
    if (reqBody.repassword != reqBody.password) {
        return res.status(400).json({ error: 'Passwords & repassword do not match' });
    }

    try {
        const user = await Users.findAll({
            where: {
                email: reqBody.email,
            },
        });
        if (user.length > 0) {
            return res.status(400).json({ error: 'Email is already in use' });
        }
    } catch (err: any) {
        res.status(500).send({
            message: err.message || 'Some error occurred while validating email',
        });
    }

    const hashedPassword = Md5.hashStr(reqBody.password);
    const user_uuid = uuidv4();

    const newUser = {
        uuid: user_uuid,
        email: reqBody.email,
        password: hashedPassword,
    };

    Users.create(newUser)
        .then((user: any) => {
            return res.status(200).json({
                info: 'New user just created',
                newUser: {
                    email: user.email,
                    password: reqBody.password,
                },
            });
        })
        .catch((err: any) => {
            return res.status(500).json({ info: 'Something is error when creating process', error: err });
        });
};

export default registerController;
