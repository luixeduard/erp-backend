import { BelongsTo, Column, DataType, ForeignKey, Model } from "sequelize-typescript";
import { Inventario } from "src/modules/inventario/entity/inventario.entity";

export class PrecioHistorial extends Model<PrecioHistorial> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @ForeignKey(() => Inventario)
  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  inventario_id: number
  @BelongsTo(() => Inventario)
  inventario: Inventario

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  precio_previo: number

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  precio_actual: number
}
