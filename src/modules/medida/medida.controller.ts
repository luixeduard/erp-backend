import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MedidaService } from './medida.service';
import { CreateMedidaDTO } from './dto/create.dto';
import { UpdateMedidaDTO } from './dto/update.dto';
import { FindMedidaDTO } from './dto/find.dto';


@Controller('medida')
export class MedidaController {
  constructor(private readonly medidaService: MedidaService) {}

  @Post()
  create(@Body() body: CreateMedidaDTO) {
    return this.medidaService.create(body);
  }

  @Get()
  findAll(@Query() query:FindMedidaDTO) {
    return this.medidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.medidaService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdateMedidaDTO) {
    return this.medidaService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.medidaService.remove(_id);
  }
}
