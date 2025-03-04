import { Column, DataType, Model, Table } from "sequelize-typescript";

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

export class Almacen extends Model<Almacen> {
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
}
