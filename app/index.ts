import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import db from './models';
import bodyParser from 'body-parser';

import authenticationRoutes from './routes/authentication.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// Sync database
db.sequelize.sync();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server, yeayy het');
});

authenticationRoutes(app);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
