import { Body, Controller, Delete, Get, Param, Post, Put, Patch, Query, DefaultValuePipe } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindAndCountOptions } from 'sequelize';
import { ParseSequelizePipe } from 'src/core/pipe/parse-sequelize.pipe';

export function GenericController<TCreateDTO, TFindDTO, TUpdateDTO, TPatchDTO, TClassDTO, TClassPaggingDTO>(
  CreateDTO: new () => TCreateDTO,
  FindDTO: new () => TFindDTO,
  UpdateDTO: new () => TUpdateDTO,
  PatchDTO: new () => TPatchDTO,
  ClassDTO: new () => TClassDTO,
  ClassPaggingDTO: new () => TClassPaggingDTO,
  name: string,
) {
  @Controller()
  @ApiTags(name)
  class GenericControllerHost {
    constructor(readonly service) { }

    @Post()
    @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
    @ApiOperation({ summary: `Metodo para creación de ${name}` })
    @ApiBody({ type: CreateDTO })
    @ApiResponse({
      status: 201,
      description: `${name} creado con exito.`,
      type: ClassDTO,
    })
    create(@Body() body: TCreateDTO): Promise<any> {
      return this.service.create(body);
    }

    @Get()
    @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
    @ApiOperation({ summary: `Metodo para obtener ${name}s` })
    @ApiQuery({ type: FindDTO })
    @ApiResponse({
      status: 200,
      description: `${name} obtenidos con exito.`,
      type: ClassPaggingDTO,
    })
    findAll(@Query(new DefaultValuePipe(false), ParseSequelizePipe) query: TFindDTO): Promise<any> {
      return this.service.findAll(query as unknown as Omit<FindAndCountOptions<TFindDTO>, "group">);
    }

    @Get(':id')
    @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
    @ApiOperation({ summary: `Metodo para obtener un unico ${name}` })
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({
      status: 200,
      type: ClassDTO,
    })
    async findOne(@Param('id') id: string): Promise<any> {
      return this.service.findOne(id);
    }

    @Put(':id')
    @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
    @ApiOperation({ summary: `Metodo para actualizar ${name}` })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: UpdateDTO })
    @ApiResponse({
      status: 200,
      type: ClassDTO,
    })
    async update(@Param('id') id: string, @Body() updateDto: TUpdateDTO): Promise<any> {
      return this.service.update(id, updateDto);
    }

    @Patch(':id')
    @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
    @ApiOperation({ summary: `Metodo para actualizar parcialmente ${name}` })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: PatchDTO })
    @ApiResponse({
      status: 200,
      type: ClassDTO,
    })
    async patch(@Param('id') id: string, @Body() patchDto: TPatchDTO): Promise<any> {
      return this.service.patch(id, patchDto);
    }

    @Delete(':id')
    @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
    @ApiOperation({ summary: `Metodo para eliminar ${name}` })
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({
      status: 200,
      description: `Registro eliminado con exito.`,
    })
    async remove(@Param('id') id: string): Promise<any> {
      return this.service.remove(id);
    }
  }

  return GenericControllerHost;
}