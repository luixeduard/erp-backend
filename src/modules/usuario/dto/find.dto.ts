import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateUsuarioDTO } from "./create.dto";

export class FindUsuarioDTO extends IntersectionType(PaggingDTO, PartialType(CreateUsuarioDTO)) { }