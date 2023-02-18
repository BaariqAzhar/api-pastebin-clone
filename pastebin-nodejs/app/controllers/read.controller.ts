import { Request, Response } from 'express';
import moment from 'moment';

import db from '../models';

const Docs = db.docs;

// todo
// O Get params
// O validadate params
// O validate is public show?
// O validate is public daterange?
const readController = async (req: Request, res: Response) => {
    const reqParams = req.params;

    if (reqParams.doc_uuid === undefined) {
        return res.status(400).json({ error: 'Parameter doc_uuid is required' });
    }

    Docs.findAll({
        where: {
            uuid: reqParams.doc_uuid,
        },
    })
        .then((docs: any) => {
            if (docs.length === 0) {
                return res.status(400).json({ error: 'No docs found' });
            }

            if (docs[0].public_show === false) {
                return res.status(400).json({ error: 'This doc is not public' });
            }

            const current = moment();
            const startEnd = docs[0].public_daterange.split('-');
            const start = moment(startEnd[0].trim(), 'YYYY/MM/DD HH:mm');
            const end = moment(startEnd[1].trim(), 'YYYY/MM/DD HH:mm');

            const isBetween = current.isBetween(start, end);

            if (!isBetween) {
                return res.status(400).json({ error: 'The public doc time has expired', validTime: docs[0].public_daterange });
            }

            return res.status(200).json({
                doc_uuid: docs[0].uuid,
                content: docs[0].content,
                public_show: docs[0].public_show,
                public_daterange: docs[0].public_daterange,
            });
        })
        .catch((err: any) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while validating email',
            });
        });
};

export default readController;
