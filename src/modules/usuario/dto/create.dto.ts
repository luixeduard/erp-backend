import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";
import { hashPassword } from "src/core/libs/hash";
import { sanitizeString } from "src/core/libs/sanitizeString";

export class CreateUsuarioDTO extends NamedObjectRequiredDTO {
  @ApiProperty()
  @Transform(sanitizeString)
  @IsNotEmpty()
  @IsString()
  readonly paterno: string
  @ApiProperty()
  @Transform(sanitizeString)
  @IsNotEmpty()
  @IsString()
  readonly materno: string
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  readonly email: string
  @ApiProperty()
  @IsNotEmpty()
  @Transform(hashPassword)
  @IsString()
  readonly pwd: string
}
