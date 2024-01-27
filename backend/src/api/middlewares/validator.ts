import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { UserInputDTO } from '~/interfaces/schema';

export const validate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserInputDTO.safeParse(req.body);
    next();
  } catch (error) {
    let err = error;
    if (err instanceof z.ZodError) {
      err = err.issues.map(e => ({ path: e.path[0], message: e.message }));
    }
    return res.status(409).json({
      status: 'failed',
      error: err,
    });
  }
};
