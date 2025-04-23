import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CreateClaveSatDTO } from "../dto/create.dto";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_clave_sat',
    concurrently: true,
    unique: true,
    fields: ['clave'],
    where: {
      deletedAt: null
    }
  }]
})
export class ClaveSat extends Model<CreateClaveSatDTO, CreateClaveSatDTO> {
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
    type: DataType.INTEGER
  })
  clave_sat_id: number
  @BelongsTo(() => ClaveSat)
  clave_sat: ClaveSat
}
