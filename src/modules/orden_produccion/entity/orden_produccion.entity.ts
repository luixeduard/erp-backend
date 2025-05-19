import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CreateOrdenDTO } from "../dto/create.dto";
import { Usuario } from "src/modules/usuario/entity/usuario.entity";
import { Cliente } from "src/modules/cliente/entity/cliente.entity";
import { StatusOrden } from "../enum/status.enum";
import { ArticulosOrden } from "src/modules/articulos_orden/entity/arcitulos_orden.entity";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_orden_folio',
    concurrently: true,
    unique: true,
    fields: ['folio'],
    where: { deletedAt: null }
  }]
})

export class OrdenProduccion extends Model<CreateOrdenDTO & { _id: number }, CreateOrdenDTO> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  _id: number

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  folio: string

  @ForeignKey(() => Usuario)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  user_id: number
  @BelongsTo(() => Usuario)
  user: Usuario

  @ForeignKey(() => Cliente)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  cliente_id: number
  @BelongsTo(() => Cliente)
  cliente: Cliente

  @Column({
    allowNull: false,
    type: DataType.DATEONLY
  })
  estimated_date: Date

  @Column({
    allowNull: false,
    type: DataType.ENUM(...Object.values(StatusOrden))
  })
  status: StatusOrden

  @HasMany(() => ArticulosOrden)
  articulos: ArticulosOrden[]
}
