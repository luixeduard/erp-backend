import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEncargadoAlmacenDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly usuario_id: number
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly almacen_id:number
}
