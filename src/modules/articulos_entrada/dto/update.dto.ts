import { PartialType } from '@nestjs/mapped-types';
import { CreateArticulosEntradaDTO } from './create.dto';

export class UpdateArticulosEntradaDTO extends CreateArticulosEntradaDTO { }
export class PatchArticulosEntradaDTO extends PartialType(CreateArticulosEntradaDTO) { }
