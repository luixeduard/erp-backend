import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateProveedorDTO } from "../dto/create.dto";

@Table({
  paranoid: true,
  indexes: [
    {
      name: 'unique_proveedor_razon_social',
      concurrently: true,
      unique: true,
      fields: ['razon_social'],
      where: {
        deletedAt: null
      }
    },
    {
      name: 'unique_proveedor_rfc',
      concurrently: true,
      unique: true,
      fields: ['rfc'],
      where: {
        deletedAt: null
      }
    }
  ]
})

export class Proveedor extends Model<CreateProveedorDTO, CreateProveedorDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  nombre: string

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  rfc: string

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  representante: string

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  razon_social: string
}
