import { OmitType } from "@nestjs/swagger";
import { CreateArticulosOrdenDTO } from "src/modules/articulos_orden/dto/create.dto";

export class ArticulosOrdenDTO extends OmitType(CreateArticulosOrdenDTO, ["orden_produccion_id"]){}
