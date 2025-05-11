import { PartialType } from '@nestjs/mapped-types';
import { CreateArticulosOrdenDTO } from './create.dto';

export class UpdateArticulosOrdenDTO extends CreateArticulosOrdenDTO { }
export class PatchArticulosOrdenDTO extends PartialType(CreateArticulosOrdenDTO) { }
