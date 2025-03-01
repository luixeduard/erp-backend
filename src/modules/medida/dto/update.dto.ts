import { PartialType } from '@nestjs/mapped-types';
import { CreateMedidaDTO } from './create.dto';

export class UpdateMedidaDTO extends PartialType(CreateMedidaDTO) {}
