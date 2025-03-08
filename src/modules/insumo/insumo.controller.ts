import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InsumoService } from './insumo.service';
import { CreateInsumoDTO } from './dto/create.dto';
import { UpdateInsumoDTO } from './dto/update.dto';
import { FindInsumoDTO } from './dto/find.dto';


@Controller('insumo')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}

  @Post()
  create(@Body() body: CreateInsumoDTO) {
    return this.insumoService.create(body);
  }

  @Get()
  findAll(@Query() query: FindInsumoDTO) {
    return this.insumoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.insumoService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdateInsumoDTO) {
    return this.insumoService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.insumoService.remove(_id);
  }
}
