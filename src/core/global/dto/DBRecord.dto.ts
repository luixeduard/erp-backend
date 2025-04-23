import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";

export class DBRecordDTO {
  @ApiProperty({ example: faker.string.uuid() })
  readonly _id: string
  @ApiProperty({ example: faker.date.anytime() })
  readonly createdAt: Date;
  @ApiProperty({ example: faker.date.anytime() })
  readonly updatedAt: Date
}