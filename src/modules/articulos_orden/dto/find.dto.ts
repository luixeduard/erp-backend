import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateArticulosOrdenDTO } from "./create.dto";

export class FindArticulosOrdenDTO extends IntersectionType(PaggingDTO, PartialType(CreateArticulosOrdenDTO)) { }