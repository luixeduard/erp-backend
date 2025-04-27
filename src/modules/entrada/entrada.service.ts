import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BaseService } from "src/core/global/service/base.service";
import { CreateEntradaDTO } from "./dto/create.dto";
import { UpdateEntradaDTO } from "./dto/update.dto";
import { Entrada } from "./entity/entrada.entity";

@Injectable()
export class EntradaService extends BaseService<Entrada, CreateEntradaDTO, UpdateEntradaDTO> {
  constructor(@InjectModel(Entrada) private readonly EntradaModel: typeof Entrada) {
    super(EntradaModel)
  }

  /**LOGICA PARA FOLIO EN CREATE */
}