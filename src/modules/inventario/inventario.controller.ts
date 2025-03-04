import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDTO } from './dto/create.dto';
import { UpdateInventarioDTO } from './dto/update.dto';
import { FindInventarioDTO } from './dto/find.dto';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) { }

  @Post()
  create(@Body() body: CreateInventarioDTO) {
    return this.inventarioService.create(body);
  }

  @Get()
  findAll(@Query() query: FindInventarioDTO) {
    return this.inventarioService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.inventarioService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdateInventarioDTO) {
    return this.inventarioService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.inventarioService.remove(_id);
  }
}
