import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateMedidaDTO } from "./dto/create.dto";
import { FindMedidaDTO } from "./dto/find.dto";
import { PatchMedidaDTO, UpdateMedidaDTO } from "./dto/update.dto";
import { MedidaService } from "./medida.service";
import { MedidaDTO, MedidaPaggingDTO } from "./dto/medida.dto";


@Controller('Medida')
export class MedidaController extends GenericController<CreateMedidaDTO, FindMedidaDTO, UpdateMedidaDTO, PatchMedidaDTO, MedidaDTO, MedidaPaggingDTO>(
  CreateMedidaDTO,
  FindMedidaDTO,
  UpdateMedidaDTO,
  PatchMedidaDTO,
  MedidaDTO,
  MedidaPaggingDTO,
  'Medida'
) {
  constructor(private readonly MedidaService: MedidaService) {
    super(MedidaService);
  }
}