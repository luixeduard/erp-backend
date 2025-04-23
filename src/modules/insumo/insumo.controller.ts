import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateInsumoDTO } from "./dto/create.dto";
import { FindInsumoDTO } from "./dto/find.dto";
import { InsumoDTO, InsumoPaggingDTO } from "./dto/insumo.dto";
import { PatchInsumoDTO, UpdateInsumoDTO } from "./dto/update.dto";
import { InsumoService } from "./insumo.service";


@Controller('insumo')
export class InsumoController extends GenericController<CreateInsumoDTO, FindInsumoDTO, UpdateInsumoDTO, PatchInsumoDTO, InsumoDTO, InsumoPaggingDTO>(
  CreateInsumoDTO,
  FindInsumoDTO,
  UpdateInsumoDTO,
  PatchInsumoDTO,
  InsumoDTO,
  InsumoPaggingDTO,
  'Insumo'
) {
  constructor(private readonly InsumoService: InsumoService) {
    super(InsumoService);
  }
}