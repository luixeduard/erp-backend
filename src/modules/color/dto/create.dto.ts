import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";

export class CreateColorDTO extends NamedObjectRequiredDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly codigo?: string
}
