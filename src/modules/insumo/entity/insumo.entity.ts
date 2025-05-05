import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ClaveSat } from "src/modules/clave_sat/entity/clave_sat.entity";
import { Color } from "src/modules/color/entity/color.entity";
import { Medida } from "src/modules/medida/entity/medida.entity";
import { CreateInsumoDTO } from "../dto/create.dto";
import { Inventario } from "src/modules/inventario/entity/inventario.entity";

@Table({
  paranoid: true,
  indexes: [
    {
      name: 'unique_insumo_clave',
      concurrently: true,
      unique: true,
      fields: ['clave'],
      where: {
        deletedAt: null
      }
    },
    {
      name: 'unique_insumo_nombre',
      concurrently: true,
      unique: true,
      fields: ['nombre'],
      where: {
        deletedAt: null
      }
    }
  ]
})

export class Insumo extends Model<CreateInsumoDTO, CreateInsumoDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  clave: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descripcion: string

  @ForeignKey(() => Medida)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  medida_id: number
  @BelongsTo(() => Medida)
  medida: Medida


  @ForeignKey(() => Color)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  color_id: number
  @BelongsTo(() => Color)
  color: Color

  @ForeignKey(() => ClaveSat)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  clave_sat_id: number
  @BelongsTo(() => ClaveSat)
  clave_sat: ClaveSat

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  clave_unidad_sat: string

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  costo: number

  @HasMany(() => Inventario)
  inventarios: Inventario[]
}
