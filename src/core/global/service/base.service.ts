import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model, ModelCtor } from 'sequelize-typescript';
import { CreationAttributes, Attributes, FindOptions, FindAndCountOptions, WhereAttributeHashValue } from 'sequelize'; // Importar desde sequelize

@Injectable()
export class BaseService<
  T extends Model,
  CreateDTO extends CreationAttributes<T>,
  UpdateDto extends Partial<Attributes<T>>,
  PatchDto extends Partial<Attributes<T>>,

> {
  constructor(@InjectModel(Model) private readonly model: ModelCtor<T>) { }

  async create(data: CreateDTO): Promise<T> {
    return this.model.create(data); // Conversión segura
  }

  async findAll(query: Omit<FindAndCountOptions<Attributes<T>>, "group">): Promise<{
    rows: T[];
    count: number;
  }> {
    return this.model.findAndCountAll(query); // Conversión segura
  }

  async findOne(id: number): Promise<T> {
    const find = await this.model.findByPk(id);
    if (!find) {
      throw new NotFoundException("El registro no existe")
    }
    return find
  }

  async update(_id: string | number, data: UpdateDto): Promise<T> {
    const [affected, rows] = await this.model.update(data, { where: { _id } as WhereAttributeHashValue<Attributes<T>["_id"]>, returning: true });
    if (affected === 0) {
      throw new NotFoundException("El registro no existe")
    }
    return rows[0]
  }

  async remove(_id: string | number): Promise<void> {
    const result = await this.model.destroy({ where: { _id } as WhereAttributeHashValue<Attributes<T>["_id"]> });
    if (result === 0) {
      throw new NotFoundException('El registro no existe');
    }
  }

  async patch(_id: string | number, data: PatchDto): Promise<T> {
    const [affected, rows] = await this.model.update(data, { where: { _id } as WhereAttributeHashValue<Attributes<T>["_id"]>, returning: true });
    if (affected === 0) {
      throw new NotFoundException("El registro no existe")
    }
    return rows[0]
  }
}