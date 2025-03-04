import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateMedidaDTO } from "./create.dto";

export class FindMedidaDTO extends IntersectionType(PaggingDTO, PartialType(CreateMedidaDTO)) { }