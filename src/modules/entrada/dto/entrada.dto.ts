import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class EntradaDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.string.ulid() })
  readonly folio: string
  @ApiProperty({ example: faker.number.int(200) })
  readonly recepcionista_id: string
  @ApiProperty({ example: faker.number.int(200) })
  readonly almacen_id: string
  @ApiProperty({ example: faker.number.int(200) })
  readonly proveedor_id: string
  @ApiProperty({ example: faker.number.int(200) })
  readonly firma_id: string
}

export class EntradaPaggingDTO extends PageDTO {
  @ApiProperty({ type: EntradaDTO, isArray: true })
  readonly data: EntradaDTO[]
}