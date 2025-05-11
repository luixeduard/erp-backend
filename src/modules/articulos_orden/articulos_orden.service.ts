import { Injectable } from '@nestjs/common';
import { ArticulosOrden } from './entity/arcitulos_orden.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { CreateArticulosOrdenDTO } from './dto/create.dto';
import { UpdateArticulosOrdenDTO, PatchArticulosOrdenDTO } from './dto/update.dto';

@Injectable()
export class ArticulosOrdenService extends BaseService<ArticulosOrden, CreateArticulosOrdenDTO, UpdateArticulosOrdenDTO, PatchArticulosOrdenDTO> {
  constructor(@InjectModel(ArticulosOrden) private readonly ArticulosOrdenModel: typeof ArticulosOrden) {
    super(ArticulosOrdenModel)
  }
}

