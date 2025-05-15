import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { StatusOrden } from "../enum/status.enum";
import { CreateArticulosOrdenDTO } from "src/modules/articulos_orden/dto/create.dto";
import { Type } from "class-transformer";

export class CreateOrdenDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly folio: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly user_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cliente_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly estimated_date: Date

  @ApiProperty({enum: StatusOrden})
  @IsNotEmpty()
  @IsEnum(StatusOrden)
  readonly status: StatusOrden

  @ApiProperty({ type: CreateArticulosOrdenDTO, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => CreateArticulosOrdenDTO)
  readonly articulos: CreateArticulosOrdenDTO[]
}
