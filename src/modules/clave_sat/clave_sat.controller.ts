import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { ClaveSatDTO, ClaveSatPaggingDTO } from "./dto/clave_sat.dto";
import { CreateClaveSatDTO } from "./dto/create.dto";
import { FindClaveSatDTO } from "./dto/find.dto";
import { PatchClaveSatDTO, UpdateClaveSatDTO } from "./dto/update.dto";
import { ClaveSatService } from "./clave_sat.service";

@Controller('clave-sat')
export class ClaveSatController extends GenericController<CreateClaveSatDTO, FindClaveSatDTO, UpdateClaveSatDTO, PatchClaveSatDTO, ClaveSatDTO, ClaveSatPaggingDTO>(
  CreateClaveSatDTO,
  FindClaveSatDTO,
  UpdateClaveSatDTO,
  PatchClaveSatDTO,
  ClaveSatDTO,
  ClaveSatPaggingDTO,
  'Clave Sat'
) {
  constructor(private readonly ClaveSatService: ClaveSatService) {
    super(ClaveSatService);
  }
}