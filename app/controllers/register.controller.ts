import { Request, Response } from 'express';

const registerController = async (req: Request, res: Response) => {
    return res.json({ hello: req.body });
};

export default registerController;
