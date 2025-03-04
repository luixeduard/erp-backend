import { IntersectionType, PartialType } from "@nestjs/swagger";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateColorDTO } from "./create.dto";

export class FindColorDTO extends IntersectionType(PaggingDTO, PartialType(CreateColorDTO)) { }