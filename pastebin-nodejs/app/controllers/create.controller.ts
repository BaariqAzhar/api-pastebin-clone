import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import db from '../models';

const Docs = db.docs;

// todo
// O validate email && password
// OC validate doc_content, doc_public_show, doc_public_daterange
// O create doc_uuid
// validate public
// save
const createController = (req: Request, res: Response) => {
    const reqBody = req.body;
    const reqUser = req.body.user;

    if (!reqBody.doc_content) {
        return res.status(400).json({ error: 'Doc content is required' });
    }
    if (reqBody.doc_public_show === undefined) {
        return res.status(400).json({ error: 'Doc public show is required' });
    }
    let publicDateRange = '';
    if (reqBody.doc_public_daterange) {
        const errorText =
            'Public date range is invalid. the format should be YYYY/MM/DD HH:mm - YYYY/MM/DD HH:mm. Example 2023/02/18 11:00 - 2023/02/18 13:00';

        if (!reqBody.doc_public_daterange.includes('-')) {
            return res.status(400).json({
                error: errorText,
            });
        }
        const startEnd = reqBody.doc_public_daterange.split('-');
        const start = moment(startEnd[0].trim(), 'YYYY/MM/DD HH:mm');
        const end = moment(startEnd[1].trim(), 'YYYY/MM/DD HH:mm');

        if (!start.isValid() || !end.isValid()) {
            return res.status(400).json({
                error: errorText,
            });
        }

        publicDateRange = `${start.format('YYYY/MM/DD HH:mm')}-${end.format('YYYY/MM/DD HH:mm')}`;
    }

    const doc_uuid = uuidv4();

    const newDoc = {
        uuid: doc_uuid,
        user_uuid: reqUser.uuid,
        content: reqBody.doc_content,
        public_show: reqBody.doc_public_show,
        public_daterange: publicDateRange,
    };

    Docs.create(newDoc)
        .then((doc: any) => {
            return res.status(200).json({
                info: 'New doc just created',
                newDoc: {
                    uuid: doc.uuid,
                    content: doc.content,
                    public_show: Boolean(doc.public_show) ? true : false,
                    public_daterange: doc.public_daterange,
                },
            });
        })
        .catch((err: any) => {
            return res.status(500).json({
                error: err.message || 'Some error occurred while creating the doc',
            });
        });
};

export default createController;
