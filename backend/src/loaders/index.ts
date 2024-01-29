import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';
import dependencyInjectorLoader from './dependencyInjector';
import UserModel from '../models/user'; // Adjust the path based on your project structure

export default async ({ expressApp }) => {
  Logger.info('debugger 2');

  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const userModel = {
    name: 'userModel',
    model: UserModel,
  };

  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [userModel],
  });
  Logger.info(agenda);

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
