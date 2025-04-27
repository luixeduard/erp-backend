import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivoDTO } from './create.dto';

export class UpdateArchivoDTO extends CreateArchivoDTO { }

export class PatchArchivoDTO extends PartialType(CreateArchivoDTO) { }