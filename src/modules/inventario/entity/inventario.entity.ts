import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Almacen } from "src/modules/almacen/entity/almacen.entity";
import { Clasificacion } from "../enums/clasificacion.enum";
import { Insumo } from "src/modules/insumo/entity/insumo.entity";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_inventario',
    concurrently: true,
    unique: true,
    fields: ['almacen_id', 'insumo_id', 'clasificacion'],
    where: {
      deletedAt: null
    }
  }]
})

export class Inventario extends Model<Inventario> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @ForeignKey(() => Almacen)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  almacen_id: number
  @BelongsTo(() => Almacen)
  almacen: Almacen

  @ForeignKey(() => Insumo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  insumo_id: number
  @BelongsTo(() => Insumo)
  insumo: Insumo

  @Column({
    type: DataType.ENUM(...Object.values(Clasificacion)),
    allowNull: false,
  })
  clasificacion: Clasificacion

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  precio: number
}
