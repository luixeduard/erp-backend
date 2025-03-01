import { Injectable } from '@nestjs/common';
import { CreatePrecioHistorialDto } from './dto/create.dto';
import { UpdatePrecioHistorialDto } from './dto/update.dto';

@Injectable()
export class PrecioHistorialService {
  create(createPrecioHistorialDto: CreatePrecioHistorialDto) {
    return 'This action adds a new precioHistorial';
  }

  findAll() {
    return `This action returns all precioHistorial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} precioHistorial`;
  }

  update(id: number, updatePrecioHistorialDto: UpdatePrecioHistorialDto) {
    return `This action updates a #${id} precioHistorial`;
  }

  remove(id: number) {
    return `This action removes a #${id} precioHistorial`;
  }
}
