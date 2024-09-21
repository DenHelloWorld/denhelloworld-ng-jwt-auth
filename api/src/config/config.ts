import { config as dotConfig } from 'dotenv';

dotConfig();

const config = {
  port: process.env['PORT'],
  mongoUrl: process.env['MONGO_URL'],
  production: process.env['PRODUCTION'],
  jwtSecret: process.env['JWT_SECRET'],
};

export default config;
