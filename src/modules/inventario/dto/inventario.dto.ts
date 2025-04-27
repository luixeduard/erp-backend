import { ApiProperty } from "@nestjs/swagger";
import { DBRecordDTO } from "src/core/global/dto/DBRecord.dto";
import { Clasificacion } from "../enums/clasificacion.enum";
import { faker } from "@faker-js/faker";
import { PageDTO } from "src/core/global/dto/pagging.dto";

export class InventarioDTO extends DBRecordDTO {
  @ApiProperty({ example: faker.number.int(100) })
  readonly almacen_id: number
  @ApiProperty({ example: faker.number.int(100) })
  readonly insumo_id: number
  @ApiProperty({ enum: Clasificacion, example: Clasificacion.PRIMERA })
  readonly clasificacion: Clasificacion
  @ApiProperty({ example: faker.number.int(100) })
  readonly precio?: number
}

export class InventarioPaggingDTO extends PageDTO {
  @ApiProperty({ type: InventarioDTO, isArray: true })
  readonly data: InventarioDTO[]
}