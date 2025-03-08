import { Injectable } from '@nestjs/common';
import { CreateInsumoDTO } from './dto/create.dto';
import { UpdateInsumoDTO } from './dto/update.dto';

@Injectable()
export class InsumoService {
  create(createInsumoDto: CreateInsumoDTO) {
    return 'This action adds a new insumo';
  }

  findAll() {
    return `This action returns all insumo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumo`;
  }

  update(id: number, updateInsumoDto: UpdateInsumoDTO) {
    return `This action updates a #${id} insumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumo`;
  }
}
