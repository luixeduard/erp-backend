import { Injectable } from '@nestjs/common';
import { CreateColorDTO } from './dto/create.dto';
import { UpdateColorDTO } from './dto/update.dto';

@Injectable()
export class ColorService {
  create(CreateColorDTO: CreateColorDTO) {
    return 'This action adds a new color';
  }

  findAll() {
    return `This action returns all color`;
  }

  findOne(id: number) {
    return `This action returns a #${id} color`;
  }

  update(id: number, updateColorDto: UpdateColorDTO) {
    return `This action updates a #${id} color`;
  }

  remove(id: number) {
    return `This action removes a #${id} color`;
  }
}
