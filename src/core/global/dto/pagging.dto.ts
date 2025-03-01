import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class PaggingDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly search?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly order?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly limit?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly skip?: string;
}