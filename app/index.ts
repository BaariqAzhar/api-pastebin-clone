import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import db from './models';

import registerRoutes from './routes/register.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Sync database
db.sequelize.sync();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server, yeayy het');
});

registerRoutes(app);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
