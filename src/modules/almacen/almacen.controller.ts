import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDTO } from './dto/create.dto';
import { PatchAlmacenDTO, UpdateAlmacenDTO } from './dto/update.dto';
import { GenericController } from 'src/core/global/controller/controller_generic.controller';
import { AlmacenDTO } from './dto/almacen.dto';

@Controller('almacen')
export class AlmacenController extends GenericController<CreateAlmacenDTO, UpdateAlmacenDTO, PatchAlmacenDTO,AlmacenDTO>(
  CreateAlmacenDTO,
  UpdateAlmacenDTO,
  PatchAlmacenDTO, 
  AlmacenDTO,
  'Almacen'
) {
  constructor(private readonly almacenService: AlmacenService) {
    super(almacenService);
  }
}