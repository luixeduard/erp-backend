import { Module } from '@nestjs/common';
import { ArticulosEntradaService } from './articulos_entrada.service';
import { ArticulosEntradaController } from './articulos_entrada.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticulosEntrada } from './entity/arcitulos_entrada.entity';

@Module({
  imports: [SequelizeModule.forFeature([ArticulosEntrada])],
  controllers: [ArticulosEntradaController],
  providers: [ArticulosEntradaService],
})
export class ArticulosEntradaModule {}
