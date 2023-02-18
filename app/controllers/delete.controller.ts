import { Request, Response } from 'express';

import db from '../models';

const Docs = db.docs;

const deleteController = async (req: Request, res: Response) => {
    const reqBody = req.body;

    Docs.destroy({
        where: {
            uuid: reqBody.doc_uuid,
        },
    })
        .then((doc: any) => {
            return res.status(200).json({
                message: 'delete suscessfully',
            });
        })
        .catch((err: any) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while deleting doc',
            });
        });
};

export default deleteController;
