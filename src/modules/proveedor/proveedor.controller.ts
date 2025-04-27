import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateProveedorDTO } from "./dto/create.dto";
import { FindProveedorDTO } from "./dto/find.dto";
import { ProveedorDTO, ProveedorPaggingDTO } from "./dto/proveedor";
import { UpdateProveedorDTO, PatchProveedorDTO } from "./dto/update.dto";
import { ProveedorService } from "./proveedor.service";

@Controller('proveedor')
export class ProveedorController extends GenericController<CreateProveedorDTO, FindProveedorDTO, UpdateProveedorDTO, PatchProveedorDTO, ProveedorDTO, ProveedorPaggingDTO>(
  CreateProveedorDTO,
  FindProveedorDTO,
  UpdateProveedorDTO,
  PatchProveedorDTO,
  ProveedorDTO,
  ProveedorPaggingDTO,
  'Proveedor'
) {
  constructor(private readonly ProveedorService: ProveedorService) {
    super(ProveedorService);
  }
}