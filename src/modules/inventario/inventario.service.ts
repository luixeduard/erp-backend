import { Injectable } from '@nestjs/common';
import { CreateInventarioDTO } from './dto/create.dto';
import { UpdateInventarioDTO } from './dto/update.dto';
// import { CreateInventarioDto } from './dto/create.dto';
// import { UpdateInventarioDto } from './dto/update.dto';

@Injectable()
export class InventarioService {
  create(createInventarioDto: CreateInventarioDTO) {
    return 'This action adds a new inventario';
  }

  findAll() {
    return `This action returns all inventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDTO) {
    return `This action updates a #${id} inventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }
}
