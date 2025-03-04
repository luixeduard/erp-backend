import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateInsumoDTO } from "./create.dto";

export class FindInsumoDTO extends IntersectionType(PaggingDTO, PartialType(CreateInsumoDTO)) { }