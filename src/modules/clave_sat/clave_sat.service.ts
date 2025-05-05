import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { ClaveSat } from './entity/clave_sat.entity';
import { CreateClaveSatDTO } from './dto/create.dto';
import { PatchClaveSatDTO, UpdateClaveSatDTO } from './dto/update.dto';

@Injectable()
export class ClaveSatService extends BaseService<ClaveSat, CreateClaveSatDTO, UpdateClaveSatDTO, PatchClaveSatDTO> {
  constructor(@InjectModel(ClaveSat) private readonly ClaveSatModel: typeof ClaveSat) {
    super(ClaveSatModel)
  }
}
