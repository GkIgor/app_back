import { Module } from '@nestjs/common';
import { dataBaseProviders } from './config/database.provider';

@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class DatabaseModule {}
