import { ApiProperty, PickType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional } from "class-validator";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { InsumoDTO } from "src/modules/insumo/dto/insumo.dto";
import { Clasificacion } from "src/modules/inventario/enums/clasificacion.enum";

export class PorAlmacenDTO extends PickType(PaggingDTO<InsumoDTO>, ["search", "order", "limit"]) {
  @ApiProperty()
  @Transform(({value}) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  almacen_id: number
  @ApiProperty({ enum: Clasificacion })
  @IsNotEmpty()
  @IsEnum(Clasificacion)
  clasificacion: Clasificacion
}