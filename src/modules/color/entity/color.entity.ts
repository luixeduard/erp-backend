import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateColorDTO } from "../dto/create.dto";

@Table({
  paranoid: true,
  indexes: [
    {
      name: 'unique_color',
      concurrently: true,
      unique: true,
      fields: ['nombre'],
      where: {
        deletedAt: null
      }
    },
    {
      name: 'unique_color_codigo',
      concurrently: true,
      unique: true,
      fields: ['codigo'],
      where: {
        deletedAt: null
      }
    }
  ]
})

export class Color extends Model<CreateColorDTO, CreateColorDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre: string

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  codigo: string
}
