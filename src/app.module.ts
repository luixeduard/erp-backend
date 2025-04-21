import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/configuration';
import validationSchema from './core/configuration/schema/validationSchema';
import DatabaseModule from './core/database';
import { ColorModule } from './modules/color/color.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      validationSchema,
      load: [configuration],
      isGlobal: true
    }),
    DatabaseModule,
    ColorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
