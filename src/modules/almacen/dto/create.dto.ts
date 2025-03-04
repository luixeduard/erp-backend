import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";

export class CreateAlmacenDTO extends NamedObjectRequiredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly direccion: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly coor_x: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly coor_y: number

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly enabled: boolean

}
