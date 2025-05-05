import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaController } from './entrada.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Entrada } from './entity/entrada.entity';

@Module({
  imports: [SequelizeModule.forFeature([Entrada])],
  controllers: [EntradaController],
  providers: [EntradaService],
})
export class EntradaModule { }
