import { Injectable } from '@nestjs/common';
// import { CreateAlmacenDto } from './dto/create.dto';
// import { UpdateAlmacenDto } from './dto/update.dto';

@Injectable()
export class AlmacenService {
  create(createAlmacenDto: any) {
    return 'LLEGA SERVICE';
  }

  findAll() {
    return `This action returns all almacen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} almacen`;
  }

  update(id: number, updateAlmacenDto) {
    return `This action updates a #${id} almacen`;
  }

  patch(id: number, updateAlmacenDto) {
    return `This action updates a #${id} almacen`;
  }

  remove(id: number) {
    return `This action removes a #${id} almacen`;
  }
}
