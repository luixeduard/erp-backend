import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { Color } from './entity/color.entity';
import { CreateColorDTO } from './dto/create.dto';
import { UpdateColorDTO } from './dto/update.dto';

@Injectable()
export class ColorService extends BaseService<Color, CreateColorDTO, UpdateColorDTO>{
  constructor(@InjectModel(Color) private readonly colorModel: typeof Color) {
    super(colorModel)
  }
}
