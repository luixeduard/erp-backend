import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateEncargadoAlmacenDTO } from "./dto/create.dto";
import { EncargadoAlmacenDTO, EncargadoAlmacenPaggingDTO } from "./dto/encargado_almacen.dto";
import { FindEncargadoAlmacenDTO } from "./dto/find.dto";
import { UpdateEncargadoAlmacenDTO, PatchEncargadoAlmacenDTO } from "./dto/update.dto";
import { EncargadoAlmacenService } from "./encargado_almacen.service";


@Controller('encargado-almacen')
export class EncargadoAlmacenController extends GenericController<CreateEncargadoAlmacenDTO, FindEncargadoAlmacenDTO, UpdateEncargadoAlmacenDTO, PatchEncargadoAlmacenDTO, EncargadoAlmacenDTO, EncargadoAlmacenPaggingDTO>(
  CreateEncargadoAlmacenDTO,
  FindEncargadoAlmacenDTO,
  UpdateEncargadoAlmacenDTO,
  PatchEncargadoAlmacenDTO,
  EncargadoAlmacenDTO,
  EncargadoAlmacenPaggingDTO,
  'EncargadoAlmacen'
) {
  constructor(private readonly EncargadoAlmacenService: EncargadoAlmacenService) {
    super(EncargadoAlmacenService);
  }
}