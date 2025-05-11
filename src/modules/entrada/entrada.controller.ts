import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateEntradaDTO } from "./dto/create.dto";
import { EntradaDTO, EntradaPaggingDTO } from "./dto/entrada.dto";
import { FindEntradaDTO } from "./dto/find.dto";
import { UpdateEntradaDTO, PatchEntradaDTO } from "./dto/update.dto";
import { EntradaService } from "./entrada.service";
import { ArticulosEntradaDTO } from "./dto/articulo.dto";

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

  create(body: CreateEntradaDTO & { articulos: ArticulosEntradaDTO[] }) {
    return this.EntradaService.create(body)
  }
}