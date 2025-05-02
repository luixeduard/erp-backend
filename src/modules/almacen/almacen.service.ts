import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { Almacen } from './entity/almacen.entity';
import { CreateAlmacenDTO } from './dto/create.dto';
import { PatchAlmacenDTO, UpdateAlmacenDTO } from './dto/update.dto';

@Injectable()
export class AlmacenService extends BaseService<Almacen, CreateAlmacenDTO, UpdateAlmacenDTO, PatchAlmacenDTO>{
  constructor(@InjectModel(Almacen) private readonly AlmacenModel: typeof Almacen) {
    super(AlmacenModel)
  }
}
