import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClaveSatDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly descripcion: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly clave_sat_id?: number
}
