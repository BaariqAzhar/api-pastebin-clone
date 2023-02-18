import { Sequelize, DataType } from 'sequelize-typescript';

const usersModel = (sequelize: Sequelize, Sequelize: any) => {
    const Users = sequelize.define('pastebin_users', {
        uuid: {
            type: DataType.STRING,
        },
        email: {
            type: DataType.STRING,
        },
        password: {
            type: DataType.STRING,
        },
    });

    return Users;
};

export default usersModel;
