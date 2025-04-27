import { Module } from '@nestjs/common';
import { ArchivoService } from './archivo.service';
import { ArchivoController } from './archivo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Archivo } from './entity/archivo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Archivo])],
  controllers: [ArchivoController],
  providers: [ArchivoService],
})
export class ArchivoModule { }
