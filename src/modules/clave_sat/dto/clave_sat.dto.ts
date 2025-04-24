import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class ClaveSatDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.lorem.sentence(5) })
  readonly descripcion: string
  @ApiProperty({ example: faker.number.int(100) })
  readonly clave_sat_id?: number
}

export class ClaveSatPaggingDTO extends PageDTO {
  @ApiProperty({ type: ClaveSatDTO, isArray: true })
  readonly data: ClaveSatDTO[]
}