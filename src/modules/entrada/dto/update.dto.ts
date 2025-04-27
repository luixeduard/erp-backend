import { PartialType } from '@nestjs/mapped-types';
import { CreateEntradaDTO } from './create.dto';

export class UpdateEntradaDTO extends CreateEntradaDTO { }

export class PatchEntradaDTO extends PartialType(CreateEntradaDTO) { }