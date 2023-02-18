import { Request, Response } from 'express';

import db from '../models';

const Docs = db.docs;

const readAllController = async (req: Request, res: Response) => {
    const reqBody = req.body;

    Docs.findAll({
        where: {
            user_uuid: reqBody.user.uuid,
        },
    })
        .then((docs: any) => {
            if (docs.length > 0) {
                return res.status(200).json({
                    docs: docs,
                });
            } else {
                return res.status(400).json({ error: 'No docs found' });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while validating email',
            });
        });
};

export default readAllController;
