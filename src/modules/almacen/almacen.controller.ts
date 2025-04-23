import { Controller } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDTO } from './dto/create.dto';
import { PatchAlmacenDTO, UpdateAlmacenDTO } from './dto/update.dto';
import { AlmacenDTO } from './dto/almacen.dto';
import { FindAlmacenDTO } from './dto/find.dto';
import { GenericController } from 'src/core/global/controller/base.controller';

@Controller('almacen')
export class AlmacenController extends GenericController<CreateAlmacenDTO, FindAlmacenDTO, UpdateAlmacenDTO, PatchAlmacenDTO, AlmacenDTO>(
  CreateAlmacenDTO,
  FindAlmacenDTO,
  UpdateAlmacenDTO,
  PatchAlmacenDTO,
  AlmacenDTO,
  'almacen'
) {
  constructor(private readonly almacenService: AlmacenService) {
    super(almacenService);
  }
}