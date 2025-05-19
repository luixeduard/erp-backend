import { ConflictException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { ArticulosOrden } from '../articulos_orden/entity/arcitulos_orden.entity';
import { CreateOrdenDTO } from './dto/create.dto';
import { UpdateOrdenDTO, PatchOrdenDTO } from './dto/update.dto';
import { OrdenProduccion } from './entity/orden_produccion.entity';
import { ArticulosOrdenDTO } from './dto/articulo_orden.dto';

@Injectable()
export class OrdenProduccionService extends BaseService<OrdenProduccion, CreateOrdenDTO, UpdateOrdenDTO, PatchOrdenDTO> {
  constructor(
    @InjectConnection() private readonly sequelize: Sequelize,
    @InjectModel(OrdenProduccion) private readonly OrdenProduccionModel: typeof OrdenProduccion,
    @InjectModel(ArticulosOrden) private readonly ArticulosOrdenModel: typeof ArticulosOrden
  ) {
    super(OrdenProduccionModel)
  }

  create(data: CreateOrdenDTO) {
    return this.sequelize.transaction(async transaction => {
      const new_entry = await this.OrdenProduccionModel.create(data, { transaction });
      await this.ArticulosOrdenModel.bulkCreate(data.articulos.map(articulo =>
      ({
        ...articulo,
        orden_produccion_id: new_entry.get()._id,
        is_complete: false,
      })), {
        transaction
      })
      return new_entry
    })
  }
}