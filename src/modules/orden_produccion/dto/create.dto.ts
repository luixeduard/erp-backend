import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { StatusOrden } from "../enum/status.enum";

export class CreateOrdenDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly folio: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly user_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cliente_id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly estimated_date: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly status: StatusOrden
}
