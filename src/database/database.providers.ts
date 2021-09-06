import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.HOST,
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'SocialNetwork',
        entities: ['dist/src/**/*.entity{.ts,.js}'],
        migrations: ['dist/src/database/migrations/*.js'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      }),
  },
];
