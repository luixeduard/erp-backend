import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Almacen } from './entity/almacen.entity';

@Module({
  imports: [SequelizeModule.forFeature([Almacen])],
  controllers: [AlmacenController],
  providers: [AlmacenService],
})
export class AlmacenModule { }
