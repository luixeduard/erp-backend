import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateArticulosEntradaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly orden_id: number
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly orden_produccion_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly insumo_id: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly cantidad?: number
}
