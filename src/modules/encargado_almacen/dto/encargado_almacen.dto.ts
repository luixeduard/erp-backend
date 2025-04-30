import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class EncargadoAlmacenDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.number.int(100) })
  readonly usuario_id: number
  @ApiProperty({ example: faker.number.int(100) })
  readonly almacen_id: number
}

export class EncargadoAlmacenPaggingDTO extends PageDTO {
  @ApiProperty({ type: EncargadoAlmacenDTO, isArray: true })
  readonly data: EncargadoAlmacenDTO[]
}