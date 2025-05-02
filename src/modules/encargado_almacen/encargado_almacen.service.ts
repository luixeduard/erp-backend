import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateEncargadoAlmacenDTO } from "./dto/create.dto";
import { EncargadoAlmacen } from "./entity/encargado_almacen.entity";
import { PatchEncargadoAlmacenDTO, UpdateEncargadoAlmacenDTO } from "./dto/update.dto";

@Injectable()
export class EncargadoAlmacenService extends BaseService<EncargadoAlmacen, CreateEncargadoAlmacenDTO, UpdateEncargadoAlmacenDTO, PatchEncargadoAlmacenDTO> {
  constructor(@InjectModel(EncargadoAlmacen) private readonly EncargadoAlmacenModel: typeof EncargadoAlmacen) {
    super(EncargadoAlmacenModel)
  }
}