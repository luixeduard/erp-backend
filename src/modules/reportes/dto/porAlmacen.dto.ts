import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsUUID } from "class-validator";
import { PaggingDTO } from "src/core/global/dto/pagging.dto";
import { Almacen } from "src/modules/almacen/entity/almacen.entity";

export class PorAlmacenDTO extends PaggingDTO<Pro> {
  @ApiProperty()
  @IsOptional()
  @IsInt()
  almacen?: string
}