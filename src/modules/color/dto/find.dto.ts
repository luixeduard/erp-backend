import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { CreateColorDTO } from "./create.dto";
import { PartialType } from "@nestjs/swagger";

class ColorData extends PartialType(CreateColorDTO) { }

export class FindColorDTO extends PaggingDTO<ColorData> {}