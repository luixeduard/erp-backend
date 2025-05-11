import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { CreateArticulosEntradaDTO } from './dto/create.dto';
import { ArticulosEntrada } from './entity/arcitulos_entrada.entity';
import { PatchArticulosEntradaDTO, UpdateArticulosEntradaDTO } from './dto/update.dto';

@Injectable()
export class ArticulosEntradaService extends BaseService<ArticulosEntrada, CreateArticulosEntradaDTO, UpdateArticulosEntradaDTO, PatchArticulosEntradaDTO> {
  constructor(@InjectModel(ArticulosEntrada) private readonly ArticulosEntradaModel: typeof ArticulosEntrada) {
    super(ArticulosEntradaModel)
  }
}
