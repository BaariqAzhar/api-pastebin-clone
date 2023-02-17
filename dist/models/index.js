"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const db_config_1 = __importDefault(require("../config/db.config"));
const otherConfig = {
    host: db_config_1.default.HOST,
    dialect: db_config_1.default.dialect,
    operatorAliases: false,
    pool: {
        max: db_config_1.default.pool.max,
        min: db_config_1.default.pool.min,
        acquire: db_config_1.default.pool.acquire,
        idle: db_config_1.default.pool.idle,
    },
};
const sequelize = new sequelize_typescript_1.Sequelize((db_config_1.default.DB = ''), (db_config_1.default.USER = ''), (db_config_1.default.PASSWORD = ''), otherConfig);
const db = {};
db.Sequelize = sequelize_typescript_1.Sequelize;
db.sequelize = sequelize;
exports.default = db;
