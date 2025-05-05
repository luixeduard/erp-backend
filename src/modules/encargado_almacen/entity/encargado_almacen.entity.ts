import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CreateEncargadoAlmacenDTO } from "../dto/create.dto";
import { Usuario } from "src/modules/usuario/entity/usuario.entity";
import { Almacen } from "src/modules/almacen/entity/almacen.entity";

@Table({ paranoid: true })

export class EncargadoAlmacen extends Model<CreateEncargadoAlmacenDTO, CreateEncargadoAlmacenDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @ForeignKey(() => Usuario)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  usuario_id: number
  @BelongsTo(() => Usuario)
  usuario: Usuario

  @ForeignKey(() => Almacen)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  almacen_id: number
  @BelongsTo(() => Almacen)
  almacen: Almacen
}
