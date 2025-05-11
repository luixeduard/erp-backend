import { OmitType } from "@nestjs/swagger";
import { CreateArticulosEntradaDTO } from "src/modules/articulos_entrada/dto/create.dto";

export class ArticulosEntradaDTO extends OmitType(CreateArticulosEntradaDTO, ["orden_id"]){}