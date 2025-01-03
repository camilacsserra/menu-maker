import { Request, Response } from 'express';

import { LoginService } from '@app/services/auth/LoginService';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await LoginService({ email, password });

  res.json(data);
};
