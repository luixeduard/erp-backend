import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { CreateInsumoDTO } from './dto/create.dto';
import { PatchInsumoDTO, UpdateInsumoDTO } from './dto/update.dto';
import { Insumo } from './entity/insumo.entity';

@Injectable()
export class InsumoService extends BaseService<Insumo, CreateInsumoDTO, UpdateInsumoDTO, PatchInsumoDTO> {
  constructor(@InjectModel(Insumo) private readonly InsumoModel: typeof Insumo) {
    super(InsumoModel)
  }
}
