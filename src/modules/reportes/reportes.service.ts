import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Almacen } from '../almacen/entity/almacen.entity';
import { PorAlmacenDTO } from './dto/porAlmacen.dto';
import { Color } from '../color/entity/color.entity';
import { Insumo } from '../insumo/entity/insumo.entity';
import { Attributes, FindAndCountOptions } from 'sequelize';
import { Clasificacion } from '../inventario/enums/clasificacion.enum';

@Injectable()
export class ReportesService {
  constructor(
    @InjectModel(Insumo) private readonly InsumoModel: typeof Insumo
  ) { }

  getByAlmacen(query: Omit<FindAndCountOptions<Attributes<Insumo>>, "group">, almacen_id: number, clasificacion: Clasificacion) {
    return this.InsumoModel.findAndCountAll({
      ...query,
      include: [
        {
          association: "inventarios",
          where: {
            almacen_id,
            clasificacion
          }
        }

      ]
    })
  }
}
