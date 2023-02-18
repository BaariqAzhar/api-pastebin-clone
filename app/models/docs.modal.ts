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
    });

    return Docs;
};

export default docsModel;
