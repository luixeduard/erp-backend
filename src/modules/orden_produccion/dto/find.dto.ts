import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateOrdenDTO } from "./create.dto";

export class FindOrdenDTO extends IntersectionType(PaggingDTO, PartialType(CreateOrdenDTO)) { }