import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClaveSatDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  readonly clave: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly clave_sat_id?: number
}
