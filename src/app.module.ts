import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../ormconfig';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
