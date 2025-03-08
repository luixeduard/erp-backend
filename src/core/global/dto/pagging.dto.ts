import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";


type Order<T> = [keyof T, 'ASC' | 'DESC']

export class PaggingDTO<T> {
  
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly search?: string;

  @ApiPropertyOptional({
    type: 'array', // Especifica que es un array
    items: {
      type: 'array', // Especifica que cada elemento es un array
      items: {
        type: 'string', // Especifica que cada elemento dentro del array es un string
      },
    },
  })
  @Transform(({ value }) => Array.isArray(value) ? value.map(row => JSON.parse(row)): [JSON.parse(value)])
  @IsOptional()
  @IsArray({ each: true }) // Valida que cada elemento sea un array
  readonly order?: Order<T>[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly limit?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly skip?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly where: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  readonly include: string
}