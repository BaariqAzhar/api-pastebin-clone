import { Request, Response } from 'express';

const registerController = async (req: Request, res: Response) => {
    return res.json({ hello: 'world' });
};

export default registerController;
