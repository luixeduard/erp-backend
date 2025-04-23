import { PartialType } from '@nestjs/mapped-types';
import { CreateMedidaDTO } from './create.dto';

export class UpdateMedidaDTO extends CreateMedidaDTO { }
export class PatchMedidaDTO extends PartialType(CreateMedidaDTO) { }

