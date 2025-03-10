import { Controller } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDTO } from './dto/create.dto';
import { PatchAlmacenDTO, UpdateAlmacenDTO } from './dto/update.dto';
import { GenericController } from 'src/core/global/controller/controller_generic.controller';
import { AlmacenDTO, AlmacenPagginDTO } from './dto/almacen.dto';
import { FindAlmacenDTO } from './dto/find.dto';

@Controller('almacen')
export class AlmacenController extends GenericController<CreateAlmacenDTO, FindAlmacenDTO, UpdateAlmacenDTO, PatchAlmacenDTO, AlmacenDTO, AlmacenPagginDTO>(
  CreateAlmacenDTO,
  FindAlmacenDTO,
  UpdateAlmacenDTO,
  PatchAlmacenDTO,
  AlmacenDTO,
  AlmacenPagginDTO,
  'almacen'
) {
  constructor(private readonly almacenService: AlmacenService) {
    super(almacenService);
  }
}