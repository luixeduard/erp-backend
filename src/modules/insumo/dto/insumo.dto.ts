import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { TipoInsumo } from "../enums/tipo_insumo.enum";
import { faker } from "@faker-js/faker";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class InsumoDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.number.int(100) })
  readonly clave: string
  @ApiProperty({ example: faker.lorem.sentence(5) })
  readonly descripcion: string
  @ApiProperty({ example: faker.string.uuid() })
  readonly medida_id: number
  @ApiProperty({ example: faker.string.uuid() })
  readonly color_id: number
  @ApiProperty({ example: TipoInsumo.MATERIA_PRIMA })
  readonly tipo: TipoInsumo
  @ApiPropertyOptional({ example: faker.string.sample(5) })
  readonly clave_unidad_sat: string
  @ApiPropertyOptional({ example: faker.string.uuid() })
  readonly clave_sat_id: number
  @ApiPropertyOptional({ example: faker.number.int(5) })
  readonly costo: number
}

export class InsumoPaggingDTO extends PageDTO {
  @ApiProperty({ type: InsumoDTO, isArray: true })
  readonly data: InsumoDTO[]
}
