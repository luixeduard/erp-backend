// src/common/controllers/generic.controller.ts
import { Body, Controller, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

export function GenericController<CreateDTO, UpdateDTO, PatchDTO,ClassDTO>(
  CreateDTO: any,
  UpdateDTO: any,
  PatchDTO: any,
  ClassDTO: any,
  name: string,

) {
  @Controller(name)
  @ApiTags(name)
  class GenericControllerHost {
    constructor(readonly service: any) { }

    @Post()
    @ApiOperation({ summary: `Metodo para creación de ${name}` })
    @ApiBody({ type: CreateDTO })
    @ApiCreatedResponse(ClassDTO)
    async create(@Body() body: CreateDTO): Promise<any> {
      console.log(body);

      return this.service.create(body);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a record by ID' })
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({ status: 200, description: 'The record has been successfully found.' })
    async find(@Param('id') id: string): Promise<any> {
      return this.service.find(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a record by ID' })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: UpdateDTO }) // Usamos el DTO específico
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.' })
    async update(@Param('id') id: string, @Body() UpdateDTO: UpdateDTO): Promise<any> {
      return this.service.update(id, UpdateDTO);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Partially update a record by ID' })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: PatchDTO }) // Usamos el DTO específico
    @ApiResponse({ status: 200, description: 'The record has been successfully patched.' })
    async patch(@Param('id') id: string, @Body() PatchDTO: PatchDTO): Promise<any> {
      return this.service.patch(id, PatchDTO);
    }
  }

  return GenericControllerHost;
}