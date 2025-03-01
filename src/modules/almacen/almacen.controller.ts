import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDTO } from './dto/create.dto';
import { FindAlmacenDTO } from './dto/find.dto';
import { UpdateAlmacenDTO } from './dto/update.dto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) { }

  @Post()
  create(@Body() body: CreateAlmacenDTO) {
    return this.almacenService.create(body);
  }

  @Get()
  findAll(@Query() query: FindAlmacenDTO) {
    return this.almacenService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.almacenService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdateAlmacenDTO) {
    return this.almacenService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.almacenService.remove(_id);
  }
}
