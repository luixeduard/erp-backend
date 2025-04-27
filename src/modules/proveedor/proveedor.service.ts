import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateProveedorDTO } from "./dto/create.dto";
import { UpdateProveedorDTO } from "./dto/update.dto";
import { Proveedor } from "./entity/proveedor.entity";

@Injectable()
export class ProveedorService extends BaseService<Proveedor, CreateProveedorDTO, UpdateProveedorDTO> {
  constructor(@InjectModel(Proveedor) private readonly ProveedorModel: typeof Proveedor) {
    super(ProveedorModel)
  }
}
