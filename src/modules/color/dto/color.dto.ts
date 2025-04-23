import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class ColorDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.color.human() })
  readonly name: string
  @ApiProperty({ example: faker.number.int(100) })
  readonly codigo: string
}

export class ColorPaggingDTO extends PageDTO {
  @ApiProperty({ type: ColorDTO, isArray: true })
  readonly data: ColorDTO[]
}