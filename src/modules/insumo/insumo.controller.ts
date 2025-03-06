import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InsumoService } from './insumo.service';
import { CreateInsumoDTO } from './dto/create.dto';
import { UpdateInsumoDTO } from './dto/update.dto';
import { FindInsumoDTO } from './dto/find.dto';


@Controller('insumo')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}
}
