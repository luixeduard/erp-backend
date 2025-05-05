import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateArchivoDTO } from "./dto/create.dto";
import { PatchArchivoDTO, UpdateArchivoDTO } from "./dto/update.dto";
import { Archivo } from "./entity/archivo.entity";

@Injectable()
export class ArchivoService extends BaseService<Archivo, CreateArchivoDTO, UpdateArchivoDTO, PatchArchivoDTO> {
  constructor(@InjectModel(Archivo) private readonly ArchivoModel: typeof Archivo) {
    super(ArchivoModel)
  }
}


