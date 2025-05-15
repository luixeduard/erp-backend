import { IntersectionType, OmitType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateEntradaDTO } from "./create.dto";

export class FindEntradaDTO extends IntersectionType(PaggingDTO, OmitType(PartialType(CreateEntradaDTO), ["articulos"])) { }