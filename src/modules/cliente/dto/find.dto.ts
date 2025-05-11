import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateUsuarioDTO } from "src/modules/usuario/dto/create.dto";

export class FindClienteDTO extends IntersectionType(PaggingDTO, PartialType(CreateUsuarioDTO)) { }