import { Body, Controller, Post } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateEntradaDTO } from "./dto/create.dto";
import { EntradaDTO, EntradaPaggingDTO } from "./dto/entrada.dto";
import { FindEntradaDTO } from "./dto/find.dto";
import { UpdateEntradaDTO, PatchEntradaDTO } from "./dto/update.dto";
import { EntradaService } from "./entrada.service";

@Controller('entrada')
export class EntradaController extends GenericController<CreateEntradaDTO, FindEntradaDTO, UpdateEntradaDTO, PatchEntradaDTO, EntradaDTO, EntradaPaggingDTO>(
  CreateEntradaDTO,
  FindEntradaDTO,
  UpdateEntradaDTO,
  PatchEntradaDTO,
  EntradaDTO,
  EntradaPaggingDTO,
  'Entrada'
) {
  constructor(private readonly EntradaService: EntradaService) {
    super(EntradaService);
  }
}