import { PartialType } from '@nestjs/mapped-types';
import { CreateProveedorDTO } from './create.dto';

export class UpdateProveedorDTO extends CreateProveedorDTO { }

export class PatchProveedorDTO extends PartialType(CreateProveedorDTO) { }