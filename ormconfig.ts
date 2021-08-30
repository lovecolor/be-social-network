import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
require('dotenv').config();


export const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.host,
  port: 5432,
  username: process.env.user,
  password: process.env.password,
  database: 'SocialNetwork',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migration/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
