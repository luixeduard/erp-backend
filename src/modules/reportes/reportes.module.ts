import { Module } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { ReportesController } from './reportes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Insumo } from '../insumo/entity/insumo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Insumo])],
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}
