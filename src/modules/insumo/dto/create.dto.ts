import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";
import { TipoInsumo } from "../enums/tipo_insumo.enum";

export class CreateInsumoDTO extends NamedObjectRequiredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly clave: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly medida_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly color_id: number

  @ApiProperty({ enum: TipoInsumo })
  @IsNotEmpty()
  @IsEnum(TipoInsumo)
  readonly tipo: TipoInsumo

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly clave_unidad_sat: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly clave_sat_id: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly costo: number
}
