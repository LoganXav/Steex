import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  databaseURL: process.env.MONGODB_URI,

  port: parseInt(process.env.PORT, 10),

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/api/v1',
  },

  agenda: {
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
  },

  jwtSecret: process.env.JWT_SECRET,
};
