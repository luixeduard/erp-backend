import { faker } from "@faker-js/faker";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class MedidaDTO extends DBRecordDTO {
  @ApiPropertyOptional({ example: faker.number.int(100) })
  readonly ancho: number
  @ApiPropertyOptional({ example: faker.number.int(100) })
  readonly largo: number
  @ApiPropertyOptional({ example: faker.number.int(100) })
  readonly alto: number
  @ApiPropertyOptional({ example: faker.number.int(100) })
  readonly peso: number
  @ApiPropertyOptional({ example: faker.number.int(100) })
  readonly volumen: number
}

export class MedidaPaggingDTO extends PageDTO {
  @ApiProperty({ type: MedidaDTO, isArray: true })
  readonly data: MedidaDTO[]
}