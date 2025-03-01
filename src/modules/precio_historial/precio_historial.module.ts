import { Module } from '@nestjs/common';
import { PrecioHistorialService } from './precio_historial.service';
import { PrecioHistorialController } from './precio_historial.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrecioHistorial } from './entity/precio_historial.entity';

@Module({
  imports:[SequelizeModule.forFeature([PrecioHistorial])],
  controllers: [PrecioHistorialController],
  providers: [PrecioHistorialService],
})
export class PrecioHistorialModule {}
