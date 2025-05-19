import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CreateEntradaDTO } from "../dto/create.dto";
import { Usuario } from "src/modules/usuario/entity/usuario.entity";
import { Almacen } from "src/modules/almacen/entity/almacen.entity";
import { Proveedor } from "src/modules/proveedor/entity/proveedor.entity";
import { Archivo } from "src/modules/archivo/entity/archivo.entity";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_entrada_folio',
    concurrently: true,
    unique: true,
    fields: ['folio'],
    where: { deletedAt: null }
  }]
})

export class Entrada extends Model<CreateEntradaDTO & { _id: number }, CreateEntradaDTO> {
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
  recepcionista_id: number
  @BelongsTo(() => Usuario)
  recepcionista: Usuario

  @ForeignKey(() => Almacen)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  almacen_id: number
  @BelongsTo(() => Almacen)
  almacen: Almacen

  @ForeignKey(() => Proveedor)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  proveedor_id: number
  @BelongsTo(() => Proveedor)
  proveedor: Proveedor

  @ForeignKey(() => Archivo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  firma_id: number
  @BelongsTo(() => Archivo)
  firma: Archivo
}
