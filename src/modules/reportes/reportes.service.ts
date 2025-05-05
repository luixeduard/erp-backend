import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Almacen } from '../almacen/entity/almacen.entity';

@Injectable()
export class ReportesService {
  constructor(@InjectModel(Almacen) private readonly AlmacenModel: typeof Almacen) {  }
}
