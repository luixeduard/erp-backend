import { PartialType } from '@nestjs/mapped-types';
import { CreateAlmacenDTO } from 'src/modules/almacen/dto/create.dto';

export class UpdatePrecioHistorialDTO extends PartialType(CreateAlmacenDTO) { }