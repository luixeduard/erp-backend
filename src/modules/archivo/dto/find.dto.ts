import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateArchivoDTO } from "./create.dto";

export class FindArchivoDTO extends IntersectionType(PaggingDTO, PartialType(CreateArchivoDTO)) { }