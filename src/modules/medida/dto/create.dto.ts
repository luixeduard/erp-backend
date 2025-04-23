import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";
import { NamedObjectRequiredDTO } from "src/core/global/dto/name_required.dto";

export class CreateMedidaDTO extends NamedObjectRequiredDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly ancho?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly largo?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly alto?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly peso?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  readonly volumen?: number
}
