import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { PageDTO, TimeStampsDTO } from "src/core/global/dto/pagging.dto";

export class AlmacenDTO extends TimeStampsDTO{
  @ApiProperty({ example: faker.lorem.word() })
  name: string
  @ApiProperty({ example: faker.location.street() })
  direccion: string
  @ApiProperty({ example: faker.location.latitude() })
  coor_x: number
  @ApiProperty({ example: faker.location.latitude() })
  coor_y: number
  @ApiProperty({ example: true })
  enabled: boolean
}

export class AlmacenPagginDTO extends PageDTO {
  @ApiProperty({ type: AlmacenDTO, isArray: true })
  readonly data: AlmacenDTO[]
}