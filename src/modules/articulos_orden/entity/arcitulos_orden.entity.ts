import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Insumo } from "src/modules/insumo/entity/insumo.entity";
import { CreateArticulosOrdenDTO } from "../dto/create.dto";
import { OrdenProduccion } from "src/modules/orden_produccion/entity/orden_produccion.entity";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_orden_articulo',
    concurrently: true,
    unique: true,
    fields: ['orden_produccion_id', 'insumo_id'],
    where: {
      deletedAt: null
    }
  }]
})

export class ArticulosOrden extends Model<CreateArticulosOrdenDTO & { actual: number }, CreateArticulosOrdenDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

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

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0
  })
  actual: number

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true
  })
  is_complete: boolean
}
