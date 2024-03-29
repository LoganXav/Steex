import Agenda from 'agenda';
import config from '../config';

export default ({ mongoConnection }) => {
  return new Agenda({
    mongo: mongoConnection,
    db: { address: config.agenda.mongoConnectionString, collection: config.agenda.dbCollection },
    processEvery: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  });
  /**
   * This voodoo magic is proper from agenda.js so I'm not gonna explain too much here.
   * https://github.com/agenda/agenda#mongomongoclientinstance
   */
};
