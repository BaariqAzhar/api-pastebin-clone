import { Request, Response } from 'express';

import db from '../models';

const Docs = db.docs;

// todo
// O validate doc_uuid is required
// O validate user is same with doc user
// O delete doc
const deleteController = async (req: Request, res: Response) => {
    const reqBody = req.body;

    if (!reqBody.doc_uuid) {
        return res.status(400).json({ error: 'Doc uuid is required' });
    }

    try {
        const docData = await Docs.findAll({
            where: {
                uuid: reqBody.doc_uuid,
            },
        });
        const doc = docData[0];

        if (doc.user_uuid !== reqBody.user.uuid) {
            return res.status(400).json({ error: 'User is not same with user_uuid from doc table' });
        }

        doc.destroy({
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
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while selecting by doc_uuid',
        });
    }
};

export default deleteController;
