import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";

export class CreateProveedorDTO extends NamedObjectRequiredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly rfc: string
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly representante: string
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly razon_social: string
}
