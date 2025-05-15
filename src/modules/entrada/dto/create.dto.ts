import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateArticulosEntradaDTO } from "src/modules/articulos_entrada/dto/create.dto";

class AgregarArticuloDTO extends OmitType(CreateArticulosEntradaDTO, ["orden_id"]){}

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

  @ApiProperty({ type: AgregarArticuloDTO, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => AgregarArticuloDTO)
  articulos: AgregarArticuloDTO[]
}
