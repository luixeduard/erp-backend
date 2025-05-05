import { ApiProperty } from "@nestjs/swagger";
import { TipoArchivo } from "../enum/tipo_archivo.enum";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateArchivoDTO {
  @ApiProperty({ enum: TipoArchivo })
  @IsNotEmpty()
  @IsEnum(TipoArchivo)
  readonly tipo: TipoArchivo

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly src: string
}
