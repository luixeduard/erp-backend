import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";

export class ColorDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.color.human() })
  readonly name: string
  @ApiProperty({ example: faker.number.int(100) })
  readonly codigo: string
}