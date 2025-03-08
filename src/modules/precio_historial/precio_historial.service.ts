import { Injectable } from '@nestjs/common';
import { CreatePrecioHistorialDTO } from './dto/create.dto';
import { UpdatePrecioHistorialDTO } from './dto/update.dto';

@Injectable()
export class PrecioHistorialService {
  create(createPrecioHistorialDto: CreatePrecioHistorialDTO) {
    return 'This action adds a new precioHistorial';
  }

  findAll() {
    return `This action returns all precioHistorial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} precioHistorial`;
  }

  update(id: number, updatePrecioHistorialDto: UpdatePrecioHistorialDTO) {
    return `This action updates a #${id} precioHistorial`;
  }

  remove(id: number) {
    return `This action removes a #${id} precioHistorial`;
  }
}
