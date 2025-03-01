import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { sanitizeString } from "src/core/libs/sanitizeString";

export class NamedObjectRequiredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(sanitizeString)
  @IsString()
  readonly nombre: string
}