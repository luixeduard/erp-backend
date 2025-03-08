import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDTO } from './dto/create.dto';
import { FindAlmacenDTO } from './dto/find.dto';
import { PatchAlmacenDTO, UpdateAlmacenDTO } from './dto/update.dto';
import { GenericController } from 'src/core/global/controller/controller_generic.controller';

@Controller('almacen')
export class AlmacenController extends GenericController<CreateAlmacenDTO, UpdateAlmacenDTO, PatchAlmacenDTO> {
  constructor(private readonly almacenService: AlmacenService) {
    super();
  }
  // @Post()
  // create(@Body() body: CreateAlmacenDTO) {
  //   return this.almacenService.create(body);
  // }

  // @Get()
  // findAll(@Query() query: FindAlmacenDTO) {
  //   return this.almacenService.findAll(query);
  // }

  // @Get(':id')
  // findOne(@Param('id') _id: number) {
  //   return this.almacenService.findOne(_id);
  // }

  // @Put(':id')
  // update(@Param('id') _id: number, @Body() body: UpdateAlmacenDTO) {
  //   return this.almacenService.update(_id, body);
  // }

  // @Patch(':id')
  // patch(@Param('id') _id: number, @Body() body: PatchAlmacenDTO) {
  //   return this.almacenService.patch(_id, body);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.almacenService.remove(_id);
  // }
}
