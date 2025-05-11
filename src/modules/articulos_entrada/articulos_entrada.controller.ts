import { Controller } from '@nestjs/common';
import { ArticulosEntradaService } from './articulos_entrada.service';
import { GenericController } from 'src/core/global/controller/base.controller';
import { ArticulosEntradaDTO, ArticulosEntradaPaggingDTO } from './dto/articulo_entrada.dto';
import { CreateArticulosEntradaDTO } from './dto/create.dto';
import { UpdateArticulosEntradaDTO, PatchArticulosEntradaDTO } from './dto/update.dto';
import { FindArticulosEntradaDTO } from './dto/find.dto';

@Controller('articulos-entrada')
export class ArticulosEntradaController extends GenericController<CreateArticulosEntradaDTO, FindArticulosEntradaDTO, UpdateArticulosEntradaDTO, PatchArticulosEntradaDTO, ArticulosEntradaDTO, ArticulosEntradaPaggingDTO>(
  CreateArticulosEntradaDTO,
  FindArticulosEntradaDTO,
  UpdateArticulosEntradaDTO,
  PatchArticulosEntradaDTO,
  ArticulosEntradaDTO,
  ArticulosEntradaPaggingDTO,
  'Articulos Entrada'
) {
  constructor(private readonly ArticulosEntradaService: ArticulosEntradaService) {
    super(ArticulosEntradaService);
  }
}