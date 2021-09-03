import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true, 
    }),
    UsersModule,
    DatabaseModule,
  ],
})
export class AppModule {}
