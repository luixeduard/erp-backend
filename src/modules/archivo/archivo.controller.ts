import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { ArchivoDTO, ArchivoPaggingDTO } from "./dto/archivo.dto";
import { CreateArchivoDTO } from "./dto/create.dto";
import { FindArchivoDTO } from "./dto/find.dto";
import { UpdateArchivoDTO, PatchArchivoDTO } from "./dto/update.dto";
import { ArchivoService } from "./archivo.service";

@Controller('archivo')
export class ArchivoController extends GenericController<CreateArchivoDTO, FindArchivoDTO, UpdateArchivoDTO, PatchArchivoDTO, ArchivoDTO, ArchivoPaggingDTO>(
  CreateArchivoDTO,
  FindArchivoDTO,
  UpdateArchivoDTO,
  PatchArchivoDTO,
  ArchivoDTO,
  ArchivoPaggingDTO,
  'Archivo'
) {
  constructor(private readonly ArchivoService: ArchivoService) {
    super(ArchivoService);
  }
}