import { Injectable } from '@nestjs/common';
import { CreateMedidaDto } from './dto/create.dto';
import { UpdateMedidaDto } from './dto/update.dto';

@Injectable()
export class MedidaService {
  create(createMedidaDto: CreateMedidaDto) {
    return 'This action adds a new medida';
  }

  findAll() {
    return `This action returns all medida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medida`;
  }

  update(id: number, updateMedidaDto: UpdateMedidaDto) {
    return `This action updates a #${id} medida`;
  }

  remove(id: number) {
    return `This action removes a #${id} medida`;
  }
}
