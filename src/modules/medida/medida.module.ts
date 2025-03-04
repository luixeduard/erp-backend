import { Module } from '@nestjs/common';
import { MedidaService } from './medida.service';
import { MedidaController } from './medida.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medida } from './entity/medida.entity';

@Module({
  imports: [SequelizeModule.forFeature([Medida])],
  controllers: [MedidaController],
  providers: [MedidaService],
})
export class MedidaModule { }
