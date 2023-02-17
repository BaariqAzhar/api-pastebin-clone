"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig = {
    /*
     * First five parameters are for MySQL connection.
     */
    HOST: process.env['DB_HOST'],
    USER: process.env['DB_USER'],
    PASSWORD: process.env['DB_PASSWORD'],
    DB: process.env['DB_DB'],
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
exports.default = dbConfig;
