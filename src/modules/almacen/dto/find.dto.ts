import { IntersectionType, PartialType } from "@nestjs/swagger";
import { CreateAlmacenDTO } from "./create.dto";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";

export class FindAlmacenDTO extends IntersectionType(PaggingDTO, PartialType(CreateAlmacenDTO)) { }