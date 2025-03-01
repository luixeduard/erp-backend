import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/configuration';
import validationSchema from './core/configuration/schema/validationSchema';
import database from './core/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      validationSchema,
      load: [configuration],
      isGlobal: true
    }),
    database
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
