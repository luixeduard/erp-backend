import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { CreateMedidaDTO } from './dto/create.dto';
import { PatchMedidaDTO, UpdateMedidaDTO } from './dto/update.dto';
import { Medida } from './entity/medida.entity';

@Injectable()
export class MedidaService extends BaseService<Medida, CreateMedidaDTO, UpdateMedidaDTO, PatchMedidaDTO> {
  constructor(@InjectModel(Medida) private readonly MedidaModel: typeof Medida) {
    super(MedidaModel)
  }
}
