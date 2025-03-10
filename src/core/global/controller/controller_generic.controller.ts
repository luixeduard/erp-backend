import { Body, Controller, Delete, Get, Param, Post, Put, Patch, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
export interface IGenericService<TCreateDTO, TUpdateDTO, TPatchDTO, TFindDTO, TClassDTO, TClassPaggingDTO> {
  create(body: TCreateDTO): Promise<TClassDTO>;
  findAll(body: TFindDTO): Promise<TClassPaggingDTO>;
  findOne(id: string): Promise<TClassDTO>;
  update(id: string, updateDto: TUpdateDTO): Promise<TClassDTO>;
  patch(id: string, patchDto: TPatchDTO): Promise<TClassDTO>;
  remove(id: string): Promise<void>;
}


export function GenericController<TCreateDTO, TFindDTO, TUpdateDTO, TPatchDTO, TClassDTO, TClassPaggingDTO>(
  CreateDTO: new () => TCreateDTO,
  FindDTO: new ()=> TFindDTO,
  UpdateDTO: new ()=> TUpdateDTO,
  PatchDTO: new ()=> TPatchDTO,
  ClassDTO: new ()=> TClassDTO,
  ClassPaggingDTO: new ()=> TClassPaggingDTO,
  name: string,
) {
  @Controller(name)
  @ApiTags(name)
  class GenericControllerHost {
    constructor(readonly service: IGenericService<TCreateDTO, TUpdateDTO, TPatchDTO, TFindDTO, TClassDTO, TClassPaggingDTO>) { }

    @Post()
    @ApiOperation({ summary: `Metodo para creación de ${name}` })
    @ApiBody({ type: CreateDTO })
    @ApiResponse({
      status: 201,
      description: `${name} creado con exito.`,
      type: ClassDTO,
    })
    async create(@Body() body: TCreateDTO): Promise<any> {
      return this.service.create(body);
    }

    @Get()
    @ApiOperation({ summary: `Metodo para obtener ${name}s` })
    @ApiBody({ type: FindDTO })
    @ApiResponse({
      status: 200,
      description: `${name} obtenidos con exito.`,
      type: ClassPaggingDTO,
    })
    async findAll(@Query() body: TFindDTO): Promise<any> {
      return this.service.findAll(body);
    }

    @Get(':id')
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