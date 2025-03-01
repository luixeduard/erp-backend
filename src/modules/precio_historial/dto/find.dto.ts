import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreatePrecioHistorialDTO } from "./create.dto";

export class FindPrecioHistorialDTO extends IntersectionType(PaggingDTO, PartialType(CreatePrecioHistorialDTO)) { }