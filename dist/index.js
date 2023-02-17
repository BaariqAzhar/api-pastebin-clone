"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = __importDefault(require("./models"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Sync database
models_1.default.sequelize.sync();
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server, yeayy het');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
