import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDTO } from './dto/create.dto';
import { UpdateInventarioDTO } from './dto/update.dto';
import { FindInventarioDTO } from './dto/find.dto';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) { }
}
