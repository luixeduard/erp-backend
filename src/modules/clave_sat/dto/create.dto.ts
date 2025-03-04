import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClaveSatDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly clave_sat_id?: number
}
