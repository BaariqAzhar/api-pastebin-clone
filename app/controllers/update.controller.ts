import { Request, Response } from 'express';

import db from '../models';

const Docs = db.docs;

const updateController = async (req: Request, res: Response) => {
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

        Docs.update(
            {
                uuid: reqBody.doc_uuid,
                content: reqBody.doc_content || undefined,
                public_show: (Boolean(reqBody.doc_public_show) ? true : false) || undefined,
                public_daterange: reqBody.doc_public_daterange || undefined,
            },
            {
                where: {
                    uuid: reqBody.doc_uuid,
                },
            }
        )
            .then((doc: any) => {
                return res.status(200).json({
                    message: 'update suscessfully',
                });
            })
            .catch((err: any) => {
                res.status(500).send({
                    message: 'Some error occurred while updating doc',
                });
            });
    } catch (error: any) {
        res.status(500).send({
            message: "Can't found doc based on doc_uuid",
        });
    }
};

export default updateController;
