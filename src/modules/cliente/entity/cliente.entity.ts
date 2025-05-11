import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateClienteDTO } from "../dto/create.dto";

@Table({
  paranoid: true,
  indexes: [
    {
      name: 'unique_cliente_razon_social',
      concurrently: true,
      unique: true,
      fields: ['razon_social'],
      where: {
        deletedAt: null
      }
    },
    {
      name: 'unique_cliente_rfc',
      concurrently: true,
      unique: true,
      fields: ['rfc'],
      where: {
        deletedAt: null
      }
    }
  ]
})

export class Cliente extends Model<CreateClienteDTO, CreateClienteDTO> {
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
