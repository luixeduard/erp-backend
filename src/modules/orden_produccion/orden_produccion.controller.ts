import { Controller } from '@nestjs/common';
import { OrdenProduccionService } from './orden_produccion.service';
import { GenericController } from 'src/core/global/controller/base.controller';
import { CreateOrdenDTO } from './dto/create.dto';
import { FindOrdenDTO } from './dto/find.dto';
import { OrdenDTO, OrdenPaggingDTO } from './dto/orden.dto';
import { UpdateOrdenDTO, PatchOrdenDTO } from './dto/update.dto';
import { ArticulosOrdenDTO } from './dto/articulo_orden.dto';

@Controller('orden-produccion')
export class OrdenProduccionController extends GenericController<CreateOrdenDTO, FindOrdenDTO, UpdateOrdenDTO, PatchOrdenDTO, OrdenDTO, OrdenPaggingDTO>(
  CreateOrdenDTO,
  FindOrdenDTO,
  UpdateOrdenDTO,
  PatchOrdenDTO,
  OrdenDTO,
  OrdenPaggingDTO,
  'Orden Produccion'
) {
  constructor(private readonly OrdenProduccionService: OrdenProduccionService) {
    super(OrdenProduccionService);
  }

  create(body: CreateOrdenDTO & { articulos: ArticulosOrdenDTO[] }) {
    return this.OrdenProduccionService.create(body)
  }
}