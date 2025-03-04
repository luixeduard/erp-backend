import { Injectable } from '@nestjs/common';
import { CreateInsumoDto } from './dto/create.dto';
import { UpdateInsumoDto } from './dto/update.dto';

@Injectable()
export class InsumoService {
  create(createInsumoDto: CreateInsumoDto) {
    return 'This action adds a new insumo';
  }

  findAll() {
    return `This action returns all insumo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumo`;
  }

  update(id: number, updateInsumoDto: UpdateInsumoDto) {
    return `This action updates a #${id} insumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumo`;
  }
}
