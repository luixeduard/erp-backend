import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaController } from './entrada.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Entrada } from './entity/entrada.entity';
import { ArticulosEntrada } from '../articulos_entrada/entity/arcitulos_entrada.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Entrada, ArticulosEntrada])
  ],
  controllers: [EntradaController],
  providers: [EntradaService],
})
export class EntradaModule { }
