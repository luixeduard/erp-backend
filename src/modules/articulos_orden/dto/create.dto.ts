import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateArticulosOrdenDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly orden_produccion_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly insumo_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cantidad: number
  
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly is_complete: boolean = false
}
