import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PrecioHistorialService } from './precio_historial.service';
import { CreatePrecioHistorialDTO } from './dto/create.dto';
import { UpdatePrecioHistorialDTO } from './dto/update.dto';
import { FindPrecioHistorialDTO } from './dto/find.dto';


@Controller('precio-historial')
export class PrecioHistorialController {
  constructor(private readonly precioHistorialService: PrecioHistorialService) { }
}
