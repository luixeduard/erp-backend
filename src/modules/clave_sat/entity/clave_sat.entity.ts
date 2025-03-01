import { BelongsTo, Column, DataType, ForeignKey, Model } from "sequelize-typescript";

export class ClaveSat extends Model<ClaveSat> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  clave: number

  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  descripcion: string

  @ForeignKey(() => ClaveSat)
  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  clave_sat_id: string
  @BelongsTo(() => ClaveSat)
  clave_sat: ClaveSat
}
