import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PrecioHistorialService } from './precio_historial.service';
import { CreatePrecioHistorialDTO } from './dto/create.dto';
import { UpdatePrecioHistorialDTO } from './dto/update.dto';
import { FindPrecioHistorialDTO } from './dto/find.dto';


@Controller('precio-historial')
export class PrecioHistorialController {
  constructor(private readonly precioHistorialService: PrecioHistorialService) { }

  @Post()
  create(@Body() createPrecioHistorialDto: CreatePrecioHistorialDTO) {
    return this.precioHistorialService.create(createPrecioHistorialDto);
  }

  @Get()
  findAll(@Query() query: FindPrecioHistorialDTO) {
    return this.precioHistorialService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.precioHistorialService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdatePrecioHistorialDTO) {
    return this.precioHistorialService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.precioHistorialService.remove(_id);
  }
}
