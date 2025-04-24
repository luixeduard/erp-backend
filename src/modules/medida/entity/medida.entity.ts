import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateMedidaDTO } from "../dto/create.dto";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_medida',
    concurrently: true,
    unique: true,
    fields: ['nombre', 'ancho', 'largo', 'peso', 'volumen'],
    where: {
      deletedAt: null
    }
  }]
})

export class Medida extends Model<CreateMedidaDTO, CreateMedidaDTO> {
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
    type: DataType.FLOAT,
    allowNull: true
  })
  ancho: number

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  largo: number

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  alto: number

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  peso: number

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  volumen: number
}
