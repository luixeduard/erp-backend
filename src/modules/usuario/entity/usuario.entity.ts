import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateUsuarioDTO } from "../dto/create.dto";

@Table(
  {
    paranoid: true,
    indexes: [
      {
        name: 'unique_usuario_email',
        concurrently: true,
        unique: true,
        fields: ['email'],
        where: { deletedAt: null }
      },

    ]
  }
)
export class Usuario extends Model<CreateUsuarioDTO, CreateUsuarioDTO> {
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
  nombre: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  paterno: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  materno: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pwd: string
}
