import { Module } from '@nestjs/common';
import { ArticulosOrdenService } from './articulos_orden.service';
import { ArticulosOrdenController } from './articulos_orden.controller';
import { ArticulosOrden } from './entity/arcitulos_orden.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ArticulosOrden])],
  controllers: [ArticulosOrdenController],
  providers: [ArticulosOrdenService],
})
export class ArticulosOrdenModule { }
