import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { TipoArchivo } from "../enum/tipo_archivo.enum";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class ArchivoDTO extends DBRecordDTO {
  @ApiProperty({ example: TipoArchivo.FIRMA })
  readonly tipo: TipoArchivo
  @ApiProperty({ example: faker.internet.url() })
  readonly src: TipoArchivo
}

export class ArchivoPaggingDTO extends PageDTO {
  @ApiProperty({ type: ArchivoDTO, isArray: true })
  readonly data: ArchivoDTO[]
}