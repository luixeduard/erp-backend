import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateEncargadoAlmacenDTO } from "./create.dto";

export class FindEncargadoAlmacenDTO extends IntersectionType(PaggingDTO, PartialType(CreateEncargadoAlmacenDTO)) { }