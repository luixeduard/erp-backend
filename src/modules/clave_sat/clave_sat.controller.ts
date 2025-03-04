import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ClaveSatService } from './clave_sat.service';
import { CreateClaveSatDTO } from './dto/create.dto';
import { UpdateClaveSatDTO } from './dto/update.dto';
import { FindClaveSatDTO } from './dto/find.dto';


@Controller('clave-sat')
export class ClaveSatController {
  constructor(private readonly claveSatService: ClaveSatService) { }

  @Post()
  create(@Body() body: CreateClaveSatDTO) {
    return this.claveSatService.create(body);
  }

  @Get()
  findAll(@Query() query: FindClaveSatDTO) {
    return this.claveSatService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.claveSatService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdateClaveSatDTO) {
    return this.claveSatService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.claveSatService.remove(_id);
  }
}
