import { Router, Request, Response, NextFunction } from 'express';
import { validate } from '../middlewares/validator';
import { Logger } from 'winston';
import Container from 'typedi';
import AuthService from '~/services/auth';
import { IUserInputDTO } from '~/interfaces/schema';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);
};

route.post('/signup', validate, async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  logger.debug('Calling Sign-up endpoint with body: %o', req.body);
  try {
    const authServiceInstance = Container.get(AuthService);
    const { token } = await authServiceInstance.SignUp(req.body as IUserInputDTO);

    return res.status(201).json({ token });
  } catch (e) {
    logger.error('🔥 error: %o', e);
    return next(e);
  }
});
