import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateInventarioDTO } from "./dto/create.dto";
import { PatchInventarioDTO, UpdateInventarioDTO } from "./dto/update.dto";
import { Inventario } from "./entity/inventario.entity";

@Injectable()
export class InventarioService extends BaseService<Inventario, CreateInventarioDTO, UpdateInventarioDTO, PatchInventarioDTO> {
  constructor(@InjectModel(Inventario) private readonly InventarioModel: typeof Inventario) {
    super(InventarioModel)
  }
}
