import 'reflect-metadata';
import express from 'express';
import config from './config';
import Logger from './loaders/logger';
import loaders from './loaders';

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, () => {
    Logger.info(
      `
    ################################################1
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################1
    `,
    ).on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
  });
}
startServer();
