import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreatePrecioHistorialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly inventario_id: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly precio_previo: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly precio_actual: number
}
