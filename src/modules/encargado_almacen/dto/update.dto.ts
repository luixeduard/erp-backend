import { PartialType } from '@nestjs/mapped-types';
import { CreateEncargadoAlmacenDTO } from './create.dto';

export class PatchEncargadoAlmacenDTO extends PartialType(CreateEncargadoAlmacenDTO) { }

export class UpdateEncargadoAlmacenDTO extends CreateEncargadoAlmacenDTO { }
