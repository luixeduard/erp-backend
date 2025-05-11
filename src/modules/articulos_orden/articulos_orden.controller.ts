import { Controller } from '@nestjs/common';
import { ArticulosOrdenService } from './articulos_orden.service';
import { GenericController } from 'src/core/global/controller/base.controller';
import { ArticulosOrdenDTO, ArticulosOrdenPaggingDTO } from './dto/articulo_entrada.dto';
import { CreateArticulosOrdenDTO } from './dto/create.dto';
import { FindArticulosOrdenDTO } from './dto/find.dto';
import { UpdateArticulosOrdenDTO, PatchArticulosOrdenDTO } from './dto/update.dto';

@Controller('articulos-orden')
export class ArticulosOrdenController extends GenericController<CreateArticulosOrdenDTO, FindArticulosOrdenDTO, UpdateArticulosOrdenDTO, PatchArticulosOrdenDTO, ArticulosOrdenDTO, ArticulosOrdenPaggingDTO>(
  CreateArticulosOrdenDTO,
  FindArticulosOrdenDTO,
  UpdateArticulosOrdenDTO,
  PatchArticulosOrdenDTO,
  ArticulosOrdenDTO,
  ArticulosOrdenPaggingDTO,
  'Articulos Orden'
) {
  constructor(private readonly ArticulosOrdenService: ArticulosOrdenService) {
    super(ArticulosOrdenService);
  }
}