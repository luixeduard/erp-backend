import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateClaveSatDTO } from "./create.dto";

export class FindClaveSatDTO extends IntersectionType(PaggingDTO, PartialType(CreateClaveSatDTO)) { }