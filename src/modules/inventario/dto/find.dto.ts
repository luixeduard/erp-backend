import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateInventarioDTO } from "./create.dto";

export class FindInventarioDTO extends IntersectionType(PaggingDTO, PartialType(CreateInventarioDTO)) { }