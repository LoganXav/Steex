import express from 'express';
import cors from 'cors';
import config from '~/config';
import routes from '~/api';
import cookieParser from 'cookie-parser';

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   */

  app.post('/status', (req, res) => {
    res.status(200).json({ name: 'Healthy!' });
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cookieParser());
  app.use(cors());
  app.use(express.json());

  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ response: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        defaultUserMessage: err.message || 'Something went wrong',
        message: err.message || 'Something went wrong',
        status: err.status || 500,
        data: err.data || null,
      },
    });
  });
};
