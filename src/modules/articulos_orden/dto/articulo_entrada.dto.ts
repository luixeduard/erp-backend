import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { faker } from "@faker-js/faker";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class ArticulosOrdenDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.number.int(100) })
  readonly orden_produccion_id: number
  @ApiProperty({ example: faker.number.int(100) })
  readonly insumo_id: number
  @ApiProperty({ example: faker.number.int(100) })
  readonly cantidad?: number
  @ApiProperty({ example: false })
  readonly is_complete?: boolean
}

export class ArticulosOrdenPaggingDTO extends PageDTO {
  @ApiProperty({ type: ArticulosOrdenDTO, isArray: true })
  readonly data: ArticulosOrdenDTO[]
}