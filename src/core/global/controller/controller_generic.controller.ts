// src/common/controllers/generic.controller.ts
import { Body, Controller, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Generic')
@Controller('generic')
export class GenericController<CreateDto, UpdateDto, PatchDto> {
  // constructor(private readonly genericService: GenericService<CreateDto, UpdateDto, PatchDto>) {}

  @Post()
  @ApiOperation({ summary: 'Create a new record' })
  @ApiBody({ type: Object }) 
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  async create(@Body() createDto: CreateDto): Promise<any> {
    console.log('LLEGA 1');
    
    // return this.genericService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a record by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'The record has been successfully found.' })
  async find(@Param('id') id: string): Promise<any> {
    // return this.genericService.find(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a record by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: Object }) 
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<any> {
    // return this.genericService.update(id, updateDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Partially update a record by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: Object }) 
  @ApiResponse({ status: 200, description: 'The record has been successfully patched.' })
  async patch(@Param('id') id: string, @Body() patchDto: PatchDto): Promise<any> {
    // return this.genericService.patch(id, patchDto);
  }
}