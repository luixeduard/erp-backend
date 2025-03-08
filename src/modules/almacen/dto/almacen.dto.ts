import { ApiProperty } from "@nestjs/swagger";

export class AlmacenDTO {
  @ApiProperty({ example: 'NAME CLASS ALMACEN' })
  name: string
}