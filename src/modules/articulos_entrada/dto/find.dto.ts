import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateArticulosEntradaDTO } from "./create.dto";

export class FindArticulosEntradaDTO extends IntersectionType(PaggingDTO, PartialType(CreateArticulosEntradaDTO)) { }