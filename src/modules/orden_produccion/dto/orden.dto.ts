import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";
import { StatusOrden } from "../enum/status.enum";

export class OrdenDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.string.ulid() })
  readonly folio: string
  @ApiProperty({ example: faker.number.int(200) })
  readonly user_id: string
  @ApiProperty({ example: faker.number.int(200) })
  readonly cliente_id: string
  @ApiProperty({ example: faker.date.future() })
  readonly estimated_date: string
  @ApiProperty({ example: StatusOrden.PROGRESS })
  readonly status: string
}

export class OrdenPaggingDTO extends PageDTO {
  @ApiProperty({ type: OrdenDTO, isArray: true })
  readonly data: OrdenDTO[]
}