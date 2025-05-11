import { ConflictException, Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateEntradaDTO } from "./dto/create.dto";
import { PatchEntradaDTO, UpdateEntradaDTO } from "./dto/update.dto";
import { Entrada } from "./entity/entrada.entity";
import { ArticulosEntrada } from "../articulos_entrada/entity/arcitulos_entrada.entity";
import { Sequelize } from "sequelize-typescript";
import { ArticulosEntradaDTO } from "./dto/articulo.dto";

@Injectable()
export class EntradaService extends BaseService<Entrada, CreateEntradaDTO, UpdateEntradaDTO, PatchEntradaDTO> {
  constructor(
    @InjectConnection() private readonly sequelize: Sequelize,
    @InjectModel(Entrada) private readonly EntradaModel: typeof Entrada,
    @InjectModel(ArticulosEntrada) private readonly ArticulosEntradaModel: typeof ArticulosEntrada
  ) {
    super(EntradaModel)
  }

  create(data: CreateEntradaDTO & { articulos: ArticulosEntradaDTO[] }) {
    return this.sequelize.transaction(async transaction => {
      const new_entry = await this.EntradaModel.create(data, { transaction });
      const created = await this.ArticulosEntradaModel.bulkCreate(data.articulos.map(articulo =>
      ({
        ...articulo,
        orden_id: new_entry._id
      })), {
        transaction,
        include: [
          {
            association: "orden_produccion_id",
            include: [
              { association: "articulos" }
            ]
          }
        ]
      })
      await Promise.all(created.map(async c => {
        const find = c.orden_produccion.articulos.find(articulo => articulo.insumo_id === c.insumo_id)
        if (!find) {
          throw new ConflictException("No existe el producto en la orden de producción");
        }
        const new_increment = await find.increment({ cantidad: c.cantidad * -1 }, { transaction })
        if (new_increment.cantidad <= 0) {
          new_increment.set({ is_complete: true })
          return new_increment.save({ transaction })
        }
        return find
      }))
      return new_entry
    })
  }
}