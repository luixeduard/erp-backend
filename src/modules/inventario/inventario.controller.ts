import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/global/controller/base.controller";
import { CreateInventarioDTO } from "./dto/create.dto";
import { FindInventarioDTO } from "./dto/find.dto";
import { InventarioDTO, InventarioPaggingDTO } from "./dto/inventario.dto";
import { PatchInventarioDTO, UpdateInventarioDTO } from "./dto/update.dto";
import { InventarioService } from "./inventario.service";

@Controller('inventario')
export class InventarioController extends GenericController<CreateInventarioDTO, FindInventarioDTO, UpdateInventarioDTO, PatchInventarioDTO, InventarioDTO, InventarioPaggingDTO>(
  CreateInventarioDTO,
  FindInventarioDTO,
  UpdateInventarioDTO,
  PatchInventarioDTO,
  InventarioDTO,
  InventarioPaggingDTO,
  'Inventario'
) {
  constructor(private readonly InventarioService: InventarioService) {
    super(InventarioService);
  }
}