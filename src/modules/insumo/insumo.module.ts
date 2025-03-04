import { Module } from '@nestjs/common';
import { InsumoService } from './insumo.service';
import { InsumoController } from './insumo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Insumo } from './entity/insumo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Insumo])],
  controllers: [InsumoController],
  providers: [InsumoService],
})
export class InsumoModule { }
