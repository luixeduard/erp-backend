import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class UsuarioDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.person.firstName() })
  readonly nombre: string
  @ApiProperty({ example: faker.person.lastName() })
  readonly paterno: string
  @ApiProperty({ example: faker.person.lastName() })
  readonly materno: string
  @ApiProperty({ example: faker.internet.email() })
  readonly email: string
  @ApiProperty({ example: faker.internet.password() })
  readonly pwd: string
}

export class UsuarioPaggingDTO extends PageDTO {
  @ApiProperty({ type: UsuarioDTO, isArray: true })
  readonly data: UsuarioDTO[]
}