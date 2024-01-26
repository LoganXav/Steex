import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';
import dependencyInjectorLoader from './dependencyInjector';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const userModel = {
    name: 'userModel',
    // Notice the require syntax and the '.default'
    model: require('../models/user').default,
  };

  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel,
      // whateverModel
    ],
  });

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
