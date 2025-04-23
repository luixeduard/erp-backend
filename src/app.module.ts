import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/configuration';
import validationSchema from './core/configuration/schema/validationSchema';
import DatabaseModule from './core/database';
import { ColorModule } from './modules/color/color.module';
import { AlmacenModule } from './modules/almacen/almacen.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      validationSchema,
      load: [configuration],
      isGlobal: true
    }),
    DatabaseModule,
    ColorModule,
    AlmacenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
