import { Sequelize } from 'sequelize-typescript';
import dbConfig from '../config/db.config';
import usersModel from './users.model';

const otherConfig = {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, otherConfig as any);

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = usersModel(sequelize, Sequelize);

export default db;
