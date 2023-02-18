import { Sequelize, DataType } from 'sequelize-typescript';

const docsModel = (sequelize: Sequelize, Sequelize: any) => {
    const Docs = sequelize.define('pastebin_docs', {
        uuid: {
            type: DataType.STRING,
        },
        user_uuid: {
            type: DataType.STRING,
        },
        content: {
            type: DataType.TEXT('long'),
        },
        public_show: {
            type: DataType.BOOLEAN,
        },
        public_daterange: {
            type: DataType.STRING,
        },
    });

    return Docs;
};

export default docsModel;
