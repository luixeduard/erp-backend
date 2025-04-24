import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";

export class CreateAlmacenDTO extends NamedObjectRequiredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly direccion: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly coor_x: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly coor_y: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly enabled: boolean

}
