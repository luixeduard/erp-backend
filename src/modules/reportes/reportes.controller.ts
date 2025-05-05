import { Controller, DefaultValuePipe, Get, Post, Query } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { PorAlmacenDTO } from './dto/porAlmacen.dto';
import { ParseSequelizePipe } from 'src/core/pipe/parse-sequelize.pipe';
import { FindAndCountOptions } from 'sequelize';
import { Almacen } from '../almacen/entity/almacen.entity';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) { }
  
  @Get()
  obtenerPorAlmacen(@Query(new DefaultValuePipe(false), ParseSequelizePipe) query:  PorAlmacenDTO) {
    return this.reportesService.getByAlmacen(query as unknown as Omit<FindAndCountOptions<Almacen>, "group">, query.almacen_id, query.clasificacion)
  }
}
