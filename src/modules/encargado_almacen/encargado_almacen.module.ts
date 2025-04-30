import { Module } from '@nestjs/common';
import { EncargadoAlmacenService } from './encargado_almacen.service';
import { EncargadoAlmacenController } from './encargado_almacen.controller';
import { EncargadoAlmacen } from './entity/encargado_almacen.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([EncargadoAlmacen])],
  controllers: [EncargadoAlmacenController],
  providers: [EncargadoAlmacenService],
})
export class EncargadoAlmacenModule { }
