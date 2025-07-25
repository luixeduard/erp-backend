import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CreateAlmacenDTO } from "../dto/create.dto";
import { Inventario } from "src/modules/inventario/entity/inventario.entity";

@Table({
  paranoid: true,
  indexes: [{
    name: 'unique_almacen',
    concurrently: true,
    unique: true,
    fields: ['nombre'],
    where: {
      deletedAt: null
    }
  }]
})

export class Almacen extends Model<CreateAlmacenDTO, CreateAlmacenDTO> {
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
    allowNull: false
  })
  direccion: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  coor_x: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  coor_y: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  enabled: boolean

  @HasMany(() => Inventario)
  inventarios: Inventario[]
}
