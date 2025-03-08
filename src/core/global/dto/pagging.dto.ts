import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsArray, IsBoolean, isJSON, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";


type Order<T> = [keyof T, 'ASC' | 'DESC']

class FunctionArgument {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly value: string; // Valor de la columna o string

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  readonly is_col: boolean = true; // Indica si es una columna (true) o un string (false)
}

export class FunctionRepresentation {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly fn: string; // Nombre de la función (por ejemplo, 'COUNT')

  @ApiProperty({ isArray: true })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FunctionArgument)
  readonly cols: FunctionArgument[]; // Argumentos de la función (pueden ser columnas o strings)

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly as: string;
}

export class PaggingDTO<T> {
  @ApiPropertyOptional()
  @Transform(({ value }) => typeof value === "string" ? [isJSON(value) ? JSON.parse(value) : value] : value.map((val: string) => isJSON(val) ? JSON.parse(val) : val))
  @IsOptional()
  @IsArray()
  @Type(() => FunctionRepresentation, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: String, name: 'string' }, // Para strings
        { value: FunctionRepresentation, name: 'function' }, // Para representaciones de funciones
      ],
    },
  })
  readonly attributes?: (string | FunctionRepresentation)[];

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
  @Transform(({ value }) => Array.isArray(value) ? value.map(row => JSON.parse(row)) : [JSON.parse(value)])
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