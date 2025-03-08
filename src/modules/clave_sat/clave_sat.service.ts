import { Injectable } from '@nestjs/common';
// import { CreateClaveSatDto } from './dto/create.dto';
// import { UpdateClaveSatDto } from './dto/update.dto';

@Injectable()
export class ClaveSatService {
  create(createClaveSatDto: any) {
    return 'This action adds a new claveSat';
  }

  findAll() {
    return `This action returns all claveSat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} claveSat`;
  }

  update(id: number, updateClaveSatDto:any) {
    return `This action updates a #${id} claveSat`;
  }

  remove(id: number) {
    return `This action removes a #${id} claveSat`;
  }
}
