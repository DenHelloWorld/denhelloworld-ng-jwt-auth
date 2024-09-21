import mongoose from 'mongoose';
import config from '../config/config';

const db = async () => {
  if (typeof config.mongoUrl === 'string') {
    await mongoose
      .connect(config.mongoUrl, {
        // added to the connection string to disable the use of IPv6
        family: 4,
      })
      .then(() => {
        console.log('Databasde connected');
      })
      .catch(e => {
        console.error('Error cinection MongoDb', e);
      });
  }
};

export default db;
