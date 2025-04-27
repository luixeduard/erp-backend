import { CreateArchivoDTO } from "../dto/create.dto";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { TipoArchivo } from "../enum/tipo_archivo.enum";
@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_archivo_src',
    concurrently: true,
    unique: true,
    fields: ['src'],
    where: { deletedAt: null }
  }]
})

export class Archivo extends Model<CreateArchivoDTO, CreateArchivoDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @Column({
    type: DataType.ENUM(...Object.values(TipoArchivo)),
    allowNull: false
  })
  tipo: TipoArchivo

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  src: string
}
