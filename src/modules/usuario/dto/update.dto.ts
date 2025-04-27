import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDTO } from './create.dto';

export class UpdateUsuarioDTO extends CreateUsuarioDTO { }

export class PatchUsuarioDTO extends PartialType(CreateUsuarioDTO) { }
