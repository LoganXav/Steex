import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  databaseURL: process.env.MONGODB_URI,

  port: parseInt(process.env.PORT, 10),

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  agenda: {
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
  },
};
