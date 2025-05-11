import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Almacen } from "src/modules/almacen/entity/almacen.entity";
import { Insumo } from "src/modules/insumo/entity/insumo.entity";
import { CreateArticulosEntradaDTO } from "../dto/create.dto";
import { Entrada } from "src/modules/entrada/entity/entrada.entity";
import { OrdenProduccion } from "src/modules/orden_produccion/entity/orden_produccion.entity";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_entrada_articulo',
    concurrently: true,
    unique: true,
    fields: ['orden_id', 'insumo_id'],
    where: {
      deletedAt: null
    }
  }]
})

export class ArticulosEntrada extends Model<CreateArticulosEntradaDTO, CreateArticulosEntradaDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @ForeignKey(() => Entrada)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  orden_id: number
  @BelongsTo(() => Entrada)
  orden: Entrada

  @ForeignKey(() => OrdenProduccion)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  orden_produccion_id: number
  @BelongsTo(() => OrdenProduccion)
  orden_produccion: OrdenProduccion

  @ForeignKey(() => Insumo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  insumo_id: number
  @BelongsTo(() => Insumo)
  insumo: Insumo

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  cantidad: number
}
