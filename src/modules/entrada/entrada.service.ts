import { ConflictException, Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateEntradaDTO } from "./dto/create.dto";
import { PatchEntradaDTO, UpdateEntradaDTO } from "./dto/update.dto";
import { Entrada } from "./entity/entrada.entity";
import { ArticulosEntrada } from "../articulos_entrada/entity/arcitulos_entrada.entity";
import { Sequelize } from "sequelize-typescript";
import { OrdenProduccion } from "../orden_produccion/entity/orden_produccion.entity";
import { Insumo } from "../insumo/entity/insumo.entity";

@Injectable()
export class EntradaService extends BaseService<Entrada, CreateEntradaDTO, UpdateEntradaDTO, PatchEntradaDTO> {
  constructor(
    @InjectConnection() private readonly sequelize: Sequelize,
    @InjectModel(Entrada) private readonly EntradaModel: typeof Entrada,
    @InjectModel(ArticulosEntrada) private readonly ArticulosEntradaModel: typeof ArticulosEntrada
  ) {
    super(EntradaModel)
  }

  create(data: CreateEntradaDTO) {
    return this.sequelize.transaction(async transaction => {
      const new_entry = await this.EntradaModel.create(data, { transaction, raw: true });

       await this.ArticulosEntradaModel.bulkCreate(
        data.articulos.map(articulo => ({
          ...articulo,
          orden_id: new_entry.get()._id
        })),
        { transaction }
      );

      const createdInclude = await this.ArticulosEntradaModel.findAll({
        where: { orden_id: new_entry.get()._id },
        include: [
          {
            association: "orden_produccion",
            include: [
              { association: "articulos" }
            ]
          }
        ],
        transaction
      }) as unknown as (ArticulosEntrada & {
        orden_produccion: OrdenProduccion & {
          articulos: Insumo[];
        }
      })[];

      await Promise.all(createdInclude.map(async c => {        
        const find = c.dataValues.orden_produccion.dataValues.articulos.find(articulo => articulo.insumo_id === c.insumo_id)
        if (!find) {
          throw new ConflictException("No existe el producto en la orden de producción");
        }
        
        const new_increment = await (find as any).increment({ actual: c.dataValues.cantidad }, { transaction })
        if (new_increment.actual >= new_increment.cantidad) {
          new_increment.set({ is_complete: true })
          return new_increment.save({ transaction })
        }
        return find
      }))
      return new_entry
    })
  }
}