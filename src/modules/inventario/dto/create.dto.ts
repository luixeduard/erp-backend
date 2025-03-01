import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Clasificacion } from "../enums/clasificacion.enum";

export class CreateInventarioDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly almacen_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly insumo_id: number

  @ApiProperty({ enum: Clasificacion })
  @IsNotEmpty()
  @IsEnum(Clasificacion)
  readonly clasificacion: Clasificacion

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly precio?: number
}
