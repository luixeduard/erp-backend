import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class ProveedorDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.person.firstName() })
  readonly nombre: string
  @ApiProperty({ example: faker.lorem.sentence(1) })
  readonly rfc: string
  @ApiProperty({ example: faker.person.firstName() })
  readonly representante: string
  @ApiProperty({ example: faker.company.name() })
  readonly razon_social: string
}

export class ProveedorPaggingDTO extends PageDTO {
  @ApiProperty({ type: ProveedorDTO, isArray: true })
  readonly data: ProveedorDTO[]
}