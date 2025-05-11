import { Module } from '@nestjs/common';
import { OrdenProduccionService } from './orden_produccion.service';
import { OrdenProduccionController } from './orden_produccion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdenProduccion } from './entity/orden_produccion.entity';
import { ArticulosOrden } from '../articulos_orden/entity/arcitulos_orden.entity';

@Module({
  imports: [SequelizeModule.forFeature([OrdenProduccion, ArticulosOrden])],
  controllers: [OrdenProduccionController],
  providers: [OrdenProduccionService],
})
export class OrdenProduccionModule {}
