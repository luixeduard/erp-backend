import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEntradaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly folio: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly recepcionista_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly almacen_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly proveedor_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly firma_id: number
}
