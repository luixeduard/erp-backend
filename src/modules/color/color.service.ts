import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create.dto';
import { UpdateColorDto } from './dto/update.dto';

@Injectable()
export class ColorService {
  create(createColorDto: CreateColorDto) {
    return 'This action adds a new color';
  }

  findAll() {
    return `This action returns all color`;
  }

  findOne(id: number) {
    return `This action returns a #${id} color`;
  }

  update(id: number, updateColorDto: UpdateColorDto) {
    return `This action updates a #${id} color`;
  }

  remove(id: number) {
    return `This action removes a #${id} color`;
  }
}
