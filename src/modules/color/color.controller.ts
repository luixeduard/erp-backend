import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, ClassSerializerInterceptor, DefaultValuePipe } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDTO } from './dto/create.dto';
import { UpdateColorDTO } from './dto/update.dto';
import { FindColorDTO } from './dto/find.dto';
import { ParseSequelizePipe } from 'src/core/pipe/parse-sequelize.pipe';
import { FindAndCountOptions } from 'sequelize';


@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) { }

  @Post()
  create(@Body() createColorDto: CreateColorDTO) {
    return this.colorService.create(createColorDto);
  }

  @Get()
  findAll(@Query() query: FindColorDTO) {
    return this.colorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: number) {
    return this.colorService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: number, @Body() body: UpdateColorDTO) {
    return this.colorService.update(_id, body);
  }

  @Delete(':id')
  remove(@Param('id') _id: number) {
    return this.colorService.remove(_id);
  }
}
